from pathlib import Path
from typing import Any

from docutils import nodes
from jinja2 import Template, TemplateNotFound
from sphinx.application import Sphinx
from sphinx.environment import BuildEnvironment
from sphinx.util.docutils import SphinxDirective
from sphinx.util.fileutil import copy_asset_file

MODULE_DIR: Path = Path(__file__).parent


class OdooDynamicExampleDirective(SphinxDirective):
    """Render an HTML example and auto-load matching JS."""

    required_arguments = 1

    def run(self) -> list[nodes.Node]:
        """Render ``<example>.html`` and include ``<example>.js`` when present.

        If the HTML file is missing but the JS file exists, this directive becomes
        JS-only and emits no warning.
        """
        try:
            example_name = _sanitize_example_name(self.arguments[0])
        except ValueError as e:
            return [self.state_machine.reporter.warning(str(e), line=self.lineno)]

        js_registered = _register_js(self.env, example_name)

        absolute_template_path = MODULE_DIR / f'{example_name}.html'
        if absolute_template_path.exists():
            self.env.note_dependency(absolute_template_path)
        else:
            if js_registered:
                return []
            return [
                self.state_machine.reporter.warning(
                    f"Dynamic example template not found: {absolute_template_path}",
                    line=self.lineno,
                ),
            ]

        ctx = _build_context(self.env.app)
        rendered_html = _render_template(self.env.app, example_name, ctx)
        if not rendered_html:
            if js_registered:
                return []
            msg = self.state_machine.reporter.warning(
                f"Dynamic example template not found: {absolute_template_path}",
                line=self.lineno,
            )
            return [msg]

        node = nodes.raw('', rendered_html, format='html')
        return [node]


def setup(app: Sphinx) -> dict[str, bool]:
    """Register the dynamic example directive and supporting build hooks."""
    app.add_directive('odoo-dynamic-example', OdooDynamicExampleDirective)
    app.connect('build-finished', _copy_js_into_static_js)

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }


def _sanitize_example_name(example_name: str) -> str:
    """Return a safe, extension-relative example name without file suffix."""
    path = Path(example_name.strip())
    if path.suffix in {'.html', '.js'}:
        path = path.with_suffix('')
    if path.is_absolute() or '..' in path.parts:
        msg = 'Example name must be a relative path.'
        raise ValueError(msg)
    return path.as_posix()


def _register_js(env: BuildEnvironment, example_name: str) -> bool:
    """Register `<example>.js` for the current document when the file exists."""
    js_path = f'{example_name}.js'
    absolute_js_path = MODULE_DIR / js_path
    if not absolute_js_path.exists():
        return False

    # Add as a dependency so Sphinx rebuilds the page when the JS file changes.
    env.note_dependency(str(absolute_js_path))
    # Add the JS module path to the current document's metadata for later injection by the Odoo theme.
    metadata = env.metadata.setdefault(env.docname, {})
    custom_js_modules = [m.strip() for m in metadata.get('custom-js', '').split(',') if m.strip()]
    if js_path not in custom_js_modules:
        custom_js_modules.append(js_path)
        metadata['custom-js'] = ','.join(custom_js_modules)
    return True


def _build_context(app: Sphinx) -> dict[str, Any]:
    """Build the rendering context for Jinja template rendering."""
    ctx = getattr(app.builder, 'globalcontext', {}).copy()
    html_context = getattr(app.config, 'html_context', None)
    if html_context:
        ctx.update(html_context)
    return ctx


def _render_template(app: Sphinx, example_name: str, ctx: dict[str, Any]) -> str:
    """Render an example template for HTML and gettext builders.

    The regular Sphinx template loader is preferred. If unavailable (e.g. some
    gettext phases), read and render the file directly with a noop `_` fallback.
    """
    relative_template_path = Path(f'{example_name}.html')
    absolute_template_path = MODULE_DIR / relative_template_path

    templates = getattr(app.builder, 'templates', None)
    if templates:
        try:
            return templates.render(str(relative_template_path), ctx)
        except (AttributeError, TemplateNotFound):
            pass

    if not absolute_template_path.exists():
        return ''

    local_ctx = dict(ctx)
    local_ctx.setdefault('_', lambda text: text)
    return Template(absolute_template_path.read_text(encoding='utf-8')).render(local_ctx)


def _copy_js_into_static_js(app: Sphinx, exception: Exception | None) -> None:
    """Mirror extension JS files into `_static/js` for Odoo theme script URLs."""
    if exception is not None:
        return
    if app.builder.format != 'html':
        return

    destination_root = Path(app.outdir) / '_static' / 'js'
    for js_file in MODULE_DIR.rglob('*.js'):
        relative_js_path = js_file.relative_to(MODULE_DIR)
        destination_file = destination_root / relative_js_path
        destination_file.parent.mkdir(parents=True, exist_ok=True)
        copy_asset_file(str(js_file), str(destination_file))
