from pygments.style import Style
from pygments.token import Keyword, Name, Comment, String, Error, \
    Number, Other, Whitespace, Generic

class OdooStyle(Style):
    """
    Style inspired by SAS' enhanced program editor. Note This is not
    meant to be a complete style. It's merely meant to mimic SAS'
    program editor syntax highlighting.
    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
    """

    default_style = ''

    background_color = '#F8F8F8'
    highlight_color = '#EAEAEA'

    styles = {
        Whitespace: '#bbbbbb',
        Comment: 'italic #8c8c8c',
        String: '#800080',
        Number: 'bold',
        Other: 'bg:#ffffe0',
        Keyword: '#2c2cff',
        Keyword.Reserved: 'bold #353580',
        Keyword.Constant: 'bold',
        Name.Builtin: '#2c2cff',
        Name.Function: 'bold italic',
        Name.Class: "bold #0000FF",
        Name.Namespace: "bold #0000FF",
        Name.Exception: 'bg:#e3d2d2 #a61717',
        Name.Variable: 'bold #2c2cff',
        Name.Attribute: '#2c2cff',
        Name.Tag: "bold #008000",
        Generic: '#2c2cff',
        Generic.Emph: '#008800',
        Generic.Error: '#d30202',
        Error: 'bg:#ffe2e2 #a61717'
    }

import sys
import types

modname = 'pygments.styles.odoo'
m = types.ModuleType(modname)
m.OdooStyle = OdooStyle
sys.modules[modname] = m
