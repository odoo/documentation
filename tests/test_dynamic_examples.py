import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

CONF = '''\
import sys
sys.path.insert(0, {extensions!r})
extensions = ["html_domain"]
html_static_path = [{static!r}]
master_doc = "index"


def setup(app):
    from docutils import nodes
    from docutils.parsers.rst import roles
    roles.register_generic_role("icon", nodes.inline)
'''


class DynamicExamplesCase(unittest.TestCase):
    """Build a cheat sheet page with its stubbed dependencies, in HTML and gettext."""

    page = None
    script = None
    stubs = ()
    messages = ()

    def test_html_and_gettext(self):
        if not self.page:
            self.skipTest('abstract test case')
        page = Path(self.page)
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / 'source'
            source.mkdir()
            source.joinpath('conf.py').write_text(
                CONF.format(extensions=str(ROOT / 'extensions'), static=str(ROOT / 'static')),
                encoding='utf-8',
            )
            target = source / page
            target.parent.mkdir(parents=True)
            target.write_text(ROOT.joinpath('content', page).read_text(encoding='utf-8'), encoding='utf-8')
            images = ROOT / 'content' / page.with_suffix('')
            if images.is_dir():
                shutil.copytree(images, target.with_suffix(''))
            for stub in self.stubs:
                stub_path = source / f'{stub}.rst'
                stub_path.parent.mkdir(parents=True, exist_ok=True)
                stub_path.write_text(':orphan:\n\nStub\n====\n', encoding='utf-8')
            source.joinpath('index.rst').write_text(
                f'Examples\n========\n\n.. toctree::\n\n   {page.with_suffix("")}\n',
                encoding='utf-8',
            )
            for builder in ('html', 'gettext'):
                output = Path(directory) / builder
                result = subprocess.run(
                    [sys.executable, '-m', 'sphinx', '-W', '-b', builder, str(source), str(output)],
                    capture_output=True, text=True, check=False,
                )
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                if builder == 'gettext':
                    catalog = '\n'.join(path.read_text(encoding='utf-8') for path in output.rglob('*.pot'))
                    for message in self.messages:
                        self.assertIn(f'msgid "{message}"', catalog)
                else:
                    self.assertEqual(
                        output.joinpath('_static/js', self.script).read_bytes(),
                        ROOT.joinpath('static/js', self.script).read_bytes(),
                    )


class TestAccountingCheatSheet(DynamicExamplesCase):
    page = 'applications/finance/accounting/get_started/cheat_sheet.rst'
    script = 'accounting-cheat-sheet.js'
    stubs = ('applications/finance/accounting/bank/reconciliation',)
    messages = (
        'Reconcile', 'Reconcile Next', 'Unreconcile', 'Profit & Loss',
        'Company Incorporation (Initial Capital $1,000)',
        'Customer Invoice ($100 + 9% tax)', 'Expenses: Price Difference',
        'The company receives $1,000 in cash',
    )


class TestValuationCheatSheet(DynamicExamplesCase):
    page = 'applications/inventory_and_mrp/inventory/inventory_valuation/cheat_sheet.rst'
    script = 'valuation-cheat-sheet.js'
    stubs = (
        'applications/inventory_and_mrp/inventory',
        'applications/finance/accounting',
        'applications/finance/accounting/get_started/inventory_valuation',
        'applications/inventory_and_mrp/inventory/inventory_valuation/operations_valuation',
    )
    messages = (
        'Choose a standard:', 'Choose an accounting method:', 'Closing',
        'Continental (Expenses = Purchase Expenses)',
        'Supplier Goods Reception (PO $50, Bill $50)',
        'Bills to Receive/Goods Received Not Invoiced',
        'Stock Account: defined on the product category',
        '**Standard Cost:** fixed unit cost, updated manually',
    )


if __name__ == '__main__':
    unittest.main()
