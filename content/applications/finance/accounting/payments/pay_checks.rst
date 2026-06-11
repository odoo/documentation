=============
Pay by checks
=============

When paying a bill, checks can be selected as a payment method and can be printed. Then the checks
and bank statements can be reconciled.

Configuration
=============

To activate the checks payment method, go to :menuselection:`Accounting --> Configuration -->
Settings`, and scroll down to the :guilabel:`Vendor Payments` section.

After enabling :guilabel:`Checks`, different fields are available for check configuration, such as:

- :guilabel:`Check Layout`: select the check's layout to be used for printing.
- :guilabel:`Multi-Pages Check Stub`: determine whether the check stub can span multiple pages
  when the number of invoices or payments associated with a single check exceeds the space available
  on one page. When enabled, additional pages are automatically generated as needed.
- :guilabel:`Check Top Margin`: define the top margin used when printing checks.
- :guilabel:`Check Left Margin`: define the left margin used when printing checks.

.. note::
   - Some countries require specific modules to print checks; such modules may be installed by
     default.
   - Once the :guilabel:`Checks` setting is activated, the **Checks** payment method is
     automatically set up in the :guilabel:`Outgoing Payments` tabs of **bank** journals.
   - Some localizations have blank paper formats. They can be used to print the information of the
     check ad-hoc when needed. This requires the use of both :abbr:`MICR (Magnetic Ink Character Recognition)`
     ink or toner complying with the standards for check printing, as well as `check-quality paper
     <https://checkdepot.net/collections/blank-check-paper/products/top-format-blank-check-paper-cdt164>`_.
     Other information, such as the company name, bank account, and check number, is printed when
     creating the blank check.
   - Pre-printed check formats (non-blank checks) require pre-printed paper from a third-party
     vendor.

.. _accounting/pay-checks/pay-bill-check:

Pay a supplier bill with a check
================================

Paying a supplier with a check is done in three steps:

1. registering a payment
2. printing checks in batch for all registered payments
3. reconciling bank statements

Register a payment by check
---------------------------

To register a payment, open any supplier bill from the menu :menuselection:`Purchases --> Vendor
Bills`.
Once the supplier bill is validated, you can register a payment. Set the :guilabel:`Payment Method`
to :guilabel:`Checks` and validate the payment.

Print checks
------------

On your :guilabel:`Accounting Dashboard` in the :guilabel:`Bank` Journal, you can see the
number of checks registered. By clicking on :guilabel:`Checks to print` you have got the possibility
to print the reconciled checks.

To print all checks in batch, select all payments from the list view and click on :guilabel:`Print`.
