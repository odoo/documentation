:industry_module: custom_industrial_equipment
:knowledge_xmlid: custom_industrial_equipment.welcome_article

.. _industries/custom_industrial_equipment:

===========================
Custom industrial equipment
===========================

The **Custom Industrial Equipment** industry package helps equipment manufacturers manage technical
inquiries, design approvals, production, installation, and maintenance in Odoo. It connects these
stages for custom conveyors, specialized machines, and other equipment built to customer
requirements.

Teams can keep specifications, quotations, bills of materials, and production orders with the
customer project. Purchasing and inventory provide the components, shop-floor instructions guide
assembly, and quality checks record the results. Installation and repair records then help the
service team identify the equipment and follow work on individual units.

.. _industries/custom_industrial_equipment/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **CRM** app and the **Sales** app: Follow technical inquiries, prepare equipment quotations,
  and agree the order scope.
* The **Project** app and the **Documents** app: Organize design work, specifications, approvals,
  and customer files.
* The **Manufacturing** app and the **Shop Floor** app: Build equipment and provide operation
  instructions to the workshop.
* The **PLM** app: Review and approve engineering changes to products and bills of materials.
* The **Quality** app: Record checks and investigate production issues.
* The **Purchase** app: Source components, subassemblies, and subcontracted work.
* The **Inventory** app and the **Barcode** app: Trace components and serial-numbered units through
  stock operations.
* The **Timesheets** app: Record project work and follow design and service costs.
* The **Planning** app: Schedule installation teams and equipment resources.
* The **Repairs** app: Follow component changes and repair work on delivered equipment.
* The **Invoicing** app: Prepare down payments, partial invoices, and final billing.

.. _industries/custom_industrial_equipment/set-up-equipment-and-component-records:

Set up equipment and component records
======================================

Organize the product catalog according to how each item is supplied:

* **Raw materials and purchased components**: Record vendor information and purchase prices.
* :guilabel:`Subassemblies`: Define the components and operations in a bill of materials.
* **Finished equipment**: Use a fixed bill of materials for standard equipment, or create a product
  for an individual customer project from the master bill-of-materials catalog.
* :guilabel:`Services`: Create products for design, consultation, installation, and maintenance.

Use serial-number tracking when individual units need to be identified during delivery and
subsequent service. Review procurement routes and invoicing settings before quoting the products.

.. _industries/custom_industrial_equipment/bills-of-materials-and-work-centers:

Bills of materials and work centers
-----------------------------------

Enable work centers in :menuselection:`Manufacturing --> Configuration --> Settings` and configure
the resources used for production.

1. Create a bill of materials for a standard product or a nonsalable :guilabel:`Generic Product`
   used as a template.
2. Set a distinct :guilabel:`BOM Reference` to identify the design.
3. Add the required components and quantities.
4. Add operations with their work centers and expected durations.
5. Set :guilabel:`Manufacturing Lead Time` and :guilabel:`Days to Prepare Manufacturing` where
   needed.

Choose the appropriate bill-of-materials type for in-house manufacturing or subcontracting.
Subcontracting requires its corresponding supply and receipt workflow; configure that route before
using the bill of materials.

Use by-products when production creates additional outputs. Review work-center capacity and
:guilabel:`Batch Size` in :guilabel:`Miscellaneous` when defining how operations consume production
capacity. The :guilabel:`Make to Order` route can create a manufacturing order from a confirmed
sales order when the product's routes are configured accordingly.

:doc:`Subcontracting <../applications/inventory_and_mrp/manufacturing/subcontracting>`

.. _industries/custom_industrial_equipment/develop-the-customer-project:

Develop the customer project
============================

Collect technical inquiries through the website form or configured email alias in the **CRM** app.
Keep specifications and customer discussions in the opportunity's chatter.

Prepare a quotation directly when the requirements are established. For an order that needs design
or proof-of-concept work first, use the opportunity's gear menu to create a project from the
appropriate template.

A scanner project, for example, may begin with a proof of concept for multilingual recognition. Keep
the specifications, supplier quotations, and proposed bills of materials with that project, then
prepare the customer quotation from the project's :guilabel:`Sales` shortcut. Revise the design and
offer within the same project as the scope develops.

:doc:`Record technical inquiries <../applications/sales/crm/acquire_leads/email_manual>`

.. _industries/custom_industrial_equipment/tasks-and-shared-documents:

Tasks and shared documents
--------------------------

Assign project tasks and record time against the design work. The project shortcuts provide access
to related sales orders, purchases, invoices, and production records, including additional orders
when the customer adds scope.

Use the **Documents** app for internal working files and customer-facing folders. Share the relevant
folders for review or client uploads, keeping internal engineering files restricted to the team.

Open :guilabel:`Bills of Materials` from the project to follow its designs. A project can contain
several bills of materials. Use the :guilabel:`Manufacturing` tab to create or follow the production
orders for those designs.

:doc:`Review project records and dashboards
<../applications/services/project/project_management/project_dashboard>`

.. _industries/custom_industrial_equipment/quotation-and-project-margin:

Quotation and project margin
----------------------------

Review the expected margin on sales-order lines when preparing the offer. The project overview
compares expected sales with recorded costs, including supplier invoices, timesheets, and completed
manufacturing orders. Use the project's analytic accounting to associate costs with the correct
equipment order.

:doc:`Create and send quotations <../applications/sales/sales/sales_quotations/create_quotations>`

:doc:`Subscription <../applications/sales/subscriptions>`

.. _industries/custom_industrial_equipment/manufacture-equipment-and-subassemblies:

Manufacture equipment and subassemblies
=======================================

Create a manufacturing order from a bill of materials or start one for a custom product. Review the
component quantities and operations, adapting the template to the approved design before
confirmation.

Subassemblies can be supplied through separate manufacturing orders, :guilabel:`Make to Order`
routes linked to the parent order, or reordering rules that maintain minimum stock. The product's
routes determine which replenishment method is used.

:doc:`Manufacturing <../applications/inventory_and_mrp/manufacturing>`

.. _industries/custom_industrial_equipment/work-orders-and-instructions:

Work orders and instructions
----------------------------

Define each operation's duration, instructions, assigned people, and quality checks. Use the
:guilabel:`Notes` field on the :guilabel:`Miscellaneous` tab for formatted instructions, diagrams,
supporting documents, Knowledge links, or links to design software. Operators can access this
information in the **Shop Floor** app.

When component specifications change, the optional :guilabel:`Product Conversion` module can support
conversions between configured product variants, such as different component grades. Review the
conversion setup before using it in a production workflow.

`Module <https://apps.odoo.com/apps/modules/saas-19.2/product_conversion>`__

.. _industries/custom_industrial_equipment/production-planning:

Production planning
-------------------

The dates on a confirmed manufacturing order initially reflect its estimated schedule. Click
:guilabel:`Plan` to schedule the work orders against available work-center capacity, then review the
work-center planning view.

.. important::
   Moving a work order in the planning view does not automatically replan the other work orders.
   Review the affected operations and resource conflicts after changing a date.

.. _industries/custom_industrial_equipment/shop-floor-work:

Shop-floor work
---------------

Use the **Shop Floor** app on a workshop device and select the relevant work centers. Employees can
log in under their own records on a shared device to record the work they perform.

1. Select a planned work order with the required components available.
2. Start the operation and follow its instructions.
3. Record component consumption and complete the required checks.
4. Mark the operation as done when the work is complete.
5. Complete the remaining operations and record the finished production.

Printed barcode commands can support the configured workshop operations.

:doc:`Shop Floor documentation
<../applications/inventory_and_mrp/manufacturing/shop_floor/shop_floor_overview>`

.. _industries/custom_industrial_equipment/quality-and-engineering-changes:

Quality and engineering changes
-------------------------------

Quality control points create checks at the configured production stages. If a problem occurs,
record a quality alert for the quality team to investigate and follow its resolution.

Use the **PLM** app to propose changes to components or operations through engineering change
orders. Have the responsible engineers review and approve the change before applying it to the bill
of materials. Keep the version history with the design so later production uses the approved
version.

.. _industries/custom_industrial_equipment/purchase-and-move-stock:

Purchase and move stock
=======================

Review replenishment needs in the **Inventory** app. Set the :guilabel:`Horizon` to include upcoming
demand, then replenish through the configured purchase, subcontracting, or manufacturing route. In
the **Purchase** app, compare supplier offers and group compatible requirements before confirming
orders.

.. _industries/custom_industrial_equipment/receipts-and-deliveries:

Receipts and deliveries
-----------------------

1. Open the transfer from the purchase order, sales order, or inventory operations.
2. Review quantities, lot or serial numbers, and destination locations.
3. Record packages and print labels where needed.
4. Validate the transfer for the quantities moved.

When only part of the order is moved, create a backorder for the remaining quantity if it still
needs to be received or delivered.

.. _industries/custom_industrial_equipment/barcode-operations:

Barcode operations
------------------

Use the **Barcode** app to scan products, serial numbers, packages, and storage locations. Configure
the allowed actions for each operation type, and print the command barcodes used by the warehouse.

The dedicated Barcode interface supports warehouse work on a scanning device. Configure the user's
access rights for the operations and records needed by that role.

:doc:`Configure barcode operations and commands
<../applications/inventory_and_mrp/barcode/setup/operation_types>`

.. _industries/custom_industrial_equipment/install-and-service-delivered-equipment:

Install and service delivered equipment
=======================================

After delivery, use the **Planning** app to schedule the installation team and equipment resources.
Complete the installation worksheet with the required photographs, observations, and customer
sign-off.

Create future maintenance work in advance when it forms part of the order, then assign the resources
once the visit date is agreed.

:doc:`Planning <../applications/services/planning>`

.. _industries/custom_industrial_equipment/repairs-and-component-changes:

Repairs and component changes
-----------------------------

Create a repair order for the delivered product and serial number. Record components removed or
added during repair so the work on that unit can be followed.

With the **Helpdesk** app configured, a customer ticket can lead to a repair order. Create the
linked sales order when replacement parts or labor need to be billed, and review the repaired unit's
component information before returning it to the customer.

:doc:`Repair <../applications/inventory_and_mrp/repairs>`

:doc:`Helpdesk <../applications/services/helpdesk>`

.. _industries/custom_industrial_equipment/invoice-equipment-orders:

Invoice equipment orders
========================

Set the payment terms on the sales order and prepare the agreed down payment. Create partial or
final invoices as the order reaches its delivery or service stages, using the configured invoicing
policy. Review each draft in the **Invoicing** app before posting and sending it.

:doc:`Invoicing <../applications/finance/accounting/customer_invoices>`

.. _industries/custom_industrial_equipment/present-equipment-services-online:

Present equipment services online
=================================

Use the **Website** app to present products, explain the design and installation services, and
publish the company's policies. Connect the contact form to the **CRM** app so technical inquiries
enter the same workflow as other prospective orders.

:doc:`Collect inquiries with website forms
<../applications/websites/website/web_design/building_blocks/forms>`

.. _industries/custom_industrial_equipment/go-further:
.. _industries/custom_industrial_equipment/additional-apps:

Additional apps
===============

Recurring service agreements, production-equipment upkeep, and after-sales support can accompany
equipment orders:

* Use the **Accounting** app to reconcile customer and supplier payments, follow bank transactions,
  and review financial reports.
* Use the **Maintenance** app to schedule servicing for production lines and workshop equipment.
* Use the **Subscriptions** app to manage recurring maintenance agreements.
* Use the **Helpdesk** app to collect after-sales requests and connect them to equipment service
  work.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

:doc:`Accounting <../applications/finance/accounting>`

:doc:`Maintenance <../applications/inventory_and_mrp/maintenance>`

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
