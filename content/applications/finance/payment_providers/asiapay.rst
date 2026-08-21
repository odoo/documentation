:custom-css: payment_methods.css

=======
AsiaPay
=======

`AsiaPay <https://www.asiapay.com/>`_ is an online payments provider established in Hong Kong and
covering several Asian countries and payment methods.

.. _payment_providers/asiapay/configure_dashboard:

Configuration on AsiaPay Dashboard
==================================

#. Log into AsiaPay Dashboard according to the account provided by AsiaPay.

   - `PayDollar <https://www.paydollar.com/b2c2/eng/merchant/index.jsp>`_: For markets in HK,
     CN, MO, TW, SG, MY, IN, VN, NZ and AU
   - `PesoPay <https://www.pesopay.com/b2c2/eng/merchant/index.jsp>`_: For market in PH
   - `SiamPay <https://www.siampay.com/b2c2/eng/merchant/index.jsp>`_: For market in TH
   - `BimoPay <https://www.bimopay.com/b2c2/eng/merchant/index.jsp>`_: For market in ID

#. Go to :menuselection:`Profile --> Account Information`. Copy the values of the
   :guilabel:`Currency` and :guilabel:`Secure Hash` fields and save them for later.
#. | Go to :menuselection:`Profile --> Payment Account Settings` and enable the option
     :guilabel:`Return Value Link (Datafeed)`;
   | Enter your Odoo database URL followed by `/payment/asiapay/webhook` in the
     :guilabel:`Return Value Link (Datafeed)` text field. For example:
     `https://yourcompany.odoo.com/payment/asiapay/webhook`;
   | Click on :guilabel:`Test` to check if the webhook is working correctly.
#. Click on :guilabel:`Update` to finalize the configuration.

.. _payment_providers/asiapay/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider AsiaPay <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. | In the :guilabel:`Credentials` tab, choose the :guilabel:`Brand` of your Asiapay account. Then
     fill in the :guilabel:`Merchant ID` and :guilabel:`Secure Hash Secret`, and the
     :guilabel:`Currency` in the :guilabel:`Configuration` tab with the values you saved at the
     step :ref:`payment_providers/asiapay/configure_dashboard`;
   | By default, the payment provider AsiaPay is configured to verify the secret hash with the hash
     function `SHA1`. If a different function is :ref:`set on your account
     <payment_providers/asiapay/configure_dashboard>`, activate the :ref:`developer mode
     <developer-mode>` and set the same value to the field :guilabel:`Secure Hash Function` in the
     :guilabel:`Credentials` tab.
#. Configure the rest of the options to your liking.

.. seealso::
   - :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/alipay.png
      :width: 64px
      :class: o-no-modal

      Alipay

   .. figure:: payment_images/alipay_hk.png
      :width: 64px
      :class: o-no-modal

      AlipayHK

   .. figure:: payment_images/atome.png
      :width: 64px
      :class: o-no-modal

      Atome

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Bank of Ayudhya

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Bangkok Bank CWF

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/duitnow.png
      :width: 64px
      :class: o-no-modal

      DuitNow

   .. figure:: payment_images/enets.png
      :width: 64px
      :class: o-no-modal

      eNETS

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      FPS

   .. figure:: payment_images/gcash.png
      :width: 64px
      :class: o-no-modal

      GCash

   .. figure:: payment_images/hoolah.png
      :width: 64px
      :class: o-no-modal

      Hoolah

   .. figure:: payment_images/humm.png
      :width: 64px
      :class: o-no-modal

      Humm

   .. figure:: payment_images/jkopay.png
      :width: 64px
      :class: o-no-modal

      JKO Pay

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Krung Thai Bank CWF

   .. figure:: payment_images/linepay.png
      :width: 64px
      :class: o-no-modal

      LINE Pay

   .. figure:: payment_images/maya.png
      :width: 64px
      :class: o-no-modal

      Maya

   .. figure:: payment_images/maybank.png
      :width: 64px
      :class: o-no-modal

      Maybank2u

   .. figure:: payment_images/momo.png
      :width: 64px
      :class: o-no-modal

      MoMo

   .. figure:: payment_images/octopus.png
      :width: 64px
      :class: o-no-modal

      Octopus

   .. figure:: payment_images/pace.png
      :width: 64px
      :class: o-no-modal

      Pace

   .. figure:: payment_images/pay_id.png
      :width: 64px
      :class: o-no-modal

      PayID

   .. figure:: payment_images/payme.png
      :width: 64px
      :class: o-no-modal

      PayMe

   .. figure:: payment_images/paypal.png
      :width: 64px
      :class: o-no-modal

      PayPal

   .. figure:: payment_images/poli.png
      :width: 64px
      :class: o-no-modal

      POLi

   .. figure:: payment_images/samsung_pay.png
      :width: 64px
      :class: o-no-modal

      Samsung Pay

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      SCB Easy

   .. figure:: payment_images/tendopay.png
      :width: 64px
      :class: o-no-modal

      TendoPay

   .. figure:: payment_images/tenpay.png
      :width: 64px
      :class: o-no-modal

      Tenpay

   .. figure:: payment_images/tmb.png
      :width: 64px
      :class: o-no-modal

      TMB Bank

   .. figure:: payment_images/touch_n_go.png
      :width: 64px
      :class: o-no-modal

      Touch'n Go

   .. figure:: payment_images/truemoney.png
      :width: 64px
      :class: o-no-modal

      TrueMoney

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      TTB - TMBThanachart Bank

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      United Overseas Bank

   .. figure:: payment_images/wechat_pay.png
      :width: 64px
      :class: o-no-modal

      WeChat Pay

   .. figure:: payment_images/zip.png
      :width: 64px
      :class: o-no-modal

      Zip
