:show-toc:

=======
Upgrade
=======

An upgrade is the process of moving your database from an older version to a newer supported version (e.g., Odoo 14.0 to Odoo 16.0). Upgrading frequently is important as each version comes with new and improved features, bug fixes, and security patches.

.. _upgrade_faq/rolling_release:

.. spoiler:: Automatic upgrading : the Rolling Release process

    This feature allows Odoo Online customers to upgrade their database directly from a message prompt sent to the database administrator as soon as the new version is released. It first tests the upgrade to the next version, and if no issues are detected, the database administrator receives a message presenting two options:

    #. To :guilabel:`Upgrade Now`, which immediately triggers your live production database upgrade. This is **not** recommended.

    #. To **test the upgrade first**, which takes you to `your database manager <https://www.odoo.com/my/databases/>`_ where you can request an upgraded test database and check the upgraded test database for any discrepancies. This is strongly recommended.


    .. image:: /administration/upgrade/rr-upgrade-message.png
        :alt: The upgrade message prompt on the top right of the database, informing the database administrator that the database is ready to be upgraded. The three options are "Upgrade Now", "Upgrade Later", and "I want to test first".

    If the Rolling Release process detects an issue with the upgrade, it will be deactivated until the issue is resolved.


.. note::
    An upgrade does not cover :

   * Downgrading to a previous version of Odoo
   * Changing :ref:`editions <install/editions>` (i.e., Community to Enterprise edition)
   * Switching :doc:`hosting type </administration/maintain/hosting_changes>` (i.e., On-premise to Odoo Online or Odoo.sh)
   * Migration from another ERP to Odoo

.. warning::
    If your database contains a custom module, you must :doc:`upgrade its source code first </developer/reference/upgrade>` to the new version of Odoo before going through with the upgrade.

.. tip::
    Contact the `support team <https://www.odoo.com/help>`_ for assistance if you face any issues during an upgrade.


.. _upgrade/request-test-database:

Obtaining an upgraded test database
-----------------------------------

The `Upgrade page <https://upgrade.odoo.com/>`_ is the main platform for requesting an upgraded database. However, depending on the hosting type, you can upgrade from the command line (on-premise), the `Odoo Online database manager <https://odoo.com/my/databases>`_, or your `Odoo.sh project <https//odoo.sh/project>`_.

.. note::
    You can request multiple test databases if you wish to test an upgrade more than once.

.. tabs::

    .. group-tab:: Odoo Online

        Odoo Online databases can be manually upgraded via the `database manager page <https://odoo.com/my/databases>`_.

        The database manager page displays all databases associated with the user's account. Any databases not already on the most recent version of Odoo display an **arrow in a circle** icon next to the database name, indicating that the database can be upgraded.

        .. image:: /administration/upgrade/odoo_online/databases-page.png
            :align: center
            :alt: The database manager page with an upgrade button next to the name of a database.

        Clicking on the **arrow in a circle** icon to display the following pop-up

        .. image:: /administration/upgrade/odoo_online/upgrade-pop-up.png
            :alt: The "Upgrade your database" pop-up.

        There are a few things to be filled on this pop-up :

        - The version of Odoo you want to upgrade to (Usually the latest version)
        - The email to receive the link to the upgraded database
        - The purpose of the upgrade, which is automatically set to "Test" for your first upgrade request.

        The :guilabel:`Upgrade in progress` tag is displayed next to the database name until completion. Once the process succeeds, an email is sent to the email address provided and contains a link to the upgraded test database. It can also be accessed from the database manager by clicking the dropdown arrow before the database name.

        .. image:: /administration/upgrade/odoo_online/access-upgraded-db.png
            :alt: Clicking the menu arrow reveals the upgraded test database below it.


    .. group-tab:: Odoo.sh

        Odoo.sh is integrated with the upgrade platform to simplify the upgrade process.

        .. note::
            The :guilabel:`Upgrade` tab is available in the branches view. It is only available for valid projects with a valid production build.

        .. image:: /administration/upgrade/odoo_sh/odoo-sh-staging.png
            :alt: Odoo.sh project and tabs

        The **latest production daily automatic backup** is then sent to the `upgrade platform <https://www.upgrade.odoo.com>`_.

        Once the upgrade platform finished upgrading the backup and uploading it on the branch, it is now in a **special mode**: each time a **commit is pushed** on the branch, a **restore operation** of the upgraded backup occurs, and an **update of all the custom modules** happens. This allows you to quickly iterate on your custom modules upgrade scripts. The log file of the upgrade process can be found at :file:`~/logs/upgrade.log` in your newly upgraded staging build.

        .. note::
            Most Odoo.sh users have custom modules installed on their database. In those situations, the modules' source code must be up-to-date with the target version of Odoo before the upgrade can be performed. Check out the :doc:` upgrade for developers documentation </developer/reference/upgrade>` for more information. If a module is not needed after an upgrade, :ref:`you can remove customizations <upgrade/remove_customizations>`.

    .. group-tab:: On-premise

        .. _upgrade/request-test-database/on-premise:

        The standard upgrade process can be initiated via the following command line on the machine where the database is hosted:
        `python <(curl -s https://upgrade.odoo.com/upgrade) test -d <your db name> -t <target version>`

        The following command can be used to show the general help and the main commands:
        `python <(curl -s https://upgrade.odoo.com/upgrade) --help`

        An upgraded test database can also be requested via the `Upgrade page <https://upgrade.odoo.com/>`_.

        .. note::
            - For security reasons, only the person who submitted the upgrade request is able to download it.
            - For storage reasons, the copy of your database is submitted without a filestore to the upgrade                server. Therefore, the upgraded database will not contain the production filestore.
            - Before restoring the upgraded database, its filestore must be merged with the production                 filestore to be able to perform tests in the same conditions as it would be in the new version.
            - The upgraded database contains:

                - A `dump.sql` file containing the upgraded database.
                - A `filestore` folder containing files that were extracted from in-database records into attachments (if there are any) and new standard Odoo files from the targeted Odoo version (like new images, icons, payment provider's logos, etc.). This is the folder that should be merged with the production filestore in order to get the full upgraded filestore.

In all cases, your data follows the same process as follows:

#. Export the database to a file
#. Upload the file to the upgrade server
#. Standard upgrade scripts (a series of :ref:`migration scripts <reference/upgrade/migration-scripts>` upgrading standard modules)
#. Download the upgraded database
#. Import the file into a database
#. *Optional*: Custom upgrade scripts (:ref:`migration scripts <reference/upgrade/migration-scripts>` developed by third-parties to upgrade custom modules)


.. _upgrade/upgrade_report:

.. note::
    When an upgrade request is completed (test or production), an upgrade report is sent by email and made available in the Discuss app. It contains important information regarding new features and changes brought by the new version.

.. _upgrade/test_your_db:

Testing the new version of the database
---------------------------------------

It is important to spend some testing the upgraded test database to ensure that you are not stuck in your day-to-day activities by a change in views, behavior, or an error message once the upgrade goes live.

.. note::
    Test databases are neutralized, and some features are disabled to prevent them from impacting the production database:

    #. Scheduled actions are disabled.
    #. Outgoing mail servers are disabled by archiving the existing ones and adding a fake one.
    #. Payment providers and delivery carriers are reset to test environment.

Testing as many of your business flows as possible is strongly recommended to ensure that they are working properly and to get more familiar with the new version.

.. admonition:: Test checklist

    - Are there views that are deactivated in your test database but active in your production database?
    - Are your usual views still displayed correctly?
    - Are your reports (Invoice, Sales Order, etc.) correctly generated?
    - Are your website pages working correctly?
    - Are you able to create and modify records? (Sales orders, invoices, purchases, users, contacts, companies, etc ... )
    - Is there any issues with your mail templates?
    - Are your search filters still present?
    - Can you export your data?

.. spoiler:: Examples of end-to-end testing

    - Check a random product in your product catalog and compare its test and production data (product category, selling price, cost price, is the vendor set? Are the same accounts set? Are the same routes set?);
    - Buy this product (only available with the Purchase app);
    - Confirm the reception of this product (only available with the Inventory app);
    - Check if the route to receive this product applies the same set in your production database (only available with the Inventory app);
    - Sell this product (only available with the Sales app) to a random customer;
    - Open your customer database (Contact App), select a random customer (or company) and double-check its data;
    - Ship this product (only available with the Inventory app);
    - Check if the route to ship this product applies the same set in your production database (only available with the Inventory app);
    - Validate a customer invoice (only available with the Invoicing and/or Accounting apps);
    - Credit the invoice (issue a credit note) and check if it behaves as in your production database;
    - Check your reports' results (only available with the Accounting apps);
    - Randomly check your taxes, currencies, and bank accounts. Is your fiscal year set in the production database the same? (only available with the Accounting app);
    - Proceed to an online order (only available with the Website apps) from the product selection in your shop until the checkout process and check if it behaves as in your production database.

    Don't forget to test:

    - Integrations with external software (EDI, APIs, etc.)
    - Workflows between different apps (online sales with eCommerce, converting a lead all the way to a sales order, delivery of products, etc.)
    - Exporting data
    - Automated actions to make sure they work
    - Server actions in the action menu on form views as well as by selecting multiple records on list views

    This list is **not** exhaustive. Extend the examples to your other apps based on your use of Odoo.

If you face an issue while testing your upgraded test database, you can request the assistance of Odoo via the `support page <https://odoo.com/help>`_. In any case, it is essential to report to Odoo any problem encountered during the testing to fix it before upgrading your production database.

During testing, you might encounter significant differences with standard views, features, fields, and models that were changed to improve the user experience and the performance of the application. Those changes cannot be reverted on a case-by-case basis. However, if customizations are broken because of this, the maintainer of your custom module should will take care of fixing the customization so that it becomes compatible with the new version of Odoo.

Upgrading the production database
---------------------------------

Once the :ref:`tests <upgrade/test_your_db>` are completed, and you are confident that the upgraded database can be used as your main database without any issue, it is time to plan the go-live day. It can be planned in coordination with Odoo's upgrade support analysts, reachable via the `support page <https://odoo.com/help>`_.

.. important::
    Any modification to your production database will **not** be saved during the upgrade of your production database. This is why we recommend not using it during that time.

.. important::
    Going into production without first testing may lead to:

    - users failing to adjust to the changes and new features
    - business interruptions (e.g., no longer having the possibility to validate an action)
    - poor customer experience (e.g., an eCommerce website that does not work correctly)


The process of upgrading a production database is similar to upgrading a test database with a few exceptions.

.. tabs::

    .. group-tab:: Odoo Online

        The process is equivalent to :ref:`upgrade/request-test-database` except for the purpose option, which must be set to :guilabel:`Production` instead of :guilabel:`Test`.

        .. important::
            Once the upgrade is requested, the database will be unavailable until the upgrade is finished. Once the process is completed, there is no way to revert to the previous version.

    .. group-tab:: Odoo.sh

        The process is equivalent to :ref:`obtaining an upgraded test database <upgrade/request-test-database>` except that the :guilabel:`Production` branch must be selected before clicking the :guilabel:`Upgrade` tab.

        .. image:: /administration/upgrade/odoo_sh/odoo-sh-prod.png
            :alt: View from the upgrade tab

        The actual process is **triggered as soon as a new commit is added** to the branch. This allows the upgrade process to be synchronized with the deployment of the custom modules' upgraded source code.

        .. important::
            The database is unavailable throughout the process. If anything goes wrong, the platform automatically reverts the upgrade, as it would be for a regular update. In case of success, a backup of the database before the upgrade is created.

        The update of your custom modules must be successful to complete the entire upgrade process. Make sure the status of your staging upgrade is :guilabel:`successful` before trying it in production. More information on how to upgrade your custom modules can be found in :ref:`upgrade/upgrading_customizations`.

    .. group-tab:: On-premise

        The command to upgrade a database to production is similar to the one of upgrading a test database except for the argument ``test`` which must be replaced by ``production``.
        `python <(curl -s https://upgrade.odoo.com/upgrade) production -d <your db name> -t <target version>`

        An upgraded production database can also be requested via the `Upgrade page <https://upgrade.odoo.com/>`_.

        .. important::
            When requesting an upgrade database for production purposes, the copy is submitted without a filestore. Therefore, the upgraded database filestore must be merged with the production filestore before deploying the new version.

In case of an issue with your production database, you can request the assistance of Odoo via the `support page <https://odoo.com/help>`_.

.. seealso::
    :doc:`/applications/services/helpdesk/overview/sla`

.. _upgrade/comparing_customizations:

Comparing customizations to the new version
-------------------------------------------

As many new features are added with each new version, it often happens that some customizations are not necessary anymore when equivalent features become part of the standard version of Odoo.

Therefore, it is recommended to take the time to explore the new features and compare them with your customizations. It is recommended to remove unnecessary customizations to reduce the work needed to maintain and upgrade your database.

FAQ
---

Data protection during upgrades
===============================

The Odoo Upgrade platform uses the same `Privacy Policy <https://www.odoo.com/privacy>`_ as the rest of Odoo.com services.

You can learn more about privacy and data handling at Odoo by visiting our `General Data Protection Regulation page <https://www.odoo.com/gdpr>`_.
