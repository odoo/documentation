:custom-css: payment_methods.css

====
PayU
====

`PayU <https://payu.in/>`_ is an online payment provider covering India.

.. _payment_providers/payu/oauth-connection:

Create a PayU account with Odoo
===============================

.. note::
   This flow does not support the :ref:`test mode <payment_providers/test-mode>`.

#. :ref:`Navigate to the PayU payment provider <payment_providers/supported_providers>` and
   click :guilabel:`Connect`.
#. Go through the account creation process and enter the verification codes when prompted.

   .. tip::
      If you already have a PayU account, enter your credentials to log into your existing account.

#. At the end of the process, click :guilabel:`Allow access to the account`. If all required
   information has been submitted, you are then redirected to Odoo, and the payment provider is
   :guilabel:`Enabled`.

.. _payment_providers/payu/webhook-input:

Webhook configuration
=====================

#. Log into the `PayU Dashboard <https://onboarding.payu.in/app/account/>`_.
#. Click :guilabel:`Developer` in the left menu, then, select :guilabel:`Webhooks`.
#. Click :guilabel:`Create Webhook`.
#. Select :guilabel:`Payments` as the type.
#. Select :guilabel:`Successful` as the event.
#. | Enter your Odoo database URL followed by `/payment/payu/webhook` in the :guilabel:`Webhook URL`
     field.
   | For example: https://example.odoo.com/payment/payu/webhook.
#. Click :guilabel:`Create` to create the webhook.
#. Repeat the same steps to create another webhook, but select :guilabel:`Failed` as the event
   instead of :guilabel:`Successful`.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/card.png
      :alt: EMI
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      EMI

   .. figure:: payment_method_images/bank.png
      :alt: Netbanking
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Netbanking

   .. figure:: payment_method_images/pay_later.png
      :alt: Pay Later
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Pay Later

   .. figure:: payment_method_images/upi.png
      :alt: UPI
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      UPI

   .. figure:: payment_method_images/wallet.png
      :alt: Wallets India
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Wallets India
