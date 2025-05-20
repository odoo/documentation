=======================
Chapter 10: Constraints
=======================

.. danger::
   This tutorial is outdated. We recommend reading :doc:`../server_framework_101` instead.

.. seealso::
   :doc:`Homepage of the tutorial <../server_framework_101_legacy>`

The :doc:`previous chapter <09_actions>` introduced the ability to add
some business logic to our model. We can now link buttons to business code, but how can we prevent
users from entering incorrect data? For example, in our real estate module nothing prevents
users from setting a negative expected price.

Odoo provides two ways to set up automatically verified invariants:
:func:`Python constraints <odoo.api.constrains>` and
:attr:`SQL constraints <odoo.models.Model._sql_constraints>`.

SQL
===

**Reference**: the documentation related to this topic can be found in
:ref:`reference/orm/models` and in the `PostgreSQL's documentation`_.

.. note::

    **Goal**: at the end of this section:

    - Amounts should be (strictly) positive

    .. image:: 10_constraints/sql_01.gif
        :align: center
        :alt: Constraints on amounts

    - Property types and tags should have a unique name

    .. image:: 10_constraints/sql_02.gif
        :align: center
        :alt: Constraints on names

SQL constraints are defined through the model attribute
:attr:`~odoo.models.Model._sql_constraints`. This attribute is assigned a list
of triples containing strings ``(name, sql_definition, message)``, where ``name`` is a
valid SQL constraint name, ``sql_definition`` is a table_constraint_ expression
and ``message`` is the error message.

You can find a simple example
`here <https://github.com/odoo/odoo/blob/24b0b6f07f65b6151d1d06150e376320a44fd20a/addons/analytic/models/analytic_account.py#L20-L23>`__.

.. exercise:: Add SQL constraints.

    Add the following constraints to their corresponding models:

    - A property expected price must be strictly positive
    - A property selling price must be positive
    - An offer price must be strictly positive
    - A property tag name and property type name must be unique

    Tip: search for the ``unique`` keyword in the Odoo codebase for examples of unique names.

Restart the server with the ``-u estate`` option to see the result. Note that you might have data
that prevents a SQL constraint from being set. An error message similar to the following might pop up:

.. code-block:: text

    ERROR rd-demo odoo.schema: Table 'estate_property_offer': unable to add constraint 'estate_property_offer_check_price' as CHECK(price > 0)

For example, if some offers have a price of zero, then the constraint can't be applied. You can delete
the problematic data in order to apply the new constraints.

Python
======

**Reference**: the documentation related to this topic can be found in
:func:`~odoo.api.constrains`.

.. note::

    **Goal**: at the end of this section, it will not be possible to accept an offer
    lower than 90% of the expected price.

    .. image:: 10_constraints/python.gif
        :align: center
        :alt: Python constraint

SQL constraints are an efficient way of ensuring data consistency. However it may be necessary
to make more complex checks which require Python code. In this case we need a Python constraint.

A Python constraint is defined as a method decorated with
:func:`~odoo.api.constrains` and is invoked on a recordset. The decorator
specifies which fields are involved in the constraint. The constraint is automatically evaluated
when any of these fields are modified . The method is expected to
raise an exception if its invariant is not satisfied::

    from odoo.exceptions import ValidationError

    ...

    @api.constrains('date_end')
    def _check_date_end(self):
        for record in self:
            if record.date_end < fields.Date.today():
                raise ValidationError("The end date cannot be set in the past")
        # all records passed the test, don't return anything

A simple example can be found
`here <https://github.com/odoo/odoo/blob/274dd3bf503e1b612179db92e410b336bfaecfb4/addons/stock/models/stock_quant.py#L239-L244>`__.

.. exercise:: Add Python constraints.

    Add a constraint so that the selling price cannot be lower than 90% of the expected price.

    Tip: the selling price is zero until an offer is validated. You will need to fine tune your
    check to take this into account.

    .. warning::

        Always use the :meth:`~odoo.tools.float_utils.float_compare` and
        :meth:`~odoo.tools.float_utils.float_is_zero` methods from `odoo.tools.float_utils` when
        working with floats!

    Ensure the constraint is triggered every time the selling price or the expected price is changed!

SQL constraints are usually more efficient than Python constraints. When performance matters, always
prefer SQL over Python constraints.

Our real estate module is starting to look good. We added some business logic, and now we make sure
the data is consistent. However, the user interface is still a bit rough. Let's see how we can
improve it in the :doc:`next chapter <11_sprinkles>`.

.. _PostgreSQL's documentation:
.. _table_constraint:
    https://www.postgresql.org/docs/12/ddl-constraints.html
