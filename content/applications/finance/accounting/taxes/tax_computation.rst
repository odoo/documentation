===============
Tax computation
===============

.. _taxes/computation:

Tax computation
---------------

The :guilabel:`Tax Computation` field determines the relation between the tax amount and the base
the tax is based on. The following options are available:

- :ref:`Group of Taxes <taxes/computation/group-of-taxes>`: a combination of several other taxes
- :ref:`Fixed <taxes/computation/fixed>`: a fixed amount
- :ref:`Percentage of Price <taxes/computation/percentage-of-price>`: a percentage of the
  tax-excluded sales price
- :ref:`Percentage of Price Tax Included <taxes/computation/percentage-of-price-tax-included>`: a
  percentage of the tax-included total
- :ref:`Custom Formula <taxes/computation/python-code>`: a custom, user-defined formula

.. _taxes/computation/group-of-taxes:

Group of taxes
~~~~~~~~~~~~~~

The tax is a combination of multiple sub-taxes. You can add as many taxes as you want, in the order
you want them to be applied.

.. important::
   Make sure the tax sequence is correct, as the display order determines the application order and
   may affect tax computation, particularly if a tax :ref:`affects the base of subsequent taxes
   <taxes/base-subsequent>`.

.. _taxes/computation/fixed:

Fixed
~~~~~

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
~~~~~~~~~~~~~~~~~~~

The tax rate is a percentage of the **tax-excluded** subtotal.

The exact tax computation depends on the :ref:`Included in Price <taxes/included-in-price>` field,
which determines whether the tax amount is included in the sales price.

.. tabs::
   .. tab:: Tax-excluded

      If :guilabel:`Included in Price` is :guilabel:`Tax Excluded`, the computation is
      :math:`\text{tax amount} = \text{sales price} \times \text{tax rate}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax that is :guilabel:`Tax Excluded`. We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 1,000       | 100      | 1,100.00 |
         +-------------+-------------+----------+----------+

   .. tab:: Tax-included

      If :guilabel:`Included in Price` is :guilabel:`Tax Included`, the computation is
      :math:`\text{tax amount} = \text{sales price} \times \frac{\text{tax rate}}{1 +
      \text{tax rate}}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax that is :guilabel:`Tax Included`. We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 909.09      | 90.91    | 1,000.00 |
         +-------------+-------------+----------+----------+

.. _taxes/computation/percentage-of-price-tax-included:

Percentage of price tax included
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. important::
   This tax computation is rarely used and only useful in countries (e.g., Brazil, Bolivia) that
   quote tax rates as a percentage of the tax-included total.
   For the more common need to compute tax amounts from a tax-included price, use the
   :ref:`Percentage of Price <taxes/computation/percentage-of-price>` tax computation with
   :ref:`Included in Price <taxes/included-in-price>` set to :guilabel:`Tax Included`.

The tax rate is a percentage of the **tax-included** total.

The exact tax computation depends on the :ref:`Included in Price <taxes/included-in-price>` field,
which determines whether the tax amount is included in the sales price.

.. tabs::
   .. tab:: Tax-excluded
      If :guilabel:`Included in Price` is set to :guilabel:`Tax Excluded`, the computation is
      :math:`\text{tax amount} = \text{sales price} \times \frac{\text{tax rate}}{1 -
      \text{tax rate}}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price
         Tax Included` tax that is :guilabel:`Tax Excluded`. We then have:

         +-------------+-------------+----------+----------+
         | Product     | Price       | Tax      | Total    |
         | sales price | without tax |          |          |
         +=============+=============+==========+==========+
         | 1,000       | 1,000       | 111.11   | 1,111.11 |
         +-------------+-------------+----------+----------+

         Note that the real tax rate in terms of the tax-excluded price is
         :math:`\frac{111.11}{1000} = 11.111\%`.

   .. tab:: Tax-included

      If :guilabel:`Included in Price` is set to :guilabel:`Tax Included`, the computation is
      :math:`\text{tax amount} = \text{sales price} \times \text{tax rate}`.

      .. example::
         A product has a sales price of $1000, and we apply a 10%
         :guilabel:`Percentage of Price Tax Included` tax that is :guilabel:`Tax Included`.
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

Custom formula
~~~~~~~~~~~~~~

.. important::
   If a tax can be expressed as a multiple of the quantity of the product to which it applies, it
   can be defined as a :ref:`Fixed <taxes/computation/fixed>` tax. Doing so is strongly recommended
   over defining a :guilabel:`Custom Formula` tax.

.. note::
   To use :guilabel:`Custom Formula` taxes, :ref:`install <general/install>` the :guilabel:`Define
   Taxes as Python Code` (`account_python_tax`) module.

For a :guilabel:`Custom Formula` tax, the tax amount is computed according to a Python expression
defined in the :guilabel:`Formula` field. The Python expression may contain the following tokens:

- any of the following variables:

  - `price_unit`: the unit price of the product
  - `base`: the taxable basis on which the tax is applied - may differ from the `price_unit` if
    other taxes are applied first
  - `quantity`: the quantity of the product
  - `product`: the product record - product fields can also be accessed

- integers and floating-point numbers

- the following permitted tokens: `(`, `)`, `+`, `-`, `*`, `/`, `,`, `<`, `>`, `<=`, `>=`, `and`,
  `or`, `None`, `min`, and `max`

.. example::
   A product has a sales price of $1000, and we apply a :guilabel:`Custom Formula` tax with a
   :guilabel:`Formula` of `min(base, 500) * 0.10 + max(base - 500, 0) * 0.20`

   We then have:

   +-------------+-------------+----------+----------+
   | Product     | Price       | Tax      | Total    |
   | sales price | without tax |          |          |
   +=============+=============+==========+==========+
   | 1,000       | 1,000       | 150      | 1,150.00 |
   +-------------+-------------+----------+----------+

.. _taxes/included-in-price:

Included in price
-----------------

.. tip::
   To set a company-wide default for this setting, go to :menuselection:`Accounting -->
   Configuration --> Settings`, find the :guilabel:`Taxes` section, and set the :guilabel:`Prices`
   setting to :guilabel:`Tax Excluded` or :guilabel:`Tax Included`. This setting cannot be changed
   once invoices have been created.

:guilabel:`Default` indicates that the tax follows the company-wide default.

:guilabel:`Tax Excluded` indicates that the tax amount is not included in the sales price. The tax
computation will therefore compute a tax amount on top of the sales price.

:guilabel:`Tax Included` indicates that the tax amount is included in the sales price. The tax
computation will therefore split the sales price into a tax-excluded base and the tax amount. This
makes it suitable for B2C sales in most countries, where prices are quoted tax-inclusive.

.. example::
   A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price` tax
   with :guilabel:`Included in Price` set to :guilabel:`Tax Included`. We then have:

   +-------------+-------------+----------+----------+
   | Product     | Price       | Tax      | Total    |
   | sales price | without tax |          |          |
   +=============+=============+==========+==========+
   | 1,000       | 909.09      | 90.91    | 1,000.00 |
   +-------------+-------------+----------+----------+

.. note::
   For a guide on configuring tax-excluded and tax-included prices for B2B and B2C customers,
   see :doc:`B2B_B2C`.

.. _taxes/base-subsequent:

Affect base of subsequent taxes
-------------------------------

This setting controls how multiple taxes on a product line affect each other.

If this setting is enabled, this tax's tax amount is included in the base of any subsequent tax
applied on the same product line that has its :ref:`taxes/base-affected` setting enabled. As such,
the subsequent tax's base is the sum of the tax-excluded base and this tax's tax amount.

.. tabs::
   .. tab:: Tax-excluded
      If :guilabel:`Affect base of subsequent taxes` is enabled and :guilabel:`Included in Price` is
      set to :guilabel:`Tax Excluded`, subsequent taxes with the :guilabel:`Base affected by
      preceding taxes` setting enabled will be based on a modified sales price equal to the original
      sales price plus the tax amount.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax where the :guilabel:`Included in Price` setting is set to :guilabel:`Tax Excluded` and
         the :guilabel:`Affect base of subsequent taxes` setting is enabled. Any subsequent tax with
         its :guilabel:`Base affected by preceding taxes` will be based on a modified sales price of
         $1100.

   .. tab:: Tax-included
      If :guilabel:`Affect base of subsequent taxes` is enabled and :guilabel:`Included in Price` is
      set to :guilabel:`Tax Included`, subsequent taxes with the :guilabel:`Base affected by
      preceding taxes` setting enabled will be based on the original sales price.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax where the :guilabel:`Included in Price` setting is set to :guilabel:`Tax Included` and
         the :guilabel:`Affect base of subsequent taxes` setting is enabled. Any subsequent tax with
         its :guilabel:`Base affected by preceding taxes` will be based on the original sales price
         of $1000.

If this setting is disabled, the tax amount will not be included in the base of any subsequent tax
applied on the same product line.

.. tabs::
   .. tab:: Tax-excluded
      If :guilabel:`Affect base of subsequent taxes` is disabled and :guilabel:`Included in Price`
      is set to :guilabel:`Tax Excluded`, subsequent taxes with the :guilabel:`Base affected by
      preceding taxes` setting enabled will be based on the original sales price.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax where the :guilabel:`Included in Price` setting is set to :guilabel:`Tax Excluded` and
         the :guilabel:`Affect base of subsequent taxes` setting is enabled. Any subsequent tax with
         its :guilabel:`Base affected by preceding taxes` will be based on the original sales price
         of $1000.

   .. tab:: Tax-included
      If :guilabel:`Affect base of subsequent taxes` is disabled and :guilabel:`Included in Price`
      is set to :guilabel:`Tax Included`, subsequent taxes with the :guilabel:`Base affected by
      preceding taxes` setting enabled will be based on a modified sales price equal to the original
      sales price minus the tax amount.

      .. example::
         A product has a sales price of $1000, and we apply a 10% :guilabel:`Percentage of Price`
         tax where the :guilabel:`Included in Price` setting is set to :guilabel:`Tax Included` and
         the :guilabel:`Affect base of subsequent taxes` setting is enabled. Any subsequent tax with
         its :guilabel:`Base affected by preceding taxes` will be based on a modified sales price of
         $909.09.

This setting is considered any time multiple taxes are applied to the same product line, whether
via a :ref:`group of taxes <taxes/computation>` or multiple taxes added directly to a product line.

.. note::
   The order in which taxes are applied depends only on the order in which they appear in the
   :guilabel:`Taxes` list, not on the order in which they are added to a product line.

   To modify the order, go to :menuselection:`Accounting --> Configuration --> Taxes`, and drag and
   drop taxes using the handles to the left of the tax names.

   .. image:: tax_computation/list-sequence.png
      :alt: The order of appearance of taxes in the Taxes list determines which tax is applied first

   Regardless of the order in the :guilabel:`Taxes` list, :guilabel:`Tax Excluded` taxes do not
   affect the base of subsequent :guilabel:`Tax Included` taxes (see the note in
   :ref:`taxes/base-affected`).

.. example::
   In the following example:

   - the Ecotax is a :guilabel:`Fixed` tax of €0.90 per unit, with the :guilabel:`Affect base of
     subsequent taxes` setting enabled.
   - The 21% VAT tax is a 21% :guilabel:`Percentage of Price` tax with the :guilabel:`Base affected
     by preceding taxes` setting enabled.
   - In the :guilabel:`Taxes` list, the 21% VAT tax comes after the Ecotax, as shown in the
     configuration above.

   When applying both taxes to a product line, the Ecotax amount is added to the basis of the 21%
   VAT tax.

   .. image:: tax_computation/subsequent-line.png
      :alt: The Ecotax is added to the basis of the 21% VAT tax

.. _taxes/base-affected:

Base affected by preceding taxes
--------------------------------

This setting, which is only visible in :doc:`developer mode <../../../general/developer_mode>`,
determines whether any previous tax that :ref:`affects the base of subsequent taxes
<taxes/base-subsequent>` will modify the sales price that this tax is based on.

.. note::
   Taxes with :ref:`Included in Price <taxes/included-in-price>` set to :guilabel:`Tax Included` do
   not have this setting. Such taxes are never affected by previous :guilabel:`Tax Excluded` taxes,
   except if they have the :guilabel:`Fixed` :ref:`tax computation <taxes/computation>` type.
