:custom-css: payment_methods.css

======
Xendit
======

`Xendit <https://www.xendit.co>`_ is an Indonesian-based payment solution provider that covers
several Southeast Asian countries. It allows businesses to accept credit cards as well as several
local payment methods.

.. note::
    * Credit card payments are processed through Odoo, while all other payment methods are handled
      via Xendit's website.
    * Xendit supports card payment tokenization, provided the customer has requested Merchant
      Initiated Transaction (MIT) from `Xendit Support <https://www.xendit.co/en/contact/>`_.

.. _payment_providers/xendit/configure_dashboard:

Configuration on the Xendit Dashboard
=====================================

#. `Create a Xendit account
   <https://dashboard.xendit.co/register/1?referral_code=odooid&countr_code=ID>`_ if necessary
   and log in to the `Xendit Dashboard <https://dashboard.xendit.co>`_.
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
#. In the :guilabel:`Webhook URL` section, enter your Odoo database's URL, followed by
   `/payment/xendit/webhook` (e.g., `https://example.odoo.com/payment/xendit/webhook`) in the field
   :guilabel:`Invoices paid` and click the :guilabel:`Test and save` button next to it.
#. To allow recurring payments for credit cards, go to :menuselection:`Configuration: Payment
   Channels` in the left part of the application page. Then, hover your mouse over the
   :guilabel:`Visa, Mastercard, JCB, Amex` channel, click :guilabel:`View Details`, and enable
   :guilabel:`Recurring Payments` by toggling the related switch.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Xendit <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. Fill in the :guilabel:`Secret Key` and :guilabel:`Webhook Token` fields with the
   information saved at the step :ref:`payment_providers/xendit/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/7eleven.png
      :width: 64px
      :class: o-no-modal

      7Eleven

   .. figure:: payment_images/akulaku.png
      :width: 64px
      :class: o-no-modal

      Akulaku PayLater

   .. figure:: payment_images/appota.png
      :width: 64px
      :class: o-no-modal

      Appota

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Bangkok Bank

   .. figure:: payment_images/bank_bca.png
      :width: 64px
      :class: o-no-modal

      BCA

   .. figure:: payment_images/bank_permata.png
      :width: 64px
      :class: o-no-modal

      Bank Permata

   .. figure:: payment_images/billease.png
      :width: 64px
      :class: o-no-modal

      BillEase

   .. figure:: payment_images/bni.png
      :width: 64px
      :class: o-no-modal

      Bank Negara Indonesia

   .. figure:: payment_images/bri.png
      :width: 64px
      :class: o-no-modal

      BRI

   .. figure:: payment_images/bsi.png
      :width: 64px
      :class: o-no-modal

      Bank Syariah Indonesia

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/cashalo.png
      :width: 64px
      :class: o-no-modal

      Cashalo

   .. figure:: payment_images/cebuana.png
      :width: 64px
      :class: o-no-modal

      Cebuana

   .. figure:: payment_images/cimb_niaga.png
      :width: 64px
      :class: o-no-modal

      CIMB Niaga

   .. figure:: payment_images/dana.png
      :width: 64px
      :class: o-no-modal

      Dana

   .. figure:: payment_images/fpx.png
      :width: 64px
      :class: o-no-modal

      FPX

   .. figure:: payment_images/gcash.png
      :width: 64px
      :class: o-no-modal

      GCash

   .. figure:: payment_images/grabpay.png
      :width: 64px
      :class: o-no-modal

      GrabPay

   .. figure:: payment_images/jeniuspay.png
      :width: 64px
      :class: o-no-modal

      JeniusPay

   .. figure:: payment_images/kfh.png
      :width: 64px
      :class: o-no-modal

      Kuwait Finance House

   .. figure:: payment_images/kredivo.png
      :width: 64px
      :class: o-no-modal

      Kredivo

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      KrungThai Bank

   .. figure:: payment_images/linepay.png
      :width: 64px
      :class: o-no-modal

      LINE Pay

   .. figure:: payment_images/linkaja.png
      :width: 64px
      :class: o-no-modal

      LinkAja

   .. figure:: payment_images/mandiri.png
      :width: 64px
      :class: o-no-modal

      Mandiri

   .. figure:: payment_images/maya.png
      :width: 64px
      :class: o-no-modal

      Maya

   .. figure:: payment_images/ovo.png
      :width: 64px
      :class: o-no-modal

      OVO

   .. figure:: payment_images/paynow.png
      :width: 64px
      :class: o-no-modal

      PayNow

   .. figure:: payment_images/promptpay.png
      :width: 64px
      :class: o-no-modal

      Prompt Pay

   .. figure:: payment_images/qris.png
      :width: 64px
      :class: o-no-modal

      QRIS

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Siam Commerical Bank

   .. figure:: payment_images/shopeepay.png
      :width: 64px
      :class: o-no-modal

      ShopeePay

   .. figure:: payment_images/touch_n_go.png
      :width: 64px
      :class: o-no-modal

      Touch'n Go

   .. figure:: payment_images/truemoney.png
      :width: 64px
      :class: o-no-modal

      TrueMoney

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      United Overseas Bank

   .. figure:: payment_images/vietcapital.png
      :width: 64px
      :class: o-no-modal

      Viet Capital

   .. figure:: payment_images/viettelpay.png
      :width: 64px
      :class: o-no-modal

      Viettel Pay

   .. figure:: payment_images/vnpt.png
      :width: 64px
      :class: o-no-modal

      VNPT Money

   .. figure:: payment_images/vpb.png
      :width: 64px
      :class: o-no-modal

      VP Bank

   .. figure:: payment_images/wechat_pay.png
      :width: 64px
      :class: o-no-modal

      WeChat Pay

   .. figure:: payment_images/woori.png
      :width: 64px
      :class: o-no-modal

      Woori Bank

   .. figure:: payment_images/zalopay.png
      :width: 64px
      :class: o-no-modal

      Zalopay
