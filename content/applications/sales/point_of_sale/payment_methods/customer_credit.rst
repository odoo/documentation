===============
Customer credit
===============

The **Customer credit** feature allows customers to purchase items and incur a debt with the
company, which can be :ref:`settled later <pos/settle_accounts>` either through a point-of-sale
transaction or via an issued invoice.

Configuration
=============

To allow customers to pay on credit, :doc:`create a payment method <../payment_methods>` and
configure it as follows:

#. Tick the :guilabel:`Identify Customer` checkbox.
#. Keep the :guilabel:`Journal` field blank to use the customer's receivable account.
#. Once configure, navigate to the :ref:`POS settings <configuration/settings>`.
#. Add the payment method to the :guilabel:`Payment Methods` field.

.. note::
   To effectively monitor and manage the customer’s unpaid debt, either :doc:`create an invoice
   <../receipts_invoices>` for the order or activate the :doc:`Accounting application
   <../../../finance/accounting>`.

.. seealso::
   - :doc:`../../../finance/accounting/payments`
   - :doc:`../../../finance/accounting/get_started/chart_of_accounts`

Default credit limit
--------------------

To set a maximum sales credit, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Customer Invoices` section.
#. Check the :guilabel:`Sales Credit Limit` checkbox.
#. Enter the desired maximum amount in the :guilabel:`Default Credit Limit` field.

A warning appears next to the customer’s name if the cart value surpasses the established maximum
limit or if the customer has already exceeded it. However, the warning does **not** prevent the sale
from proceeding.

Payment process
===============

#. Payment screen
#. Select pm
#. Tick the Invoice button
#. hgh

.. warning::
   Without an invoice generated for the order, the :guilabel:`Customer Statements` report remains
   empty.

.. note::
   Depending on the defined credit limit, a warning sign can appear next to the customer’s name if
   the cart value surpasses the established maximum limit or if the customer has already exceeded
   it. However, the warning does **not** prevent the sale from proceeding.

Debt tracking
=============

When a customer pays on credit, the purchase amount is considered a debt until the customer pays it
off. To keep track of a customer’s debt, consult their customer statement in the backend or their
profile in an open session. To access the :guilabel:`Customer Statement` report, go to
:menuselection:`Point of Sale --> Orders --> Customers`, select a customer to open their form, and
click the :guilabel:`Customer Statements` smart button.



To overview the total amount due by a customer from an open session, access the customer list by
clicking :guilabel:`Customer` and search for the desired customer; the amount due is displayed next
to their name.

.. seealso::
   :doc:`../../../finance/accounting/payments/follow_up`

.. _pos/settle_accounts:

Due account settlement
======================

To settle a customer's due amount, :ref:`register the payment on the invoice
<accounting/payments/from-invoice-bill>` or, from an open session, follow these steps:

#. Click :guilabel:`Customer` and search for the desired customer in the list.
#. Click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon next to the customer's name.
#. Select :guilabel:`Settle due accounts`.
#. Choose the payment method.
#. Click :guilabel:`Validate`.
#. Click :guilabel:`Yes` on the popup window to confirm the deposit of the payment received from the
   customer.
