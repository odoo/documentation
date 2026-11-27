from pygments.style import Style
from pygments.token import Comment, Error, Generic, Keyword, Name, Number, Operator, String, Token


class OdooStyle(Style):
    """ Light style of the code blocks, after the colors of GitHub. """

    background_color = '#FFFFFF'
    highlight_color = '#FFF8C5'

    styles = {
        Token: '#1F2328',
        Comment: '#59636E',
        Keyword: '#CF222E',
        Operator.Word: '#CF222E',
        Name.Class: '#8250DF',
        Name.Function: '#8250DF',
        Name.Decorator: '#8250DF',
        Name.Exception: '#8250DF',
        Name.Builtin: '#0550AE',
        Name.Variable: '#953800',
        Name.Attribute: '#0550AE',
        Name.Tag: '#116329',
        String: '#0A3069',
        Number: '#0550AE',
        Generic.Heading: 'bold #0550AE',
        Generic.Subheading: 'bold #0550AE',
        Generic.Deleted: 'bg:#FFEBE9 #82071E',
        Generic.Inserted: 'bg:#DAFBE1 #116329',
        Generic.Emph: 'italic',
        Generic.Strong: 'bold',
        Generic.Prompt: '#59636E',
        Generic.Output: '#59636E',
        Generic.Error: '#82071E',
        Error: '#82071E',
    }

import sys
import types

modname = 'pygments.styles.odoo'
m = types.ModuleType(modname)
m.OdooStyle = OdooStyle
sys.modules[modname] = m
