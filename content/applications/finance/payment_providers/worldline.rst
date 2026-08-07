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

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/alipay_plus.png
      :alt: Alipay+
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Alipay+

   .. figure:: payment_method_images/bancontact.png
      :alt: Bancontact
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bancontact

   .. figure:: payment_method_images/bizum.png
      :alt: Bizum
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bizum

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/cofidis.png
      :alt: cofidis
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      cofidis

   .. figure:: payment_method_images/eps.png
      :alt: EPS
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      EPS

   .. figure:: payment_method_images/floa_bank.png
      :alt: Floa Bank
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Floa Bank

   .. figure:: payment_method_images/ideal_wero.png
      :alt: iDEAL
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      iDEAL

   .. figure:: payment_method_images/klarna.png
      :alt: Klarna
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Klarna

   .. figure:: payment_method_images/mbway.png
      :alt: MB WAY
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      MB WAY

   .. figure:: payment_method_images/multibanco.png
      :alt: Multibanco
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Multibanco

   .. figure:: payment_method_images/p24.png
      :alt: P24
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      P24

   .. figure:: payment_method_images/paypal.png
      :alt: Paypal
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Paypal

   .. figure:: payment_method_images/pf_pay.png
      :alt: PostFinance Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PostFinance Pay

   .. figure:: payment_method_images/twint.png
      :alt: Twint
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Twint

   .. figure:: payment_method_images/wechat_pay.png
      :alt: WeChat Pay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      WeChat Pay

   .. figure:: payment_method_images/wero.png
      :alt: Wero
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Wero
