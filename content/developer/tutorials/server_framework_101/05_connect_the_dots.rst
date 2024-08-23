===========================
Chapter 5: Connect the dots
===========================

In this chapter, we'll add business logic to the models to automate the processes of our application
and turn it into a dynamic and useful tool. This will involve defining actions, constraints,
automatic computations, and other model methods.

.. todo: explain magic commands
.. todo: 6,0,0 to associate tags to properties in data

.. _tutorials/server_framework_101/model_actions:

Model actions
=============

.. todo: change section title?
.. todo: explain the thing about `self`
.. todo: explain the env (self.env.cr, self.env.uid, self.env.user, self.env.context, self.env.ref(xml_id), self.env[model_name])
.. todo: "assign myself as salesperson" action
.. todo: "view offers" statbutton

tmp

.. _tutorials/server_framework_101/Computes:

Computes
========

.. todo: change section title
.. todo: related fields
.. todo: create and write methods
.. todo: auto-update property state based on received offers state

tmp

.. _tutorials/server_framework_101/onchanges:

Onchanges
=========

.. todo: change section title
.. todo: difference with computes

tmp

.. _tutorials/server_framework_101/constraints:

Constraints
===========

.. todo: change section title
.. todo: unique tag constraint

tmp

.. _tutorials/server_framework_101/python_constraints:

Python constraints
------------------

.. _tutorials/server_framework_101/sql_constraints:

SQL constraints
---------------

.. _tutorials/server_framework_101/defaults:

Defaults
========

.. todo: change section title
.. todo: introduce lambda functions for defaults :point_down:
   also mention that `self` is evaluated as the current recordset in lambda functions

There is a problem with the way we defined our Date fields in the previous chapters: their default value relies on
:code:`fields.Date.today()` or some other static method. When the code is loaded into memory, the date is
computed once and reused for all newly created records until the server is shut down. You probably didn't
notice it, unless you kept your server running for several days, but it would be much more visible with
Datetime fields, as all newly created records would share the same timestamp.

That's where lambda functions come in handy. As they generate an anonymous function each time they're evaluated
at runtime, they can be used in the computation of default field values to return an updated value for each new record.

.. todo: salesperson_id = fields.Many2one(default=lambda self: self.env.user)
.. todo: real.estate.offer.amount::default -> property.selling_price
.. todo: real.estate.tag.color -> default=_default_color ;  def _default_color(self): return random.randint(1, 11)
.. todo: copy=False on some fields

.. _tutorials/server_framework_101/shell:

Shell
=====

.. todo: change section title

tmp

----

.. todo: add incentive for chapter 6
