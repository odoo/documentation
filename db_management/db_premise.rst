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