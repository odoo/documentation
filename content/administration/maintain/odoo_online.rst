===============================
Odoo Online database management
===============================

To manage a database, sign in to https://www.odoo.com and access the `database management page
<https://www.odoo.com/my/databases>`_ by clicking on the user icon, then on
:guilabel:`My Databases`.

.. image:: odoo_online/my-databases.png
   :align: center
   :alt: Clicking on the user icon opens a drop-down menu. "My databases" button is highlighted.

.. note::
   Make sure to connect as the administrator of the database that changes will be made on.

.. image:: odoo_online/dropdown-menu.png
   :align: right
   :alt: Clicking on the gear icon opens the drop-down menu.

Open the drop-down menu next to the database that changes will be made on by clicking on the gear
icon.

Several actions are available:

- :ref:`odoo_online/upgrade`
- :ref:`odoo_online/duplicate`
- :ref:`odoo_online/rename`
- :ref:`odoo_online/download`
- :ref:`odoo_online/domains`
- :ref:`odoo_online/tags`
- :ref:`odoo_online/delete`
- :ref:`odoo_online/contact-support`
- :ref:`odoo_online/users`

.. _odoo_online/upgrade:

Upgrade
=======

If the database is *not* on the latest **Online version**, the administrator should receive an
invitation to :doc:`upgrade <../upgrade>` the database. A :guilabel:`Rolling Release`` button on the
database's main screen proposes an upgrade to the latest version (e.g., 14.0 to 16.1).

.. important::
   - | **If the Odoo database's version is lower than the latest major release:**
     | The database must be upgraded within two months. After these two months, an automatic
       upgrade is initiated.
   - | **If the Odoo database's version is equal to or higher than the latest major release:**
     | Disregard the invitation to upgrade as the database probably wouldn't benefit from new
       features every two months.

.. note::
   Versions that are not supported anymore become deprecated and need to be updated to avoid
   security issues. Odoo recommends that the company initiate the upgrade, as this method allows for
   the company to request a test upgrade of the database to check for any discrepancies.

.. seealso::
   - :doc:`../upgrade`
   - :doc:`supported_versions`

.. _odoo_online/duplicate:

Duplicate
=========

This allows to make an exact copy of the database to be able to perform testing without compromising
the daily operations.

.. important::
   - By checking :guilabel:`For testing purposes`, all external communication (emails, payments,
     delivery orders, etc.) are disabled by default on the duplicated database.
   - Duplicate databases expire automatically after 15 days.

.. _odoo_online/rename:

Rename
======

Rename the database and its URL.

.. _odoo_online/download:

Download
========

Instantly download a ZIP file with a backup of the database.

.. note::
   Databases are backed up daily according to the `Odoo Cloud SLA
   <https://www.odoo.com/cloud-sla>`_.

.. _odoo_online/domains:

Domains
=======

Configure custom domains to access the database via another URL.

.. seealso::
   - :doc:`domain_names`

.. _odoo_online/tags:

Tags
====

Add tags to sort your databases out. You can search the tags in the search bar.

.. _odoo_online/delete:

Delete
======

Delete a database instantly.

.. danger::
   Deleting a database means that all data is permanently lost. The deletion is instant and for all
   users. It is recommended to create a backup of the database before deleting it.

Carefully read the warning message that pops up and proceed only if the implications of deleting a
database are fully understood:

.. image:: odoo_online/delete.png
   :align: center
   :alt: A warning message is prompted before deleting a database.

.. note::
   - Only an administrator can delete a database.
   - The database name is immediately available for a new database.
   - It is not possible to delete a database if it is expired or linked to a subscription. If
     needed, please get in touch with `Odoo Support <https://www.odoo.com/help>`_.

.. _odoo_online/contact-support:

Contact Support
===============

Access the Odoo `support page <https://www.odoo.com/help>`_ with your database's details already
pre-filled.

.. _odoo_online/users:

Invite / Remove Users
=====================

To invite users, fill out the email address of the new user and click on :guilabel:`Invite`. To add
multiple users, click on :guilabel:`Add more users`.

.. image:: odoo_online/invite-users.png
   :align: center
   :alt: Clicking on "Add more users" adds additional email fields.

To remove users, select the users to remove and click on :guilabel:`Remove`.

.. seealso::
   - :doc:`/applications/general/users/manage_users`
   - :doc:`/applications/general/users/delete_account`
