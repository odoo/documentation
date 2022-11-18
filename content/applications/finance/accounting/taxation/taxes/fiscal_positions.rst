==========================================
Fiscal positions (tax and account mapping)
==========================================

Default taxes and accounts are set on products and customers to create new transactions on the fly.
However, you might have to use different taxes and record the transactions on different accounts,
according to your customers' and providers' localizations and business types.

**Fiscal Positions** allow you to create *sets of rules* to automatically adapt the taxes and the
accounts used for a transaction.

.. image:: fiscal_positions/fiscal-positions-intra-community.png
   :align: center
   :alt: Example: Belgian to Intra-Community tax mapping with Fiscal Positions in Odoo Accounting

They can be applied in various ways:

- :ref:`automatically applied, based on some rules <fiscal_positions/automatic>`
- :ref:`manually applied on a transaction <fiscal_positions/partner>`
- :ref:`assigned to a partner, on its contact form <fiscal_positions/transaction>`

.. note::
   A few Fiscal Positions are already preconfigured on your database, as part of your :doc:`Fiscal
   Localization Package <../../fiscal_localizations/overview/fiscal_localization_packages>`.

Configuration
=============

Tax and Account Mapping
-----------------------

To edit or create a Fiscal Position, go to :menuselection:`Accounting --> Configuration --> Fiscal
Positions`, and open the entry you want to modify or click on *Create*.

The mapping of taxes and accounts is based on the default taxes and accounts defined in the
products' forms.

- To map to another tax or account, fill out the right column (**Tax to Apply**/**Account to Use
  Instead**).
- To remove a tax, rather than replacing it with another, leave the field **Tax to Apply** empty.
- To replace a tax with multiple other taxes, add multiple lines with the same **Tax on Product**.

.. note::
   The mapping only works with *active* taxes. Therefore, make sure they are active by going to
   :menuselection:`Accounting --> Configuration --> Taxes`.

.. _fiscal_positions/automatic:

Automatic application
---------------------

You can configure your Fiscal Positions to be applied automatically, following a set of conditions.

To do so, open the Fiscal Position you want to modify and click on **Detect Automatically**. You can
configure a few conditions:

- **VAT Required**: The VAT number *must* be indicated in the customer's contact form.
- **Country Group** / **Country**: The Fiscal Position is applied to these countries.

.. image:: fiscal_positions/fiscal-positions-automatic.png
   :align: center
   :alt: Example of settings to apply a Fiscal Position automatically

.. note::
   Taxes on **eCommerce orders** are automatically updated once the visitor has logged in or filled
   out their billing details.

.. important::
   The Fiscal Positions' **sequence** - the order in which they are arranged - defines which
   Fiscal Position to apply if the conditions are met in multiple Fiscal Positions.

   For example, if the first Fiscal Position targets *country A*, and the second Fiscal Position
   targets a *Country Group* that also comprises *country A*, only the first Fiscal Position will be
   applied to customers from *country A*.

.. _fiscal_positions/application:

Application
===========

.. _fiscal_positions/partner:

Assign a Fiscal Position to a partner
--------------------------------------

You can manually define which Fiscal Position must be used by default for a specific partner.

To do so, open the partner's contact form, go to the **Sales & Purchase** tab, edit the **Fiscal
Position** field, and click on *Save*.

.. image:: fiscal_positions/fiscal-positions-partner.png
   :align: center
   :alt: Selection of a Fiscal Position on a Sales Order / Invoice / Bill in Odoo Accounting

.. _fiscal_positions/transaction:

Choose Fiscal Positions manually on Sales Orders, Invoices, and Bills
---------------------------------------------------------------------

To manually select which Fiscal Position to use for a new Sales Order, Invoice, or Bill, go to the
**Other Info** tab and select the right **Fiscal Position** *before* adding product lines.

.. image:: fiscal_positions/fiscal-positions-transaction.png
   :align: center
   :alt: Selection of a Fiscal Position on a Sales Order / Invoice / Bill in Odoo Accounting

.. seealso::

  * :doc:`taxes`
  * :doc:`taxcloud`
  * :doc:`B2B_B2C`
