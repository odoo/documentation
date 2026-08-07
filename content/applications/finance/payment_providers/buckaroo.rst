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

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/afterpay_riverty.png
      :alt: AfterPay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      AfterPay

   .. figure:: payment_method_images/alipay.png
      :alt: Alipay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Alipay

   .. figure:: payment_method_images/bancontact.png
      :alt: Bancontact
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bancontact

   .. figure:: payment_method_images/bank.png
      :alt: Bank reference
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank reference

   .. figure:: payment_method_images/belfius.png
      :alt: Belfius
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Belfius

   .. figure:: payment_method_images/billink.png
      :alt: Billink
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Billink

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/eps.png
      :alt: EPS
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      EPS

   .. figure:: payment_method_images/ideal_wero.png
      :alt: iDEAL
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      iDEAL

   .. figure:: payment_method_images/in3.png
      :alt: in3
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      in3

   .. figure:: payment_method_images/kbc.png
      :alt: KBC/CBC
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      KBC/CBC

   .. figure:: payment_method_images/klarna.png
      :alt: Klarna
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Klarna

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

   .. figure:: payment_method_images/poste_pay.png
      :alt: PostePay
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PostePay

   .. figure:: payment_method_images/sepa.png
      :alt: SEPA Direct Debit
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      SEPA Direct Debit

   .. figure:: payment_method_images/tinka.png
      :alt: Tinka
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Tinka

   .. figure:: payment_method_images/trustly.png
      :alt: Trustly
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Trustly

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
