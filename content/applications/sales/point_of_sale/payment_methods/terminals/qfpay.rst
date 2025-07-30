=====
QFPay
=====

QFPay is a payment service that offers payment solutions through the `HaoJin App
<https://qfpay.global/products/merchant-app/>`_ for customer transactions with a physical terminal.

.. important::
   - QFPay payment terminals do not require an :doc:`IoT Box </applications/general/iot>` to
     operate.
   - QFPay terminals are exclusively for Hong Kong.

.. _pos/qfpay/configuration:

QFPay configuration
===================

To configure a QFPay payment terminal, follow these steps:

#. Create a QFPay account on the `QFPay website <https://qfpay.global/products/qfpay-pos-api/>`_.
#. Request activation of `Asynchronous Notifications
   <https://sdk.qfapi.com/docs/common-api/asynchronous-notification/>`_ from the application email.
#. Provide the Odoo server address on the QFPay portal, followed by `/qfpay/notify`, and copy the
   notification key provided by QFPay.
#. Set up the QFPay terminal by connecting the HaoJin App to the QFPay account as instructed by
   QFPay, then copy the terminal's IP address.
#. Request a self-signed certificate from QFPay linked to the terminal's IP address, and import it
   into the relevant POS in Odoo.
#. Generate a :guilabel:`POS-KEY` from the HaoJin App: go to :menuselection:`Haojin App --> My -->
   Settings --> Pos Call Up Key --> Reset Key`. Then, copy the generated :guilabel:`POS-KEY`.

.. note::
   - The **Asynchronous Notifications** are automated messages confirming successful payments or
     refunds by QFPay.
   - Write the server address as follows: `https://yourdomain.odoo.com/qfpay/notify`.
   - If the terminal's IP address changes, update it in the :ref:`Odoo POS settings
     <configuration/settings>` and request a new self-signed certificate from QFPay.
   - If a QFPay account already exists, contact `technical.support@qfpay.com` with the merchant
     information and server address.

.. tip::
   Alternatively, retrieve the POS-KEY from the `MMS (Merchant Management System) portal
   <https://merchant.qfpay.global/>`_: go to :menuselection:`MMS portal --> Settings --> Device
   Settings`.

.. _pos/qfpay/odoo-configuration:

Odoo POS configuration
======================

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
#. Paste the copied information from :ref:`QFPay <pos/qfpay/configuration>` into the corresponding
   fields:

   - :guilabel:`Terminal IP`
   - :guilabel:`POS Key`
   - :guilabel:`Notification Key`
