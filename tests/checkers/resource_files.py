from pathlib import Path

import sphinxlint


MAX_IMAGE_SIZES = {  # in bytes
    '.png': 505000,
    '.gif': 2100000,
}

def log_error(file, line, msg, checker_name):
    """ Log an error in sphinx-lint's log format to ease the processing of linting errors on Runbot.
    """
    print(f"{file}:{line or 0}: {msg} ({checker_name})")


def check_image_size(file):
    """ Check that images are not larger than the maximum file size allowed for their extension. """
    file_path = Path(file)
    file_size = file_path.stat().st_size
    max_size = MAX_IMAGE_SIZES.get(file_path.suffix)
    if max_size and file_size > max_size:
        log_error(
            file_path,
            0,
            f"the file has a size of {round(file_size / 10**6, 2)} MB, larger than the maximum"
            f" allowed size of {round(max_size / 10**6, 2)} MB; compress it with pngquant",
            'image-size',
        )


@sphinxlint.checker('')
def check_file_extensions(file, lines, options=None):
    """ Check that there is no file without extension. """
    yield 0, "the file does not have an extension"
