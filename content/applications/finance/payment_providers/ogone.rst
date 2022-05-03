=====
Ogone
=====

`Ogone <https://www.ingenico.com/>`_, also known as **Ingenico Payment Services** is a France-based
company that provides the technology involved in secure electronic transactions.

.. seealso::
   - :ref:`payment_providers/add_new`
   - `Ogone's documentation <https://epayments-support.ingenico.com/get-started/>`_.

.. warning::
   The provider Ogone is deprecated. It is recommended to use :doc:`stripe` instead.

Settings in Ogone
=================

Create an API user
------------------

Log into your Ogone account and head to the :guilabel:`Configuration` tab.

You need to create an **API user** to be used in the creation of transactions from Odoo. While you
can use your main account to do so, using an **API user** ensures that if the credentials used in
Odoo are leaked, no access to your Ogone configuration is possible. Additionally, passwords for
**API users** do not need to be updated regularly, unlike normal users.

To create an **API user**, go to :menuselection:`Configuration --> Users` and click on
:guilabel:`New User`. The following fields must be configured:

.. _ogone/ogone:

- :guilabel:`UserID`: you can choose anything you want.
- :guilabel:`User's Name, E-mail and Timezone`: you can enter the information you want.
- :guilabel:`Profile`: should be set to :guilabel:`Admin`.
- :guilabel:`Special user for API`: should be checked.

After the creation of the user, you are required to generate a password. Save the password and
**UserID**, as they will be required later on during the setup.

.. tip::
   If you already have an user set up, make sure it is activated without any error. If not, simply
   click the :guilabel:`Activate(Errors)` button to reset the user.

Set up Ogone for Odoo
---------------------

Ogone must now be configured to accept payments from Odoo. Head to :menuselection:`Configuration -->
Technical Information --> Global Security Parameters`, select :guilabel:`SHA-512` as
:guilabel:`Hash Algorithm` and :guilabel:`UTF-8` as :guilabel:`character encoding`. Then, go to the
:guilabel:`Data and Origin verification` tab of the same page and leave the URL field of the
:guilabel:`e-Commerce and Alias Gateway` section blank.

.. tip::
   If you need to use another algorithm, such as `sha-1` or `sha-256`, within Odoo, activate the
   :ref:`developer mode <developer-mode>` and go to the **Payment Providers** page in
   :menuselection:`Accounting --> Configuration --> Payment Providers`. Click on :guilabel:`Ogone`,
   and in the :guilabel:`Credentials` tab, select the algorithm you wish to use in the
   :guilabel:`Hash function` field.

You are now required to generate **SHA-IN** passphrases. **SHA-IN** and **SHA-OUT** passphrases are
used to digitally sign the transaction requests and responses between Odoo and Ogone. By using these
secret passphrases and the `sha-1` algorithm, both systems can ensure that the information they
receive from the other was not altered or tampered with.

Enter the same **SHA-IN** passphrase in both :guilabel:`Checks for e-Commerce & Alias Gateway` and
:guilabel:`Checks for DirectLink and Batch (Automatic)`. You can leave the IP address field blank.

Your **SHA-IN** and **SHA-OUT** passphrases should be different, and between 16 and 32 characters
long. Make sure to use the same **SHA-IN** and **SHA-OUT** passphrases throughout the entire Ogone
configuration, as Odoo only allows a single **SHA-IN** and single **SHA-OUT** passphrase.

In order to retrieve the **SHA-OUT** key, log into your Ogone account, go to
:menuselection:`Configuration --> Technical Information --> Transaction feedback --> All
transaction submission modes`, and get or generate your **API Key** and **Client Key**. Be careful
to copy your API key as you’ll not be allowed to get it later without generating a new one.

When done, head to :menuselection:`Configuration --> Technical Information --> Transaction Feedback`
and check the following options:

- The :guilabel:`URL` fields for :guilabel:`HTTP redirection in the browser` can be left empty, as
  Odoo will specify these URLs for every transaction request.
- :guilabel:`I would like to receive transaction feedback parameters on the redirection URLs`:
  should be checked.
- :guilabel:`Direct HTTP server-to-server request`: should to be set to `Online but switch to a
  deferred request when the online request fails`.
- Both **URL** fields should contain the same following URL, with `<example>` replaced by your
  database: `https://<example>/payment/ogone/return`.

- :guilabel:`Dynamic eCommerce Parameters` should contain the following values: `ALIAS`, `AMOUNT`,
  `CARDNO`, `CN`, `CURRENCY`, `IP`, `NCERROR` `ORDERID`, `PAYID`, `PM`, `STATUS`, `TRXDATE`. Other
  parameters can be included (if you have another integration with Ogone that requires them), but
  are not advised.
- In the :guilabel:`All transaction submission modes` section, fill out **SHA-OUT** passphrase and
  disable `HTTP request for status change`.

To allow your customers to save their credit card credentials for future use, head to
:menuselection:`Configuration --> Alias --> My alias information`. From this tab, you can configure
how the user can have its card details saved, for how long the information is saved, if a checkbox
to save the card information should be displayed, etc.

Settings in Odoo
================

To set up Ogone in Odoo, head to :menuselection:`Accounting --> Configuration --> Payment Providers`
and open the Ogone provider. In the :guilabel:`Credentials` tab, enter the **PSPID** of your Ogone
account, and fill out the other fields as configured in your :ref:`Ogone portal <ogone/ogone>`.
