:show-content:

=====
Taxes
=====

There are numerous types of **taxes**, and their application varies greatly, depending mostly on
your company's localization. To make sure they are recorded with accuracy, Odoo's tax engine
supports all kinds of uses and computations.

.. _taxes/default:

Default taxes
=============

**Default taxes** define which taxes are automatically selected when creating a new product. They
are also used to prefill the :guilabel:`Taxes` field when adding a new line on an invoice in
:ref:`Accounting Firms <accounting/fiduciaries>` mode.

.. image:: taxes/default-configuration.png
   :alt: Odoo fills out the Tax field automatically according to the Default Taxes

To change your **default taxes**, go to :menuselection:`Accounting --> Configuration --> Settings
--> Taxes --> Default Taxes`, select the appropriate taxes for your default sales tax and purchase
tax, and click on :guilabel:`Save`.

.. image:: taxes/default-taxes.png
   :alt: Define which taxes to use by default on Odoo

.. note::
   **Default taxes** are automatically set up according to the country selected at the creation of
   your database, or when you set up a :ref:`fiscal localization package
   <fiscal_localizations/packages>` for your company.

.. _taxes/list_activation:

Activate taxes from the list view
=================================

As part of your :ref:`fiscal localization package <fiscal_localizations/packages>`, most of your
country's sales taxes are already preconfigured on your database. However, only a few taxes are
activated by default. To activate taxes relevant to your business, go to :menuselection:`Accounting
--> Configuration --> Taxes` and enable the toggle button under the :guilabel:`Active` column.

.. image:: taxes/list.png
   :alt: Activate pre-configured taxes in Odoo Accounting

.. _taxes/configuration:

Configuration
=============

To edit or create a **tax**, go to :menuselection:`Accounting --> Configuration --> Taxes` and open
a tax or click on :guilabel:`New`.

.. image:: taxes/edit.png
   :alt: Edition of a tax in Odoo Accounting

Basic options
-------------

.. _taxes/name:

Tax name
~~~~~~~~

The **tax name** is displayed for backend users in the :guilabel:`Taxes` field in
:doc:`sales orders <../../sales/sales>`, :doc:`invoices <customer_invoices>`, product forms, etc.

.. _taxes/computation:

Tax computation
~~~~~~~~~~~~~~~

The :guilabel:`Tax Computation` field determines how the tax amount is computed from the sales
price. The following options are available:

- :ref:`Group of Taxes <taxes/computation/group-of-taxes>`: a combination of several other taxes
- :ref:`Fixed <taxes/computation/fixed>`: a fixed amount
- :ref:`Percentage of Price <taxes/computation/percentage-of-price>`: a percentage of the
  tax-excluded sales price
- :ref:`Percentage of Price Tax Included <taxes/computation/percentage-of-price-tax-included>`: a
  percentage of the tax-included total
- :ref:`Python Code <taxes/computation/python-code>`: a custom user-defined formula

.. _taxes/computation/group-of-taxes:

Group of taxes
**************

  The tax is a combination of multiple sub-taxes. You can add as many taxes as you want, in the
  order you want them to be applied.

.. important::
   Make sure the tax sequence is correct, as the display order determines the application order and
   may affect tax computation, particularly if a tax :ref:`affects the base of subsequent taxes
   <taxes/base-subsequent>`.

.. _taxes/computation/fixed:

Fixed
*****

The tax has a fixed amount in the default currency. The amount remains the same per unit,
regardless of the sales price.

The computation is :math:`\text{tax amount} = \text{fixed tax amount} \times \text{quantity}`.

.. example::
   A product has a sales price of $1000, and we apply a $10 :guilabel:`Fixed` tax. We then have:

   +-------------+-------------+----------+----------+
   | Product     | Price       | Tax      | Total    |
   | sales price | without tax |          |          |
   +=============+=============+==========+==========+
   | 1,000       | 1,000       | 10       | 1,010.00 |
   +-------------+-------------+----------+----------+

.. _taxes/computation/percentage-of-price:

Percentage of price
*******************

The tax rate is a percentage of the **tax-excluded** subtotal.

The exact tax computation depends on the :ref:`Included in Price <taxes/included-in-price>` field,
which determines whether the sales price should be treated as tax-excluded or tax-included:

.. tabs::
   .. tab:: Tax-excluded

      If :guilabel:`Included in Price` is disabled, the computation is :math:`\text{tax amount}
      = \text{sales price} \times \text{tax rate}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax that is not :guilabel:`Included in Price`. We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 1,000       | 100      | 1,100.00 |
         +-------------+-------------+----------+----------+

   .. tab:: Tax-included

      If :guilabel:`Included in Price` is enabled, the computation is :math:`\text{tax amount} =
      \text{sales price} \times \frac{\text{tax rate}}{1 + \text{tax rate}}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax that is :guilabel:`Included in Price`. We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 909.09      | 90.91    | 1,000.00 |
         +-------------+-------------+----------+----------+

.. _taxes/computation/percentage-of-price-tax-included:

Percentage of price tax included
********************************

.. important::
   This tax computation is rarely used and only useful in countries (e.g., Brazil, Bolivia) that
   quote tax rates as a percentage of the tax-included total.
   For the more common need to compute tax amounts from a tax-included price, use the
   :ref:`Percentage of Price <taxes/computation/percentage-of-price>` tax computation with the
   :ref:`Included in Price <taxes/included-in-price>` option.

The tax rate is a percentage of the **tax-included** total.

The exact tax computation depends on the :ref:`Included in Price <taxes/included-in-price>` field,
which determines whether the sales price should be treated as tax-excluded or tax-included:

.. tabs::
   .. tab:: Tax-excluded
      If :guilabel:`Included in Price` is disabled, the computation is :math:`\text{tax amount}
      = \text{sales price} \times \frac{\text{tax rate}}{1 - \text{tax rate}}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price
         Tax Included` tax that is not :guilabel:`Included in Price`. We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 1,000       | 111.11   | 1,111.11 |
         +-------------+-------------+----------+----------+

         Note that the real tax rate in terms of the tax-excluded price is
         :math:`\frac{111.11}{1000} = 11.111\%`.

   .. tab:: Tax-included

      If :guilabel:`Included in Price` is enabled, the computation is :math:`\text{tax amount} =
      \text{sales price} \times \text{tax rate}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10%
         :guilabel:`Percentage of Price Tax Included` tax that is :guilabel:`Included in Price`.
         We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 900         | 100      | 1,000.00 |
         +-------------+-------------+----------+----------+

         Note that the real tax rate in terms of the tax-excluded price is
         :math:`\frac{100}{900} = 11.111\%`.

.. _taxes/computation/python-code:

Python code
***********

.. important::
   If a tax can be expressed as a multiple of the quantity of the product to which it applies, it
   can be defined as a :ref:`Fixed <taxes/computation/fixed>` tax. Doing so is strongly recommended
   over defining a :guilabel:`Python Code` tax.

A tax defined as :guilabel:`Python Code` consists of two snippets of Python code that are executed
in a local environment that can access the unit price, quantity, product, and partner.
:guilabel:`Python Code` defines the amount of the tax, and :guilabel:`Applicable Code` defines
whether the tax is applied. Enter a formula for each field at the bottom of the
:guilabel:`Definition` tab.

.. example::
   A product has a sales price of $1000, and we apply a :guilabel:`Python Code` tax with the
   following configuration:

   - :guilabel:`Python Code`: `result = price_unit * 0.10` and
   - :guilabel:`Applicable Code`: `result = True`.

   We then have:

   +-------------+-------------+----------+----------+
   | Product     | Price       | Tax      | Total    |
   | sales price | without tax |          |          |
   +=============+=============+==========+==========+
   | 1,000       | 1,000       | 100      | 1,100.00 |
   +-------------+-------------+----------+----------+

.. _taxes/active:

Active
~~~~~~

Only **active** taxes can be added to new documents.

.. important::
   It is not possible to delete taxes that have already been used. Instead, you can deactivate them
   to prevent future use.

.. note::
   This field can be modified from the :ref:`list view <taxes/list_activation>`.

.. _taxes/scope:

Tax type
~~~~~~~~

The :guilabel:`Tax Type` determines the tax application, which also restricts where it is displayed.

- **Sales**: Customer invoices, product customer taxes, etc.
- **Purchase**: Vendor bills, product vendor taxes, etc.
- **None**

.. tip::
   You can use :guilabel:`None` for taxes that you want to include in a :ref:`Group of Taxes
   <taxes/computation>` but that you do not want to list along with other sales or purchase taxes.

Tax scope
~~~~~~~~~

The :guilabel:`Tax Scope` restricts the use of taxes to a type of product, either **goods** or
**services**.

.. _taxes/definition-tab:

Definition tab
--------------

Allocate with precision the amount of the taxable basis or percentages of the computed tax to
multiple accounts and tax grids.

.. image:: taxes/definition.png
   :alt: Allocate tax amounts to the right accounts and tax grids

- **Based On**:

  - :guilabel:`Base`: the price on the invoice line
  - :guilabel:`% of tax`: a percentage of the computed tax.

- **Account**: if defined, an additional journal item is recorded.
- **Tax Grids**:  used to generate :doc:`tax reports <reporting/tax_returns>`
  automatically, according to your country's regulations.

.. _taxes/advanced-tab:

Advanced options tab
--------------------

.. _taxes/label-invoices:

Label on invoices
~~~~~~~~~~~~~~~~~

The tax label is displayed on each invoice line in the :guilabel:`Taxes` column. This is visible to
*front-end* users on exported invoices, in customer portals, etc.

.. image:: taxes/invoice-label.png
   :alt: The label on invoices is displayed on each invoice line

.. _taxes/tax-group:

Tax group
~~~~~~~~~

Select which **tax group** the tax belongs to. The tax group name is the displayed above the
**total** line on exported invoices and in customer portals.

Tax groups include different iterations of the same tax. This can be useful when you must record
the same tax differently according to :doc:`fiscal positions <taxes/fiscal_positions>`.

.. example::

   .. image:: taxes/invoice-tax-group.png
      :alt: The Tax Group name is different from the Label on Invoices

   In the example above, the :guilabel:`0% EU S` tax for intra-community customers in Europe records
   the amount on specific accounts and tax grids. However, it remains a 0% tax to the customer. This
   is why the label indicates :guilabel:`0% EU S`, and the tax group name above the
   :guilabel:`Total` line indicates :guilabel:`VAT 0%`.

.. important::
   Taxes have three different labels, each one having a specific use. Refer to the following table
   to see where they are displayed.

   +------------------+-------------------------+-------------------------+
   | :ref:`Tax Name   | :ref:`Label on Invoice  | :ref:`Tax Group         |
   | <taxes/name>`    | <taxes/label-invoices>` | <taxes/tax-group>`      |
   +==================+=========================+=========================+
   | Backend          | :guilabel:`Taxes` column| Above the               |
   |                  | on exported invoices    | :guilabel:`Total` line  |
   |                  |                         | on exported invoices    |
   +------------------+-------------------------+-------------------------+

.. _taxes/analytic-cost:

Include in analytic cost
~~~~~~~~~~~~~~~~~~~~~~~~

With this option activated, the tax amount is assigned to the same **analytic account** as the
invoice line.

.. _taxes/included-in-price:

Included in price
~~~~~~~~~~~~~~~~~

With this option activated, the tax will treat the sales price on which it is applied as a total
including the tax amount. The tax computation will split the sales price into a base amount and a
tax amount. This makes it suitable for B2C sales in most countries where prices are quoted
tax-inclusive.

`Total = Sales Price = Computed Tax-Excluded price + Tax`

.. example::
   A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price` tax
   with :guilabel:`Included in Price`. We then have:

   +-------------+-------------+----------+----------+
   | Product     | Price       | Tax      | Total    |
   | sales price | without tax |          |          |
   +=============+=============+==========+==========+
   | 1,000       | 909.09      | 90.91    | 1,000.00 |
   +-------------+-------------+----------+----------+

.. note::
   For a guide on configuring tax-excluded and tax-included prices for B2B and B2C customers,
   see :doc:`taxes/B2B_B2C`.

   .. image:: taxes/toggle-button.png

.. _taxes/base-subsequent:

Affect base of subsequent taxes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this setting is enabled, any subsequent tax applied on the same product line that has
:ref:`taxes/base-affected` will be based on a modified sales price. The exact behavior depends on
whether the tax with :guilabel:`Affect base of subsequent taxes` is :ref:`taxes/included-in-price`
or not.

.. tabs::
   .. tab:: Tax-excluded
      If :guilabel:`Included in Price` is disabled, subsequent taxes with :guilabel:`Base affected
      by preceding taxes` will be based on a modified sales price equal to the original sales price
      plus the tax amount.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax with :guilabel:`Affect base of subsequent taxes`. Any subsequent tax with
         :guilabel:`Base affected by preceding taxes` will be based on a modified sales price of
         $1100.

   .. tab:: Tax-included
      If :guilabel:`Included in Price` is enabled, subsequent taxes with :guilabel:`Base affected
      by preceding taxes` will be based on a modified sales price equal to the original sales price
      minus the tax amount.

      .. example::
         A product has a sales price of $1100, and we apply a 10% :guilabel:`Percentage of Price`
         tax with :guilabel:`Included in Price` and :guilabel:`Affect base of subsequent taxes`.
         Any subsequent tax with :guilabel:`Base affected by preceding taxes` will be based on a
         modified sales price of $1000.

This setting is considered any time multiple taxes are applied to the same product line, whether
via a :ref:`group of taxes <taxes/computation>` or multiple taxes added directly to a product line.

.. image:: taxes/subsequent-line.png
   :alt: The eco-tax is taken into the basis of the 21% VAT tax

.. warning::
   The order in which you add the taxes on a product line has no effect on how amounts are computed.
   If you add taxes directly on a product line, only the tax sequence determines the order in which
   they are applied.

   To reorder the sequence, go to :menuselection:`Accounting --> Configuration --> Taxes`, and drag
   and drop the lines with the handles next to the tax names.

   .. image:: taxes/list-sequence.png
      :alt: The taxes' sequence in Odoo determines which tax is applied first

.. _taxes/base-affected:

Base affected by preceding taxes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting, which is only visible in :doc:`developer mode <../../general/developer_mode>`,
determines whether any previous tax that :ref:`affects the base of subsequent taxes
<taxes/base-subsequent>` will modify the sales price that this tax is based on.

.. note::
   Taxes with :ref:`Included in Price <taxes/included-in-price>` always behave as if this setting is
   enabled.

Extra taxes
===========

"Extra taxes" is a broad term referring to additional taxes beyond the standard or basic taxes
imposed by governments. These extra taxes can be **luxury** taxes, **environmental** taxes,
**import** or **export duties** taxes, etc.

.. note::
   The method to compute these taxes varies across different countries. We recommend consulting your
   country's regulations to understand how to calculate them for your business.

To compute an extra tax in Odoo, :ref:`create a tax <taxes/configuration>`, enter a tax name, select
a :ref:`Tax Computation <taxes/configuration>`, set an :guilabel:`Amount`, and in the
:guilabel:`Advanced Options` tab, enable :guilabel:`Affect Base of Subsequent Taxes`. Then, drag and
drop the taxes in the :ref:`order they should be computed <taxes/base-subsequent>`.

.. example::
   - In Belgium, the formula to compute an environmental tax is: `(product price + environmental
     tax) x sales tax`. Therefore, our environmental tax has to come *before* the sales tax in the
     computation sequence.
   - In our case, we created a 5% environmental tax (Ecotax) and put it *before* the Belgian base
     tax of 21%.

   .. image:: taxes/ecotax.png
      :alt: Environmental tax sequence in Belgium.

.. seealso::
  - :doc:`taxes/fiscal_positions`
  - :doc:`taxes/B2B_B2C`
  - :doc:`taxes/taxcloud`
  - :doc:`reporting/tax_returns`

.. toctree::
   :titlesonly:

   taxes/cash_basis
   taxes/retention
   taxes/vat_verification
   taxes/fiscal_positions
   taxes/avatax
   taxes/taxcloud
   taxes/eu_distance_selling
   taxes/B2B_B2C
