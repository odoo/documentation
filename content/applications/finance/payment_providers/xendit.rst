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

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/7eleven.png
      :alt: 7Eleven
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      7Eleven

   .. figure:: payment_method_images/akulaku.png
      :alt: Akulaku PayLater
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Akulaku PayLater

   .. figure:: payment_method_images/appota.png
      :alt: Appota
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Appota

   .. figure:: payment_method_images/bank.png
      :alt: Bangkok Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bangkok Bank

   .. figure:: payment_method_images/bank_bca.png
      :alt: BCA
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BCA

   .. figure:: payment_method_images/bank_permata.png
      :alt: Bank Permata
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank Permata

   .. figure:: payment_method_images/billease.png
      :alt: BillEase
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BillEase

   .. figure:: payment_method_images/bni.png
      :alt: Bank Negara Indonesia
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank Negara Indonesia

   .. figure:: payment_method_images/bri.png
      :alt: BRI
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BRI

   .. figure:: payment_method_images/bsi.png
      :alt: Bank Syariah Indonesia
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank Syariah Indonesia

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/cashalo.png
      :alt: Cashalo
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Cashalo

   .. figure:: payment_method_images/cebuana.png
      :alt: Cebuana
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Cebuana

   .. figure:: payment_method_images/cimb_niaga.png
      :alt: CIMB Niaga
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      CIMB Niaga

   .. figure:: payment_method_images/dana.png
      :alt: Dana
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Dana

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

   .. figure:: payment_method_images/grabpay.png
      :alt: GrabPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      GrabPay

   .. figure:: payment_method_images/jeniuspay.png
      :alt: JeniusPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      JeniusPay

   .. figure:: payment_method_images/kfh.png
      :alt: Kuwait Finance House
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Kuwait Finance House

   .. figure:: payment_method_images/kredivo.png
      :alt: Kredivo
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Kredivo

   .. figure:: payment_method_images/bank.png
      :alt: KrungThai Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      KrungThai Bank

   .. figure:: payment_method_images/linepay.png
      :alt: LINE Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      LINE Pay

   .. figure:: payment_method_images/linkaja.png
      :alt: LinkAja
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      LinkAja

   .. figure:: payment_method_images/mandiri.png
      :alt: Mandiri
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Mandiri

   .. figure:: payment_method_images/maya.png
      :alt: Maya
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Maya

   .. figure:: payment_method_images/ovo.png
      :alt: OVO
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      OVO

   .. figure:: payment_method_images/paynow.png
      :alt: PayNow
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PayNow

   .. figure:: payment_method_images/promptpay.png
      :alt: Prompt Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Prompt Pay

   .. figure:: payment_method_images/qris.png
      :alt: QRIS
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      QRIS

   .. figure:: payment_method_images/bank.png
      :alt: Siam Commerical Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Siam Commerical Bank

   .. figure:: payment_method_images/shopeepay.png
      :alt: ShopeePay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      ShopeePay

   .. figure:: payment_method_images/touch_n_go.png
      :alt: Touch'n Go
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Touch'n Go

   .. figure:: payment_method_images/truemoney.png
      :alt: TrueMoney
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      TrueMoney

   .. figure:: payment_method_images/bank.png
      :alt: United Overseas Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      United Overseas Bank

   .. figure:: payment_method_images/vietcapital.png
      :alt: Viet Capital
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Viet Capital

   .. figure:: payment_method_images/viettelpay.png
      :alt: Viettel Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Viettel Pay

   .. figure:: payment_method_images/vnpt.png
      :alt: VNPT Money
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      VNPT Money

   .. figure:: payment_method_images/vpb.png
      :alt: VP Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      VP Bank

   .. figure:: payment_method_images/wechat_pay.png
      :alt: WeChat Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      WeChat Pay

   .. figure:: payment_method_images/woori.png
      :alt: Woori Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Woori Bank

   .. figure:: payment_method_images/zalopay.png
      :alt: Zalopay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Zalopay
