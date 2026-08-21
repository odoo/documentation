:custom-css: payment_methods.css

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

#. Log into your `Worldline Merchant Portal <https://merchant-portal.worldline-solutions.com/>`_,
   click the :icon:`fa-th` (:guilabel:`menu`) icon, and select :guilabel:`Back Office`.
#. Go to :menuselection:`Configuration --> Users` and click on :guilabel:`New User`.
#. Configure the following fields:

   #. Specify a :guilabel:`UserID`, :guilabel:`User's name`, :guilabel:`E-mail address`, and
      :guilabel:`Timezone` of your choice.
   #. Set the :guilabel:`Profile` field to :guilabel:`Admin`.
   #. Enable :guilabel:`Special user for API`.

.. tip::
   - If you have already set up a user, make sure it is activated without any error.
   - To test the payment flow with Worldline, use their `test environment
     <https://merchant-portal.preprod.worldline-solutions.com/>`_ together with the :ref:`test mode
     <payment_providers/test-mode>`.

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

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/alipay_plus.png
      :width: 64px
      :class: o-no-modal

      Alipay+

   .. figure:: payment_images/bancontact.png
      :width: 64px
      :class: o-no-modal

      Bancontact

   .. figure:: payment_images/bizum.png
      :width: 64px
      :class: o-no-modal

      Bizum

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/cofidis.png
      :width: 64px
      :class: o-no-modal

      cofidis

   .. figure:: payment_images/eps.png
      :width: 64px
      :class: o-no-modal

      EPS

   .. figure:: payment_images/floa_bank.png
      :width: 64px
      :class: o-no-modal

      Floa Bank

   .. figure:: payment_images/ideal_wero.png
      :width: 64px
      :class: o-no-modal

      iDEAL

   .. figure:: payment_images/klarna.png
      :width: 64px
      :class: o-no-modal

      Klarna

   .. figure:: payment_images/mbway.png
      :width: 64px
      :class: o-no-modal

      MB WAY

   .. figure:: payment_images/multibanco.png
      :width: 64px
      :class: o-no-modal

      Multibanco

   .. figure:: payment_images/p24.png
      :width: 64px
      :class: o-no-modal

      P24

   .. figure:: payment_images/paypal.png
      :width: 64px
      :class: o-no-modal

      Paypal

   .. figure:: payment_images/pf_pay.png
      :width: 64px
      :class: o-no-modal

      PostFinance Pay

   .. figure:: payment_images/twint.png
      :width: 64px
      :class: o-no-modal

      Twint

   .. figure:: payment_images/wechat_pay.png
      :width: 64px
      :class: o-no-modal

      WeChat Pay

   .. figure:: payment_images/wero.png
      :width: 64px
      :class: o-no-modal

      Wero
