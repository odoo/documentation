:show-content:

.. _reference/orm:

=======
ORM API
=======

.. toctree::
   :titlesonly:

   orm/changelog

.. automodule:: odoo.models

.. _reference/orm/models:
.. _reference/orm/model:

Models
======

Model fields are defined as attributes on the model itself::

    from odoo import models, fields
    class AModel(models.Model):
        _name = 'a.model.name'

        field1 = fields.Char()

.. warning:: this means you cannot define a field and a method with the same
             name, the last one will silently overwrite the former ones.

By default, the field's label (user-visible name) is a capitalized version of
the field name, this can be overridden with the ``string`` parameter. ::

        field2 = fields.Integer(string="Field Label")

For the list of field types and parameters, see :ref:`the fields reference
<reference/fields>`.

Default values are defined as parameters on fields, either as a value::

    name = fields.Char(default="a value")

or as a function called to compute the default value, which should return that
value::

    def _default_name(self):
        return self.get_value()

    name = fields.Char(default=lambda self: self._default_name())

.. rubric:: API

.. autoclass:: odoo.models.BaseModel()

    .. autoattribute:: _auto
    .. attribute:: _log_access

        Whether the ORM should automatically generate and update the
        :ref:`reference/fields/automatic/log_access`.

        Defaults to whatever value was set for :attr:`~._auto`.

    .. autoattribute:: _table
    .. autoattribute:: _sql_constraints

    .. autoattribute:: _register
    .. autoattribute:: _abstract
    .. autoattribute:: _transient

    .. autoattribute:: _name
    .. autoattribute:: _description

    .. autoattribute:: _inherit
    .. autoattribute:: _inherits

    .. autoattribute:: _rec_name
    .. autoattribute:: _order

    .. autoattribute:: _check_company_auto

    .. autoattribute:: _parent_name
    .. autoattribute:: _parent_store

    .. autoattribute:: _fold_name

AbstractModel
-------------

.. autoclass:: odoo.models.AbstractModel

Model
-----

.. autoclass:: odoo.models.Model

   .. autoattribute:: _auto
   .. autoattribute:: _abstract

TransientModel
--------------

.. autoclass:: odoo.models.TransientModel
   :members: _transient_vacuum

   .. autoattribute:: _transient_max_count
   .. autoattribute:: _transient_max_hours

.. _reference/fields:
.. _reference/orm/fields:

Fields
======

.. currentmodule:: odoo.fields

.. autoclass:: Field()

.. _reference/fields/basic:

Basic Fields
------------

.. autoclass:: Boolean()

.. autoclass:: Char()

.. autoclass:: Float()

.. autoclass:: Integer()

.. _reference/fields/advanced:

Advanced Fields
---------------

.. autoclass:: Binary()

.. autoclass:: Html()

.. autoclass:: Image()

.. autoclass:: Monetary()

.. autoclass:: Selection()

.. autoclass:: Text()

.. _reference/fields/date:

Date(time) Fields
~~~~~~~~~~~~~~~~~

:class:`Dates <odoo.fields.Date>` and :class:`Datetimes <odoo.fields.Datetime>`
are very important fields in any kind of business application.
Their misuse can create invisible yet painful bugs, this section
aims to provide Odoo developers with the knowledge required
to avoid misusing these fields.

When assigning a value to a Date/Datetime field, the following options are valid:

* A `date` or `datetime` object.
* A string in the proper server format:

  * ``YYYY-MM-DD`` for :class:`~odoo.fields.Date` fields,
  * ``YYYY-MM-DD HH:MM:SS`` for :class:`~odoo.fields.Datetime` fields.

* `False` or `None`.

The Date and Datetime fields class have helper methods to attempt conversion
into a compatible type:

* :func:`~odoo.fields.Date.to_date` will convert to a :class:`datetime.date`
* :func:`~odoo.fields.Datetime.to_datetime` will convert to a :class:`datetime.datetime`.

.. example::

    To parse date/datetimes coming from external sources::

        fields.Date.to_date(self._context.get('date_from'))

Date / Datetime comparison best practices:

* Date fields can **only** be compared to date objects.
* Datetime fields can **only** be compared to datetime objects.

.. warning:: Strings representing dates and datetimes can be compared
             between each other, however the result may not be the expected
             result, as a datetime string will always be greater than a
             date string, therefore this practice is **heavily**
             discouraged.

Common operations with dates and datetimes such as addition, subtraction or
fetching the start/end of a period are exposed through both
:class:`~odoo.fields.Date` and :class:`~odoo.fields.Datetime`.
These helpers are also available by importing `odoo.tools.date_utils`.

.. note:: Timezones

    Datetime fields are stored as `timestamp without timezone` columns in the database and are stored
    in the UTC timezone. This is by design, as it makes the Odoo database independent from the timezone
    of the hosting server system. Timezone conversion is managed entirely by the client side.

.. autoclass:: Date()
    :members: today, context_today, to_date, to_string, start_of, end_of, add, subtract

.. autoclass:: Datetime()
    :members: now, today, context_timestamp, to_datetime, to_string, start_of, end_of, add, subtract

.. _reference/fields/relational:

Relational Fields
~~~~~~~~~~~~~~~~~

.. autoclass:: Many2one()

.. autoclass:: One2many()

.. autoclass:: Many2many()

.. autoclass:: Command()
   :members:
   :undoc-members:
   :member-order: bysource

Pseudo-relational fields
~~~~~~~~~~~~~~~~~~~~~~~~

.. autoclass:: Reference()

.. autoclass:: Many2oneReference()

.. _reference/fields/compute:

Computed Fields
~~~~~~~~~~~~~~~

Fields can be computed (instead of read straight from the database) using the
``compute`` parameter. **It must assign the computed value to the field**. If
it uses the values of other *fields*, it should specify those fields using
:func:`~odoo.api.depends`. ::

    from odoo import api
    total = fields.Float(compute='_compute_total')

    @api.depends('value', 'tax')
    def _compute_total(self):
        for record in self:
            record.total = record.value + record.value * record.tax

* dependencies can be dotted paths when using sub-fields::

    @api.depends('line_ids.value')
    def _compute_total(self):
        for record in self:
            record.total = sum(line.value for line in record.line_ids)

* computed fields are not stored by default, they are computed and
  returned when requested. Setting ``store=True`` will store them in the
  database and automatically enable searching and grouping.
  Note that by default, ``compute_sudo=True`` is set on the field.
* searching on a computed field can also be enabled by setting the ``search``
  parameter. The value is a method name returning a
  :ref:`reference/orm/domains`. ::

    upper_name = field.Char(compute='_compute_upper', search='_search_upper')

    def _search_upper(self, operator, value):
        if operator == 'like':
            operator = 'ilike'
        return Domain('name', operator, value)

  The search method is invoked when processing domains before doing an
  actual search on the model. It must return a domain equivalent to the
  condition: ``field operator value``.

.. TODO and/or by setting the store to True for search domains ?

* computed fields are readonly by default. To allow *setting* values on a
  computed field, use the ``inverse`` parameter.
  It is the name of a function reversing the computation and
  setting the relevant fields::

    document = fields.Char(compute='_get_document', inverse='_set_document')

    def _get_document(self):
        for record in self:
            with open(record.get_document_path) as f:
                record.document = f.read()
    def _set_document(self):
        for record in self:
            if not record.document: continue
            with open(record.get_document_path()) as f:
                f.write(record.document)

* multiple fields can be computed at the same time by the same method, just
  use the same method on all fields and set all of them::

    discount_value = fields.Float(compute='_apply_discount')
    total = fields.Float(compute='_apply_discount')

    @api.depends('value', 'discount')
    def _apply_discount(self):
        for record in self:
            # compute actual discount from discount percentage
            discount = record.value * record.discount
            record.discount_value = discount
            record.total = record.value - discount

.. warning::

    While it is possible to use the same compute method for multiple
    fields, it is not recommended to do the same for the inverse
    method.

    During the computation of the inverse, **all** fields that use
    said inverse are protected, meaning that they can't be computed,
    even if their value is not in the cache.

    If any of those fields is accessed and its value is not in cache,
    the ORM will simply return a default value of `False` for these fields.
    This means that the value of the inverse fields (other than the one
    triggering the inverse method) may not give their correct value and
    this will probably break the expected behavior of the inverse method.

.. _reference/fields/related:

Related fields
~~~~~~~~~~~~~~

A special case of computed fields are *related* (proxy) fields, which provide
the value of a sub-field on the current record. They are defined by setting
the ``related`` parameter and like regular computed fields they can be
stored::

    nickname = fields.Char(related='user_id.partner_id.name', store=True)

The value of a related field is given by following a sequence of
relational fields and reading a field on the reached model. The complete
sequence of fields to traverse is specified by the ``related`` attribute.

Some field attributes are automatically copied from the source field if
they are not redefined: ``string``, ``help``, ``required`` (only
if all fields in the sequence are required), ``groups``, ``digits``, ``size``,
``translate``, ``sanitize``, ``selection``, ``comodel_name``, ``domain``,
``context``. All semantic-free attributes are copied from the source
field.

By default, related fields are:

* not stored
* not copied
* readonly
* computed in superuser mode

Add the attribute ``store=True`` to make it stored, just like computed
fields. Related fields are automatically recomputed when their
dependencies are modified.

.. tip::

    You can specify precise field dependencies if you don't want
    the related field to be recomputed on any dependency change::

        nickname = fields.Char(
            related='partner_id.name', store=True,
            depends=['partner_id'])
        # The nickname will only be recomputed when the partner_id
        # is modified, not when the name is modified on the partner.

.. warning::

    You cannot chain :class:`~odoo.fields.Many2many` or :class:`~odoo.fields.One2many` fields in ``related`` fields dependencies.

    ``related`` can be used to refer to a :class:`~odoo.fields.One2many` or
    :class:`~odoo.fields.Many2many` field on another model on the
    condition that it's done through a ``Many2one`` relation on the current model.
    ``One2many`` and ``Many2many`` are not supported and the results will not be
    aggregated correctly::

      m2o_id = fields.Many2one()
      m2m_ids = fields.Many2many()
      o2m_ids = fields.One2many()

      # Supported
      d_ids = fields.Many2many(related="m2o_id.m2m_ids")
      e_ids = fields.One2many(related="m2o_id.o2m_ids")

      # Won't work: use a custom Many2many computed field instead
      f_ids = fields.Many2many(related="m2m_ids.m2m_ids")
      g_ids = fields.One2many(related="o2m_ids.o2m_ids")

.. currentmodule:: odoo.models

.. _reference/fields/automatic:

Automatic fields
----------------

.. attribute:: Model.id

    Identifier :class:`field <odoo.fields.Field>`

    If length of current recordset is 1, return id of unique record in it.

    Raise an Error otherwise.

.. attribute:: Model.display_name

    Name :class:`field <odoo.fields.Char>` displayed by default in the web client

    By default, it equals to :attr:`~odoo.models.BaseModel._rec_name` value field
    but the behavior can be customized by overriding :attr:`~odoo.models.BaseModel._compute_display_name`

.. _reference/fields/automatic/log_access:

Access Log fields
~~~~~~~~~~~~~~~~~

These fields are automatically set and updated if
:attr:`~odoo.models.BaseModel._log_access` is enabled. It can be
disabled to avoid creating or updating those fields on tables for which they are
not useful.

By default, :attr:`~odoo.models.BaseModel._log_access` is set to the same value
as :attr:`~odoo.models.BaseModel._auto`

.. attribute:: Model.create_date

    Stores when the record was created, :class:`~odoo.fields.Datetime`

.. attribute:: Model.create_uid

    Stores *who* created the record, :class:`~odoo.fields.Many2one` to a
    ``res.users``.

.. attribute:: Model.write_date

    Stores when the record was last updated, :class:`~odoo.fields.Datetime`

.. attribute:: Model.write_uid

    Stores who last updated the record, :class:`~odoo.fields.Many2one` to a
    ``res.users``.

.. warning:: :attr:`~odoo.models.BaseModel._log_access` *must* be enabled on
             :class:`~odoo.models.TransientModel`.

.. _reference/orm/fields/reserved:

Reserved Field names
--------------------

A few field names are reserved for pre-defined behaviors beyond that of
automated fields. They should be defined on a model when the related
behavior is desired:

.. attribute:: Model.name

   default value for :attr:`~odoo.models.BaseModel._rec_name`, used to
   display records in context where a representative "naming" is
   necessary.

   :class:`~odoo.fields.Char`

.. attribute:: Model.active

  toggles the global visibility of the record, if ``active`` is set to
  ``False`` the record is invisible in most searches and listing.

  :class:`~odoo.fields.Boolean`

  Special methods:

  .. automethod:: Model.toggle_active
  .. automethod:: Model.action_archive
  .. automethod:: Model.action_unarchive

.. attribute:: Model.state

  lifecycle stages of the object, used by the ``states`` attribute on
  :class:`fields <odoo.fields.Field>`.

  :class:`~odoo.fields.Selection`

.. attribute:: Model.parent_id

  default_value of :attr:`~._parent_name`, used to organize
  records in a tree structure and enables the ``child_of``
  and ``parent_of`` operators in domains.

  :class:`~odoo.fields.Many2one`

.. attribute:: Model.parent_path

  When :attr:`~._parent_store` is set to True, used to store a value reflecting
  the tree structure of :attr:`~._parent_name`, and to optimize the operators
  ``child_of`` and ``parent_of`` in search domains.
  It must be declared with ``index=True`` for proper operation.

  :class:`~odoo.fields.Char`

.. attribute:: Model.company_id

  Main field name used for Odoo multi-company behavior.

  Used by `:meth:~odoo.models._check_company` to check multi company consistency.
  Defines whether a record is shared between companies (no value) or only
  accessible by the users of a given company.

  :class:`~odoo.fields.Many2one`
  :type: :class:`~odoo.addons.base.models.res_company`

Recordsets
==========

Interactions with models and records are performed through recordsets, an ordered
collection of records of the same model.

.. warning:: Contrary to what the name implies, it is currently possible for
             recordsets to contain duplicates. This may change in the future.

Methods defined on a model are executed on a recordset, and their ``self`` is
a recordset::

    class AModel(models.Model):
        _name = 'a.model'
        def a_method(self):
            # self can be anything between 0 records and all records in the
            # database
            self.do_operation()

Iterating on a recordset will yield new sets of *a single record*
("singletons"), much like iterating on a Python string yields strings of a
single characters::

        def do_operation(self):
            print(self) # => a.model(1, 2, 3, 4, 5)
            for record in self:
                print(record) # => a.model(1), then a.model(2), then a.model(3), ...

Field access
------------

Recordsets provide an "Active Record" interface: model fields can be read and
written directly from the record as attributes.

.. note::

    When accessing non-relational fields on a recordset of potentially multiple
    records, use :meth:`~odoo.models.BaseModel.mapped`::

        total_qty = sum(self.mapped('qty'))

Field values can also be accessed like dict items, which is more elegant and
safer than ``getattr()`` for dynamic field names.
Setting a field's value triggers an update to the database::

    >>> record.name
    Example Name
    >>> record.company_id.name
    Company Name
    >>> record.name = "Bob"
    >>> field = "name"
    >>> record[field]
    Bob

.. warning::

    Trying to read a field on multiple records will raise an error for non relational
    fields.

Accessing a relational field (:class:`~odoo.fields.Many2one`,
:class:`~odoo.fields.One2many`, :class:`~odoo.fields.Many2many`)
*always* returns a recordset, empty if the field is not set.

Record cache and prefetching
----------------------------

Odoo maintains a cache for the fields of the records, so that not every field
access issues a database request, which would be terrible for performance. The
following example queries the database only for the first statement::

    record.name             # first access reads value from database
    record.name             # second access gets value from cache

To avoid reading one field on one record at a time, Odoo *prefetches* records
and fields following some heuristics to get good performance. Once a field must
be read on a given record, the ORM actually reads that field on a larger
recordset, and stores the returned values in cache for later use. The prefetched
recordset is usually the recordset from which the record comes by iteration.
Moreover, all simple stored fields (boolean, integer, float, char, text, date,
datetime, selection, many2one) are fetched altogether; they correspond to the
columns of the model's table, and are fetched efficiently in the same query.

Consider the following example, where ``partners`` is a recordset of 1000
records. Without prefetching, the loop would make 2000 queries to the database.
With prefetching, only one query is made::

    for partner in partners:
        print partner.name          # first pass prefetches 'name' and 'lang'
                                    # (and other fields) on all 'partners'
        print partner.lang

The prefetching also works on *secondary records*: when relational fields are
read, their values (which are records) are  subscribed for future prefetching.
Accessing one of those secondary records prefetches all secondary records from
the same model. This makes the following example generate only two queries, one
for partners and one for countries::

    countries = set()
    for partner in partners:
        country = partner.country_id        # first pass prefetches all partners
        countries.add(country.name)         # first pass prefetches all countries

.. seealso::
    The methods :meth:`~odoo.models.Model.search_fetch` and
    :meth:`~odoo.models.Model.fetch` can be used to populate the cache of
    records, typically in cases where the prefetching mechanism does not work
    well.


.. _reference/api/decorators:

Method decorators
=================

.. automodule:: odoo.api
    :members: depends, depends_context, constrains, onchange, returns, autovacuum, model, model_create_multi, ondelete

.. .. currentmodule:: odoo.api

.. .. autodata:: model
.. .. autodata:: depends
.. .. autodata:: constrains
.. .. autodata:: onchange
.. .. autodata:: returns
.. .. autodata:: autovacuum

.. todo:: With sphinx 2.0 : autodecorator

.. todo:: Add in Views reference
  * It is possible to suppress the trigger from a specific field by adding
  ``on_change="0"`` in a view::

    <field name="name" on_change="0"/>

  will not trigger any interface update when the field is edited by the user,
  even if there are function fields or explicit onchange depending on that
  field.

.. _reference/orm/environment:

Environment
===========

.. currentmodule:: odoo.api

.. autoclass:: Environment

.. code-block:: bash

    >>> records.env
    <Environment object ...>
    >>> records.env.uid
    3
    >>> records.env.user
    res.user(3)
    >>> records.env.cr
    <Cursor object ...>

When creating a recordset from an other recordset, the environment is
inherited. The environment can be used to get an empty recordset in an
other model, and query that model:

.. code-block:: bash

    >>> self.env['res.partner']
    res.partner()
    >>> self.env['res.partner'].search([('is_company', '=', True), ('customer', '=', True)])
    res.partner(7, 18, 12, 14, 17, 19, 8, 31, 26, 16, 13, 20, 30, 22, 29, 15, 23, 28, 74)

Some lazy properties are available to access the environment (contextual) data:

.. autoattribute:: Environment.lang
.. autoattribute:: Environment.user
.. autoattribute:: Environment.company
.. autoattribute:: Environment.companies

Useful environment methods
--------------------------

.. automethod:: Environment.ref
.. automethod:: Environment.is_superuser
.. automethod:: Environment.is_admin
.. automethod:: Environment.is_system
.. automethod:: Environment.execute_query

Altering the environment
------------------------

.. currentmodule:: odoo.models

.. automethod:: Model.with_context

.. automethod:: Model.with_user

.. automethod:: Model.with_company

.. automethod:: Model.with_env

.. automethod:: Model.sudo

.. _reference/orm/sql:

SQL Execution
-------------

The :attr:`~odoo.api.Environment.cr` attribute on environments is the
cursor for the current database transaction and allows executing SQL directly,
either for queries which are difficult to express using the ORM (e.g. complex
joins) or for performance reasons::

    self.env.cr.execute("some_sql", params)

.. warning::
    Executing raw SQL bypasses the ORM and, by consequent, Odoo security rules.
    Please make sure your queries are sanitized when using user input and prefer using
    ORM utilities if you don't really need to use SQL queries.

The recommended way to build SQL queries is to use the wrapper object

.. autoclass:: odoo.tools.SQL

    .. automethod:: SQL.join
    .. automethod:: SQL.identifier

One important thing to know about models is that they don't necessarily perform
database updates right away. Indeed, for performance reasons, the framework
delays the recomputation of fields after modifying records. And some database
updates are delayed, too. Therefore, before querying the database, one has to
make sure that it contains the relevant data for the query. This operation is
called *flushing* and performs the expected database updates.

.. example::

    .. code-block:: python

        # make sure that 'partner_id' is up-to-date in database
        self.env['model'].flush_model(['partner_id'])

        self.env.cr.execute(SQL("SELECT id FROM model WHERE partner_id IN %s", ids))
        ids = [row[0] for row in self.env.cr.fetchall()]

Before every SQL query, one has to flush the data needed for that query. There
are three levels for flushing, each with its own API. One can flush either
everything, all the records of a model, or some specific records. Because
delaying updates improves performance in general, we recommend to be *specific*
when flushing.

.. automethod:: odoo.api.Environment.flush_all

.. automethod:: Model.flush_model

.. automethod:: Model.flush_recordset

Because models use the same cursor and the :class:`~odoo.api.Environment`
holds various caches, these caches must be invalidated when *altering* the
database in raw SQL, or further uses of models may become incoherent. It is
necessary to clear caches when using ``CREATE``, ``UPDATE`` or ``DELETE`` in
SQL, but not ``SELECT`` (which simply reads the database).

.. example::

    .. code-block:: python

        # make sure 'state' is up-to-date in database
        self.env['model'].flush_model(['state'])

        self.env.cr.execute("UPDATE model SET state=%s WHERE state=%s", ['new', 'old'])

        # invalidate 'state' from the cache
        self.env['model'].invalidate_model(['state'])

Just like flushing, one can invalidate either the whole cache, the cache of all
the records of a model, or the cache of specific records. One can even
invalidate specific fields on some records or all records of a model. As the
cache improves performance in general, we recommend to be *specific* when
invalidating.

.. automethod:: odoo.api.Environment.invalidate_all

.. automethod:: Model.invalidate_model

.. automethod:: Model.invalidate_recordset

The methods above keep the caches and the database consistent with each other.
However, if computed field dependencies have been modified in the database, one
has to inform the models for the computed fields to be recomputed. The only
thing the framework needs to know is *what* fields have changed on *which*
records.

.. example::

    .. code-block:: python

        # make sure 'state' is up-to-date in database
        self.env['model'].flush_model(['state'])

        # use the RETURNING clause to retrieve which rows have changed
        self.env.cr.execute("UPDATE model SET state=%s WHERE state=%s RETURNING id", ['new', 'old'])
        ids = [row[0] for row in self.env.cr.fetchall()]

        # invalidate the cache, and notify the update to the framework
        records = self.env['model'].browse(ids)
        records.invalidate_recordset(['state'])
        records.modified(['state'])

One has to figure out which records have been modified. There are many ways to
do this, possibly involving extra SQL queries. In the example above, we take
advantage of the ``RETURNING`` clause of PostgreSQL to retrieve the information
without an extra query. After making the cache consistent by invalidation,
invoke the method ``modified`` on the modified records with the fields that
have been updated.

.. automethod:: Model.modified


.. _reference/orm/models/crud:

Common ORM methods
==================

.. currentmodule:: odoo.models

Create/Update
-------------

.. todo:: api.model_create_multi information

.. automethod:: Model.create

.. automethod:: Model.copy

.. automethod:: Model.default_get

.. automethod:: Model.name_create

.. automethod:: Model.write

Search/Read
-----------

.. automethod:: Model.browse

.. automethod:: Model.search

.. automethod:: Model.search_count

.. automethod:: Model.search_fetch

.. automethod:: Model.name_search

.. automethod:: Model.fetch

.. automethod:: Model.read

.. automethod:: Model._read_group

.. automethod:: Model.read_group

Fields
~~~~~~

.. automethod:: Model.fields_get

.. _reference/orm/domains:

Search domains
~~~~~~~~~~~~~~

A :class:`~odoo.domains.Domain` is a first-order logical expression used for
filtering and searching recordsets.
A domain can be a simple condition ``(field_expr, operator, value)`` where:

* ``field_expr`` (``str``)
    a field name of the current model, or a relationship traversal through
    a :class:`~odoo.fields.Many2one` using dot-notation e.g. ``'street'``
    or ``'partner_id.country'``. If the field is a date(time) field, you can also
    specify a part of the date using ``'field_name.granularity'``. The supported
    granularities are ``'year_number'``, ``'quarter_number'``, ``'month_number'``, ``'iso_week_number'``,
    ``'day_of_week'``, ``'day_of_month'``, ``'day_of_year'``, ``'hour_number'``, ``'minute_number'``,
    ``'second_number'``.
    They all use an integer as value.

* ``operator`` (``str``)
    an operator used to compare the ``field_expr`` with the ``value``. Valid
    operators are:

    ``=``
        equals to
    ``!=``
        not equals to
    ``>``
        greater than
    ``>=``
        greater than or equal to
    ``<``
        less than
    ``<=``
        less than or equal to
    ``=?``
        unset or equals to (returns true if ``value`` is either ``None`` or
        ``False``, otherwise behaves like ``=``)
    ``=like``
        matches ``field_expr`` against the ``value`` pattern. An underscore
        ``_`` in the pattern stands for (matches) any single character; a
        percent sign ``%`` matches any string of zero or more characters.
    ``like``
        matches ``field_expr`` against the ``%value%`` pattern. Similar to
        ``=like`` but wraps ``value`` with '%' before matching
    ``not like``
        doesn't match against the ``%value%`` pattern
    ``ilike``
        case insensitive ``like``
    ``not ilike``
        case insensitive ``not like``
    ``=ilike``
        case insensitive ``=like``
    ``in``
        is equal to any of the items from ``value``, ``value`` should be a
        collection of items
    ``not in``
        is unequal to all of the items from ``value``
    ``child_of``
        is a child (descendant) of a ``value`` record (value can be either
        one item or a list of items).

        Takes the semantics of the model into account (i.e following the
        relationship field named by
        :attr:`~odoo.models.Model._parent_name`).
    ``parent_of``
        is a parent (ascendant) of a ``value`` record (value can be either
        one item or a list of items).

        Takes the semantics of the model into account (i.e following the
        relationship field named by
        :attr:`~odoo.models.Model._parent_name`).
    ``any``
        matches if any record in the relationship traversal through
        ``field_expr`` (:class:`~odoo.fields.Many2one`,
        :class:`~odoo.fields.One2many`, or :class:`~odoo.fields.Many2many`)
        satisfies the provided domain ``value``.
        The ``field_expr`` should be a field name.
    ``not any``
        matches if no record in the relationship traversal through
        ``field_expr`` (:class:`~odoo.fields.Many2one`,
        :class:`~odoo.fields.One2many`, or :class:`~odoo.fields.Many2many`)
        satisfies the provided domain ``value``.

* ``value``
    variable type, must be comparable (through ``operator``) to the named
    field.

The :class:`~odoo.domains.Domain` can be used as a builder for domains.

.. code-block:: python

    # parse a domain (from list to Domain)
    domain = Domain([('name', '=', 'abc'), ('phone', 'like', '7620')])

    # simple domains
    d1 = Domain('name', '=', 'abc')
    d2 = Domain('phone', 'like', '7620')

    # combine domains
    d3 = d1 & d2  # and
    d4 = d1 | d2  # or
    d5 = ~d1      # not

    # combine and parse multiple domains
    Domain.AND(d1, d2, d3, ...)
    Domain.OR(d4, d5, ...)

    # constants
    Domain.TRUE   # true domain
    Domain.FALSE  # false domain

.. automethod:: odoo.domains.Domain.iter_conditions

.. automethod:: odoo.domains.Domain.map_conditions

A domain is serialized as a ``list`` of criteria, each criterion being a triple
(either a ``list`` or a ``tuple``) representing a simple condition.
Domain criteria can be combined using logical operators in a *prefix* notation.
You can combine 2 domains using ``'&'`` (AND), ``'|'`` (OR)
and you can negate 1 using ``'!'`` (NOT).

.. example::

    To search for partners named *ABC*, with a phone or mobile number containing *7620*::

        [('name', '=', 'ABC'),
         '|', ('phone','ilike','7620'), ('mobile', 'ilike', '7620')]

    To search sales orders to invoice that have at least one line with
    a product that is out of stock::

        [('invoice_status', '=', 'to invoice'),
         ('order_line', 'any', [('product_id.qty_available', '<=', 0)])]


    To search for all partners born in the month of February::

        [('birthday.month_number', '=', 2)]


Unlink
------

.. automethod:: Model.unlink

.. _reference/orm/records/info:

Record(set) information
-----------------------

.. autoattribute:: Model.ids

.. attribute:: env

    Returns the environment of the given recordset.

    :type: :class:`~odoo.api.Environment`

.. todo:: Environment documentation

.. automethod:: Model.exists

.. automethod:: Model.ensure_one

.. automethod:: Model.get_metadata

.. _reference/orm/records/operations:

Operations
----------

Recordsets are immutable, but sets of the same model can be combined using
various set operations, returning new recordsets.

.. addition preserves order but can introduce duplicates

* ``record in set`` returns whether ``record`` (which must be a 1-element
  recordset) is present in ``set``. ``record not in set`` is the inverse
  operation
* ``set1 <= set2`` and ``set1 < set2`` return whether ``set1`` is a subset
  of ``set2`` (resp. strict)
* ``set1 >= set2`` and ``set1 > set2`` return whether ``set1`` is a superset
  of ``set2`` (resp. strict)
* ``set1 | set2`` returns the union of the two recordsets, a new recordset
  containing all records present in either source
* ``set1 & set2`` returns the intersection of two recordsets, a new recordset
  containing only records present in both sources
* ``set1 - set2`` returns a new recordset containing only records of ``set1``
  which are *not* in ``set2``

Recordsets are iterable so the usual Python tools are available for
transformation (:func:`python:map`, :func:`python:sorted`,
:func:`~python:itertools.ifilter`, ...) however these return either a
:class:`python:list` or an :term:`python:iterator`, removing the ability to
call methods on their result, or to use set operations.

Recordsets therefore provide the following operations returning recordsets themselves
(when possible):

Filter
~~~~~~

.. automethod:: Model.filtered

.. automethod:: Model.filtered_domain

Map
~~~

.. automethod:: Model.mapped

.. note::

    Since V13, multi-relational field access is supported and works like a mapped call:

    .. code-block:: python3

        records.partner_id  # == records.mapped('partner_id')
        records.partner_id.bank_ids  # == records.mapped('partner_id.bank_ids')
        records.partner_id.mapped('name')  # == records.mapped('partner_id.name')

Sort
~~~~

.. automethod:: Model.sorted

Grouping
~~~~~~~~

.. automethod:: Model.grouped

.. _reference/orm/inheritance:

Inheritance and extension
=========================

Odoo provides three different mechanisms to extend models in a modular way:

* creating a new model from an existing one, adding new information to the
  copy but leaving the original module as-is
* extending models defined in other modules in-place, replacing the previous
  version
* delegating some of the model's fields to records it contains

.. image:: orm/inheritance_methods.png
    :align: center

Classical inheritance
---------------------

When using the :attr:`~odoo.models.Model._inherit` and
:attr:`~odoo.models.Model._name` attributes together, Odoo creates a new
model using the existing one (provided via
:attr:`~odoo.models.Model._inherit`) as a base. The new model gets all the
fields, methods and meta-information (defaults & al) from its base.

.. code-block:: python

    class Inheritance0(models.Model):
        _name = 'inheritance.0'
        _description = 'Inheritance Zero'

        name = fields.Char()

        def call(self):
            return self.check("model 0")

        def check(self, s):
            return "This is {} record {}".format(s, self.name)

    class Inheritance1(models.Model):
        _name = 'inheritance.1'
        _inherit = 'inheritance.0'
        _description = 'Inheritance One'

        def call(self):
            return self.check("model 1")

and using them::

    a = env['inheritance.0'].create({'name': 'A'})
    b = env['inheritance.1'].create({'name': 'B'})

    a.call()
    b.call()

will yield:

    "This is model 0 record A"
    "This is model 1 record B"

the second model has inherited from the first model's ``check`` method and its
``name`` field, but overridden the ``call`` method, as when using standard
:ref:`Python inheritance <python:tut-inheritance>`.

Extension
---------

When using :attr:`~odoo.models.Model._inherit` but leaving out
:attr:`~odoo.models.Model._name`, the new model replaces the existing one,
essentially extending it in-place. This is useful to add new fields or methods
to existing models (created in other modules), or to customize or reconfigure
them (e.g. to change their default sort order)::

    class Extension0(models.Model):
    _name = 'extension.0'
    _description = 'Extension zero'

    name = fields.Char(default="A")

    class Extension1(models.Model):
    _inherit = 'extension.0'

    description = fields.Char(default="Extended")

.. code-block:: python3

    record = env['extension.0'].create({})
    record.read()[0]

will yield::

    {'name': "A", 'description': "Extended"}


.. note::

    It will also yield the various :ref:`automatic fields
    <reference/fields/automatic>` unless they've been disabled

Delegation
----------

The third inheritance mechanism provides more flexibility (it can be altered
at runtime) but less power: using the :attr:`~odoo.models.Model._inherits`
a model *delegates* the lookup of any field not found on the current model
to "children" models. The delegation is performed via
:class:`~odoo.fields.Reference` fields automatically set up on the parent
model.

The main difference is in the meaning. When using Delegation, the model
**has one** instead of **is one**, turning the relationship in a composition
instead of inheritance::

    class Screen(models.Model):
        _name = 'delegation.screen'
        _description = 'Screen'

        size = fields.Float(string='Screen Size in inches')

    class Keyboard(models.Model):
        _name = 'delegation.keyboard'
        _description = 'Keyboard'

        layout = fields.Char(string='Layout')

    class Laptop(models.Model):
        _name = 'delegation.laptop'
        _description = 'Laptop'

        _inherits = {
            'delegation.screen': 'screen_id',
            'delegation.keyboard': 'keyboard_id',
        }

        name = fields.Char(string='Name')
        maker = fields.Char(string='Maker')

        # a Laptop has a screen
        screen_id = fields.Many2one('delegation.screen', required=True, ondelete="cascade")
        # a Laptop has a keyboard
        keyboard_id = fields.Many2one('delegation.keyboard', required=True, ondelete="cascade")

.. code-block:: python3

    record = env['delegation.laptop'].create({
        'screen_id': env['delegation.screen'].create({'size': 13.0}).id,
        'keyboard_id': env['delegation.keyboard'].create({'layout': 'QWERTY'}).id,
    })
    record.size
    record.layout

will result in::

    13.0
    'QWERTY'

and it's possible to write directly on the delegated field::

    record.write({'size': 14.0})

.. warning:: when using delegation inheritance, methods are *not* inherited,
             only fields

.. warning::

    * `_inherits` is more or less implemented, avoid it if you can;
    * chained `_inherits` is essentially not implemented, we cannot guarantee anything on the final behavior.


Fields Incremental Definition
-----------------------------

A field is defined as class attribute on a model class. If the model
is extended, one can also extend the field definition by redefining
a field with the same name and same type on the subclass.
In that case, the attributes of the field are taken from the parent class
and overridden by the ones given in subclasses.

For instance, the second class below only adds a tooltip on the field
``state``::

    class First(models.Model):
        _name = 'foo'
        state = fields.Selection([...], required=True)

    class Second(models.Model):
        _inherit = 'foo'
        state = fields.Selection(help="Blah blah blah")

.. _reference/exceptions:

Error management
================

.. automodule:: odoo.exceptions
    :members: AccessDenied, AccessError, CacheMiss, MissingError, RedirectWarning, UserError, ValidationError
