:show-toc:
:show-content:

=============
Configuration
=============

.. _pos/configuration/create-pos:

Create a POS
============

To create the initial POS of a database, go to :menuselection:`Point of Sale --> Dashboard` and
choose from one of the POS cards to generate a POS preconfigured to suit your business type.

To create additional POS or to create one from scratch, go to :menuselection:`Point of Sale -->
Configuration --> Point of Sales` and select :guilabel:`New`. Then, configure the :ref:`POS settings
<pos/configuration/settings>` to meet your specific business requirements.

.. important::
   Ensure each POS has a dedicated :doc:`cash payment method <../point_of_sale/payment_methods>`,
   associated with a dedicated :ref:`cash journal <accounting/journals/cash>`.

.. _pos/configuration/settings:

Access the POS settings
=======================

To access the general POS settings, go to :menuselection:`Point of Sale --> Configuration -->
Settings`. Then, open the dropdown menu in the :guilabel:`Point of Sale` field and select the POS to
configure.

.. image:: configuration/select-pos-dropdown.png
   :alt: Dropdown menu to select the POS in the app settings

To configure basic settings from the dashboard, click the :icon:`fa-ellipsis-v` (:guilabel:`vertical
ellipsis`) icon on a POS card and :guilabel:`Edit`. Doing so opens a popup window, from which to:

- :doc:`Enable multiple employees to log in. <../point_of_sale/employee_login>`
- :doc:`Connect and set up an IoT sytem. <../point_of_sale/configuration/pos_iot>`
- :doc:`Connect and set up an ePOS printer. <../point_of_sale/configuration/epos_ssc>`

Make products available
=======================

To make products available for sale,

#. Go to :menuselection:`Point of Sale --> Products --> Products`.
#. Select a product to open the product form.
#. Tick the :guilabel:`Point of Sale` checkbox at the top of the form.

POS product categories
======================

POS product categories provide a means to **organize products** and ensure a structured POS
register.

Configuration
-------------

To **manage POS categories**, follow these steps:

#. Navigate to :menuselection:`Point of Sale --> Configuration --> PoS Product Categories`.
#. Create a :guilabel:`New` category, or click any existing category to update it.
#. **Classify and build a hierarchy** between categories: Associate a category with a parent
   category by filling in the :guilabel:`Parent Category` field. A parent category groups one or
   more child categories (eg.,: Use `Drinks` to regroup `Hot beverages` and `Soft drinks`).

Once POS product categories are created, **assign them to specific products**:

#. Go to :menuselection:`Point of Sale --> Products --> Products` and open a product form.
#. Navigate to the :guilabel:`Point of Sale` tab and fill in the :guilabel:`Category` field with one
   or multiple POS categories.

Restrict categories
-------------------

To limit the categories displayed on the POS register, navigate to the :ref:`POS settings
<pos/configuration/settings>` and choose the specific categories to display in the
:guilabel:`Restrict Categories` field within the :guilabel:`Product & PoS categories` section.

.. _pos/configuration/receipts:

Receipts
========

POS receipts display the following elements:

- The company logo
- The receipt and order number
- The customizable header and footer
- The cashier and customer names
- The complete order, discounts, prices, and used payment methods
- Optionally, a QR code or URL link for customer to generate invoices

To set up POS receipts, navigate to the :ref:`POS settings <pos/configuration/settings>` and scroll
down to the :guilabel:`Bills & Receipts` section.

- To **customize** the **header** and **footer**, activate the :guilabel:`Header & Footer` setting
  and fill in both fields with the information to be printed on the receipts.
- To **print receipts** automatically once a payment is registered, enable the :guilabel:`Automatic
  Receipt Printing` setting.
- To print receipts that don't display product prices, enable the :guilabel:`Basic Receipt` setting.
- Receipts can be sent by email by default, but also by SMS or through WhatsApp. To do so, activate
  the :guilabel:`SMS Enabled` or :guilabel:`WhatsApp Enabled` option(s).

  .. note::
     If the :guilabel:`WhatsApp Enabled` setting is not available, :ref:`install <general/install>`
     the :guilabel:`WhatsApp Messaging` module.

.. seealso::
   - :ref:`pos/restaurant/bills`
   - :doc:`../point_of_sale/configuration/epos_printers`

Reprint a receipt
-----------------

To reprint a receipt, navigate to the :ref:`POS interface <pos/open-register>`, click
:guilabel:`Orders`, open the dropdown selection menu next to the search bar, and change the default
:guilabel:`All active orders` filter to :guilabel:`Paid`. Then, select the order and click
:guilabel:`Print Receipt`.

.. tip::
   Filter the list of orders using the search bar: type in your reference and select
   :guilabel:`Receipt Number`, :guilabel:`Date`, or :guilabel:`Customer`.

Store contact details
---------------------

Customers' contact details, such as their phone number or email addresses, are stored
automatically when sending receipts by email, SMS or Whatsapp. Once stored, contact details can be
used for :doc:`marketing <../../marketing>` purposes.

To send marketing messages manually from the POS application, go to
:menuselection:`Point of Sale --> Orders --> Orders`, open a POS order form, navigate to the
:guilabel:`Contact Info` category under the :guilabel:`Extra Info` tab, then click the email icon or
whatsapp icon.

.. seealso::
   - :doc:`../../marketing/email_marketing`
   - :doc:`../../marketing/sms_marketing`
   - :doc:`../../productivity/whatsapp`

.. toctree::
   :titlesonly:

   configuration/pos_iot
   configuration/epos_printers
   configuration/https
   configuration/epos_ssc
