:custom-css: payment_methods.css

======
Paymob
======

`Paymob <https://paymob.com/>`_ is an Egypt-based payment service provider operating in Egypt, Oman,
Saudi Arabia, and the United Arab Emirates. It allows businesses to accept online payments
through credit and debit cards, as well as several local payment methods.

.. _payment_providers/paymob/configure_dashboard:

Configuration on the Paymob dashboard
=====================================

#. Create a Paymob account if necessary and log into the Paymob dashboard:

   - `Paymob dashboard for Egypt <https://accept.paymob.com/portal2/en/login>`_
   - `Paymob dashboard for Oman <https://oman.paymob.com/portal2/en/login>`_
   - `Paymob dashboard for Saudi Arabia <https://ksa.paymob.com/portal2/en/login>`_
   - `Paymob dashboard for the United Arab Emirates <https://uae.paymob.com/portal2/en/login>`_

#. Check the account mode in the top left corner of the page. Use the :guilabel:`Test` mode to try
   the integration without charging customers. Switch to :guilabel:`Live` mode once you are
   ready to accept payments.
#. Navigate to :menuselection:`Settings` in the left menu.
#. In the :guilabel:`Account Info` section, copy the value of the :guilabel:`HMAC` field and save it
   for :ref:`later <payment_providers/paymob/configure_odoo>`.
#. Click :guilabel:`View` next to the :guilabel:`API Key`, :guilabel:`Secret Key`, and
   :guilabel:`Public Key` fields to reveal each value. Copy each key and save it for
   :ref:`later <payment_providers/paymob/configure_odoo>`.
#. Navigate to :menuselection:`Developers --> Payment Integrations` in the left menu.
#. Ensure that all required payment methods are listed in the payment integrations. If any
   payment method is missing, contact Paymob support.

.. _payment_providers/paymob/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Paymob <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you are trying Paymob as a :ref:`test
   <payment_providers/test-mode>`).
#. In the :guilabel:`Credentials` tab, set the :guilabel:`Account Country` field to your company's
   country.
#. Fill in the :guilabel:`HMAC Key`, :guilabel:`API key`,
   :guilabel:`Secret Key`, and :guilabel:`Public Key` fields with the information saved at the step
   :ref:`payment_providers/paymob/configure_dashboard`.
#. In the :guilabel:`Configuration` tab, click :guilabel:`Enable Payment Methods`, then
   :ref:`activate the payment methods <payment_providers/payment_methods>` you want to offer.
#. Return to the provider's form and click :guilabel:`Synchronize with Paymob`.

   .. important::
      - For a payment method to be available to customers, it must be activated in Odoo **and**
        added to the :ref:`list of payment integrations on the Paymob dashboard
        <payment_providers/paymob/configure_dashboard>`.
      - If a payment method is added to the Paymob dashboard **after** synchronization, click
        :guilabel:`Synchronize with Paymob` again to make it available in Odoo.

#. Configure the remaining options as needed.

.. note::
   Paymob stopped supporting Pakistan according to their `list of available domains
   <https://developers.paymob.com/paymob-docs/getting-started/overview#Not-sure-where-to-start:~:text=go%2Dlive%20approval-,Not%20sure%20where%20to%20start%3F,-Use%20this%20quick>`_.

.. seealso::
   :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods

   .. figure:: payment_images/aman.png
      :width: 64px
      :class: o-no-modal

      Aman

   .. figure:: payment_images/card.png
      :width: 64px
      :class: o-no-modal

      Card

   .. figure:: payment_images/contact.png
      :width: 64px
      :class: o-no-modal

      Contact

   .. figure:: payment_images/forsa.png
      :width: 64px
      :class: o-no-modal

      Forsa

   .. figure:: payment_images/halan.png
      :width: 64px
      :class: o-no-modal

      Halan

   .. figure:: payment_images/bank.png
      :width: 64px
      :class: o-no-modal

      Bank Installments

   .. figure:: payment_images/kiosk.png
      :width: 64px
      :class: o-no-modal

      Kiosk

   .. figure:: payment_images/wallet.png
      :width: 64px
      :class: o-no-modal

      Mobile Wallets Egypt

   .. figure:: payment_images/omannet.png
      :width: 64px
      :class: o-no-modal

      OmanNet

   .. figure:: payment_images/premiumcard.png
      :width: 64px
      :class: o-no-modal

      Premium Card

   .. figure:: payment_images/souhoola.png
      :width: 64px
      :class: o-no-modal

      Souhoola

   .. figure:: payment_images/stcpay.png
      :width: 64px
      :class: o-no-modal

      STCPay

   .. figure:: payment_images/sympl.png
      :width: 64px
      :class: o-no-modal

      Sympl

   .. figure:: payment_images/tabby.png
      :width: 64px
      :class: o-no-modal

      Tabby

   .. figure:: payment_images/tamara.png
      :width: 64px
      :class: o-no-modal

      Tamara

   .. figure:: payment_images/valu.png
      :width: 64px
      :class: o-no-modal

      ValU
