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
     :guilabel:`Return Value Link (Datefeed)`;
   | Enter your Odoo database URL followed by `/payment/asiapay/webhook` in the
     :guilabel:`Return Value Link (Datefeed)` text field. For example:
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
   :doc:`../payment_providers`

Supported payment methods and features in Odoo
==============================================

.. note::
   AsiaPay doesn't support manual capture, refunds, or tokenization.

.. |V| replace:: :icon:`fa-check`
.. |X| replace:: :icon:`fa-times`

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: auto

   * - Payment method
     - Currencies
     - Countries
   * - Afterpay
     - AUD, CAD, NZD, USD
     - Australia, Canada, New Zealand, United States
   * - Alipay
     - All
     - All
   * - AlipayHK
     - HKD
     - Hong Kong
   * - Atome
     - MYR, SGD
     - Malaysia, Singapore
   * - Bank of Ayudhya CWF
     - THB
     - Thailand
   * - Bangkok Bank CWF
     - THB
     - Thailand
   * - BancNet
     - PHP
     - Philippines
   * - BharatQR
     - INR
     - India
   * - Boost
     - MYR
     - Malaysia
   * - Card
     - All
     - All
   * - Clearpay
     - GBP
     - United Kingdom
   * - DuitNow
     - MYR
     - Malaysia
   * - eNETS
     - SGD
     - Singapore
   * - FPS
     - HKD
     - Hong Kong
   * - FPX
     - MYR
     - Malaysia
   * - GCash
     - PHP
     - Philippines
   * - GrabPay
     - MYR, PHP, SGD
     - Malaysia, Philippines, Singapore
   * - HD Bank
     - VND
     - Vietnam
   * - Hoolah
     - HKD, MYR, SGD, THB
     - Hong Kong, Malaysia, Singapore, Thailand
   * - Humm
     - AUD, EUR, GBP, NZD
     - Australia, Ireland, New Zealand, United Kingdom
   * - JKO Pay
     - CNY
     - China
   * - Kasikorn Bank
     - THB
     - Thailand
   * - Krung Thai Bank CWF
     - THB
     - Thailand
   * - LINE Pay
     - JPY, THB, TWD
     - Japan, Taiwan, Thailand
   * - Maya
     - PHP
     - Philippines
   * - Maybank2u
     - IDR
     - Indonesia
   * - MoMo
     - VND
     - Vietnam
   * - Octopus
     - HKD
     - Hong Kong
   * - POLi
     - AUD, NZD
     - Australia, New Zealand
   * - Pace
     - HKD, JPY, MYR, SGD, THB, TWD
     - Hong Kong, Japan, Malaysia, Singapore, Taiwan, Thailand
   * - PayID
     - AUD, NZD
     - Australia, New Zealand
   * - PayMe
     - HKD
     - Hong Kong
   * - PayNow
     - SGD
     - Singapore
   * - PayPal
     - AUD, USD
     - Australia, United States
   * - Prompt Pay
     - THB
     - Thailand
   * - Rabbit LINE Pay
     - THB
     - Thailand
   * - Samsung Pay
     - All
     - All
   * - Shopback
     - SGD
     - Singapore
   * - Siam Commercial Bank
     - THB
     - Thailand
   * - Tenpay
     - CNY
     - China
   * - TTB - TMBThanachart Bank
     - THB
     - Thailand
   * - Tamilnad Mercantile Bank Limited
     - THB
     - Thailand
   * - Techcom Bank
     - VND
     - Vietnam
   * - TendoPay
     - PHP
     - Philippines
   * - Tienphong
     - VND
     - Vietnam
   * - Touch'n Go
     - MYR
     - Malaysia
   * - TrueMoney
     - THB
     - Thailand
   * - UPI
     - INR
     - India
   * - United Overseas Bank
     - SGD
     - Singapore
   * - Universal Air Travel Plan
     - All
     - All
   * - Vietcombank
     - VND
     - Vietnam
   * - WeChatPay
     - AUD, CAD, CNY, EUR, GBP, HKD, JPY, NZD, SGD, USD
     - All
   * - Zip
     - AUD, CAD, NZD, USD
     - Australia, Canada, New Zealand, United States
