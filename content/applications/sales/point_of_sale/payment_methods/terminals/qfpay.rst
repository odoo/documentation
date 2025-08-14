=====
QFPay
=====

Connecting a **QFPay payment terminal** allows you to offer a fluid payment flow to your customers
and ease the work of your cashiers.

.. important::
   - QFPay payment terminals do not require an :doc:`IoT Box </applications/general/iot>`.
   - QFPay terminals can be used only in **Hong-Kong**.

.. _qfpay/configuration:

QFPay configuration
===================

To configure your QFPay payment terminal, follow these steps:

#. Create a QFPay account on `QFPay's website <https://qfpay.global/products/qfpay-pos-api/>`_.
   In your application email, request for the activation of Asynchronous Notifications, provide your server address, followed by `/qfpay/notify`.
   If you already have an account, contact `technical.support@qfpay.com` and provide your merchant and store information on top of the server address.

   .. example::
      Write your server address as followed: `https://yourdomain.odoo.com/qfpay/notify`

#. Copy the notification key provided by QFPay.

#. Set up your QFPay terminal by connecting the Haojin App to your QFPay account as instructed by QFPay.

   .. note::
      Set up a fixed IP address for your terminal.
      If it changes you will have to update it in the Odoo configuration.
      You will also need to request an updated self-signed certificate from QFPay.

#. Copy the IP address of the terminal.

#. Request a self-signed certificate linked to the IP address of the terminal from QFPay.
   Import the certificate on the machine running the Odoo POS.

#. Generate a :guilabel:`POS-KEY`.
   Login in the Haojin App or in the MMS (Merchant Management System) portal. Go to
   :menuselection:`Haojin App --> My --> Settings --> Pos Call Up Key --> Reset Key` or
   :menuselection:`MMS portal --> Setting --> Device Setting --> retrieve the POS key`.

#. Copy that :guilabel:`POS-KEY`.

Odoo POS configuration
----------------------

To connect the QFPay terminal with Odoo Point of Sale, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll down to the
   :guilabel:`Payment Terminals` section, enable the :guilabel:`QFPay` terminal, and click
   :guilabel:`Save`.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create a
   payment method <../../payment_methods>`.
#. Set the :guilabel:`Journal` field to :guilabel:`Bank`.
#. Select the desired point of sale in the :guilabel:`Point of Sale` field.
#. Set the :guilabel:`Integration` field to :guilabel:`Terminal`.
#. Set the :guilabel:`Integrate with` field to :guilabel:`QFPay`.
#. Paste the copied information from :ref:`QFPay <qfpay/configuration>` into the corresponding
   fields:

   - :guilabel:`Terminal IP`
   - :guilabel:`POS Key`
   - :guilabel:`Notification Key`
