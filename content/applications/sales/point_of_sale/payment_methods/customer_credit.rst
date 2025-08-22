================
Customer account
================

The **Customer account** feature allows customers to use their account to make purchases. On the one
hand, they can deposit money for future purchases or, on the other hand, select their account as
:doc:`payment method <../payment_methods>` to purchase items on credit and :ref:`settle the debt
later <pos/settle_accounts>` through a point-of-sale transaction or via an issued invoice.

.. _pos/payment_method/configuration:

Configuration
=============

To allow customers to pay using their customer account, :doc:`create a payment method
<../payment_methods>` and configure it as follows:

#. Tick the :guilabel:`Identify Customer` checkbox.
#. Keep the :guilabel:`Journal` field blank to use the customer's receivable account.
#. Once configured, navigate to the :ref:`POS settings <configuration/settings>`.
#. Add the payment method to the :guilabel:`Payment Methods` field.

.. note::
   Set a maximum sales credit to prevent customers from exceeding a defined credit limit. Once the
   maximum credit amount is reached, the selected customer button turns orange and a
   :icon:`fa-warning` (:guilabel:`warning sign`) icon appears next to the customer’s name as a
   warning. However, this warning does **not** prevent a sale from proceeding.

.. seealso::
   - :doc:`../../../finance/accounting/payments`
   - :doc:`../../../finance/accounting/get_started/chart_of_accounts`

Payment process
===============

Deposit money
-------------

To deposit money to the customer account, from the POS interface:

#. Click :guilabel:`Customer` to open the list of customers.
#. Locate the desired customer and click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon to
   open the dropdown menu.
#. Click :guilabel:`Deposit money`.
#. Choose the payement method.
#. When redirected to the payment screen, enter the amount to deposit using the keypad.
#. :guilabel:`Validate` the transaction.
#. Click :guilabel:`Yes` on the popup window to confirm.

Pay using the customer account
------------------------------

To use the customer account to pay for a purchase, from the POS payment screen:

#. Select the payment method :ref:`created for the customer account
   <pos/payment_method/configuration>`.
#. Click :icon:`fa-user` :guilabel:`Customer` to open the customer list and select a customer.
#. Tick the :guilabel:`Invoice` button.
#. :guilabel:`Validate` the purchase.

.. note::
   To effectively monitor and manage the customer’s unpaid debt, either :doc:`create an invoice
   <../receipts_invoices>` for the order or activate the :doc:`Accounting application
   <../../../finance/accounting>`.

Debt tracking
=============

When a customer pays using their customer account, they make purchases on credit; meaning the
purchase amount is considered a debt until the customer pays it off. To keep track of a customer’s
debt, consult their customer statement in the backend or their profile in an open session.

To access the :guilabel:`Customer Statement` report, go to :menuselection:`Point of Sale --> Orders
--> Customers`, select a customer to open their form, and click the :guilabel:`Customer Statements`
smart button.

To overview the total amount due by a customer from an open session, access the customer list by
clicking :guilabel:`Customer` and search for the desired customer; the amount due is displayed next
to their name.

.. seealso::
   :doc:`../../../finance/accounting/payments/follow_up`

.. note::
   When a customer is related to a company, the customer statement report might be related to the
   company itself, and not the customer.

.. _pos/settle_accounts:

Due account settlement
======================

To settle a customer's due amount, :ref:`register the payment from the invoice
<accounting/payments/from-invoice-bill>` or, from an open session, follow these steps:

#. Click :guilabel:`Customer` and search for the desired customer in the list.
#. Click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon next to the customer's name.
#. Select :guilabel:`Settle due accounts`.
#. Choose the payment method.
#. Click :guilabel:`Validate`.
#. Click :guilabel:`Yes` on the popup window to confirm the deposit of the payment received from the
   customer.
