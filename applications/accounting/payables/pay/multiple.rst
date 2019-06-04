=================================
How to pay several invoices at once?
=================================

Twenty20 provides a simple and effective way to handle several invoices at
once, with various quick or complex options. With one single process,
anyone is able to handle invoices and payment in just a few clicks.

Pay multiple invoices with one payment
===================================

Record several payments
-----------------------

In the following example, we will generate some invoices. You can control
the whole process from your accounting dashboard (first screen you get
when you open the accounting application).

.. image:: ./media/multiple01.png
  :align: center

To create a invoice, open the Dashboard menu and click on **Vendor Invoices**.
In the Vendor Invoices window, click on **Create**.

.. image:: ./media/multiple02.png
  :align: center

Choose the vendor from which you wish to purchase the product, and click
on Add an item to add one (or more) product(s). Click on **Save** and then
**Validate**.

Pay vendor invoices, one after the other
---------------------------------------

.. image:: ./media/multiple03.png
  :align: center

We will now record a payment for one invoice only. Open the invoice, then
click on **Register Payment**. Insert the Payment Method, Date and Amount,
and click on **Validate**.

.. image:: ./media/multiple04.png
  :align: center

Once you have validated the payment, the system will automatically
reconcile the payment with the invoice, and set the invoice as **Paid**. The
system will also generate a move from the payment account and reconcile
it with the expense transaction.

Pay several invoices altogether
----------------------------

In order to illustrate the process thoroughly, create at least 2 more
invoices following the above standing guide. **Make sure all invoices come
from the same vendor.**

.. image:: ./media/multiple05.png
  :align: center

In the Vendors Invoices, select the new invoices you have just created by
checking the box next to each of them. In the Action menu located in the
middle of the page, click on **Register Payment**.

.. image:: ./media/multiple06.png
  :align: center

Insert the details of the payment. The system calculated the total
amount for both invoices, but you can modify it freely. Click on **Validate**.

Record the payment, reconcile afterwards
----------------------------------------

You can also reconcile a payment with invoices after the payment has been
recorded.

First, we need to create a payment

This will handle from :menuselection:`Dashboard --> Bank journal -->
More Option --> Send Money`

.. image:: ./media/multiple07.png
  :align: center

Creating payment order with check payment method. Selecting related
Vendor and amount which remain to pay. After filling all details, we
will confirm the payment order which will generate payment transaction
with the system.

.. image:: ./media/multiple08.png
  :align: center

As you can see, invoice payment status show what is posted and what is
remaining to reconcile.

After receiving bank statement from the bank with payment detail, you
can reconcile the transaction from the Dashboard. It will automatically
map the transaction amount.

.. seealso::
	
	For more detail on the bank reconciliation process, please read:

	* :doc:`../../bank/reconciliation/use_cases`

Partial payments of several vendor invoices
==========================================

How to pay several vendor invoices having cash discounts at once?
----------------------------------------------------------------

You already learned how to pay invoices in various way but what about
partial payment? We are taking another example where we will do partial
payment for various invoices.

We are creating multiple invoices and partially pay them through bank
statements.

We are adding payment terms which allow some cash discount where vendor
offer us early payment discount.

.. image:: ./media/multiple09.png
  :align: center

We are creating the following invoices with the assignment of the above
payment term.

.. image:: ./media/multiple10.png
  :align: center

We have created the following invoices:

.. image:: ./media/multiple11.png
  :align: center

We will pay the invoices by creating bank statement where we will adjust
the cash discount our vendor provided under payment terms.

.. image:: ./media/multiple12.png
  :align: center

Before reconciling this bank statement, we need to create one statement
model for cash discount.

.. image:: ./media/multiple13.png
  :align: center

Now we are going back to bank statement and opening reconcile view.

.. seealso::

	For bank statement reconciliation with model option, see

	* :doc:`../../bank/reconciliation/configure`

