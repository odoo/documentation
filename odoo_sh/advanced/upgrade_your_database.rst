:banner: banners/odoo-sh.jpg

=====================
Upgrade your database
=====================

.. _odoosh-advanced-upgrade_your_database:

1. Download and Upload your database
------------------------------------

Download a dump of your database (from the :ref:`Builds view <odoosh-gettingstarted-builds-download-dump>`), choose the
exact copy and without filestore options. Upload the .sql.gz dump on https://upgrade.odoo.com/database/upload and
select the Testing Purpose. If you have custom code, you can choose to have it upgraded by us, or do it yourself. Once
it's processed, you'll get a dump of the database in return.

.. Warning::

    Do *not* upload *backups* of your production database (found in the Backups tab of the production branch) as these are incompatible with the Upgrade platform - they contain your complete sources, etc. that are not needed for the upgrade. Make sure to download a **Dump** instead - either through the Backups tab using the *Download Dump* button or through the Builds page by using the *Download Dump* entry of the contextual menu of your latest production build.

2. Test your upgraded database
------------------------------

Create a staging branch that will run the upgraded database. Either make sure your production branch's code is
compatible between the two Odoo versions and fork your production branch, or make a new staging branch containing
the upgraded code.

Once the staging build is done (it doesn't matter if it failed due to the version incompatibility), import your
upgraded dump in the backups tab of the branch. The platform will automatically detect the version of the dump and
change the version of Odoo's source code to the corresponding version for the build.

Test the upgraded database and make sure everything runs as it's supposed to.

3. Replace your existing production database
--------------------------------------------

Once you've tested everything and you're satisfied, start the process over to get an up-to-date upgraded dump:

* Make a new dump of your production database (as described in step 1)
* Upload it on upgrade.odoo.com and select the Production purpose
* Receive the newly upgraded dump and import it in your production branch. The build might get marked as failed because
  the platform will run it with the upgraded databases' Odoo version together with the old custom code.
* Merge or commit the upgraded custom code in the production branch

If anything goes wrong, remember you can restore a backup. The platform will always make one before you make any
Odoo.sh operation on the production database. If the restored backup comes from a previous version, the platform will
detect it and change the project's Odoo version back if it needs to.
