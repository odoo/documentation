======
Xendit
======

`Xendit <https://www.xendit.co>`_ is an Indonesian-based payment solution provider that covers
several Southeast Asian countries. It allows businesses to accept credit cards as well as several
local payment methods.

.. _payment_providers/xendit/configure_dashboard:

Configuration on the Xendit Dashboard
=====================================

#. Create a Xendit account if necessary and log in to the `Xendit Dashboard
   <https://dashboard.xendit.co>`_.
#. Check your account mode in the top left corner of the page. Use the :guilabel:`Test Mode` to try
   the integration without charging your customers. Switch to :guilabel:`Live Mode` once you are
   ready to accept payments.
#. Navigate to :menuselection:`Configuration: Settings` in the left part of the application page.
   In the :guilabel:`Developers` section, click
   `API Keys <https://dashboard.xendit.co/settings/developers#api-keys>`_.
#. Click :guilabel:`Generate Secret Key`. In the popup box, enter any :guilabel:`API key name`,
   select :guilabel:`Write` for the :guilabel:`Money-in Products` permission and :guilabel:`None`
   for all other permissions then click :guilabel:`Generate key`.
#. Confirm your password to display your API key. Copy or download the key and **save
   this information securely for later**. This is the only time the API key can be viewed or
   downloaded.
#. Once completed, scroll down the page to the
   `Webhooks <https://dashboard.xendit.co/settings/developers#webhooks>`_ section to generate
   the webhook token.
#. Under :guilabel:`Webhook verification token`, click :guilabel:`View Webhook Verification Token`,
   then confirm your password to display the token. Save it for later.
#. In the :guilabel:`Webhook URL` section, enter your Odoo database URL (e.g.,
   `https://example.odoo.com`) in the field :guilabel:`Invoices paid` and click the
   :guilabel:`Test and save` button next to it.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Xendit <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. Fill in the :guilabel:`Secret Key` and :guilabel:`Webhook Token` fields with the
   information saved at the step :ref:`payment_providers/xendit/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. seealso::
   :doc:`../payment_providers`
