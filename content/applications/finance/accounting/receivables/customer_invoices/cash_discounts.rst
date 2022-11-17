====================
Offer cash discounts
====================

Cash discounts are incentives you can offer to customers to motivate
them to pay within a specific time frame. For instance, you offer a 2%
discount if the customer pays you within the first 5 days of the
invoice, when it is due in 30 days. This approach can greatly improve
your average collection period.

Set up a cash discount
======================

To set up a cash discount, go to :menuselection:`Accounting -->
Configuration --> Management --> Payment Terms` and click on
*Create*. Add a *Percent* type of term with a corresponding value
(e.g. 98% of the total price for a 2% discount) and the number of days
during which the offer is valid. You can also change the default balance
term if needed.

.. image:: cash_discounts/cash_discounts01.png
  :align: center

Start offering the cash discount
================================

Now, you can create a customer invoice and select the cash discount
payment term you added. Once the invoice is validated, Odoo will
automatically split the account receivables part of the journal entry
into two installments having different due dates. Since the discounted
price is already calculated, your payment controls will be simplified.

.. image:: cash_discounts/cash_discounts02.png
  :align: center

Grant the cash discount
=======================

The customer fulfilled the payment terms and therefore benefits from the
cash discount. When you process the bank statement, match the payment
with the related journal entry. Then, select the remaining cash discount
and click on *Create Write-off* to reconcile it.

.. image:: cash_discounts/cash_discounts03.png
  :align: center

.. tip::
  You can also create a dedicated reconciliation model to make
  the process easier. In this case, you should add a tax to the model
  based on the taxes applied to your invoices. This means that if you
  handle multiple tax rates, you need to create several reconciliation
  models. Note that depending on your localisation, you might already have
  a Cash Discount model available by default.

Register the full payment
=========================

In this case, the customer has not fulfilled the payment term and cannot
benefit from the cash discount. When you process the bank statement,
match the payment with the two related journal entries.

.. image:: cash_discounts/cash_discounts04.png
  :align: center


.. seealso::
  * :doc:`../../receivables/customer_invoices/payment_terms`
  * :doc:`../../bank/reconciliation/reconciliation_models`
