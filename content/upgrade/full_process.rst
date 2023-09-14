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

Are your customizations necessary?
---------------------------------

You won't be surprised to learn that Odoo is a very fluid software that releases a new version with lots of changes every year. Those changes are very carefully researched and developed to ensure a compatibility with the most amount of user, while avoiding creating unnecessary complexity.

Unfortunately, such compatibility is hard to achieve and developers at Odoo must balance two extremes between developing all the features any company could ever use and only developing features that all company will use. The right balance is difficult to find, this is why there are probably many apps that you don't need in your company, and many features that you would love to have but are not present in the standard package of Odoo. 

During an upgrade, especially given the fact that you might skip multiple versions of Odoo, it is very likely that, in the plethora of new features added in the years of development between 2 versions, what you added in your database as a customisation might be part of the standard of Odoo now.

This is why we recommend every database manager to take the time to explore the new features of Odoo and to compare them with the current customisations implemented. With a little bit of luck, you might be able to delete some chunks of your customisation, leading to less time and money spent on its maintenance.

Upgrade your customisations
---------------------------

Testing and requesting help
---------------------------

Once you receive your test database, it is very important to spend a significant amount of time testing it to ensure that, once the upgrade goes live, you are not stuck in your day-to-day activities by a change in views, behavior, or an error message.

TODO add a section "how to test your database" ?

Therefore, we recommend that you test all the different actions you do on your database, whether it is actions that you do multiple times per day, or only once every few weeks, months, or even once a year. The more you test, the less likely you are to encounter a problem once you upgrade your production database.

Planning the upgrade day and upgrading
--------------------------------------

Once you are confident that you can use your upgraded database as your main database without any issue, it is time to plan the Go-live day. Depending on the size of your database, the upgrade process in itself can take some time, but for most databases it usually takes 1 to 2 hours. During that time, any modification that you apply to your production database will not be saved. This is why we recommend not using your database during that time.


After the upgrade
-----------------

Once your production database is running the upgraded version, you can continue using it as your main Odoo database as usual. If you encounter any new issue, you can still request :ref:`upgrade/test-assistance`