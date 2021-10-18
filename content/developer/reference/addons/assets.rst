
.. _reference/assets:

======
Assets
======

Managing assets in Odoo is not as straightforward as it is in some other apps.
One of the reasons is that we have a variety of situations where some, but not all
of the assets are required. For example, the needs of the web client, the point of
sale app, the website or even the mobile application are different. Also, some
assets may be large, but are seldom needed. In that case, we sometimes want them
to be loaded lazily.

The main idea is that we define a set of **bundles** in the module manifest. A
bundle is here defined as a **list of file paths** (xml, javascript, css, scss).
Files are declared using `glob <https://en.wikipedia.org/wiki/Glob_(programming)>`_ syntax, meaning that you can declare several asset
files using a single line. Each matching file found will be appended to the
`<head>` of the page, at most once, in the order the glob patterns are given.

As mentioned, the bundles are declared in each module's :file:`__manifest__.py`, under
a dedicated `assets` key which contains a dictionary. The dictionary will map
**bundles** (keys) to the list of **files** they contain (values). It looks like this:

.. code-block:: py

    'assets': {
        'web.assets_backend': [
            'web/static/src/xml/**/*',
        ],
        'web.assets_common': [
            'web/static/lib/bootstrap/**/*',
            'web/static/src/js/boot.js',
            'web/static/src/js/webclient.js',
        ],
        'web.qunit_suite_tests': [
            'web/static/src/js/webclient_tests.js',
        ],
    },


The files in a bundle can then be inserted into a template by using the `t-call-assets`
directive:

.. code-block:: xml

    <t t-call-assets="web.assets_common" t-js="false"/>
    <t t-call-assets="web.assets_common" t-css="false"/>

Here is what happens when a template is rendered by the server with these directives:

- all the scss files described in the bundle are compiled into css files. A file
  named :file:`file.scss` will be compiled in a file named :file:`file.scss.css`.

- if we are in `debug=assets` mode

  - the `t-call-assets` directive with the `t-js` attribute set to false will
    be replaced by a list of stylesheet tags pointing to the css files

  - the `t-call-assets` directive with the `t-css` attribute set to false will
    link to the non minified bundle file (which uses sourcemaps)

- if we are not in `debug=assets` mode

  - the css files will be concatenated and minified, then a stylesheet tag is
    generated

  - the js files are concatenated and minified, then a script tag is generated

.. note::
   Assets files are cached, so in theory, a browser should only load them once.

Main bundles
------------
When the Odoo server is started, it checks the timestamp of each file in a bundle
and, if necessary, create/recreate the corresponding bundles.

Here are some important bundles that most developers will need to know:

- `web.assets_common`: this bundle contains most assets which are common to the
  web client, the website, and also the point of sale. This is supposed to contain
  lower level building blocks for the odoo framework. Note that it contains the
  :file:`boot.js` file, which defines the odoo module system.

- `web.assets_backend`: this bundle contains the code specific to the web client
  (notably the web client/action manager/views) and all static XML templates used
  in the backend environment

- `web.assets_frontend`: this bundle is about all that is specific to the public
  website: ecommerce, forum, blog, event management, ...

Operations on asset bundles
---------------------------

Typically, handling assets is quite trivial: you just need to add some new files
to a frequently used bundle like 'common' or 'backend'. But there are other operations
available to cover use cases bringing additional constraints. Such cases can mostly
be covered with the following operations.

- Add one or multiple file(s): `append`
    The proper way to add a file to a bundle in any addon is simple: it is just enough
    to add a glob pattern to the bundle in the file :file:`__manifest__.py` like so:

    .. code-block:: py

        'web.assets_common': [
            'my_addon/static/src/js/**/*',
        ],

    By default, adding a simple string to a bundle will append the files matching the
    glob pattern at the end of the bundle. Obviously, the pattern may also be directly
    a single file path.

- Add one or multiple file(s) at the beginning of the list: `prepend`
    Sometimes you need to put a certain file before the others in a bundle, when
    loading css file, for example. In this case, you can use the `prepend` directive
    by replacing the path with a pair `('prepend', <path>)`,
    like so:

    .. code-block:: py

        'web.assets_common': [
            ('prepend', 'my_addon/static/src/css/bootstrap_overridden.scss'),
        ],

- Add one or multiple file(s) before a specific file: `before`
    Prepending a file at the beginning of a bundle might not be precise enough. The
    `before` directive can be used to add the given file(s) right *before* the target
    file. It is declared by replacing the normal path with a 3-element tuple
    `('before', <target>, <path>)`, like so:

    .. code-block:: py

        'web.assets_common': [
            ('before', 'web/static/src/css/bootstrap_overridden.scss', 'my_addon/static/src/css/bootstrap_overridden.scss'),
        ],

- Add one or multiple file(s) after a specific file: `after`
    Same as `before`, with the matching file(s) appended right *after* the target file.
    It is declared by replacing the normal path with a 3-element tuple
    `('after', <target>, <path>)`, like so:

    .. code-block:: py

        'web.assets_common': [
            ('after', 'web/static/src/css/list_view.scss', 'my_addon/static/src/css/list_view.scss'),
        ],

- Use nested bundles: `include`
    The `include` directive is a way to use a same bundle in other bundles to minimize
    the size of your manifest. In Odoo we use sub bundles (prefixed with an underscore
    by convention) to batch files used in multiple other bundles. You can then
    specify the sub bundle as a pair `('include', <bundle>)` like this:

    .. code-block:: py

        'web.assets_common': [
            ('include', 'web._primary_variables'),
        ],

- Remove one or multiple file(s): `remove`
    In some additional module you may want to get rid of the call of a certain asset
    in a bundle. Any file can be removed from an existing bundle using the `remove`
    directive by specifying a pair `('remove', <target>)`:

    .. code-block:: py

        'web.assets_common': [
            ('remove', 'web/static/src/js/boot.js'),
        ],

- Replace an asset file with one or multiple file(s): `replace`
    Let us now say that an asset need not only to be removed, but you also want to insert
    your new version of that asset at the same exact position. This can be done with
    the `replace` directive, using a 3-element tuple `('replace', <target>, <path>)`:

    .. code-block:: py

        'web.assets_common': [
            ('replace', 'web/static/src/js/boot.js', 'my_addon/static/src/js/boot.js'),
        ],

    Note that all directives targeting a certain asset file (i.e. `before`, `after`,
    `replace` and `remove`) need that file to be declared beforehand, either
    in manifests higher up in the hierarchy or in ``ir.asset`` records with a lower
    sequence.

.. note::

    Note that the files in a bundle are all loaded immediately when the user loads the
    odoo web client. This means that the files are transferred through the network
    every time (except when the browser cache is active). In some cases, it may be
    better to lazyload some assets. For example, if a widget requires a large
    library, and that widget is not a core part of the experience, then it may be
    a good idea to only load the library when the widget is actually created. The
    widget class has actually built-in support just for this use case. (see section
    :ref:`reference/javascript_reference/qweb`)

Assets loading order
--------------------

The order in which assets are loaded is sometimes critical and must be deterministic,
mostly for stylesheets priorities and setup scripts. Assets in Odoo are processed
as follows.

1. When an asset bundle is called (e.g. `t-call-assets="web.assets_common"`), an empty
list of assets is generated

2. All records of type ``ir.asset`` matching the bundle will be fetched and sorted
by sequence number. Then all records with a sequence strictly less than 16 will
be processed and applied to the current list of assets.

3. All modules declaring assets for said bundle in their manifest will apply their
assets operations to this list. This is done following the order of modules dependencies
(e.g. 'web' assets will be processed before 'website'). If a directive tries to add
a file already present in the list, nothing is done for that file. In other word,
only the first occurrence of a file is kept in the list.

4. The remaining ``ir.asset`` records (those with a sequence greater than or equal
to 16) are then processed and applied as well.

Assets declared in the manifest may need to be loaded in a particular order, for
example :file:`jquery.js` must be loaded before all other jquery scripts when loading the
lib folder. One solution would be to create an ``ir.asset`` record with a lower sequence
or a 'prepend' directive, but there is another simpler way to do so.

Since the unicity of each file path in the list of assets is guaranteed, you can
mention any specific file before a glob that includes it. That file will thus appear
in the list before all the others included in the glob.

.. code-block:: py

    'web.assets_common': [
        'my_addon/static/lib/jquery/jquery.js',
        'my_addon/static/lib/jquery/**/*',
    ],

.. note::

    A module *b* removing/replacing the assets declared in a module *a* will have
    to depend on it. Trying to operate on assets that have yet to be declared will
    result in an error.

The asset model (`ir.asset`)
------------------------------

In most cases the assets declared in the manifest will largely suffice. Yet for
more flexibility, the framework also supports dynamic assets declared in the
database.
This is done by creating ``ir.asset`` records. Those will be processed as if they
were found in a module manifest, and they give the same expressive power as their
manifest counterparts.

.. autoclass:: odoo.addons.base.models.ir_asset.IrAsset

`name`
    Name of the asset record (for identification purpose).

`bundle`
    Bundle in which the asset will be applied.

`directive` (default= `append`)
    This field determines how the `path` (and `target` if needed) will be interpreted.
    Here is the list of available directives along with their required arguments:

    - **append**: `path`
    - **prepend**: `path`
    - **before**: `target`, `path`
    - **after**: `target`, `path`
    - **include**: `path` (interpreted as a **bundle name**)
    - **remove**: `path` (interpreted as a **target asset** to remove)
    - **replace**: `target`, `path`

`path`
    A string defining one of the following:

    - a **relative path** to an asset file in the addons file system;
    - a **glob pattern** to a set of asset files in the addons file system;
    - a **URL** to an attachment or external asset file;
    - a **bundle name**, when using the `include` directive.

`target`
    Target file to specify a position in the bundle. Can only be used with the
    directives `replace`, `before` and `after`.

`active` (default= `True`)
    Whether the record is active

`sequence` (default= `16`)
    Loading order of the asset records (ascending). A sequence lower than 16 means
    that the asset will be processed *before* the ones declared in the manifest.

