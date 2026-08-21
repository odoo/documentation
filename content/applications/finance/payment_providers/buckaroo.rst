:custom-css: payment_methods.css

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

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/afterpay_riverty.png
      :width: 64px
      :class: o-no-modal

      AfterPay

   .. figure:: payment_images/alipay.png
      :width: 64px
      :class: o-no-modal

      Alipay

   .. figure:: payment_images/bancontact.png
      :width: 64px
      :class: o-no-modal

      Bancontact

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Bank reference

   .. figure:: payment_images/belfius.png
      :width: 64px
      :class: o-no-modal

      Belfius

   .. figure:: payment_images/billink.png
      :width: 64px
      :class: o-no-modal

      Billink

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/eps.png
      :width: 64px
      :class: o-no-modal

      EPS

   .. figure:: payment_images/ideal_wero.png
      :width: 64px
      :class: o-no-modal

      iDEAL

   .. figure:: payment_images/in3.png
      :width: 64px
      :class: o-no-modal

      in3

   .. figure:: payment_images/kbc.png
      :width: 64px
      :class: o-no-modal

      KBC/CBC

   .. figure:: payment_images/klarna.png
      :width: 64px
      :class: o-no-modal

      Klarna

   .. figure:: payment_images/p24.png
      :width: 64px
      :class: o-no-modal

      P24

   .. figure:: payment_images/paypal.png
      :width: 64px
      :class: o-no-modal

      Paypal

   .. figure:: payment_images/poste_pay.png
      :width: 64px
      :class: o-no-modal

      PostePay

   .. figure:: payment_images/sepa.png
      :width: 64px
      :class: o-no-modal

      SEPA Direct Debit

   .. figure:: payment_images/tinka.png
      :width: 64px
      :class: o-no-modal

      Tinka

   .. figure:: payment_images/trustly.png
      :width: 64px
      :class: o-no-modal

      Trustly

   .. figure:: payment_images/wechat_pay.png
      :width: 64px
      :class: o-no-modal

      WeChat Pay

   .. figure:: payment_images/wero.png
      :width: 64px
      :class: o-no-modal

      Wero
