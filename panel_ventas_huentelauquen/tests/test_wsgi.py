"""Pruebas de la capa web: rutas, validación de parámetros, caché y errores."""

from __future__ import annotations

import json
import unittest
from datetime import date

from panel_ventas.config import Settings
from panel_ventas.metrics import periodo_de_mes
from panel_ventas.odoo_client import OdooAuthError, OdooError
from panel_ventas.wsgi import crear_app, resolver_periodo
from tests.fakes import OdooFalso
from tests.test_metrics import CANAL, CLIENTE_A, QUESO, linea

AJUSTES = Settings(
    odoo_url="https://odoo.example.cl",
    odoo_db="huentelauquen",
    odoo_username="panel",
    odoo_password="clave",
    timezone="America/Santiago",
    currency="CLP",
    cache_ttl=0,
)


def pedir(app, ruta: str, consulta: str = "", metodo: str = "GET"):
    """Ejecuta una solicitud contra la app WSGI y devuelve (estado, cabeceras, cuerpo)."""
    capturado: dict[str, object] = {}

    def iniciar_respuesta(estado, cabeceras):
        capturado["estado"] = estado
        capturado["cabeceras"] = dict(cabeceras)

    entorno = {
        "REQUEST_METHOD": metodo,
        "PATH_INFO": ruta,
        "QUERY_STRING": consulta,
        "SERVER_NAME": "localhost",
        "SERVER_PORT": "8069",
        "wsgi.url_scheme": "http",
    }
    cuerpo = b"".join(app(entorno, iniciar_respuesta))
    return capturado["estado"], capturado["cabeceras"], cuerpo


def app_de_prueba(cliente=None, ajustes=AJUSTES):
    return crear_app(ajustes, cliente or OdooFalso())


class RutasEstaticasTest(unittest.TestCase):
    def setUp(self):
        self.app = app_de_prueba()

    def test_raiz_sirve_el_panel(self):
        estado, cabeceras, cuerpo = pedir(self.app, "/")
        self.assertEqual(estado, "200 OK")
        self.assertTrue(cabeceras["Content-Type"].startswith("text/html"))
        self.assertIn(b"Panel de Control de Ventas", cuerpo)

    def test_hoja_de_estilo(self):
        estado, cabeceras, _ = pedir(self.app, "/static/styles.css")
        self.assertEqual(estado, "200 OK")
        self.assertTrue(cabeceras["Content-Type"].startswith("text/css"))

    def test_no_se_puede_salir_del_directorio_estatico(self):
        for ruta in ("/static/../config.py", "/static/../../README.md", "/static/..%2fconfig.py"):
            estado, _, _ = pedir(self.app, ruta)
            self.assertEqual(estado, "404 Not Found", ruta)

    def test_ruta_desconocida(self):
        estado, _, cuerpo = pedir(self.app, "/no-existe")
        self.assertEqual(estado, "404 Not Found")
        self.assertIn("error", json.loads(cuerpo))

    def test_el_panel_es_de_solo_lectura(self):
        estado, _, _ = pedir(self.app, "/api/panel", metodo="POST")
        self.assertEqual(estado, "405 Method Not Allowed")

    def test_head_no_devuelve_cuerpo(self):
        estado, _, cuerpo = pedir(self.app, "/", metodo="HEAD")
        self.assertEqual(estado, "200 OK")
        self.assertEqual(cuerpo, b"")


class ApiPanelTest(unittest.TestCase):
    def setUp(self):
        self.cliente = OdooFalso(
            [linea("2026-08-05 13:00:00", 1_000_000, 400_000, QUESO, CLIENTE_A, CANAL)],
            pedidos=[{"date_order": "2026-08-05 13:00:00", "state": "sale"}],
        )
        self.app = app_de_prueba(self.cliente)

    def test_panel_de_un_mes(self):
        estado, cabeceras, cuerpo = pedir(self.app, "/api/panel", "anio=2026&mes=8&meses=3&limite=5")
        self.assertEqual(estado, "200 OK")
        self.assertTrue(cabeceras["Content-Type"].startswith("application/json"))
        datos = json.loads(cuerpo)
        self.assertEqual(datos["periodo"], {"desde": "2026-08-01", "hasta": "2026-08-31",
                                            "etiqueta": "Agosto 2026"})
        self.assertEqual(datos["resumen"]["venta_neta"], 1_000_000)
        self.assertEqual(len(datos["tendencia"]), 3)

    def test_panel_de_un_rango_libre(self):
        _, _, cuerpo = pedir(self.app, "/api/panel", "desde=2026-08-01&hasta=2026-08-10")
        datos = json.loads(cuerpo)
        self.assertEqual(datos["periodo"]["hasta"], "2026-08-10")

    def test_ranking_por_dimension(self):
        _, _, cuerpo = pedir(self.app, "/api/ranking", "anio=2026&mes=8&dim=cliente")
        datos = json.loads(cuerpo)
        self.assertEqual(datos["dimension"], "cliente")
        self.assertEqual(datos["filas"][0]["nombre"], "Supermercados del Norte SpA")

    def test_salud(self):
        _, _, cuerpo = pedir(self.app, "/api/salud")
        datos = json.loads(cuerpo)
        self.assertEqual(datos["estado"], "ok")
        self.assertEqual(datos["odoo"]["version"], "19.0")
        self.assertTrue(datos["margen_disponible"])


class ValidacionTest(unittest.TestCase):
    def setUp(self):
        self.app = app_de_prueba()

    def _error(self, consulta, ruta="/api/panel"):
        estado, _, cuerpo = pedir(self.app, ruta, consulta)
        self.assertEqual(estado, "400 Bad Request", consulta)
        return json.loads(cuerpo)["error"]

    def test_mes_fuera_de_rango(self):
        self.assertIn("entre 1 y 12", self._error("anio=2026&mes=13"))

    def test_parametro_no_numerico(self):
        self.assertIn("número entero", self._error("anio=dos-mil&mes=8"))

    def test_fecha_mal_formada(self):
        self.assertIn("AAAA-MM-DD", self._error("desde=01-08-2026&hasta=2026-08-31"))

    def test_rango_invertido(self):
        self.assertIn("anterior", self._error("desde=2026-08-31&hasta=2026-08-01"))

    def test_mes_sin_anio(self):
        self.assertIn("juntos", self._error("mes=8"))

    def test_dimension_desconocida(self):
        self.assertIn("Dimensión desconocida", self._error("dim=vendedor", "/api/ranking"))

    def test_limite_fuera_de_rango(self):
        self.assertIn("entre 1 y 50", self._error("limite=500"))


class PeriodoPorDefectoTest(unittest.TestCase):
    def test_sin_parametros_toma_el_mes_en_curso(self):
        periodo = resolver_periodo({}, AJUSTES)
        hoy = date.today()
        self.assertEqual(periodo.desde.day, 1)
        # El panel usa la fecha local de Chile, que puede ir un día detrás de UTC.
        self.assertIn(periodo.desde.month, {hoy.month, (hoy.month - 2) % 12 + 1})


class ErroresDeOdooTest(unittest.TestCase):
    def _app_que_falla(self, excepcion):
        class ClienteRoto(OdooFalso):
            def aggregate(self, *args, **kwargs):
                raise excepcion

        return app_de_prueba(ClienteRoto())

    def test_error_de_odoo_es_502(self):
        app = self._app_que_falla(OdooError("Odoo respondió con un error: acceso denegado"))
        estado, _, cuerpo = pedir(app, "/api/panel", "anio=2026&mes=8")
        self.assertEqual(estado, "502 Bad Gateway")
        self.assertIn("acceso denegado", json.loads(cuerpo)["error"])

    def test_credenciales_rechazadas_es_401(self):
        app = self._app_que_falla(OdooAuthError("Odoo rechazó las credenciales."))
        estado, _, _ = pedir(app, "/api/panel", "anio=2026&mes=8")
        self.assertEqual(estado, "401 Unauthorized")


class CacheTest(unittest.TestCase):
    def test_la_cache_evita_repetir_las_consultas(self):
        cliente = OdooFalso([linea("2026-08-05 13:00:00", 100.0, 10.0, QUESO, CLIENTE_A, CANAL)])
        ajustes = Settings(**{**AJUSTES.__dict__, "cache_ttl": 300})
        app = crear_app(ajustes, cliente)

        pedir(app, "/api/panel", "anio=2026&mes=8&meses=3")
        consultas = len(cliente.llamadas)
        self.assertGreater(consultas, 0)

        pedir(app, "/api/panel", "anio=2026&mes=8&meses=3")
        self.assertEqual(len(cliente.llamadas), consultas, "la segunda solicitud debió salir de la caché")

        pedir(app, "/api/panel", "anio=2026&mes=7&meses=3")
        self.assertGreater(len(cliente.llamadas), consultas, "otro período debe consultar Odoo")

    def test_ttl_cero_desactiva_la_cache(self):
        cliente = OdooFalso()
        app = crear_app(AJUSTES, cliente)
        pedir(app, "/api/panel", "anio=2026&mes=8&meses=2")
        consultas = len(cliente.llamadas)
        pedir(app, "/api/panel", "anio=2026&mes=8&meses=2")
        self.assertGreater(len(cliente.llamadas), consultas)


if __name__ == "__main__":
    unittest.main()
