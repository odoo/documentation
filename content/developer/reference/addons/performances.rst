
.. _reference/performances:

============
Performances
============

How to make a piece of code with some behavior run as fast as possible? This page will hopefully give some tips and tools to achieve this goal.

Good practices
==============

Batch operation when you can
----------------------------

When working with record set, its is always better to do operations in batch.

A typical mistake is execute sql in a loop (with a search for example)

.. code-block:: python

    # DON'T
    def _compute_count(self):
        for record in self:
            domain = [('related_id', '=', record.id)]
            record.count = other_model.search_count(domain)

This will perform an sql query for each record. In this kind of example, we can replace search_count
with a read_group

.. code-block:: python

    # DO
    def _compute_calendar_event_count(self):
        if self.ids:
            domain = [('related_id', 'in', self.ids)]
            counts_data = other_model.read_group(domain, ['related_id'], ['related_id'])
            mapped_data = {
                count['opportunity_id'][0]: count['opportunity_id_count'] for count in counts_data
            }
        else:
            mapped_data = {}
        for record in self:
            record.count = mapped_data.get(record.id, 0)

Trying to group sql queries will avoid the added cost of contacting the database and help postgresql
to optimise the query plan when possible.

Another example is the record creation.
The orm offers the possibility to create record in batch. Since version 13.0 this has no impact in most cases but creating record in batch and keeping create override compatible 
api.model_create_multi will help orm to optimize field computation, and give opportunity to optimise create overrides in some cases.

.. code-block:: python

    create_values = []
    for name in ['foo', 'bar']:
        create_values.append({'name': name})
    records = model.create(create_values)

Another possible issue is to miss the possible batch prefetching when reading on a single browsed record inside a loop.

.. code-block:: python

    # DON'T
    for record_id in record_ids:
        model.browse(record_id)
        record.foo  # this will trigger one query per record_id

.. code-block:: python

    # DO
    records = model.browse(record_ids)
    for record in records:
        record.foo  # this will trigger one query for all record_ids

In this last example the prefetch_ids of the recordset will indicate that each record_id is part of record_ids, and thus they will be managed togethers. When reading the first record, the orm will prefetch all record at once.
In the rare cases where browsing all records together is unpractical, the with_prefetch metod can help to achieve the same goal.

.. code-block:: python

    for values in values_list:
        message = self.browse(values['id']).with_prefetch(self.ids)

Algorithmic complexity (basics)
--------------------------------------
    Algorithmic complexity is a measure of how long an algorithm would take to complete given an input of size n

In some cases the straightforward algorithm will imply two nested loops. It can be justified in some cases but it should be thought twice. In some cases it can be avoided by preparing data the right way.

.. code-block:: python

    # DON'T
    for record in self:
        for result in results:
            if results['id'] == record.id:
                record.foo = results['foo']
                break
        else:
            record.foo = 0  # default value

This simple (an naive) example is # O(n²) and can be simply optimized by preparing data in a dict. 

Assuming that all result have a different id:

.. code-block:: python

    # DO
    mapped_result = {result['id']: result for result in results}
    for record in self:
        record.foo = results.get(record.id)['foo']

This kind of changes is not always as obvious as this one, it sometimes needs so thought. Don't hesitate to ask your colleague if you are not sure about your algorithm.

Correct usage of data structures is important too. In the last example using a dict will allow accessing an element in O(1), but sometime quadratic complexity can be hidden.

.. code-block:: python

    # DON'T
    invalid_ids = self.search(domain).ids
    for record in self:
        if record.id in invalid_ids:
            ...

If invalid_ids is a list like the result of a search, the complexity may be quadratic. In this cases
we will prefer set operations, like casting invalid_ids in a set.

Depending on your input, you can either cast the list into a set outside of the loop, or prefer recordset operations.

.. code-block:: python

    # DO
    invalid_ids = self.search(domain)
    for record in self - invalid_ids:
        ...

or

.. code-block:: python

    # DO
    invalid_ids = set(invalid_ids)
    for record in self:
        if record.id in invalid_ids:
            ...

Index critical column
---------------------
If your code perform search on some criteria or if the user will need to search on a field, it may
be a good idea to index the column. 

.. code-block:: python

    name = fields.Char(string="Name", index=True)
  
But be careful to not index everything, index consume space and have performances drawback on INSERT, UPDATE and DELETE.


.. _reference/performances/profiling:

Profiling
=========

The first step when trying to optimize some flow is to understand where the code spends time.

Odoo provides integrated profiling tools, allowing to save all executed queries and/or stack_traces during execution.

Profiling tools can either be used to profile all request made to the server for a specific user session, or be used manually by a developer to profile some part of the code.

In both cases, different collectors are available. A collector is specialized to collect some piece of information in a standard format. (sql, thought, ...) 

Even if the profiling tools are think to be as light as possible, they still can have impact on performance and must be used wisely, and result must me interpreted carefully.

Profiling requests from the user interface
------------------------------------------

This is the easier way to profile in odoo but is only focus on web flows since only requests can be profiled this way.

The first thing to know is that enabling profiling on a request may impact server load since each request will have extra work processing.  

.. todo: runbot stats

.. _reference/performances/populate:

Database population
===================

Odoo CLI offers a :ref:`database population<reference/cmdline/populate>` feature.

.. code-block:: console

    odoo-bin populate

Instead of the tedious manual, or programmatic, specification of test data,
one can use this feature to fill a database on demand with the desired number of test data.
This can be used to detect diverse bugs or performance issues in tested flows.

.. _reference/performances/populate/methods:

To specify this feature for a given model, the following methods and attributes can be defined.

.. currentmodule:: odoo.models

.. autoattribute:: Model._populate_sizes
.. autoattribute:: Model._populate_dependencies
.. automethod:: Model._populate
.. automethod:: Model._populate_factories

.. note::

    You have to define at least :meth:`~odoo.models.Model._populate` or :meth:`~odoo.models.Model._populate_factories`
    on the model to enable database population.

Example model
-------------

.. code-block:: python

    from odoo.tools import populate

    class CustomModel(models.Model)
        _inherit = "custom.some_model"
        _populate_sizes = {"small": 100, "medium": 2000, "large": 10000}
        _populate_dependencies = ["custom.some_other_model"]

        def _populate_factories(self):
            # Record ids of previously populated models are accessible in the registry
            some_other_ids = self.env.registry.populated_models["custom.some_other_model"]

            def get_some_field(values=None, random=None, **kwargs):
                """ Choose a value for some_field depending on other fields values.

                    :param dict values:
                    :param random: seeded :class:`random.Random` object
                """
                field_1 = values['field_1']
                if field_1 in [value2, value3]:
                    return random.choice(some_field_values)
                return False

            return [
                ("field_1", populate.randomize([value1, value2, value3])),
                ("field_2", populate.randomize([value_a, value_b], [0.5, 0.5])),
                ("some_other_id", populate.randomize(some_other_ids)),
                ("some_field", populate.compute(get_some_field, seed="some_field")),
                ('active', populate.cartesian([True, False])),
            ]

        def _populate(self, size):
            records = super()._populate(size)

            # If you want to update the generated records
            # E.g setting the parent-child relationships
            records.do_something()

            return records

Population tools
----------------

Multiple population tools are available to easily create
the needed data generators.

.. automodule:: odoo.tools.populate
    :members: cartesian, compute, constant, iterate, randint, randomize