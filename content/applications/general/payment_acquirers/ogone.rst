=====
Ogone
=====

`Ogone <https://www.ingenico.com/>`_, also known as **Ingenico Payment Services** is a France-based
company that provides the technology involved in secure electronic transactions.

Configuration on Odoo
=====================

.. seealso::
   - :ref:`payment_acquirers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials** to connect with your Ogone account, which comprise:

- **PSPID**: The ID solely used to identify the account with Ogone. You chose it when you opened
  your account.
- :ref:`API User ID <ogone/api_user>`: The ID solely used to identify the user with Ogone.
- :ref:`API User Password <ogone/api_user>`: Value used to identify the user with Ogone.
- :ref:`SHA Key IN <ogone/sha_key_in>`: Key used in the signature Odoo send to Ogone.
- :ref:`SHA Key OUT <ogone/sha_key_out>`: Key used in the signature Ogone send to Odoo.

You can copy your credentials from your Ogone account, and paste them in the related fields under
the **Credentials** tab.

.. _ogone/api_user:

API User ID and Password
~~~~~~~~~~~~~~~~~~~~~~~~

If you already created a user and have both its ID and password, just copy them. You can also
generate a new password from :menuselection:`Configuration --> Users --> Your chosen user --> change
password`.

If you don't have a user, create one by going to :menuselection:`Configuration --> Users -->
New User`. Set your **User ID** to get your **password** when you save your new user.

.. image:: media/ogone_new_user.png
   :align: center
   :alt: Get your password when you save the new user.

.. _ogone/sha_key_in:

SHA Key IN
~~~~~~~~~~

In order to retrieve the SHA Key IN, log into your ogone account, go to
:menuselection:`Configuration --> Technical Information --> Data and origin verification -->
Checks for e-Commerce & Alias Gateway`, and retrieve **SHA Key IN**.

.. _ogone/sha_key_out:

SHA Key OUT
~~~~~~~~~~~

In order to retrieve the API Key and the Client Key, log into your ogone account, go to
:menuselection:`Configuration --> Technical Information --> Transaction feedback --> All transaction
submission modes`, and get or generate your **API Key** and **Client Key**. Be careful to copy your
API key as you'll not be allowed to get it later without generating a new one.

.. important::
   If you are trying Ogone as a test, with the Test Account, change the **State** to *Test Mode*. We
   recommend doing this on a test Odoo database, rather than on your main database.

Configuration on Ogone
======================

Now that Odoo can communicate with Ogone, we need to make sure that Ogone can send information to
your database.

To do so, log into your Ogone account and go to :menuselection:`Configuration --> Technical
Information --> Transaction feedback --> Direct HTTP server-to-server request`.

Then, fill the form with the following data:

- In the **Timing of the request**, select *Online but switch to a deferred request when the online
  requests fail*.
- | Enter your Odoo databases URL in both **URLs** followed by ``/payment/ogone/return``.
  | For example: ``https://yourcompany.odoo.com/payment/ogone/return``
- Select *POST* for the **Request Method**.

Save, and you are ready to go!

.. seealso::
   - :doc:`../payment_acquirers`
