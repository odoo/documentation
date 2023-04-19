:show-content:

================
General features
================

**Point of Sale** is a fully integrated application that allows you to sell products (online or
offline) with any device. It also automatically registers product moves in your stock, gives you
real-time statistics, and consolidations across all shops.

Configuration
=============

.. _general/settings:

Access POS settings
-------------------

To access the general POS settings, go to :menuselection:`Point of Sale --> Configuration -->
Settings`. Then, open the dropdown menu in the :guilabel:`Point of Sale` field and select the POS to
configure.

.. image:: general/select-pos-dropdown.png
   :align: center
   :alt: dropdown menu to select the POS in the app settings

.. note::
   These settings are available to users with settings rights in administration (go to
   :menuselection:`Settings --> Manage Users`, select the user, scroll down to the
   :guilabel:`Administration` section, and set :guilabel:`Settings` in the
   :guilabel:`Administration` field.)

.. seealso::
   - :doc:`shop`
   - :doc:`restaurant`

You can also set up a POS from the dashboard by clicking the vertical ellipsis button
(:guilabel:`⋮`) on a POS card. Doing so opens a popup window, from which you can:

- :doc:`Enable multiple employees to log in. <shop/multicashiers>`
- :doc:`Connect and set up an IoT box. <../../productivity/iot/config/pos>`
- :doc:`Connect and set up an ePOS printer. <general/epos_ssc>`

.. image:: general/toggle-settings.png
   :align: center
   :alt: popup window to access quick settings in POS

.. note::
   These settings are available to any user with administrator rights in Point of Sale (go to
   :menuselection:`Settings --> Manage Users`, select the user, scroll down to the :guilabel:`Sales`
   section, and set :guilabel:`Administrator` in the :guilabel:`Point of Sale` field.)

Make products available
-----------------------

To make products available for sale, go to :menuselection:`Point of Sale --> Products --> Products`,
and select a product to open the product form. In the :guilabel:`Sales` tab, enable
:guilabel:`Available in POS`.

.. image:: general/pos-available.png
   :align: center
   :alt: Making a product available in your POS.

View statistics
===============

To access your statistics, go to :menuselection:`Point of Sale --> Reporting --> Orders`. Or, from
the **POS dashboard**, click the vertical ellipsis (:guilabel:`⋮`) button, :guilabel:`Reporting`,
and :guilabel:`Orders`.

These statistics are available in a graph or pivot view that you can filter or group depending on
your needs.

.. toctree::
   :titlesonly:

   general/sessions
   general/customer_note
   general/register
   general/https
   general/epos_ssc
