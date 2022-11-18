# Redirect rules manual

## What are redirect rules?

Redirect rules allow redirecting users to a new documentation page when they land on an old page
that was either renamed or moved elsewhere. They are specified in `.txt` files located in the
`redirects/` directory at the root of the documentation. Each line of these files specifies a single
rule that applies to a single documentation page.

## How do redirect rules work?

For each redirect rule, the redirects Sphinx extension creates a blank HTML file at the location of
the specified target with only the `meta http-equiv="refresh"` tag in the `<head/>`. When users
visit that HTML file, a client-side redirection is triggered and the browser loads the target
documentation page.

See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv for more
information.

## How do I create a redirect rule?

1. Open the text file inside `redirects/` that matches the version you are currently working on. For
   example, pick `redirects/13.0.txt` if you are moving/renaming the source file (`.rst` file) of a
   documentation page in version 13.0 of the documentation. If the file does not exist yet, create
   it.
2. Look for the block of redirect rules related to the one you want to add. For example, search for
   a block of redirect rules that start with `applications/sales/sales` if you are adding a redirect
   rule for a page in the Sales app. If the block does not exist yet, create it. Ideally, there
   should be one block per app or scope and redirect rules should be sorted alphabetically.
3. Add a new line for your redirect rule at the end of the block. The line should follow this
   pattern:

   `path/to/old/file.rst path/to/new/file.rst  # optional comment`

## When should I create a redirect rule?

If you move or rename a source file, chances are you need to create a redirect rule for that file. A
redirect rule must be added in the following cases:
1. A source file is renamed.

   Example: `contributing/documentation/guidelines.rst` is renamed to
   `contributing/documentation/rst_guidelines.rst` because you add a new `content_guidelines.rst`
   file. The redirect rule should be:

   `contributing/documentation/guidelines.rst contributing/documentation/rst_guidelines.rst`
2. A source file is moved from one location to another.

   Example: The page for the developer guidelines is moved from `developer/misc/guidelines.rst` to
   `contributing/develop/guidelines.rst`. The redirect rule should be:

   `developer/misc/guidelines.rst contributing/develop/guidelines.rst  # Move all guidelines in contributing/`
3. Multiple source files are merged into one.

   Example: The entire content of `administation/install/odoo_sh.rst` is moved into
   `administration/odoo_sh.rst` and the first file is deleted. The redirect rule should be:

   `administration/install/odoo_sh.rst administration/odoo_sh.rst  # Move all information related to Odoo.sh on a single page`

No redirect rule should be created when you delete a source file for which there is no alternative.
