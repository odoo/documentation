:nosearch:
:show-content:
:hide-page-toc:
:show-toc:

===========================
From planning to production
===========================

In this section, we will explore the whole procedure of upgrading an Odoo database,
from the decision of the upgrade, all the way to having the database running the upgraded version.
It will serve as an introduction to upgrading but also as a summary of the whole class, since all the
steps will be explained more in depth in the course. It is quite a journey, so hang in there ! 🚢

Planning the upgrade
--------------------

The first step of this journey is obviously the planning. You will have to allocate some time and resources for building the planning of your upgrade, whether you are doing it by yourself or with the help of a business analyst or an upgrade support analyst here at Odoo.

Depending on the size of your database, the amount of apps installed, the amount of customization, and the availability of the Upgrade team, the time span of the upgrade can vary a lot but we usually consider between 1 and 3 month for the average database. However, please note that this estimate can very a lot based on those factors. Some very specific upgrades can take up to 6 months to be completed but that is very rare.

.. important::
    Since upgrading can bring a lot of changes to the business flow, you should also plan for a significant amount of time in testing before the upgrade of your production database. This will allow you to catch all of the possible bugs and issues that could have appeared during the upgrade, as well as to get familiar with latest changes that the new version brings. It is more convenient to discover problems during the testing phase than to have to deal with an issue when operating your database in the middle of a busy day.

TODO
How much time should they allocate exactly ?

Submitting your first request
-----------------------------

Once you finished planning the upgrade, the next step is to request your first upgraded database. This process is explained in depth in section :doc:`/upgrade/request`.

You will then be notified of the status of your request. At the end, if the request is successful, you will be given instructions on how to access your test database, but if it is not, you might have to fix a few things in your database or contact the Odoo Upgrade Support for them to help you with your blocking upgrade request. You can find more information in regards to the assistance Odoo provides in :ref:`upgrade/test-assistance`.


Testing and requesting help
---------------------------

Once you receive your test database, it is very important to spend a significant amount of time testing it to ensure that, once the upgrade goes live, you are not stuck in your day-to-day activities by a change in views, behavior, or an error message.

TODO add a section "how to test your database" ?

Therefore, we recommend that you test all the different actions you do on your database, whether it is actions that you do multiple times per day, or only once every few weeks, months, or even once a year. The more you test, the less likely you are to encounter a problem once you upgrade your production database.

Upgrade your customisations
---------------------------

In the case that your database is running a modified version of Odoo, that is a version with custom modules or custom code, you will still have a little bit work more to do !

Since the various models and fields of Odoo might have changed during the upgrade of the database, you might have to adapt your customization to be compatible with it. Furthermore, if you do some changes to the structure of your custom code, you must not forget to migrate the data. For example if you rename a field in the code, you must also ensure that the corresponding PSQL data is renamed as well. This is usually done in migration scripts, TODO we will explain in later section


Planning the upgrade day and upgrading
--------------------------------------

Once you are confident that you can use your upgraded database as your main database without any issue, it is time to plan the Go-live day. Depending on the size of your database, the upgrade process in itself can take some time, but for most databases it usually takes 1 to 2 hours. During that time, any modification that you apply to your production database will not be saved. This is why we recommend not using your database during that time.


After the upgrade
-----------------

Once your production database is running the upgraded version, you can continue using it as your main Odoo database as usual. If you encounter any new issue, you can still request :ref:`upgrade/test-assistance`