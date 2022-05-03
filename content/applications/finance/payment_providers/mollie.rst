======
Mollie
======

`Mollie <https://www.mollie.com/>`_ is an online payments platform established in the Netherlands.

Configuration
=============

.. seealso::
   - :ref:`payment_providers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials** to connect with your Mollie account, which comprise:

- **API Key**: The test or live API Key depending on the configuration of the provider.

You can copy your credentials from your Mollie account, and paste them in the related fields under
the **Credentials** tab.

To retrieve your API key, log into your Mollie account, go to
:menuselection:`Developers --> API keys`, and copy your Test or Live **API Key**.

.. important::
   If you are trying Mollie as a test, with the Test API key, change the **State** to *Test Mode*.
   We recommend doing this on a test Odoo database, rather than on your main database.

.. seealso::
   - :doc:`../payment_providers`
