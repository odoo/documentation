:nosearch:
:show-content:
:hide-page-toc:
:show-toc:


.. |assistance-contact| replace::
   If you need Odoo assistance on this matter, please get in touch with your Odoo Account Manager or
   our `Sales department`_.
.. _Sales department: mailto:sales@odoo.com

=======================
Introduction to Upgrade
=======================

What is an Upgrade ?
--------------------

In Odoo, an upgrade is the process of moving your database from an older version of Odoo to a newer, supported version. Each new version of Odoo comes with new features, bug fixes, security patches, and improvements. Depending on your hosting type and the size of the database, the upgrade process can be very straightforward and be done automatically, or require some assistance from our Upgrade department.

.. important::
   Odoo only supports the three last major versions of Odoo, as well as the latest minor version of Odoo. See :doc:`/administration/maintain/supported_versions` for more information.

   However, it is always possible to upgrade from any version of Odoo to a supported version.

Here are a few examples of supported upgrades:

* Odoo 12 to Odoo 15
* Odoo 8 to Odoo 16
* TinyERP 4.0 to Odoo 17

An upgrade does not cover:

* Downgrading to a previous version of Odoo (i.e., Odoo 15 to Odoo 12)
* Changing :ref:`editions <upgrade-faq/editions-change>` (i.e., Community to Enterprise edition)
* Switching :ref:`hosting type <upgrade-faq/hosting-types-switch>` (i.e., On-Premise to Odoo Online
  or Odoo.sh)
* Migration from another ERP to Odoo

.. note:: |assistance-contact|

TODO remove those 2 following introductory paragraphs ?

Let's say you are digging into the files on your very old computer and you stumble onto a personal Microsoft Word document from years ago. You feel very nostalgic and try to open the file when suddenly **ERROR**, the file cannot be read ! Indeed, this file was written with the program Microsoft Word 2007 and we are now years later trying to open with Microsoft Word 2022, a lot of things changed between those 2 versions and,therefore, files written with the old version are not accessible with the newer version of the program, what a shame for your nostalgia !

Since there are also version changes in Odoo, databases developed and used in Odoo 12 might not be compatible when running them on a Odoo 16 server. However, thanks to our incredible framework, version changes comes with their additional lines of code specifically written to translate the data from the previous version to the next one. This means that for a huge proportion of our users, changing version is as simple as the click of a button, because all the changes between versions are known, and therefore are taking into consideration during the Upgrade process.

Factors influencing the complexity of the upgrade
-------------------------------------------------

For most databases, the upgrade process is actually very straightforward and can be done by the database administrator at any time (see :doc:`/upgrade/request`). However, for more complex databases such as those with a lot of custom modules or a lot of data, the upgrade should be executed in collaboration with the Upgrade department.

This is because with each changes in the standard of Odoo, any customization (Modified reports, web pages, custom views, custom code, ... ) might be impacted by the upgrade and could potentially not work anymore. Therefore, the more customization you have, the more likely your upgrade will require :ref:`Assistance <upgrade/test-assistance>` from the Upgrade department.

Let's view an example by comparing screenshots from different two different versions of Odoo : Odoo 14 and Odoo 16.

.. image:: introduction/so_odoo_14.png
   :width: 49%
   :alt: Odoo 14

.. image:: introduction/so_odoo_16.png
   :width: 49%
   :alt: Odoo 16

Apart from the fonts used and the spacing between fields, we notice a few things :

- Field 'Referrer' moved from below 'Quotation template' to below 'Customer'
- A new field named 'Recurrence' appears on the right, below 'Order Date'


Those changes might not be important to end user but for programmers developing a module, the code written is often based on the current layout of the pages, and on the current fields present. Therefore if a new field was created and placed under the field 'Referrer', since 'Referrer' changed position, our new field would followed it.

.. important::
   Changes between version of the standard code of Odoo might impact your custom instance of Odoo

Now, this example highlight a very minor change, as nothing is deleted, but this is not always the case between 2 versions. Sometimes, fields are renamed or removed entirely from the database, whole modules are changed, models are renamed, etc ...  Thankfully the standard code of Odoo is written in a way that it will automatically move the data from the old field to the new one, but this is not the case for cuztomisations

In those situations, running the newest version of Odoo on an older database will probably result in issues when navigating your database, such as error messages, data loss, data showing incorrectly, values wrongly computed, and many more. Therefore, the intervention of a developer will be required for your upgrade to be successful.


Why upgrading ?
---------------

TODO make the link between two bullet points and the two paragraphs below more natural

* You benefit from the latest features of the :ref:`new major version <upgrade-faq/release-notes>` released by Odoo.
* If you are in an :doc:`unsupported version </administration/maintain/supported_versions>`, you get a new version with support.

Please note that Odoo provides support and bug fixing only for the three last major versions of Odoo.

This is a factor to take into consideration before upgrading. If you are on an older version, we suggest you to prefer the most recent version to benefit from longer support (before having to upgrade again).

.. seealso::
   :doc:`/administration/maintain/supported_versions`

.. _upgrade/process-workflow:

Upgrade in a nutshell
---------------------

TODO merge the summary of AVG from knowledge with this

#. You create a test upgrade request.
#. Odoo processes the request automatically by running the database through an upgrade script, which
   takes between 20 and 120 minutes.
#. Odoo delivers a test database.
#. You test your database for possible discrepancies (see :ref:`upgrade/testing-phase`).
#. If there are any discrepancies, you report them to the Upgrade support team via the help portal
   (see :ref:`upgrade/test-assistance`).
#. We fix the issues and send you a new test database.
#. Once you have completed the testing and are happy with the result, you decide on a date and time
   when you stop users from accessing Odoo, freeze all data entries, and create an upgrade request
   for the production upgrade.
#. Odoo delivers the production database through the automated process.
#. You restore it in your Production environment a few short hours later and continue working on the
   newly upgraded database (this is done automatically on Odoo Online).

.. seealso::
   - :doc:`Upgrade process for Odoo Online <../upgrade/request/odoo_online>`
   - :doc:`Upgrade process for Odoo.sh <../upgrade/request/odoo_sh>`
   - :doc:`Upgrade process for On-Premise <../upgrade/request/on_premise>`

