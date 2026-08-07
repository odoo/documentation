:custom-css: payment_methods.css

=====
Adyen
=====

`Adyen <https://www.adyen.com/>`_ is a Dutch company that offers several online payment
possibilities.

.. note::
   Adyen is more focused on enterprise customers and may require a minimum number of transactions
   and a minimum processed volume.

.. _payment_providers/adyen/configure_dashboard:

Adyen configuration
===================

#. Create an Adyen account if necessary and log into your `Adyen Customer Area
   <https://ca-live.adyen.com/>`_.

   .. tip::
      Log into your **Test account** to try the integration without charging customers.
      Switch to your **Live account** once you are ready to accept payments.

#. `Contact the Adyen support team <https://docs.adyen.com/platforms/quickstart-guide/support#contact-adyen-support>`_
   to enable the **Multiple partial capture** feature.
#. In the Adyen Customer Area, go to :menuselection:`Developers --> API credentials` and click the
   relevant API credential user name in the list or click :icon:`fa-plus-circle` :guilabel:`Create
   new credential` to create a new one.
#. In the :guilabel:`Server settings` section, click :guilabel:`Generate API key`, then click the
   :icon:`fa-copy` (:guilabel:`Copy API key`) icon and save the value for the
   :ref:`payment_providers/adyen/configure_odoo` step.
#. In the :guilabel:`Client settings` section, click :guilabel:`Generate client key`, then click the
   :icon:`fa-copy` (:guilabel:`Copy client key`) icon and save the value for the
   :ref:`payment_providers/adyen/configure_odoo` step.
#. Enter your Odoo database URL in the :guilabel:`Add allowed origins` field, then click
   :guilabel:`Add`.
#. Click :guilabel:`Save changes` at the bottom of the page.
#. Go to :menuselection:`Developers --> Webhooks` in the left menu and click :icon:`fa-plus-circle`
   :guilabel:`Create new webhook`.
#. In the :guilabel:`Create new webhook` popup, click :guilabel:`Add` on the :guilabel:`Standard
   webhook` line.
#. On the :guilabel:`Webhook generation` form, in the :guilabel:`Server configuration` section,
   enter your Odoo database :guilabel:`URL` followed by `/payment/adyen/notification`.
#. In the :guilabel:`Security` section, click :guilabel:`Generate` under :guilabel:`HMAC`, then
   click the :icon:`fa-copy` (:guilabel:`Copy HMAC to the clipboard`) icon and save the value for
   the :ref:`payment_providers/adyen/configure_odoo` step.
#. Click :guilabel:`Save configuration` at the bottom of the page.
#. Go to :menuselection:`Developers --> API URLs`, then copy the :guilabel:`Prefix` and save the
   value for the :ref:`payment_providers/adyen/configure_odoo` step.

.. _payment_providers/adyen/configure_odoo:

Odoo configuration
==================

#. :ref:`Navigate to the payment provider Ayden <payment_providers/supported_providers>`.
#. Fill in the :ref:`Merchant Account <adyen/merchant-account>`, :guilabel:`API Key`,
   :guilabel:`Client Key`, :guilabel:`HMAC Key`, and :guilabel:`API URL Prefix` fields with the
   values saved at the :ref:`Adyen configuration step
   <payment_providers/adyen/configure_dashboard>`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. tip::
   If you want to :ref:`test Adyen without affecting live transactions
   <payment_providers/test-mode>`, use your **Test account** credentials, enter
   `https://checkout-test.adyen.com` in the :guilabel:`API URL Prefix` field, and set the
   :guilabel:`State` field to :guilabel:`Test Mode`.

Manual capture
==============

To enable :ref:`manual capture <payment_providers/manual_capture>` for Adyen payments, follow
these steps:

#. :ref:`Navigate to the payment provider Ayden <payment_providers/supported_providers>`.
#. Go to the :guilabel:`Configuration` tab and enable :guilabel:`Capture Amount Manually`.
#. Log in to your Adyen Customer Area, then go to :menuselection:`Settings` and click
   :guilabel:`Company` in the :guilabel:`Account management` section.
#. In the :guilabel:`General` section, click the :icon:`fa-pencil` (:guilabel:`Edit property`)
   icon next to the :guilabel:`Capture Delay` field.
#. In the popup, set the :guilabel:`Capture delay` field to :guilabel:`Manual` and click
   :guilabel:`Save`.

.. note::
   - If the transaction is not captured within 7 days, the customer is entitled to revoke it.
   - You can :ref:`manually capture <payment_providers/manual_capture>` and :ref:`refund
     <payment_providers/refunds>` payments directly from your Adyen Customer Area.

.. seealso::
   :doc:`../payment_providers`

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

   .. figure:: payment_method_images/alipay_hk.png
      :alt: AliPayHK
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      AliPayHK

   .. figure:: payment_method_images/alma.png
      :alt: Alma
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Alma

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

   .. figure:: payment_method_images/benefit.png
      :alt: Benefit
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Benefit

   .. figure:: payment_method_images/bizum.png
      :alt: Bizum
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bizum

   .. figure:: payment_method_images/blik.png
      :alt: BLIK
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BLIK

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

   .. figure:: payment_method_images/dana.png
      :alt: Dana
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Dana

   .. figure:: payment_method_images/duitnow.png
      :alt: DuitNow
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      DuitNow

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

   .. figure:: payment_method_images/gcash.png
      :alt: GCash
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      GCash

   .. figure:: payment_method_images/gopay.png
      :alt: GoPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      GoPay

   .. figure:: payment_method_images/ideal_wero.png
      :alt: iDEAL
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      iDEAL

   .. figure:: payment_method_images/kakaopay.png
      :alt: KakaoPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      KakaoPay

   .. figure:: payment_method_images/klarna.png
      :alt: Klarna
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Klarna

   .. figure:: payment_method_images/klarna.png
      :alt: Klarna - Pay Now
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Klarna - Pay Now

   .. figure:: payment_method_images/klarna.png
      :alt: Klarna - Pay over time
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Klarna - Pay over time

   .. figure:: payment_method_images/mbway.png
      :alt: MB WAY
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      MB WAY

   .. figure:: payment_method_images/mobile_pay.png
      :alt: MobilePay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      MobilePay

   .. figure:: payment_method_images/momo.png
      :alt: MoMo
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      MoMo

   .. figure:: payment_method_images/multibanco.png
      :alt: Multibanco
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Multibanco

   .. figure:: payment_method_images/napas_card.png
      :alt: Napas Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Napas Card

   .. figure:: payment_method_images/bank.png
      :alt: Online Banking Czech Republic
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Online Banking Czech Republic

   .. figure:: payment_method_images/bank.png
      :alt: Online Banking India
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Online Banking India

   .. figure:: payment_method_images/bank.png
      :alt: Online Banking Slovakia
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Online Banking Slovakia

   .. figure:: payment_method_images/bank.png
      :alt: Online Banking Thailand
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Online Banking Thailand

   .. figure:: payment_method_images/bank.png
      :alt: Open banking
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Open banking

   .. figure:: payment_method_images/p24.png
      :alt: P24
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      P24

   .. figure:: payment_method_images/paybright.png
      :alt: PayBright
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PayBright

   .. figure:: payment_method_images/paysafecard.png
      :alt: PaySafeCard
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PaySafeCard

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

   .. figure:: payment_method_images/paytm.png
      :alt: Paytm
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Paytm

   .. figure:: payment_method_images/paytrail.png
      :alt: Paytrail
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Paytrail

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

   .. figure:: payment_method_images/ratepay.png
      :alt: Ratepay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Ratepay

   .. figure:: payment_method_images/samsung_pay.png
      :alt: Samsung Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Samsung Pay

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

   .. figure:: payment_method_images/touch_n_go.png
      :alt: Touch'n Go
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Touch'n Go

   .. figure:: payment_method_images/trustly.png
      :alt: Trustly
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Trustly

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

   .. figure:: payment_method_images/vipps.png
      :alt: Vipps
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Vipps

   .. figure:: payment_method_images/wallet.png
      :alt: Wallets India
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Wallets India

   .. figure:: payment_method_images/walley.png
      :alt: Walley
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Walley

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
