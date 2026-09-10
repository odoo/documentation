"""Cliente XML-RPC de solo lectura contra Odoo.

El panel nunca escribe en Odoo: usa el API externo (`/xmlrpc/2/object`) para
leer agregados de ventas. Conviene crear en Odoo un usuario dedicado con
permisos de solo lectura sobre Ventas y usar una *clave de API* en vez de la
contraseña del usuario.
"""

from __future__ import annotations

import socket
import xmlrpc.client
from typing import Any, Iterable, Sequence

from .config import Settings


class OdooError(RuntimeError):
    """Falla al hablar con Odoo."""


class OdooAuthError(OdooError):
    """Odoo rechazó las credenciales."""


class _TimeoutTransport(xmlrpc.client.Transport):
    """Transport HTTP con timeout, para que el panel no se cuelgue indefinidamente."""

    def __init__(self, timeout: int) -> None:
        super().__init__()
        self._timeout = timeout

    def make_connection(self, host):  # type: ignore[no-untyped-def]
        connection = super().make_connection(host)
        connection.timeout = self._timeout
        return connection


class _TimeoutSafeTransport(xmlrpc.client.SafeTransport):
    """Igual que `_TimeoutTransport` pero sobre HTTPS."""

    def __init__(self, timeout: int) -> None:
        super().__init__()
        self._timeout = timeout

    def make_connection(self, host):  # type: ignore[no-untyped-def]
        connection = super().make_connection(host)
        connection.timeout = self._timeout
        return connection


class OdooClient:
    """Envoltorio delgado sobre el API externo de Odoo."""

    def __init__(self, settings: Settings) -> None:
        self._settings = settings
        self._uid: int | None = None
        self._fields_cache: dict[str, set[str]] = {}
        # Odoo 19 reemplazó `read_group` por `formatted_read_group`. Se detecta
        # en la primera consulta y se recuerda cuál acepta este servidor.
        self._group_api: str | None = None

    # ------------------------------------------------------------------ conexión

    def _transport(self) -> xmlrpc.client.Transport:
        timeout = self._settings.request_timeout
        if self._settings.odoo_url.startswith("https://"):
            return _TimeoutSafeTransport(timeout)
        return _TimeoutTransport(timeout)

    def _proxy(self, endpoint: str) -> xmlrpc.client.ServerProxy:
        return xmlrpc.client.ServerProxy(
            f"{self._settings.odoo_url}/xmlrpc/2/{endpoint}",
            transport=self._transport(),
            allow_none=True,
        )

    def version(self) -> dict[str, Any]:
        """Devuelve la versión del servidor Odoo (sirve de prueba de conectividad)."""
        return self._call(lambda: self._proxy("common").version())

    @property
    def uid(self) -> int:
        """Identificador del usuario autenticado (se autentica una sola vez)."""
        if self._uid is None:
            uid = self._call(
                lambda: self._proxy("common").authenticate(
                    self._settings.odoo_db,
                    self._settings.odoo_username,
                    self._settings.odoo_password,
                    {},
                )
            )
            if not uid:
                raise OdooAuthError(
                    "Odoo rechazó las credenciales. Revise ODOO_DB, ODOO_USERNAME y "
                    "ODOO_PASSWORD (si usa clave de API, debe ir en ODOO_PASSWORD)."
                )
            self._uid = int(uid)
        return self._uid

    @staticmethod
    def _call(fn):  # type: ignore[no-untyped-def]
        """Ejecuta una llamada XML-RPC traduciendo los errores a `OdooError`."""
        try:
            return fn()
        except xmlrpc.client.Fault as fault:
            raise OdooError(f"Odoo respondió con un error: {fault.faultString}") from fault
        except (socket.timeout, TimeoutError) as exc:
            raise OdooError(
                "Odoo no respondió dentro del tiempo permitido. "
                "Suba PANEL_REQUEST_TIMEOUT o revise la conectividad."
            ) from exc
        except OSError as exc:
            raise OdooError(f"No se pudo conectar con Odoo: {exc}") from exc

    def execute_kw(
        self,
        model: str,
        method: str,
        args: Sequence[Any],
        kwargs: dict[str, Any] | None = None,
    ) -> Any:
        """Invoca `model.method(*args, **kwargs)` en Odoo."""
        return self._call(
            lambda: self._proxy("object").execute_kw(
                self._settings.odoo_db,
                self.uid,
                self._settings.odoo_password,
                model,
                method,
                list(args),
                kwargs or {},
            )
        )

    # -------------------------------------------------------------- introspección

    def fields_of(self, model: str) -> set[str]:
        """Nombres de campo disponibles en `model` (cacheado por proceso).

        Se usa para degradar con elegancia: por ejemplo `margin` sólo existe en
        `sale.report` si el módulo *Margen en ventas* está instalado.
        """
        if model not in self._fields_cache:
            descripcion = self.execute_kw(model, "fields_get", [[], ["type"]])
            self._fields_cache[model] = set(descripcion or {})
        return self._fields_cache[model]

    def has_field(self, model: str, field: str) -> bool:
        return field in self.fields_of(model)

    # ---------------------------------------------------------------- agregación

    def aggregate(
        self,
        model: str,
        domain: Sequence[Any],
        sums: Iterable[str],
        groupby: Sequence[str] = (),
        limit: int | None = None,
        order_field: str | None = None,
        order_desc: bool = True,
    ) -> list[dict[str, Any]]:
        """Suma `sums` sobre `domain`, opcionalmente agrupando por `groupby`.

        Devuelve una lista de diccionarios con las claves de `groupby`, cada
        campo de `sums` ya sumado, y `__count` con el número de líneas del grupo.
        Normaliza las diferencias entre `read_group` (Odoo ≤18) y
        `formatted_read_group` (Odoo 19+).
        """
        sums = list(sums)
        groupby = list(groupby)

        if self._group_api is None:
            # Se prueba primero la API clásica y, si el servidor ya no la expone,
            # se cae a la nueva. El resultado se recuerda para el resto del proceso.
            try:
                filas = self._read_group(model, domain, sums, groupby, limit, order_field, order_desc)
            except OdooError:
                filas = self._formatted_read_group(
                    model, domain, sums, groupby, limit, order_field, order_desc
                )
                self._group_api = "formatted_read_group"
            else:
                self._group_api = "read_group"
            return filas

        if self._group_api == "read_group":
            return self._read_group(model, domain, sums, groupby, limit, order_field, order_desc)
        return self._formatted_read_group(model, domain, sums, groupby, limit, order_field, order_desc)

    def _read_group(
        self,
        model: str,
        domain: Sequence[Any],
        sums: list[str],
        groupby: list[str],
        limit: int | None,
        order_field: str | None,
        order_desc: bool,
    ) -> list[dict[str, Any]]:
        kwargs: dict[str, Any] = {"lazy": False}
        if limit:
            kwargs["limit"] = limit
        if order_field:
            kwargs["orderby"] = f"{order_field} {'desc' if order_desc else 'asc'}"
        filas = self.execute_kw(model, "read_group", [list(domain), sums, groupby], kwargs) or []
        return [{k: v for k, v in fila.items() if not k.startswith("__") or k == "__count"} for fila in filas]

    def _formatted_read_group(
        self,
        model: str,
        domain: Sequence[Any],
        sums: list[str],
        groupby: list[str],
        limit: int | None,
        order_field: str | None,
        order_desc: bool,
    ) -> list[dict[str, Any]]:
        agregados = [f"{campo}:sum" for campo in sums] + ["__count"]
        kwargs: dict[str, Any] = {"groupby": groupby, "aggregates": agregados}
        if limit:
            kwargs["limit"] = limit
        if order_field:
            kwargs["order"] = f"{order_field}:sum {'DESC' if order_desc else 'ASC'}"
        filas = self.execute_kw(model, "formatted_read_group", [list(domain)], kwargs) or []
        normalizadas = []
        for fila in filas:
            normalizada = {}
            for clave, valor in fila.items():
                normalizada[clave[: -len(":sum")] if clave.endswith(":sum") else clave] = valor
            normalizadas.append(normalizada)
        return normalizadas
