===========
Odoo Online
===========

`Odoo Online <https://www.odoo.com/trial>`_ offers private databases hosted and managed by Odoo.
Odoo Online databases can be accessed using any web browser and do not require a local installation.
They can be used for long-term production or to thoroughly test Odoo, including customizations that
do not require custom code.

.. tip::
   To quickly try out Odoo, shared `demo databases <https://demo.odoo.com>`_ are available for
   testing. No registration is required; however, each database is only available for a few hours.

.. note::
   Odoo Online is incompatible with custom modules or modules from the `Odoo Apps Store
   <https://apps.odoo.com/apps>`_.

.. _odoo-online/database-manager:

Database manager
================

To manage an Odoo Online database, open to the `database manager
<https://www.odoo.com/my/databases>`_ and sign in as the database administrator.

.. _odoo-online/domain-names:

Domain names
------------

:doc:`Configure a custom domain name <../applications/websites/website/configuration/domain_names>`
by selecting a database and clicking :icon:`fa-globe` :guilabel:`Domain Names`.

.. tip::
   :ref:`Register a domain name for free <domain-name/register>`.

.. _odoo-online/tags:

Tags
----

Add tags to identify and sort databases by selecting a database and clicking :icon:`fa-tags`
:guilabel:`Tags`. In the dialog box, enter a tag, click the :icon:`fa-plus-circle`
(:guilabel:`plus`) button, and click :guilabel:`Save`.

.. tip::
   Search for tags in the :icon:`fa-search` search bar at the top right.

.. _odoo-online/hide:

Hide
----

Permanently hide the database from the database manager by selecting it and clicking
:icon:`fa-eye-slash` :guilabel:`Hide`. In the dialog box, click :guilabel:`Yes, I don't need it
anymore`.

.. Note::
   It is possible to access a hidden database through its URL.

.. _odoo-online/manage:

Manage
------

Access all other database management options by selecting it and clicking :icon:`fa-gears`
:guilabel:`Manage`.

Switch plans
~~~~~~~~~~~~

Switch `pricing plans <https://www.odoo.com/pricing>`_ by clicking :guilabel:`Switch` under the
desired plan.

.. _odoo-online/upgrade:

Upgrade
~~~~~~~

Launch a :ref:`database upgrade <upgrade-request-test>` by clicking :guilabel:`Upgrade`.

.. note::
   This option is only displayed when an upgrade is available.

.. _odoo-online/rename:

Rename
~~~~~~

Rename and change the URL of a database by clicking :guilabel:`Rename`. In the dialog box, enter a
:guilabel:`New name` and click :guilabel:`Rename`.

.. _odoo-online/duplicate:

Duplicate
~~~~~~~~~

Create a copy of the database by clicking :guilabel:`Duplicate`. In the dialog box, enter a
:guilabel:`New name` and click :guilabel:`Duplicate`.

.. important::
   - By default, the :guilabel:`For testing purposes` option is enabled. It disables all external
     actions (emails, payments, delivery orders, etc.) on the duplicated database.
   - Duplicates expire after 15 days.
   - A maximum of five duplicates can be created per database. Under extraordinary circumstances,
     contact `Odoo Support <https://www.odoo.com/help>`_ to extend the limit.

.. _odoo-online/download:

Download a backup
~~~~~~~~~~~~~~~~~

Download a ZIP file containing a database backup by clicking :guilabel:`Download Backup`.

.. note::
   - Databases are backed up daily as per the `Odoo Cloud Hosting SLA
     <https://www.odoo.com/cloud-sla>`_.
   - If the :guilabel:`Download Backup` option is disabled, it means the database is too large to be
     downloaded using the database manager. Contact `Odoo Support <https://www.odoo.com/help>`_ to
     request an alternative download solution.

.. _odoo-online/activity-logs:

View admin activity logs
~~~~~~~~~~~~~~~~~~~~~~~~

View the logs of all actions taken by Odoo employees or the database administrator on the database
by clicking :guilabel:`View Admin Activity Logs`.

.. note::
   Actions taken by Odoo employees are typically the result of requests submitted to Odoo support,
   done within the context of a quick start project, or necessary to maintain the database.

.. _odoo-online/transfer-ownership:

Transfer ownership
~~~~~~~~~~~~~~~~~~

Create a support ticket to request a database ownership transfer by clicking :guilabel:`Transfer
Ownership`.

.. _odoo-online/delete:

Delete
~~~~~~

Delete the database and close its related subscription by clicking :guilabel:`Delete`. In the dialog
box, click :guilabel:`Delete`.

.. danger::
   All the database's data will be deleted instaneously for all users and **cannot be restored**. It
   is recommended to :ref:`download a backup <odoo-online/download>` before deleting a database.

.. note::
   After deletion, the database's name becomes available to anyone.

.. _odoo-online/web-services:

Web services
============

To retrieve a list of all databases displayed under the `database manager
<https://www.odoo.com/my/databases>`_ programmatically, call the `list` method of the
`odoo.database` model via an :doc:`external JSON-2 API <../developer/reference/external_api>` call.

.. example::
   .. code:: python

      import requests

      APIKEY = "your_apikey"

      requests.post(
          "https://www.odoo.com/json/2/odoo.database/list",
          headers={
              "Authorization": f"bearer {APIKEY}",
              "X-Odoo-Database": "openerp",
          }
          json={},
      )
