=======================================
Bank reconciliation process - use cases
=======================================

Overview
========

Matching your bank statements with your accounting records can be a tedious task. You need to find the corresponding invoices, compare the amounts and partners' details with those in the bank statement. These steps can take a lot of time. Luckily, with Odoo you can very easily match your invoices or any other payment document with your bank statements.

Two options of the reconciliation process exist in Odoo.

1. We can directly specify the payment on the invoice
2. We can reconcile open invoices with bank statements

Configuration
=============

No special configuration is necessary to record invoices. All we need
to do is to install the accounting app.

.. image:: use_cases/use01.png
   :align: center

Use cases
=========

Case 1: Payments registration
-----------------------------

We received the proof of payment of our invoice in the amount of 2100 euros issued to
Smith & Co.

We start at our issued Invoice of 2100 euros for Smith & Co. Because the
sold product is a service we demand an immediate payment. Our accountant
only handles bank statements at the end of week, so we have to mark
this invoice as paid immediately in order to indicate that we can start rendering services to our
customer.

Our customer send us a payment confirmation. We can thus register a
payment and mark the invoice as paid.

.. image:: use_cases/use02.png
   :align: center

By clicking on **register payment,** we are telling Odoo that our
customer has paid the Invoice. We thus have to specify the amount and the
payment method.

.. image:: use_cases/use03.png
   :align: center

Now we can always find the payment details in the Invoice by clicking on the
:menuselection:`Info --> Open Payment`.

.. image:: use_cases/use04.png
   :align: center

The invoice has been paid and **the reconciliation has been done
automatically.**

Case 2: Bank statements reconciliations
---------------------------------------

We start at our issued Invoice of 3000 euros for Smith & Co. Let's also
assume that other Invoices are open for different customers.

.. image:: use_cases/use05.png
   :align: center

We receive our bank statement and find that not only the invoice issued to Smith & Co has
been paid, but the one to Buzz of 92 euros as well.

**Import** or **Create** the bank statements. Please refer to the
documents from the Bank Feeds section.

.. image:: use_cases/use06.png
   :align: center

On the dashboard, click on **Reconcile # Items**

.. image:: use_cases/use07.png
   :align: center

If everything was right (correct partner name, right amount) odoo will
do the reconciliations **automatically**.

.. image:: use_cases/use08.png
   :align: center

If some issues are found, you will need to take **manual actions**.

For example, if the partner is missing from your bank statement, just
fill it in :

.. image:: use_cases/use09.png
   :align: center

If the payment is done with a down payment, just check if it is all
right and validate all related payments :

.. image:: use_cases/use10.png
   :align: center

.. seealso::
   * :doc:`../feeds/bank_synchronization`