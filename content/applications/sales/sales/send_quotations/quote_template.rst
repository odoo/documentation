===================
Quotation templates
===================

Using quotation templates speeds up the creation of sales orders by filling in most quotation fields
automatically.

Configuration
=============

Go to :menuselection:`Sales --> Configuration --> Settings` and enable :guilabel:`Quotation
Templates`.

Create a template
=================

Go to :menuselection:`Sales --> Configuration --> Quotations Templates` and click :guilabel:`New`.

.. note::
   Apart from the name, all template fields are optional.

After having named the template, choose default values for the following fields:

- :guilabel:`Quotation expires after`: choose the number of days for which the quotation is valid.
- :guilabel:`Online confirmation`: after sending the quotation by email, it is possible to ask the
  customer to confirm it online on their customer portal:

  - by providing a :guilabel:`Signature`,
  - by making a :guilabel:`Payment`,
  - or both.

- :guilabel:`Confirmation Mail`: select an email template to automatically send an email to the
  customer upon confirming the quotation.

On the :guilabel:`Lines` tab, add the default products and their quantity. Add :doc:`optional
products <optional_products>` in the :guilabel:`Optional Products` tab.

Finally, add any specific sales terms and conditions on the :guilabel:`Terms & Conditions` tab.

.. tip::
   If the terms and conditions are standard across all quotations, :doc:`set them globally in the
   Accounting/Invoicing settings
   </applications/finance/accounting/customer_invoices/terms_conditions>` instead.

Design a template
=================

Customize the appearance of quotations on the customer portal by going to :menuselection:`Sales -->
Configuration --> Settings` and enabling the :guilabel:`Quotation Builder` feature.

.. note::
   If necessary, Odoo automatically activates the :doc:`Website </applications/websites/website>`
   app when enabling this feature.

Select a template by going to :menuselection:`Sales --> Configuration --> Quotations Templates` and
clicking on a template. Then click the :guilabel:`Design Template` button. On the website builder,
click :guilabel:`Edit`. Drag and drop the building blocks, edit the content, and :guilabel:`Save`.

.. image:: quote_template/quotation-builder.png
   :alt: Using the quotation builder

Use a template
==============

When creating a quotation, choose a template under the :guilabel:`Quotation Template` field. All the
fields are then filled accordingly. Manually edit any pre-filled field if needed.

.. tip::
   Go to :menuselection:`Sales --> Configuration --> Settings` to select a :guilabel:`Default
   Template`.
