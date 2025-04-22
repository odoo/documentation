=======
Hosting
=======

.. _hosting/change-solution:

Change hosting solution
=======================

The instructions to change the hosting type of a database depend on the current solution used and to
which solution the database should be moved.

Transferring an on-premise database
===================================

To Odoo Online
--------------

.. important::
   - Odoo Online is *not* compatible with **non-standard apps**.
   - The database's current version must be :doc:`supported <supported_versions>`.

#. Create a :ref:`duplicate of the database <on-premise/duplicate>`.
#. In this duplicate, uninstall all **non-standard apps**.
#. Use the database manager to grab a *dump with filestore*.
#. `Create a support ticket <https://www.odoo.com/help-form>`_ including the following:

   - your **subscription number**,
   - the **URL** you want to use for the database (e.g., `company.odoo.com`), and
   - the **dump** as an attachment or as a link to the file (required for 60 MB+ files).

#. Odoo then makes sure the database is compatible before putting it online. In case of technical
   issues during the process, Odoo might contact you.

.. note::
   If you have time constraints, `create a support ticket <https://www.odoo.com/help-form>`_ as soon
   as possible to schedule the transfer.

To Odoo.sh
----------

Follow the instructions found in :ref:`the Import your database section
<odoo_sh_import_your_database>` of the Odoo.sh *Create your project* documentation.

Transferring an Odoo Online database
====================================

.. important::
   Odoo Online's :ref:`intermediary versions <supported_versions>` are not supported by Odoo.sh or
   on-premise. Therefore, if the database to transfer is running an intermediary version, it must be
   upgraded first to the next :ref:`major version <supported_versions>`, waiting for its release if
   necessary.

   .. example::
      Transferring an online database running on Odoo 16.3 would require first upgrading it to Odoo
      17.0.

   .. tip::
      Click the :icon:`fa-gear` (:guilabel:`gear`) button next to the database name on the `Odoo
      Online database manager <https://www.odoo.com/my/databases/>`_ to display its version number.

   .. warning::
      If there is an active Odoo subscription linked to the database being migrated, reach out to
      the Customer Service Manager or `contact Odoo support <https://www.odoo.com/help>`_ to
      complete the subscription transfer.

To on-premise
-------------

#. Download a database backup by signing in to `the Odoo Online database manager
   <https://www.odoo.com/my/databases/>`_, clicking the :icon:`fa-gear` (:guilabel:`gear`) button
   next to the database name, then selecting :icon:`fa-cloud-download` :guilabel:`Download`. If the
   download fails due to the file being too large, `contact Odoo support
   <https://www.odoo.com/help>`_.
#. Restore the database from the database manager on your local server using the backup.

To Odoo.sh
----------

#. Download a database backup by signing in to `the Odoo Online database manager
   <https://www.odoo.com/my/databases/>`_, clicking the :icon:`fa-gear` (:guilabel:`gear`) button
   next to the database name, then selecting :icon:`fa-cloud-download` :guilabel:`Download`. If the
   download fails due to the file being too large, `contact Odoo support
   <https://www.odoo.com/help>`_.
#. Follow the instructions found in :ref:`the Import your database section
   <odoo_sh_import_your_database>` of the Odoo.sh *Create your project* documentation.

Transferring an Odoo.sh database
================================

To Odoo Online
--------------

.. important::
   Odoo Online is *not* compatible with **non-standard apps**.

#. Uninstall all **non-standard apps** in a staging build before doing it in the production build.
#. `Create a support ticket <https://www.odoo.com/help-form>`_ including the following:

   - your **subscription number**,
   - the **URL** you want to use for the database (e.g., `company.odoo.com`),
   - which **branch** should be migrated,
   - in which **region** you want the database to be hosted (Americas, Europe, or Asia),
   - which user(s) will be the **administrator(s)**, and
   - **when** (and in which timezone) you want the database to be up and running.

#. Odoo then makes sure the database is compatible before putting it online. In case of technical
   issues during the process, Odoo might contact you.

.. note::
   - If you have time constraints, `create a support ticket <https://www.odoo.com/help-form>`_ as
     soon as possible to schedule the transfer.
   - Select the **region** closest to most of your users to reduce latency.
   - Future **administrator(s)** must have an Odoo.com account.
   - The **date and time** you want the database to be up and running are helpful to organize the
     switch from the Odoo.sh server to the Odoo Online servers.
   - Databases are **not reachable** during their migration.

To on-premise
-------------

#. Download a :ref:`backup of your Odoo.sh production database <odoo_sh_branches_backups>`.
#. Restore the database from the database manager on your local server using the backup.
