===================================
Upgrade: Frequently Asked Questions
===================================

General questions
=================

.. _upgrade/faq/freeze:

.. spoiler:: Can the upgrade scripts be frozen?

   Odoo's standard upgrade scripts are not frozen when testing upgrades. They are continuously
   updated. Each new :ref:`test upgrade <upgrade-request-test>` requested for a database uses the
   latest version of the upgrade scripts.

   However, when a :ref:`production database upgrade <upgrade-production>` is requested, if there is
   a successful test upgrade request **not older than 5 days**, the same version of the scripts is
   used to process it.

   This ensures the production upgrade runs with the same scripts that already successfully
   processed the database.

.. _upgrade/faq/test-validity:

.. spoiler:: Can the validity of a test database be extended?

   No. A test database is meant only for testing purposes and is unrelated to the production
   database. If it expires, or if you want to test again, request a new one.

   There is no limit to the number of test databases that can be requested. Bear in mind that they
   are processed one at a time.

   Please request a fresh one before the production upgrade if your project has been running for a
   while, because the standard upgrade scripts and your production data both keep evolving.

.. _upgrade/faq/remove-custom-modules:

.. spoiler:: How do I remove custom modules during the upgrade?

   **Before the upgrade**

   If the custom modules are not needed anymore, uninstalling them on the Production database before
   the upgrade is the best option.

   **During the standard upgrade**

   If the custom modules are needed on the production database until it is upgraded but are not
   needed after.
   Please, create a ticket on the `Support page and selecting "Upgrade issue (in a test database)"
   <https://www.odoo.com/help?stage=migration>`_, indicating the custom modules to remove and we
   will make sure they are removed during the standard upgrade of the database.

   **After the standard upgrade**

   If the custom modules are meant to be removed after the standard upgrade, write an
   :doc:`upgrade script<../../developer/reference/upgrades/upgrade_scripts>` and remove the module
   with the :meth:`remove_module` function from the
   :doc:`../../developer/reference/upgrades/upgrade_utils` package.
   This allows running other operations before the module is removed, like moving its fields or
   models to another module, merging its data, and so on.

   For Odoo Online databases, simply uninstall the custom module from the :menuselection:`Apps`.

.. _upgrade/faq/downtime:

.. spoiler:: What is the downtime for a production upgrade?

   While Odoo does not provide a time estimate because downtime depends on many aspects like the
   size of the database, the version gap, and any custom code/modules it might have, you can gauge
   it using these steps:

   1. Request an :ref:`Upgraded Test Database <upgrade-request-test>`.

   2. Measure the duration of the request.

   3. For **Odoo.Sh** projects:

      a. Measure the time it takes to build the database on the staging branch: This includes the
         update of the custom modules that are installed and the execution of custom upgrade
         scripts, if any.
      b. Measure the time it takes to create a backup: For big databases, the creation of the backup
         prior to the upgrade can be significant and means a longer downtime when upgrading the
         production database. Create a manual backup of the production database and measure its time
         to better estimate the downtime.

   4. For **On Premise** databases:

      a. Measure the time it takes to deploy the test database, update the custom modules and run
         custom upgrade scripts, if any.
      b. Measure the time it takes to create a backup: We advise on creating a backup of the
         database before requesting the production upgrade, especially relevant in large databases.
      c. Measure the time it takes to create the database dump to send to the `upgrade platform
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

Odoo.sh
=======

.. _upgrade/faq/sh_staging_backup:

.. spoiler:: Odoo.sh: On a staging branch, can I manually choose the backup to upgrade?

   No. For **test** upgrades, the platform uses the **latest production daily automatic backup** and
   it's not possible to manually select a manual backup, neither from the production branch or any
   staging branch.

   If modifications done on the production database need to be included on the test upgrade, please
   wait until the new daily automatic backup is generated to request it.

   On the other hand, if modifications need to be done on the database before sending it to the
   Upgrade platform, do them on a separate copy of the database (locally or on a staging branch) and
   use the upload form or the command line to request the test upgraded database. The database
   obtained can then be imported on the staging branch for further testing.

   For the **production** upgrade, the platform creates a new backup on the spot with the most up to
   date data from the production database and sends it to the Upgrade platform.

.. _upgrade/faq/sh_production_fail:

.. spoiler:: Odoo.sh: What happens if the production upgrade fails?

   Similar to what happens when any build fails to load or update the production database, if the
   upgrade fails for any reason (standard upgrade fails, database fails to restore, errors when
   updating custom modules, etc.), the server automatically **reverts to the previous successful
   build**.

   In the case of the upgrade, the platform will restore to the database prior to the upgrade with,
   the revision of the code linked to it. The code that was pushed on the production branch
   to trigger the upgrade is not used when restoring the previous successful build.

   If this happens, check the logs on the failed build for any hints on what went wrong, test the
   fixes and changes in a staging branch (including requesting a new test upgraded database) and
   make sure the staging build does not fail before attempting the prduction upgrade again.

   Once the issue has been fixed, upgrade the production database again. A new commit will be needed
   to trigger it. If no change was done on the custom code to fix the error, push an empty commit.

   If the error happened during the standard upgrade of the database, you can request the assistance
   of Odoo by going to the `Support page and selecting "Upgrade issue (in a test database)"
   <https://www.odoo.com/help?stage=migration>`_.

Odoo Online
===========

.. _upgrade/faq/online_postpone:

.. spoiler:: Odoo Online: Can the Rolling Relase of the database be postponed?

   No, it is not possible to postpone the automatic upgrade of a database.

   Once the deadline mentioned on the notification received in your database has been reached, the
   database can be automatically upgraded at any point and it cannot be postponed.

   If you are experiencing issues or discrepancies in the test upgraded database, please create a
   ticket on the `Support page and selecting "Upgrade issue (in a test database)"
   <https://www.odoo.com/help?stage=migration>`_. As long as there is an open ticket with the
   subscription code linked to it, the automatic upgrade is on hold.

.. _upgrade/faq/online_rollback:

.. spoiler:: Odoo Online: My database was forced upgraded, can you rollback to the old version?

   No, it is not possible to rollback a database once the upgrade has been completed.

   A database upgrade is a permanent data processing operation that alters the structure and
   contents of the database to make it compatible with a new version. Because of this, downgrading
   to a previous version of Odoo is explicitly not covered on the Odoo Enterprise Subscription
   Agreement.

   If you are experiencing issues or discrepancies with your production database following an
   automatic or forced upgrade, reach out to Odoo for assistance by going to the `Support page and
   selecting "Upgrade issue (production)" <https://www.odoo.com/help?stage=post_upgrade>`_.

   .. admonition:: How to avoid surprises next time

      Don’t wait for the automatic upgrade. When a new version becomes available, request an
      upgraded test database from the database manager, test your key business flows, and report any
      issues before you upgrade production.

      Upgrading on your own schedule gives you control over the timing and allows you to prepare
      your users for the transition.

.. _upgrade/faq/online_large_filestore:

.. spoiler:: Odoo Online: Filestore too large

   When dealing with Odoo Online databases that have a large filestore (more than 100 Gb), manual
   intervention by an Odoo agent might be needed to launch the test or production upgrades.

   When this is the case, a message is displayed on the upgrade widget of the database:

   .. image:: odoo-online-large-filestore.png
      :alt: The lasrge filestore "Upgrade" popup on Odoo online.

   .. warning::
      An error message **403 Forbidden: Filestore too large** could also be raised when requesting
      the upgrade.

   If this is blocking your upgrade request, please create a ticket on the `Support page and
   selecting "Upgrade issue (in a test database)" <https://www.odoo.com/help?stage=migration>`_ and
   an agent will contact you and help you trigger the upgrade for testing or production purposes.

   .. note::
      Reducing the size of the database and its filestore can help the upgrade run smoothly and
      avoid intervention from an Odoo agent, allowing you to have control over the upgrade and when
      its triggered.
