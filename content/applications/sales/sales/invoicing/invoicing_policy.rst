================================================
Invoice based on delivered or ordered quantities
================================================

Different business policies might require different options for invoicing:

- The **Invoice what is ordered** rule is used as **default mode** in Odoo Sales, which means that
  customers will be invoiced once the sales order is confirmed.

- The **Invoice what is delivered** rule will invoice customers once the delivery is done. This rule
  concerns businesses that sell materials, liquids or food in large quantities. In these cases, the
  quantity might diverge a little bit and it is, therefore, preferable to invoice the quantity
  actually delivered.

Being able to have different invoicing options allow you more flexibility. Indeed, you need to know
exactly how to invoice your customers for different situations.

Activate these features
=======================

Go to :menuselection:`Sales --> Configuration --> Settings` and under **Invoicing policy** choose
the rule you want to apply.

.. image:: invoicing_policy/invoicing_policy_1.png
   :align: center
   :class: img-thumbnail
   :alt: How to choose your invoicing policy on Odoo Sales?

.. important::
   If you decide to choose the **Invoice what is delivered** rule, you will not be able to
   activate the feature called **Automatic invoice**, which automatically generates invoices when
   the online payment is confirmed.

Choose an invoicing policy on a product form
============================================

From any product page, under the **Sales tab**, you will find the invoicing policy, which can be
manually changed.

.. image:: invoicing_policy/invoicing_policy_5.png
   :align: center
   :class: img-thumbnail
   :alt: How to change your invoicing policy on a product form on Odoo Sales?

Impact on sales flow
====================

On Odoo Sales, the basic sales flow will be to create a quotation, send it to your customer,
wait for confirmation, confirm the sales order and create an invoice.

- **Invoice what is ordered**: No impact on this basic sales flow. Indeed, you can invoice as soon
  as the sale is confirmed.

- **Invoice what is delivered**: Small impact on sales flow because you will have to manually
  enter the delivered quantity on the sales order or to install the **Inventory App** to confirm the
  delivered quantity before creating an invoice, with the **Sales App**. Indeed, if you try to
  create an invoice without validating the delivered quantity, you will receive an error message as
  below.

  .. image:: invoicing_policy/invoicing_policy_3.png
     :class: img-thumbnail
     :alt: How the choice of your invoicing policy impacts your sales flow on Odoo Sales?

.. note::
   Once the quotation is confirmed and that the status went from **Quotation sent** to
   **Sales order**, you are able to see your delivered and invoiced quantities directly from your
   sales order (it is true for both rules).

   .. image:: invoicing_policy/invoicing_policy_4.png
      :align: center
      :class: img-thumbnail
      :alt: How to see your delivered and invoiced quantities on Odoo Sales?

   Odoo will automatically add the quantities to the invoice (even if it is a partial delivery).

Finally, to create an invoice, you will have different possibilities: regular invoice or down
payment (percentage or fixed amount).

.. important::
   Be sure to check out our documentation about down payment here: :doc:`down_payment`, to master
   this incredible feature.
