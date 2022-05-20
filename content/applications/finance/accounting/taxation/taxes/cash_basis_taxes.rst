=======================
Manage cash basis taxes
=======================

The cash basis taxes are due when the payment has been done and not at
the validation of the invoice (as it is the case with standard taxes).
Reporting your income and expenses to the administration based on the
cash basis method is legal in some countries and under some conditions.

Example : You sell a product in the 1st quarter of your fiscal year and
receive the payment the 2nd quarter of your fiscal year. Based on the
cash basis method, the tax you have to pay to the administration is due
for the 2nd quarter.

How to configure cash basis taxes ? 
------------------------------------

You first have to activate the setting in
:menuselection:`Accounting --> Configuration --> Settings --> Allow Tax Cash Basis`.
You will be asked to define the Tax Cash Basis Journal.

.. image:: cash_basis_taxes/cash_basis_taxes01.png
    :width: 5.04688in
    :height: 0.79688in
    :align: center

Once this is done, you can configure your taxes in
:menuselection:`Accounting --> Configuration --> Taxes`.
At first set the proper transitional accounts to post taxes
until you register the payment.

.. image:: cash_basis_taxes/cash_basis_taxes02.png
    :align: center

In the *Advanced Options* tab you will turn *Tax Due* to
*Based on Payment*. You will then have to
define the *Tax Received* account in which to post the tax amount
when the payment is received and the *Base Tax Received Account*
to post the base tax amount for an accurate tax report.

.. image:: cash_basis_taxes/cash_basis_taxes03.png
    :align: center

What is the impact of cash basis taxes in my accounting ? 
----------------------------------------------------------

Let’s take an example. You make a sale of $100 with a 15% cash basis
tax. When you validate the customer invoice, the following entry is
created in your accounting:

+-----------------------------+---------------------------+
| Customer Invoices Journal   |                           |
+=============================+===========================+
| **Debit**                   | **Credit**                |
+-----------------------------+---------------------------+
| Receivables $115            |                           |
+-----------------------------+---------------------------+
|                             | Temporary Tax Account $15 |
+-----------------------------+---------------------------+
|                             | Income Account $100       |
+-----------------------------+---------------------------+

A few days later, you receive the payment:

+----------------+--------------------+
| Bank Journal   |                    |
+================+====================+
| **Debit**      | **Credit**         |
+----------------+--------------------+
| Bank $115      |                    |
+----------------+--------------------+
|                | Receivables $115   |
+----------------+--------------------+

When you reconcile the invoice and the payment, this entry is generated:

+--------------------------+----------------------------+
| Tax Cash Basis Journal                                |
+==========================+============================+
| **Debit**                | **Credit**                 |
+--------------------------+----------------------------+
| Temporary Tax Account $15|                            |
+--------------------------+----------------------------+
|                          | Tax Received Account $15   |
+--------------------------+----------------------------+
| Income Account $100      |                            |
+--------------------------+----------------------------+
|                          | Income Account $100        |
+--------------------------+----------------------------+

.. tip::
    The last two journal items are neutral but they are needed to insure 
    correct tax reports in Odoo with accurate base tax amounts.
    We advise to use a default revenue account.
    The balance of this account will then always be at zero.
