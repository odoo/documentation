======
Mollie
======

`Mollie <https://www.mollie.com/>`_ is an online payments platform established in the Netherlands.

Configuration
=============

.. seealso::
   :ref:`payment_providers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials** to connect with your Mollie account, which comprise:

- **API Key**: The test or live API Key depending on the configuration of the provider.

You can copy your credentials from your Mollie account, and paste them in the related fields under
the **Credentials** tab.

To retrieve your API key, log into your Mollie account, go to
:menuselection:`Developers --> API keys`, and copy your Test or Live **API Key**.

.. important::
   If you are trying Mollie as a test, with the Test API key, change the **State** to *Test Mode*.
   We recommend doing this on a test Odoo database, rather than on your main database.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods and features in Odoo
==============================================

.. note::
   Mollie doesn't support manual capture, refunds, or tokenization.

.. |V| replace:: :icon:`fa-check`
.. |X| replace:: :icon:`fa-times`

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: auto

   * - Payment method
     - Currencies
     - Countries
   * - Bancontact
     - EUR
     - Belgium
   * - Bank transfer
     - EUR
     - All
   * - Belfius
     - EUR
     - Belgium
   * - Card
     - All
     - All
   * - EPS
     - EUR
     - Austria
   * - iDEAL
     - EUR
     - Netherlands
   * - KBC/CBC
     - EUR
     - Belgium
   * - P24
     - EUR, PLN
     - Poland
   * - PaySafeCard
     - AED, AUD, BRL, CAD, CHF, CZK, DKK, EUR, GBP, GEL, GIP, HUF, ISK, KWD, MDL, MXN, NOK, NZD,
       PEN, PLN, PYG, RON, RSD, SAR, SEK, TRY, USD, UYU
     - Australia, Austria, Belgium, Brazil, Canada, Croatia, Cyprus, Czech Republic, Denmark,
       Finland, France, Georgia, Germany, Gibraltar, Hungary, Iceland, Ireland, Italy, Kuwait,
       Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Mexico, Moldova, Montenegro,
       Netherlands, New Zealand, Norway, Paraguay, Peru, Poland, Portugal, Romania, Saudi Arabia,
       Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, United Arab Emirates, United
       Kingdom, United States, Uruguay
   * - PayPal
     - AUD, BRL, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, JPY, MXN, MYR, NOK, NZD, PHP, PLN,
       RUB, SEK, SGD, THB, TWD, USD
     - All
   * - Sofort
     - CHF, EUR
     - Austria, Belgium, Germany, Italy, Netherlands, Poland, Spain, Switzerland, United Kingdom
   * - TWINT
     - CHF
     - Switzerland
   * - Trustly
     - CZK, DKK, EUR, GBP, NOK, SEK
     - Austria, Belgium, Denmark, Estonia, Finland, Germany, Latvia, Lithuania, Netherlands, Norway,
       Spain, Sweden, United Kingdom
