:banner: banners/db_online.jpg


.. _db_online:

==========================
Online Database management
==========================

.. _duplicate_online:

Deleting a database
===================

Duplicating a database
======================

.. note:: Database duplication, renaming, custom DNS, etc. is not available
    to free customers of our Online platform.

(you will have to sign in). Next, make sure you are connected as the
administrator of the database you want to duplicate. After that, click
on the **Manage Your Databases** button.

.. image:: media/databases.png
    :align: center

In the line of the database you want to duplicate, you will have a few
buttons. To duplicate your database, just click **Duplicate**. You will
have to give a name to your duplicate, then click **Duplicate Database**.

.. image:: media/db_buttons.png
    :align: center

.. image:: media/db_duplicate.png
    :align: center

.. danger:: A duplicated database has the same behaviour as a real one:

  * Emails are sent

  * Payments are processed (in the e-commerce, for example)

  * Delivery orders (shipping providers) are sent

  * Etc.

  It is **strongly** advised to test behaviour using sample
  customers/products (with a `disposable e-mail <http://www.mailinator.com>`__
  address, for example)

After a few seconds, you will be logged in your duplicated database.
Notice that the url uses the name you chose for your duplicated
database.

.. note :: Duplicate databases expire automatically after 15 days.

    .. image:: media/dup_expires.png
        :align: center
