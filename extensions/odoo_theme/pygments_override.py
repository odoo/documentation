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


class OdooDarkStyle(Style):
    """ Dark style of the code blocks, after the colors of GitHub. """

    background_color = '#0D1117'
    highlight_color = '#433E2A'

    styles = {
        Token: '#E6EDF3',
        Comment: '#8B949E',
        Keyword: '#FF7B72',
        Operator.Word: '#FF7B72',
        Name.Class: '#D2A8FF',
        Name.Function: '#D2A8FF',
        Name.Decorator: '#D2A8FF',
        Name.Exception: '#D2A8FF',
        Name.Builtin: '#79C0FF',
        Name.Variable: '#FFA657',
        Name.Attribute: '#79C0FF',
        Name.Tag: '#7EE787',
        String: '#A5D6FF',
        Number: '#79C0FF',
        Generic.Heading: 'bold #79C0FF',
        Generic.Subheading: 'bold #79C0FF',
        Generic.Deleted: 'bg:#490202 #FFA198',
        Generic.Inserted: 'bg:#04260F #7EE787',
        Generic.Emph: 'italic',
        Generic.Strong: 'bold',
        Generic.Prompt: '#8B949E',
        Generic.Output: '#8B949E',
        Generic.Error: '#FFA198',
        Error: '#FFA198',
    }

import sys
import types

modname = 'pygments.styles.odoo'
m = types.ModuleType(modname)
m.OdooStyle = OdooStyle
sys.modules[modname] = m
