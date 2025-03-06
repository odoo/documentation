================
Apps and modules
================

:ref:`Install <general/install>`, :ref:`upgrade <general/upgrade>` and :ref:`uninstall
<general/uninstall>` any needed apps and modules from the :menuselection:`Apps` dashboard.

By default, an :guilabel:`Apps` filter is applied. To search for modules too, select
:guilabel:`Extra` from the :icon:`fa-filter` :guilabel:`Filters`.

.. image:: apps_modules/apps-search-filter.png
   :alt: Add "Extra" filter in Odoo Apps.

.. warning::
   Adding or removing apps can significantly affect other apps in the database and modify
   subscription costs. Consider carefully or test the changes in a staging environment before
   proceeding.

   - **Administrators manage the database**: The administrator of the database is responsible for
     its usage, as they know best how their organization works.
   - **Odoo apps can have dependencies**: Installing some apps and features with dependencies may
     also install additional apps and modules that are technically required, even if database users
     do not actively use them.
   - **Duplicate the database to test apps**: Testing on a duplicate database reveals what app
     dependencies may be required or what database may be erased. Learn how to duplicate an
     :doc:`Odoo Online database <../../administration/odoo_online>` or an :doc:`Odoo On-premise
     database <../../administration/on_premise>`.

.. _general/install:

Install apps and modules
========================

From the main Odoo dashboard, open the :menuselection:`Apps` app, then click on the search bar to
find the app to be installed or scroll to find it. From here, click :guilabel:`Activate` on the
app's card.

.. note::
   If the app or module to be installed is not listed, update the app list by activating
   :ref:`developer mode <developer-mode>`, and then go to :menuselection:`Apps --> Update Apps
   List`, and then click :guilabel:`Update`.

.. _general/upgrade:

Upgrade apps and modules
========================

With each :doc:`new Odoo release </administration/supported_versions>`, new improvements or app
features are added. Upgrade the app to use these new improvements and features.

Go to :menuselection:`Apps` and then on the app to upgrade, click the :icon:`fa-ellipsis-v`
:guilabel:`(vertical ellipsis)` icon and select :guilabel:`Upgrade`.

.. _general/uninstall:

Uninstall apps and modules
==========================

.. danger::
   Uninstalling apps also deletes their database records. Test uninstalling apps on a duplicated
   database before removing apps on a production database.

.. note::
   Some apps have dependencies, meaning that one app requires another. Therefore, uninstalling one
   app may uninstall multiple apps and modules.

Go to :menuselection:`Apps` and then on the app to uninstall, click the :icon:`fa-ellipsis-v`
:guilabel:`(vertical ellipsis)` icon and select :guilabel:`Uninstall` to open the
:guilabel:`Uninstall module` pop-up window.

The :guilabel:`Apps to Uninstall` section lists the applications to be uninstalled.

.. tip::
   Select the :guilabel:`Show All` checkbox to display all module dependencies.

The :guilabel:`Documents to Delete` section lists the database records to be deleted.

To proceed with uninstalling the app, its dependencies, and all related database records, click
:guilabel:`Uninstall`.

.. image:: apps_modules/uninstall.png
   :alt: An app's card with the "Uninstall" menu option highlighted.

.. example::
   The **Restaurant** app requires the **Point of Sale** app to function, so uninstalling the
   **Point of Sale** app will also uninstall the **Restaurant** app, and any related records.

   .. image:: apps_modules/uninstall-deps.png
      :alt: A warning message showing apps that are uninstalled if the uninstallation is completed.
