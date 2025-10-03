:show-content:

===============
Payment methods
===============

Configure a payment method with Odoo Point of Sale to provide customers with various payment
options, including cash, card payments through a :ref:`configured payment terminal
<pos/terminals/configuration>`, :doc:`online payments </applications/finance/payment_providers>`,
or :doc:`customer accounts <payment_methods/customer_credit>`.

To create a payment method, go to :menuselection:`Point of Sale --> Configuration --> Payment
Methods`, click :guilabel:`New`, and follow the next steps:

#. Enter a name for the payment method.
#. Enable the following options if needed:

   - :guilabel:`Online Payment`: To link the payment method to a :doc:`payment provider
     </applications/finance/payment_providers>` and enable online payments, select a provider in
     the :guilabel:`Allowed Providers` field or click :icon:`fa-arrow-right` :guilabel:`Payment
     Providers` to install one.
   - :guilabel:`Identify Customer`: Force the selection of a customer during the payment.
#. Select the preferred :doc:`Journal </applications/finance/accounting/get_started/journals>` to
   record all transactions.
#. Select the appropriate :guilabel:`Point of Sale` to enable the payment method.
#. Set the :guilabel:`Integration` field to one of the following options:

   - :guilabel:`None required`: For cash payments.
   - :guilabel:`Terminal`: :ref:`Set up a terminal <pos/terminals/configuration>` and allow card
     payments.
   - :guilabel:`Bank App (QR Code)`: Add at least one :ref:`bank account
     <accounting/journals/bank>` to the journal to enable :doc:`QR code payments
     </applications/sales/point_of_sale/payment_methods/qr_code_payment>` with a bank app. Select a
     :guilabel:`QR Code Format` in the form.
   - :guilabel:`Cash Machine (Glory)`: Connect a **Glory** cash machine to automate the point of
     sale's cash transactions.
#. Save.

.. note::
   - The :guilabel:`Delivery Payment` option links a payment method to online orders placed through
     :doc:`Urban Piper </applications/sales/point_of_sale/online_food_delivery>`. Select the
     appropriate :guilabel:`Delivery Provider` to associate with the payment method.
   - If the Accounting app is installed, use the :guilabel:`Intermediary Account` field, if needed,
     to record transactions for this payment method in a specific receivable account for
     better traceability. Leave the field empty to use the company's default :ref:`receivable
     account <accounting/accounts-receivable-payable>`. When a :ref:`journal
     <accounting/journals/bank>` is selected, an :ref:`Outstanding Account
     <accounting/journals/outstanding-accounts>` can also be set if required.

.. tip::
   - Use a dedicated :ref:`cash journal <accounting/journals/cash>` to record cash payments.
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
