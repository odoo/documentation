=====
Nuvei
=====

`Nuvei <https://www.nuvei.com>`_ is an Canadian-based payment solution provider that covers
several Latin American countries as well as the US and Canada. It allows businesses to accept
credit cards as well as several local payment methods.

.. _payment_providers/nuvei/configure_dashboard:

Configuration on the Nuvei Dashboard
====================================

#. Create a Nuvei account if necessary via our `referral page <https://pages.nuvei.com/odoo-referral-0>`_.
#. Nuvei uses two separate portals for Sandbox and Production environments. Utilize the
   `Sandbox Dashboard <https://sandbox.nuvei.com/login>`_ to test the integration without charging
   your customers. Once you are ready to accept payments, switch to the
   `Production Dashboard <https://cpanel.nuvei.com/login>`_.
#. Navigate to :menuselection:`My Integration Settings` via the :menuselection:`Settings` menu in
   the left sidebar and select your payment page in the :guilabel:`Website` dropdown.
#. Copy the :guilabel:`Merchant ID` and :guilabel:`Site ID` values and save them for later. Click
   :guilabel:`Reveal`, then copy the :guilabel:`Secret Key` and save it for later as well.

.. note::
   Nuvei supports additional functionality relating to error handling from the same page as above.
   For example, the following options are available for handling failed transactions: enable
   :guilabel:`User Trap` to redirect users back to the payment page and allow them to attempt
   another deposit, or :guilabel:`Decline Recovery` to display a popup suggesting alternative or
   similar payment methods.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Nuvei <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. Fill in the :guilabel:`Merchant Identifier`, :guilabel:`Site Identifier`, and :guilabel:`Secret Key`
   fields with the information saved at the step :ref:`payment_providers/nuvei/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. tip::
   You can also test Nuvei using the :ref:`test mode <payment_providers/test-mode>` and your Sandbox
   Dashboard values.

.. seealso::
   :doc:`../payment_providers`
