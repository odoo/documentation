======
Xendit
======

`Xendit <https://www.xendit.co>`_ is an Indonesian-based payment solution provider that covers
several Southeast Asian countries, allowing businesses to accept payments in credit cards and
several local payment methods.

.. _payment_providers/xendit/configure_dashboard:

Configuration on Xendit Dashboard
=================================

API Key
-------

#. Log into `Xendit Dashboard <https://dashboard.xendit.co>`_ with the account you have signed up
   with.
#. | Check your account type from the top-left side of the webpage after login.
     :guilabel:`Test mode` allows you to try the integration without actually charging your
     customers. You can switch to :guilabel:`Live mode` once you are ready to accept payments.
#. | Go to :menuselection:`Configuration --> Settings --> Developers --> API Keys` to create your
     :guilabel:`secret keys`. Click on :guilabel:`Generate secret key`, enter any API key name, and
     select :guilabel:`Write` for :guilabel:`Money-in Products` and leave it :guilabel:`None` for
     the rest to keep your data secured. Save this information securely.

Webhook Token and Webhook URL
-----------------------------

#. On the same page, scroll down to find :guilabel:`Webhook Verification Token` section and the
   :guilabel:`View Webhook Verification Token` button. Click on it to generate your webhook token.
   Save this information securely.
#. Scroll down further to find the :guilabel:`Webhook URL` section. Look for :menuselection:`Unified
   Refunds --> Refund request succeeded, Refund Request failed`, and :menuselection:`Invoices -->
   Invoices paid` and fill the boxes with the address of your Odoo Database
   (e.g. `https://yourcompany.odoo.com`).
#. For :menuselection:`Invoices --> Invoices paid`, you can also check the two boxes underneath it.

Optional 3DS
------------

Go back to Xendit Dashboard home, then head to :menuselection:`Configuration --> Payment Methods -->
Card --> Settings` and enable :guilabel:`Optional 3DS`.

Configuration in Odoo
=====================

#. :ref:`Navigate to the payment provider Xendit <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. Fill in the :guilabel:`Xendit API Key` and :guilabel:`Xendit Callback Token` with the information
   you saved from the previous step.
#. Configure the rest of the options to your liking.

.. seealso::
   - :doc:`../payment_providers`
