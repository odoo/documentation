:banner: banners/odoo-sh.jpg

==================================
Branches
==================================

Overview
========

The branches view gives you an overview of the different branches your repository has.

.. image:: ./media/interface-branches.png
   :align: center

Stages
===============

Odoo.sh offers three different stages for your branches: production, staging and development.

You can change the stage of a branch by drag and dropping it on the stage section title.

.. image:: ./media/interface-branches-stagechange.png
   :align: center

Production
----------
This is the branch holding the code on which your production database run.
There can be only one production branch.

When you push a new commit in this branch,
your production server is updated with the code of the new revision and is then restarted.

If your changes require the update of a module, such as for a change in a form view,
and you want it to be performed automatically,
increase the version number of the module in its manifest (*__manifest__.py*).
The platform will then take care to perform the update.

In the case the changes in the commit prevent the server to restart,
or the modules update fails,
the server is automatically reverted to the previous successful code revision and
the database is roll-backed as it was before the update.
You nevertheless have access to the logs of the failed updates so you can analyze what happened.

The demo data is not loaded, as it is not meant to be used in a production database.
The unit tests are not performed, as it would increase the unavailabity time of the production database during the updates.

Staging
-------
Staging branches are meant to test your new features using the production data.

When you push a new commit in one of these branches,
a new server is started, using a duplicate of the production database and the new revision of the branch.

You can therefore test your latest features using the production data without compromising the actual
production database with test records.

The outgoing emails are not sent: They are intercepted by the mailcatcher,
which provides an interface to preview the emails sent by your database.
That way, you do not have to worry about sending test emails to your contacts.

Scheduled actions are disabled. If you want to test them, you have to enable them or trigger their action manually.
Be careful though: If these actions perform changes on third-party services (FTP servers, email servers, ...)
used by your production database as well,
you might make unwanted changes in your production.

The databases created for staging branches are meant to live at least two weeks.
After that, they can be garbage collected automatically.
If you make configuration changes or view changes in these branches, make sure to document them or write them directly
in the modules of the branch, using XML data files overriding the default configuration or views.

The unit tests are not performed as, in Odoo, they currently relies on the demo data, which are not loaded in the
production database. In the future, if Odoo supports to run the unit tests without the demo data,
Odoo.sh will then consider running the tests on staging databases.


Development
-----------
Development branches creates new databases using the demo data and running the unit tests.
The modules installed and tested by default are the ones included in your branches.
You can change this list of modules to install in your projects settings.

When you push a new commit in one of these branches,
a new server is started, with a database created from scratch and the new revision of the branch.
The demo data is loaded, and the unit tests are performed.

You can therefore verify your changes do not break any of the unit tests,
and therefore any of the features tested thanks to them.

As for staging branches, the emails are not sent: They are intercepted by the mailcatcher.

The databases created for development branches are meant to live at least three days.
After that, they can be garbage collected automatically.

Merging your branches
---------------------
You can merge your branches easily by drag and dropping them on each other.

.. image:: ./media/interface-branches-merge.png
   :align: center

When you want to test the changes of your development branches with the production data,
you can either:

* merge the development branch into your staging branch, by drag and dropping it onto the desired staging branch,
* drag and dropping the development branch on the staging section title, to make it become a staging branch.

When your latest changes are ready for production,
you can drag and drop your staging branch onto your production branch
to merge and deploy in production your newest revisions.

If you are bold enough,
you can merge your development branches into your production branch as well.
It just means you skip the validation of your changes with the production data through a staging branch.

You can merge your development branches into each other, and your staging branches into each other.

Of course, you can also use git directly to merge your branches.
Odoo.sh will be notified new revisions have been pushed in your branches.

Merging a staging branch in the production branch only merges the source code: Any configuration changes you made in the
staging databases are not passed to the production database.

If you test configuration changes in staging branches, and want them to be applied in the production, you have to:
* Either, write the configuration changes in XML data files
overriding the default configuration or views in your branches,
and then increase the version of your module in its manifest (*__manifest__.py*) to trigger the update of the module
when you merge your staging branch in your production branch.
This is the best practice for a better scalability of your developments as you will use the git versionning features
for all your configuration changes, and therefore have a traceability for your changes.
* Either, pass them manually from your staging to your production database, by copy/pasting them.

Tabs
=============

History
-------
An overview of your branch history:

* The messages of the commits and their authors,
* The various events linked to the platform, such as stage changes, database imports, backup restores.

.. image:: ./media/interface-branches-history.png
   :align: center

For each event, a status is displayed in the above right corner.
It can provide information about the ongoing operation on the database (installation, update, backup import, ...),
or its result (tests feedback, successful backup import, ...).
When an operation is successful, you also got
the possibility to access the database thanks to the *connect* button.

Mails
-----
A preview of the emails sent by your database. This is available only for your development and staging branches,
as the emails of your production database are really sent instead of being intercepted.

.. image:: ./media/interface-branches-mails.png
   :align: center
   :scale: 50%

Shell
-----
A shell access to your container. You can perform basic linux command (:kbd:`ls`, :kbd:`top`)
and open a shell on your database by typing :kbd:`psql`.

.. image:: ./media/interface-branches-shell.png
   :align: center

Logs
----
A viewer to have a look to your server logs.

.. image:: ./media/interface-branches-logs.png
   :align: center

Different logs are available:

* install.log: The logs of the database installation. In a development branch, the logs of the tests is included.
* pip.log: The logs of the Python dependencies installation.
* odoo.log: The logs of the running server.
* update.log: The logs of the database updates. This is available only for the production database.

If new lines are added in the logs, they will be displayed automatically.
If you scroll to the bottom, the browser will scroll automatically each time a new line is added.

You can pause the logs fetching by clicking on the according button in the upper right corner of the view.
The fetching is automatically stopped after 5 minutes. You can restart it using the play button.

Backups
-------
A list of the backups available for download and restore, as well as the possibility to import a database.

.. image:: ./media/interface-branches-backups.png
   :align: center

Odoo.sh keeps backups for production databases: 7 daily, 4 weekly and 3 monthly.
Staging databases and development databases are not backuped.
You nevertheless have the possibility to restore a backup of the production database on your staging databases, for
testing purposes, or to manually recover data that has been deleted unexpectedly from the production database.

The list contains the backups kept on the server your production database is hosted on.
This server only keeps one month of backups: 7 daily and 4 weekly backups.

Dedicated backups servers keep the same backups, as well as 3 additional monthly backups.
To restore or download one of these monthly backups, please `contact us <https://www.odoo.com/help>`_.

The *import database* feature accepts database archives in the format provided by the standard Odoo database manager
(available for on-premise Odoo servers under :kbd:`/web/database/manager`)
or by the Odoo.sh backup download feature.

Git commands
============
In the above right of the view, different git commands are available.

.. image:: ./media/interface-branches-gitcommands.png
   :align: center

Each can be copied in the clipboard to be used in a terminal,
and some can be used directly from Odoo.sh by clicking the *run* button.

Clone
-----
Download the git repository.

.. code-block:: bash

  $ git clone --recurse-submodules --branch master git@github.com:odoo/odoo.git

Clones the repository *odoo/odoo*.

* :kbd:`--recurse-submodules`: Downloads the submodules of your repository. Submodules included in the submodules are downloaded as well.
* :kbd:`--branch`: checks out a specific branch of the repository, in this case *master*.

The *run* button is not available for this command, as it is meant to be used on your machines.

Fork
----
Creates a new branch based on the current branch.

.. code-block:: bash

  $ git checkout -b feature-1 master

Creates a new branch called *feature-1* based on the branch *master*, and then checkouts it.

.. code-block:: bash

  $ git push -u origin feature-1

Uploads the new branch *feature-1* on your remote repository.

Merge
-----
Merge the current branch in another branch.

.. code-block:: bash

  $ git merge staging-1

Merges the branch *staging-1* in the current branch.

.. code-block:: bash

  $ git push -u origin master

Uploads the changes you just added in the *master* branch on your remote repository.

Submodule
---------

Add a branch from another repository in your current branch as a *submodule*.

*Submodules* allows you to use modules from other repositories in your project.
The `git-scm documentation about submodules <https://git-scm.com/book/en/v2/Git-Tools-Submodules>`_ can help you to know
more about *submodules*.

.. code-block:: bash

  $ git submodule add -b master <URL> <PATH>

Adds the branch *master* of the repository *<URL>* as a submodule under the path *<PATH>* in your current branch.

.. code-block:: bash

  $ git commit -a

Commits all your current changes.

.. code-block:: bash

  $ git push -u origin master

Uploads the changes you just added in the *master* branch on your remote repository.

If you add private repositories as submodules in your branches,
you need to configure a deploy key in your Odoo.sh project settings and in your repository settings.
Otherwise Odoo.sh won't be allowed to download them.

Delete
------

Delete a branch from your repository.

.. code-block:: bash

  $ git push origin :master

Deletes the branch in your remote repository.

.. code-block:: bash

  $ git branch -D master

Deletes the branch in your local copy of the repository.
