=========
Pine Labs
=========

`Pine Labs <https://www.pinelabs.com/instore-pos-machine>`_ offers in-store payment solutions for
customer transactions through several `physical terminals
<https://www.pinelabs.com/contact-sales?tab=new&form=instorepayments>`_.

.. important::
   - The Odoo Pine Labs module is only available for Indian companies.
   - Pine Labs terminals accept credit/debit cards (Visa, MasterCard, and RuPay) and UPI QR codes
     by swiping, scanning, or tapping.

.. _pos/pine-labs/credentials:

Pine Labs credentials
=====================

`Create a Pine Labs account and order at least one terminal
<https://www.pinelabs.com/contact-sales?tab=new>`_. The system then sends an email with the
following credentials:

- Merchant ID
- Store ID
- Client ID
- Security Token

.. _pos/pine-labs/odoo-configuration:

Odoo configuration
==================

To enable Pine Labs in Odoo, first :ref:`install the POS Pine Labs module <general/install>` to
make it visible in the list of payment terminals. Then, follow these steps to connect the Pine Labs
terminal with Odoo Point of Sale:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll down to the
   :guilabel:`Payment Terminals` section, enable the relevant :ref:`payment terminal
   <pos/terminals/configuration>`, and click :guilabel:`Save`.
#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create a
   payment method <../../payment_methods>`.
#. Set the :guilabel:`Journal` field to :guilabel:`Bank`.
#. Set the :guilabel:`Integration` field to :guilabel:`Terminal`.
#. Set the :guilabel:`Integrate with` field to :guilabel:`Pine Labs`.
#. Paste the copied :ref:`credentials <pos/pine-labs/credentials>` in their corresponding fields.
#. Select the preferred payment mode in the :guilabel:`Pine Labs Allowed Payment Modes` field and
   save.
#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and add the created payment
   method to the :guilabel:`Payment Methods` list to use it in a POS.
#. Click :guilabel:`Save`.

.. tip::
   Enable the :guilabel:`Pine Labs Test Mode` to test transaction processes with a device.
