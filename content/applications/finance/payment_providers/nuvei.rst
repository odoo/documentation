======
Nuvei
======

`Nuvei <https://www.nuvei.com>`_ is an Canadian-based payment solution provider that covers
several Latin American countries. It allows businesses to accept credit cards as well as several
local payment methods.

.. _payment_providers/nuvei/configure_dashboard:

Configuration on the Nuvei Dashboard
=====================================

#. Create a Nuvei account if necessary and log in to the `Nuvei Dashboard
   <https://dashboard.xendit.co>`_.
#. Nuvei uses two different portals for sandbox and production environments. Utilize the
   `Sandbox Dashboard <https://sandbox.nuvei.com>`_ to check the integration without charging your
   customers. Switch to the `Production Dashboard <https://PROD_URL>`_ once you are ready to accept
   payments.
#. Navigate to :menuselection:`Settings` in the left part of the application page. In the
   `My Integration Settings <https://sandbox.nuvei.com/settings/my_payment_settings>`_ section,
   select your payment page via the :guilabel:`Website` dropdown.
#. Here you will find all of the configuration keys necessary for Odoo's integration. Make sure on
   this page you have your :guilabel:`Merchant ID` and :guilabel:`Site ID` saved for later. Under
   :guilabel:`Secret Key`, click :guilabel:`Reveal`, then copy this value for later.
#. In the section with return URLS, enter your Odoo database's URL, followed by
   `/payment/nuvei/return` (e.g., `https://example.odoo.com/payment/nuvei/return`) in the fields
   :guilabel:`Success URL`, :guilabel:`Pending URL`, and :guilabel:`Failure URL`.
#. For the :guilabel:`Back URL`, enter your Odoo database's URL, followed by `/payment/nuvei/cancel`
   (e.g., `https://example.odoo.com/payment/nuvei/cancel`).
#. Under the :guilabel:`DMN Settings` section, enable :guilabel:`Use DMN Selector` and enter your
   Odoo database's URL, followed by `/payment/nuvei/webhook`
   (e.g., `https://example.odoo.com/payment/nuvei/webhook`) for webhooks sent to the database
   accounting for updates on payment transactions.

.. note::
   Nuvei supports the ability to handle payment transactions failures directly within the payment
   page instead of returning failure requests as well as suggestions of other payment methods when
   one fails. To enable these features enable :guilabel:`User Trap` and :guilabel:`Decline Recovery`
   respectively.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Nuvei <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. Fill in the :guilabel:`Merchant Identifier`, :guilabel:`Site Identifier`, and :guilabel:`Secret Key`
   fields with the information saved at the step :ref:`payment_providers/nuvei/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. important::
   If you are trying Nuvei as a test, change the :guilabel:`state` to :guilabel:`Test Mode`
   and fill in the information from the sandbox account instead. We recommend doing this on a test
   Odoo database, rather than on your main database.

.. seealso::
   :doc:`../payment_providers`
