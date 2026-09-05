"""Reglas de negocio del panel: venta neta, margen y rankings de ventas.

Todo se calcula sobre `sale.report` (el modelo de *Análisis de ventas* de Odoo),
que ya expone la venta sin impuestos por línea junto al producto, el cliente y
el equipo de ventas. Los importes son **netos** (sin IVA), coherentes con la
base imponible del Libro de Ventas.
"""

from __future__ import annotations

import calendar
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from typing import Any, Sequence
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

from .config import ConfigError, Settings
from .odoo_client import OdooClient

MODELO_VENTAS = "sale.report"
MODELO_PEDIDOS = "sale.order"

#: Dimensiones de ranking expuestas por el panel -> campo de `sale.report`.
DIMENSIONES: dict[str, dict[str, str]] = {
    "producto": {"campo": "product_id", "etiqueta": "Producto"},
    "cliente": {"campo": "partner_id", "etiqueta": "Cliente"},
    "canal": {"campo": "team_id", "etiqueta": "Canal / Equipo de ventas"},
}

MESES_ES = (
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
)


# --------------------------------------------------------------------- períodos


@dataclass(frozen=True)
class Periodo:
    """Rango de fechas **en hora local** (inclusivo en ambos extremos)."""

    desde: date
    hasta: date

    def __post_init__(self) -> None:
        if self.hasta < self.desde:
            raise ValueError("La fecha 'hasta' no puede ser anterior a 'desde'")

    @property
    def etiqueta(self) -> str:
        if es_mes_completo(self):
            return f"{MESES_ES[self.desde.month - 1].capitalize()} {self.desde.year}"
        return f"{self.desde.isoformat()} a {self.hasta.isoformat()}"


def periodo_de_mes(anio: int, mes: int) -> Periodo:
    """Período que cubre el mes completo indicado."""
    if not 1 <= mes <= 12:
        raise ValueError(f"Mes fuera de rango: {mes}")
    ultimo_dia = calendar.monthrange(anio, mes)[1]
    return Periodo(date(anio, mes, 1), date(anio, mes, ultimo_dia))


def es_mes_completo(periodo: Periodo) -> bool:
    ultimo_dia = calendar.monthrange(periodo.desde.year, periodo.desde.month)[1]
    return (
        periodo.desde.day == 1
        and periodo.hasta.day == ultimo_dia
        and periodo.desde.year == periodo.hasta.year
        and periodo.desde.month == periodo.hasta.month
    )


def desplazar_meses(anio: int, mes: int, delta: int) -> tuple[int, int]:
    """Suma `delta` meses a (anio, mes), con acarreo de año."""
    indice = (anio * 12 + (mes - 1)) + delta
    return indice // 12, indice % 12 + 1


def periodo_anterior(periodo: Periodo) -> Periodo:
    """Período de comparación inmediatamente anterior.

    Para un mes completo devuelve el mes calendario anterior; para un rango
    arbitrario, el rango de igual duración que termina justo antes.
    """
    if es_mes_completo(periodo):
        anio, mes = desplazar_meses(periodo.desde.year, periodo.desde.month, -1)
        return periodo_de_mes(anio, mes)
    dias = (periodo.hasta - periodo.desde).days
    hasta = periodo.desde - timedelta(days=1)
    return Periodo(hasta - timedelta(days=dias), hasta)


def periodo_anio_anterior(periodo: Periodo) -> Periodo:
    """Mismo período del año anterior (ajustando febrero en años bisiestos)."""
    if es_mes_completo(periodo):
        return periodo_de_mes(periodo.desde.year - 1, periodo.desde.month)
    return Periodo(_retroceder_un_anio(periodo.desde), _retroceder_un_anio(periodo.hasta))


def _retroceder_un_anio(dia: date) -> date:
    try:
        return dia.replace(year=dia.year - 1)
    except ValueError:  # 29 de febrero de un año bisiesto
        return dia.replace(year=dia.year - 1, day=28)


def zona_horaria(nombre: str) -> ZoneInfo:
    try:
        return ZoneInfo(nombre)
    except ZoneInfoNotFoundError as exc:
        raise ConfigError(
            f"Zona horaria desconocida: {nombre!r}. Corrija PANEL_TIMEZONE "
            "(por ejemplo America/Santiago) o instale el paquete 'tzdata'."
        ) from exc


def rango_utc(periodo: Periodo, tz_nombre: str) -> tuple[str, str]:
    """Convierte el período local al rango UTC que Odoo almacena en `date`.

    Odoo guarda las fechas y horas en UTC. Filtrar con las fechas locales tal
    cual desplazaría las ventas de comienzo y fin de mes al mes vecino —
    exactamente el descuadre que aparece al conciliar el cierre mensual.
    """
    tz = zona_horaria(tz_nombre)
    inicio = datetime.combine(periodo.desde, time.min, tzinfo=tz)
    fin = datetime.combine(periodo.hasta, time.max, tzinfo=tz)
    utc = ZoneInfo("UTC")
    formato = "%Y-%m-%d %H:%M:%S"
    return inicio.astimezone(utc).strftime(formato), fin.astimezone(utc).strftime(formato)


# ---------------------------------------------------------------------- dominios


def dominio_ventas(settings: Settings, periodo: Periodo) -> list[Any]:
    """Dominio Odoo para las ventas confirmadas del período."""
    desde, hasta = rango_utc(periodo, settings.timezone)
    dominio: list[Any] = [
        ("date", ">=", desde),
        ("date", "<=", hasta),
        ("state", "in", list(settings.sale_states)),
    ]
    if settings.company_id is not None:
        dominio.append(("company_id", "=", settings.company_id))
    return dominio


def dominio_pedidos(settings: Settings, periodo: Periodo) -> list[Any]:
    """Dominio Odoo para los pedidos de venta confirmados del período."""
    desde, hasta = rango_utc(periodo, settings.timezone)
    dominio: list[Any] = [
        ("date_order", ">=", desde),
        ("date_order", "<=", hasta),
        ("state", "in", list(settings.sale_states)),
    ]
    if settings.company_id is not None:
        dominio.append(("company_id", "=", settings.company_id))
    return dominio


# ----------------------------------------------------------------------- cálculo


def variacion_pct(actual: float | None, referencia: float | None) -> float | None:
    """Variación porcentual contra un período de referencia.

    Devuelve `None` cuando la referencia es cero o desconocida: dividir por cero
    daría un "+∞%" que no significa nada en un panel de gestión.
    """
    if actual is None or referencia is None or referencia == 0:
        return None
    return (actual - referencia) / abs(referencia) * 100.0


def _campos_suma(client: OdooClient) -> tuple[list[str], bool]:
    """Campos a sumar en `sale.report` y si el margen está disponible.

    `margin` sólo existe si el módulo *Margen en ventas* (`sale_margin`) está
    instalado; sin él el panel muestra la venta pero no el margen.
    """
    hay_margen = client.has_field(MODELO_VENTAS, "margin")
    campos = ["price_subtotal", "product_uom_qty"]
    if hay_margen:
        campos.append("margin")
    return campos, hay_margen


def _totales(fila: dict[str, Any] | None, hay_margen: bool) -> dict[str, Any]:
    """Convierte una fila agregada de Odoo en los indicadores del panel."""
    fila = fila or {}
    venta_neta = float(fila.get("price_subtotal") or 0.0)
    unidades = float(fila.get("product_uom_qty") or 0.0)
    lineas = int(fila.get("__count") or 0)

    margen: float | None = None
    costo: float | None = None
    margen_pct: float | None = None
    if hay_margen:
        margen = float(fila.get("margin") or 0.0)
        costo = venta_neta - margen
        if venta_neta:
            margen_pct = margen / venta_neta * 100.0

    return {
        "venta_neta": venta_neta,
        "costo": costo,
        "margen": margen,
        "margen_pct": margen_pct,
        "unidades": unidades,
        "lineas": lineas,
    }


def totales_periodo(client: OdooClient, settings: Settings, periodo: Periodo) -> dict[str, Any]:
    """Indicadores agregados de un período (sin comparativos)."""
    campos, hay_margen = _campos_suma(client)
    filas = client.aggregate(MODELO_VENTAS, dominio_ventas(settings, periodo), sums=campos)
    return _totales(filas[0] if filas else None, hay_margen)


def resumen(client: OdooClient, settings: Settings, periodo: Periodo) -> dict[str, Any]:
    """Venta neta, costo y margen del período, comparados con mes anterior y año anterior."""
    actual = totales_periodo(client, settings, periodo)
    anterior = totales_periodo(client, settings, periodo_anterior(periodo))
    anio_anterior = totales_periodo(client, settings, periodo_anio_anterior(periodo))

    pedidos = client.execute_kw(
        MODELO_PEDIDOS, "search_count", [dominio_pedidos(settings, periodo)]
    )
    pedidos = int(pedidos or 0)
    actual["pedidos"] = pedidos
    actual["ticket_promedio"] = actual["venta_neta"] / pedidos if pedidos else None

    actual["comparativo"] = {
        "mes_anterior": {
            "etiqueta": periodo_anterior(periodo).etiqueta,
            "venta_neta": anterior["venta_neta"],
            "margen": anterior["margen"],
            "variacion_venta_pct": variacion_pct(actual["venta_neta"], anterior["venta_neta"]),
            "variacion_margen_pct": variacion_pct(actual["margen"], anterior["margen"]),
        },
        "anio_anterior": {
            "etiqueta": periodo_anio_anterior(periodo).etiqueta,
            "venta_neta": anio_anterior["venta_neta"],
            "margen": anio_anterior["margen"],
            "variacion_venta_pct": variacion_pct(actual["venta_neta"], anio_anterior["venta_neta"]),
            "variacion_margen_pct": variacion_pct(actual["margen"], anio_anterior["margen"]),
        },
    }
    return actual


def tendencia(
    client: OdooClient, settings: Settings, periodo: Periodo, meses: int = 12
) -> list[dict[str, Any]]:
    """Serie mensual de venta neta y margen que termina en el mes del período.

    Se consulta mes a mes en vez de agrupar por `date:month` porque Odoo
    devuelve esa agrupación como texto ya localizado, distinto entre versiones
    e idiomas, y no sirve para construir una serie estable.
    """
    if meses < 1:
        raise ValueError("La tendencia requiere al menos un mes")

    anio_final, mes_final = periodo.hasta.year, periodo.hasta.month
    serie = []
    for desplazamiento in range(meses - 1, -1, -1):
        anio, mes = desplazar_meses(anio_final, mes_final, -desplazamiento)
        mes_periodo = periodo_de_mes(anio, mes)
        totales = totales_periodo(client, settings, mes_periodo)
        serie.append(
            {
                "anio": anio,
                "mes": mes,
                "etiqueta": f"{MESES_ES[mes - 1][:3]} {str(anio)[2:]}",
                "etiqueta_larga": mes_periodo.etiqueta,
                "venta_neta": totales["venta_neta"],
                "margen": totales["margen"],
                "margen_pct": totales["margen_pct"],
            }
        )
    return serie


def _nombre_grupo(valor: Any) -> str:
    """Nombre legible de un valor many2one devuelto por Odoo."""
    if isinstance(valor, (list, tuple)) and len(valor) == 2:
        return str(valor[1])
    if valor in (False, None, ""):
        return "Sin asignar"
    return str(valor)


def _id_grupo(valor: Any) -> int | None:
    if isinstance(valor, (list, tuple)) and len(valor) == 2:
        return int(valor[0])
    return None


def ranking(
    client: OdooClient,
    settings: Settings,
    periodo: Periodo,
    dimension: str,
    limite: int = 10,
) -> dict[str, Any]:
    """Top `limite` de ventas del período por producto, cliente o canal."""
    if dimension not in DIMENSIONES:
        raise ValueError(
            f"Dimensión desconocida: {dimension!r}. Use una de {sorted(DIMENSIONES)}."
        )
    if limite < 1:
        raise ValueError("El límite debe ser al menos 1")

    campo = DIMENSIONES[dimension]["campo"]
    if not client.has_field(MODELO_VENTAS, campo):
        return {
            "dimension": dimension,
            "etiqueta": DIMENSIONES[dimension]["etiqueta"],
            "disponible": False,
            "filas": [],
            "total_periodo": 0.0,
        }

    campos, hay_margen = _campos_suma(client)
    filas = client.aggregate(
        MODELO_VENTAS,
        dominio_ventas(settings, periodo),
        sums=campos,
        groupby=[campo],
        limit=limite,
        order_field="price_subtotal",
        order_desc=True,
    )

    total = totales_periodo(client, settings, periodo)["venta_neta"]
    resultado = []
    for fila in filas:
        totales = _totales(fila, hay_margen)
        totales["id"] = _id_grupo(fila.get(campo))
        totales["nombre"] = _nombre_grupo(fila.get(campo))
        totales["participacion_pct"] = (
            totales["venta_neta"] / total * 100.0 if total else None
        )
        resultado.append(totales)

    return {
        "dimension": dimension,
        "etiqueta": DIMENSIONES[dimension]["etiqueta"],
        "disponible": True,
        "filas": resultado,
        "total_periodo": total,
    }


def panel(
    client: OdooClient,
    settings: Settings,
    periodo: Periodo,
    meses_tendencia: int = 12,
    limite_ranking: int = 10,
) -> dict[str, Any]:
    """Arma la respuesta completa que consume el frontend."""
    _, hay_margen = _campos_suma(client)
    return {
        "organizacion": settings.organization,
        "moneda": settings.currency,
        "zona_horaria": settings.timezone,
        "margen_disponible": hay_margen,
        "periodo": {
            "desde": periodo.desde.isoformat(),
            "hasta": periodo.hasta.isoformat(),
            "etiqueta": periodo.etiqueta,
        },
        "resumen": resumen(client, settings, periodo),
        "tendencia": tendencia(client, settings, periodo, meses_tendencia),
        "rankings": {
            dimension: ranking(client, settings, periodo, dimension, limite_ranking)
            for dimension in DIMENSIONES
        },
    }
