.. _reference/orm/changelog:

=========
Changelog
=========

Odoo version 17.0
=================

- Introduce an :class:`~odoo.tools.SQL` wrapper object to make SQL composition
  easier and safer with respect to SQL injections. Methods of the ORM now use it
  internally. Introduced by `#134677 <https://github.com/odoo/odoo/pull/134677>`_.

Odoo Online version 16.4
========================

- Method :meth:`~odoo.models.Model.name_get` has been deprecated with
  `#122085 <https://github.com/odoo/odoo/pull/122085>`_.
  Read field `display_name` instead.

Odoo Online version 16.3
========================

- Method :meth:`~odoo.models.Model._read_group` has a new signature with
  `#110737 <https://github.com/odoo/odoo/pull/110737>`_

Odoo Online version 16.2
========================

- Refactor the implementation of searching and reading methods to be able to
  combine both in a minimal number of SQL queries. We introduce two new methods
  :meth:`~odoo.models.Model.search_fetch` and :meth:`~odoo.models.Model.fetch`
  that take advantage of the combination. More details can be found on the pull
  request `#112126 <https://github.com/odoo/odoo/pull/112126>`_.

Odoo version 16.0
=================

- Translations for translated fields are stored as JSONB values with
  `#97692 <https://github.com/odoo/odoo/pull/97692>`_
  and `#101115 <https://github.com/odoo/odoo/pull/101115>`_.
  Code translations are no longer stored into the database.
  They become static and are extracted from the PO files when needed.
- :meth:`~odoo.models.Model.search_count` takes the :attr:`limit` argument into account with `#95589 <https://github.com/odoo/odoo/pull/95589>`_.
  It limits the number of records to count, improving performance when a partial result is acceptable.

Odoo Online version 15.4
========================

- New API for flushing to the database and invalidating the cache with
  `#87527 <https://github.com/odoo/odoo/pull/87527>`_.
  New methods have been added to `odoo.models.Model` and `odoo.api.Environment`,
  and are less confusing about what is actually done in each case.
  See the section :ref:`SQL Execution <reference/orm/sql>`.

Odoo Online version 15.3
========================

- The argument `args` is renamed to `domain` for :meth:`~odoo.models.Model.search`, :meth:`~odoo.models.Model.search_count`
  and :meth:`~odoo.models.Model._search`. `#83687 <https://github.com/odoo/odoo/pull/83687>`_
- :meth:`~odoo.models.Model.filtered_domain` conserves the order of the current recordset. `#83687 <https://github.com/odoo/odoo/pull/83687>`_
- :meth:`~odoo.models.Model.browse` does not accept :class:`str` as `ids`. `#83687 <https://github.com/odoo/odoo/pull/83687>`_
- The methods :meth:`~odoo.models.Model.fields_get_keys` and :meth:`~odoo.models.Model.get_xml_id` on :class:`~odoo.models.Model` are deprecated. `#83687 <https://github.com/odoo/odoo/pull/83687>`_
- The method :meth:`~odoo.models.Model._mapped_cache` is removed. `#83687 <https://github.com/odoo/odoo/pull/83687>`_
- Remove the :attr:`limit` attribute of :class:`~odoo.fields.One2many` and :class:`~odoo.fields.Many2many`. `#83687 <https://github.com/odoo/odoo/pull/83687>`_

Odoo Online version 15.2
========================

- Specific index types on fields:  With `#83274 <https://github.com/odoo/odoo/pull/83274>`_ and
  `#83015 <https://github.com/odoo/odoo/pull/83015>`_, developers can now define what type of
  indexes can be used on fields by PostgreSQL. See the :ref:`index property <reference/fields>` of
  `odoo.fields.Field`.
- The :attr:`_sequence` attribute of :class:`~odoo.models.Model` is removed. Odoo lets PostgreSQL use the default sequence of the primary key. `#82727 <https://github.com/odoo/odoo/pull/82727>`_
- The method :meth:`~odoo.models.Model._write` does not raise an error for non-existing records. `#82727 <https://github.com/odoo/odoo/pull/82727>`_
- The :attr:`column_format` and :attr:`deprecated` attributes of :class:`~odoo.fields.Field` are removed. `#82727 <https://github.com/odoo/odoo/pull/82727>`_
