==================================
How to modify a validated invoice?
==================================

In most accounting legislation over the word, it's not allowed to modify
an invoice that is validated and sent to the customer. However, you
sometimes need to change an invoice for different reasons: the sale has
changed, the made a mistake while recording the invoice, etc.

Thus, the right way to modify an invoice is to:

1. Refund the original invoice
2. Create a new invoice

Odoo's refund mechanism helps you handle the whole process in just a few
clicks.

Modify an invoice
=================

If your invoice is still in draft, you can modify it the way you want.
However, if your invoice is validated, you can not change it anymore. If
you need to modify it, the right operations to do are:

1. Refund the original invoice;
2. Reconcile the original invoice with the refund to void them;
3. Create a new draft invoice, a copy of the original;
4. Validate the new invoice.

All those steps are automated by Odoo. All you have to do is to click on
the Refund button on an invoice.

.. image:: ./media/modify01.png
  :align: center

In the refund dialog, select the option "Modify: create a refund,
reconcile and create a draft invoice". Once you click on the "Create
Refund" button, Odoo will void your existing invoice and create a new
draft invoice that is a duplicate of the original one.

Edit this new draft invoice and validate it when it's correct.

.. note::

	if you already sent the original invoice to your customer, you should send
	the new invoice and the refund to the customer so that he gets all the documents.

.. seealso::
	
	* :doc:`refund`
