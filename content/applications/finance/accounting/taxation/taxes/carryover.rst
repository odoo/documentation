===============
Taxes carryover
===============

Under certain legal conditions, some tax report lines must have their amount transferred to the
following period without creating additional accounting entries. The taxes carryover functionality
responds to this specific need.

.. example::
   In the Belgian tax report, grid 81 may contain a negative amount at the end of the tax period,
   but it must be declared to the government as zero, and the negative amount should be carried over
   to the next period.

Configuration
=============

The carryover option can be configured for automatic use or manually for a specific line, which is
less frequent.

.. note::
   Activate the :ref:`Developer mode <developer-mode>` to access the :guilabel:`Tax Report` from
   :menuselection:`Configuration --> Management --> Tax Report`.

Automatic use
-------------

To activate the carryover option from the Accounting application, go to
:menuselection:`Configuration --> Tax reports`.

Open a tax report, :guilabel:`Edit` and select a specific line. The following fields should be
filled in:

:guilabel:`Method`: Determines if and how the line should be carried over.

:guilabel:`Persistent`: Defines how this report lines creates carry-over lines when performing tax
closing:

- If true, the amounts carried over are always added on top of each other: for example, a report
  line with a balance of 10 with an existing carryover of 50 adds an additional 10 to it when doing
  the closing, making a total of 60.
- If false, the total carried-over amount is forced to the total of this report line: a report
  line with a balance of 10 with an existing carryover of 50 creates a new carryover line of -40
  so the total carryover becomes 10.

:guilabel:`Destination`: Defines the line to which the value of this line will be carried over to
if needed. If left empty, the line will carry over to itself.

:guilabel:`Used in line balance`: If set, the carryover amount for this line will be used when
calculating its balance in the report. This means that the carryover could affect other lines if
they are using this one in their computation.

Manual configuration
--------------------

If a line is not configured with the :guilabel:`Carryover` feature, you can do it manually.

Go to :menuselection:`Configuration --> Tax reports`. Select a report and :guilabel:`Edit`. Select a
line, go to the :guilabel:`Carryover lines` tab and manually add a new line. This is used for
occasional carryover.
