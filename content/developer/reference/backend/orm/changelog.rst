.. _reference/orm/changelog:

=========
Changelog
=========

Odoo version 16.0
========================

- Translations for translated fields are stored as JSONB values with
  `#97692 <https://github.com/odoo/odoo/pull/97692>`_
  and `#101115 <https://github.com/odoo/odoo/pull/101115>`_.
  Code translations are no longer stored into the database.
  They become static and are extracted from the PO files when needed.

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
