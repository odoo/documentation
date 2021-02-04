# TODO VFE licensing ?

import collections
import io
import itertools
import os.path
import re
import shutil
import tempfile

from docutils import nodes
from docutils.parsers.rst import Directive, directives
import sphinx.directives

from unidiff import PatchSet
import pygments.lexers
import pygments.util

SERIES_KEY = 'series'

def setup(app):
    app.add_config_value('patchqueue_sections', ['changes'], 'env')
    app.connect('env-updated', add_statics)

    app.add_directive('queue', Queue)
    app.add_directive('patch', Patch)

def add_statics(app, env):
    app.add_css_file('patchqueue.css')
    app.add_js_file('patchqueue.js')
    env.config.html_static_path.append(statics())

statics = lambda *p: os.path.join(
    os.path.abspath(os.path.dirname(__file__)),
    'static', *p)

class SphinxUI(object):
    verbose = False

    def __init__(self, app):
        self.app = app

    def note(self, s):
        self.app.debug(s.strip('\n'))
    def warn(self, s):
        self.app.warn(s.strip('\n'))

    def config(self, section, name, default=None, untrusted=False):
        return default
    configpath = confibool = configint = configbytes = configlist = config
import shutil
class Series(object):
    """ Iterator on a sequence of patches, handles applying the patches to a
    temporary directory before returning a list of (file name,
    applied file location, patch hunks for file) for each file in a patch
    """
    def __init__(self, app, path, patches):
        self.ui = SphinxUI(app)
        self.index = -1
        self.path = path
        self.patches = patches
        self.directory = tempfile.mkdtemp()

    def close(self, *args):
        shutil.rmtree(self.directory, ignore_errors=True)

    def __iter__(self):
        return self

    def next(self):
        self.index += 1
        if self.index >= len(self.patches):
            raise StopIteration

        patch = os.path.join(self.path, self.patches[self.index])
        self.ui.app.env.note_dependency(patch)

        with io.open(patch, 'r', encoding='utf-8') as fp:
            p = PatchSet(fp)
            apply(p, self.directory)

            content = []
            for patch in p:
                hunks = []
                if patch.target_file == '/dev/null':
                    continue
                for hunk in patch:
                    hunks.append(Hunk(
                        startb=hunk.target_start,
                        lenb=hunk.target_length,
                        hunk=[str(l) for l in hunk],
                    ))
                tpath = strip(patch.target_file)
                content.append((
                    tpath,
                    os.path.join(self.directory, tpath),
                    hunks
                ))
            return content
    __next__ = next
Hunk = collections.namedtuple('Hunk', 'startb lenb hunk')

_re = re.compile(br'^[^/]*/'.decode('utf-8'))
def strip(f):
    return _re.sub('', f)

def apply(patchset, directory):
    # apply patch set fully in memory because we're very lazy and
    # chance are we're dealing with pretty small files.

    for patch in patchset:
        if patch.target_file == '/dev/null':
            if patch.source_file != '/dev/null':
                os.remove(os.path.join(directory, strip(patch.source_file)))
            continue

        source_lines = []
        if patch.source_file != '/dev/null':
            with io.open(os.path.join(directory, strip(patch.source_file)), 'r', encoding='utf-8') as f:
                source_lines = f.readlines()

        last = 0
        target_lines = []
        for hunk in patch:
            # copy all lines between previous and current hunks to the output
            target_lines.extend(source_lines[last:hunk.source_start - 1])
            last = hunk.source_start + hunk.source_length - 1

            source = iter(hunk.source)
            target = iter(hunk.target)
            old = next(source, None)
            new = next(target, None)

            while old:
                if old[0] == '-':
                    old = next(source, None)
                elif new[0] == '+':
                    target_lines.append(new[1:])
                    new = next(target, None)
                elif old[0] == new[0] == ' ' and old[1:] == new[1:]:
                    target_lines.append(new[1:])
                    old = next(source, None)
                    new = next(target, None)
                else:
                    raise AssertionError("Patch is out of sync: %s and %s" % (old, new))
            while new:
                if new[0] == '+':
                    target_lines.append(new[1:])
                    new = next(target, None)
                else:
                    raise AssertionError("Patch is out of sync: <nothing> and %s" % new)
        # copy rest of source
        target_lines.extend(source_lines[last:])

        # write to output
        dest = os.path.join(directory, strip(patch.target_file))
        destdir = os.path.dirname(dest)
        if not os.path.exists(destdir):
            # todo: err if exists but is not dir
            os.makedirs(destdir)
        with io.open(dest, 'w', encoding='utf-8') as f:
            for line in target_lines:
                # unidiff seems to always yield native strings?
                f.write(line if type(line) is UNICODE else line.decode('utf-8'))
UNICODE = type(u'')

class Queue(Directive):
    """ Sets up a :class:`~patchqueue.Series` in the document context, and
    closing the series iterator after the document has been converted to a
    doctree
    """
    has_content = False
    required_arguments = 1
    optional_arguments = 0
    final_argument_whitespace = False

    def run(self):
        document = self.state.document
        env = document.settings.env

        relpath, series_file = env.relfn2path(self.arguments[0])
        patches_dir = os.path.dirname(series_file)

        env.note_dependency(series_file)

        with io.open(series_file, mode='r', encoding='utf-8') as f:
            series = env.temp_data[SERIES_KEY] = Series(
                env.app, patches_dir, [line.strip() for line in f])

        # Once the doctree is done generating, cleanup series
        env.app.connect('doctree-read', series.close)
        return []


def find_changed_lines(hunk):
    """ Yields 0-indexed indices of edited or added lines in the hunk
    """
    lines = (line for line in hunk.hunk if not line.startswith('-'))
    # literalinclude does not allow passing stripnl=False to
    # pygments.highlight, so need to discard leading lines composed only of a
    # newline.
    for index, line in enumerate(
            itertools.dropwhile(lambda l: l == ' \n', lines)):
        if line[0] == '+':
            yield index


class Patch(Directive):
    """ Takes the next patch out of a series set up by a previous
    :class:`~patchqueue.Queue` call, displays it as sections of file
    corresponding to the patch hunks (with "+"'d files emphasized), the raw
    patch file and the full, final file, for each file in the patch.
    """
    has_content = False
    required_arguments = 0
    optional_arguments = 0
    final_argument_whitespace = False
    option_spec = {
        'hidden': directives.flag,
    }

    def run_hunk(self, hunk, filepath, lang='guess'):
        """ Formats and displays a given hunk as a slice of the corresponding
        file (with added/edited lines emphasized)
        """
        changed = ','.join(str(n + 1) for n in find_changed_lines(hunk))
        attrs = {
            'language': lang,
            'lines': "%d-%d" % (hunk.startb, hunk.startb + hunk.lenb - 1),
        }
        if changed:
            attrs['emphasize-lines'] = changed
        return sphinx.directives.code.LiteralInclude(
            self.name,
            [filepath],
            attrs,
            [],
            self.lineno,
            self.content_offset,
            self.block_text,
            self.state,
            self.state_machine
        ).run()

    def run_diff(self, patchlines):
        """ Formats and displays a patch file
        """
        return sphinx.directives.CodeBlock(
            self.name,
            ['diff'],
            {'linenos': False},
            patchlines,
            self.lineno,
            self.content_offset,
            self.block_text,
            self.state,
            self.state_machine
        ).run()

    def run_content(self, filepath, lang='guess'):
        """ Formats and displays a complete result file, after having applied
        the current patch directive
        """
        return sphinx.directives.code.LiteralInclude(
            self.name,
            [filepath],
            {'linenos': True, 'language': lang},
            [],
            self.lineno,
            self.content_offset,
            self.block_text,
            self.state,
            self.state_machine
        ).run()

    def run(self):
        document = self.state.document
        env = document.settings.env
        series = env.temp_data[SERIES_KEY]
        app = env.app

        if not document.settings.file_insertion_enabled:
            msg = "File insertion disabled"
            app.warn(msg)
            error = nodes.error('', nodes.inline(text=msg))
            error.lineno = self.lineno

            return [error]

        patch = next(series, None)
        if patch is None:
            msg = "No patch left in queue %s" % series.path
            app.warn(msg)
            warning = nodes.warning('', nodes.inline(text=msg))
            warning.lineno = self.lineno
            return [warning]

        if 'hidden' in self.options:
            return []

        doc_dir = os.path.dirname(env.doc2path(env.docname))

        sections = app.config.patchqueue_sections

        classes = ['pq-patch']
        if len(sections) > 1:
            classes.append('pq-needs-toggle')
        patch_root = nodes.container(classes=classes)
        for fname, path, hunks in patch:
            patch_root.append(nodes.emphasis(text=fname))

            relative_path = os.path.relpath(path, doc_dir)

            try:
                lang = pygments.lexers.guess_lexer_for_filename(
                    fname, io.open(path, 'r', encoding='utf-8').read()).aliases[0]
            except pygments.util.ClassNotFound:
                lang = 'guess'

            patchlines = []
            if 'changes' in sections:
                section = nodes.container(classes=['pq-section'])
            for hunk in hunks:
                patchlines.extend(line.rstrip('\n') for line in hunk.hunk)

                if 'changes' in sections:
                    section.extend(self.run_hunk(hunk, relative_path, lang=lang))
            if 'changes' in sections:
                patch_root.append(section)

            if 'diff' in sections:
                patch_root.append(
                    nodes.container(
                        '', *self.run_diff(patchlines),
                        classes=['pq-diff']))
            if 'content' in sections:
                patch_root.append(
                    nodes.container(
                        '', *self.run_content(relative_path, lang=lang),
                        classes=['pq-file']))

            undepend(env, relative_path)

        return [patch_root]

def undepend(env, relpath):
    """ LiteralInclude adds the provided file as a dependency to the
    document. This usually makes sense, but in our case the dependency is
    generated (from patch files which are the real dependencies) and the
    LiteralIncluded file is changed by each patch and nuked after the document
    is built.

    Thus remove it from the dependency set.
    """
    env.dependencies[env.docname].discard(relpath)

