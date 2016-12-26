:banner: banners/db_premise.jpg

.. _db_premise:

==============================
On-premise Database management
==============================

.. _duplicate_premise:

Duplicating a database
======================

You can duplicate your database by accessing the database manager on your
server (<odoo-server>/web/database/manager). In this page, you can easily
duplicate your database (among other things).

.. image:: media/db_manager.gif
    :align: center


When you duplicate a local database, it is **strongly** advised to change
the duplicated database's uuid (Unniversally Unique Identifier), since this
uuid is how your database identifies itself with our servers. Having two
databases with the same uuid could result in invoicing problems or registration
problems down the line.

.. note:: From July 2016 onward, Odoo 9 now automatically change the uuid of a
    duplicated database; a manual operation is no longer required.

The database uuid is currently accessible from the menu **Settings > Technical
> System Parameters**, we advise you to use a
`uuid generator <https://www.uuidgenerator.net>`__ or to use the unix command
``uuidgen`` to generate a new uuid. You can then simply replace it like any
other record by clicking on it and using the edit button.

.. image:: media/db_uuid.png
    :align: center



Register your database
======================


To register your database, you just need to enter your Subscription Code in the
banner in the Appswitcher.

If you have this error message : **"Something went wrong while registering your
database, you can try again or contact Odoo Help"**

.. image:: media/error_message_sub_code.png
    :align: center

***Good to check***


* Do you have a valid Enterprise subscription?
    * You can check if your subscription details get the tag "in progress" on
    your `Odoo Account
    <https://accounts.odoo.com/my/contract>` or with your Account Manager
* Have you already linked a database with your subscription reference?
    * You can link only one database per subscription.
    ( Need a test or a development database? `Find a partner
    <https://www.odoo.com/partners>`)
    * You can unlink the old database yourself on your `Odoo Contract
    <https://accounts.odoo.com/my/contract>` with the button "Unlink database"

..image:: media/unlink_single_db.png
      :align: center

Don't forget to confirm it

..image:: media/unlink_confirm_enterprise_edition.png
      :align: center

* Do you have the updated version of Odoo 9?
    * From July 2016 onward, Odoo 9 now automatically change the uuid of a
    duplicated database; a manual operation is no longer required.
    * If it's not the case, you may have multiple databases sharing the same
    UUID. Please check on your `Odoo Contract
    <https://accounts.odoo.com/my/contract>`.

..image:: media/unlink_db_name_collision.png
    :align: center

In this case, you need to change the UUID on your test databases to solve this
issue. So please, read the documentation to know `How to duplicate a database
(on-premise) <https://www.odoo.com/documentation/user/9.0/db_management
/documentation.html#duplicating-a-database-on-premise>`.

For your information, we identify database with UUID.


Expiration message due to extra users
=====================================

If you have this error message : **"This database will expire in X days, you
have more users than your subscription allows"**

..image:: media/add_more_users.jpg
    :align: center

When the message appears you have 30 days before the expiration.
The countdown is updated everyday.

***Solutions***

* Add more users : accept the upsell quotation and pay for the extra users.

or
* **Deactivate** users as explained in this `Documentation
<https://www.odoo.com
/documentation/user/10.0/db_management/documentation.html#deactivating-users>`
and **Reject** the upsell quotation.

*Now your database has the correct number of users, the "expiration message"
will disappear automatically after a few days, when the next verification will
be done. We understand that it can be a bit frightening to see the countdown,
so you can force a ping to accelerate the verification*

***How to force a Ping***

1. Connect to the database with the **Administrator** account
2. Switch to the Developer mode by using the **About** option in the
top-right menu (in V9) /  in **Settings**  (in V10): click on
**Activate the developer mode**
3. Navigate to the "Settings" menu, then "Technical" > "Automation" >
"Scheduled Actions"
4. Find "Update Notification" in the list, click on it, and finally click on the
button "**RUN MANUALLY**"
5. When you refresh the "Expiration" notification should be gone.


* Please check if you have correctly duplicated your database.

*You may have kept the same UUID on different databases and we receive
information from those databases too. So please read the documentation to know
`How to duplicate a database (on-premise)
<https://www.odoo.com/documentation/user/9.0/db_management
/documentation.html#duplicating-a-database-on-premise>` and change the UUID.
After the change you can force a ping to accelerate the verification.
Then your production database will be correctly identify.*

Database expired
================

If you have this error message : **"This database has expired, you have more
users than your subscription allows"**

..image:: media/database_expired.jpg
    :align: center

You had 30 days to take action and now your database is expired.

***Solutions***

* Add more users : follow the link "Add more users" and pay for the extra users.
* Contact our `Support <https://www.odoo.com/help>`


None of those solutions worked for you? Please contact our
`Support <https://www.odoo.com/help>`
