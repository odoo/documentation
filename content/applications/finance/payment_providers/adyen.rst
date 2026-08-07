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

.. figure:: payment_images/ach_direct_debit.png
   :width: 64px

   ACH Direct Debit

.. figure:: payment_images/affirm.png
   :width: 64px

   Affirm

.. figure:: payment_images/afterpay.png
   :width: 64px

   Afterpay

.. figure:: payment_images/alipay.png
   :width: 64px

   Alipay

.. figure:: payment_images/alipay_hk.png
   :width: 64px

   AliPayHK

.. figure:: payment_images/alma.png
   :width: 64px

   Alma

.. figure:: payment_images/bacs_direct_debit.png
   :width: 64px

   BACS Direct Debit

.. figure:: payment_images/bancontact.png
   :width: 64px

   Bancontact

.. figure:: payment_images/benefit.png
   :width: 64px

   Benefit

.. figure:: payment_images/bizum.png
   :width: 64px

   Bizum

.. figure:: payment_images/blik.png
   :width: 64px

   BLIK

.. figure:: payment_images/card.png
   :width: 64px

   Card

.. figure:: payment_images/cash_app_pay.png
   :width: 64px

   Cash App Pay

.. figure:: payment_images/clearpay.png
   :width: 64px

   Clearpay

.. figure:: payment_images/dana.png
   :width: 64px

   Dana

.. figure:: payment_images/duitnow.png
   :width: 64px

   DuitNow

.. figure:: payment_images/eps.png
   :width: 64px

   EPS

.. figure:: payment_images/fpx.png
   :width: 64px

   FPX

.. figure:: payment_images/gcash.png
   :width: 64px

   GCash

.. figure:: payment_images/gopay.png
   :width: 64px

   GoPay

.. figure:: payment_images/ideal_wero.png
   :width: 64px

   iDEAL

.. figure:: payment_images/kakaopay.png
   :width: 64px

   KakaoPay

.. figure:: payment_images/klarna.png
   :width: 64px

   Klarna

.. figure:: payment_images/klarna.png
   :width: 64px

   Klarna - Pay Now

.. figure:: payment_images/klarna.png
   :width: 64px

   Klarna - Pay over time

.. figure:: payment_images/mbway.png
   :width: 64px

   MB WAY

.. figure:: payment_images/mobile_pay.png
   :width: 64px

   MobilePay

.. figure:: payment_images/momo.png
   :width: 64px

   MoMo

.. figure:: payment_images/multibanco.png
   :width: 64px

   Multibanco

.. figure:: payment_images/napas_card.png
   :width: 64px

   Napas Card

.. figure:: payment_images/bank.png
   :width: 64px

   Online Banking Czech Republic

.. figure:: payment_images/bank.png
   :width: 64px

   Online Banking India

.. figure:: payment_images/bank.png
   :width: 64px

   Online Banking Slovakia

.. figure:: payment_images/bank.png
   :width: 64px

   Online Banking Thailand

.. figure:: payment_images/bank.png
   :width: 64px

   Open banking

.. figure:: payment_images/p24.png
   :width: 64px

   P24

.. figure:: payment_images/paybright.png
   :width: 64px

   PayBright

.. figure:: payment_images/paysafecard.png
   :width: 64px

   PaySafeCard

.. figure:: payment_images/paynow.png
   :width: 64px

   PayNow

.. figure:: payment_images/paypal.png
   :width: 64px

   Paypal

.. figure:: payment_images/paytm.png
   :width: 64px

   Paytm

.. figure:: payment_images/paytrail.png
   :width: 64px

   Paytrail

.. figure:: payment_images/pix.png
   :width: 64px

   Pix

.. figure:: payment_images/promptpay.png
   :width: 64px

   Prompt Pay

.. figure:: payment_images/ratepay.png
   :width: 64px

   Ratepay

.. figure:: payment_images/samsung_pay.png
   :width: 64px

   Samsung Pay

.. figure:: payment_images/sepa.png
   :width: 64px

   SEPA Direct Debit

.. figure:: payment_images/swish.png
   :width: 64px

   Swish

.. figure:: payment_images/touch_n_go.png
   :width: 64px

   Touch'n Go

.. figure:: payment_images/trustly.png
   :width: 64px

   Trustly

.. figure:: payment_images/twint.png
   :width: 64px

   Twint

.. figure:: payment_images/upi.png
   :width: 64px

   UPI

.. figure:: payment_images/vipps.png
   :width: 64px

   Vipps

.. figure:: payment_images/wallet.png
   :width: 64px

   Wallets India

.. figure:: payment_images/walley.png
   :width: 64px

   Walley

.. figure:: payment_images/wechat_pay.png
   :width: 64px

   WeChat Pay

.. figure:: payment_images/zip.png
   :width: 64px

   Zip
