========
Buckaroo
========

`Buckaroo <https://www.buckaroo.eu/>`_ is a Dutch-based company that offers several online payment
possibilities.

Configuration on Buckaroo Plaza
===============================

Enable Push responses
---------------------

Log into `Buckaroo Plaza <https://plaza.buckaroo.nl>`_ and go to :menuselection:`My Buckaroo
--> Websites --> Push settings`. Then,

#. Check **Enable Push Response** in the **Delayed and Push responses** section.
#. | Enter your Odoo database URL followed by `/payment/buckaroo/webhook` in both the **Push URI
     Success** and **Push URI Failure** text fields.
   | For example: `https://yourcompany.odoo.com/payment/buckaroo/webhook`.
#. Leave the other fields at their default value.
#. Click on **Save** to finalize the configuration.

Configuration on Odoo
=====================

.. seealso::
   - :ref:`payment_providers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials** to connect with your Buckaroo account, which comprise:

- :ref:`Website Key <buckaroo/website_key>`: The key solely used to identify the website with
  Buckaroo.
- :ref:`Secret Key <buckaroo/secret_key>`: The secret key you entered on Buckaroo.

You can copy your credentials from your Buckaroo account, and paste them in the related fields under
the **Credentials** tab.

.. _buckaroo/website_key:

Website Key
~~~~~~~~~~~

In order to retrieve the Website Key, log into Buckaroo Plaza, go to
:menuselection:`Configuration --> Templates --> Your Website`.

.. _buckaroo/secret_key:

Secret Key
~~~~~~~~~~

In order to retrieve the Website Key, log into Buckaroo Plaza, go to
:menuselection:`Configuration --> Security --> Secret Key`.

.. important::
   If you are trying Buckaroo in a test account, change the **State** to *Test Mode*. We
   recommend doing this on a test Odoo database, rather than on your main database.

.. seealso::
   - :doc:`../payment_providers`
