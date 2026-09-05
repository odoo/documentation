"""Servidor de desarrollo del panel: `python -m panel_ventas.server`.

Para producción use un servidor WSGI real detrás de un proxy inverso, por
ejemplo:  `waitress-serve --host 0.0.0.0 --port 8069 'panel_ventas.wsgi:crear_app'`
"""

from __future__ import annotations

import sys
from wsgiref.simple_server import WSGIRequestHandler, make_server

from .config import ConfigError, Settings, load_dotenv
from .wsgi import crear_app


class _Handler(WSGIRequestHandler):
    """Handler silencioso salvo por una línea compacta de acceso."""

    def log_message(self, formato: str, *args) -> None:  # type: ignore[no-untyped-def]
        sys.stderr.write(f"[panel] {self.address_string()} {formato % args}\n")


def main() -> int:
    load_dotenv()
    try:
        settings = Settings.from_env()
    except ConfigError as exc:
        print(f"Error de configuración: {exc}", file=sys.stderr)
        return 2

    app = crear_app(settings)
    with make_server(settings.host, settings.port, app, handler_class=_Handler) as servidor:
        print(f"Panel de Ventas — {settings.organization}")
        print(f"  Odoo      : {settings.odoo_url} (base {settings.odoo_db})")
        print(f"  Escuchando: http://{settings.host}:{settings.port}")
        print("  Ctrl+C para detener.")
        try:
            servidor.serve_forever()
        except KeyboardInterrupt:
            print("\nPanel detenido.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
