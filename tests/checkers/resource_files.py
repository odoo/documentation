import sphinxlint


@sphinxlint.checker('')
def check_file_extensions(file, lines, options=None):
    """ Check that there is no file without extension. """
    yield 0, "the file does not have an extension"
