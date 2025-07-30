=====
QFPay
=====

Connecting a **QFPay payment terminal** allows you to offer a fluid payment flow to your customers
and ease the work of your cashiers.

.. important::
   - QFPay payment terminals do not require an :doc:`IoT Box </applications/general/iot>`.
   - QFPay terminals can be used only in **Hong-Kong**.

Configuration
=============

.. _qfpay/account-creation:

Start by creating your QFPay account on `QFPay's website <https://qfpay.global/products/qfpay-pos-api/>`_.

During your application request for the activation of Asynchronous Notifications, you will need to provide your server address,
followed by `/qfpay/notify`. ie: `https://yourdomain.odoo.com/qfpay/notify`

QFPay will then provide you with a Notification Key that you can add into the Odoo :guilabel:`QFPay Notification Key` field at :ref:`the payment method creation
<qfpay/method-creation>`.


.. _qfpay/terminal-setup:

Set up the QFPay terminal
-------------------------

To set up your QFPay terminal, you will need to connect the Haojin App to your QFPay account as instructed by QFPay.

It is strongly recomended to setup a fixed IP address for your terminal, indeed Odoo will use this IP address to communicate with the terminal.
If it changes you will have to update it in the Odoo configuration.

Once your terminal ip address is set you can paste it into the Odoo :guilabel:`QFPay Terminal IP Address` field at :ref:`the payment method creation
<qfpay/method-creation>`.

Additionally, you have to request a self-signed certificate linked to that IP address from QFPay.
You will need to import that certificate on the machine running the Odoo POS.


.. _qfpay/poskey:

Generate a QFPay POS-KEY
------------------------

The **QFPay POS-KEY** is a secret key used to verify the data.
Steps to generate POS-KEY Login: open Haojin App -> My -> Settings -> Pos Call Up Key -> Reset Key
Alternatively Login to MMS (merchant portal) with Merchant role, navigate to Setting -> Device Setting -> retrieve the POS key
Take note of that key and paste it into the Odoo :guilabel:`QFPay POS Key` field at :ref:`the payment method creation
<qfpay/method-creation>`.

.. seealso::
   - `QFPay Docs - ECR Integration
     <https://sdk.qfapi.com/docs/in-store/pos-api/ECR/#1-pos-key>`_.

.. _qfpay/method-creation:

Configure the payment method
----------------------------

Enable the payment terminal :ref:`in the application settings <configuration/settings>` and
:doc:`create the related payment method <../../payment_methods>`. Set the journal type as
:guilabel:`Bank` and select :guilabel:`QFPay` in the :guilabel:`Use a Payment Terminal` field.

Finally, fill in the mandatory fields with your :ref:`QFPay Terminal IP <qfpay/terminal-setup>`,
:ref:`QFPay POS Key <qfpay/poskey>` and :ref:`QFPay Notification Key <qfpay/account-creation>`,

Once the payment method is created, you can select it in your POS settings. To do so, go to the
:ref:`POS' settings <configuration/settings>`, click :guilabel:`Edit`, and add the payment method
under the :guilabel:`Payments` section.
