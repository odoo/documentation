import py
import argparse

def get_parser():
    parser = argparse.ArgumentParser(prog='i18n',
                                     description='Manage the translations of a project.')
    parser.add_argument('--root', metavar='DIR', type=py.path.local, default='.',
                        help='The root directory of the project (default: .)')
    parser.add_argument('--languages', metavar='LANG,LANG,...', default='',
                        help='Comma separated list of languages to be supported')
    add_subparsers(parser)
    return parser

def add_subparsers(parser):
    subparsers = parser.add_subparsers(dest='command')
    subparsers.add_parser('extract',
                          help='Extract the messages from the python files ' + 
                          'and merge them with the existing catalogs in languages/')
    subparsers.add_parser('compile', help='Compile the catalogs')


def main(argv):
    from i18n.translator import Translator
    parser = get_parser()
    args = parser.parse_args(argv[1:])
    if args.root.check(dir=False):
        parser.error('Not a directory: %s' % args.root)
    languages = map(str.strip, args.languages.split(','))
    tr = Translator(args.root, languages, autocompile=False)
    if args.command == 'extract':
        tr.extract()
    elif args.command == 'compile':
        tr.compile()
    else:
        parser.error('Invalid command: %s' % args.command)
