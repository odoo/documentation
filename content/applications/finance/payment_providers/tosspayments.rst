:custom-css: payment_methods.css

=============
Toss Payments
=============

`Toss Payments <https://www.tosspayments.com>`_ is a South Korean payment solution provider.
It allows businesses to accept a wide variety of local payment methods.

.. _payment_providers/toss_payments/configure_dashboard:

Configuration on the Toss Payments Merchant Portal
==================================================

#. `Create an account <https://app.tosspayments.com/signup>`_ on the Toss Payments Portal.
#. `Apply for Service
   <https://onboarding.tosspayments.com/registration/business-registration-number/>`_. Odoo
   supports the following payment methods for Toss Payments under the `Basic Payment Package
   <https://www.tosspayments.com/services>`_.

   * `Easy Payment <https://docs.tosspayments.com/resources/glossary/easypay>`_
   * `Bank Transfer <https://docs.tosspayments.com/resources/glossary/transfer-payment>`_
   * `Mobile Payment <https://docs.tosspayments.com/resources/glossary/mobile-payment>`_

#. Once approved, `log into the Merchant Portal <https://app.tosspayments.com/signin>`_ and click
   :guilabel:`Developer Center` to access the developer center portal.
#. Select the :guilabel:`Merchant ID` and navigate to the :guilabel:`API Key` menu.
#. In the :guilabel:`API Individual Integration Key` section, copy the :guilabel:`Client Key` and
   :guilabel:`Secret Key`, and save them for the :ref:`Odoo configuration step
   <payment_providers/toss_payments/configure_odoo>`.
#. Navigate to the :guilabel:`Webhook` menu and click :guilabel:`Register Webhook`.
#. Enter a name to help identify the webhook.
#. In the :guilabel:`URL` field, enter your Odoo database's URL, followed by
   `/payment/toss-payments/webhook` (e.g.,
   `https://example.odoo.com/payment/toss-payments/webhook`).

   .. tip::
       You can also copy the :guilabel:`Webhook URL` from the Toss Payments form in Odoo and paste
       it.

#. Ensure the :guilabel:`PAYMENT_STATUS_CHANGED` event is enabled, then save the webhook
   settings.

.. _payment_providers/toss_payments/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Toss Payments <payment_providers/add_new>`.
#. Fill in the :guilabel:`Client Key` and :guilabel:`Secret Key` fields with the information
   saved at the step :ref:`payment_providers/toss_payments/configure_dashboard`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you are
   trying Toss Payments as a :ref:`test <payment_providers/test-mode>`).

.. seealso::
   :doc:`../payment_providers`

Supported payment methods
=========================

.. container:: payment-methods d-grid gap-3 mx-1 my-0 p-0

   .. figure:: payment_method_images/bank.png
      :alt: Bank Transfer
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Bank Transfer

   .. figure:: payment_method_images/card.png
      :alt: Card
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Card

   .. figure:: payment_method_images/mobile.png
      :alt: Mobile
      :width: 64px
      :figclass: text-center
      :class: o-no-modal border-0 p-0 bg-transparent

      Mobile
