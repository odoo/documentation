:show-content:

=============
Cash machines
=============

Connect and integrate a cash machine to a :ref:`POS system <pos/session-start>` to allow
automatic cash counting and change return.

.. _pos/cash_machines/configuration:

Configuration
=============

To activate a cash machine and allow processing payments with it, follow these steps:

#. First, follow the steps to setup your specific cash machine and create its payment method:

   - :doc:`Glory <cash_machines/glory>`
#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and add the payment method
   to the :guilabel:`Payment Methods` list to make it available in the POS interface.

.. _pos/terminals/cash-machine-use:

Cash machine use
================

To process a :ref:`payment <pos/sell>` with a :ref:`configured cash machine
<pos/cash_machines/configuration>` for an order, select the machine's :doc:`payment method
<../payment_methods>` on the :guilabel:`Payment` screen, then follow the instructions on the
machine.

Once the transaction is successful, the payment is automatically validated in Point of Sale.

.. note::
   - Connection issues between Odoo and the cash machine result in transaction cancellation.
   - To cancel the payment request, click :guilabel:`Cancel`.

.. toctree::
   :titlesonly:

   cash_machines/glory
