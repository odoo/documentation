=============
Pay by checks
=============

When paying a vendor bill, checks can be selected as a payment method and can be printed. Then the
checks and bank statements can be reconciled.

Configuration
=============

To activate the checks payment method, go to
:menuselection:`Accounting --> Configuration --> Settings`, scroll down to the
:guilabel:`Vendor Payments` section, and enable :guilabel:`Checks`. Once enabled, several
configuration options are available:

- :guilabel:`Check Layout`: select the layout to use for printing.

  .. note::
     - Some countries require specific modules to print checks; such modules may be installed by
       default.

- :guilabel:`Multi-Pages Check Stub`: enables the check stub to span multiple pages when the
  number of invoices or payments associated with a single check exceeds the available space on one
  page.
- :guilabel:`Check Top Margin`: define the top margin used when printing checks.
- :guilabel:`Check Left Margin`: define the left margin used when printing checks.

.. note::
   - Once activated, the :guilabel:`Checks` payment method is automatically set up in the
     :guilabel:`Outgoing Payments` tabs of bank journals.
   - Some localizations have blank paper formats. They can be used to print the information of the
     check ad-hoc when needed. This requires the use of both
     :abbr:`MICR (Magnetic Ink Character Recognition)` ink or toner complying with the standards for
     check printing, as well as `check-quality paper
     <https://checkdepot.net/collections/blank-check-paper/products/top-format-blank-check-paper-cdt164>`_.
     Other information, such as the company name, bank account, and check number, is printed when
     creating the blank check.
   - Pre-printed check formats (non-blank checks) require pre-printed paper from a third-party
     vendor.

.. _accounting/pay-checks/pay-bill-check:

Pay a vendor bill with a check
===============================

Paying a vendor bill with a check is done in three steps:

1. :ref:`Register a payment by check <accounting/pay-checks/register-check-payment>`
2. :ref:`Print checks <accounting/pay-checks/print-checks>`
3. :ref:`Reconcile the bank transaction <accounting/pay-checks/reconcile>`

.. _accounting/pay-checks/register-check-payment:

Register a payment by check
---------------------------

To register a payment, go to :menuselection:`Accounting --> Vendors --> Bills` and open the relevant
vendor bill. Once the vendor bill is confirmed, click :guilabel:`Pay`, set the
:guilabel:`Payment Method` to :guilabel:`Checks`, and click :guilabel:`Create Payment`.

.. _accounting/pay-checks/print-checks:

Print checks
------------

Once the payment is created, click :guilabel:`Print Check`.

Alternatively, print checks from the :guilabel:`Bank` journal:

#. Go to the :guilabel:`Accounting Dashboard`, find the :guilabel:`Bank` Journal.
#. Click :guilabel:`Checks to print`.
#. Open the relevant check and click :guilabel:`Print Check`.

.. tip::
   To print multiple checks in batch, select the check payments from the list view, click the
   :icon:`fa-cog` :guilabel:`(Actions)` icon and click :guilabel:`Print`.

Once printed, several options are available:

- :guilabel:`Void Check`: Cancel the check payment.
- :guilabel:`Validate`: Mark the payment as :guilabel:`Paid`.
- :guilabel:`Reject`: Reject the check.

.. _accounting/pay-checks/reconcile:

Reconcile the bank transaction
-------------------------------

After creating a bank transaction in the bank journal,
:ref:`reconcile <accounting/reconciliation/reconcile>` the relevant bank transaction to mark the
vendor bill as :guilabel:`Paid`.

