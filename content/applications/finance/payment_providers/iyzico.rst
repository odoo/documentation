======
Iyzico
======

`Iyzico <https://www.iyzico.com/>`_ is an online payment provider covering Turkey.

.. _payment_providers/iyzico/configure-dashboard:

Configuration on the Iyzico Dashboard
=====================================

#. Log into the `Iyzico Dashboard <https://merchant.iyzipay.com>`_.
#. Navigate to :menuselection:`Settings --> Merchant Settings`.
#. Copy the values of the :guilabel:`API Key` and :guilabel:`Secret Key` fields and save them for
   the :ref:`payment_providers/iyzico/configure-odoo` step.
#. On the same :guilabel:`Merchant Settings` page, enable :guilabel:`Merchant Notifications`.
#. | Enter your Odoo database URL followed by `/payment/iyzico/webhook` in the
     :guilabel:`Merchant Notification Url` field.
   | For example: `https://example.odoo.com/payment/iyzico/webhook`.
#. Click :guilabel:`Save`.

.. _payment_providers/iyzico/configure-odoo:

Odoo configuration
==================

#. :ref:`Navigate to the payment provider Iyzico <payment_providers/add_new>`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`API Key` and :guilabel:`Secret Key`
   fields with the values you saved at the step :ref:`payment_providers/iyzico/configure-dashboard`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. seealso::
   :doc:`../payment_providers`
