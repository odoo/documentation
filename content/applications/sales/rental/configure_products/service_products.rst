=======================
Service rental products
=======================

The **Rental** app is a comprehensive tool that enables users to manage the scheduling, pricing, and
inventory for both physical goods (products) and non-physical goods (services) within a single
platform.

This flexibility allows for combining products and services like bike rentals with guided tours, or
booking a studio with a photographer.

This document covers how to configure a rental service to automatically sync with staff shifts,
track time sheet hours, and set up and link project tasks based on a rental order.

Settings
========

To configure default settings on rental products, navigate to :menuselection:`Rental app -->
Configuration --> Settings`.

.. image:: service_products/rental-settings.png
   :alt: Sample of Rental app configuration settings.

In the :guilabel:`Rental` section, under the :guilabel:`Default Delay Costs` subsection, fill in the
:guilabel:`Apply after` field.

.. note::
   For finer control, configure the costs of late returns for the :guilabel:`Per Hour` and
   :guilabel:`Per Day` fields at the product level. If the defaults apply to all products, leave the
   :guilabel:`Product` field blank.

In the :guilabel:`Default Padding Time` section, fill in the :guilabel:`Padding` field.

Next, enable :guilabel:`Rental Transfers`. In the :guilabel:`Rent Online` section, fill in the
:guilabel:`Minimal Rental Duration` field and designate :guilabel:`Unavailability days`. Click
:guilabel:`Save` to apply the changes.

App integration configuration
=============================

The following apps are essential for workflow efficiency and automation when creating a service
product and rental order:

 - **Sales** app: Enables the use of online payments and utilizes quotation templates within the
   **Rental** app.
 - **Sign** app: Allows for the upload and customization of different rental and service agreements.
   These documents are used to facilitate the :guilabel:`Request Signature` feature.
 - **Project** and **Planning** apps: Integrate with the Rental app to automatically match purchased
   products and services with employees based on availability.

.. seealso::
   - :doc:`../../sales/sales_quotations/quote_template`
   - :doc:`../../sales/sales_quotations/get_paid_to_validate`
   - :doc:`../../../services/project/project_management`
   - :doc:`../../../services/planning`
   - :doc:`../../../productivity/sign`

Rental services
===============

To view all products that can be rented in the database, navigate to :menuselection:`Rentals app -->
Products`. By default, the :guilabel:`Rental` filter appears in the search bar, and the view is
Kanban. Remove the filter, then click the search bar. From the preset filters, select
:guilabel:`Services`. All the configured services appear.

Each Kanban card displays the name and rental price of the service.

.. _rental/service_products/service:

Create a new service product
============================

.. important::

   The **Project** and the **Sales** apps must be installed for the following options to be
   available:

   - :guilabel:`Create on Order`
   - :guilabel:`Project Template`
   - :guilabel:`Invoicing Policy`
   - :guilabel:`Project & Task`

   Ticking the :guilabel:`Sales` checkbox displays the :guilabel:`Create on Order` and
   :guilabel:`Invoicing Policy`.

To set up a new rental service, go to the :menuselection:`Rental app --> Products` and then click
:guilabel:`New`. In the new product window, the :guilabel:`Rental` checkbox is already ticked by
default.

Tick the :guilabel:`Sales` checkbox. Select the :guilabel:`Product Type` as a :guilabel:`Service`.
In the :guilabel:`Create on Order` drop-down menu, select :guilabel:`Project & Task`. In the
:guilabel:`Invoicing Policy` drop-down menu, select :guilabel:`Based on Timesheets`.

Tick the :guilabel:`Plan Services` checkbox and either create a new role or select a pre-existing
one. To create a new role, type in the name of the role in the blank field and click
:guilabel:`Create and edit` that appears.

.. image:: service_products/service-product.png
   :alt: Sample of a configured service product in the Rental app.

In the :guilabel:`Create Planning Role` pop-up window, enter the role's name. Select an option for
the :guilabel:`Services` and :guilabel:`Resources`, and click :guilabel:`Save`.

.. image:: service_products/create-planning-role-window.png
   :alt: Sample of the Create Planning Role window for a service product in the Rental app.

Configure rental price
----------------------

Click the :guilabel:`Rental prices` tab and in the :guilabel:`Pricing` section, click :guilabel:`Add
a price` to enter a new rental rate. Choose a *pricing period* (:dfn:`the unit of duration of the
rental`) in the :guilabel:`Period` column, or create a new pricing period by typing in the name and
clicking Create and edit.

.. tip::
   Customize rental rate time periods by navigating to :menuselection:`Rental app --> Configuration
   --> Rental periods`.

   .. image:: service_products/new-rental-period.png
      :alt: Sample of a Create Period pop up window in the Rental app.

Next, enter the :guilabel:`Price` for that specific :guilabel:`Period`. To apply the configured
rental rate to an existing pricelist, click in the :guilabel:`Pricelist` column and select the
desired list from the drop-down menu.

In the :guilabel:`Reservations` section, fill in the :guilabel:`Hourly Fine`, :guilabel:`Daily
Fine`, and the :guilabel:`Reserve product` time. These values are automatically populated from the
:guilabel:`Default Delay Costs` section, provided they have been configured in the
:menuselection:`Rental app --> Configuration --> Settings`.

Click the :icon:`fa-cloud-upload` :guilabel:`(Save manually)` icon near the top to save.

.. example::
   A photography studio rents out its photographers on an hourly and daily basis. They want to add a
   new four hour package for $750.

   All reservations require 24-hour notice to reserve a photographer, but they do not charge a fine
   if the reservations go over the agreed time. Instead, they default to their hourly fee.

   Create a new pricing period by navigating to :menuselection:`Rental app --> Configuration -->
   Rental periods`. Click :guilabel:`New` and configure the period for four hours.

   Navigate to the :guilabel:`Photographer` service product and in the :guilabel:`Rental prices`
   tab, add the four hour period set at $750. Manually save to apply changes.

   .. image:: service_products/example-4hrs-rental-period.png
      :alt: Sample of the Rental prices tab of service product in the Rental app.

Pickup products
===============

When time is entered on the :guilabel:`Timesheets` tab of an associated task, the rental order
status automatically changes to :guilabel:`Picked-up`. This happens even if time is entered before
the physical product ordered with the service is picked up.

If a product is rented alongside a service, it is advised to pick it up before entering time on the
associated task. The :guilabel:`Pickup` button is still available on the rental order if time is
entered before picking up the product.

When a customer picks up the product, navigate to the appropriate rental order, click
:guilabel:`Pickup`, and then click :guilabel:`Validate` in the :guilabel:`Validate a pickup` pop-up
form that appears.

.. image:: service_products/pickup-popup.png
   :alt: Sample of a service product pick up pop-up window in the Rental.

Doing so places a :guilabel:`Picked-up` status banner on the rental order.

Return products
===============

Regardless if there is a product rented along with a service, the service or product must be
returned on the rental order.

When a customer returns the products or when the service has been completed, navigate to the
appropriate rental order and click :guilabel:`Return`. Validate the return by clicking
:guilabel:`Validate` in the :guilabel:`Validate a return` pop-up form that appears.

.. image:: service_products/validate-a-return-window.png
   :alt: Sample of returning a service product in the Rental app.

Doing so places a :guilabel:`Returned` status banner on the rental order.

.. example::
   The photography studio had a customer who wanted to rent one of their photographers and banner
   decorations for a home photo shoot. The booking was for two hours.

   On the :guilabel:`Validate a return` form the rental order, the banner line item matches number
   of banners picked up and the photographer line item matches the number of hours submitted on the
   :guilabel:`Timesheets` tab on the related task.

   .. image:: service_products/return-form-example-product-service.png
      :alt: Sample of a Validate a return form with a rental product and service listed.
