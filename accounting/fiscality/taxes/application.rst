==========================================================
How to adapt taxes to my customer status or localization
==========================================================

Most often sales tax rates depend on your customer status or localization.
To map taxes, Odoo brings the so-called *Fiscal Positions*. 

Create tax mapping
==================

A fiscal position is just a set of rules that maps default taxes (as defined
on product form) into other taxes. In the screenshot below, foreign customers
get a 0% tax instead of the default 15%, for both sales and purchases.

.. image:: media/application02.png
   :align: center

The main fiscal positions are automatically created according to your
localization. But you may have to create fiscal positions for specific use cases.
To define fiscal positions, go to
:menuselection:`Invoicing/Accounting --> Configuration --> Fiscal Positions`.

.. note::
    If you use Odoo Accounting, you can also map the Income/Expense accounts according to the fiscal
    position. For example, in some countries, revenues from sales are not posted in
    the same account than revenues from sales in foreign countries.

Adapt taxes to your customer status
===================================

If a customer falls into a specific taxation rule, you need to apply a tax-mapping.
To do so, create a fiscal position and assign it to your customers.

.. image:: media/application01.png
   :align: center

Odoo will use this specific fiscal position for any order/invoice recorded for the customer.

.. note:: 
    If you set the fiscal position in the sales order or invoice manually, it will only
    apply to this document and not to future orders/invoices of the same customer.

Adapt taxes to your customer address (destination-based)
========================================================

Depending on your localization, sales taxes may be origin-based or destination-based.
Most states or countries require you to collect taxes at the rate of the destination
(i.e. your buyer’s address) while some others require to collect them at the rate effective
at the point of origin (i.e. your office or warehouse).

If you are under the destination-based rule, create one fiscal position per tax-mapping to apply.

* Check the box *Detect Automatically*.
* Select a country group, country, state or city to trigger the tax-mapping.

.. image:: media/application04.png
   :align: center

This way if no fiscal position is set on the customer, Odoo will choose the fiscal position matching the
shipping address on creating an order.

.. note::
    For eCommerce orders, the tax of the visitor's cart will automatically
    update and apply the new tax after the visitor has logged in or filled
    in his shipping address.

Specific use cases
==================

If, for some fiscal positions, you want to remove a tax, instead of
replacing by another, just keep the *Tax to Apply* field empty.

.. image:: media/application03.png
   :align: center

If, for some fiscal positions, you want to replace a tax by two other
taxes, just create two lines having the same *Tax on Product*.

.. note::
  The fiscal positions are not applied on assets and deferred revenues.

.. seealso::

  * :doc:`create`
  * :doc:`taxcloud`
  * :doc:`tax_included`
  * :doc:`B2B_B2C`
