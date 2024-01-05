=============
Upgrade utils
=============

`Upgrade utils <https://github.com/odoo/upgrade-util/>`_ is a library that contains helper functions
to facilitate the writing of upgrade scripts. This library, used by Odoo for the upgrade scripts of
standard modules, provides reliability and helps speed up the upgrade process:

- The helper functions help make sure the data is consistent in the database.
- It takes care of indirect references of the updated records.
- Allows calling functions and avoid writing code, saving time and reducing development risks.
- Helpers allow to focus on what is important for the upgrade and not think of details.

Installation
============

Clone the `Upgrade utils repository <https://github.com/odoo/upgrade-util/>`_ locally and start
``odoo`` with the ``src`` directory prepended to the ``--upgrade-path`` option.

.. code-block:: console

   $ ./odoo-bin --upgrade-path=/path/to/upgrade-util/src,/path/to/other/upgrade/script/directory [...]

On platforms where you do not manage Odoo yourself, you can install this library via `pip`:

.. code-block:: console

   $ python3 -m pip install git+https://github.com/odoo/upgrade-util@master

On `Odoo.sh <https://www.odoo.sh/>`_ it is recommended to add it to the :file:`requirements.txt` of
the custom repository. For this, add the following line inside the file::

   odoo_upgrade @ git+https://github.com/odoo/upgrade-util@master

Using Upgrade utils
===================

Once installed, the following packages are available for the upgrade scripts:

- :mod:`odoo.upgrade.util`: the helper itself.
- :mod:`odoo.upgrade.testing`: base TestCase classes.

To use it in upgrade scripts, simply import it:

.. code-block:: python

   from odoo.upgrade import util


   def migrate(cr, version):
      # Rest of the script

Now, the helper functions are available to be called through ``util``.

Util functions
==============

Upgrade utils provides many useful functions to ease the upgrade process. Here, we describe some
of the most useful ones. Refer to the `util folder
<https://github.com/odoo/upgrade-util/tree/master/src/util>`_ for the comprehensive declaration of
helper functions.

.. note::

   All util functions receive :attr:`cr` as a parameter. This refers to the database cursor. Pass
   the one received as a parameter in :meth:`migrate`.

Fields
------

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/fields.py#L91>`_
.. method:: remove_field(cr, model, fieldname, cascade=False, drop_column=True, skip_inherit=())

   Remove a field and its references from the database.

   :param str model: model name of the field to remove
   :param str fieldname: name of the field to remove
   :param bool cascade: whether the field's column and inheritance are removed in ``CASCADE``
   :param bool drop_column: whether the field's column is dropped
   :param list(str) or str skip_inherit: list of models whose field's inheritance is skipped.
      Use ``"*"`` to skip all inheritances

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/fields.py#L362>`_
.. method:: rename_field(cr, model, old, new, update_references=True, domain_adapter=None, skip_inherit=())

   Rename a field and its references from ``old`` to ``new``.

   :param str model: model name of the field to rename
   :param str old: current name od the field to rename
   :param str new: new name od the field to rename
   :param bool update_references: whether all references of field ``old`` to ``new`` are replaced
      in: ``ir_filters``, ``ir_exports_line``, ``ir_act_server``, ``mail_alias``,
      ``ir_ui_view_custom (dashboard)``, ``domains (using "domain_adapter")``, ``related fields``
   :param function domain_adapter: function that takes three arguments and returns a domain that
      substitutes the original leaf: ``(leaf: Tuple[str,str,Any], in_or: bool, negated: bool)`` ->
      ``List[Union[str,Tuple[str,str,Any]]]``
   :param list(str) or str skip_inherit: list of models whose field's inheritance is skipped.
      Use ``"*"`` to skip all inheritances

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/fields.py#L337>`_
.. method:: move_field_to_module(cr, model, fieldname, old_module, new_module, skip_inherit=())

   Move a field's reference in ``ir_model_data`` table from ``old_module`` to ``new_module``.

   :param str model: model name of the field to move
   :param str fieldname: name of the field to move
   :param str old_module: current module name of the field to move
   :param str new_module: new module name of the field to move
   :param list(str) or str skip_inherit: list of models whose field's inheritance is skipped.
      Use ``"*"`` to skip all inheritances

Models
------

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/models.py#L53>`_
.. method:: remove_model(cr, model, drop_table=True, ignore_m2m=())

   Remove a model and its references from the database.

   :param str model: name of the model to remove
   :param bool drop_table: whether the model's table is dropped
   :param list(str) or str ignore_m2m: list of m2m tables ignored to remove. Use ``"*"`` to ignore
      all m2m tables

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/models.py#L203>`_
.. method:: rename_model(cr, old, new, rename_table=True)

   Rename a model and its references from ``old`` to ``new``.

   :param str old: current name of the model to rename
   :param str new: new name of the model to rename
   :param bool rename_table: whether the model's table is renamed

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/models.py#L323>`_
.. method:: merge_model(cr, source, target, drop_table=True, fields_mapping=None, ignore_m2m=())

   Merge the references from ``source`` model into ``target`` model and removes ``source`` model and
   its references. By default, only the fields with the same name in both models are mapped.

   .. warning::
      This function does not move the records from ``source`` model to ``target`` model.

   :param str source: name of the source model of the merge
   :param str target: name of the destination model of the merge
   :param bool drop_table: whether the source model's table is dropped
   :param dict fields_mapping: Dictionary ``{"source_model_field_1": "target_model_field_1", ...}``
      mapping fields with different names on both models
   :param list(str) or str ignore_m2m: list of m2m tables ignored to remove from source model.

Modules
-------

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/modules.py#L218>`_
.. method:: remove_module(cr, module)

   Uninstall and remove a module and its references from the database.

   :param str module: name of the module to remove

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/modules.py#L263>`_
.. method:: rename_module(cr, old, new)

   Rename a module and its references from ``old`` to ``new``.

   :param str old: current name of the module to rename
   :param str new: new name of the module to rename

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/modules.py#L323>`_
.. method:: merge_module(cr, old, into, update_dependers=True)

   Move all references of module ``old`` into module ``into``.

   :param str old: name of the source module of the merge
   :param str into: ame of the destination module of the merge
   :param bool update_dependers: whether the dependencies of modules that depends on ``old`` are
      updated

ORM
---

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/orm.py#L43>`_
.. method:: env(cr)

   Create a new environment from the cursor.

   .. warning::
      This function does NOT empty the cache maintained on the cursor for superuser with an empty
      environment. A call to `invalidate_cache` will most probably be necessary every time you
      directly modify something in database.

   :return: The new environment
   :rtype: :class:`~odoo.api.Environment`

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/orm.py#L218>`_
.. method:: recompute_fields(cr, model, fields, ids=None, logger=_logger, chunk_size=256, strategy="auto")

   Recompute field values. Possible strategies to process the recomputation:

   - ``flush``: Flush the recomputation when it's finished
   - ``commit``: Commit the recomputation when it's finished
   - ``auto``: The function chooses the best alternative based on the number of records to recompute
     and the fields traceability

   :param str model:  model name of the field(s) to recompute
   :param list(str) fields: list of field names to recompute
   :param list(int) ids: list of record IDs to recompute
   :param logger: Logger used to print the progress of the function
   :type logger: :class:`logging.Logger`
   :param int chunk_size: size of the chunk used to split the records for better processing
   :param str strategy: strategy used to process the recomputation

Records
-------

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/records.py#L612>`_
.. method:: ref(cr, xmlid)

   Return the id corresponding to the given :term:`xml_id <external identifier>`.

   :param str xml_id: Record xml_id, under the format ``<module.id>``
   :return: Found record id, if any
   :rtype: int or `None`

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/records.py#L281>`_
.. method:: remove_record(cr, name)

   Remove a record and its references corresponding to the given
   :term:`xml_id <external identifier>`.

   :param str name: record xml_id, under the format ``<module.id>``

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/records.py#L548>`_
.. method:: rename_xmlid(cr, old, new, noupdate=None, on_collision="fail")

   Rename the :term:`external Identifier` of a record. Possible actions to take if the external
   Identifier already exists on the database:

   - ``fail``: raise ``MigrationError`` and prevent renaming
   - ``merge``: renames the external Identifier and removes the old one

   :param str old: current xml_id of the record, under the format ``<module.id>``
   :param str new: new xml_id of the record, under the format ``<module.id>``
   :param bool noupdate: value to set on the ir_model_data record ``noupdate`` field
   :param str on_collision: action to take if the xml_id already exists

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/records.py#L652>`_
.. method:: ensure_xmlid_match_record(cr, xmlid, model, values)

   Match a record with an xmlid by creating or updating the external identifier.

   This function is useful when migrating in-database records into a custom module, to create the
   record's xmlid before the module is updated and avoid duplication.

   :param str xmlid: record xml_id, under the format ``<module.id>``
   :param str model: model name of the record
   :param dict values: Dictionary ``{"fieldname_1": "value_1", ...}`` mapping fields and values to
      search for the record to update. For example:

      .. code-block:: python

         values = {"id": 123}
         values = {"name": "INV/2024/0001", company_id: 1}

   :return: the :term:`xml_id <external identifier>` of the record.
   :rtype: str

.. `[source] <https://github.com/odoo/upgrade-util/blob/master/src/util/records.py#L720>`_
.. method:: update_record_from_xml(cr, xmlid, reset_write_metadata=True, force_create=True, from_module=None, reset_translations=())

   Update a record based on its definition in the :doc:`/developer/reference/backend/data`.

   Useful to update ``noupdate`` records, in order to reset them for the upgraded version.

   :param str xmlid: record xml_id, under the format ``<module.id>``
   :param bool reset_write_metadata: whether the metadata before the record update is kept
   :param bool force_create: whether the record is created if it does not exist
   :param str from_module: name of the module from which to update the record. Useful when the
      record is rewritten in another module.
   :param set of str reset_translations: set of field names whose translations get reset
