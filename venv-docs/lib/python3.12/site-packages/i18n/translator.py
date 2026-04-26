import py
import os
import gettext
from babel.messages.frontend import CommandLineInterface

babel_cli = CommandLineInterface()

class Translator(object):

    def __init__(self, rootdir, languages, dest_language=None, autocompile=True):
        self.rootdir = py.path.local(rootdir)
        self.languages = languages
        if dest_language is None:
            dest_language = languages[0]
        self.dest_language = dest_language
        self.langdir = self.rootdir.join('languages').ensure(dir=True)
        self.pot = self.langdir.join('template.pot')
        if autocompile:
            self.compile()
        self._init_tr()

    def _init_tr(self):
        self.tr = gettext.translation('messages', str(self.langdir),
                                      [self.dest_language], fallback=True)

    def reload(self):
        self._init_tr()

    def gettext(self, msgid):
        return self.tr.ugettext(msgid)

    def _(self, msgid):
        return self.gettext(msgid)

    def ngettext(self, msgid1, msgid2, n):
        return self.tr.ungettext(msgid1, msgid2, n)

    def _run(self, cmd, *args):
        babel_cli.run(['pybabel', cmd] + list(args))

    def _do_extract(self):
        self._run('extract', '-o', str(self.pot), str(self.rootdir))

    def _do_init(self, lang):
        self._run('init', '-i', str(self.pot), '-l', lang, '-d', str(self.langdir))

    def _do_update(self, lang):
        self._run('update', '-i', str(self.pot), '-l', lang, '-d', str(self.langdir))

    def _do_compile(self, po, lang):
        self._run('compile', '-f', '-i', str(po), '-l', lang, '-d', str(self.langdir))

    def get_po(self, lang):
        return self.langdir.join(lang, 'LC_MESSAGES', 'messages.po')

    def extract(self):
        self._do_extract()
        for lang in self.languages:
            dst = self.get_po(lang)
            if dst.check(file=False):
                self._do_init(lang)
            else:
                self._do_update(lang)

    def compile(self):
        for po in self.langdir.visit('*.po', rec=True):
            mo = po.new(ext='mo')
            if mo.check(exists=True) and mo.mtime() >= po.mtime():
                # the .mo is up to date
                continue
            lang = po.dirpath('..').basename
            self.langdir.join(lang, 'LC_MESSAGES').ensure(dir=1)
            print 'compiling language %s' % po.basename
            self._do_compile(po, lang)

    def cmdline(self, argv):
        import argparse
        from i18n.cmdline import add_subparsers
        parser = argparse.ArgumentParser(
            description='Manage the translations of a project.')
        add_subparsers(parser)
        args = parser.parse_args(argv[1:])
        if args.command == 'extract':
            self.extract()
        elif args.command == 'compile':
            self.compile()
        else:
            parser.error('Invalid command: %s' % args.command)
