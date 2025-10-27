======
Iyzico
======

`Iyzico <https://www.iyzico.com/>`_ is an online payment provider covering Turkey.

.. _payment_providers/iyzico/configure_dashboard:

Configuration on the Iyzico Dashboard
=====================================

#. Log into the `Iyzico Dashboard <https://merchant.iyzipay.com>`_.
#. Navigate to :menuselection:`Settings --> Merchant Settings` and copy the values of the
   :guilabel:`API Key` and :guilabel:`Secret Key` fields and save them for later.
#. In the same Merchant Settings page, Find and enable :guilabel:`Merchant Notifications` section.
#. | Enter your Odoo database URL followed by `/payment/iyzico/webhook` in the
     :guilabel:`Merchant Notification Url` field.
   | For example: `https://example.odoo.com/payment/iyzico/webhook`.
#. Click :guilabel:`Save`.

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Iyzico <payment_providers/add_new>` and change its
   state to :guilabel:`Enabled`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`API Key`, and :guilabel:`Secret Key`, with
   the values you saved at the step :ref:`payment_providers/iyzico/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. seealso::
   :doc:`../payment_providers`
