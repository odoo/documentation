============================
Forecast future bills to pay
============================

In Odoo, you can manage payments by setting automatic **Payments Terms** and **follow-ups**.

Configuration: payment terms
============================

In order to track vendor conditions, we use **Payment Terms** in Odoo. They allow keeping track of
due dates on invoices. Examples of **Payment Terms** are:

-  50% within 30 days
-  50% within 45 days

To create them, go to :menuselection:`Accounting --> Configuration --> Invoicing: Payment Terms` and
click on :guilabel:`Create` to add new terms or click existing ones to modify them.

.. seealso::
   `Odoo Tutorials: Payment Terms
   <https://www.odoo.com/slides/slide/payment-terms-1679?fullscreen=1>`_

Once **Payment Terms** are defined, you can assign them to your vendor by default. To do so, go to
:menuselection:`Vendors --> Vendors`, select a vendor, click the :guilabel:`Sales & Purchase` tab,
and select a specific **Payment Term**. This way, every time you purchase from this vendor, Odoo
automatically proposes the chosen Payment Term.

.. note::
   If you do not set a specific Payment Term on a vendor, you can still set one on the vendor bill.

Forecast bills to pay with the aged payable report
==================================================

To track amounts to be paid to the vendors, use the **Aged Payable** report. To access it, go to
:menuselection:`Accounting --> Reporting --> Partner Reports: Aged Payable`. This report gives you a
summary per vendor of the amounts to pay, compared to their due date (the due date being computed on
each bill using the terms). This report tells you how much you will have to pay within the following
months.

Select bills to pay
===================

You can get a list of all your vendor bills by going to :menuselection:`Vendors --> Bills`. To view
only the bills that you need to pay, click :menuselection:`Filters --> Bills to Pay`. To view only
overdue payments, select the :guilabel:`Overdue` filter instead.

You can also group bills by their due date by clicking :menuselection:`Group By --> Due Date` and
selecting a time period.
