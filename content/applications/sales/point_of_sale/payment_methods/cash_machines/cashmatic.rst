=========
Cashmatic
=========

`Cashmatic <https://cashmatic.eu/>`_ :doc:`cash machines <../cash_machines>` automate cash
transactions by accepting cash and dispensing change. When integrated with Odoo Point of Sale,
payments are processed directly through the machine from the :ref:`POS register
<pos/use/open-register>`.

.. note::
   - The integration with the Cashmatic cash machine only supports payments and refunds.
   - Tasks such as filling and emptying the machine must be performed directly through the cash
     machine interface or via the MyCashmatic app (available on `Android
     <https://play.google.com/store/apps/details?id=com.cashmatic.app&pcampaignid=web_share>`_ or
     `iOS <https://apps.apple.com/us/app/mycashmatic/id1661294811>`_) or `website
     <https://cashmatic.be/my-cashmatic/login>`_.

.. _pos/cashmatic/configuration:

Cash machine configuration
==========================

.. important::
   - Two separate sets of credentials are provided with the machine: one for the cash machine,
     required to :ref:`configure it in Odoo <pos/cashmatic/odoo_configuration>`, and one for the
     **MyCashmatic** app or website, required to configure the cash machine itself.
   - The Cashmatic machine must be on the same local network as the device running Odoo Point of
     Sale and must be assigned a static IP address to ensure stable operation.
   - Setting up the Cashmatic machine requires the hardware administrator's password and technical
     knowledge. Contact your Cashmatic integration partner for configuration support if assistance
     is needed.

Configuring the Cashmatic machine as a :ref:`payment method in Odoo
<pos/cashmatic/odoo_configuration>` requires locating the machine's :ref:`IP address
<pos/cashmatic/ip-address>` and preparing for connection over :ref:`HTTPS <pos/cashmatic/https>` or
:ref:`HTTP <pos/cashmatic/http>`.

.. note::
   HTTPS provides a more secure connection and requires additional configuration, including
   installing a valid certificate. HTTP allows communication through
   :doc:`../../hardware_network/pos_lna` and is recommended as it is simpler to set up.

.. _pos/cashmatic/ip-address:

Locate the IP address
---------------------

To locate the Cashmatic IP address, use one of the following methods:

- On the Cashmatic machine, log in with the provided credentials, then go to
  :menuselection:`Settings --> IP address`.
- In the MyCashmatic app or on the website, sign in to your account, then go to
  :menuselection:`Settings --> Network`.

Note the IP address displayed on the machine's or the device's screen, as it is needed for the
:ref:`Odoo configuration step <pos/cashmatic/odoo_configuration>`.

.. _pos/cashmatic/https:

Connection over HTTPS
---------------------

To connect the Cashmatic machine over HTTPS, a valid certificate is required. To generate and
download the certificate, follow these steps:

#. Open a web browser and type the IP address in the address bar to access the Cashmatic web
   interface.
#. In the interface's side menu, go to :menuselection:`Settings --> Device`.
#. Scroll down to the :guilabel:`Use Cashmatic CA` option and enable it.
#. Click :guilabel:`Save` and refresh the page. A :guilabel:`Download HTTPS Certificate` link
   appears at the bottom left of the side menu.
#. Click the :guilabel:`Download HTTPS Certificate` link.

To install the certificate on the device running Odoo Point of Sale, contact your integration
partner, as the process depends on the device's operating system.

.. _pos/cashmatic/http:

Connection over HTTP
--------------------

To connect the Cashmatic machine over HTTP, use one of the following methods:

- On the Cashmatic machine, log in, go to :menuselection:`Settings --> Trusted mode`, then click
  :guilabel:`Yes`.
- In the MyCashmatic app or on the website, sign in to your account, go to
  :menuselection:`Settings --> System`, then enable :guilabel:`Unsecured APIs`.

.. seealso::
   `Cashmatic user manual <https://cashmatic.it/wp-content/uploads/2026/02/EN-6.pdf>`_

.. _pos/cashmatic/odoo_configuration:

Odoo configuration
==================

To connect the Cashmatic machine to Odoo, follow these steps:

#. :ref:`Install <general/install>` the :guilabel:`POS Cashmatic Cash Machines` (`pos_cashmatic`)
   module.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and click
   :guilabel:`New`.
#. Set the :guilabel:`Journal` field to :guilabel:`Cash`.
#. Select the relevant POS in the :guilabel:`Point of Sale` field.
#. Set the :guilabel:`Integration` field to :guilabel:`Cash Machine (Cashmatic)`.
#. In the :guilabel:`Cashmatic Settings` tab, enter the Cashmatic machine's :ref:`IP address
   <pos/cashmatic/ip-address>` in the :guilabel:`Cashmatic IP` field.
#. Enter the provided Cashmatic credentials in the :guilabel:`Cashmatic Username` and
   :guilabel:`Cashmatic Password` fields.
#. Optionally, enable :guilabel:`Cashmatic Local Network Access` to connect the machine over `HTTP`.

.. seealso::
   :doc:`../../payment_methods`
