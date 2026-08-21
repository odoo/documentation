:custom-css: payment_methods.css

======
Stripe
======

`Stripe <https://stripe.com/>`_ is a United States-based online payment solution provider allowing
businesses to accept **credit cards** and other payment methods.

.. seealso::
   - `List of countries supported by Stripe <https://stripe.com/global>`_
   - `List of payment methods supported by Stripe <https://stripe.com/payments/payment-methods>`_
   - :doc:`../payment_providers`
   - :doc:`Use Stripe as a payment terminal in Point of Sale
     <../../sales/point_of_sale/payment_methods/terminals/stripe>`

.. _payment_providers/stripe/create_account:

Create your Stripe account with Odoo
====================================

To create a new Stripe account and link it to your Odoo database, make sure the company's
:guilabel:`Email` is configured in the :ref:`company's settings <general/companies/company>`, then
follow the steps below according to your hosting type:

.. tabs::
   .. group-tab:: Odoo Online

      #. :ref:`Navigate to the payment provider Stripe <payment_providers/supported_providers>` and
         click :guilabel:`Connect Stripe`.
      #. Go through the setup process and confirm your email address when Stripe sends you a
         confirmation email.
      #. At the end of the process, click :guilabel:`Agree and submit`. If all requested information
         has been submitted, you are then redirected to Odoo, and your payment provider is enabled.

   .. group-tab:: Odoo.sh or On-premise

      #. :ref:`Navigate to the payment provider Stripe <payment_providers/supported_providers>` and
         click :guilabel:`Connect Stripe`.
      #. Go through the setup process and confirm your email address when Stripe sends you a
         confirmation email.
      #. At the end of the process, click :guilabel:`Agree and submit`; you are then redirected to
         the payment provider **Stripe** in Odoo.
      #. :ref:`Fill in your credentials <payment_providers/stripe/manual_input>`.
      #. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. tip::
   If you have created an account instead of :ref:`linking an existing one
   <payment_providers/stripe/manual_input>`, :ref:`enable the developer mode <developer-mode>`, then
   click :guilabel:`Reset your Stripe Account` on the Stripe payment provider form, then
   :ref:`fill in your Stripe account's credentials <payment_providers/stripe/manual_input>`.

.. _payment_providers/stripe/manual_input:

Manual credential input
=======================

Manual credential input is needed, for example, when linking an existing Stripe account to your
Odoo database, when using an account :ref:`created on Odoo.sh or On-premise
<payment_providers/stripe/create_account>`, or when :ref:`testing Stripe without affecting live
transactions <payment_providers/test-mode>`.

.. _payment_providers/stripe/stripe-configuration:

Stripe configuration
--------------------

#. Go to `the API keys page on Stripe <https://dashboard.stripe.com/account/apikeys>`_, or log into
   your Stripe dashboard and go to :menuselection:`Developers --> API Keys`.
#. In the :guilabel:`Standard keys` section, copy the :guilabel:`Publishable key` and the
   :guilabel:`Secret key` and save them for the :ref:`payment_providers/stripe/odoo-configuration`
   step.

.. _payment_providers/stripe/odoo-configuration:

Odoo configuration
------------------

#. :ref:`Enable the developer mode <developer-mode>`.
#. :ref:`Navigate to the Stripe payment provider <payment_providers/supported_providers>`.
#. In the :guilabel:`Credentials` tab, fill in the :guilabel:`Publishable Key` and
   :guilabel:`Secret Key` fields with the values you :ref:`previously saved
   <payment_providers/stripe/stripe-configuration>`.
#. Click :guilabel:`Generate your webhook`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. tip::
   - You can also test Stripe without affecting live transactions using the :ref:`test mode
     <payment_providers/test-mode>` and the :ref:`API keys
     <payment_providers/stripe/stripe-configuration>` of your `Stripe account's Test Mode or
     a sandbox environment <https://docs.stripe.com/testing-use-cases>`_.
   - To link the same Stripe account to :doc:`multiple companies
     </applications/general/companies/multi_company>` in a database, :ref:`create an account
     <payment_providers/stripe/create_account>` and :ref:`fill in the credentials
     <payment_providers/stripe/manual_input>` for one company, then reuse the same credentials and
     webhook for the others. To view the webhook, go to the `Webhooks page on Stripe
     <https://dashboard.stripe.com/webhooks>`_, or log into your Stripe dashboard and go to
     :menuselection:`Developers --> Webhooks`. Click the destination in the list, then click the
     :icon:`fa-eye` (:guilabel:`Reveal secret`) icon next to the :guilabel:`Signing secret`
     field and copy the value.

Enable Apple Pay
================

To allow customers to use the Apple Pay button to pay for their eCommerce orders, :ref:`navigate to
the Stripe payment provider <payment_providers/supported_providers>`, then go to the
:guilabel:`Configuration` tab, enable :guilabel:`Allow Express Checkout`, and click
:guilabel:`Enable Apple Pay`.

.. seealso::
   :ref:`Express checkout and Google Pay <payment_providers/express_checkout>`

.. tip::
   Stripe allows to :ref:`manually capture <payment_providers/manual_capture>` and :ref:`refund
   <payment_providers/refunds>` payments either from Odoo or directly from the Stripe dashboard.

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/ach_direct_debit.png
      :width: 64px
      :class: o-no-modal

      ACH Direct Debit

   .. figure:: payment_images/affirm.png
      :width: 64px
      :class: o-no-modal

      Affirm

   .. figure:: payment_images/afterpay.png
      :width: 64px
      :class: o-no-modal

      Afterpay

   .. figure:: payment_images/alipay.png
      :width: 64px
      :class: o-no-modal

      Alipay

   .. figure:: payment_images/alma.png
      :width: 64px
      :class: o-no-modal

      Alma

   .. figure:: payment_images/amazon_pay.png
      :width: 64px
      :class: o-no-modal

      Amazon Pay

   .. figure:: payment_images/bacs_direct_debit.png
      :width: 64px
      :class: o-no-modal

      BACS Direct Debit

   .. figure:: payment_images/bancontact.png
      :width: 64px
      :class: o-no-modal

      Bancontact

   .. figure:: payment_images/becs_direct_debit.png
      :width: 64px
      :class: o-no-modal

      BECS Direct Debit

   .. figure:: payment_images/boleto.png
      :width: 64px
      :class: o-no-modal

      Boleto

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/cash_app_pay.png
      :width: 64px
      :class: o-no-modal

      Cash App Pay

   .. figure:: payment_images/clearpay.png
      :width: 64px
      :class: o-no-modal

      Clearpay

   .. figure:: payment_images/eps.png
      :width: 64px
      :class: o-no-modal

      EPS

   .. figure:: payment_images/fpx.png
      :width: 64px
      :class: o-no-modal

      FPX

   .. figure:: payment_images/grabpay.png
      :width: 64px
      :class: o-no-modal

      GrabPay

   .. figure:: payment_images/ideal_wero.png
      :width: 64px
      :class: o-no-modal

      iDEAL

   .. figure:: payment_images/klarna.png
      :width: 64px
      :class: o-no-modal

      Klarna

   .. figure:: payment_images/mobile_pay.png
      :width: 64px
      :class: o-no-modal

      MobilePay

   .. figure:: payment_images/multibanco.png
      :width: 64px
      :class: o-no-modal

      Multibanco

   .. figure:: payment_images/p24.png
      :width: 64px
      :class: o-no-modal

      P24

   .. figure:: payment_images/paynow.png
      :width: 64px
      :class: o-no-modal

      PayNow

   .. figure:: payment_images/paypal.png
      :width: 64px
      :class: o-no-modal

      Paypal

   .. figure:: payment_images/pix.png
      :width: 64px
      :class: o-no-modal

      Pix

   .. figure:: payment_images/promptpay.png
      :width: 64px
      :class: o-no-modal

      Prompt Pay

   .. figure:: payment_images/revolut_pay.png
      :width: 64px
      :class: o-no-modal

      Revolut Pay

   .. figure:: payment_images/satispay.png
      :width: 64px
      :class: o-no-modal

      Satispay

   .. figure:: payment_images/sepa.png
      :width: 64px
      :class: o-no-modal

      SEPA Direct Debit

   .. figure:: payment_images/swish.png
      :width: 64px
      :class: o-no-modal

      Swish

   .. figure:: payment_images/twint.png
      :width: 64px
      :class: o-no-modal

      Twint

   .. figure:: payment_images/upi.png
      :width: 64px
      :class: o-no-modal

      UPI

   .. figure:: payment_images/unknown.png
      :width: 64px
      :class: o-no-modal

      Express Checkout

   .. figure:: payment_images/wechat_pay.png
      :width: 64px
      :class: o-no-modal

      WeChat Pay

   .. figure:: payment_images/zip.png
      :width: 64px
      :class: o-no-modal

      Zip
