=====
Setup
=====

In this chapter, you will learn:

- To set up your local development environment.
- The outline of the Odoo database structure.
- To export and import an Odoo database in your local environment.
- To have an Odoo instance up and running.

Install
=======

There are multiple ways to :doc:`install Odoo <../../../administration/install/install>`, depending on the intended use case. This documentation
assumes you use the :ref:`source install <setup/install/source>` (running Odoo from the source code), which is best suited
for Odoo designers and developers.

Databases
=========

Structure
---------

Every Odoo application works similarly; they are built with the same logic. A model contains fields
and relational fields that link to other models. Each model has views representing all its fields,
with backend and frontend views.

Models
~~~~~~

The basis of Odoo is models. Models use fields to record the data. Records are stored in a database:
they are therefore linked to a model. In Odoo, you can find the different models in the
backend by enabling the :ref:`developer mode <developer-mode>` and then going to
:menuselection:`Settings --> Technical --> Database Structure: Models`.

.. image:: setup/models-page.png
   :alt: Models page

Fields
~~~~~~

In a model, we will centralize fields (field names we need to target in our code).

.. seealso::
   :doc:`/applications/productivity/studio/fields`

Classic fields
**************

- Date
- Char
- Selection
- …

Relational fields
*****************

Relational fields call a field from another model. They allow you to link models together and make
them interact easily. In other words, when you use a relational field, you link a record with
another one (located on another model), enabling you to retrieve the content of the fields located
on this linked record.

- **Many2one** fields are filled in by choosing one record from a list of records on another model
  (from *many* records, you select *one*). For example, the *customer* field on a quotation makes
  you choose one customer from a list of several customers on the *contact* model.
- **One2many** fields are reverse searches of existing many2one relations. For example, you could
  list on a contact all their existing quotations (from *one* record, you display *many*).
- **Many2many** fields are filled in by choosing one or several records from a list of records on
  another model. For example, you can put several tags on one product, and several products can use
  the same tags (from *many* records, you can select *many*).

Views
~~~~~

Views define how records should be displayed to end-users. They are specified in XML, meaning they
can be edited independently from the models they represent. They are flexible and allow deep
customization of the screens they control.

Backend vs. Frontend
********************

- **Backend views**: Kanban, List, Form, etc.
- **Frontend view**: QWeb

Static vs. Dynamic
******************

- **Static pages** have stable content, such as the homepage. You can define their URL and set some
  properties like published, indexed, etc.
- **Dynamic pages** are dynamically generated, such as the product page. Their URL is dynamic
  and is accessible to all by default (this can be changed by configuring access rights).

Standard vs. Inherited
**********************

- **Standard views** are base views implemented by Odoo. They are directly derived from their model.
  You should never change them as they allow updating an Odoo database without overwriting a
  client's modifications.
- **Inherited views** are duplicated views. Modifications always take place in an inherited view. If
  there is a duplicate view, there will be two views with the same name in the database, but the
  duplicated view will not have an ID like for standard view.

Import an existing database
---------------------------

.. note::
   You can directly go to the :doc:`theming` chapter if you do not need to import an existing
   database.

Dump
~~~~

Odoo SaaS
*********

Go to `<database_url>/saas_worker/dump`.

Odoo.sh
*******

#. Connect to Odoo.sh.
#. Select the branch you want to back up.
#. Choose the :guilabel:`BACKUPS` tab.
#. Click the :guilabel:`Create Backup` button.
#. When the process is over, a notification appears. Open it and click the :guilabel:`Go to Backup`
   button.
#. Click the :guilabel:`Download` icon. Select :guilabel:`Testing` under
   :guilabel:`Purpose` and :guilabel:`With filestore` under :guilabel:`Filestore`.

   .. image:: setup/download-backup.png
     :alt: Download backup

#. You will receive a notification when the dump is ready to be downloaded. Open it and click on
   :guilabel:`Download` to get your dump.

   .. image:: setup/database-backup.png
     :alt: Database backup

Move filestore
~~~~~~~~~~~~~~

Copy all the folders included in the filestore folder and paste them to the following location on
your computer:

- macOS: `/Users/<User>/Library/Application Support/Odoo/filestore/<database_name>`
- Linux: `/home/<User>/.local/share/Odoo/filestore/<database_name>`

.. note::
   `/Library` is a hidden folder.

Database setup
~~~~~~~~~~~~~~

Create an empty database.

.. code-block:: xml

   createdb <database_name>

Import the SQL file in the database that you just created.

.. code-block:: xml

   psql <database_name> < dump.sql

Reset the admin user password.

.. code-block:: xml

   psql \c
   <database_name>
   update res_users set login='admin', password='admin' where id=2;

Getting started
===============

Running Odoo
------------

Once all dependencies are set up, Odoo can be launched by running `odoo-bin`, the command-line
interface of the server. It is located at the root of the Odoo Community directory.

- :ref:`Windows <setup/install/source/windows/running_odoo>`
- :ref:`Linux <setup/install/source/linux/running_odoo>`
- :ref:`Mac OS <setup/install/source/mac_os/running_odoo>`
- `Docker <https://hub.docker.com/_/odoo/>`_

To configure the server, you can specify command-line arguments or a configuration file. The first
method is presented below.

The :ref:`CLI <reference/cmdline>` offers several functionalities related to Odoo. You can use it to
:ref:`run the server <reference/cmdline/server>`, scaffold an Odoo theme, populate a database, or
count the number of lines of code.

Shell script
------------

A typical way to :ref:`run the server <reference/cmdline/server>` would be to add all command line arguments to a `.sh` script.

.. example::
   .. code-block:: xml

      ./odoo-bin --addons-path=../enterprise,addons --db-filter=<database> -d <database> --without-demo=all -i website --dev=xml

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Folder
     - Description
   * - :option:`--addons-path <odoo-bin --addons-path>`
     - Comma-separated list of directories in which modules are stored. These directories are
       scanned for modules.
   * - :option:`-d <odoo-bin --database>`

       :option:`--database <odoo-bin --database>`
     - database(s) used when installing or updating modules.
   * - :option:`--db-filter <odoo-bin --db-filter>`
     - Hides databases that do not match the filter.
   * - :option:`-i <odoo-bin --init>`

       :option:`--init <odoo-bin --init>`
     - Comma-separated list of modules to install before running the server. (requires `-d`)
   * - :option:`-u <odoo-bin --update>`

       :option:`--update <odoo-bin --update>`
     - Comma-separated list of modules to update before running the server. (requires `-d`)
   * - :option:`--without-demo <odoo-bin --without-demo>`
     - Disables demo data loading for modules installed comma-separated; use `all` for all modules.
       (requires `-d` and `-i`)
   * - :option:`--dev <odoo-bin --dev>`
     - Comma-separated list of features. For development purposes only. :ref:`More info
       <reference/cmdline/dev>`

Sign in
-------

After the server has started (the INFO log `odoo.modules.loading: Modules loaded.` is printed), open
http://localhost:8069 in your web browser and log in with the base administrator account.

Type **admin** for the email and **admin** for the password.

.. image:: setup/welcome-homepage.png
   :alt: Welcome homepage

.. tip::
   Hit *CTRL+C* to stop the server. Do it twice if needed.

Developer mode
--------------

The developer mode, also known as debug mode, is useful for development as it gives access to
additional tools. In the next chapters, it is assumed that you have enabled the developer mode.

.. seealso::
   :doc:`/applications/general/developer_mode`
