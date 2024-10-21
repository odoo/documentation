========
Razorpay
========

Connecting a Razorpay payment terminal allows you to offer a fluid payment flow to your customers
and ease the work of your cashiers.

.. seealso::
   :doc:`Use Razorpay as apayment provider. <../../../../finance/payment_providers/razorpay>`

Configuration
=============

.. _razorpay/credentials:

Locate your Razorpay credentials
--------------------------------

`Create a Razorpay account <https://razorpay.com/docs/payments/easy-create-account/>`_ and set it up
on their website.

You need the following credentials to set up the payment method in Odoo:

- `API key <https://razorpay.com/docs/payments/dashboard/account-settings/api-keys/>`_
- Razorpay username
- Razorpay device serial number, which can be found underneath the device or on `Razorpay's
  dashboard <https://dashboard.razorpay.com/>`_.

Configure the payment method
----------------------------

#. :doc:`Activate the POS Razorpay module <../../../../general/apps_modules>` to enable the
   payment terminal.
#. :doc:`Create the related payment method <../../payment_methods>` by going to
   :menuselection:`Point of Sale --> Configuration --> Payment Methods`.

   #. Set the :guilabel:`Journal` type as :guilabel:`Bank`.
   #. Select :guilabel:`Razorpay` in the :guilabel:`Use a Payment Terminal` field.
   #. Enter your username in the :guilabel:`Razorpay Username` field and your device's serial number
      in the :guilabel:`Razorpay Device Serial No` field.
   #. Fill in the :guilabel:`Razorpay API Key` field with the :ref:`Razorpay API key
      <razorpay/credentials>`.
   #. Set the :guilabel:`Razorpay Allowed Payment Modes` according to your needs.

   .. image:: razorpay/create-method-razorpay.png
      :alt: Razorpay connection form

   .. note::
      You can enable the :guilabel:`Razorpay Test Mode` field while testing or keep it unchecked for
      production.

Once the payment method is created, you can enable it for your POS. To do so, go to the :ref:`POS'
settings <configuration/settings>` and add the payment method under the :guilabel:`Payment` section.

.. note::
   The terminal must have at least a 10% battery level to use it.
