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

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/alipay.png
      :alt: Alipay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Alipay

   .. figure:: payment_method_images/alipay_hk.png
      :alt: AlipayHK
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      AlipayHK

   .. figure:: payment_method_images/atome.png
      :alt: Atome
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Atome

   .. figure:: payment_method_images/bank.png
      :alt: Bank of Ayudhya
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank of Ayudhya

   .. figure:: payment_method_images/bank.png
      :alt: Bangkok Bank CWF
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bangkok Bank CWF

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/duitnow.png
      :alt: DuitNow
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      DuitNow

   .. figure:: payment_method_images/enets.png
      :alt: eNETS
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      eNETS

   .. figure:: payment_method_images/card.png
      :alt: FPS
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      FPS

   .. figure:: payment_method_images/gcash.png
      :alt: GCash
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      GCash

   .. figure:: payment_method_images/hoolah.png
      :alt: Hoolah
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Hoolah

   .. figure:: payment_method_images/humm.png
      :alt: Humm
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Humm

   .. figure:: payment_method_images/jkopay.png
      :alt: JKO Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      JKO Pay

   .. figure:: payment_method_images/bank.png
      :alt: Krung Thai Bank CWF
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Krung Thai Bank CWF

   .. figure:: payment_method_images/linepay.png
      :alt: LINE Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      LINE Pay

   .. figure:: payment_method_images/maya.png
      :alt: Maya
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Maya

   .. figure:: payment_method_images/maybank.png
      :alt: Maybank2u
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Maybank2u

   .. figure:: payment_method_images/momo.png
      :alt: MoMo
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      MoMo

   .. figure:: payment_method_images/octopus.png
      :alt: Octopus
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Octopus

   .. figure:: payment_method_images/pace.png
      :alt: Pace
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Pace

   .. figure:: payment_method_images/pay_id.png
      :alt: PayID
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PayID

   .. figure:: payment_method_images/payme.png
      :alt: PayMe
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PayMe

   .. figure:: payment_method_images/paypal.png
      :alt: PayPal
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PayPal

   .. figure:: payment_method_images/poli.png
      :alt: POLi
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      POLi

   .. figure:: payment_method_images/samsung_pay.png
      :alt: Samsung Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Samsung Pay

   .. figure:: payment_method_images/bank.png
      :alt: SCB Easy
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      SCB Easy

   .. figure:: payment_method_images/tendopay.png
      :alt: TendoPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      TendoPay

   .. figure:: payment_method_images/tenpay.png
      :alt: Tenpay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Tenpay

   .. figure:: payment_method_images/tmb.png
      :alt: TMB Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      TMB Bank

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

   .. figure:: payment_method_images/card.png
      :alt: TTB - TMBThanachart Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      TTB - TMBThanachart Bank

   .. figure:: payment_method_images/bank.png
      :alt: United Overseas Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      United Overseas Bank

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
