=======================
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

#. Create a :ref:`duplicate <duplicate_premise>` of the database.
#. In this duplicate, uninstall all **non-standard apps**.
#. Use the database manager to grab a *dump with filestore*.
#. `Submit a support ticket <https://www.odoo.com/help>`_ including the following:

   - your **subscription number**,
   - the **URL** you want to use for the database (e.g., `company.odoo.com`), and
   - the **dump** as an attachment or as a link to the file (required for 60 MB+ files).

#. Odoo then makes sure the database is compatible before putting it online. In case of technical
   issues during the process, Odoo might contact you.

.. note::
   If you have time constraints, `submit a support ticket <https://www.odoo.com/help>`_ as soon as
   possible to schedule the transfer.

To Odoo.sh
----------

Follow the instructions found in :ref:`the Import your database section
<odoo_sh_import_your_database>` of the Odoo.sh *Create your project* documentation.

Transferring an Odoo Online database
====================================

.. important::
   Odoo Online's :ref:`intermediary versions <supported_versions>` cannot be hosted on-premise as
   that type of hosting does not support those versions. Therefore, if the database to transfer
   is running an intermediary version, it must be upgraded first to the next :ref:`major version
   <supported_versions>`, waiting for its release if necessary.

   .. example::
      Transferring an online database running on Odoo 16.3 would require first upgrading it to Odoo
      17.0.

   .. tip::
      Click the gear icon (:guilabel:`⚙`) next to the database name on the `Odoo Online database
      manager <https://www.odoo.com/my/databases/>`_ to display its version number.

To on-premise
-------------

#. Sign in to `the Odoo Online database manager <https://www.odoo.com/my/databases/>`_ and click the
   gear icon (:guilabel:`⚙`) next to the database name to :guilabel:`Download` a backup. If the
   download fails due to the file being too large, `contact Odoo support
   <https://www.odoo.com/help>`_.
#. Restore the database from the database manager on your local server using the backup.

To Odoo.sh
----------

#. Sign in to `the Odoo Online database manager <https://www.odoo.com/my/databases/>`_ and click the
   gear icon (:guilabel:`⚙`) next to the database name to :guilabel:`Download` a backup. If the
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
#. `Create a support ticket <https://www.odoo.com/help>`_ including the following:

   - your **subscription number**,
   - the **URL** you want to use for the database (e.g., `company.odoo.com`),
   - which **branch** should be migrated,
   - in which **region** you want the database to be hosted (Americas, Europe, or Asia),
   - which user(s) will be the **administrator(s)**, and
   - **when** (and in which timezone) you want the database to be up and running.

#. Odoo then makes sure the database is compatible before putting it online. In case of technical
   issues during the process, Odoo might contact you.

.. note::
   - If you have time constraints, `submit a support ticket <https://www.odoo.com/help>`_ as soon as
     possible to schedule the transfer.
   - Select the **region** closest to most of your users to reduce latency.
   - Future **administrator(s)** must have an Odoo.com account.
   - The **date and time** you want the database to be up and running are helpful to organize the
     switch from the Odoo.sh server to the Odoo Online servers.
   - Databases are **not reachable** during their migration.

To on-premise
-------------

#. Download a :ref:`backup of your Odoo.sh production database <odoo_sh_branches_backups>`.
#. Restore the database from the database manager on your local server using the backup.
