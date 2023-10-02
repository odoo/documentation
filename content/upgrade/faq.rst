.. |assistance-contact| replace::
   If you need Odoo assistance on this matter, please get in touch with your Odoo Account Manager or our `Sales department`_.
.. _Sales department: mailto:sales@odoo.com

===
FAQ
===

TODO merge FAQ into sections

.. _upgrade-faq/when:

When should I upgrade ?
=======================

Whenever you want. You can make your upgrade request as soon as a new version is released or when
your version turns unsupported, and you still wish to enjoy support.

.. _upgrade-faq/availability:

When can I upgrade to a the newly released version?
===================================================

As soon as Odoo announces the release of a new major version, you can create a test upgrade request
to try the latest version. Please note that at this point, the upgrade scripts will only have been
tested with demo data. Please report any issue you might encounter while testing via the `Odoo
Support page <https://www.odoo.com/help>`_ and make sure to be happy with your test version before
requesting the upgrade of your database in production.

.. _upgrade-faq/duration:

How long does it take to upgrade my database?
=============================================

It is impossible to give time estimates for every upgrade request. However, it is heavily correlated to the size of the database, the number of installed apps, and the amount of users. The more data you have, the longer it will take to upgrade.

For example, a single-user database that only uses CRM will be processed faster than a multi-company, multi-user database that uses Accounting, Sales, Purchase, and Manufacturing.

In a nutshell, the lead time of your upgrade can be impacted by the following aspects:

* Source & targeted versions
* Installed apps
* Volume of data
* Amount of customization (models, fields, methods, workflows, reports, website, etc.)
* Installation of new apps or configuration changes after the start of the test phase
* Users and database administrator commitment

You can expect the time it takes for the platform to upgrade the test database to be similar to the
production upgrade.

.. _upgrade-faq/project:

What is the time frame for an upgrade project?
----------------------------------------------

It depends on the user involvement (the time spent on testing, reporting problems, etc.) and the
issues encountered that might need to be addressed by our technical team.

.. _upgrade-faq/custom-modules:

Who will I upgrade my custom modules?
=====================================

The responsible for the maintenance of your custom modules should be responsible for the upgrade of your custom modules. If you have a contract with Odoo for the maintenance of your custom modules as stated in our :doc:`/legal/terms/enterprise`, section :ref:`charges_standard`, we will upgrade your custom modules as covered by your contract.

If you do not have a contract with Odoo for the maintenance of your custom modules, you can either upgrade them yourself or ask Odoo to do it for you. In this case, you will be charged for the time spent by our developers to upgrade your custom modules.

Finally, if an Odoo partner developed your custom modules, you should contact them to upgrade your custom modules.

.. note:: |assistance-contact|

.. _upgrade-faq/upgrade-or-migration:

What is the difference between an upgrade and a migration?
==========================================================

An upgrade is switching to a newer version of Odoo, while a migration reflects the change of
:ref:`editions <upgrade-faq/editions-change>` or change of :ref:`hosting type
<upgrade-faq/hosting-types-switch>`.

.. note:: |assistance-contact|

.. _upgrade-faq/editions-change:

Why do I get an Enterprise edition after my upgrade?
====================================================

The upgrade always returns an Enterprise edition of Odoo, whether the database you sent was a community or enterprise edition since it is required to have an enterprise subscription to upgrade.

.. note::
   If you need assistance on this matter,  please contact us via the `Odoo Support page <https://www.odoo.com/help>`_.

.. seealso::
   - `Editions <https://www.odoo.com/page/editions>`_

.. _upgrade-faq/hosting-types-switch:

How can I change my hosting type (On-premise vs. Odoo Online vs. Odoo.sh) ?
===========================================================================

An upgrade does not cover a change of `Hosting types <https://www.odoo.com/page/hosting-types>`_.

You can find more information about how to change your hosting type  :doc:`here </administration/maintain/hosting_changes>`.

.. note:: |assistance-contact|

.. _upgrade-faq/upgrade-report:

What is an upgrade report ?
===========================

When an upgrade request completes successfully (test or production), you receive an email
notification about it that includes an 'Upgrade Report'. It contains valuable information regarding changes that occurred during the upgrade. While it serves as a guide to possible issues to look out for, it is not an exhaustive list. It remains imperative that you :ref:`test <upgrade/testing-phase>` the upgraded database thoroughly and report any discrepancies you might find, before you decide to upgrade your production database.

..note::
   The upgrade report is sent to you via email after an upgrade request successfully completes (test or production), and is also available in the Discuss app of your database.

.. _upgrade-faq/custom-views:

Why are there issues with my custom views after the upgrade?
============================================================

During the upgrade, some custom views might get disabled for technical reasons. Therefore they might have to be fixed after the upgrade. The :ref:`Upgrade Report <upgrade-faq/upgrade-report>` that is generated after the upgrade lists all the custom views that might be impacted by this. You can find more information about how to fix custom views :ref:`here <upgrade_views>` and how to fix studio views :ref:`here <upgrade_studio_views>`.

.. _upgrade-faq/release-notes:

Release Notes by version
========================

Open our `Release Note <https://www.odoo.com/page/release-notes>`_ page to get a summary of the new
features and improvements made in each version.

How long is my test available for
=================================

An Odoo Online test database is available for one month by default. We can extend this trial period
upon request. For Odoo.sh or on-premise, there is no restriction.

How many tests to perform before upgrading to production?
=========================================================

As many as needed. When you are comfortable with the database, run a last test upgrade 48 hours
before requesting your production upgrade and test your workflows one last time.

How to/Where to report upgrade issues?
======================================

If you encounter issues during the upgrade process, please contact the Odoo Support through the
`Odoo Support page <https://www.odoo.com/help>`_.

- To report an issue discovered during the testing phase, please select **An issue related to my
  upgrade (test phase)**.
- To report an issue discovered post-upgrade, please select **An issue related to my upgrade
  (production)**.

Upgrading to production
=======================

Once you have completed testing and are happy with the result, you decide on a date and time when
you stop users from accessing Odoo, freeze all data entries, and create an upgrade request for the
production upgrade.
