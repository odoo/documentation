:banner: banners/odoo-sh.jpg

=====================
Upgrade your database
=====================

.. _odoosh-advanced-upgrade_your_database:

1. Upload your database
-----------------------

Download a dump of your database (from the :ref:`Builds view <odoosh-gettingstarted-builds>`) and upload it on
https://upgrade.odoo.com/database/upload and select the Testing Purpose. If you have custom code, you can choose to
have it upgraded by us, or do it yourself. Once it's processed, you'll get a dump of the database in return.

2. Test your upgraded database
------------------------------

Create a staging branch that will run the upgraded database. Either make sure your production branch's code is
compatible between the two Odoo versions and fork your production branch, or make a new staging branch containing
the upgraded code.

Once the staging build is done (doesn't matter if it failed), import your upgraded dump in the backups tab of the
branch. The platform will automatically detect the version of the dump and change the version of Odoo's source code to
the corresponding version for the build.

Test the upgraded database and make sure everything runs as it's supposed to.

3. Replace your existing production database
--------------------------------------------

Once you've tested everything and you're satisfied, start the process over to get an up-to-date upgraded dump:

* Make a new dump of your production database
* Upload it on upgrade.odoo.com and select the Production purpose
* Make sure your production branch is compatible with the newer version of Odoo. You can swap the production branch
  with the staging branch from your tests by first putting the production branch to development.
* Import the newly upgraded dump in your production branch. The platform will automatically detect the version change
  and your whole project will switch version. (This means the default Odoo version will change for all your branches.)

If anything goes wrong, remember you can restore a backup. The platform will always make one before you make any
Odoo.sh operation on the production database. If the restored backup comes from a previous version, the platform will
detect it and change the project's Odoo version back if it needs to.
