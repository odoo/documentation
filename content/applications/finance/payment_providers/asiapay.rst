=======
AsiaPay
=======

`AsiaPay <https://www.asiapay.com/>`_ is an online payments provider established in Hong Kong and
covering several Asian countries and payment methods.

.. _payment_providers/asiapay/configure_dashboard:

Configuration on AsiaPay Dashboard
==================================

#. Log into `AsiaPay Dashboard <https://www.paydollar.com/b2c2/eng/merchant/index.jsp>`_ and go to
   :menuselection:`Profile --> Account Information`. Copy the values of the :guilabel:`Currency` and
   :guilabel:`Secure Hash` fields and save them for later.
#. | Go to :menuselection:`Profile --> Payment Account Settings` and enable the options
     :guilabel:`Return Value Link (Datefeed)`
   | Enter your Odoo database URL followed by `/payment/asiapay/webhook` in the
     :guilabel:`Return Value Link (Datefeed)` text field.
   | For example: `https://yourcompany.odoo.com/payment/asiapay/webhook`.
   | Click on :guilabel:`Test` to check if the webhook is working correctly.
#. Click on :guilabel:`Update` to finalize the configuration.

.. _payment_providers/asiapay/configure_odoo:

Configuration on Odoo
=====================

#. :ref:`Navigate to the payment provider AsiaPay <payment_providers/add_new>` and change its state
   to :guilabel:`Enabled`.
#. | In the :guilabel:`Credentials` tab, fill the :guilabel:`Merchant ID`, :guilabel:`Currency`, and
     :guilabel:`Secure Hash Secret` with the values you saved at the step
     :ref:`payment_providers/asiapay/configure_dashboard`.
   | By default, the payment provider AsiaPay is configured to verify the secret hash with the hash
     function `SHA1`. If a different function is :ref:`set on your account
     <payment_providers/asiapay/configure_dashboard>`, activate the :ref:`developer mode
     <developer-mode>` and set the same value to the field :guilabel:`Secure Hash Function` in Odoo.
#. Configure the rest of the options to your liking.

.. seealso::
   - :doc:`../payment_providers`
