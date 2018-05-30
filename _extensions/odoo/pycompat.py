# -*- coding: utf-8 -*-
import sys

PY2 = sys.version_info[0] == 2

if PY2:
    text_type = unicode
else:
    text_type = str

def to_text(source):
    """ Generates a text value (an instance of text_type) from an arbitrary 
    source.

    * False and None are converted to empty strings
    * text is passed through
    * bytes are decoded as UTF-8
    * rest is textified via the current version's relevant data model method
    """
    if source is None or source is False:
        return u''

    if isinstance(source, bytes):
        return source.decode('utf-8')

    return text_type(source)

