# @Author: SashaChernykh
# @Editor: fish2000
# @Date: 2018-06-04 08:01:23
# @Last Modified time: 2019-03-11 14:39:28 +0500
""" Pygments CSV Lexer csvlexer/csv.py
    
    * http://pygments.org/docs/lexerdevelopment/
    * https://github.com/FSund/pygments-custom-cpplexer
"""
from __future__ import print_function

from pygments.lexer import RegexLexer, bygroups
from pygments.token import Keyword, Literal, Name, Operator, Punctuation

class CsvLexer(RegexLexer):
    
    """ Simple CSV lexer for Pygments.
        
        Extends:
            pygments.lexer.RegexLexer
        
        Class Variables:
            name {str} -- name of lexer:
                * http://pygments.org/docs/api/#pygments.lexer.Lexer.name
            aliases {list} – languages, against whose GFM block names CsvLexer will apply
                * https://git.io/fhjla
            filenames {list} – file name patterns, for whose contents CsvLexer will apply
            tokens {dict} – regular expressions internally matching CsvLexer’s components
        
        Based on StackOverflow user Adobe’s code:
            * https://stackoverflow.com/a/25508711/298171
    """
    
    name =       'Csv'
    aliases =   ['csv', 'comma-separated', 'comma-separated-values']
    filenames = ['*.csv']
    
    tokens = {
        'root': [
            (r'^[^,\n]*',       Operator,                                       'second'),
        ],
        'second': [
            (r'(,)([^,\n]*)',   bygroups(Punctuation, Literal.Number),          'third'),
        ],
        'third': [
            (r'(,)([^,\n]*)',   bygroups(Punctuation, Keyword),                 'fourth'),
        ],
        'fourth': [
            (r'(,)([^,\n]*)',   bygroups(Punctuation, Name.Constant),           'fifth'),
        ],
        'fifth': [
            (r'(,)([^,\n]*)',   bygroups(Punctuation, Literal.String.Single),   'unsupported'),
        ],
        'unsupported': [
            (r'.+',             Punctuation),
        ],
    }
