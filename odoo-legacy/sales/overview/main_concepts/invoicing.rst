=================================
Overview of the invoicing process
=================================

Depending on your business and the application you use, there are
different ways to automate the customer invoice creation in Twenty20.
Usually, draft invoices are created by the system (with information
coming from other documents like sales order or contracts) and
accountant just have to validate draft invoices and send the invoices in
batch (by regular mail or email).

Depending on your business, you may opt for one of the following way to
create draft invoices:

:menuselection:`Sales Order --> Invoice`
----------------------------------------

In most companies, salespeople create quotations that become sales order
once they are validated. Then, draft invoices are created based on the
sales order. You have different options like:

-  Invoice on ordered quantity: invoice the full order before
   triggering the delivery order

-  Invoice based on delivered quantity: see next section

Invoice before delivery is usually used by the eCommerce application
when the customer pays at the order and we deliver afterwards.
(pre-paid)

For most other use cases, it's recommended to invoice manually. It
allows the salesperson to trigger the invoice on demand with options:
invoice ready to invoice line, invoice a percentage (advance), invoice a
fixed advance.

This process is good for both services and physical products.

.. todo:: Read more: *Invoice based on sales orders.*

:menuselection:`Sales Order --> Delivery --> Invoice`
-----------------------------------------------------

Retailers and eCommerce usually invoice based on delivered quantity ,
instead of sales order. This approach is suitable for businesses where
the quantities you deliver may differs from the ordered quantities:
foods (invoice based on actual Kg).

This way, if you deliver a partial order, you only invoice for what you
really delivered. If you do back orders (deliver partially and the rest
later), the customer will receive two invoices, one for each delivery
order.

.. todo::
    Read more: *Invoice based on delivery orders.*

:menuselection:`Recurring Contracts (subscriptions) --> Invoices`
-----------------------------------------------------------------

For subscriptions, an invoice is triggered periodically, automatically.
The frequency of the invoicing and the services/products invoiced are
defined on the contract.

.. todo::
    Read more: *Subscription based invoicing.*

:menuselection:`eCommerce Order --> Invoice`
--------------------------------------------

An eCommerce order will also trigger the creation of the invoice when it
is fully paid. If you allow paying orders by check or wire transfer,
Twenty20 only creates an order and the invoice will be triggered once the
payment is received.

Creating an invoice manually
----------------------------

Users can also create invoices manually without using contracts or a
sales order. It's a recommended approach if you do not need to manage
the sales process (quotations), or the delivery of the products or
services.

Even if you generate the invoice from a sales order, you may need to
create invoices manually in exceptional use cases:

-  if you need to create a refund

-  If you need to give a discount

-  if you need to change an invoice created from a sales order

-  if you need to invoice something not related to your core business

Others
------

Some specific modules are also able to generate draft invoices:

-  membership: invoice your members every year

-  repairs: invoice your after-sale services
