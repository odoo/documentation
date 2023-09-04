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
   - For storage reasons, the copy of your database is submitted without a filestore to the upgrade
     server. Therefore, the upgraded database does not contain the production filestore.
   - Before restoring the upgraded database, its filestore must be merged with the production
     filestore to be able to perform tests in the same conditions as it would be in the new version.
   - The upgraded database contains:

      - A `dump.sql` file containing the upgraded database.
      - A `filestore` folder containing files that were extracted from in-database records into
        attachments (if there are any) and new standard Odoo files from the targeted Odoo version
        (like new images, icons, payment provider's logos, etc.). This is the folder that should be
        merged with the production filestore in order to get the full upgraded filestore.

Upgrade your production database
================================

Once you have completed the testing successfully, you can proceed to upgrade your live database in
production. Download your upgraded database from the link in the email and import it onto your live
environment.

.. important::
   - Same as in the test phase, when requesting an upgrade for production purposes, the copy of your
     database is submitted without a filestore.
   - Therefore, the upgraded database filestore must be merged with the production filestore before
     deploying the new version.

Custom modules (if applicable)
==============================

The upgrade of a database that contains custom modules is a two-step process.

#. The standard upgrade is done when your upgrade request is completed.
#. Your custom modules also need to be upgraded to keep them compatible with the new version.

Depending on your contract, the upgrade of your custom modules can be done

#. by yourself.
#. by your Partner.
#. by Odoo (if you hold a subscription to 'Maintenance of Customizations').
