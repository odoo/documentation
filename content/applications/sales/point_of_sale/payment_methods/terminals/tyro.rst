====
Tyro
====

Connecting a Tyro payment terminal to **Odoo Point of Sale** allows you to offer customers a smooth
payment experience while simplifying the work of cashiers.


.. important::
   - Tyro :doc:`payment terminals <../terminals>` use a JavaScript API called iClient and
     communicate over the internet. They do not require an :doc:`IoT Box
     </applications/general/iot>`.
   - Tyro payment terminals are supported only in **Australia**.
   - All transactions are processed in AUD, although currency conversion is supported.

.. _pos/tyro/configuration:

Tyro configuration
==================

Once your Tyro EFTPOS terminal is configured, you can pair it with your POS system. To do so:

#. On the terminal, access the menu and navigate to the POS pairing screen. You may need to enter
   your operator or admin password.

   .. note::
      The steps required to access the pairing screen vary depending on the terminal model. For
      model-specific instructions, refer to `Tyro's setup guides <https://www.tyro.com/set-up/>`_.

#. For Tyro Pro devices, make sure the terminal is set to :guilabel:`Integrated` mode.
#. Press the :guilabel:`Pair with POS` button.
#. Note the :abbr:`MID (Merchant ID)` and :abbr:`TID (Terminal ID)` displayed on the screen. You
   need these values for :ref:`configuration in Odoo <pos/tyro/odoo-configuration>`.

.. seealso::
   - `Change the integration mode on Tyro Pro devices <https://help.tyro.com/s/article/How-to-change-the-integration-mode-on-the-Tyro-Pro-EFTPOS-machine>`_
   - `Locate the MID and TID on Tyro EFTPOS machines <https://help.tyro.com/s/article/How-do-I-find-the-Merchant-ID-Terminal-ID-on-the-Tyro-EFTPOS-machine>`_

.. _pos/tyro/odoo-configuration:

Odoo configuration
==================

To configure Tyro for Odoo, first :ref:`enable Tyro and create the payment method
<pos/terminals/configuration>`. Then, configure the Tyro-specific settings on the payment method
form:

#. Make sure the :guilabel:`Tyro Mode` field is set to :guilabel:`Production Mode`.

   .. admonition:: Alternative modes

      - :guilabel:`Test mode`: This mode is used to test the payment flow with a test terminal.
      - :guilabel:`Simulator Mode`: This mode is used to test various payment scenarios without a
        physical terminal, using predefined `magic numbers
        <https://integrationsimulator.test.tyro.com/docs/purchase>`_.

#. Enter the following values in their corresponding fields:

   - Paste the :abbr:`MID (Merchant ID)` retrieved from the :ref:`terminal screen
     <pos/tyro/configuration>` into the :guilabel:`Tyro Merchant ID` field.
   - Paste the :abbr:`TID (Terminal ID)` retrieved from the :ref:`terminal screen
     <pos/tyro/configuration>` into the :guilabel:`Tyro Terminal ID` field.

#. Click the :guilabel:`Pair Terminal` button to pair the payment method with the terminal. This
   action sends a pairing request to the terminal, which takes a few seconds to complete.
#. If needed, enable the following additional options:

   - :guilabel:`Integrated Receipts`: Insert the Tyro receipt in the Odoo :doc:`receipt
     <../../use/receipts>`. If not enabled, the Tyro receipt is printed separately.
   - :guilabel:`Always print merchant receipts`: Always print the merchant copy of the receipt. By
     default, merchant copies are only printed when a signature is required.
