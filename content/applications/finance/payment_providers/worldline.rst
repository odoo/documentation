=========
Worldline
=========

`Worldline <https://worldline.com/>`_ is a France-based company and the world's fourth largest
payment provider.

Settings in Worldline
=====================

.. _worldline/API-user:

Create an API user
------------------

It is recommended to set up an **API user** to create transactions from Odoo to ensure that your
Worldline configuration remains safe even if credentials are compromised. Additionally, API users do
not require frequent password updates like regular accounts.

To create an **API user**, proceed as follows:

#. Log into your `Worldline Merchant Portal <https://merchant-portal.preprod.worldline-solutions.com/dashboard>`_,
   click the :icon:`fa-th` (:guilabel:`menu`) icon, and select :guilabel:`Back Office`.
#. Go to :menuselection:`Configuration --> Users` and click on :guilabel:`New User`.
#. Configure the following fields:

   #. Specify a :guilabel:`UserID`, :guilabel:`User's name`, :guilabel:`E-mail address`, and
      :guilabel:`Timezone` of your choice.
   #. Set the :guilabel:`Profile` field to :guilabel:`Admin`.
   #. Enable :guilabel:`Special user for API`.

.. tip::
   If you have already set up a user, make sure it is activated without any error.

.. _worldline/set-up:

Set up Worldline for Odoo
-------------------------

Worldline must now be configured to accept payments from Odoo.

#. From your merchant portal, go to :menuselection:`Developer --> Payment API` and click on
   :guilabel:`Generate API key`. Copy the :guilabel:`API key ID` and the :guilabel:`Secret API key`
   and save them for :ref:`later <wordline/odoo-configuration>`.
#. Go to :menuselection:`Developer --> Webhooks` and click on :guilabel:`Generate webhook keys`.
   Copy the :guilabel:`Webhook ID` and the associated :guilabel:`Secret webhook key` and
   save them for :ref:`later <wordline/odoo-configuration>`.
#. | Click :guilabel:`Add webhook endpoint`, enter your Odoo database's URL followed by
     `/payment/worldline/webhook` in the :guilabel:`Endpoint url` field, and :guilabel:`Confirm`.
   | For example: `https://example.odoo.com/payment/worldline/webhook`.

.. _wordline/odoo-configuration:

Settings in Odoo
================

To set up Worldline in Odoo:

#. :ref:`Navigate to the payment provider Worldline <payment_providers/add_new>` and change its
   state to :guilabel:`Enabled`.
#. In the :guilabel:`Credentials` tab, enter the :guilabel:`PSPID` of your Worldline account and
   fill in the :guilabel:`API Key`, :guilabel:`API Secret`, :guilabel:`Webhook Key`, and
   :guilabel:`Webhook Secret` with the values you saved at the step :ref:`Set up Worldline for
   Odoo <worldline/set-up>`.
#. Configure the rest of the options to your liking.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods and features in Odoo
==============================================

.. |V| replace:: :icon:`fa-check`
.. |X| replace:: :icon:`fa-times`

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 10 25 25 8 8 8 8 8

   * - Payment method
     - Currencies
     - Countries
     - Manual capture
     - Partial capture
     - Refunds
     - Partial refunds
     - Tokenization
   * - Alipay+
     - AUD, CHF, DKK, EUR, GBP, HKD, KRW, MYR, NOK, PHP, SEK, THB, USD
     - Australia, Austria, Belgium, Bulgaria, Costa Rica, Croatia, Cyprus, Denmark, Estonia,
       Finland, France, Germany, Greece, Hong Kong, Hungary, Iceland, Ireland, Italy, Latvia,
       Liechtenstein, Lithuania, Luxembourg, Malaysia, Malta, Netherlands, Norway, Philippines,
       Poland, Portugal, Romania, Slovakia, South Korea, Spain, Sweden, Switzerland, Thailand,
       United Kingdom
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - Bancontact
     - EUR
     - Belgium
     - |X|
     - |X|
     - |X|
     - |X|
     - |V|
   * - Bizum
     - EUR
     - Spain
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - Card
     - All
     - All
     - |X|
     - |X|
     - |X|
     - |X|
     - |V|
   * - Cofidis
     - EUR
     - Belgium, France
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - EPS
     - EUR
     - Austria
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - Floa Bank
     - EUR
     - Brazil, France, Italy, Portugal, Spain
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - iDEAL
     - EUR
     - Netherlands
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - Klarna
     - AUD, CAD, CHF, CZK, DKK, EUR, GBP, NOK, NZD, PLN, SEK, USD
     - Australia, Austria, Belgium, Canada, Czech Republic, Denmark, Finland, France, Germany,
       Greece, Ireland, Italy, Netherlands, New Zealand, Norway, Poland, Portugal, Spain, Sweden,
       Switzerland, United Kingdom, United States
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - MB WAY
     - EUR
     - Portugal
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - Multibanco
     - EUR
     - Portugal
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - P24
     - EUR, PLN
     - Poland
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - PayPal
     - All
     - All
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - PostFinance Pay
     - CHF, EUR
     - Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland,
       France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta,
       Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland,
       United Kingdom
     - |X|
     - |X|
     - |X|
     - |X|
     - |V|
   * - Twint
     - CHF
     - Switzerland
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
   * - WeChat Pay
     - AUD, CAD, CNY, EUR, GBP, HKD, JPY, NZD, SGD, USD
     - All
     - |X|
     - |X|
     - |X|
     - |X|
     - |X|
