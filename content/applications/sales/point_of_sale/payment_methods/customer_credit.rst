===============
Customer credit
===============

Odoo offers a method for granting credit to customers. This feature allows customers to acquire
items while incurring a debt to the company, which can be :ref:`settled later <pos/settle_accounts>`
either through a point-of-sale transaction or via an issued invoice.

Configuration
=============

To allow customers to pay on credit,

#. :doc:`Create a payment method <../payment_methods>`.
#. Tick the :guilabel:`Identify Customer` checkbox.
#. Keep the :guilabel:`Journal` field blank, as there is no journal entry tied to a specific bank or
   cash journal created when this payment method is used.

Once configured, you can process a credit sale by selecting this payment method after a customer
makes a purchase.

When this occurs, the following accounting entries are generated:

- A debit in Accounts Receivable.
- A credit in the Income account.

Upon later settling the accounts (i.e., receiving payment from the customer), the following
accounting entries are made:

- A debit in an Outstanding Account.
- A credit in Accounts Receivable.

.. note::
   To effectively monitor and manage the customer’s unpaid debt, either create an invoice for the
   order or activate the :doc:`Accounting application <../../../finance/accounting>`.

.. seealso::
   :doc:`../../../finance/accounting/get_started/chart_of_accounts`

Default credit limit
--------------------

To set a maximum sales credit,

#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Customer Invoices` section.
#. Check the :guilabel:`Sales Credit Limit` checkbox.
#. Enter the desired maximum amount in the :guilabel:`Default Credit Limit` field.

A warning appears next to the customer’s name if the cart value surpasses the established maximum
limit or if the customer has already exceeded it. Nevertheless, this warning does **not** prevent
the sale from proceeding.

Debt tracking
=============

This amount is considered a debt until the customer pays it off. To keep track of a customer’s debt,
consult their customer statement in the backend or their profile in an open session.

To access the **customer statements** report,

#. Go to :menuselection:`Point of Sale --> Orders --> Customers`.
#. Select a customer to open their form.
#. Click :guilabel:`Customer Statements` in the top bar. There, you can view a report detailing all
   invoiced outstanding payments that need to be settled.

.. warning::
   If you haven't generated an invoice for the order, the :guilabel:`Customer Statements` report
   remains empty.

From an open session, access the customer list by clicking :guilabel:`Customers` The total amount
due from each customer is visible next to their name.

.. _pos/settle_accounts:

Settle due accounts
===================

Settlement can be made by paying the generated invoice, but also from an open POS session. To do so,

#. Click :guilabel:`Customers`.
#. Click the :icon:`fa-bars` icon (:guilabel:`hamburger menu`) next to the desired customer.
#. Select :guilabel:`Settle due accounts`.
#. Choose the payment method.
#. Click :guilabel:`Validate`.

Then, click :guilabel:`Yes` to confirm the deposit of the payment received from the customer.
