.. _reference/orm/changelog:

=========
Changelog
=========

Odoo version 16.0
=================
- The change with static XML into bundle asset impacting all modules has just been merged.
    https://github.com/odoo/odoo/commit/f05adbc8b59c67cbec4847687a1ee07e620c2a7a

    Assets declared in "__manifest__.py" can now contain static xml files (for owl & qweb templates).
    The "web.assets_qweb" bundle including almost all the static xml and the widget attributes `xmlDependencies` have been removed.

    The file `@web/core/assets.js` now contains more general asset utility functions (loadJS, loadCSS, getBundle, loadBundle).
    Legacy file `ajax.js` is deprecated and will be removed and should not be used anymore.
    When a bundle is lazy loaded (from loadBundle), it is considered to be loaded when the JS, CSS and XML templates are loaded.

    Example:
    Version before:
.. code-block:: python

    'web.assets_qweb': [
            'module_name/static/src/folder/template.xml',
        ],
        'web.assets_backend': [
             'module_name/static/src/folder/component.js',
             'module_name/static/src/folder/*.scss',
        ],
    +   xmlDependencies: ['/module_name/static/folder/template2.xml'],
    +   await ajax.loadXML('/module_name/static/folder/template3.xml', qweb);


Is now:
.. code-block:: python
        'web.assets_backend': [
             'module_name/static/src/folder/component.js',
             'module_name/static/src/folder/*.scss',
             'module_name/static/src/folder/*.xml',
        ],

    or simplify into:
.. code-block:: python
        'web.assets_backend': [
             'module_name/static/src/folder/*',
        ],



Odoo Online version 15.4
========================

- New API for flushing to the database and invalidating the cache with
  `#87527 <https://github.com/odoo/odoo/pull/87527>`_.
  New methods have been added to `odoo.models.Model` and `odoo.api.Environment`,
  and are less confusing about what is actually done in each case.
  See the section :ref:`SQL Execution <reference/orm/sql>`.

Odoo Online version 15.2
========================

- Specific index types on fields:  With `#83274 <https://github.com/odoo/odoo/pull/83274>`_ and
  `#83015 <https://github.com/odoo/odoo/pull/83015>`_, developers can now define what type of
  indexes can be used on fields by PostgreSQL. See the :ref:`index property <reference/fields>` of
  `odoo.fields.Field`.
