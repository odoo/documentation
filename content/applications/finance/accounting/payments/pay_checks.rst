=============
Pay by checks
=============

Once you decide to pay a supplier bill, you can select to pay by check. You can then print all the
payments registered by check. Finally, the bank reconciliation process will match the checks you
sent to suppliers with actual bank statements.

Configuration
=============

Activate checks payment methods
-------------------------------

To activate the checks payment method, go to :menuselection:`Accounting --> Configuration -->
Settings`, and scroll down to the :guilabel:`Vendor Payments` section. There, you can activate the
payment method as well as set up the :guilabel:`Check Layout`.

.. note::
   - Once the :guilabel:`Checks` setting is activated, the **Checks** payment method is
     automatically set up in the :guilabel:`Outgoing Payments` tabs of **bank** journals.
   - Some countries require specific modules to print checks; such modules may be installed by
     default. For instance, the :guilabel:`U.S. Checks Layout` module is required to print U.S.
     checks.

Compatible check stationery for printing checks
===============================================

United States
-------------

For the United States, Odoo supports by default the check formats of:

- **Quickbooks & Quicken**: check on top, stubs in the middle and bottom;
- **Peachtree**: check in the middle, stubs on top and bottom;
- **ADP**: check in the bottom, and stubs on the top.

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
