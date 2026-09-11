===================
Invoicing processes
===================

Automation of customer invoice creation in Odoo varies based on business needs and the applications
in use. Typically, the system generates draft invoices using information from other documents, such
as sales orders.

Select one of the following methods to create draft invoices based on specific business needs:

- :ref:`Sales <accounting/inv-process/sales>`
- :ref:`Subscriptions <accounting/inv-process/subscriptions>`
- :ref:`eCommerce <accounting/inv-process/ecommerce>`
- :ref:`Point of sale <accounting/inv-process/pos>`

.. seealso::
   :doc:`/applications/finance/accounting/customer_invoices`

.. _accounting/inv-process/sales:

Sales
=====

Standard sales workflows convert approved quotations into sales orders, which subsequently generate
draft invoices. The different invoicing options are:

-  Invoicing manually: Manually create draft invoices directly from the sales order using the
   :guilabel:`Create Invoice` button.
-  Depending on the :doc:`invoicing policy configured
   <../../../sales/sales/invoicing/invoicing_policy>`:

   - :guilabel:`Ordered quantities` invoicing (before delivery): This is the standard practice for
     prepaid eCommerce transactions, where the customer pays upfront, and delivery occurs later.
   - :guilabel:`Delivered quantities` invoicing: Commonly used in retail and e-commerce, this method
     manages discrepancies between the quantities ordered and delivered, such as for weighted items
     like food. Partial shipments generate invoices only for the items delivered, and backorders
     generate separate invoices for each delivery.

.. note::
   - It's recommended to invoice manually. It allows the salesperson to generate invoices on demand,
     with several options: invoicing the entire order, invoicing a percentage as an advance,
     invoicing specific lines, or invoicing a fixed advance amount. It can be applied to both
     services and physical products.
   - Invoices can also be generated from sales orders created in the :doc:`Repairs app
     </applications/inventory_and_mrp/repairs>` for invoicing after-sales services.

.. tip::
   To create a consolidated invoice for all sales orders linked to the same customer, follow these
   steps:

   #. Go to :menuselection:`Sales --> Orders --> Orders`, and use the search bar to
      :guilabel:`Group By` :guilabel:`Customer`.
   #. Click the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon to expand the list of sales
      orders for the desired customer.
   #. Select the relevant sales orders with :guilabel:`Invoice Status` set to :guilabel:`To
      Invoice`, ensuring all selected orders share the same invoicing address and the same delivery
      address.
   #. Click :guilabel:`Create Invoices`.
   #. In the :guilabel:`Create invoice(s)` window, keep the :guilabel:`Consolidated Billing` option
      enabled, and set the :guilabel:`Timesheets Period`, if needed.
   #. Click :guilabel:`Create Draft`.

.. seealso::
   - :doc:`../../../sales/sales/invoicing/proforma`

.. _accounting/inv-process/contracts:

Contracts
---------

Under the terms of a contract with a customer, invoices can be generated periodically or at the end
of the contract based on the following:

- :doc:`Time and materials <../../../sales/sales/invoicing/time_materials>`: Based on recorded hours
  and materials used, as documented in timesheets or purchase records.
- Fixed products/services: Based on predefined products or services as outlined in a sales order
  linked to the contract.

.. note::
   This invoicing method is commonly used by service companies that bill primarily on a
   time-and-materials basis. In contrast, service companies that invoice at a fixed price typically
   follow a :ref:`standard sales order process <accounting/inv-process/sales>`.

.. seealso::
   :doc:`../../../sales/sales/invoicing/milestone`

.. _accounting/inv-process/subscriptions:

Subscriptions
=============

Invoices for :doc:`subscriptions <../../../sales/subscriptions>` or recurring contracts are
generated automatically at regular intervals. The billing period and specific services or products
included are defined in the configured recurring plans.

.. _accounting/inv-process/ecommerce:

eCommerce
=========

:ref:`eCommerce orders generate invoices <ecommerce/handling/invoices>` once the order has been
fully paid.

.. _accounting/inv-process/pos:

Point of sale
=============

Point of Sale allows for :doc:`creating invoices <../../../sales/point_of_sale/use/pos_invoices>`
for :ref:`registered customers <pos/use/customers>`.
