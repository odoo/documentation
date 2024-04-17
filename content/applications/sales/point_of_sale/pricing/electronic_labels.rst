=======================
Electronic shelf labels
=======================

Electronic shelf labels allow you to display product information like prices and barcodes on store
shelves and to synchronize them remotely from the backend. This removes the need to print new labels
when product information changes.

.. image:: electronic_labels/electronic-label.png
   :alt: electronic label from Pricer

.. note::
   Odoo uses electronic labels from `Pricer <https://www.pricer.com/>`_.

Configuration
=============

Pricer setup
------------

#. `Get in touch with Pricer <https://www.pricer.com/contact>`_ to create and configure your Pricer
   account.
#. Create your stores: one pricer store equates to one physical store.
#. Link as many transceivers as needed to the Pricer store(s).
#. Create the following variables to share product information between your Odoo database system and
   Pricer. These variables act like placeholders on the label template.

   - `itemId`: this holds the unique internal identifier assigned to each product
   - `itemName`: the actual name of the product
   - `price`: the selling price of the product, including any applicable taxes
   - `presentation`: the template name used in Pricer for displaying the product information on the
     label
   - `currency`: the currency of your company (e.g., USD, EUR)
   - `barcode`: the barcode number associated with each product

   .. important::
      The names for these variables must be **identical** in your Pricer database.

#. Create a template named `NORMAL`. This template is used to display information on your digital
   tags.

Once your account, stores, variables, and template are configured on Pricer, you can proceed with
the setup of your Odoo database.

.. important::
   The account associated with your Pricer store must have access to send API requests to Pricer.

Odoo setup
----------

As a pre-requisite, :ref:`activate <general/install>` the :guilabel:`POS Pricer` module *(technical
name: pos_pricer)* to have all the required features to use Pricer electronic tags.

.. image:: electronic_labels/pricer-module.png
   :alt: Installing POS Pricer module from Apps

Once the module is activated, configure your :ref:`pricer stores <pricer_tags/stores>` and associate
:ref:`Pricer tags <pricer_tags/tags>` with your products.

.. _pricer_tags/stores:

Pricer stores
~~~~~~~~~~~~~

Similarly to the configuration in Pricer, you need to create one pricer store per physical location.
To do so, go to :menuselection:`Point of Sale --> Configuration --> Pricer Stores`, click
:guilabel:`New`, and fill in the line with the required information:

- :guilabel:`Store Name`: you can put any name of your liking.
- :guilabel:`Pricer Tenant Name`: the name of your company account in Pricer, usually followed by
  `-country_code`. This value is provided by Pricer.
- :guilabel:`Pricer Login`: the login of your Pricer account.
- :guilabel:`Pricer Password`: the password of your Pricer account.
- :guilabel:`Pricer Store ID`: the ID of the related Pricer store as defined on your Pricer
  database.

.. image:: electronic_labels/pricer-stores-setup.png
   :alt: Configuring a Pricer Store

.. note::
   - The :guilabel:`Pricer Tags` column is updated automatically when a label is linked to a
     product.
   - The :guilabel:`Last Update` and :guilabel:`Last Update Status` columns are updated
     automatically when the tags are updated.

.. _pricer_tags/tags:

Pricer tags
~~~~~~~~~~~

For a label to display specific product information, the label needs to be associated with the
product. To do so:

#. Open the product form by going to :menuselection:`Point of Sale --> Products --> Products` and
   clicking :guilabel:`New` or selecting an existing product.

   .. note::
      If you are creating a new product, configure and save it before associating any Pricer tags.

#. Go to the :guilabel:`Sales` tab, scroll to the :guilabel:`Pricer` section, and select the
   corresponding :guilabel:`Pricer Store`.

   .. image:: electronic_labels/pricer-product.png
      :alt: Linking Pricer tags to products
      :scale: 75%

#. Fill in the :guilabel:`Pricer tags ids` field by copying the label's ID from the label itself or
   scanning its barcode.

   .. note::
      Pricer tag IDs are composed of a letter followed by 16 digits.

.. tip::
   - We recommended using a barcode scanner to speed up the encoding process.
   - When setting up Pricer with Odoo for the first time, it is recommended that you configure only
     one product first. Before configuring more products, ensure you can display their information
     on a Pricer tag.

Now that you have a product associated with a Pricer tag, we can send its information to Pricer.

Practical application
---------------------

Odoo automatically sends requests to Pricer to synchronize the tags every 12 hours if you make any
modifications to:

   - Product name, price, barcode, or customer taxes
   - Currency
   - Associated Pricer store or Pricer tags

To force the update, activate the :ref:`developer mode <developer-mode>`. Then:

#. Go to :menuselection:`Point of Sale --> Configuration --> Pricer Store`.
#. Select the desired store(s).
#. Click :guilabel:`Update tags` to update all tags affected by changes to:

   - Product name, price, barcode, or customer taxes
   - Currency
   - Associated Pricer store or Pricer tags

Alternatively, click :guilabel:`Update all tags` to force the update of every tag, regardless of
whether changes were made.

.. image:: electronic_labels/update-all.png
   :alt: Update all Pricer tags

If Pricer has processed and accepted the request, the status field shows :guilabel:`Update
successfully sent to Pricer`. If there is any issue, the system displays an error message.

.. warning::
   If a request sent to Pricer fails, Odoo still considers that the product has been updated. In
   that case, we recommend forcing the update of all tags.
