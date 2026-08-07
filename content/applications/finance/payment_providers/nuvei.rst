:custom-css: payment_methods.css

=====
Nuvei
=====

`Nuvei <https://www.nuvei.com>`_ is a Canadian-based payment solution provider that covers
several Latin American countries, the US, and Canada. It allows businesses to accept credit cards
and several local payment methods.

.. _payment_providers/nuvei/dashboard:

Configuration on the Nuvei Dashboard
====================================

#. Create a Nuvei account, if necessary, via our `referral page <https://pages.nuvei.com/odoo-referral-0>`_.
#. Nuvei uses two separate portals for Sandbox and Production environments. Utilize the
   `Sandbox Dashboard <https://sandbox.nuvei.com/login>`_ to test the integration without charging
   your customers. Once you are ready to accept payments, switch to the
   `Production Dashboard <https://cpanel.nuvei.com/login>`_.
#. Go to :guilabel:`Settings` in the left sidebar, select :guilabel:`My Integration Settings`, then
   select your payment page in the :guilabel:`Website` dropdown menu.
#. Copy the :guilabel:`Merchant ID` and :guilabel:`Site ID` values and save them for :ref:`later
   <payment_providers/nuvei/odoo>`.
#. Click :guilabel:`Reveal`, then copy the :guilabel:`Secret Key` and save it for :ref:`later
   <payment_providers/nuvei/odoo>`.

.. tip::
   Nuvei supports additional functionality relating to error handling from the same page as above.
   For example, the following options are available for handling failed transactions: Enable
   :guilabel:`User Trap` to redirect users back to the payment page and allow them to attempt
   another deposit or :guilabel:`Decline Recovery` to display a popup suggesting alternative or
   similar payment methods.

.. _payment_providers/nuvei/odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Nuvei <payment_providers/add_new>` and fill in the
   :guilabel:`Merchant Identifier`, :guilabel:`Site Identifier`, and :guilabel:`Secret Key` fields
   with the information saved at the step :ref:`payment_providers/nuvei/dashboard`.
#. To activate the provider, change its state to :guilabel:`Enabled` or :guilabel:`Test Mode`.
#. Configure the rest of the options to your liking.

.. tip::
   You can also test Nuvei using the :ref:`test mode <payment_providers/test-mode>` and your Sandbox
   Dashboard values.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Astropay TEF

   .. figure:: payment_images/boleto.png
      :width: 64px
      :class: o-no-modal

      Boleto

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Local Payments

   .. figure:: payment_images/oxxopay.png
      :width: 64px
      :class: o-no-modal

      Oxxo Pay

   .. figure:: payment_images/pix.png
      :width: 64px
      :class: o-no-modal

      Pix

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      PSE

   .. figure:: payment_images/spei.png
      :width: 64px
      :class: o-no-modal

      SPEI

   .. figure:: payment_images/webpay.png
      :width: 64px
      :class: o-no-modal

      WebPay
