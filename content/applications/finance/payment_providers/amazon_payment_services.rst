=======================
Amazon Payment Services
=======================

`Amazon Payment Services <https://paymentservices.amazon.com/>`_ or APS is an online payment provider
established in Dubai offering several online payment options.

.. _payment_providers/aps/configure-dashboard:

Configuration on APS Dashboard
==============================

#. Log into your `Amazon Payment Services Dashboard <https://fort.payfort.com/>`_ and go to
   :menuselection:`Integration Settings --> Security Settings`. Generate the
   :guilabel:`Access Code` if none has been generated yet. Copy the values of the
   :guilabel:`Merchant Identifier`, :guilabel:`Access Code`, :guilabel:`SHA Request Phrase` and
   :guilabel:`SHA Response Phrase` fields, and save them for later.
#. Enter your Odoo database URL in the :guilabel:`Origin URL`, for example:
   `https://yourcompany.odoo.com/`. Then, click on :guilabel:`Save Changes`.
#. Navigate to :menuselection:`Integration Settings --> Technical Settings` and click on
   :guilabel:`Redirection`. Make sure :guilabel:`Status` is set to `Active` and select your
   preferred payment methods underneath in :guilabel:`Payment Options`.
#. | Set :guilabel:`Send Response Parameters` to :guilabel:`Yes` and enter your database URL
     followed by `/payment/aps/return` in the :guilabel:`Redirection URL`.
   | For example `https://yourcompany.odoo.com/payment/aps/return`.
   | Enter your database URL followed by `/payment/aps/webhook` in the
     :guilabel:`Direct Transaction Feedback` and :guilabel:`Notification URL` fields.
   | For example `https://yourcompany.odoo.com/payment/aps/webhook`.
   | Click on :guilabel:`Save Changes`.
#. Under :menuselection:`Integration Settings --> Payment Page Template` you can customize the
   look and feel of the Amazon Payment Services payment page (where customers fill out their
   credit card details during payment).

.. _payment_providers/aps/configure-odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Amazon Payment Services <payment_providers/add_new>`,
   change its state to :guilabel:`Enabled`, and make sure it is :guilabel:`Published`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`Merchant Identifier`,
   :guilabel:`Access Code`, :guilabel:`SHA Request Phrase` and :guilabel:`SHA Response Phrase` with
   the values you saved at the step :ref:`payment_providers/aps/configure-dashboard`.
#. Configure the rest of the options to your liking.
