=============
Field service
=============

Odoo Planning allows you to schedule and manage the field service shifts performed on site by your
company's resources.

.. _field-service/configuration:

Configuration
=============

Field Service must be activated first: go to :menuselection:`Planning --> configuration --> settings`
and enable :guilabel:`Field Service`. Then, more options can be enabled in the
:guilabel:`Field Service` section:

- :guilabel:`Billing`: to invoice your time and materials to your customers.

- :guilabel:`Products`: to track the materials used during interventions and bill them to the
  customer.

- :guilabel:`Customer Report`: to provide the customer with an intervention report, collect their
  signature, and email them a copy.

- :guilabel:`Worksheets`: to complete worksheets using custom templates.

- :guilabel:`Quotations`: to create new quotations directly from interventions.

- :guilabel:`Geolocation`: to Track technician location at intervention start and completion.

Select those you need and click :guilabel:`Save`.

.. _field-service/shifts:

Creating field service shifts
=============================

Odoo Planning is primarily designed for :doc:`creating shifts <../planning>` in batches in which you can include field
service properties if needed. To create a single field service shift in Planning:

#. Open the Planning app.
#. Click :guilabel:`New`, or click directly on the calendar timeline and drag a timeslot on the time
   and resource of your choice to have these preselected on the next step.
#. In the :guilabel:`Add Shift` pop-up, fill in the task title, :guilabel:`Customer` and any other
   :ref:`optional field <task_creation/task-configuration>`, then save manually.

.. _field-service/shifts-sales-orders:

Creating field service shifts from sales orders
===============================================

Field service shifts can be created directly from a sales order.

Create a quotation in :guilabel:`Sales`, select :guilabel:`Field Service` as the product, and
click :guilabel:`Confirm`. Click the :guilabel:`Field Service` smart button to schedule it. if the
:guilabel:`Plan Services` feature is enabled in the settings of your Field Service product, click
the :guilabel:`To Plan` smart button. That way, only the role selected to perform your Field
Service shift will be displayed to schedule the shift.

.. _field-service/ticket:

Creating shifts from helpdesk tickets
=====================================

If you have the Helpdesk app installed, you can
:ref:`create field service shifts from a helpdesk ticket <helpdesk/field>`.

.. _field-service/performing-shift:

Performing a field service shift
================================

To record the activity of a field service shift as a worker on site:

#. Go to :menuselection:`Planning --> Planning --> My Planning`.
#. Click on a field service shift.
#. Click the :guilabel:`Sign in` button to confirm you're starting to work on the shift, making
   the shift go from :guilabel:`Scheduled` to :guilabel:`In Progress`.
#. Fill the shift form with the required items, such as photos, note,
   :ref:`worksheet <field-service/worksheets/on-site>`, :ref:`products <field-service/product>` etc.
#. Click :guilabel:`Complete` to confirm the field service work is done and open the field service
   report preview in the customer portal.

.. _field-service/worksheets:

Worksheets
==========

Worksheets help your field service workers perform and report their on-site shifts. They can
feature various information, such as instructions, to-do lists, etc. You can also format your
worksheet using checkboxes, bullet points, blank fields to fill in, HTML, and add files, images,
links, and more.

Because it is common for businesses to have their workers perform the same type of field service
repeatedly, using custom worksheet templates eliminates the need to recreate the same
worksheet each time you plan a similar field service shift.

.. _field-service/worksheets/worksheets-configuration:

Worksheets configuration
------------------------

To use worksheets in Odoo Planning, go to :menuselection:`Planning --> Configuration -->
Settings`, make sure :guilabel:`Field Service` is enabled. Then enable the :guilabel:`Worksheets`
feature, and click :guilabel:`Save`.

.. note::
   Since the integration of Field Service into Planning in Odoo 19.2,
   :doc:`Odoo Studio </applications/studio>` is no longer required to create worksheets.

.. _field-service/worksheets/worksheet-template:

Creating a worksheet template
-----------------------------

To create worksheet templates, go to :menuselection:`Planning --> Configuration -->
Worksheet Templates`. Click :guilabel:`New`. Give your worksheet template a :guilabel:`Name` and
select a :guilabel:`Company`, if required. Save manually, then click
:guilabel:`Add Property` to customize your worksheet template : give a name to the property in the
:guilabel:`Label` field, select one or multiple :guilabel:`Field Type` values, and type their
:guilabel:`Default Value` and :guilabel:`Suffix` in their dedicated fields if required.

Each :guilabel:`Field Type` includes its own configurable settings. To rearrange the properties on
the worksheet, drag and drop them in the desired order.

When your worksheet template is complete, save manually.

.. _field-service/worksheets/default-worksheet:

The order of worksheets determines how they appear in a shift's settings, in the dropdown menu when
selecting another worksheet for a shift, and the first worksheet in the list is selected by default
on a field service shift. To rearrange the worksheet order, drag and drop them in the desired order.

.. _field-service/worksheets/worksheet-shift:

Adding a worksheet template to a shift
--------------------------------------

Go to :guilabel:`Planning`, click on an existing shift and click :guilabel:`Edit`; or when creating
a new shift: :menuselection:`Planning --> New`. Then Select a :guilabel:`Worksheet Template`, and
click :guilabel:`Save`.

By default, the :ref:`default worksheet template <field-service/worksheets/default-worksheet>` is
selected. To change the selected worksheet template, click the :guilabel:`Worksheet` field and
select another one in the dropdown menu. To edit a worksheet template from the shift, click the
:icon:`fa-external-link` (:guilabel:`Internal link`) icon that appears when you hover your mouse over
the :guilabel:`Worksheet` field on the task form.

.. note::
   Editing a worksheet template from a shift updates it for all shifts using that template.

.. _field-service/worksheets/on-site:

Using worksheets on site
------------------------

:ref:`Start working on a field service task in planning <field-service/performing-shift>`. Click the
:guilabel:`Worksheet` tab and complete it according to your needs, then click :guilabel:`Save`
when finished.

.. _field-service/product:

Product management
==================

Field service workers commonly use
:doc:`products </applications/websites/ecommerce/configuration/products>` to complete their work.
Planning allows them to record these products in Odoo. Doing so keeps your inventory up-to-date in
real-time and automatically adds the products to the invoice.

.. _field-service/product/configuration:

Product configuration
---------------------

To activate Products in Planning, go to :menuselection:`Planning --> Configuration --> Settings`,
enable the :guilabel:`Billing` and :guilabel:`Products` features, and save.

.. _field-service/product/product-shift:

Using products on a field service shift
---------------------------------------

To add products to a shift as a field service worker performing a job on site,
:ref:`start working on a field service task in planning <field-service/performing-shift>`, then
follow these steps:

#. Click the :guilabel:`0 products`  button.
#. Click :guilabel:`Add` on a product card to add it to your task.
#. If needed, adjust the number of products using the :guilabel:`-` and :guilabel:`+` buttons.
#. Click the :guilabel:`Back` button to return to the shift.

Going back to your task, the products button now displays the amount of products you added to the
shift. You can return to the product catalog at any time to edit the product selection.

.. tip::
   - To create and edit products from the Planning app, go to :menuselection:`Planning -->
     Configuration --> Products`.
   - To find your products more easily in the catalog, use the search bar and filter your products
     by :guilabel:`Product Category` and :guilabel:`Attributes`.

.. _field-service/itinerary:

Planning an itinerary
=====================

By default, Odoo Planning shows a static map where all task locations for the day are
pinned : Go to :menuselection:`Planning --> Planning --> Maps`. To make it more useful for the field
service workers, it is possible to display an itinerary on the map using MapBox. To do so, enable
the **Map Routes** feature as follows:

#. Create or sign in to a MapBox account using the following link: `<https://www.mapbox.com/>`_.
#. `Create a token <https://docs.mapbox.com/help/getting-started/access-tokens/#adding-url-restrictions-to-access-tokens>`_.
#. Go to the `Access tokens page on Mapbox <https://account.mapbox.com/access-tokens/>`_ and copy
   your token.
#. In Odoo, go to the :guilabel:`Settings` app and scroll down to the :guilabel:`Integrations`
   section. Paste your Mapbox access token in the :guilabel:`Token` field under
   :guilabel:`Map Routes`, and click :guilabel:`Save`.

.. _field-service/itinerary/map:

Displaying your itinerary on a map
----------------------------------

.. important::
   For a field service shift to be featured on the map, a **valid address** must be provided for the
   customer.

To display your tasks on a map, go to :menuselection:`Planning --> Planning --> My Map`. To create
your itinerary, Odoo sorts out your field service tasks based on their :guilabel:`Planned Date` to
show the way from one location to the next.

To open your itinerary on the Google Maps website or app, click the :guilabel:`Google Maps` button.
Google Maps includes your current location as a starting point for your itinerary.

.. tip::
   - By default, the map shows today’s tasks. Remove the :guilabel:`Today` filter in the search bar
     to display all tasks. Your tasks are then sorted by date in the left column.
   - Click your task in the left column or the map pin to display the task's details. From there,
     you can :guilabel:`Open` the task or click :guilabel:`Navigate to` to get an itinerary from
     your current location to this specific task's location.
