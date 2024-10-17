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
#. Nuvei uses two separate portals for Sandbox and Production environments. Utilize the
   `Sandbox Dashboard <https://sandbox.nuvei.com/login>`_ to test the integration without charging
   your customers. Once you are ready to accept payments, switch to the
   `Production Dashboard <https://cpanel.nuvei.com/login>`_.
#. Navigate to :menuselection:`My Integration Settings` via the :menuselection:`Settings` menu in
   the left sidebar. Select your payment page via the :guilabel:`Website` dropdown.
#. This page displays the configuration keys necessary for Odoo's integration. From this page,
   save the values for :guilabel:`Merchant ID` and :guilabel:`Site ID` for later. Also save your
   :guilabel:`Secret Key` which can be viewed after hitting :guilabel:`Reveal`.

.. note::
   Nuvei supports additional functionality relating to error handling from the same page as above.
   For example, enabling :guilabel:`User Trap` will redirect the users back to the Payment Page
   in case an Error or Decline occurs, allowing them to attempt another deposit. Enable
   :guilabel:`Decline Recovery` to Display a Pop-up dialog box suggesting similar and alternative
   payment methods when the previous transaction has failed.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Nuvei <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. Fill in the :guilabel:`Merchant Identifier`, :guilabel:`Site Identifier`, and :guilabel:`Secret Key`
   fields from the information saved at the step :ref:`payment_providers/nuvei/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. important::
   Within Odoo, the :guilabel:`State` field determines which credentials will be in use. When
   the :guilabel:`State` is in :guilabel:`Test Mode`, utilize the credentials from your Sandbox
   Dashboard. When the :guilabel:`State` is :guilabel:`Enabled`, utilize the credentials from your
   Production Dashboard. When testing, we recommend confirming your configuration on a test Odoo
   database, rather than on your main database.

.. seealso::
   :doc:`../payment_providers`
