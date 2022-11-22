================
Apps and modules
================

You can :ref:`install <general/install>`, :ref:`upgrade <general/upgrade>` and :ref:`uninstall
<general/uninstall>` all apps and modules from the :menuselection:`Apps` dashboard.

By default, an *Apps* filter is applied. If you want to search for modules, click on
*Filters* and select *Extra*.

.. image:: apps_modules/apps-search-filter.png
   :align: center
   :alt: Add "Extra" filter in Odoo Apps

.. warning::
   Odoo is *not a smartphone*, and its apps shouldn't be installed or uninstalled carelessly. Apply
   caution when adding or removing apps and modules on your database since this may impact your
   subscription costs.

   - | **Installing or uninstalling apps and managing users is up to you.**
     | As the administrator of your database, you are responsible for its usage, as you know best
       how your organization works.
   - | **Odoo apps have dependencies.**
     | Installing some apps and features with dependencies may also install additional apps and
       modules that are technically required, even if you won't actively use them.
   - | **Test app installation/removal on a duplicate of your database.**
     | This way, you can know what app dependencies may be required or what data may be erased.

.. _general/install:

Install apps and modules
========================

Go to :menuselection:`Apps`, and click on the *Install* button of the app you want to install.

.. note::
   If the module you are looking for is not listed, you can **update the app list**.

   To do so, activate the :ref:`developer mode <developer-mode>`, then go to :menuselection:`Apps
   --> Update Apps List` and click on *Update*.

.. _general/upgrade:

Upgrade apps and modules
========================

On some occasions, new improvements or app features are added to :doc:`supported versions of Odoo
</administration/maintain/supported_versions>`. To be able to use them, you must **upgrade** your
app.

Go to :menuselection:`Apps`, click on the *dropdown menu* of the app you want to upgrade, then on
*Upgrade*.

.. _general/uninstall:

Uninstall apps and modules
==========================

Go to :menuselection:`Apps`, click on the *dropdown menu* of the app you want to uninstall, then on
*Uninstall*.

.. image:: apps_modules/uninstall.png
   :align: center

Some apps have dependencies, meaning that one app requires another. Therefore, uninstalling one app
may uninstall multiple apps and modules. Odoo warns you which dependent apps and modules are
affected by it.

.. image:: apps_modules/uninstall_deps.png
   :align: center

To complete the uninstallation, click on *Confirm*.

.. danger::
   Uninstalling an app also uninstalls all its dependencies and permanently erases their data.
