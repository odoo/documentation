=============
Default taxes
=============

**Default Taxes** define which :doc:`taxes <taxes>` are automatically selected when there is no
other indication about which tax to use. For example, Odoo prefills the **Taxes** field with the
Default Taxes when you create a new product or add a new line on an invoice.

.. image:: default_taxes/default-taxes-invoice-line.png
   :align: center
   :alt: Odoo fills out the Tax field automatically according to the Default Taxes

.. important::
   :doc:`Fiscal Positions <fiscal_positions>` take the Default Tax into account. Therefore, if a
   Fiscal Position is applied to an invoice, Odoo applies the related tax instead of the Default
   Taxes, as mapped in the Fiscal Position.

Configuration
=============

**Default Taxes** are automatically set up according to the country selected at the creation of your
database, or when you set up a :doc:`Fiscal Localization Package
<../../fiscal_localizations/overview/fiscal_localization_packages>` for your company.

To change your **Default Taxes**, go to :menuselection:`Accounting --> Configuration --> Settings
--> Taxes --> Default Taxes`, select the appropriate taxes for your default **Sales Tax** and
**Purchase Tax**, and click on *Save*.

.. image:: default_taxes/default-taxes-configuration.png
   :align: center
   :alt: Define which taxes to use by default on Odoo

.. note::
   Databases with multiple companies: the Default Taxes values are company-specific.

.. seealso::

  - :doc:`taxes`
  - :doc:`fiscal_positions`
  - :doc:`../../fiscal_localizations/overview/fiscal_localization_packages`