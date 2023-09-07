===================
The upgrade process
===================

In this section, we will take a deeper look into the technical aspects that take place behind the scene when creating a request for an upgraded duplicated database. We will solely focus on the different steps that your data goes through, while the rest of the smartclass will focus on the aspects of the upgrade in general, from the planning to after the upgrade was applied in production. Even if some steps are done automatically, depending on what type of hosting you are on, we will still describe the process in depth just to give you a better understanding of what is happening behind the scenes. 


.. image:: upgrade_process/schema_upgrade_process.png
    :alt: Upgrade Process Schema
    :align: center

.. note::
    The upgrade process consists of all the actions that are taken on an Odoo database to create a copy of it in a later version of Odoo. It should not be confused with the processus of upgrading your Odoo database in which the upgrade process is one of the many steps, the other steps being the planning of the upgrade, the testing of the upgraded database, the day of the upgrade, etc ... 

.. important::
    During an upgrade, your database will be sent to a specific server managed by Odoo called the Upgrade Server where proprietary code will be executed on the database to upgrade it. This is why some steps consists of uploading/downloading data.

Sending your database to the upgrade server
===========================================

The first step of any upgrade starts by converting the PSQL database, made of tables and records, into either a series of PSQL queries or an archive file. This process, called `dumping`, allows the rows and columns to be moved from one computer to another, in this case from the computer hosting the Odoo database to the Upgrade Server. This is usually done via the command `pg_dump`

Then, the dump is sent to the Upgrade Server where it will be restored and upgraded.

.. seealso::
   - `Documentation of pg_dump <https://www.postgresql.org/docs/current/app-pgdump.html>`_
   - `The Upgrade Server wepage <https://wwww.upgrade.odoo.com>`_
   - :doc:`/upgrade/request`


Upgrading the database on the upgrade server
============================================
When the upgrade server receives your database in the file format, it will begin upgrading the data. First of all, the upgrade server will restore the database received from a file format to a PSQL database using a command such as `pg_restore`.

Before any modifications are applied to the database received, a series of tests will be ran on the database to ensure the integrity and sanity of data and views. If any test fails, the upgrade process will stop. As there is no way to bypass any of those tests, your database will have to comply with them in order for the upgrade process to start. 

.. note::
    Those tests are extremely likely to succeed, as only a very wrong usage of Odoo will yield to one of those tests failing such as modifying the tables or columns of the database directly via PSQL in an unsupported way.

Once all the tests have successfully been executed, the standard upgrade scripts will be ran. This part consists of thousands of migrations scripts being executed one after the other on the database, taking it through all the versions all the way to the targeted version. Those scripts are executed in an order related to their placement in folders and their file name, as we saw it in the section about migration scripts.

.. seealso::
    :doc:`/upgrade/advanced/migration_scripts`

It is possible that a Python exception is raised during the execution of those scripts, in which case you might have to fix the ill-formed data on your production database. Otherwise, if the issue is unrelated to the integrity of your data, you can ask the help of the Upgrade Support Analysts at Odoo (see :ref:`upgrade/test-assistance`)

If all the migration scripts are ran successfully (i.e. no exception is raised) then the tests are ran again to make sure we don't want to return an ill-formed database.

Once the database has passed all of the tests, the standard upgrade will be considered successful 🎉 If your database is running on an unmodified version of Odoo, then the process is complete and the upgraded database can be used as is. Otherwise, you will still have to go through upgrading the custom code and custom data.

Receiving your upgraded database from the upgrade server
========================================================

.. tabs::

   .. group-tab:: Odoo Online

    TODO find the exact steps to receive the database (access my-databases)

   .. group-tab:: Odoo SH

    By using the *Upgrade* tab (see :ref:`Odoo SH <upgrade/request/odoo_sh/overview>`), once the database is upgraded, it will automatically be restored on the branch you selected. Then, the custom scripts will be executed on the database to upgrade the custom code and custom data. Once this is successful, you will be able to test the upgraded database.

   .. group-tab:: On Premise

    TODO find the exact steps to receive the database (receive the DB via email ? )

In any case, now that the standard upgrade process is done, you will be able to receive the upgraded database that the upgrade server made. Depending on your hosting, the steps to receive it can differ but all of the details can be found in :doc:`/upgrade/request`

Optional : executing custom upgrade scripts
===========================================

In the case that your database is running a modified version of Odoo, that is a version with custom modules or custom code, you will still have a little bit work more to do !

Since the various models and fields of Odoo might have changed during the upgrade of the database, you might have to adapt your customization to be compatible with it. Furthermore, if you do some changes to the structure of your custom code, you must not forget to migrate the data. For example if you rename a field in the code, you must also ensure that the corresponding PSQL data is renamed as well. This is usually done with :ref:`migration scripts <upgrade/advanced/migration_scripts>` by using PSQL queries or methods of the util package.