=============
Tax on margin
=============

In some industries, particularly those that involve buying and selling secondhand goods, it is
common to pay taxes based on the profit margin of the goods that are sold.

.. example::
   | A used phone is purchased for €100.
   | The used phone is then refurbished and sold for €150.
   | The profit is €150 - €100 = €50
   | In a tax-on-margin scheme, the tax rate applies to this €50 margin.

Most companies do not want to display the tax calculation on their customer invoices because it
would allow the end customer to calculate the markup they are paying and the price that the company
originally paid for the item(s). It is possible to hide the tax amount on customer invoices using a
custom tax record, and filtering the product margin report simplifies calculating the net VAT due
for products that use a tax-on-margin scheme.

.. important::
   Some countries may have specific requirements that are not met by this simplified configuration
   but are still possible to fulfill with Odoo. Personalized support is available via `Success Packs
   <https://www.odoo.com/pricing-packs>`_ to ensure specific requirements are met.

.. _margin/config:

Configuration
=============

To create the custom tax record necessary for the tax-on-margin scheme, follow these steps:

#. Go to :menuselection:`Accounting -->Configuration --> Taxes`.
#. Create a new tax record with an appropriate name (e.g., `Margin Scheme`).
#. Set the :guilabel:`Tax Computation` to :guilabel:`Group of Taxes`.
#. Set the :guilabel:`Tax Type` to :guilabel:`Sales`.
#. Leave the :guilabel:`Definition` tab blank.
#. In the :guilabel:`Advanced Options` tab, set the :guilabel:`Label on Invoices` (e.g., `VAT Margin
   Scheme`).
#. Also in the :guilabel:`Advanced Options` tab, set the :guilabel:`Legal Note` (e.g., `VAT Margin
   Scheme: Supply subject to the special margin scheme. VAT not deductible.`).
#. Create an identical tax record with the :guilabel:`Tax Type` set to :guilabel:`Purchases`.

.. important::
   While taxes can be manually applied on specific sales and purchase orders, it is important to set
   them in the :guilabel:`Sales Taxes` and :guilabel:`Purchase Taxes` fields of the products that
   use a tax-on-margin scheme as it facilitates the :ref:`product margins reporting filter
   <margin/report>`. Sales and purchases of products that do not have the margin scheme tax set on
   the product record will not appear in the filtered product margin report, which could lead to
   inaccurate calculations of the net VAT due.

.. tip::
   Because the product margins report includes all instances of these products being purchased and
   sold, using both a margin scheme tax and a regular VAT tax on different purchases/sales of the
   same product would lead to inaccurate calculations of the net VAT due.

   Instead, create two copies of the product record:

   - One for margin scheme transactions
   - One for regular VAT transactions

.. _margin/products:

Purchase and sell products
==========================

Once the products have their sales/purchases taxes set to the tax-on-margin scheme, they can be
purchased and sold like any other product. Their lines on quotations, sales orders, and invoices
will display the tax's :guilabel:`Label on Invoices` instead of any tax amount, and the tax's
:guilabel:`Legal Note` will be displayed on relevant invoices.

.. _margin/report:

Reporting
=========

The :guilabel:`Product Margins` report can calculate the net margin of all sales and purchases of
products that use the margin scheme tax with a simple custom filter:

.. note::
   If the :guilabel:`Product Margins` report is not available, activate it by following these steps:

   #. Go to :menuselection:`Accounting --> Configuration --> Settings`.
   #. Scroll to the :guilabel:`Analytics` section.
   #. Tick the :guilabel:`Margin Analysis` checkbox.

#. Go to :menuselection:`Accounting --> Reporting --> Product Margins`.
#. Set the :guilabel:`From` and :guilabel:`To` dates to define the desired period.
#. Set the :guilabel:`Invoice State` to determine which invoice liens should be included in the
   report.
#. Click :guilabel:`Open Margins`.
#. Click the :icon:`oi-search` :guilabel:`Search` bar, then click :guilabel:`Add Custom Filter` and
   create the following custom filter:

   a. Match :guilabel:`any` of the following rules:
   #. :guilabel:`Sales Tax = Margin Scheme`
   #. :guilabel:`Purchase Tax = Margin Scheme`

#. Optionally, save this search to avoid having to create the filter again:

   Click the :icon:`oi-search` :guilabel:`Search` bar, then click :guilabel:`Save current search`,
   enter a name, and select if the filter should be applied by default and/or shared with other
   users, then click :guilabel:`Save`.

Each line displays the net margin for the line's product, and the total net margin for all products
is displayed at the bottom of the report.

.. note::
   Because the product margins report sums all margins for the determined period, no adjustments are
   needed to account for purchasing a component that is used in the bill of materials of a finished
   product that is then sold.

.. _margin/vat:

Register VAT amount due
=======================

To apply a tax to the margin requires a journal entry with the VAT rate that should be applied.
Create a miscellaneous journal entry at the end of each period to record the VAT obligations. The
details of this journal entry vary based on the fiscal localization and the details of the
situation.

Generally, the entry should debit the income account that was used when selling these products since
the amounts on the invoices included tax, but tax amounts should not be recorded in income accounts.
The entry should then balance that debit amount with credits that record the tax payable, net
income, and cost.

#. Go to :menuselection:`Accounting --> Accounting --> Journal Entries`, and click :guilabel:`New`.
#. Add the following lines using amounts from the :ref:`product margins report <margin/report>`:

   .. list-table::
      :header-rows: 1

      * - Debit/Credit
        - Account
        - Amount
      * - Debit
        - Income
        - Total :guilabel:`Turnover`
      * - Credit
        - Tax/VAT payable
        - :guilabel:`Total Margin` multiplied by the tax rate *included*, for example,
          :math:`\frac{21}{121}` for a 21% tax rate
      * - Credit
        - Net income
        - :guilabel:`Total Margin` minus the previous line
      * - Credit
        - VAT-exempt sales margin
        - :guilabel:`Total Cost`

#. If your fiscal localization uses tax grids, manually add the appropriate tax grids to each line.

.. example::
   The following journal entry is an example of a journal entry in a Belgian company that has the
   following data from its product margins report:

   | Turnover: €150
   | Total Cost: €50
   | Total Margin: €100

   .. list-table::
      :header-rows: 1
      :widths: 35 15 35 15

      * - Account
        - Debit
        - Credit
        - Tax grid
      * - 700000 Sales
        - €150
        -
        -
      * - 451000 VAT Payable
        -
        - :math:`100 \times \frac{21}{121} = \text{€} 17.36`
        - 03
      * - 700010 Net Sales
        -
        - :math:`100 - 17.36 = \text{€} 82.64`
        - 54
      * - 700020 VAT-Exempt Sales Margin
        -
        - €50
        - 00
