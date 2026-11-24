"""Pruebas del cálculo de venta neta, margen y rankings."""

from __future__ import annotations

import unittest
from datetime import date

from panel_ventas.config import Settings
from panel_ventas.metrics import (
    Periodo,
    desplazar_meses,
    es_mes_completo,
    panel,
    periodo_anio_anterior,
    periodo_anterior,
    periodo_de_mes,
    ranking,
    rango_utc,
    resumen,
    tendencia,
    totales_periodo,
    variacion_pct,
)
from tests.fakes import OdooFalso

AJUSTES = Settings(
    odoo_url="https://odoo.example.cl",
    odoo_db="huentelauquen",
    odoo_username="panel",
    odoo_password="clave",
    timezone="America/Santiago",
    currency="CLP",
)


def linea(fecha_utc: str, neto: float, margen: float, producto, cliente, canal, qty=1.0):
    return {
        "date": fecha_utc,
        "state": "sale",
        "price_subtotal": neto,
        "margin": margen,
        "product_uom_qty": qty,
        "product_id": producto,
        "partner_id": cliente,
        "team_id": canal,
    }


QUESO = (1, "Queso de cabra 500 g")
MIEL = (2, "Miel de ulmo 1 kg")
CLIENTE_A = (10, "Supermercados del Norte SpA")
CLIENTE_B = (11, "Almacén La Serena Ltda.")
CANAL = (3, "Venta directa")


class PeriodosTest(unittest.TestCase):
    def test_mes_completo(self):
        agosto = periodo_de_mes(2026, 8)
        self.assertEqual(agosto.desde, date(2026, 8, 1))
        self.assertEqual(agosto.hasta, date(2026, 8, 31))
        self.assertTrue(es_mes_completo(agosto))
        self.assertEqual(agosto.etiqueta, "Agosto 2026")

    def test_febrero_bisiesto(self):
        self.assertEqual(periodo_de_mes(2024, 2).hasta, date(2024, 2, 29))

    def test_desplazar_meses_cruza_el_anio(self):
        self.assertEqual(desplazar_meses(2026, 1, -1), (2025, 12))
        self.assertEqual(desplazar_meses(2026, 12, 1), (2027, 1))
        self.assertEqual(desplazar_meses(2026, 3, -14), (2025, 1))

    def test_periodo_anterior_de_un_mes_es_el_mes_calendario(self):
        anterior = periodo_anterior(periodo_de_mes(2026, 1))
        self.assertEqual((anterior.desde, anterior.hasta), (date(2025, 12, 1), date(2025, 12, 31)))

    def test_periodo_anterior_de_un_rango_libre_conserva_la_duracion(self):
        rango = Periodo(date(2026, 8, 10), date(2026, 8, 19))  # 10 días
        anterior = periodo_anterior(rango)
        self.assertEqual((anterior.desde, anterior.hasta), (date(2026, 7, 31), date(2026, 8, 9)))

    def test_anio_anterior_ajusta_el_29_de_febrero(self):
        rango = Periodo(date(2024, 2, 29), date(2024, 2, 29))
        anterior = periodo_anio_anterior(rango)
        self.assertEqual(anterior.desde, date(2023, 2, 28))

    def test_periodo_invertido_es_rechazado(self):
        with self.assertRaises(ValueError):
            Periodo(date(2026, 8, 31), date(2026, 8, 1))


class RangoUtcTest(unittest.TestCase):
    """Chile va detrás de UTC, así que el mes local empieza *después* en UTC."""

    def test_agosto_en_horario_de_invierno(self):
        desde, hasta = rango_utc(periodo_de_mes(2026, 8), "America/Santiago")
        self.assertEqual(desde, "2026-08-01 04:00:00")
        self.assertEqual(hasta, "2026-09-01 03:59:59")

    def test_enero_en_horario_de_verano(self):
        desde, hasta = rango_utc(periodo_de_mes(2026, 1), "America/Santiago")
        self.assertEqual(desde, "2026-01-01 03:00:00")
        self.assertEqual(hasta, "2026-02-01 02:59:59")


class VariacionTest(unittest.TestCase):
    def test_variacion_normal(self):
        self.assertAlmostEqual(variacion_pct(150.0, 100.0), 50.0)
        self.assertAlmostEqual(variacion_pct(80.0, 100.0), -20.0)

    def test_referencia_cero_o_nula_no_produce_infinito(self):
        self.assertIsNone(variacion_pct(150.0, 0.0))
        self.assertIsNone(variacion_pct(150.0, None))
        self.assertIsNone(variacion_pct(None, 100.0))


class TotalesTest(unittest.TestCase):
    def setUp(self):
        self.cliente = OdooFalso([
            linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL, 10),
            linea("2026-08-20 13:00:00", 500_000, 100_000, MIEL, CLIENTE_B, CANAL, 5),
            # Julio: sirve de base de comparación.
            linea("2026-07-10 13:00:00", 800_000, 240_000, QUESO, CLIENTE_A, CANAL, 8),
        ])

    def test_venta_costo_y_margen(self):
        totales = totales_periodo(self.cliente, AJUSTES, periodo_de_mes(2026, 8))
        self.assertEqual(totales["venta_neta"], 1_500_000)
        self.assertEqual(totales["margen"], 500_000)
        self.assertEqual(totales["costo"], 1_000_000)
        self.assertAlmostEqual(totales["margen_pct"], 33.3333, places=3)
        self.assertEqual(totales["unidades"], 15)
        self.assertEqual(totales["lineas"], 2)

    def test_periodo_sin_ventas_devuelve_ceros_y_no_falla(self):
        totales = totales_periodo(self.cliente, AJUSTES, periodo_de_mes(2026, 5))
        self.assertEqual(totales["venta_neta"], 0.0)
        self.assertIsNone(totales["margen_pct"])

    def test_sin_modulo_de_margen_el_margen_queda_indefinido(self):
        cliente = OdooFalso(self.cliente.lineas, campos={
            "date", "state", "company_id", "product_id", "partner_id",
            "team_id", "price_subtotal", "product_uom_qty",
        })
        totales = totales_periodo(cliente, AJUSTES, periodo_de_mes(2026, 8))
        self.assertEqual(totales["venta_neta"], 1_500_000)
        self.assertIsNone(totales["margen"])
        self.assertIsNone(totales["costo"])

    def test_las_ventas_del_mes_vecino_no_se_cuelan(self):
        """El 31 de agosto a las 22:00 en Chile es el 1 de septiembre en UTC."""
        cliente = OdooFalso([linea("2026-09-01 02:00:00", 999_000, 1_000, QUESO, CLIENTE_A, CANAL)])
        agosto = totales_periodo(cliente, AJUSTES, periodo_de_mes(2026, 8))
        septiembre = totales_periodo(cliente, AJUSTES, periodo_de_mes(2026, 9))
        self.assertEqual(agosto["venta_neta"], 999_000)
        self.assertEqual(septiembre["venta_neta"], 0.0)


class ResumenTest(unittest.TestCase):
    def setUp(self):
        self.cliente = OdooFalso(
            lineas=[
                linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL),
                linea("2026-07-10 13:00:00", 800_000, 240_000, QUESO, CLIENTE_A, CANAL),
                linea("2025-08-10 13:00:00", 500_000, 100_000, QUESO, CLIENTE_A, CANAL),
            ],
            pedidos=[
                {"date_order": "2026-08-05 13:00:00", "state": "sale"},
                {"date_order": "2026-08-06 13:00:00", "state": "sale"},
            ],
        )

    def test_comparativos_contra_mes_y_anio_anterior(self):
        datos = resumen(self.cliente, AJUSTES, periodo_de_mes(2026, 8))
        mes = datos["comparativo"]["mes_anterior"]
        anio = datos["comparativo"]["anio_anterior"]
        self.assertEqual(mes["etiqueta"], "Julio 2026")
        self.assertAlmostEqual(mes["variacion_venta_pct"], 25.0)
        self.assertEqual(anio["etiqueta"], "Agosto 2025")
        self.assertAlmostEqual(anio["variacion_venta_pct"], 100.0)

    def test_ticket_promedio_usa_pedidos_no_lineas(self):
        datos = resumen(self.cliente, AJUSTES, periodo_de_mes(2026, 8))
        self.assertEqual(datos["pedidos"], 2)
        self.assertEqual(datos["ticket_promedio"], 500_000)

    def test_sin_pedidos_no_hay_ticket_promedio(self):
        datos = resumen(OdooFalso(), AJUSTES, periodo_de_mes(2026, 8))
        self.assertEqual(datos["pedidos"], 0)
        self.assertIsNone(datos["ticket_promedio"])


class TendenciaTest(unittest.TestCase):
    def test_serie_termina_en_el_mes_del_periodo_y_conserva_el_orden(self):
        cliente = OdooFalso([
            linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL),
            linea("2026-06-05 13:00:00", 700_000, 100_000, QUESO, CLIENTE_A, CANAL),
        ])
        serie = tendencia(cliente, AJUSTES, periodo_de_mes(2026, 8), meses=3)
        self.assertEqual([(p["anio"], p["mes"]) for p in serie],
                         [(2026, 6), (2026, 7), (2026, 8)])
        self.assertEqual([p["venta_neta"] for p in serie], [700_000, 0.0, 1_000_000])
        self.assertEqual(serie[-1]["etiqueta"], "ago 26")

    def test_la_serie_cruza_el_cambio_de_anio(self):
        serie = tendencia(OdooFalso(), AJUSTES, periodo_de_mes(2026, 2), meses=4)
        self.assertEqual([(p["anio"], p["mes"]) for p in serie],
                         [(2025, 11), (2025, 12), (2026, 1), (2026, 2)])

    def test_meses_invalidos(self):
        with self.assertRaises(ValueError):
            tendencia(OdooFalso(), AJUSTES, periodo_de_mes(2026, 8), meses=0)


class RankingTest(unittest.TestCase):
    def setUp(self):
        self.cliente = OdooFalso([
            linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL),
            linea("2026-08-06 13:00:00", 250_000, 50_000, MIEL, CLIENTE_B, CANAL),
            linea("2026-08-07 13:00:00", 250_000, 50_000, MIEL, CLIENTE_A, CANAL),
        ])

    def test_ranking_por_producto_ordena_y_reparte_participacion(self):
        datos = ranking(self.cliente, AJUSTES, periodo_de_mes(2026, 8), "producto")
        self.assertTrue(datos["disponible"])
        self.assertEqual([f["nombre"] for f in datos["filas"]],
                         ["Queso de cabra 500 g", "Miel de ulmo 1 kg"])
        self.assertEqual(datos["filas"][0]["venta_neta"], 1_000_000)
        self.assertEqual(datos["filas"][1]["venta_neta"], 500_000)
        self.assertAlmostEqual(sum(f["participacion_pct"] for f in datos["filas"]), 100.0)

    def test_ranking_por_cliente_agrupa_lineas_del_mismo_cliente(self):
        datos = ranking(self.cliente, AJUSTES, periodo_de_mes(2026, 8), "cliente")
        primero = datos["filas"][0]
        self.assertEqual(primero["nombre"], "Supermercados del Norte SpA")
        self.assertEqual(primero["venta_neta"], 1_250_000)

    def test_el_limite_recorta_el_ranking(self):
        datos = ranking(self.cliente, AJUSTES, periodo_de_mes(2026, 8), "producto", limite=1)
        self.assertEqual(len(datos["filas"]), 1)

    def test_grupo_sin_valor_se_rotula_sin_asignar(self):
        cliente = OdooFalso([linea("2026-08-05 13:00:00", 100.0, 10.0, QUESO, CLIENTE_A, False)])
        datos = ranking(cliente, AJUSTES, periodo_de_mes(2026, 8), "canal")
        self.assertEqual(datos["filas"][0]["nombre"], "Sin asignar")

    def test_dimension_ausente_en_odoo_se_reporta_no_disponible(self):
        cliente = OdooFalso(self.cliente.lineas, campos={
            "date", "state", "price_subtotal", "product_uom_qty", "margin", "product_id",
        })
        datos = ranking(cliente, AJUSTES, periodo_de_mes(2026, 8), "canal")
        self.assertFalse(datos["disponible"])
        self.assertEqual(datos["filas"], [])

    def test_dimension_desconocida(self):
        with self.assertRaises(ValueError):
            ranking(self.cliente, AJUSTES, periodo_de_mes(2026, 8), "vendedor")


class FiltrosDeDominioTest(unittest.TestCase):
    def test_los_presupuestos_y_cancelados_no_son_venta(self):
        lineas = [
            linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL),
            dict(linea("2026-08-06 13:00:00", 9_000_000, 0, QUESO, CLIENTE_A, CANAL), state="draft"),
            dict(linea("2026-08-07 13:00:00", 9_000_000, 0, QUESO, CLIENTE_A, CANAL), state="cancel"),
        ]
        totales = totales_periodo(OdooFalso(lineas), AJUSTES, periodo_de_mes(2026, 8))
        self.assertEqual(totales["venta_neta"], 1_000_000)

    def test_filtro_por_compania(self):
        lineas = [
            dict(linea("2026-08-05 13:00:00", 100.0, 10.0, QUESO, CLIENTE_A, CANAL), company_id=1),
            dict(linea("2026-08-06 13:00:00", 900.0, 10.0, QUESO, CLIENTE_A, CANAL), company_id=2),
        ]
        ajustes = Settings(**{**AJUSTES.__dict__, "company_id": 1})
        totales = totales_periodo(OdooFalso(lineas), ajustes, periodo_de_mes(2026, 8))
        self.assertEqual(totales["venta_neta"], 100.0)


class PanelCompletoTest(unittest.TestCase):
    def test_estructura_de_la_respuesta(self):
        cliente = OdooFalso(
            [linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL)],
            pedidos=[{"date_order": "2026-08-05 13:00:00", "state": "sale"}],
        )
        datos = panel(cliente, AJUSTES, periodo_de_mes(2026, 8), meses_tendencia=3, limite_ranking=5)
        self.assertEqual(datos["periodo"]["etiqueta"], "Agosto 2026")
        self.assertEqual(datos["moneda"], "CLP")
        self.assertTrue(datos["margen_disponible"])
        self.assertEqual(len(datos["tendencia"]), 3)
        self.assertEqual(set(datos["rankings"]), {"producto", "cliente", "canal"})
        self.assertEqual(datos["resumen"]["venta_neta"], 1_000_000)


if __name__ == "__main__":
    unittest.main()
