"""Odoo falso en memoria para probar el panel sin un servidor real.

Evalúa los dominios y agrupaciones que usa el panel sobre una lista de líneas,
de modo que las pruebas ejerciten el cálculo real y no un doble trivial.
"""

from __future__ import annotations

from typing import Any, Iterable, Sequence


def _cumple(linea: dict[str, Any], condicion: Sequence[Any]) -> bool:
    campo, operador, esperado = condicion
    valor = linea.get(campo)
    if isinstance(valor, tuple):  # many2one almacenado como (id, nombre)
        valor = valor[0]
    if operador == "=":
        return valor == esperado
    if operador == "!=":
        return valor != esperado
    if operador == "in":
        return valor in esperado
    if operador == ">=":
        return valor >= esperado
    if operador == "<=":
        return valor <= esperado
    if operador == ">":
        return valor > esperado
    if operador == "<":
        return valor < esperado
    raise NotImplementedError(f"Operador no soportado en el doble de pruebas: {operador}")


def filtrar(lineas: Iterable[dict[str, Any]], dominio: Sequence[Any]) -> list[dict[str, Any]]:
    return [linea for linea in lineas if all(_cumple(linea, cond) for cond in dominio)]


class OdooFalso:
    """Implementa la superficie de `OdooClient` que consume el panel."""

    def __init__(
        self,
        lineas: list[dict[str, Any]] | None = None,
        pedidos: list[dict[str, Any]] | None = None,
        campos: set[str] | None = None,
    ) -> None:
        self.lineas = lineas or []
        self.pedidos = pedidos or []
        self.campos = campos if campos is not None else {
            "date", "state", "company_id", "product_id", "partner_id",
            "team_id", "price_subtotal", "product_uom_qty", "margin",
        }
        self.llamadas: list[tuple[str, str]] = []

    # -- superficie usada por el panel -------------------------------------

    def version(self) -> dict[str, Any]:
        return {"server_version": "19.0"}

    @property
    def uid(self) -> int:
        return 7

    def fields_of(self, model: str) -> set[str]:
        return set(self.campos)

    def has_field(self, model: str, field: str) -> bool:
        return field in self.campos

    def execute_kw(self, model: str, method: str, args, kwargs=None):
        self.llamadas.append((model, method))
        if method == "search_count":
            return len(filtrar(self.pedidos, args[0]))
        raise NotImplementedError(f"{model}.{method} no está en el doble de pruebas")

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
        self.llamadas.append((model, "aggregate"))
        sums = [campo for campo in sums if campo in self.campos]
        seleccionadas = filtrar(self.lineas, domain)

        if not groupby:
            if not seleccionadas:
                return []
            fila = {campo: sum(l.get(campo, 0.0) for l in seleccionadas) for campo in sums}
            fila["__count"] = len(seleccionadas)
            return [fila]

        campo_grupo = groupby[0]
        grupos: dict[Any, list[dict[str, Any]]] = {}
        for linea in seleccionadas:
            grupos.setdefault(linea.get(campo_grupo), []).append(linea)

        filas = []
        for clave, miembros in grupos.items():
            fila = {campo: sum(l.get(campo, 0.0) for l in miembros) for campo in sums}
            fila["__count"] = len(miembros)
            fila[campo_grupo] = list(clave) if isinstance(clave, tuple) else clave
            filas.append(fila)

        if order_field:
            filas.sort(key=lambda f: f.get(order_field, 0.0), reverse=order_desc)
        return filas[:limit] if limit else filas
