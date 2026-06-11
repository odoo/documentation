=============
Pay by checks
=============

When paying a vendor bill, checks can be selected as a payment method and can be printed. Then the
check and bank statement can be reconciled.

.. _accounting/pay-checks/configuration:

Configuration
=============

To activate the checks payment method, go to :menuselection:`Accounting --> Configuration -->
Settings`, scroll down to the :guilabel:`Vendor Payments` section, enable :guilabel:`Checks`, then
click :guilabel:`Save`. Next, select a :guilabel:`Check Layout`, then :guilabel:`Save`.

.. note::
   Some countries use specific check layouts, which sometimes require installing a dedicated module.

Several configuration options are available:

- :guilabel:`Multi-Pages Check Stub`: enable the check stub to span multiple pages when the number
  of invoices or payments associated with a single check exceeds the available space on a single
  page.
- :guilabel:`Check Top Margin`: define the top margin used when printing checks.
- :guilabel:`Check Left Margin`: define the left margin used when printing checks.

.. note::
   - Once activated, the :guilabel:`Checks` payment method is automatically set up in the
     :guilabel:`Outgoing Payments` tab of bank journals.
   - Some localizations have blank paper formats. They can be used to print the information on the
     check as needed. This requires the use of both :abbr:`MICR (Magnetic Ink Character
     Recognition)` ink or toner that complies with check-printing standards and check-quality paper.
     Other information, such as the company name, bank account, and check number, is printed when
     creating the blank check.
   - Pre-printed check formats (non-blank checks) require pre-printed paper from a third-party
     vendor.

.. _accounting/pay-checks/pay-bill-check:

Pay a vendor bill
=================

To pay a vendor bill with a check, follow these steps:

#. Register the payment by going to :menuselection:`Accounting --> Vendors --> Bills` and opening
   the relevant vendor bill. Once it is confirmed, click :guilabel:`Pay`, set the :guilabel:`Payment
   Method` to :guilabel:`Checks`, and click :guilabel:`Create Payment`.
#. Click the :guilabel:`Payments` smart button to access the check payment, and click
   :guilabel:`Print Check`. In the pop-up, specify the pre-printed check number to ensure the
   corresponding check number is recorded on the payment.
#. Create a transaction in the bank journal, and :ref:`reconcile
   <accounting/reconciliation/reconcile>` it with the related vendor bill or related check to mark
   the vendor bill as :guilabel:`Paid`.

.. note::
   Once printed, several options are available:

   - :guilabel:`Void Check`: click to cancel the check payment.
   - :guilabel:`Validate`: click to mark the payment as :guilabel:`Paid`.
   - :guilabel:`Reject`: click if the check was rejected. The payment status is then set to
     :guilabel:`Rejected`, and the related bill is no longer marked as :guilabel:`Paid`.

.. tip::
   - Alternatively, from the :guilabel:`Accounting Dashboard`, click :guilabel:`Checks to print`
     under the :guilabel:`Bank` journal card. Then, open the relevant check and click
     :guilabel:`Print Check`.
   - To print multiple checks in batch, select the check payments from the list view, click the
     :icon:`fa-cog` :guilabel:`(Actions)` icon and click :guilabel:`Print`.

.. seealso::
   :ref:`Registering payments from an invoice or bill <accounting/payments/from-invoice-bill>`
