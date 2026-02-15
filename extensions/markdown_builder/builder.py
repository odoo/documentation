"""
Markdown builder for Sphinx.
Outputs .md files preserving the original directory structure.
"""

from os import path

from docutils.io import StringOutput
from sphinx.builders import Builder
from sphinx.util import logging
from sphinx.util.osutil import ensuredir, os_path

from .translator import MarkdownTranslator

logger = logging.getLogger(__name__)


class MarkdownBuilder(Builder):
    name = 'markdown'
    format = 'markdown'
    epilog = 'The markdown files are in %(outdir)s.'
    out_suffix = '.md'
    allow_parallel = True
    default_translator_class = MarkdownTranslator

    def get_outdated_docs(self):
        for docname in self.env.found_docs:
            if docname not in self.env.all_docs:
                yield docname
                continue
            targetname = path.join(self.outdir, os_path(docname) + self.out_suffix)
            try:
                targetmtime = path.getmtime(targetname)
            except Exception:
                targetmtime = 0
            try:
                srcmtime = path.getmtime(self.env.doc2path(docname))
                if srcmtime > targetmtime:
                    yield docname
            except OSError:
                pass

    def get_target_uri(self, docname, typ=None):
        return docname + self.out_suffix

    def prepare_writing(self, docnames):
        self.writer = MarkdownWriter(self)

    def write_doc(self, docname, doctree):
        destination = StringOutput(encoding='utf-8')
        self.writer.current_docname = docname
        self.writer.write(doctree, destination)

        outfilename = path.join(self.outdir, os_path(docname) + self.out_suffix)
        ensuredir(path.dirname(outfilename))
        try:
            with open(outfilename, 'w', encoding='utf-8') as f:
                f.write(self.writer.output)
        except OSError as err:
            logger.warning("error writing file %s: %s", outfilename, err)


class MarkdownWriter:
    def __init__(self, builder):
        self.builder = builder
        self.current_docname = ''

    def write(self, doctree, destination):
        # Use create_translator to get transplanted handlers from add_node()
        translator = self.builder.create_translator(doctree)
        # Set required attributes that our translator needs
        translator.builder = self.builder
        translator.docname = self.current_docname
        doctree.walkabout(translator)
        self.output = translator.get_output()
