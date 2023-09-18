:nosearch:
:show-toc:

.. |assistance-contact| replace::
    If you need Odoo assistance on this matter, please get in touch with your Odoo Account Manager or our `Sales department`_.
.. _Sales department: mailto:sales@odoo.com

=============================================
Upgrade project : From planning to production
=============================================

An upgrade project represents the whole procedure of upgrading an Odoo database,
from the decision of the upgrade, all the way to having the database running the upgraded version.
It will serve as an introduction to upgrading but also as a summary of the whole class, since all the
steps will be explained more in depth in the course. It is quite a journey, so hang in there ! 🚢

Planning the upgrade
--------------------

The first step of this journey is obviously the planning. You will have to allocate some time and resources for building the planning of your upgrade, whether you are doing it by yourself or with the help of a business analyst or an upgrade support analyst here at Odoo.

Depending on the size of your database, the amount of apps installed, the amount of customization, and the availability of the Upgrade team, the time span of the upgrade can vary a lot but we usually consider between 1 and 3 month for the average database. However, please note that this estimate can very a lot based on those factors. Some very specific upgrades can take up to 6 months to be completed but that is very rare.

.. important::
    Since upgrading can bring a lot of changes to the business flow, you should also plan for a significant amount of time in testing before the upgrade of your production database. This will allow you to catch all of the possible bugs and issues that could have appeared during the upgrade, as well as to get familiar with latest changes that the new version brings. It is more convenient to discover problems during the testing phase than to have to deal with an issue when operating your database in the middle of a busy day.

TODO How much time should they allocate exactly ?

Submitting your first request
-----------------------------

Once you finished planning the upgrade, the next step is to request your first upgraded test database. This process is explained in depth in section :doc:`/upgrade/request`.

You will then be notified of the status of your request. At the end, if the request is successful, you will be given instructions on how to access your test database, but if it is not, you might have to fix a few things in your database or contact the Odoo Upgrade Support for them to help you with your blocking upgrade request. You can find more information in regards to the assistance Odoo provides in :ref:`upgrade/test-assistance`.

In any case, you can always request another upgraded test database at any time. It can be useful in case you significantly damaged your test database or if a fix was applied to the upgrade process and you need to confirm that it is working as expected.

.. _upgrade/testing-phase:

Testing your upgraded database and requesting help
--------------------------------------------------

Once you receive your test database, it is very important to spend a significant amount of time testing it to ensure that, once the upgrade goes live, you are not stuck in your day-to-day activities by a change in views, behavior, or an error message.

TODO add a section "how to test your database" ? `<https://docs.google.com/document/d/1ypNs7JKPOsjNbKpdiKFH7Al6g6whZ9jr7f7duAQ5E1w/>`

Therefore, we recommend that you test all the different actions you do on your database, whether it is actions that you do multiple times per day, or only once every few weeks, months, or even once a year. The more you test, the less likely you are to encounter a problem once you upgrade your production database.

You should :ref:`report any issue <upgrade/test-assistance>` you encounter during your testing phase to the Odoo Upgrade Support.

.. important::
    A test database is only intended for testing and remains completely unrelated to your present or future production database. Any data you add, or changes you make, will not be reflected in your upgraded production database.

.. note::
    Test databases are neutered and features are disabled to prevent them from having an impact on the production database:

    #. The serial number of the database is modified (to prevent it from sending information as if it was the production database).
    #. The :ref:`base URL of the database <domain-name/web-base-url>` is reset to ``http://localhost:8069`` and the email domain to ``localhost``.
    #. Scheduled actions are disabled (the calendar synchronization, the bank statement synchronization, the planned automated actions, the fetching of incoming mail servers, etc.).
    #. Outgoing mail servers are disabled by archiving the existing ones and adding a fake/non-working one.
    #. Payment providers and delivery carriers are reset to test environment.
    #. Accounting localization Electronic Data Interchange (EDI) services are disabled.
    #. A system parameter is set to tell the database has been neutered.


.. _upgrade/test-assistance:

Assistance with your test upgraded database
===========================================

If you encounter an issue in the **test database**, please get in touch with Odoo Upgrade Support
via the `Odoo Support page <https://www.odoo.com/help>`_.

Under the *Ticket type* section, select *An issue related to my future upgrade (I am testing an upgrade)* ticket type.

    .. image:: ../upgrade/upgrade_project/test-assistance.png
        :width: 50%
        :align: center
        :alt: Selection of "An issue related to my future upgrade (I am testing an upgrade)" as Ticket Type in the support form on Odoo

    .. warning::
        If you choose another *Ticket type*, the request will be redirected to another team. This will slow down the processing and response time.

Please provide as much detail as you can (i.e., videos and screenshots to illustrate your issue).
This will avoid clarifying questions and speed up the resolution process significantly.

.. note::
   * The purpose of the test phase is not to correct existing data or configurations in your database.
   * |assistance-contact|


Upgrading your customizations
-----------------------------

In the case that your database is running a modified version of Odoo, that is a version with custom modules or custom code, you will still have a little bit work more to do !

Since the various models and fields of Odoo might have changed during the upgrade of the database, you might have to adapt your customization to be compatible with it. Furthermore, if you do some changes to the structure of your custom code, you must not forget to migrate the data. For example if you rename a field in the code, you must also ensure that the corresponding PSQL data is renamed as well. This is usually done in migration scripts, TODO we will explain in later section

.. _upgrade/steps-production:

Upgrading your production database
----------------------------------

Once you completed your :ref:`tests <upgrade/testing-phase>` and are confident that you can use your upgraded database as your main database without any issue, it is time to plan the Go-live day. Depending on the size of your database, the upgrade process in itself can take some time, but for most databases it usually takes 1 to 2 hours. During that time, any modification that you apply to your production database will not be saved. This is why we recommend not using your database during that time.

You can request your **production database** to be upgrade. Refer to :doc:`/upgrade/request` for more details on how to request a database upgrade.

.. important::
    Going into production without first testing may lead to:

    - business interruptions (e.g., no longer having the possibility to validate an action)
    - poor customer experiences (e.g., an eCommerce website that does not work correctly)

.. _upgrade/production-assistance:

Assistance with your upgraded production database
=================================================


If you encounter issues or problems in the **production database**, please get in touch with **Odoo
Support**:

#. Connect to our `Odoo Support page <https://www.odoo.com/help>`_.
#. Under the *Ticket Description* section, select the appropriate type related to your issue but
   **do not select** the option *An issue related to my upgrade*.

    .. note::
        After upgrading to production, the support will be provided by the Support team instead of the Upgrade team.

#. Please provide as much detail as you can (i.e., videos and screenshots to illustrate your issue). This will avoid clarifying questions and speed up the resolution process significantly.

    .. warning::
        If you choose *An issue related to my upgrade* as ticket type, the request will be redirected to another team than the support one and will slow down the processing and response time.


After the upgrade
-----------------

Once your production database is running the upgraded version, you can continue using it as your main Odoo database as usual. If you encounter any new issue, you can still request :ref:`upgrade/production-assistance`