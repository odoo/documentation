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

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/ach_direct_debit.png
      :alt: ACH Direct Debit
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      ACH Direct Debit

   .. figure:: payment_method_images/affirm.png
      :alt: Affirm
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Affirm

   .. figure:: payment_method_images/afterpay.png
      :alt: Afterpay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Afterpay

   .. figure:: payment_method_images/alipay.png
      :alt: Alipay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Alipay

   .. figure:: payment_method_images/alma.png
      :alt: Alma
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Alma

   .. figure:: payment_method_images/amazon_pay.png
      :alt: Amazon Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Amazon Pay

   .. figure:: payment_method_images/bacs_direct_debit.png
      :alt: BACS Direct Debit
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BACS Direct Debit

   .. figure:: payment_method_images/bancontact.png
      :alt: Bancontact
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bancontact

   .. figure:: payment_method_images/becs_direct_debit.png
      :alt: BECS Direct Debit
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BECS Direct Debit

   .. figure:: payment_method_images/boleto.png
      :alt: Boleto
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Boleto

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/cash_app_pay.png
      :alt: Cash App Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Cash App Pay

   .. figure:: payment_method_images/clearpay.png
      :alt: Clearpay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Clearpay

   .. figure:: payment_method_images/eps.png
      :alt: EPS
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      EPS

   .. figure:: payment_method_images/fpx.png
      :alt: FPX
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      FPX

   .. figure:: payment_method_images/grabpay.png
      :alt: GrabPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      GrabPay

   .. figure:: payment_method_images/ideal_wero.png
      :alt: iDEAL
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      iDEAL

   .. figure:: payment_method_images/klarna.png
      :alt: Klarna
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Klarna

   .. figure:: payment_method_images/mobile_pay.png
      :alt: MobilePay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      MobilePay

   .. figure:: payment_method_images/multibanco.png
      :alt: Multibanco
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Multibanco

   .. figure:: payment_method_images/p24.png
      :alt: P24
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      P24

   .. figure:: payment_method_images/paynow.png
      :alt: PayNow
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PayNow

   .. figure:: payment_method_images/paypal.png
      :alt: Paypal
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Paypal

   .. figure:: payment_method_images/pix.png
      :alt: Pix
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Pix

   .. figure:: payment_method_images/promptpay.png
      :alt: Prompt Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Prompt Pay

   .. figure:: payment_method_images/revolut_pay.png
      :alt: Revolut Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Revolut Pay

   .. figure:: payment_method_images/satispay.png
      :alt: Satispay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Satispay

   .. figure:: payment_method_images/sepa.png
      :alt: SEPA Direct Debit
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      SEPA Direct Debit

   .. figure:: payment_method_images/swish.png
      :alt: Swish
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Swish

   .. figure:: payment_method_images/twint.png
      :alt: Twint
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Twint

   .. figure:: payment_method_images/upi.png
      :alt: UPI
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      UPI

   .. figure:: payment_method_images/unknown.png
      :alt: Express Checkout
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Express Checkout

   .. figure:: payment_method_images/wechat_pay.png
      :alt: WeChat Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      WeChat Pay

   .. figure:: payment_method_images/zip.png
      :alt: Zip
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Zip
