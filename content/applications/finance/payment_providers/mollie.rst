:custom-css: payment_methods.css

======
Mollie
======

`Mollie <https://www.mollie.com/>`_ is an online payments platform established in the Netherlands.

.. _payment_providers/mollie/configure_dashboard:

Mollie configuration
====================

#. `Create a Mollie account
   <https://my.mollie.com/dashboard/signup>`_ if necessary
   and log in to the `Mollie Dashboard <https://my.mollie.com/dashboard/login>`_.
#. Go to :menuselection:`Payments` in the top menu, then click :guilabel:`API keys`.
#. :guilabel:`Copy` the :guilabel:`Live API Key` (or the :guilabel:`Test API Key` if you
   wish to test the integration without affecting live transactions) and save it for the
   :ref:`payment_providers/mollie/configure_odoo` step.

.. _payment_providers/mollie/configure_odoo:

Odoo configuration
==================

#. :ref:`Navigate to the payment provider Mollie <payment_providers/add_new>`
#. Fill in the :guilabel:`API Key` with the value :ref:`previously saved
   <payment_providers/mollie/configure_dashboard>`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you
   want to :ref:`test the integration without affecting live transactions <payment_providers/test-mode>`).

.. seealso::
   :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/bancontact.png
      :alt: Bancontact
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bancontact

   .. figure:: payment_method_images/bank.png
      :alt: Bank Transfer
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank Transfer

   .. figure:: payment_method_images/belfius.png
      :alt: Belfius
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Belfius

   .. figure:: payment_method_images/blik.png
      :alt: BLIK
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      BLIK

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

   .. figure:: payment_method_images/paysafecard.png
      :alt: PaySafeCard
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      PaySafeCard

   .. figure:: payment_method_images/swish.png
      :alt: Swish
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Swish

   .. figure:: payment_method_images/twint.png
      :alt: Twint
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Twint
