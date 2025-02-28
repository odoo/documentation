===========================
Chapter 6: Tighten security
===========================

As we have seen, Odoo is mostly a data-driven application. Therefore, it is important to ensure that
the data is protected and accessible only to authorized users. In this chapter, we'll explore the
various security features available in the server framework, focusing on user groups, access rights,
and record rules.

.. _tutorials/server_framework_101/user_groups:

User groups
===========

.. todo: rename section

tmp

.. todo: explain that groups are used to link users with access rights for convenience. that is
         because it's easier to assign a group to a user than to assign access rights to every new user

.. example::
   tmp

.. todo: note: By convention, all security-related data files are placed inside the module's :file:`security/` directory.

.. exercise::
   tmp

.. todo: create a group for real estate agents and one for managers; manager implies agent
.. todo: create a new user with only agent group (tip: logout or use a private window)
.. todo: restrict field access with groups= (only managers can change the type)

.. _tutorials/server_framework_101/access_rights:

Access rights
=============

.. todo: rename section

tmp

.. todo: Reference the basic access rights created in chapter 2

.. exercise::
   tmp

.. todo: prevent users who are not real estate agents to access the application and its records
.. todo: only managers can create and delete properties
.. todo: restrict who can manage property types and tags (agents can read)

.. _tutorials/server_framework_101/record_rules:

Record rules
============

.. todo: rename section

tmp

.. example::

tmp

.. todo: note: the rule is not global (ref below)

.. exercise::
   tmp

.. todo: real estate agents can only manage (create/write/unlink) properties they are assigned to or that are not assigned
.. todo: real estate managers can manage all properties

.. _tutorials/server_framework_101/bypass_security:

Bypass security
===============

tmp

.. todo: sudo

.. exercise::
   tmp

----

.. todo: add incentive for next chapter
