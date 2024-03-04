========
Unsplash
========

**Unsplash** is a recognized stock photography library integrated with Odoo.

If your database is hosted on **Odoo Online**, you can access Unsplash pictures without
configuration.

If your database is hosted on **Odoo.sh or on-premise**, proceed as follows:

#. To **generate an Unsplash access key**, create or sign in to an `Unsplash account
   <https://unsplash.com>`_.

#. Access your `applications dashboard <https://unsplash.com/oauth/applications>`_, click
   :guilabel:`New Application`, select all checkboxes, and click :guilabel:`Accept terms`.

#. In the pop-up window, enter your :guilabel:`Application Name`, starting with the
   prefix `Odoo:` (e.g., `Odoo: connection`), so Unsplash recognizes it as an Odoo instance. Then,
   add a :guilabel:`Description` and click :guilabel:`Create application`.

#. On the application details page, scroll down to the :guilabel:`Keys` section and copy the
   :guilabel:`Access Key` and :guilabel:`Application ID`.

#. In Odoo, go to :menuselection:`General Settings` and enable the :guilabel:`Unsplash Image
   Library` feature. Then, enter the Unsplash :guilabel:`Access Key` and :guilabel:`Application ID`.

.. warning::
   As a non-Odoo Online user, you are limited to a test key with a maximum of 50 Unsplash requests
   per hour.
