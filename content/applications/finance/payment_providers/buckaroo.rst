========
Buckaroo
========

`Buckaroo <https://www.buckaroo.eu/>`_ is a Dutch-based company that offers several online payment
possibilities.

.. _payment_providers/buckaroo/configure_dashboard:

Configuration on Buckaroo Plaza
===============================

#. Log into `Buckaroo Plaza <https://plaza.buckaroo.nl>`_, go to :menuselection:`My Buckaroo -->
   Websites` and select the :guilabel:`Push settings` tab.
#. Tick the :guilabel:`Enable Push Response` check box in the :guilabel:`Delayed and Push responses`
   section.
#. Enter the URL of your Odoo database, followed by `/payment/buckaroo/webhook` in both the
   :guilabel:`Push URI Success/Pending` and :guilabel:`Push URI Failure` text fields. For example:
   `https://yourcompany.odoo.com/payment/buckaroo/webhook`.
#. Leave the other fields as they are and click :guilabel:`Save`.
#. In the :guilabel:`General` tab, copy the website :guilabel:`Key` (i.e., the key used to uniquely
   identify your website with Buckaroo) and save it for later.
#. Go to :menuselection:`Configuration --> Security --> Secret key`, enter or :guilabel:`Generate` a
   :guilabel:`Secret key` and click :guilabel:`Save`. Save the key for later.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Buckaroo <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`Website Key` and :guilabel:`Secret Key`
   fields with the values you saved at the step
   :ref:`payment_providers/buckaroo/configure_dashboard`.
#. Configure the options in the other tabs to your liking.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods and features in Odoo
==============================================

.. note::
   Buckaroo doesn't support manual capture, refunds, or tokenization.

.. |V| replace:: :icon:`fa-check`
.. |X| replace:: :icon:`fa-times`

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: auto

   * - Payment method
     - Currencies
     - Countries
   * - AfterPay
     - EUR
     - Austria, Belgium, Finland, Germany, Netherlands
   * - Alipay
     - All
     - All
   * - Bancontact
     - EUR
     - Belgium
   * - Bank reference
     - All
     - All
   * - Belfius
     - EUR
     - Belgium, Netherlands
   * - Billink
     - EUR
     - Belgium, Netherlands
   * - Card
     - All
     - All
   * - Cartes Bancaires
     - EUR
     - France
   * - EPS
     - EUR
     - Austria
   * - iDEAL
     - EUR
     - Netherlands
   * - in3
     - EUR
     - Netherlands
   * - KBC/CBC
     - EUR
     - Belgium
   * - Klarna
     - AUD, CAD, CHF, CZK, DKK, EUR, GBP, NOK, NZD, PLN, SEK, USD
     - Australia, Austria, Belgium, Canada, Czech Republic, Denmark, Finland, France, Germany,
       Greece, Ireland, Italy, Netherlands, New Zealand, Norway, Poland, Portugal, Spain, Sweden,
       Switzerland, United Kingdom, United States
   * - P24
     - EUR, PLN
     - Poland
   * - PayPal
     - CHF, DKK, EUR, GBP, NOK, PLN, USD
     - All
   * - PostePay
     - EUR
     - Italy
   * - SEPA Direct Debit
     - EUR
     - `SEPA countries
       <https://www.europeanpaymentscouncil.eu/document-library/other/epc-list-sepa-scheme-countries>`_
   * - Sofort
     - CHF, EUR
     - Austria, Belgium, Germany, Italy, Netherlands, Poland, Spain, Switzerland, United Kingdom
   * - Tinka
     - EUR
     - Netherlands
   * - Trustly
     - CZK, DKK, EUR, GBP, NOK, SEK
     - Austria, Belgium, Denmark, Estonia, Finland, Germany, Latvia, Lithuania, Netherlands, Norway,
       Spain, Sweden, United Kingdom
   * - WeChatPay
     - AUD, CAD, CNY, EUR, GBP, HKD, JPY, NZD, SGD, USD
     - All
