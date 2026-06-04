=======
Cashdro
=======

`Cashdro <https://www.cashdro.com/be>`_ :doc:`cash machines <../cash_machines>` enable the
automation of cash transactions.

.. note::
   - The integration with the Cashdro cash machine only supports payments and refunds.
   - Tasks like filling and emptying the machine must be performed directly through the cash
     machine interface.

.. _pos/cashdro/configuration:

Cash machine configuration
==========================

.. important::
   - Setting up the Cashdro machine requires the hardware administrator password and technical
     knowledge. Contact your Cashdro integration partner for configuration support if assistance is
     needed.
   - The Cashdro machine must be assigned a static IP address to ensure stable operation.
   - The Cashdro machine must be on the same local network as the device running Odoo Point of Sale.

Configuring the Cashdro machine as a :ref:`payment method in Odoo <pos/cashdro/odoo_configuration>`
requires locating its IP address and enabling HTTP on the cash machine to use :doc:`Local Network
Access (LNA) <../../hardware_network/pos_lna>`.

To locate the Cashdro machine's IP address, remove one of the devices inside the machine. For
example, remove the bill device on the left side of the machine by unlatching it from the bottom
and sliding it out. On the error screen that appears, click the :icon:`fa-info` (:guilabel:`info`)
icon in the top-right. This action displays a diagnostics screen with the IP address, which is
required for the :ref:`payment method configuration process <pos/cashdro/odoo_configuration>`.

To enable the HTTP setting on the Cashdro machine, follow the next steps:

#. Navigate to `https://<cashdro-ip>/Cashdro3Web/#/login`, replacing `<cashdro-ip>` with the
   Cashdro machine's IP address.
#. Log in as the administrator.
#. Go to :menuselection:`Configuration --> General parameters`.
#. In the :guilabel:`Web Integration` section, ensure :guilabel:`Enable HTTP` is enabled.
#. Restart the machine by going to `https://<cashdro-ip>/Cashdro3Web/#/diagnosis/false`, replacing
   `<cashdro-ip>` with the Cashdro machine's IP address, and clicking :guilabel:`Options`, then
   :guilabel:`Reset machine`.

.. note::
   Make sure to reconnect any device that was disconnected during the process.

.. _pos/cashdro/odoo_configuration:

Odoo configuration
==================

To connect the Cashdro machine to Odoo, follow the next steps:

#. :ref:`Install <general/install>` the :guilabel:`POS Cashdro Cash Machines` (`pos_cashdro`)
   module.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and click
   :guilabel:`New`.
#. Set the :guilabel:`Journal` field to :guilabel:`Cash`.
#. Select the relevant POS in the :guilabel:`Point of Sale` field.
#. Set the :guilabel:`Integration` field to :guilabel:`Cash Machine (Cashdro)`.
#. In the :guilabel:`Cashdro Settings` tab, enter the Cashdro machine's IP address in the
   :guilabel:`Cashdro IP` field.
#. Enter your Cashdro user credentials in the :guilabel:`Cashdro Username` and :guilabel:`Cashdro
   Password` fields.
#. Enable :guilabel:`Cashdro Local Network Access`.

.. note::
   It is highly recommended to use :doc:`Local Network Access <../../hardware_network/pos_lna>`, as
   it bypasses the need for an :doc:`SSL certificate <../../hardware_network/epos_ssc>`.

.. seealso::
   :doc:`../../payment_methods`
