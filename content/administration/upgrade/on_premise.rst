==========
On-Premise
==========

Test upgrade request
====================

There are two ways to create your upgrade request.

Upgrade request via command line
--------------------------------

For technically-advanced users and partners, the upgrade process can be initiated via the following
command line on the server where the database is hosted:

:command:`python <(curl -s https://upgrade.odoo.com/upgrade) test -d <your db name> -t
<target version>`

The above command creates the database dump, sends it to the upgrade platform, and initiates the
automated upgrade process. During the upgrade, you can follow the live logs on your screen.
Once the upgrade process is completed successfully, the upgraded database is restored onto the
server (as a duplicate test database).

Upgrade request via the Odoo Upgrade Portal
-------------------------------------------

#. Download a recent copy of your database and select the option :guilabel:`pg_dump custom format
   (without filestore)`.
#. Upload this dump file at https://upgrade.odoo.com and select *Testing* as the aim.
   Odoo performs the automated upgrade process. Once it is completed, you receive an email with a
   link to download the upgrade database dump file.
#. Import the upgraded database into your on-premise environment and manually test all processes and
   workflows.

.. note::
   - For security reasons, only the person who submitted the upgrade request is able to download it.
   - Any problem found during testing should be reported via the `helpdesk
     <https://odoo.com/help>`_.

Upgrade your production database
================================

Once you have completed the testing successfully, you can proceed to upgrade your live database in
production. Download your upgraded database from the link in the email and import it onto your live
environment.

Custom modules (if applicable)
==============================

The upgrade of a database that contains custom modules is a two-step process.

#. The standard upgrade is done when your upgrade request is completed.
#. Your custom modules also need to be upgraded to keep them compatible with the new version.

Depending on your contract, the upgrade of your custom modules can be done

#. by yourself.
#. by your Partner.
#. by Odoo (if you hold a subscription to 'Maintenance of Customizations').