:show-content:

===============
Payment methods
===============

Configure a payment method with Odoo Point of Sale to provide customers with various payment
options, including cash, card payments through a :ref:`configured payment terminal
<pos/terminals/configuration>`, :doc:`online payments </applications/finance/payment_providers>`,
or customer accounts.

To create a payment method, go to :menuselection:`Point of Sale --> Configuration --> Payment
Methods`, click :guilabel:`New`, and follow the next steps:

#. Enter a name for the payment method.
#. Enable the following options if needed:

   - :guilabel:`Online Payment`: To link the payment method to a payment provider and enable
     online payments, select a provider in the :guilabel:`Allowed Providers` field or click
     :icon:`fa-arrow-right` :guilabel:`Payment Providers` to install one.
   - :guilabel:`Identify Customer`: Force the selection of a customer account during the payment.
#. Select the preferred :guilabel:`Journal` to record all transactions.
#. Select the preferred :guilabel:`Point of Sale` to assign the method.
#. Set the :guilabel:`Integration` field to one of the following options:

   - :guilabel:`None required`: For cash payments.
   - :guilabel:`Terminal`: :ref:`Set up a terminal <pos/terminals/configuration>` and allow card
     payments.
   - :guilabel:`Bank App (QR Code)`: Generate a :doc:`QR code with a bank app
     </applications/sales/point_of_sale/payment_methods/qr_code_payment>`. Select a :guilabel:`QR
     Code Format`.
#. Save.

.. note::
   - If the :doc:`Urban Piper </applications/sales/point_of_sale/online_food_delivery>` setting is
     enabled in the :ref:`POS settings <configuration/settings>`, the :guilabel:`Delivery Payment`
     option appears on the :guilabel:`Payment Method` form and is used for online delivery payments.
     Select a :guilabel:`Delivery Provider` to configure the option.
   - If the Accounting app is installed, the :guilabel:`Outstanding Account` and
     :guilabel:`Intermediary Account` options appear in the :guilabel:`Payment Method` form to
     assign transactions to different :doc:`accounts
     </applications/finance/accounting/get_started/chart_of_accounts>`. Leave the field empty to
     use the company's default account.

.. tip::
   - Create a :guilabel:`Cash` Journal for cash payments. Click in the :guilabel:`Journal` field,
     then :guilabel:`Search more`, and click :guilabel:`New`.
   - Activate at least one :doc:`payment provider </applications/websites/ecommerce/payments>` to
     allow online payments and add at least one bank account to the journal to enable QR code
     payments through bank apps.
   - Always set the :guilabel:`Journal` to :guilabel:`Bank` when :ref:`configuring a payment
     terminal <pos/terminals/configuration>`.

.. seealso::
   - `Payment methods (video tutorial) <https://www.youtube.com/watch?v=eHr4tS8Wmss>`_
   - :doc:`payment_methods/terminals`

.. toctree::
   :titlesonly:

   payment_methods/customer_credit
   payment_methods/qr_code_payment
   payment_methods/terminals
