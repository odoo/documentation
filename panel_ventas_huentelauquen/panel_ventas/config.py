"""Configuración del panel, leída de variables de entorno (o de un archivo .env)."""

from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path


class ConfigError(RuntimeError):
    """La configuración es inválida o está incompleta."""


def load_dotenv(path: str | os.PathLike[str] = ".env") -> None:
    """Carga pares CLAVE=valor de un archivo .env sin pisar el entorno ya definido.

    Se implementa a mano para no depender de python-dotenv: el panel debe poder
    instalarse en el servidor de Hacienda Huentelauquén sin acceso a PyPI.
    """
    env_path = Path(path)
    if not env_path.is_file():
        return
    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def _env_int(name: str, default: int) -> int:
    raw = os.environ.get(name, "").strip()
    if not raw:
        return default
    try:
        return int(raw)
    except ValueError as exc:
        raise ConfigError(f"{name} debe ser un número entero, se recibió {raw!r}") from exc


def _env_optional_int(name: str) -> int | None:
    raw = os.environ.get(name, "").strip()
    if not raw:
        return None
    try:
        return int(raw)
    except ValueError as exc:
        raise ConfigError(f"{name} debe ser un número entero, se recibió {raw!r}") from exc


@dataclass(frozen=True)
class Settings:
    """Parámetros de conexión y de negocio del panel."""

    odoo_url: str
    odoo_db: str
    odoo_username: str
    odoo_password: str
    company_id: int | None = None
    timezone: str = "America/Santiago"
    currency: str = "CLP"
    # Estados de sale.report que cuentan como venta confirmada. En Odoo los
    # presupuestos ('draft'/'sent') y los cancelados no son venta real.
    sale_states: tuple[str, ...] = ("sale", "done")
    request_timeout: int = 30
    cache_ttl: int = 300
    host: str = "127.0.0.1"
    port: int = 8069
    organization: str = "Hacienda Huentelauquén"

    @classmethod
    def from_env(cls) -> "Settings":
        url = os.environ.get("ODOO_URL", "").strip().rstrip("/")
        db = os.environ.get("ODOO_DB", "").strip()
        username = os.environ.get("ODOO_USERNAME", "").strip()
        password = os.environ.get("ODOO_PASSWORD", "").strip()

        faltantes = [
            nombre
            for nombre, valor in (
                ("ODOO_URL", url),
                ("ODOO_DB", db),
                ("ODOO_USERNAME", username),
                ("ODOO_PASSWORD", password),
            )
            if not valor
        ]
        if faltantes:
            raise ConfigError(
                "Faltan variables de entorno obligatorias: "
                + ", ".join(faltantes)
                + ". Copie .env.example a .env y complete los datos de su Odoo."
            )
        if not url.startswith(("http://", "https://")):
            raise ConfigError(f"ODOO_URL debe empezar con http:// o https://, se recibió {url!r}")

        estados = tuple(
            estado.strip()
            for estado in os.environ.get("PANEL_SALE_STATES", "sale,done").split(",")
            if estado.strip()
        )
        if not estados:
            raise ConfigError("PANEL_SALE_STATES no puede quedar vacío")

        return cls(
            odoo_url=url,
            odoo_db=db,
            odoo_username=username,
            odoo_password=password,
            company_id=_env_optional_int("PANEL_COMPANY_ID"),
            timezone=os.environ.get("PANEL_TIMEZONE", "America/Santiago").strip(),
            currency=os.environ.get("PANEL_CURRENCY", "CLP").strip(),
            sale_states=estados,
            request_timeout=_env_int("PANEL_REQUEST_TIMEOUT", 30),
            cache_ttl=_env_int("PANEL_CACHE_TTL", 300),
            host=os.environ.get("PANEL_HOST", "127.0.0.1").strip(),
            port=_env_int("PANEL_PORT", 8069),
            organization=os.environ.get("PANEL_ORG", "Hacienda Huentelauquén").strip(),
        )
