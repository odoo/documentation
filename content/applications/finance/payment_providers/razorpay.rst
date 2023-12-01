========
Razorpay
========

`Razorpay <https://razorpay.com/>`_ is an online payments provider established in India and
covering more than 100 payment methods.

.. _payment_providers/razorpay/configure_dashboard:

Configuration on Razorpay Dashboard
===================================

#. Log into `Razorpay Dashboard <https://dashboard.razorpay.com/>`_ and go to
   :menuselection:`Settings --> API Keys`. Generate the new keys and copy the values of the
   :guilabel:`Key Id` and :guilabel:`Secret Key` fields and save them for later.
#. | Go to :menuselection:`Settings --> Webhooks`, click on :guilabel:`Create New Webhook`,
     and enter your Odoo database URL followed by `/payment/razorpay/webhook` in
     the :guilabel:`Webhook URL` text field.
   | For example: `https://example.odoo.com/payment/razorpay/webhook`.
#. Fill the :guilabel:`Secret` field with a password of your choice and save it for later.
#. Make sure the :guilabel:`payment.authorized`, :guilabel:`payment.captured`,
   :guilabel:`payment.failed`, :guilabel:`refund.failed` and :guilabel:`refund.processed`
   checkboxes are ticked.
#. Click on :guilabel:`Create Webhook` to finalize the configuration.

.. _payment_providers/razorpay/recurring_payments:

.. important::
   The :guilabel:`Recurring payments` feature must
   be activated if you want to make recurring payments.
   Send a request to the `Razorpay Support team <https://razorpay.com/support/#request>`_ to
   enable recurring payments.

.. _payment_providers/razorpay/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider Razorpay <payment_providers/add_new>` and change its
   state to :guilabel:`Enabled`.
#. In the :guilabel:`Credentials` tab, fill the :guilabel:`Key Id`, :guilabel:`Key Secret`, and
   :guilabel:`Webhook Secret` with the values you saved at the step
   :ref:`payment_providers/razorpay/configure_dashboard`.
#. Configure the rest of the options to your liking.

.. important::
  If you configure Odoo to capture amounts manually:

  - Be aware that the **manual voiding** of a transaction is not supported by Razorpay.
  - After **five days**, if the transaction hasn't been captured yet, it'll automatically be
    **voided**.

.. seealso::
   - :doc:`../payment_providers`
