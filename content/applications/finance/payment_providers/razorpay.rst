========
Razorpay
========

`Razorpay <https://razorpay.com/>`_ is an online payments provider established in India that
supports more than 100 payment methods.

.. _payment_providers/razorpay/oauth-connection:

Create a Razorpay account with Odoo (Indian companies only)
===========================================================

.. note::
   - This method is only available for Indian companies.
   - This flow does not support the :ref:`test mode <payment_providers/test-mode>`.

#. :ref:`Navigate to the Razorpay payment provider <payment_providers/supported_providers>` and
   click :guilabel:`Connect`.
#. Go through the account creation process and enter the verification codes when prompted.

   .. tip::
      If you already have a Razorpay account, enter your Razorpay credentials, select the account
      you want to link to your Odoo database (if applicable), then click :guilabel:`Continue`.

#. At the end of the process, click :guilabel:`Authorize`. If all required information
   has been submitted, you are then redirected to Odoo, and the payment provider is
   :guilabel:`Enabled`.

.. _payment_providers/razorpay/manual-connection:

Manual credentials and webhook input
====================================

.. _payment_providers/razorpay/configure_dashboard:

Razorpay configuration
----------------------

#. `Create a Razorpay account <https://accounts.razorpay.com/>`_ if necessary and log into the
   `Razorpay Dashboard <https://dashboard.razorpay.com/>`_.
#. Go to the :guilabel:`Payments` tab at the top of the page.
#. Toggle the :guilabel:`Test Mode` switch in the left menu to try the integration without
   charging customers. Toggle it off once you are ready to accept real payments.
#. Click :guilabel:`Account & Settings` in the left menu, then, under :guilabel:`Website and app
   settings`, select `API Keys <https://dashboard.razorpay.com/app/website-app-settings/api-keys>`_.
#. Copy the values of the :guilabel:`Key Id` and :guilabel:`Secret Key` fields and save them for
   later.
#. Click :guilabel:`Account & Settings` in the left menu, then, under :guilabel:`Website and app
   settings`, select `Webhooks <https://dashboard.razorpay.com/app/website-app-settings/webhooks>`_.
#. | Click :guilabel:`Add New Webhook`, then enter your Odoo database URL followed by
     `/payment/razorpay/webhook` in the :guilabel:`Webhook URL` field.
   | For example: `https://example.odoo.com/payment/razorpay/webhook`.
#. Fill the :guilabel:`Secret` field with a password of your choice and save it for later.
#. Enable the following events: :guilabel:`payment.authorized`, :guilabel:`payment.captured`,
   :guilabel:`payment.failed`, :guilabel:`refund.failed`, and :guilabel:`refund.processed`.
#. Click :guilabel:`Create Webhook` to finalize the configuration.

.. _payment_providers/razorpay/recurring_payments:

.. important::
   The `Recurring payments <https://razorpay.com/docs/payments/recurring-payments/>`_ feature must
   be activated to accept recurring payments. To enable this feature, submit a request to the
   `Razorpay Support team <https://razorpay.com/support/#request>`_.

.. _payment_providers/razorpay/configure_odoo:

Odoo configuration
------------------

#. Activate :ref:`developer mode <developer-mode>`.
#. :ref:`Navigate to the Razorpay payment provider <payment_providers/add_new>`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`Key Id`, :guilabel:`Key Secret`, and
   :guilabel:`Webhook Secret` with the values you saved during
   :ref:`payment_providers/razorpay/configure_dashboard`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled` (or :guilabel:`Test Mode` if you are
   trying Razorpay as a :ref:`test <payment_providers/test-mode>`).

.. important::
   If you configure Odoo to :ref:`capture amounts manually <payment_providers/manual_capture>`:

   - **Manual voiding** of a transaction is not supported by Razorpay.
   - Transactions that remain uncaptured for more than **five days** are automatically **voided**.

.. seealso::
   :doc:`../payment_providers`
