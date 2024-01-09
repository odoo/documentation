====================
Upgrade Util package
====================

The `Upgrade Util package <https://github.com/odoo/upgrade-util/>`_ is a library that contains
helper functions to facilitate the writing of upgrade scripts. This package, used by Odoo for the
migration scripts of standard modules, provides reliability and helps speed up the upgrade process:

.. todo:: Check if needed - and syntaxis

- The helper functions make sure the data is consitent in your database.
- It takes care of indirect references.
- Allows calling functions and avoid writing code.
- Helpers allow to focus on what is important for the upgrade and not think of details.


Installation
============

Once you have clone this repository locally, just start `odoo` with the `src` directory prepended to
the `--upgrade-path` option.

.. code-block:: console

   $ ./odoo-bin --upgrade-path=/path/to/upgrade-util/src,/path/to/other/upgrade/script/directory [...]

On platforms where you do not manage Odoo yourself, you can install this package via `pip`:

.. code-block:: console

   $ python3 -m pip install git+https://github.com/odoo/upgrade-util@master

On `Odoo.sh <https://www.odoo.sh/>`_ it is recommended to add it to the :file:`requirements.txt` of
your repository. For this, add the following line inside the file::

   odoo_upgrade @ git+https://github.com/odoo/upgrade-util@master

Using the Util package
======================

Once installed, the following packages are available for the migration scripts:

- :file:`odoo.upgrade.util`: the helper themself.
- :file:`odoo.upgrade.testing`: base TestCase classes.

To use it migration scripts, simply import it:

.. code-block:: python

   from odoo.upgrade import util


   def migrate(cr, version):
      # Rest of the script

Now, the helper functions are available to be called through `util`.

Util functions
==============

The util package provides many useful functions to ease the upgrade process. Here, we will describe
some of the most useful ones. You can find them by going to the `upgrade-util repository
<https://github.com/odoo/upgrade-util/tree/master/src/util>`_.

.. todo:: Check how to add technical information
.. Link like official Odoo doc, to repo and auto-generated ?

.. todo:: How to display the information?
.. todo:: What functions to show?

Fields
------

- remove_field
- move_field_to_module
- rename_field
- convert_field_to_html

Models
------

- remove_model
- rename_model
- merge_model

Modules
-------

- remove_module
- rename_module
- merge_module

ORM
---

- env
- recompute_fields

Misc
----

- skippable_cm

PostgreSQL
----------

- parallel_execute
- explode_query_range
- create_column
- column_exists
- remove_column
- table_exists
- create_index
- rename_table
- create_m2m

Records
-------

- remove_record
- remove_menus
- remove_group
- rename_xmlid
- ref
- ensure_xmlid_match_record
- update_record_from_xml
- reset_cowed_views
- convert_jinja_to_qweb

.. tabs::

   .. tab:: Fields

      - remove_field
      - move_field_to_module
      - rename_field
      - convert_field_to_html

   .. tab:: Models

      :attr:`remove_model`
         remove_model explanation
      :attr:`rename_model`
         rename_model explanation
      :attr:`merge_model`
         merge_model explanation

   .. tab:: Modules

      - remove_module
      - rename_module
      - merge_module

   .. tab:: ORM

      - env
      - recompute_fields

   .. tab:: Misc

      - skippable_cm

   .. tab:: PostgreSQL

      - parallel_execute
      - explode_query_range
      - create_column
      - column_exists
      - remove_column
      - table_exists
      - create_index
      - rename_table
      - create_m2m

   .. tab:: Records

      - remove_record
      - remove_menus
      - remove_group
      - rename_xmlid
      - ref
      - ensure_xmlid_match_record
      - update_record_from_xml
      - reset_cowed_views
      - convert_jinja_to_qweb

.. todo:: Add examples 