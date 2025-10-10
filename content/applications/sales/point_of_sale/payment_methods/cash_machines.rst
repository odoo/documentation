:show-content:

=============
Cash machines
=============

Connecting and integrating a cash machine with a :ref:`POS system <pos/session-start>` enables
automation of cash transactions, cash counting, and change return.

.. _pos/cash_machines/configuration:

Configuration
=============

Configure the cash machine itself before setting it up in Odoo. Currently, Odoo supports :doc:`Glory
<cash_machines/glory>` cash machines. Once the cash machine is fully set up:

#. Create the associated :doc:`payment method <../payment_methods>`.
#. Select the POS in the :guilabel:`Point of Sale` field.

.. _pos/terminals/cash-machine-use:

Use
===

To process a :ref:`payment <pos/sell>` with a :ref:`configured cash machine
<pos/cash_machines/configuration>`, select the machine's :doc:`payment method <../payment_methods>`
on the **payment screen**, then follow the instructions on the machine.

Once the transaction is successful, the payment is automatically validated in Point of Sale.

.. note::
   - Connection issues between Odoo and the cash machine result in transaction cancellation.
   - To cancel the payment request, click :guilabel:`Cancel`.

.. toctree::
   :titlesonly:

   cash_machines/glory
