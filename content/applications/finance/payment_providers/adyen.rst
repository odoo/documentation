=====
Adyen
=====

`Adyen <https://www.adyen.com/>`_ is a Dutch company that offers several online payment
possibilities.

.. note::
   Adyen only works with customers processing **more than 10 million annually** or invoicing a
   **minimum of 1000 transactions per month**.

.. _payment_providers/adyen/configure_dashboard:

Adyen configuration
===================

#. Create an Adyen account if necessary and log into your Adyen Customer Area.

   .. tip::
      Log into your **Test account** to try the integration without charging customers.
      Switch to your **Live account** once you are ready to accept payments.

#. `Contact the Adyen support team <https://docs.adyen.com/platforms/quickstart-guide/support#contact-adyen-support>`_
   to enable the **Multiple partial capture** feature.
#. In the Adyen Customer Area, go to :menuselection:`Developers --> API credentials` and click the
   relevant API credential user name in the list or click :guilabel:`Create new credential` to
   create a new one.
#. In the :guilabel:`Server settings` section, click :guilabel:`Generate API key`, then click the
   :icon:`fa-copy` (:guilabel:`Copy API key`) icon and save the value for the
   :ref:`payment_providers/adyen/configure_odoo` step.
#. In the :guilabel:`Client settings` section, click :guilabel:`Generate client key`, then
   click the :icon:`fa-copy` (:guilabel:`Copy API key`) icon and save the value for
   the :ref:`payment_providers/adyen/configure_odoo` step.
#. Enter your Odoo website URL in the :guilabel:`Add allowed origins` field, then click
   :guilabel:`Add`.
#. Click :guilabel:`Save changes` at the bottom of the page.
#. Go to :menuselection:`Developers --> Webhooks` in the left menu and click :guilabel:`Create new
   webhook`.
#. In the :guilabel:`Create new webhook` popup, click :guilabel:`Add` on to the :guilabel:`Standard
   webhook` line.
#. On the :guilabel:`Webhook generation` form, in the :guilabel:`Server configuration` section,
   enter your Odoo database :guilabel:`URL` followed by `/payment/adyen/notification`.
#. In the :guilabel:`Security` section, click :guilabel:`Generate` under :guilabel:`HMAC`, then
   click the :icon:`fa-copy` (:guilabel:`Copy HMAC to the clipboard`) icon and save the value for
   the :ref:`payment_providers/adyen/configure_odoo` step.
#. Click :guilabel:`Save configuration` at the bottom of the page.
#. Go to :menuselection:`Developers --> API URLs`, then copy the :guilabel:`Prefix` and save it for
   the :ref:`payment_providers/adyen/configure_odoo` step.

.. _payment_providers/adyen/configure_odoo:

Odoo configuration
==================

#. :ref:`Navigate to the Adyen payment provider<payment_providers/add_new>`.
#. Fill in the :guilabel:`Merchant account`, :guilabel:`API Key`, :guilabel:`Client Key`,
   :guilabel:`HMAC Key`, and :guilabel:`API URL Prefix` fields with the values saved at the
   :ref:`Adyen configuration step <payment_providers/adyen/configure_dashboard>`.
#. Configure the remaining options as needed.
#. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. tip::
   If you want to :ref:`test Adyen without affecting live transactions
   <payment_providers/test-mode>`, use your **Test account** credentials, enter
   `https://checkout-test.adyen.com` in the :guilabel:`API URL Prefix` field, and set the
   :guilabel:`State` field to :guilabel:`Test Mode`.

Manual capture
==============

To enable :ref:`manual capture <payment_providers/manual_capture>` for Adyen payments, follow
these steps:

#. :ref:`Navigate to the Adyen payment provider <payment_providers/add_new>`.
#. Go to the :guilabel:`Configuration` tab and enable :guilabel:`Capture Amount Manually`.
#. Log in to your Adyen Customer Area, then go to :menuselection:`Settings` and click
   :guilabel:`Company` in the :guilabel:`Account management` section.
#. In the :guilabel:`General` section, click the :icon:`fa-pencil` (:guilabel:`Edit property`)
   icon next to the :guilabel:`Capture Delay` field.
#. In the popup, set the :guilabel:`Capture delay` field to :guilabel:`Manual` and click
   :guilabel:`Save`.

.. note::
   - If the transaction is not captured within 7 days, the customer is entitled to revoke it.
   - You can :ref:`manually capture <payment_providers/manual_capture>` and :ref:`refund
     <payment_providers/refunds>` payments directly from your Adyen Customer Area.

.. seealso::
   :doc:`../payment_providers`
