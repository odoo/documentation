==============================
Delivery and invoice addresses
==============================

Companies often have multiple locations, and it is common that a customer invoice should be sent to
one address and the delivery should be sent to another. Odoo's **Customer Addresses** feature is
designed to handle this scenario by making it easy to specify which address to use for each case.

.. seealso::
   :doc:`overview`

Configuration
=============

To specify a sales order's invoice and delivery addresses, first go to :menuselection:`Accounting
--> Configuration --> Settings`. In the :guilabel:`Customer Invoices` section, enable
:guilabel:`Customer Addresses` and click :guilabel:`Save`.

On quotations and sales orders, there are now fields for :guilabel:`Invoice Address` and
:guilabel:`Delivery Address`. If the customer has an invoice or delivery address listed on their
contact record, the corresponding field will use that address by default, but any contact's address
can be used instead.

Invoice and deliver to different addresses
==========================================

Delivery orders and their delivery slip reports use the address set as the :guilabel:`Delivery
Address` on the sales order. By default, invoice reports show both the shipping address and the
invoice address to assure the customer that the delivery is going to the correct location.

Emails also go to different addresses. The quotation and sales order are sent to the main contact's
email, as usual, but the invoice is sent to the email of the address set as the
:guilabel:`Invoice Address` on the sales order.

.. note::
   - Reports, such as the delivery slip and invoice report, can be :doc:`customized using Studio
     </applications/productivity/studio/pdf_reports>`.
   - If :doc:`Send by Post <snailmail>` is checked when you click :guilabel:`Send & Print`, the
     invoice will be mailed to the invoice address.
