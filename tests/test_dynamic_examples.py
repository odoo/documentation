import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class TestAccountingCheatSheet(unittest.TestCase):
    def test_html_and_gettext(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / 'source'
            source.mkdir()
            source.joinpath('conf.py').write_text(
                f'import sys\nsys.path.insert(0, {str(ROOT / "extensions")!r})\n'
                'extensions = ["html_domain"]\n'
                f'html_static_path = [{str(ROOT / "static")!r}]\n'
                'master_doc = "index"\n',
                encoding='utf-8',
            )
            page = Path('applications/finance/accounting/get_started/cheat_sheet.rst')
            source.joinpath(page).parent.mkdir(parents=True)
            source.joinpath(page).write_text(ROOT.joinpath('content', page).read_text(encoding='utf-8'))
            reconciliation = source / 'applications/finance/accounting/bank/reconciliation.rst'
            reconciliation.parent.mkdir(parents=True)
            reconciliation.write_text(':orphan:\n\nReconciliation\n==============\n', encoding='utf-8')
            source.joinpath('index.rst').write_text(
                'Examples\n========\n\n'
                '.. toctree::\n\n'
                '   applications/finance/accounting/get_started/cheat_sheet\n',
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
                    for message in (
                        'Reconcile', 'Reconcile Next', 'Unreconcile', 'Profit & Loss',
                        'Company Incorporation (Initial Capital $1,000)',
                        'Customer Invoice ($100 + 9% tax)', 'Expenses: Price Difference',
                        'The company receives $1,000 in cash',
                    ):
                        self.assertIn(f'msgid "{message}"', catalog)
                else:
                    self.assertEqual(
                        output.joinpath('_static/js/accounting-cheat-sheet.js').read_bytes(),
                        ROOT.joinpath('static/js/accounting-cheat-sheet.js').read_bytes(),
                    )


if __name__ == '__main__':
    unittest.main()
