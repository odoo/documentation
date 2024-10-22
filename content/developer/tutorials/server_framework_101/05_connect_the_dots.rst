===========================
Chapter 5: Connect the dots
===========================

In this chapter, we'll add business logic to the models to automate the processes of our application
and turn it into a dynamic and useful tool. This will involve defining actions, constraints,
automatic computations, and other model methods.

.. todo: explain magic commands
.. todo: 6,0,0 to associate tags to properties in data

.. _tutorials/server_framework_101/computed_fields:

Computed fields
===============

.. todo: change section title
.. todo: explain the thing about `self`
.. todo: explain the env (self.env.uid, self.env.user, self.env.ref(xml_id), self.env[model_name])
.. todo: compute (offer deadline)
.. todo: inverse (offer deadline)
.. todo: related fields (buyer's phone)
.. todo: create (create offer -> offer received state) and write methods
.. todo: auto-update property state based on received offers state (write)
.. todo: best offer stat button
.. todo: accepting offer refuses others

tmp

.. _tutorials/server_framework_101/onchanges:

Onchanges
=========

.. todo: change section title
.. todo: difference with computes
.. todo: if garden checked -> show and compute total area

tmp

.. _tutorials/server_framework_101/constraints:

Constraints
===========

.. todo: change section title

tmp

.. _tutorials/server_framework_101/sql_constraints:

SQL constraints
---------------

tmp

.. todo: price more than zero
.. todo: unique tag constraint

.. _tutorials/server_framework_101/python_constraints:

Python constraints
------------------

tmp

.. todo: accept only one offer

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
.. todo: real.estate.offer.amount::default -> property.selling_price (add related?)
.. todo: real.estate.tag.color -> default=_default_color ;  def _default_color(self): return random.randint(1, 11)  (check if lambda works)
.. todo: copy=False on some fields

.. _tutorials/server_framework_101/actions:

Actions
=======

.. todo: change section title
.. todo: "assign myself as salesperson" action
.. todo: "view best offer" statbutton
.. todo: accept/refuse offer buttons
.. todo: action name=...

tmp

.. _tutorials/server_framework_101/action_object:

Object
------

tmp

.. _tutorials/server_framework_101/action_name:

Name
----

tmp

.. _tutorials/server_framework_101/shell:

Shell
=====

.. todo: change section title

tmp

----

.. todo: add incentive for chapter 6
