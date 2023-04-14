=============================
Onsite interventions planning
=============================

From a sales order
==================

Allowing your sales team to open onsite interventions creates a seamless experience for your
customers. They can receive a quotation they first have to approve before the work even starts.

Go to :menuselection:`Field Service --> Configuration --> Products` and create or edit a product.

#. Under the :guilabel:`General Information` tab, select :guilabel:`Service` as :guilabel:`Product
   Type`.
#. Under the :guilabel:`Sales` tab, select :guilabel:`Timesheets on tasks` as :guilabel:`Service
   Invoicing Policy`.
#. Select :guilabel:`Create a task in an existing project` as :guilabel:`Service Tracking`.
#. Select your :guilabel:`Project`.
#. If you use them, select your :guilabel:`Worksheet Template`, and save.

.. image:: onsite_interventions/product-configuration.png
   :align: center
   :alt: Product configuration to create tasks from sales orders in Odoo Field Service

From the :doc:`Sales <../../sales/sales>` app, create a quotation with the product and confirm it. A
task is automatically set up under your Field Service project. It is directly accessible from the
sales order.

.. image:: onsite_interventions/task-on-so.png
   :align: center
   :alt: Field Service task on a sales order in Odoo Sales

From helpdesk tickets
=====================

The integration with the :doc:`Helpdesk <../helpdesk>` app lets your helpdesk team manage
intervention requests directly. Planning field service tasks from tickets speeds up your processes.

Configure the helpdesk team
---------------------------

Go to :menuselection:`Helpdesk --> Configuration --> Helpdesk Teams`. Select a team and enable
:guilabel:`Onsite Interventions`.

.. image:: onsite_interventions/helpdesk-settings.png
   :align: center
   :alt: Onsite interventions settings in Odoo Helpdesk

The helpdesk tickets of the team now display the :guilabel:`Plan Intervention` button. Click on it
to create a new task under your field service project.

.. image:: onsite_interventions/plan-intervention-from-ticket.png
   :align: center
   :alt: Plan intervention from helpdesk tickets in Odoo Helpdesk
