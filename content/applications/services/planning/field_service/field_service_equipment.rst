=======================
Field Service Equipment
=======================

When selling equipment, products can be tracked by
:doc:`serial number <../../../inventory_and_mrp/inventory/product_management/product_tracking/serial_numbers>`
or :doc:`lot number <../../../inventory_and_mrp/inventory/product_management/product_tracking/lots>`. Equipment
tracking allows businesses to maintain accurate records of which products have been sold to which customer and to
identify which product is covered by the warranty during repairs or maintenance operations.

.. important::
   To begin tracking equipment and its maintenance history:

   - The Inventory app must be installed.
   - A serial number or lot number must be assigned to the product.

.. _planning/field_service_equipment/tracking-equipment:

Tracking equipment
==================

To track equipment sold to a specific customer, follow these steps:

#. Go to :menuselection:`Planning --> Configuration --> Settings`, enable :guilabel:`Equipment` in the
   :guilabel:`Operations` section, and click :guilabel:`Save`.
#. :doc:`Sell <../../../sales/sales/sales_quotations/create_quotations>` a product tracked by a serial number.
#. Go to :menuselection:`Inventory --> Products --> Lots/Serial Numbers`.
#. :ref:`Filter <search/filters>` by customer.

.. tip::
   It is also possible to view all serial numbers or lot numbers sold to a specific customer by going to
   :menuselection:`Sales --> Orders --> Customers` and clicking on the customer. This will open their contact form.
   Click on the :icon:`menu` :guilabel:`Lots/Serial Numbers` smart button to view each tracked product
   sold to this specific customer.

.. _planning/field_service_equipment/maintenance-history-of-sold-equipment:

Maintenance history of sold equipment
=====================================

.. important::
   To track maintenance for serial numbers or lots numbers, the Subscription app must be installed, and a
   :ref:`subscription product <subscriptions/form-configuration>` must be created.

To keep track of the maintenance of a serial number or lot number, first go to
:menuselection:`Planning --> Configuration --> Settings` and enable :guilabel:`Maintenance Contracts` in the
:guilabel:`Operations` section.

Then, follow these steps:

#. Create a sales order with a subscription product.
#. In the :guilabel:`Order Lines` tab, click the :icon:`tune` (:guilabel:`sliders`)
   button and tick :guilabel:`Equipment Maintained`. This adds a new column.
#. Under the :guilabel:`Equipment Maintained` column, specify the serial numbers or lot numbers covered by the
   maintenance service product.
#. Confirm the sales order.

To view the maintained serial numbers or lot numbers, go to :menuselection:`Inventory --> Products --> Lots / Serial
Numbers`; the :guilabel:`Maintained` status indicates which serial numbers or lot numbers are currently under a
subscription plan.

.. _planning/field_service_equipment/automatically-create-shifts-on-recurring-service-orders:

Automatically create shifts on recurring service orders
=======================================================

To automatically create shifts when a recurring service is bought, follow these steps:

#. Go to :menuselection:`Subscription --> Products --> Products`.
#. Open the subscription product.
#. Enable :guilabel:`Plan Services` and select a role.
#. Open the Sales app and create a new sales order with the subscription product.
#. In the :guilabel:`Order Lines` tab, specify the serial numbers or lot numbers covered by the subscription
   product under the :guilabel:`Equipment Maintained` column.
#. Confirm the sales order.

Odoo will automatically create the recurring shift linked to that sales order.

.. tip::
   When :doc:`Developer mode <../../../general/developer_mode>` is activated, it is possible to configure the number
   of months for which Odoo will generate shifts. To do this, activate Developer mode, navigate to
   :menuselection:`Planning --> Configuration --> Settings`, and specify the number of months for shift generation
   in the :guilabel:`Recurring Shifts` field.

To view the planned shifts, go to :menuselection:`Inventory --> Products --> Lots / Serial Numbers`, then select a
:guilabel:`Maintained` product. Click on the :icon:`checklist` :guilabel:`Shifts` smart button to see each planned
shift linked to the serial number or lot number.

.. note::
   The shift's recurrence will automatically stop when the subscription is canceled.

.. tip::
   When creating a shift and selecting a subscription product in the :guilabel:`Sales Order` field, the shift will be
   considered :guilabel:`"Under Warranty"` by default.
