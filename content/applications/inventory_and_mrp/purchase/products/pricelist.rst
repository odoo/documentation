=======================
Import vendor pricelist
=======================

.. |RfQ| replace:: :abbr:`RfQ (Request for Quotation)`
.. |PO| replace:: :abbr:`PO (Purchase Order)`

In the **Purchase** app, users can add vendor pricelists to products to automatically populate
requests for quotation (RfQs) or purchase orders (POs) with their unit price, quantity, and lead
time.

Vendor pricelists can be :ref:`added individually <purchase/products/pricelist>` on the product
form, or :ref:`imported in bulk <purchase/products/import-pricelist>`, via an XLSX or CSV file.

.. important::
   Please review this :doc:`import guide <../../../essentials/export_import_data>` before uploading
   vendor pricelists.

.. _purchase/products/pricelist:

On product form
===============

To manually add the vendor price on the product form, go to the :menuselection:`Purchase app -->
Products --> Products`, and click the desired product.

.. tip::
   Product forms are accessible from multiple apps, such as **Sales**, **Inventory**, and
   **Manufacturing**.

In the *Purchase* tab of the product form, enter the :guilabel:`Vendor`, :guilabel:`Unit Price`, and
:guilabel:`Quantity` of the product to auto-populate this information on an |RfQ|.

.. note::
   Confirming a |PO| does **not** automatically create a vendor pricelist line. When a vendor has no
   pricelist for the product, the |RfQ| uses the price, discount, and lead time from that vendor's
   most recently confirmed |PO| line.

.. image:: pricelist/product-form-pricelist.png
   :alt: Vendor pricelist on product form.

.. tip::
   To compare the last prices each vendor charged, click the :icon:`fa-credit-card`
   :guilabel:`(Purchased)` smart button on the product form, or :icon:`fa-dollar` :guilabel:`Price
   Comparison` smart button on a |PO| (if applicable). Records are grouped by product, then by
   vendor.

.. seealso::
   :ref:`Vendor pricelist on product form <purchase/manage_deals/vendor-pricelist>`

.. _purchase/products/import-pricelist:

Import vendor pricelist
=======================

To import vendor pricelists, ensure the XLSX or CSV file is accurately completed. The best way to
obtain a correctly formatted template, including product names, references, and vendor details, is
to first :ref:`export a pricelist <purchase/products/export-price>` from the database.

Modify the exported file as needed, then import it back into the Odoo database.

.. _purchase/products/export-price:

Export pricelist
----------------

To export a pricelist, go to :menuselection:`Purchase app --> Configuration --> Vendor Pricelists`.

On the page, select the checkboxes for the desired vendor pricelists. Then, click the :icon:`fa-cog`
:guilabel:`Actions` button that appears, and choose :icon:`fa-upload` :guilabel:`Export` from the
drop-down menu.

In the resulting pop-up window, fields from the *Fields to export* section are included in the
exported file. To add more fields, find the desired field in the *Available fields* section, and
click the :icon:`fa-plus` :guilabel:`(plus)` icon next to the field.

.. note::
   Toggle the :icon:`fa-toggle-on` :guilabel:`Updatable fields only` option to filter the *Available
   fields* to modifiable fields only. Refer to the section on the :ref:`External ID
   <purchase/products/external-id>` field.

   For details on commonly-used fields for importing vendor pricelists, see the :ref:`Common fields
   <purchase/products/common-fields>` section.

Select the desired export :guilabel:`Format`: :guilabel:`Excel Workbook (.xlsx)` or :guilabel:`Plain
Text (csv)`.

Finally, click :guilabel:`Export`.

.. tip::
   To save the current list of *Fields to export* as a template, click the :icon:`oi-cloud-upload`
   :guilabel:`(Save as export template)`. In the resulting text field, set the template name, then
   click :icon:`fa-check` :guilabel:`(save)` to save or :icon:`fa-xmark` :guilabel:`(cancel)` to
   cancel.

.. note::
   With :ref:`developer mode <developer-mode>` turned on, the column names of the exported file
   display the *field name* with the *technical name* in parenthesis.

.. example::
   .. figure:: pricelist/export-data.png
      :alt: Exporting vendor pricelist.

      Export vendor pricelist in XLSX format. It includes :guilabel:`Product Template` and other
      fields in the :guilabel:`Fields to export` section.

.. _purchase/products/external-id:

External ID
~~~~~~~~~~~

An *External ID* is a unique identifier used to update existing vendor pricelists. Without it,
imported records create new entries instead of updating existing ones. Including this field in the
XLSX or CSV indicates the line replaces an existing vendor pricelist in the Odoo database.

With the :icon:`fa-toggle-on` :guilabel:`Updatable fields only` option toggled, select the
:guilabel:`External ID` field from the list of *Available fields*. Exporting the data creates a file
with an additional column containing the external ID.

.. example::
   .. figure:: pricelist/duplicate-values.png
      :alt: Show 'Ready Mat' appear twice.

      `Ready Mat` appears twice because the external ID was omitted during the price update from
      `$790` to `$780`.

.. _purchase/products/common-fields:

Common fields
~~~~~~~~~~~~~

Below is a list of commonly-used fields when importing vendor pricelists:

.. list-table:: Field name definitions
   :header-rows: 1

   * - Field name
     - Used for
     - Field in Odoo database
     - Technical name of field
   * - Vendor
     - The only required field for creating a vendor pricelist record. This field specifies the
       vendor associated with the product.
     - :guilabel:`Vendor` field in the :ref:`vendor pricelist of the product form
       <purchase/products/pricelist>`.
     - `partner_id`
   * - Product Template
     - The Odoo product the vendor pricelist entry is related to.
     - :guilabel:`Product` field in the vendor pricelist.
     - `product_tmpl_id`
   * - Quantity
     - The minimum quantity required to receive the product at the specified price.
     - :guilabel:`Quantity` field in the vendor pricelist. (If not visible, enable it by clicking
       the :icon:`oi-settings-adjust` :guilabel:`(adjust)` icon, and tick the :guilabel:`Quantity`
       checkbox)
     - `min_qty`
   * - Unit Price
     - The purchase price for the product from the vendor.
     - :guilabel:`Price` field in the vendor pricelist.
     - `price`
   * - Lead Time
     - :ref:`Number of days <inventory/warehouses_storage/purchase-vendor-lt>` before receiving the
       product after confirming a purchase order.
     - :guilabel:`Lead Time` field on the vendor pricelist.
     - `delay`
   * - Sequence
     - Defines the order of vendors in the pricelist when multiple vendors are available. For
       example, if `Azure Interior` is listed first and Wood Corner second, their sequences would be
       `1` and `2`.
     - N/A
     - `sequence`
   * - Company
     - Name of company the product belongs to.
     - :guilabel:`Company` field in the vendor pricelist.
     - `company_id`
   * - :ref:`External ID <purchase/products/external-id>`
     - Unique ID of a record used to update existing vendor pricelists.
     - N/A
     - `id`

Import records
--------------

With a template downloaded, fill out the XLSX or CSV file with the necessary information. After
inputting everything, import the file back into the Odoo database, by going to
:menuselection:`Purchase app --> Configuration --> Vendor Pricelists`.

On the page, click the :icon:`fa-cog` :guilabel:`(Actions)` icon, then select :icon:`fa-download`
:guilabel:`Import`.

On the page, click :guilabel:`Upload`, and select the XLSX or CSV file. Verify the :guilabel:`File
Column` and :guilabel:`Odoo Field` fields are correct, then click :guilabel:`Import`.

.. image:: pricelist/supplier-pricelist-example.png
   :alt: File mapping screen.

.. seealso::
   - :doc:`../../../essentials/export_import_data`
   - :ref:`Common fields <purchase/products/common-fields>`

Formatting import file
~~~~~~~~~~~~~~~~~~~~~~

To understand how to format import files for vendor pricelists, consider the following example.

- `Storage Box` (:guilabel:`Reference`: `E-COM08`) is sold by `Wood Corner` for `$10`.
- `Large Desk` (:guilabel:`Reference`: `E-COM09`) has no records in the vendor pricelist.

An import file is created to do the following:

- Update the price for `Wood Corner` from `$10` to `$13`.
- Add pricelist for `Storage Box`: the vendor, `Ready Mat` intends to sell the product for `$14`.
- Add pricelist for `Large Desk`: vendor is `Wood Corner`, price is `$1299`.
- Add pricelist for `Large Desk`: vendor is `Azure Interior`, price is `$1399`.

.. list-table:: Vendor pricelist data
   :header-rows: 1

   * - id
     - company_id
     - delay
     - price
     - product_tmpl_id
     - sequence
     - partner_id
   * - product.product_supplierinfo_3
     - My Company (San Francisco)
     - 3
     - 13.00
     - [E-COM08] Storage Box
     - 4
     - Wood Corner
   * -
     - My Company (San Francisco)
     - 3
     - 14.00
     - [E-COM08] Storage Box
     - 5
     - Ready Mat
   * -
     - My Company (San Francisco)
     - 2
     - 1299.00
     - [E-COM09] Large Desk
     - 6
     - Wood Corner
   * -
     - My Company (San Francisco)
     - 4
     - 1399.00
     - [E-COM09] Large Desk
     - 7
     - Azure Interior

.. note::
   Download the sample files for reference:

   - :download:`Sample XLSX import file <pricelist/pricelist-example.xlsx>`
   - :download:`Sample CSV import file <pricelist/pricelist-example.csv>`

