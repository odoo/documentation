=====
Nuvei
=====

`Nuvei <https://www.nuvei.com>`_ is an Canadian-based payment solution provider that covers
several Latin American countries. It allows businesses to accept credit cards as well as several
local payment methods.

.. _payment_providers/nuvei/configure_dashboard:

Configuration on the Nuvei Dashboard
====================================

#. Create a Nuvei account if necessary and log in to the `Nuvei Dashboard
   <https://dashboard.xendit.co>`_.
#. Nuvei uses two different portals for sandbox and production environments. Utilize the
   `Sandbox Dashboard <https://sandbox.nuvei.com>`_ to check the integration without charging your
   customers. Switch to the `Production Dashboard <https://cpanel.nuvei.com/login>`_ once you are
   ready to accept payments.
#. Navigate to :menuselection:`Settings` in the left part of the application page. In the
   :menuselection:`My Integration Settings` section, select your payment page via the
   :guilabel:`Website` dropdown.
#. Here you will find all the configuration keys necessary for Odoo's integration. Make sure on
   this page you have your :guilabel:`Merchant ID` and :guilabel:`Site ID` saved for later. Under
   :guilabel:`Secret Key`, click :guilabel:`Reveal`, then copy this value for later.

.. note::
   Nuvei supports the ability to handle payment transactions failures directly within the payment
   page instead of returning failure requests as well as suggestions of other payment methods when
   one fails. To utilize these features enable :guilabel:`User Trap` and/or
   :guilabel:`Decline Recovery` in :menuselection:`My Integration Settings`.

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
