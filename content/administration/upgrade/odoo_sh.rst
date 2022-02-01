
=======
Odoo.sh
=======

Test upgrade request
====================

Download a dump of your database (from the :ref:`Builds view
<odoosh-gettingstarted-builds-download-dump>`), choose the **exact copy** and **without filestore**
options. Upload the .sql.gz dump on https://upgrade.odoo.com/upload and select the testing purpose.
Once it's processed, you'll get a dump of the database in return.

.. important::
   To have the most up-to-date test version of your database, create a backup of your production
   database just before creating your request. Upload it in your staging branch, select **Exact
   dump** and **Without filestore**, and then click *start*.

Test your upgraded database
===========================

At the beginning of your upgrade project, make sure that you create a new staging branch for testing
purposes by forking your main branch.

Once the staging build is complete (it doesn't matter if it failed due to the version
incompatibility), import your upgraded dump in the *Backups* tab of the branch.

.. note::
   The platform automatically detects the version of the dump and changes the version of Odoo's
   source code to the corresponding version of the build.

Test the upgraded database and make sure everything runs as it's supposed to.

Upgrade your production database
================================

Once you've tested everything and you're satisfied, start the process over to get an up-to-date
upgraded dump:

* Make a new dump of your production database (as described in step 1)
* Upload it on upgrade.odoo.com and select the Production purpose
* Receive the newly upgraded dump and import it in your production branch. The build might get
  marked as failed because the platform will run it with the upgraded databases' Odoo version
  together with the old custom code.
* Merge or commit the upgraded custom code in the production branch

If anything goes wrong, remember you can restore a backup. The platform will always make one before
you make any Odoo.sh operation on the production database. If the restored backup comes from a
previous version, the platform will detect it and change the project's Odoo version back if it needs
to.

Custom modules (if applicable)
==============================

The upgrade of a database that contains custom modules is a 2 step process.

#. The standard upgrade is done when your upgrade request is completed.
#. Your custom modules also need to be upgraded to keep them compatible with the new version.

Depending on your contract, the upgrade of your custom modules can be done
- by yourself
- by your Partner
- by Odoo (if you hold a subscription to 'Maintenance of Customizations')

.. seealso::
   - :ref:`upgrade/sla`
