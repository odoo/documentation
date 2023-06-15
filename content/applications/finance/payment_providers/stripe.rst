======
Stripe
======

`Stripe <https://stripe.com/>`_ is a United States-based online payment solution provider, allowing
businesses to accept **credit cards** and other payment methods.

Link your Stripe Account with Odoo
==================================

.. seealso::
   - :ref:`payment_providers/add_new`
   - :doc:`Use a Stripe payment terminal in Point of Sale
     <../../sales/point_of_sale/payment_methods/terminals/stripe>`

The method to acquire your credentials depends on your hosting type:

.. tabs::
   .. group-tab:: Odoo Online

      #. Go to the **eCommerce** or the **Sales** app and click the :guilabel:`Activate Stripe` or
         the :guilabel:`Set payments` button on the onboarding banner.
      #. Fill in the requested information and submit the form.
      #. Confirm your email address when Stripe sends you a confirmation email.
      #. At the end of the process, you are redirected to Odoo. If you submitted all the requested
         information, you are all set and your payment provider is enabled.
      #. You can continue to :ref:`stripe/local-payment-methods`.

      .. tip::
         To use your own API keys, :ref:`activate the Developer mode <developer-mode>` and
         :ref:`enable Stripe manually <payment_providers/add_new>`. You can then :ref:`Fill in your
         credentials <stripe/api-keys>`, :ref:`generate a webhook <stripe/webhook>` and enable the
         payment provider.

   .. group-tab:: Odoo.sh or On-premise

      #. Go to the **eCommerce** or the **Sales** app and click the :guilabel:`Activate Stripe` or
         the :guilabel:`Set payments` button on the onboarding banner.
      #. Fill in the requested information and submit the form.
      #. Confirm your email address when Stripe sends you a confirmation email.
      #. At the end of the process, you are redirected to the payment provider **Stripe** in Odoo.
      #. :ref:`Fill in your credentials <stripe/api-keys>`.
      #. :ref:`Generate a webhook <stripe/webhook>`.
      #. Enable the payment provider.
      #. You are all set and can continue to :ref:`stripe/local-payment-methods`.

.. tip::
   To connect your Stripe account after the onboarding has already been completed, go to
   :menuselection:`Accounting --> Configuration --> Payment Providers --> Stripe` and click the
   :guilabel:`Connect Stripe` button.

.. important::
   If you are testing Stripe (in **test mode**), change the :guilabel:`State` to
   :guilabel:`Test Mode`. We recommend doing this on a test Odoo database rather than on your main
   database.

.. _stripe/api-keys:

Fill in your credentials
------------------------

In case your **API Credentials** are required to connect with your Stripe account, these are the
credentials that must be completed:

- :ref:`Publishable Key <stripe/api-keys>`: The key solely used to identify the account with Stripe.
- :ref:`Secret Key <stripe/api-keys>`: The key to sign the merchant account with Stripe.
- :ref:`Webhook Signing Secret <stripe/webhook>`: When you enable your webhook on your Stripe
  account, this signing secret must be set to authenticate the messages sent from Stripe to Odoo.

To retrieve the publishable and secret keys, follow this `link to your API keys
<https://dashboard.stripe.com/account/apikeys>`_, or log into your Stripe dashboard and go to
:menuselection:`Developers --> API Keys --> Standard Keys`.

.. _stripe/webhook:

Generate a webhook
------------------

In case your **Webhook Signing Secret** is required to connect with your Stripe account, you can
create a webhook either automatically or manually.

.. tabs::
   .. tab:: Manage the webhook automatically

      Make sure your :ref:`Publishable and Secret keys <stripe/api-keys>` are filled in, then click
      the :guilabel:`Generate your Webhook` button.

      .. tip::
         To update the webhook, click once again the :guilabel:`Generate your Webhook` button.

   .. tab:: Manage the webhook manually

      Visit the `webhooks page on Stripe <https://dashboard.stripe.com/webhooks>`_, or log into your
      Stripe dashboard and go to :menuselection:`Developers --> Webhooks`. Then, click
      :guilabel:`Add endpoint` and insert the following data in the
      :guilabel:`Listen to Stripe events` form:

      - | In the :guilabel:`Endpoint URL` field, enter your Odoo database's URL followed by
          `/payment/stripe/webhook`.
        | For example: `https://yourcompany.odoo.com/payment/stripe/webhook`
      - At the bottom of the form, click :guilabel:`+ Select events`, then:

        - In the :guilabel:`Charge` section, select :guilabel:`charge.refunded` and
          :guilabel:`charge.refund.updated`.
        - In the :guilabel:`Payment Intent` section, select
          :guilabel:`payment_intent.amount_capturable_updated`,
          :guilabel:`payment_intent.payment_failed` and
          :guilabel:`payment_intent.succeeded`.
        - In the :guilabel:`Setup Intent` section, select :guilabel:`setup_intent.succeeded`.

        .. note::
           It is possible to select other events, but they are currently not processed by Odoo.

      Once you have selected the events, click :guilabel:`Add events`, then :guilabel:`Add endpoint`
      to generate your webhook. Click :guilabel:`Reveal` to display your signing secret.

      .. tip::
         To update an existing webhook, click on it. Then, click the three dots at the right side
         of the **Webhook URL** and select :guilabel:`Update details`.

Configuration tab
-----------------

.. _stripe/manual-capture:

Place a hold on a card
~~~~~~~~~~~~~~~~~~~~~~

Stripe allows you to **capture an amount manually** instead of having an immediate capture. This
feature earmarks an amount on the customer's account for a determined period of time that depends on
the payment method used.

To set it up, enable the :guilabel:`Capture Amount Manually` option in Odoo, as explained in the
:ref:`payment providers documentation <payment_providers/features/manual_capture>`.

.. warning::
   When the manual capture feature is activated, your customers are not able to proceed with any
   payment if unsupported payment methods are selected.

.. caution::
   Odoo doesn't support the partial capture yet. Be aware that a partial capture from Stripe's
   interface is still managed as a full capture by Odoo.

.. seealso::
   - :doc:`../payment_providers`

.. _stripe/local-payment-methods:

Enable local payment methods
============================

Local payment methods are payment methods that are only available for certain merchants and
customers countries and currencies.

Odoo supports the following local payment methods:

- Bancontact
- EPS
- giropay
- iDEAL
- Przelewy24 (P24)

To enable some of these local payment methods with Stripe go to
:menuselection:`Payment Providers --> Stripe --> Configuration` and add the desired payment methods
in the :guilabel:`Supported Payment Methods` field. If the desired payment method is already listed,
you don't have anything to do.

.. image:: stripe/stripe_enable_local_payment_method.png
   :align: center
   :alt: Select and add icons of the payment methods you want to enable

.. note::
   - If a payment icon record does not exist in the database and its related local payment method is
     listed above, it is considered enabled with Stripe.
   - If a local payment method is not listed, it is not supported and cannot be enabled.

.. _stripe/express-checkout:

Enable express checkout
=======================

.. seealso::
   :ref:`payment_providers/features/express_checkout`

After ticking the :guilabel:`Allow Express Checkout` checkbox, **Google Pay** is enabled out of the
box, but **Apple Pay** requires extra steps: You must register your web domain with Apple. This can
be done either automatically from Odoo, or manually from Stripe.

.. tabs::
  .. tab:: Register automatically from Odoo

     #. Navigate to your payment provider and make sure that it is :guilabel:`enabled`.
     #. Go to the :guilabel:`Configuration` tab and click the :guilabel:`Enable Apple Pay`
        button. A notification shows that the web domain was successfully registered with Apple.

  .. tab:: Register manually from Stripe

     Visit the `Apple pay web domains page on Stripe
     <https://dashboard.stripe.com/settings/payments/apple_pay>`_, or log into your Stripe
     dashboard and go to :menuselection:`Settings --> Payments methods --> Apple Pay --> Configure
     --> Web domains`. Then, click :guilabel:`Add new domain` and insert the web domain of your
     Odoo database into the pop-up form. Odoo already hosts the verification file of Stripe. Click
     :guilabel:`Add` to register your web domain with Apple.

.. important::
   This operation must be repeated whenever your web domain changes.
