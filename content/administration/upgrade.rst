:nosearch:
:show-toc:

=======
Upgrade
=======

Introduction to upgrades
------------------------

In Odoo, an upgrade is the process of moving your database from an older version of Odoo to a newer version. Each new version of Odoo comes with new features, bug fixes, security patches, and improvements **which is why uprading frequently is important**

Here are a few examples of supported upgrades:

* Odoo 13 to Odoo 16
* Odoo 14 to Odoo 16
* Odoo 15.3 to Odoo 16

Upgrading to an :doc:`unsupported version </administration/maintain/supported_versions>` is not possible.

.. note::
    An upgrade does not cover : 

   * Downgrading to a previous version of Odoo (i.e., Odoo 15 to Odoo 12)
   * Changing :ref:`editions <upgrade-faq/editions-change>` (i.e., Community to Enterprise edition)
   * Switching :ref:`hosting type <upgrade-faq/hosting-types-switch>` (i.e., On-Premise to Odoo Online or Odoo.sh)
   * Migration from another ERP to Odoo

TODOUPG : put link to developer docs for upgrading module
.. important::
    If your database contain any custom module, :ref:`their source code has to be upgraded <TODOUPG>` to the new version of Odoo before going through with the upgrade.

In case of issues with the upgrade, you can contact the :ref:`support team <https://www.odoo.com/help>` for assistance.


.. _upgrade/request-test-database:

Requesting an upgraded test database
------------------------------------

The `Upgrade website <https://upgrade.odoo.com/>`_ is the main platform for requesting an upgraded database but depending on your hosting, you are be able to upgrade your database from the command line, from `<https://odoo.com/my/databases>`_, or from your `Odoo SH project <https//odoo.sh/project>`_.

.. note::
    You can always request a new upgraded test database in case you want to test the upgrade again or if you want to test the upgrade to a different version of Odoo.

.. tabs::

    .. group-tab:: Odoo Online

        Odoo databases can be manually upgraded directly from the main Odoo website. To upgrade an Odoo database, navigate to the `database manager <https://www.odoo.com/my/databases>`_ page and sign in.

        The database manager page displays all of the Odoo databases associated with the user's account. Any databases that are not already on the most recent version of Odoo display an **arrow in a circle** icon next to the database name, indicating that the database can be upgraded.

        .. image:: /administration/upgrade/odoo_online/databases-page.png
            :align: center
            :alt: The database manager page with an upgrade button next to the name of a database.

        
        Clicking on the **arrow in a circle** icon to display the following pop-up 

        .. image:: /administration/upgrade/odoo_online/upgrade-pop-up.png
            :align: center
            :alt: The "Upgrade your database" pop-up.

        There are a few things to be filled on this pop-up :

        - The version of Odoo you want to upgrade to (see :ref:`upgrade/which_version`)
        - The email to receive the link to the upgraded database
        - The purpose of the upgrade, which must be set to "Test"

        Once submitted, a new database will be added to the database manager page in the selected version. It might take some time before the database is ready to be used, at which point an email will be sent to the email address provided in the pop-up.

    .. group-tab:: Odoo SH

        Odoo SH is integrated with the upgrade platform to make the upgrade process easier.

        .. note::
            The :guilabel:`Upgrade` tab is available in the branches view. It is only available for valid projects with a valid production build.

        .. image:: /administration/upgrade/odoo_sh/odoo-sh-staging.png
            :align: center
            :alt: Click on the upgrade menu

        .. important::
            Most users of Odoo SH have custom modules installed on their database. In those situations, the source code of those modules must be up-to-date with the target version of Odoo before the upgrade can be performed. See :ref:`TODOUPG upgrade your customizations` for more information.


    .. group-tab:: On-Premise
        
        The standard upgrade process can be initiated via the following command line on the machine where the database is hosted:
        `python <(curl -s https://upgrade.odoo.com/upgrade) test -d <your db name> -t <target version>`

        The following command can be used to show the general help and the main commands:
        `python <(curl -s https://upgrade.odoo.com/upgrade) --help`

        An upgraded test database can also be requested via the `Upgrade website <https://upgrade.odoo.com/>`_.



.. _upgrade/test_your_db:

Testing the new version of your database
----------------------------------------

Once in possession of an upgraded test database, it is important to spend some time testing it to ensure that, once the upgrade goes live, you are not stuck in your day-to-day activities by a change in views, behavior, or an error message.

Test databases are neutered and some features are disabled to prevent them from having an impact on the production database:

#. Scheduled actions are disabled.
#. Outgoing mail servers are disabled by archiving the existing ones and adding a fake one.
#. Payment providers and delivery carriers are reset to test environment.


.. admonition:: A few things you should check

    - Are there views that are deactivated in your test database but active in your production database ?
    - Are your usual views still displayed correctly ?
    - Are your reports (Invoice, Sales Order, etc.) correctly generated ?
    - Are your website pages working correctly ?
    - Are you able to create and modify records ? (Sales order, invoices, purchases, users, contacts, companies, etc ... ) 

It is strongly receommend to test as many of your business flows as possible to ensure that they are working properly and to get more familiar with the new version of Odoo.

.. spoiler:: Examples of end-to-end testing

    - Check a random product in your product catalog and compare its test and production data (product category, selling price, cost price, is the vendor set? Are the same accounts set ? Are the same Routes set?);
    - Buy this product (only available with Purchase App);
    - Confirm the reception of this product (only available with Inventory App);
    - Check if the route to receipt this product applies the same set in your production database (only available with Inventory App);
    - Sell this product (only available with Sales App) to a random customer;
    - Open your customer database (Contact App), select a random customer (or company) and double-check its data;
    - Ship this product (only available with Inventory App);
    - Check if the route to ship this product applies the same set in your production database (only available with Inventory App);
    - Validate a customer invoice (only available with Invoicing and/or Accounting Apps);
    - Credit the invoice (issue a credit note) and check if its behaves as your production database;
    - Check your Reports results (only available with Accounting Apps);
    - Randomly check your taxes, currencies, Bank Account. Is your fiscal year set in production database the same? (only available with Accounting Apps);
    - Proceed to an online order (only available with Website Apps) from the product selection in your shop until the checkout process and check if its behaves as your production database.

    Depending on the complexity of your database, you also shouldn't forget to test : 

    - Integrations with external softwares (EDI, APIs, ...)
    - Workflows between different Apps (online sales with eCommerce, converting a lead all the way to a sales order, delivery of products, etc ... )
    - Exporting data
    - Your automated actions to make sure they work
    - Your server actions in the Action menu on form views as well as by selecting multiple records on list views

    Those are non-exhaustive lists that you can extend to your other Apps based on your use of Odoo.

In case of an issue with your test database, you can request the assistance of Odoo via the `support page <https://odoo.com/help>`_. They will be able to provide guidance on your upgrade or fix the issue. In any case, it is important to report any issue you encounter during your testing to Odoo so that they can be fixed before the upgrade of your production database.

Upgrading your production database
----------------------------------

Once you completed your :ref:`tests <upgrade/test_your_db>` and are confident that you can use your upgraded database as your main database without any issue, it is time to plan the Go-live day. During the upgrade of your production database, any modification done on it will not be saved. This is why we recommend not using your database during that time.

The Go-live day can be planned in coordination with the upgrade support analysts of Odoo reachable via the `support page <https://odoo.com/help>`_.

.. important::
    Going into production without first testing may lead to:

    - employees being lost in the changes and new features
    - business interruptions (e.g., no longer having the possibility to validate an action)
    - poor customer experiences (e.g., an eCommerce website that does not work correctly)


The process of upgrading a database to production is similar to the one of upgrading a test database except for a few things


.. tabs::

    .. group-tab:: Odoo Online

        The process is equivalent to :ref:`upgrade/request-test-database` except for the purpose option which must be set to "Production" instead of "Test".

        .. important::
            Once the upgrade is requested, the database will be unavailable until the upgrade is finished. Once the process is completed, the database will be available in the new version of Odoo and there will be no way to revert to the previous version.

    .. group-tab:: Odoo SH

        The process is equivalent to :ref:`upgrade/request-test-database` except for that the "Production" branch must be selected before clicking the "Upgrade" tab

        .. image:: /administration/upgrade/odoo_sh/odoo-sh-prod.png
            :align: center
            :alt: View from the upgrade tab

        The actual process is **triggered as soon as a new commit is added** to the branch. This allows the upgrade process to be synchronized with the change of the source code of the custom modules.

        .. important::
            The database is unavailable throughout the process. If anything goes wrong, the platform automatically reverts the upgrade, the same as it would be for a regular update. In case of success, a backup of the database before the upgrade is created and the database is made available in the new version of Odoo.

        The update of your custom modules must be successful to complete the entire upgrade process. Make sure the status of your staging upgrade is :guilabel:`successful` before trying it in production. More information on how to upgrade your custom modules can be found in :ref:`TODOUPG upgrade your customizations`.

    .. group-tab:: On-Premise
        
        The command to upgrade a database to production is similar to the one of upgrading a test database except for the argument ``test`` which must be replaced by ``production``.
        `python <(curl -s https://upgrade.odoo.com/upgrade) production -d <your db name> -t <target version>`

        An upgraded production database can also be requested via the `Upgrade website <https://upgrade.odoo.com/>`_.

        .. important::
            When requesting an upgrade database for production purposes, the copy is submitted without a filestore. Therefore, the upgraded database filestore must be merged with the production filestore before deploying the new version.

In case of an issue with your production database, you can request the assistance of Odoo via the `support page <https://odoo.com/help>`_.

.. seealso::
    :doc:`/upgrade/sla`

Comparing customizations to the new version
-------------------------------------------
During an upgrade, it is very likely that in the plethora of new features added in the years of development between 2 versions, what was added in your database as a customization might be part of the standard of Odoo now.

Therefore, it is recommended to take the time to explore the new features of Odoo and to compare them with the current customizations implemented. This might allow you to remove some of the customizations that are now part of the standard of Odoo and to reduce the amount of work needed to maintain and upgrade your database.

FAQ
---

.. _upgrade/which_version:

Which version of Odoo should I upgrade to ?
===========================================

We always recommend upgrading to the latest version of Odoo to benefit from the latest features, improvements, and security fixes.

