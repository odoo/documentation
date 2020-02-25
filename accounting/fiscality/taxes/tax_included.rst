==============================
How to set tax-included prices
==============================

In most countries, B2C prices are tax-included. To do that in Odoo, check
*Included in Price* for each of your sales taxes in
:menuselection:`Accounting --> Configuration --> Accounting --> Taxes`.

.. image:: media/tax_included.png
   :align: center

This way the price set on the product form includes the tax. As an example,
let's say you have a product with a sales tax of 10%. The sales price on
the product form is $100.

- If the tax is not included in the price, you will get:

  - Price without tax: $100

  - Taxes: $10

  - Total to pay: $110

- If the tax is included in the price

  - Price without tax: 90.91

  - Taxes: $9.09

  - Total to pay: $100

You can rely on following documentation if you need both tax-included (B2C) and
tax-excluded prices (B2B): :doc:`B2B_B2C`.

Show tax-included prices in eCommerce catalog
=============================================

By default prices displayed in your eCommerce catalog are tax-excluded. To display
it in tax-included, check *Show line subtotals with taxes included (B2C)* in
:menuselection:`Sales --> Configuration --> Settings` (Tax Display).

