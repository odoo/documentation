===============================
APAC food delivery integrations
===============================

Point of Sale provides integrations with popular APAC food delivery platforms, allowing for
synchronizing orders, updating menus, managing store details directly from the :guilabel:`POS`.

Supported providers:

- GoFood
- GrabFood

.. important::
   A valid account with each delivery provider is required before proceeding.

GoFood
======

The GoFood integration allows businesses in Indonesia (primary market) and Vietnam to efficiently
manage food delivery orders directly from the Odoo POS.

To use this feature, the following module must be installed:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Platform Order Provider: GoFood`
     - `pos_platform_order_gofood`
     - This module integrates with GoFood to receive and manage orders.

Configuration
-------------

GoBiz Developer Portal
~~~~~~~~~~~~~~~~~~~~~~

Start by creating a GoFood account on the GoFood website. Next, navigate to the
`GoBiz Developer Portal <https://developer.gobiz.com/home/auth>`_ to retrieve the necessary API
credentials used to authenticate and synchronize data between Odoo and GoFood:

- App ID
- Secret
- Partner ID
- Relay Secret
- Outlet ID

Odoo setup
~~~~~~~~~~

#. Navigate to :menuselection:`Point of Sale --> Configuration --> Providers`.
#. Select :guilabel:`GoFood` and change the state to :guilabel:`Enabled`.
#. Navigate to the :guilabel:`Credentials` tab and enter the :guilabel:`App ID`,
   :guilabel:`Secret Key`, :guilabel:`Partner ID`, and :guilabel:`Relay Secret Key` retrieved.

.. note::
   To test the integration before formal setup, change the state to :guilabel:`Test`.

Configure the entities
~~~~~~~~~~~~~~~~~~~~~~

#. Click the :guilabel:`Entities` smart button, then click :guilabel:`New` to create a GoFood
   :guilabel:`Store`.
#. Fill in the :guilabel:`Name` field and verify the :guilabel:`Provider` field is set to
   :guilabel:`GoFood`.
#. Enter the :guilabel:`External ID` (this is the Outlet ID retrieved from GoFood).
#. Select the related :guilabel:`Point of Sale` and the :guilabel:`Service Hours`.
#. Under the :guilabel:`Accounting` tab, choose the :guilabel:`Payment Method` and select the
   appropriate :guilabel:`Pricelist`.
#. Under the :guilabel:`General` tab, select the :guilabel:`Available Product Categories`
   applicable to the GoFood platform.

.. important::
   Ensure the currency of the selected pricelist matches the company’s country and fiscal
   localization settings.

Synchronize the menu
~~~~~~~~~~~~~~~~~~~~

#. Once the configuration is complete, click :guilabel:`Sync Menu`.
#. After a while, navigate to :menuselection:`Point of Sale --> Configuration --> Stores`.
#. Click the GoFood entity and verify the status displays as :guilabel:`Done`, indicating a
   successful synchronization.

.. note::
   To verify the integration, place sample orders through GoFood and ensure they appear in the
   :guilabel:`Odoo POS orders` list.

.. important::
   Any changes made to product configurations require manually clicking :guilabel:`Sync Menu` to
   push the updated products and prices to GoFood.