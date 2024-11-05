======
PayPal
======

`Paypal <https://www.paypal.com/>`_ is an American online payment provider available worldwide and
one of the few that does not charge a subscription fee.

.. note::
   While PayPal is available in `over 200 countries/regions
   <https://www.paypal.com/webapps/mpp/country-worldwide>`_, only `a selection of currencies are
   supported <https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies>`_.

.. _payment_providers/paypal/configuration-paypal:

Configuration in PayPal
=======================

#. `Log into your PayPal Developer Dashboard <https://developer.paypal.com/dashboard/>`_.
#. Click :guilabel:`Apps & Credentials` and click :guilabel:`Create App`.
#. Enter an :guilabel:`App Name` and click :guilabel:`Create App`.
#. Copy the :guilabel:`Client ID` and :guilabel:`Secret` and save them for
   :ref:`later <payment_providers/paypal/configuration-odoo>`.

.. important::
   If you use customer names or addresses that include accented or non-Latin characters, you
   **must** configure the encoding format of the payment request sent by Odoo to PayPal to avoid
   transaction failures without notice. To do so, access the `PayPal button language encoding
   setting <https://www.paypal.com/cgi-bin/websrc?cmd=_profile-language-encoding>`_, click
   :guilabel:`More Options`, and set the :guilabel:`Encoding` field to :guilabel:`UTF-8`.

   If you are trying PayPal as a test, access your :ref:`PayPal Sandbox account
   <payment_providers/paypal/testing>` and `configure the encoding format for your sandbox account
   <https://sandbox.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-language-encoding>`_.

.. tip::
   For encrypted website payments & EWP_SETTINGS errors, please check the `PayPal documentation
   <https://developer.paypal.com/docs/online/>`_.

.. _payment_providers/paypal/configuration-odoo:

Configuration in Odoo
=====================

#. :ref:`Navigate to the payment provider PayPal <payment_providers/add_new>`,
   change its state to :guilabel:`Enabled`, and make sure it is :guilabel:`Published`.
#. In the :guilabel:`Credentials` tab, enter the :guilabel:`Email` linked to your PayPal account,
   then fill in the :guilabel:`Client ID` and :guilabel:`Client Secret` fields with the values you
   saved at the step :ref:`payment_providers/paypal/configuration-paypal`.
#. Click :guilabel:`Generate your webhook` to create the :guilabel:`Webhook ID`.
#. Configure the remaining options as desired.

.. _payment_providers/paypal/testing:

Testing
=======

PayPal provides two sandbox accounts that you can use to simulate live transactions:

-  A business account (to use as the merchant account, e.g., `ab-1abc12345678@business.example.com`);
-  A default personal account (to use as the shopper account, e.g.,
   `ba-9cba87654321@personal.example.com`).

To test the PayPal payment workflow in Odoo:

#. Log into the `Paypal Developer Site <https://developer.paypal.com/>`_ using your PayPal
   credentials and go to :menuselection:`Testing Tools --> Sandbox Accounts`.
#. Click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`) icon next to the sandbox business account
   and select :guilabel:`View/Edit account`.
#. Copy the :guilabel:`Email`, :guilabel:`Client ID`, and :guilabel:`Secret` and save them for the
   next step.
#. In Odoo, :ref:`configure the PayPal payment provider <payment_providers/paypal/configuration-odoo>`
   with the values saved at the previous step and set the :guilabel:`State` field to
   :guilabel:`Test Mode`.

You can then run a test transaction from Odoo using the sandbox personal account.

.. seealso::
   - :ref:`payment_providers/test-mode`
   - :doc:`../payment_providers`
