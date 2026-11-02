:show-content:

=======
Upgrade
=======

An upgrade involves moving a database from an older version to a newer supported version (e.g., from
Odoo 18.0 to Odoo 20.0). Regular upgrades are crucial as each version offers new features, bug
fixes, and security patches. Using a :doc:`supported version <standard_extended_support>` is
strongly recommended. Each major version is supported for three years.

Depending on the hosting type and Odoo version used, a database upgrade can be **mandatory**.

.. tabs::

   .. group-tab:: Odoo Online

      - If a database is on a **major version** (e.g., 18.0, 19.0, 20.0), an upgrade is mandatory
        every two years.
      - If a database is on a **minor version** (e.g., 19.1, 19.2, 19.4), an upgrade is mandatory
        a few weeks after the next version is released. Minor versions are usually released every
        two months.

   .. group-tab:: Odoo.sh

      After the initial three years of support, you will have another two years to complete the
      upgrade. You will be notified when an upgrade is required.

      .. image:: upgrade/odoo-sh-message.png
         :alt: The "unsupported version" popup on Odoo.sh.

   .. group-tab:: On-premise

      You can stay on the same version indefinitely, even if it is not recommended. Note that the
      smaller the version gap, the easier the upgrade should be.

.. spoiler:: Automatic upgrades: Odoo Online's Rolling Release process

   You will receive a notification in your database a few weeks before a mandatory upgrade will be
   automatically carried out. You are in control of the process as long as the deadline is not
   reached.

   .. image:: upgrade/rr-upgrade-message.png
      :alt: The upgrade message prompt on the top right of the database

   Concretely, Odoo’s Upgrade Team performs a silent test upgrade of every database that should be
   upgraded. If the test is successful and lasts less than 20 minutes, you can directly trigger the
   upgrade from the database. If the test fails, you can test an upgrade using the `database manager
   <https://www.odoo.com/my/databases>`_.

   When you are invited to upgrade, it is strongly recommended to :ref:`request an upgraded test
   database <upgrade-request-test>` first and spend time :ref:`testing <upgrade-testing>` it.

   An automatic upgrade to the next version will be triggered if no action is taken before the
   specified due date.

An upgrade does not cover:

  - Downgrading to a previous version of Odoo
  - :doc:`Switching editions <on_premise/community_to_enterprise>` (e.g., from Community to
    Enterprise)
  - :ref:`Changing hosting type <hosting/change-solution>` (e.g., from on-premise to Odoo Online)
  - Migrating from another ERP to Odoo

.. warning::
   If your database contains custom modules, it cannot be upgraded until a version of your custom
   modules is available for the target version of Odoo. For customers maintaining their own custom
   modules, we recommend to parallelize the process by :ref:`requesting an upgraded database
   <upgrade-request-test>` while also :doc:`upgrading the source code of your custom
   modules </developer/howtos/upgrade_custom_db>`.

.. _upgrade-nutshell:

Upgrading in a nutshell
=======================

#. Request an upgraded test database (see :ref:`obtaining an upgraded test database
   <upgrade-request-test>`).
#. If applicable, upgrade the source code of your custom module to be compatible with the new
   version of Odoo (see :doc:`/developer/howtos/upgrade_custom_db`).
#. Thoroughly test the upgraded database (see :ref:`testing the new version of the database
   <upgrade-testing>`).
#. Report any issue encountered during the testing to Odoo by going to the `Support page and
   select "Upgrade issue (in a test database)" <https://www.odoo.com/help?stage=migration>`_.
#. Once all issues are resolved and you are confident that the upgraded database can be used as
   your main database without any issues, plan the upgrade of your production database.
#. Request the upgrade for the production database, rendering it unavailable for the time it takes
   to complete the process (see :ref:`upgrading the production database <upgrade-production>`).
#. Report any issue encountered during the upgrade to Odoo by going to the `Support page and
   select "Upgrade issue(production)" <https://www.odoo.com/help?stage=post_upgrade>`_.

.. _upgrade-request-test:

Obtaining an upgraded test database
===================================

The `Upgrade page <https://upgrade.odoo.com>`_ is the main platform for requesting an upgraded
database. However, depending on the hosting type, you can upgrade from the command line
(on-premise), the Odoo Online `database manager <https://www.odoo.com/my/databases>`_, or your
`Odoo.sh project <https://www.odoo.sh/project>`_.

.. note::
   The Upgrade platform follows the same `Privacy Policy <https://www.odoo.com/privacy>`_ as the
   other Odoo.com services. Visit the `General Data Protection Regulation page
   <https://www.odoo.com/gdpr>`_ to learn more about how Odoo handles your data and privacy.

.. tabs::

   .. group-tab:: Odoo Online

      To upgrade an Odoo Online database:

      #. Open the `database manager <https://www.odoo.com/my/databases>`_.
      #. Select the database and click :icon:`fa-gears` :guilabel:`Manage`.
      #. Click :guilabel:`Upgrade` in the :guilabel:`Database` section.
      #. In the popup:

         - Select the **version** of Odoo you want to upgrade to, usually the latest version.
         - Enter the :guilabel:`Email to notify`, which will receive a link to the upgraded
           database.
         - Select the :guilabel:`Purpose` of the upgrade, which is automatically set to
           :guilabel:`Test` for your first upgrade request.
         - Click :guilabel:`Upgrade`.

      In the database manager, the :guilabel:`Connect` button will be replaced by an unclickable
      :guilabel:`Upgrading...` button until completion. Once the process is successful, an email
      containing a link to the upgraded test database is sent to the address provided. The test
      database can also be accessed from the database manager by clicking the :icon:`fa-caret-down`
      (:guilabel:`caret down`) button before the database name to display the test database, then
      clicking :guilabel:`Connect`.

   .. group-tab:: Odoo.sh

      Odoo.sh is integrated with the upgrade platform to simplify the upgrade process.

      .. image:: upgrade/odoo-sh-staging.png
         :alt: Odoo.sh project and tabs

      The **latest production daily automatic backup** is then sent to the Upgrade platform.

      Once it has been processed by the Odoo Upgrade platform and transferred back to Odoo.sh, the
      branch will switch to a special **"Update on commit"** mode: each time a **commit is pushed**
      to the branch, a **restore operation** of the upgraded backup and an **update of all the
      custom modules** occur. This allows you to test your custom modules on a pristine copy of the
      upgraded database. The upgrade log file can be found in your newly upgraded staging build at
      :file:`~/logs/upgrade.log`.

      .. important::
         In databases where custom modules are installed, their source code must be up-to-date with
         the target version of Odoo before the upgrade can be performed. If there are none, the
         "update on commit" mode is skipped, the upgraded database is built as soon as it is
         transferred from the upgrade platform, and the upgrade mode is exited.

         Check out the :doc:`/developer/howtos/upgrade_custom_db` page for more information.

   .. group-tab:: On-premise

      The standard upgrade process can be initiated by entering the following command line on the
      machine where the database is hosted:

      .. code-block:: console

         $ python <(curl -s https://upgrade.odoo.com/upgrade) test -d <your db name> -t <target version>

      .. note::
         This command has some requirements on the environment it runs in:

         - Some external commands that must be provided by the operating system, normally found in
           any Linux distribution (including WSL). An error will be displayed if one or several of
           them are missing.
         - The system user that executes the command needs to be configured with access to the
           database. Please refer to the PostgreSQL documentation of the `client environment
           <https://www.postgresql.org/docs/current/libpq-envars.html>`_ or the `client password
           file <https://www.postgresql.org/docs/current/libpq-pgpass.html>`_ for this requirement.
         - The script needs to be able to reach one or multiple servers of the upgrade platform
           both on TCP port 443 and to any random TCP port in the range between 32768 and 60999.
           This can be in conflict with your restrictive firewall and may need an exception added
           to the firewall configuration.

      The following command can be used to display the general help and the main commands:

      .. code-block:: console

         $ python <(curl -s https://upgrade.odoo.com/upgrade) --help

      An upgraded test database can also be requested via the `Upgrade page
      <https://upgrade.odoo.com>`_.

      .. important::
         In databases where custom modules are installed, their source code must be up-to-date with
         the target version of Odoo before the upgrade can be performed. Check out the
         :doc:`/developer/howtos/upgrade_custom_db` page for more information.

      .. note::
         - For security reasons, only the person who submitted the upgrade request can download it.
         - For storage reasons, the database's copy is submitted without a filestore to the upgrade
           server. Therefore, the upgraded database does not contain the production filestore.
         - Before restoring the upgraded database, its filestore must be merged with the production
           filestore to be able to perform tests in the same conditions as it would be in the new
           version.
         - The upgraded database contains:

           - A `dump.sql` file containing the upgraded database
           - A `filestore` folder containing files extracted from in-database records into
             attachments (if there are any) and new standard Odoo files from the targeted Odoo
             version (e.g., new images, icons, payment provider's logos, etc.).
             This is the folder that should be merged with the production filestore
             in order to get the full upgraded filestore.

.. note::
   There is no limit to the number of test databases that can be requested.

   Please request a fresh one before the production upgrade if your project has been running for a
   while, because the standard upgrade scripts and your production data both keep evolving.

.. note::
   When an upgrade request is completed, an upgrade report is attached to the successful upgrade
   email, and it becomes available in the Discuss app for users who are part of the "Administration
   / Settings" group. This report provides important information about the changes introduced by
   the new version.

.. _upgrade-testing:

Testing the new version of the database
=======================================

It is essential to test the upgraded test database to ensure that you are not stuck in your
day-to-day activities by a change in views, behavior, or an error message once the upgrade goes
live.

.. note::
   Test databases are :doc:`neutralized<./neutralized_database>`, and some features are disabled to
   prevent them from impacting the production database:

   #. Scheduled actions are disabled.
   #. Outgoing mail servers are disabled by archiving the existing ones and adding a fake one.
   #. Payment providers and delivery carriers are reset to the test environment.
   #. Bank synchronization is disabled. Should you want to test the synchronization, contact your
      bank synchronization provider to get sandbox credentials.

Testing as many of your business flows as possible is strongly recommended to ensure they are
working correctly and to get more familiar with the new version.

.. admonition:: Basic test checklist

   - Are there views that are deactivated in your test database but active in your production
     database?
   - Are your usual views still displayed correctly?
   - Are your reports (invoice, sales order, etc.) correctly generated?
   - Are your website pages working correctly?
   - Are you able to create and modify records? (sales orders, invoices, purchases, users, contacts,
     companies, etc.)
   - Are there any issues with your mail templates?
   - Are there any issues with saved translations?
   - Are your search filters still present?
   - Can you export your data?

.. spoiler:: Example of end-to-end testing

   - Checking a random product in your product catalog and comparing its test and production data to
     verify everything is the same (product category, selling price, cost price, vendor, accounts,
     routes, etc.).
   - Buying this product (Purchase app).
   - Confirming the reception of this product (Inventory app).
   - Checking if the route to receive this product is the same in your production database
     (Inventory app).
   - Selling this product (Sales app) to a random customer.
   - Opening your customer database (Contacts app), selecting a customer (or company), and checking
     its data.
   - Shipping this product (Inventory app).
   - Checking if the route to ship this product is the same as in your production database
     (Inventory app).
   - Validating a customer invoice (Invoicing or Accounting app).
   - Crediting the invoice (issuing a credit note) and checking if it behaves as in your production
     database.
   - Checking your reports' results (Accounting app).
   - Randomly checking your taxes, currencies, bank accounts, and fiscal year (Accounting app).
   - Making an online order (Website apps) from the product selection in your shop until the
     checkout process and checking if everything behaves as in your production database.

   This list is **not** exhaustive. Extend the example to your other apps based on your use of Odoo.

If you face an issue while testing your upgraded test database, you can request the assistance of
Odoo by going to the `Support page and select "Upgrade issue (in a test database)"
<https://www.odoo.com/help?stage=migration>`_. In any case, it is essential to
report any problem encountered during the testing to fix it before upgrading your production
database.

You might encounter significant differences with standard views, features, fields, and models during
testing. Those changes cannot be reverted on a case-by-case basis. However, if a change introduced
by a new version breaks a customization, it is the responsibility of the maintainer of your custom
module to make it compatible with the new version of Odoo.

.. tip::
   Do not forget to test:

   - Integrations with external software (EDI, APIs, etc.)
   - Workflows between different apps (online sales with eCommerce, converting a lead all the way to
     a sales order, delivery of products, etc.)
   - Data exports
   - Automated actions
   - Server actions in the action menu on form views, as well as by selecting multiple records on
     list views

.. _upgrade-production:

Upgrading the production database
=================================

Once the :ref:`tests <upgrade-testing>` are completed and you are confident that the upgraded
database can be used as your main database without any issues, it is time to plan the go-live day.

Your production database will be unavailable during its upgrade. Therefore, we recommend planning
the upgrade at a time when the use of the database is minimal.

As the standard upgrade scripts and your database are constantly evolving, it is also recommended
to frequently request another upgraded test database to ensure that the upgrade process is still
successful, especially if it takes a long time to finish. **Fully rehearsing the upgrade process the
day before upgrading the production database is also recommended.**

.. important::
   Going into production without first testing may lead to:

   - Users failing to adjust to the changes and new features
   - Business interruptions (e.g., no longer having the possibility to validate an action)
   - Poor customer experience (e.g., an eCommerce website that does not work correctly)

The process of upgrading a production database is similar to upgrading a test database, but with a
few exceptions.

.. tabs::

   .. group-tab:: Odoo Online

      The process is similar to :ref:`obtaining an upgraded test database
      <upgrade-request-test>`, except for the purpose option, which must be set to
      :guilabel:`Production` instead of :guilabel:`Test`.

      .. warning::
         Once the upgrade is requested, the database will be unavailable until the upgrade is
         finished. Once the process is completed, it is impossible to revert to the previous
         version.

   .. group-tab:: Odoo.sh

      The process is similar to :ref:`obtaining an upgraded test database <upgrade-request-test>` on
      the :guilabel:`Production` branch.

      .. image:: upgrade/odoo-sh-prod.png
         :alt: View from the upgrade tab

      The process is **triggered as soon as a new commit is made** on the branch. This
      allows the upgrade process to be synchronized with the deployment of the custom modules'
      upgraded source code.
      If there are no custom modules, the upgrade process is triggered immediately.

      As soon as the upgrade process is triggered, a backup is created from the production database
      and it's sent to the Upgrade platform. The backup can be found in the :guilabel:`Backups` tab
      and can be restored on a staging branch if a copy of the production database pre-upgrade is
      needed to compare results with the previous version or check data, without any impact on
      production.

      .. image:: upgrade/odoo-sh-upgrade-backup.png
         :alt: View from the backup tab

      .. important::
         The database is **unavailable** throughout the process.

         If anything goes wrong, the platform automatically reverts the upgrade, as it would be for
         a regular update, by restoring the previous successful build.

      The update of your custom modules must be successful to complete the entire upgrade process.
      Make sure the status of your staging upgrade is :guilabel:`successful` before trying it in
      production. More information on how to upgrade your custom modules can be found on
      :doc:`/developer/howtos/upgrade_custom_db`.

   .. group-tab:: On-premise

      The command to upgrade a database to production is similar to the one of upgrading a test
      database except for the argument `test`, which must be replaced by `production`:

      .. code-block:: console

         $ python <(curl -s https://upgrade.odoo.com/upgrade) production -d <your db name> -t <target version>

      An upgraded production database can also be requested via the `Upgrade page
      <https://upgrade.odoo.com>`_.

      Once the database is uploaded, any modification to your production database will **not** be
      present on your upgraded database. This is why we recommend not using it during the upgrade
      process.

      .. important::
         When requesting an upgraded database for production purposes, the copy is submitted without
         a filestore. Therefore, the upgraded database filestore must be merged with the production
         filestore before deploying the new version.

In case of an issue with your production database, you can request the assistance of Odoo by going
to the `Support page and select "Upgrade issue(production)"
<https://www.odoo.com/help?stage=post_upgrade>`_.

.. _upgrade-sla:

Service-level agreement (SLA)
=============================

With Odoo Enterprise, upgrading a database to the most recent version of Odoo is **free**, including
any support required to rectify potential discrepancies in the upgraded database.

Information about the upgrade services included in the Enterprise Licence is available in the
:ref:`Odoo Enterprise Subscription Agreement <upgrade>`. However, this section clarifies what
upgrade services you can expect.

.. _upgrade-sla-covered:

Upgrade services covered by the SLA
-----------------------------------

Databases hosted on Odoo's cloud platforms (Odoo Online and Odoo.sh) or self-hosted (On-Premise) can
benefit from upgrade services at all times for:

- the upgrade of all **standard applications**;
- the upgrade of all **customizations created with the Studio app**, as long as Studio is still
  installed and the respective subscription is still active; and
- the upgrade of all **developments and customizations covered by a maintenance of customizations
  subscription**.

Upgrade services are limited to the technical conversion and adaptation of a database (standard
modules and data) to make it compatible with the version targeted by the upgrade.

.. _upgrade-sla-not-covered:

Upgrade services not covered by the SLA
---------------------------------------

The following upgrade-related services are **not** included:

- the **cleaning** of pre-existing data and configurations while upgrading;
- the upgrade of **additional modules not covered by a maintenance contract** that are created
  in-house or by third parties, including Odoo partners; and
- **training** on using the upgraded version's features and workflows.

.. _upgrade-faq:

Frequently asked questions
==========================

General questions
-----------------

.. _upgrade/faq/freeze:

.. spoiler:: Can the upgrade scripts be frozen?

   Odoo's standard upgrade scripts are not frozen when testing upgrades. They are continuously
   updated. Each new :ref:`test upgrade <upgrade-request-test>` requested for a database uses the
   latest version of the upgrade scripts.

   However, when a :ref:`production database upgrade <upgrade-production>` is requested, if there is
   a successful test upgrade request **no older than 5 days**, the same version of the scripts is
   used to process it. This ensures the production upgrade runs with the same scripts that already
   successfully processed the database.

.. _upgrade/faq/test-validity:

.. spoiler:: Can the validity of a test database be extended?

   No. A test database is intended solely for testing and is unrelated to the production database.
   If it expires, or if you want to test again, request a new one.

.. _upgrade/faq/remove-custom-modules:

.. spoiler:: How do I remove obsolete custom modules?

   .. tabs::

      .. group-tab:: Odoo Online

         For **Odoo Online** databases, uninstall the custom module using the :menuselection:`Apps`
         app.

      .. group-tab:: Odoo.sh

         - **Before** the upgrade: If a custom module is already no longer needed, uninstall it on
           the Production database before the upgrade.
         - **During** the standard upgrade: If a custom module is needed up to the moment of the
           upgrade, create a ticket on the `Support page and select "Upgrade issue (in a test
           database)" <https://www.odoo.com/help?stage=migration>`_, indicating the custom module to
           remove and we will make sure it is removed during the standard upgrade of the database.
         - **After** the standard upgrade: If a custom module is needed after the upgrade to run
           other operations, like moving its fields or models to another module, merging its data,
           and so on, remove it after the upgrade by writing an :doc:`upgrade script
           <../../developer/reference/upgrades/upgrade_scripts>`.

      .. group-tab:: On-premise

         - **Before** the upgrade: If a custom module is already no longer needed, uninstall it on
           the Production database before the upgrade.
         - **During** the standard upgrade: If a custom module is needed up to the moment of the
           upgrade, create a ticket on the `Support page and select "Upgrade issue (in a test
           database)" <https://www.odoo.com/help?stage=migration>`_, indicating the custom module to
           remove and we will make sure it is removed during the standard upgrade of the database.
         - **After** the standard upgrade: If a custom module is needed after the upgrade to run
           other operations, like moving its fields or models to another module, merging its data,
           and so on, remove it after the upgrade by writing an :doc:`upgrade script
           <../../developer/reference/upgrades/upgrade_scripts>`.

.. _upgrade/faq/downtime:

.. spoiler:: What is the downtime for a production upgrade?

   While Odoo does not provide a time estimate because downtime depends on many aspects like the
   size of the database, the version gap, and any custom code/modules it might have, you can gauge
   it using these steps:

   .. tabs::

      .. group-tab:: Odoo Online

         Request an :ref:`upgraded test database <upgrade-request-test>` and measure the time
         required for the request to be completed.

      .. group-tab:: Odoo.sh

         - Request an :ref:`upgraded test database <upgrade-request-test>` and measure the time
           required for the request to be completed.
         - Measure the time it required to build the database on the staging branch: This includes
           the update of the custom modules that are installed and the execution of custom upgrade
           scripts, if any.
         - Measure the time required to create a backup: For large databases, creating a backup
           prior to the upgrade can be time-consuming and can lead to longer downtime when upgrading
           the production database. Create a manual backup of the production database and measure
           its time to better estimate the downtime.

      .. group-tab:: On-premise

         - Request an :ref:`upgraded test database <upgrade-request-test>` and measure the time
           required for the request to be completed.
         - Measure the time required to deploy the test database, update the custom modules, and run
           custom upgrade scripts, if any.
         - Measure the time required to create a backup: We advise creating a backup of the database
           before requesting the production upgrade, especially for large databases.
         - Measure the time required to create the database dump to send to the `upgrade platform
           <https://upgrade.odoo.com>`_ and the time it takes to restore the upgraded database, same
           as before, this is especially relevant only in large databases.

.. _upgrade/faq/test_changes:

.. spoiler:: Are the changes on my test upgrade database applied on my production upgrade?

   No, any manual configuration, transactional entries, or data changes made directly inside an
   upgraded test database are not copied over or applied to your production database when you
   request a production upgrade.

   An upgraded test database is meant strictly for evaluation and validation purposes. When you
   later request the production upgrade, Odoo's upgrade process takes a fresh copy of your live
   production database and runs the automated upgrade scripts on it from scratch.

   Any changes made on the upgraded test database will therefore need to be reapplied after the
   production upgrade.

Odoo.sh questions
-----------------

.. _upgrade/faq/sh_staging_backup:

.. spoiler:: On a staging branch, can I manually choose the backup to upgrade?

   No. For **test** upgrades, the platform uses the **latest production daily automatic backup**,
   and it's not possible to manually select a backup from either the production branch or any
   staging branch.

   If modifications to the production database need to be included in the test upgrade, wait until
   the new daily automatic backup is generated before requesting it.

   On the other hand, if modifications need to be made to the database before sending it to the
   Upgrade platform, do them on a separate copy of the database (locally or on a staging branch) and
   use the upload form or the command line to request the test-upgraded database. The obtained
   database can then be imported into the staging branch for further testing.

   For the **production** upgrade, the platform creates a new backup on the spot with the most
   up-to-date data from the production database and sends it to the Upgrade platform.

.. _upgrade/faq/sh_production_fail:

.. spoiler:: What happens if the production upgrade fails?

   Similar to when a build fails to load or update the production database, if the upgrade fails for
   any reason (a standard upgrade fails, the database fails to restore, errors occur when updating
   custom modules, etc.), the server automatically **reverts to the previous successful build**.

   In the case of an upgrade, the platform will restore the database to its state prior to the
   upgrade, along with the revision of the associated code. The code pushed to the production branch
   to trigger the upgrade is not used when restoring the previous successful build.

   If this happens, check the logs of the failed build for any hints about what went wrong, test the
   fixes and changes in a staging branch (including requesting a new test-upgraded database), and
   make sure the staging build does not fail before attempting the production upgrade again.

   Once the issue has been fixed, upgrade the production database again. A new commit will be needed
   to trigger it. If no change was made to the custom code to fix the error, push an empty commit.

   If the error occurred during the standard database upgrade, you can request assistance from Odoo
   by going to the `Support page and select "Upgrade issue (in a test database)"
   <https://www.odoo.com/help?stage=migration>`_.

Odoo Online questions
---------------------

.. _upgrade/faq/online_postpone:

.. spoiler:: Can the rolling release of the database be postponed?

   No, it is not possible to postpone the automatic upgrade of a database. Once the deadline
   mentioned on the notification received in your database has been reached, the database can be
   automatically upgraded at any point and it cannot be postponed.

   If you are experiencing issues or discrepancies in the test-upgraded database, create a
   ticket on the `Support page and select "Upgrade issue (in a test database)"
   <https://www.odoo.com/help?stage=migration>`_. As long as there is an open ticket with the
   subscription code linked to it, the automatic upgrade is on hold.

.. _upgrade/faq/online_rollback:

.. spoiler:: My database was force-upgraded; can you roll back to the old version?

   No, it is not possible to roll back a database once the upgrade has been completed.

   A database upgrade is a permanent data processing operation that alters the structure and
   contents of the database to make it compatible with a new version. Because of this, downgrading
   to a previous version of Odoo is explicitly excluded under the :doc:`Odoo Enterprise Subscription
   Agreement <../legal/terms/enterprise>`.

   If you are experiencing issues or discrepancies with your production database following an
   automatic or forced upgrade, reach out to Odoo for assistance by going to the `Support page and
   select "Upgrade issue (production)" <https://www.odoo.com/help?stage=post_upgrade>`_.

   .. tip::
      Don’t wait for the automatic upgrade. When a new version becomes available, request an
      upgraded test database from the database manager, test your key business flows, and report any
      issues before you upgrade production.

      Upgrading on your own schedule gives you control over the timing and allows you to prepare
      your users for the transition.

.. _upgrade/faq/online_large_filestore:

.. spoiler:: Why can't I upgrade my database when the filestore is too large?

   When dealing with Odoo Online databases with a filestore exceeding 100 GB, manual intervention by
   an Odoo agent might be needed to launch the test or production upgrades.

   When this is the case, a message is displayed on the upgrade widget of the database:

   .. image:: upgrade/odoo-online-large-filestore.png
      :alt: The large filestore "Upgrade" popup on Odoo Online.

   .. warning::
      A **403 Forbidden: Filestore too large** error could also be raised when requesting the
      upgrade.

   If this is blocking your upgrade request, create a ticket on the `Support page and select
   "Upgrade issue (in a test database)" <https://www.odoo.com/help?stage=migration>`_ and an agent
   will contact you and help you trigger the upgrade for testing or production purposes.

   .. note::
      Reducing the size of the database and its filestore can help the upgrade run smoothly and
      avoid intervention from an Odoo agent, allowing you to have control over the upgrade and when
      it's triggered.

.. seealso::
   - :doc:`Odoo.sh documentation <odoo_sh>`
   - :doc:`Supported Odoo versions <standard_extended_support>`
