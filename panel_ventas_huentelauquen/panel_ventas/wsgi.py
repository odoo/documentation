"""Aplicación WSGI del panel: sirve el frontend y la API JSON de ventas.

No usa framework alguno para que el panel pueda instalarse en el servidor de
Hacienda Huentelauquén sin dependencias externas. En producción se puede
ejecutar con cualquier servidor WSGI (waitress, gunicorn) apuntando a
`panel_ventas.wsgi:crear_app()`.
"""

from __future__ import annotations

import json
import mimetypes
import threading
import time
from datetime import date, datetime
from pathlib import Path
from typing import Any, Callable, Iterable
from urllib.parse import parse_qs
from zoneinfo import ZoneInfo

from . import __version__
from .config import ConfigError, Settings
from .metrics import DIMENSIONES, Periodo, panel, periodo_de_mes, ranking
from .odoo_client import OdooAuthError, OdooClient, OdooError

DIRECTORIO_ESTATICO = Path(__file__).parent / "static"


class ErrorDeSolicitud(ValueError):
    """Los parámetros enviados por el navegador no son válidos (HTTP 400)."""


class _CacheTTL:
    """Caché en memoria con expiración, para no golpear Odoo en cada refresco."""

    def __init__(self, ttl: int) -> None:
        self._ttl = ttl
        self._datos: dict[str, tuple[float, Any]] = {}
        self._lock = threading.Lock()

    def obtener_o_calcular(self, clave: str, calcular: Callable[[], Any]) -> Any:
        if self._ttl <= 0:
            return calcular()
        ahora = time.monotonic()
        with self._lock:
            entrada = self._datos.get(clave)
            if entrada and ahora - entrada[0] < self._ttl:
                return entrada[1]
        # El cálculo se hace fuera del lock: una consulta lenta a Odoo no debe
        # bloquear a los demás usuarios del panel.
        valor = calcular()
        with self._lock:
            self._datos[clave] = (time.monotonic(), valor)
        return valor

    def limpiar(self) -> None:
        with self._lock:
            self._datos.clear()


# ------------------------------------------------------------------- parámetros


def _un_valor(params: dict[str, list[str]], nombre: str) -> str | None:
    valores = params.get(nombre)
    return valores[0].strip() if valores and valores[0].strip() else None


def _entero(params: dict[str, list[str]], nombre: str, minimo: int, maximo: int) -> int | None:
    crudo = _un_valor(params, nombre)
    if crudo is None:
        return None
    try:
        valor = int(crudo)
    except ValueError as exc:
        raise ErrorDeSolicitud(f"El parámetro '{nombre}' debe ser un número entero") from exc
    if not minimo <= valor <= maximo:
        raise ErrorDeSolicitud(f"El parámetro '{nombre}' debe estar entre {minimo} y {maximo}")
    return valor


def _fecha(params: dict[str, list[str]], nombre: str) -> date | None:
    crudo = _un_valor(params, nombre)
    if crudo is None:
        return None
    try:
        return date.fromisoformat(crudo)
    except ValueError as exc:
        raise ErrorDeSolicitud(
            f"El parámetro '{nombre}' debe tener formato AAAA-MM-DD, se recibió {crudo!r}"
        ) from exc


def resolver_periodo(params: dict[str, list[str]], settings: Settings) -> Periodo:
    """Determina el período pedido: por mes, por rango libre, o el mes en curso."""
    anio = _entero(params, "anio", 1990, 2100)
    mes = _entero(params, "mes", 1, 12)
    desde = _fecha(params, "desde")
    hasta = _fecha(params, "hasta")

    if anio and mes:
        return periodo_de_mes(anio, mes)
    if desde and hasta:
        try:
            return Periodo(desde, hasta)
        except ValueError as exc:
            raise ErrorDeSolicitud(str(exc)) from exc
    if desde or hasta or anio or mes:
        raise ErrorDeSolicitud(
            "Indique 'anio' y 'mes' juntos, o bien 'desde' y 'hasta' juntos."
        )

    hoy = datetime.now(ZoneInfo(settings.timezone)).date()
    return periodo_de_mes(hoy.year, hoy.month)


# --------------------------------------------------------------------- respuesta


def _json_seguro(valor: Any) -> Any:
    if isinstance(valor, (date, datetime)):
        return valor.isoformat()
    raise TypeError(f"No serializable a JSON: {type(valor).__name__}")


def _respuesta_json(cuerpo: Any, estado: str = "200 OK") -> tuple[str, list[tuple[str, str]], bytes]:
    datos = json.dumps(cuerpo, ensure_ascii=False, default=_json_seguro).encode("utf-8")
    cabeceras = [
        ("Content-Type", "application/json; charset=utf-8"),
        ("Content-Length", str(len(datos))),
        ("Cache-Control", "no-store"),
    ]
    return estado, cabeceras, datos


def _respuesta_estatica(ruta_relativa: str) -> tuple[str, list[tuple[str, str]], bytes]:
    """Sirve un archivo de `static/`, bloqueando cualquier salto de directorio."""
    raiz = DIRECTORIO_ESTATICO.resolve()
    destino = (raiz / ruta_relativa).resolve()
    if not destino.is_relative_to(raiz) or not destino.is_file():
        return _respuesta_json({"error": "Recurso no encontrado"}, "404 Not Found")

    tipo = mimetypes.guess_type(destino.name)[0] or "application/octet-stream"
    if tipo.startswith("text/") or tipo in ("application/javascript", "application/json"):
        tipo = f"{tipo}; charset=utf-8"
    datos = destino.read_bytes()
    cabeceras = [
        ("Content-Type", tipo),
        ("Content-Length", str(len(datos))),
        ("Cache-Control", "no-cache"),
    ]
    return "200 OK", cabeceras, datos


# ------------------------------------------------------------------ aplicación


def crear_app(settings: Settings | None = None, client: OdooClient | None = None) -> Callable:
    """Construye la aplicación WSGI.

    `client` permite inyectar un cliente falso en las pruebas sin levantar Odoo.
    """
    settings = settings or Settings.from_env()
    client = client or OdooClient(settings)
    cache = _CacheTTL(settings.cache_ttl)

    def _clave(prefijo: str, periodo: Periodo, *extra: Any) -> str:
        return "|".join(
            [prefijo, periodo.desde.isoformat(), periodo.hasta.isoformat(), *map(str, extra)]
        )

    def _ruta_salud() -> tuple[str, list[tuple[str, str]], bytes]:
        version = client.version()
        return _respuesta_json(
            {
                "estado": "ok",
                "panel_version": __version__,
                "odoo": {
                    "url": settings.odoo_url,
                    "base_de_datos": settings.odoo_db,
                    "version": version.get("server_version"),
                    "uid": client.uid,
                },
                "margen_disponible": client.has_field("sale.report", "margin"),
            }
        )

    def _ruta_panel(params: dict[str, list[str]]) -> tuple[str, list[tuple[str, str]], bytes]:
        periodo = resolver_periodo(params, settings)
        meses = _entero(params, "meses", 1, 36) or 12
        limite = _entero(params, "limite", 1, 50) or 10
        datos = cache.obtener_o_calcular(
            _clave("panel", periodo, meses, limite),
            lambda: panel(client, settings, periodo, meses, limite),
        )
        return _respuesta_json(datos)

    def _ruta_ranking(params: dict[str, list[str]]) -> tuple[str, list[tuple[str, str]], bytes]:
        periodo = resolver_periodo(params, settings)
        dimension = _un_valor(params, "dim") or "producto"
        if dimension not in DIMENSIONES:
            raise ErrorDeSolicitud(
                f"Dimensión desconocida: {dimension!r}. Use una de {sorted(DIMENSIONES)}."
            )
        limite = _entero(params, "limite", 1, 50) or 10
        datos = cache.obtener_o_calcular(
            _clave("ranking", periodo, dimension, limite),
            lambda: ranking(client, settings, periodo, dimension, limite),
        )
        return _respuesta_json(datos)

    def app(entorno: dict[str, Any], iniciar_respuesta: Callable) -> Iterable[bytes]:
        metodo = entorno.get("REQUEST_METHOD", "GET").upper()
        ruta = entorno.get("PATH_INFO", "/") or "/"
        params = parse_qs(entorno.get("QUERY_STRING", ""))

        try:
            if metodo not in ("GET", "HEAD"):
                estado, cabeceras, cuerpo = _respuesta_json(
                    {"error": "Este panel es de solo lectura: use GET."},
                    "405 Method Not Allowed",
                )
            elif ruta in ("/", "/index.html"):
                estado, cabeceras, cuerpo = _respuesta_estatica("index.html")
            elif ruta.startswith("/static/"):
                estado, cabeceras, cuerpo = _respuesta_estatica(ruta[len("/static/") :])
            elif ruta == "/api/salud":
                estado, cabeceras, cuerpo = _ruta_salud()
            elif ruta == "/api/panel":
                estado, cabeceras, cuerpo = _ruta_panel(params)
            elif ruta == "/api/ranking":
                estado, cabeceras, cuerpo = _ruta_ranking(params)
            else:
                estado, cabeceras, cuerpo = _respuesta_json(
                    {"error": f"Ruta no encontrada: {ruta}"}, "404 Not Found"
                )
        except (ErrorDeSolicitud, ValueError) as exc:
            estado, cabeceras, cuerpo = _respuesta_json({"error": str(exc)}, "400 Bad Request")
        except OdooAuthError as exc:
            estado, cabeceras, cuerpo = _respuesta_json({"error": str(exc)}, "401 Unauthorized")
        except (OdooError, ConfigError) as exc:
            estado, cabeceras, cuerpo = _respuesta_json({"error": str(exc)}, "502 Bad Gateway")

        iniciar_respuesta(estado, cabeceras)
        return [b""] if metodo == "HEAD" else [cuerpo]

    return app
