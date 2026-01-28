=======
DPO Pay
=======

`DPO Pay <https://dpogroup.com/>`_ offers in-store payment solutions for customer transactions
through several physical `terminals <https://dpogroup.com/products/network-pos/>`_. These terminals
support swiping, scanning, or tapping credit and debit cards (Visa, MasterCard, and American
Express), as well as Mobile payments (Airtel Money and M-Pesa).

.. seealso::
   :doc:`Use DPO Pay as a payment provider <../../../../finance/payment_providers/dpo>`

.. important::
   - DPO Pay payment terminals do not require an :doc:`IoT system </applications/general/iot>` to
     operate.
   - The Odoo DPO Pay module is only available for companies operating in the `African region
     <https://dpogroup.com/online-payments>`_.
   - A DPO merchant account is required to process transactions.

.. _pos/dpo/credentials:

DPO Pay credentials
===================

`Create a DPO Pay account and order at least one terminal <https://dpogroup.com/get-started-2/>`_.
Once ordered, the sales team contacts you for the onboarding process and then sends an email
containing the following credentials:

- Client ID
- Client Secret
- Merchant ID
- Terminal ID
- Chain ID

.. _pos/dpo/odoo-configuration:

Odoo configuration
==================

Configure the payment method
----------------------------

To connect the DPO Pay terminal with Odoo Point of Sale, follow these steps:

#. Install the :ref:`PoS DPO Pay module <general/install>`.
#. :doc:`Create a new payment method <../../payment_methods>`:

   - Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and click
     :guilabel:`New`.
   - Set the :guilabel:`Journal` field to :guilabel:`Bank`.
   - Set the :guilabel:`Integration` field to :guilabel:`Terminal`.
   - Set the :guilabel:`Integrate with` field to :guilabel:`DPO Pay`.
   - Add the :ref:`credentials <pos/dpo/credentials>` to their corresponding fields.

   .. image:: dpo/create-payment-method.png
      :alt: Form to create a new payment method.

Add the payment method to a POS
-------------------------------

To add a **payment method** to your point of sale:

#. Go to the :ref:`POS settings <configuration/settings>`.
#. Select the POS in the :guilabel:`Point of Sale` field.
#. Add the payment method under the :guilabel:`Payment Methods` field in the :guilabel:`Payment`
   section.

.. tip::
   Enable :guilabel:`DPO Pay Test Mode` to test transaction processes with a device.
