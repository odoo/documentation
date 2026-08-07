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

.. container:: payment-methods

   .. figure:: payment_images/bancontact.png
      :width: 64px
      :class: o-no-modal

      Bancontact

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Bank Transfer

   .. figure:: payment_images/belfius.png
      :width: 64px
      :class: o-no-modal

      Belfius

   .. figure:: payment_images/blik.png
      :width: 64px
      :class: o-no-modal

      BLIK

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

   .. figure:: payment_images/paysafecard.png
      :width: 64px
      :class: o-no-modal

      PaySafeCard

   .. figure:: payment_images/swish.png
      :width: 64px
      :class: o-no-modal

      Swish

   .. figure:: payment_images/twint.png
      :width: 64px
      :class: o-no-modal

      Twint
