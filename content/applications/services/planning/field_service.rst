=============
Field service
=============

Field Service allows on-site interventions to be scheduled directly in the Planning app. Work
performed can be recorded using custom :ref:`worksheets <planning/field-service/worksheets>`, while
:ref:`materials used <planning/field-service/products>` and time spent can be tracked on the
:ref:`shift <planning/field-service/record>` and billed to the customer. A :ref:`customer report
<planning/field-service/customer-report>` can be generated at the end of the intervention for
signature. :ref:`Itineraries <planning/field-service/itinerary>` can also be planned for field
employees.

To activate Field Service, go to :menuselection:`Planning --> Configuration --> Settings`, enable
:guilabel:`Field Service`, and click :guilabel:`Save`.

.. _planning/field-service/shifts:

Intervention planning
=====================

Interventions are planned as :ref:`shifts <planning/shifts>` and can be created:

- directly from the Planning app, in the same way as standard :ref:`shifts <planning/create-shift>`;
- :ref:`from sales orders <planning/shifts-sales-orders>`;
- :ref:`from helpdesk tickets <helpdesk/after-sales/field-service>`.

Depending on the use case, field service-relevant information is added manually or automatically
using the following fields on the shift form:

- :guilabel:`Customer`: Select or create the relevant customer.
- :guilabel:`Sales Order`: If the intervention must be :ref:`billed
  <planning/field-service/invoicing>`, select the relevant sales order. Only the sales orders linked
  to the specified customer and containing service products are available in the dropdown menu. If
  the shift was :ref:`created from a sales order <planning/shifts-sales-orders>`, this field is
  filled automatically.
- :guilabel:`Worksheet`: If :ref:`worksheets <planning/field-service/worksheets>` are enabled, the
  default one is automatically selected in this field. Choose a different one from the dropdown menu
  or create one if needed.
- :guilabel:`Under warranty`: Enable the checkbox to automatically set the price of any material or
  service :ref:`added to the sales order from the shift <planning/field-service/products>` to zero,
  preventing them from being invoiced. The price of any material or service added directly on
  the sales order remains unchanged.

Once the shift has been created, :ref:`publish it <planning/shifts-publish>`.

.. tip::
   Ensure the customer has a valid address if :ref:`itinerary planning
   <planning/field-service/itinerary>` is required.

.. _planning/field-service/record:

Intervention logging
====================

.. note::
   In order to start working on an intervention:

   - The shift must be :ref:`published <planning/shifts-publish>`.
   - A :guilabel:`Customer` must be :ref:`defined for the shift <planning/field-service/shifts>`.

To sign in and log intervention details, follow these steps:

#. Go to :menuselection:`Planning --> Planning --> My Planning` or access any
   :ref:`schedule <planning/shifts>`.
#. Click the relevant intervention in the calendar or schedule, then click :guilabel:`Sign In`.
#. Add :guilabel:`Photos` or :ref:`Products <planning/field-service/products>`, if any, using the
   buttons above the form.
#. Use the :guilabel:`Note` and :guilabel:`Worksheet` tabs to add internal notes and :ref:`Worksheet
   <planning/field-service/worksheets>` details, respectively.
#. Click :guilabel:`Complete`. The :ref:`customer report <planning/field-service/customer-report>`
   is automatically generated, if applicable.

.. note::
   The intervention's start and end date and time are updated upon signing in to and completing it,
   respectively, and the :guilabel:`Allocated Time` is adjusted accordingly.

.. tip::
   To add items or information to ongoing or completed shifts at a later point, :ref:`edit the shift
   <planning/shifts-edit>`.

.. _planning/field-service/geolocation:

Geolocation
-----------

To track the technician's location at the start and end of an intervention, go to
:menuselection:`Planning --> Configuration --> Settings` and enable :guilabel:`Geolocation` in the
:guilabel:`Field Service` section.

Once enabled, users are geolocalized upon clicking :guilabel:`Sign In` and :guilabel:`Complete`
on a shift; the GPS coordinates are logged in the shift's chatter. Click :guilabel:`View on Map`
to view the location in Google Maps.

.. note::
   Geolocation requires the browser to be granted access to the user's location. A pop-up
   requesting location permission is usually displayed the first time a user signs in to an
   intervention after the feature is enabled. If the pop-up does not appear, users must enable
   location access manually in the browser's site settings.

.. _planning/field-service/worksheets:

Worksheets
==========

Worksheets are used to document and report on work performed during on-site interventions. They can
include various types of content, such as instructions, checklists, text fields, etc.

.. _planning/field-service/worksheet-configuration:

Configuration
-------------

To use worksheets for field service interventions, go to :menuselection:`Planning --> Configuration
--> Settings`, enable :guilabel:`Worksheets` in the :guilabel:`Field Service` section, and click
:guilabel:`Save`.

.. note::
   Enabling worksheets also enables the :ref:`Customer Report
   <planning/field-service/customer-report>` feature by default.

Then, create worksheet templates:

#. Go to :menuselection:`Planning --> Configuration --> Worksheet Templates`.
#. Click :guilabel:`New`.
#. Enter a :guilabel:`Name`.
#. Under :guilabel:`Worksheet properties`, click :icon:`fa-plus` :guilabel:`Add Property`, then
   :ref:`configure the property field <essentials/property-fields/add>`.
#. Repeat the previous step for each additional property field.

.. note::
   By default, the first template in the list is applied to field service shifts unless one is
   :ref:`manually selected <planning/field-service/worksheet-shift>`. To reorder worksheet
   templates, use the :icon:`oi-draggable` (:guilabel:`drag handle`) icon.

.. tip::
   - Worksheet templates can also be :ref:`created and/or edited from the shift form
     <planning/field-service/worksheet-shift>`.
   - A default worksheet template can also be assigned to a specific service. To do so, configure
     the service product to automatically :ref:`create a shift <planning/shifts-sales-orders>` from
     sales orders that contain it, then select the relevant :guilabel:`Worksheet`
     :icon:`fa-building-o` in the :guilabel:`General Information` tab of the product form.

.. _planning/field-service/worksheet-shift:

Worksheets in shifts
--------------------

The default :ref:`worksheet template <planning/field-service/worksheet-configuration>` is
automatically selected in the :guilabel:`Worksheet` field on the shift form upon :ref:`creation
<planning/field-service/shifts>`. Select a different template from the dropdown menu or create one
if needed.

.. tip::
   To edit a worksheet template from the shift, hover over the :guilabel:`Worksheet` dropdown
   menu, click the :icon:`fa-external-link` (:guilabel:`internal link`) icon, then :ref:`edit the
   template <essentials/property-fields/add>`. Changes apply to **all** shifts using that template.

The worksheet can then be completed in the :guilabel:`Worksheet` tab on the shift form :ref:`during
the intervention <planning/field-service/record>`.

.. _planning/field-service/map:

Map
===

Technicians can access a map with the location of their field service interventions planned for the
day by going to :menuselection:`Planning --> Planning --> My Map`.

.. important::
   For an intervention's location to appear on the map, a valid address must be provided for the
   customer.

Interventions are sorted by their planned date and time in the left pane. Click one to display its
location and details. From there, click :guilabel:`Open` to open the shift form, or
:guilabel:`Navigate to` to get directions from the current location to the intervention's location
in Google Maps.

.. tip::
   - By default, the map displays today's planned interventions. To display all shifts, remove
     the :guilabel:`Start Date: Today` filter in the search bar.
   - Administrators can view all resources and their respective intervention locations on the map
     by going to  :menuselection:`Planning --> Maps`.
   - You can also display an intervention's location by clicking the shift in the calendar or
     schedule, then clicking :icon:`fa-map-marker` (:guilabel:`View itinerary`).

.. _planning/field-service/itinerary:

Itinerary planning
------------------

To display an itinerary on the map in the Planning app, enable MapBox:

#. Create or sign in to a `MapBox account <https://www.mapbox.com/>`_.
#. `Create a token <https://docs.mapbox.com/help/getting-started/access-tokens/#adding-url-restrictions-to-access-tokens>`_.
#. Go to the `Access tokens <https://account.mapbox.com/access-tokens/>`_ page on MapBox and copy
   the token.
#. In Odoo, open the Settings app and scroll down to the :guilabel:`Integrations` section.
#. Paste the MapBox access token in the :guilabel:`Token` field under :guilabel:`Map Routes`, then
   click :guilabel:`Save`.

Once enabled, the technician's map displays a complete itinerary for the day, which can be
opened on the Google Maps website or app by clicking :guilabel:`Maps`. Google Maps uses the current
location as the starting point.

.. _planning/field-service/invoicing:

Invoicing
=========

To invoice customers for services performed and :ref:`materials <planning/field-service/products>`
used during interventions, go to :menuselection:`Planning --> Configuration --> Settings` and
enable :guilabel:`Billing` in the :guilabel:`Field Service` section.

  .. note::
     - Enabling the :guilabel:`Billing` feature automatically installs the :doc:`Sales app
       </applications/sales/sales>`.
     - The :ref:`Products <planning/field-service/products>` and :ref:`Customer Report
       <planning/field-service/customer-report>` settings are enabled by default when
       :guilabel:`Billing` is activated.

Once the feature is enabled, an intervention is billed whenever it is linked to a sales order. This
occurs when:

- The intervention was :ref:`planned from a sales order <planning/shifts-sales-orders>`.
- A sales order was :ref:`selected on the shift <planning/field-service/shifts>`.
- :ref:`Products were added <planning/field-service/products>` from the shift form, provided the
  shift is not marked as :guilabel:`Under Warranty`.
- A :guilabel:`Service to Bill` is :ref:`defined on the form of the employee(s)
  <planning/field-service/employee-service>` assigned as the shift's :guilabel:`Resources`.

.. seealso::
   - :ref:`Invoice a sales order <accounting/inv-process/so>`
   - :doc:`Odoo Sales documentation </applications/sales/sales>`

Time-based invoicing
--------------------

To invoice the actual time spent on an intervention, the :doc:`Project <../project>` and
:doc:`Timesheets <../timesheets>` apps must be installed, and the following must be defined on the
:ref:`shift form <planning/create-shift>`:

- :guilabel:`Resources`: Assign at least one employee to the shift.
- :guilabel:`Project`: The project linked to the shift must be configured as :guilabel:`Billable`,
  and :guilabel:`Timesheets` must be enabled in the :ref:`project's settings
  <project_management/configuration>`.

The sales order's service is then invoiced based on the shift's :guilabel:`Allocated Time`, which is
updated upon shift :ref:`start and completion <planning/field-service/record>`.

.. _planning/field-service/employee-service:

If an employee's work is billed at a specific rate or with extra fees, define a dedicated product
on the employee's form. To do so, go to :menuselection:`Planning --> Configuration --> Employees`,
select the relevant employee, go to the :guilabel:`Settings` tab, and select the relevant
:guilabel:`Service to Bill` in the :guilabel:`Planning` section.

The service defined for the employee is added to the sales order linked to the intervention, if
applicable. Otherwise, a sales order is created with the employee's service when the shift is
marked as completed, and invoiced based on the time spent on the intervention.

.. _planning/field-service/products:

Products
--------

Materials used during interventions can be recorded directly from field service shifts and billed to
customers.

To add products to a shift, go to :menuselection:`Planning --> Configuration --> Settings` and
ensure the :ref:`Billing <planning/field-service/invoicing>` and :guilabel:`Products` features are
enabled. Then, follow these steps:

#. :ref:`Sign in to the shift <planning/field-service/record>` or :ref:`edit <planning/shifts-edit>`
   an ongoing shift.
#. Click the :guilabel:`0 Products` button.
#. Click :icon:`fa-shopping-cart` :guilabel:`Add` on a product card.
#. Adjust the product quantity, if needed, using the :guilabel:`-` and :guilabel:`+` buttons.
#. Click :guilabel:`Back` to return to the shift.

The :guilabel:`Products` button displays the number of products added to the shift. Click it to
add more.

.. tip::
   - To locate a product more easily in the catalog, use the search bar and filter by
     :guilabel:`Product Category` or :ref:`Attributes <products/variants/attributes>`.
   - To create or edit products from the Planning app, go to :menuselection:`Planning -->
     Configuration --> Products`.

.. note::
   - Adding products from a shift requires the :guilabel:`User: All Documents` (or
     :guilabel:`Administrator`) :guilabel:`Sales` :doc:`access right
     </applications/general/users/access_rights>`.
   - Any products added to the shift are added to the related sales order. If no sales order is
     linked to the shift, a new one is created automatically. To access it, click the
     :guilabel:`Sales Order` smart button on the shift form.
   - Products added to shifts marked as :guilabel:`Under Warranty` are not invoiced; their price is
     automatically set to `0` on the sales order.

.. _planning/field-service/quotations:

Quotations
----------

Quotations can be created directly from field service shifts, for example, when additional work or
materials are identified during an intervention. To activate this feature, go to
:menuselection:`Planning --> Configuration --> Settings`, ensure the :guilabel:`Billing` setting is
activated in the :guilabel:`Field Service` section, then enable :guilabel:`Quotations`, and click
:guilabel:`Save`.

To create a quotation from a shift, click the :guilabel:`Quotations` smart button on the shift form,
then click :guilabel:`New` and :ref:`fill in the fields <sales/create-quotation>`.

.. _planning/field-service/customer-report:

Customer report
===============

When interventions are :ref:`billed <planning/field-service/invoicing>` and/or when :ref:`worksheets
<planning/field-service/worksheets>` are used, a customer report is generated automatically upon
shift completion. It details the materials and services provided, the time spent, and the completed
worksheet (if applicable).

.. note::
   The :guilabel:`Customer Report` feature is activated by default when the :guilabel:`Billing` or
   :guilabel:`Worksheets` feature is enabled in the :guilabel:`Field Service` section of the
   Planning settings .

Click the :guilabel:`Customer Preview` smart button on the shift form to access the report, then
click :guilabel:`Sign Report` to collect the customer's :ref:`signature
<sign/sign-document/initials-signature>` and send the report to the customer.

.. tip::
   To exclude prices from the customer report for :ref:`billed <planning/field-service/invoicing>`
   interventions, go to :menuselection:`Planning --> Configuration --> Settings`, ensure the
   :guilabel:`Billing` and :guilabel:`Products` features are activated, enable :guilabel:`Hide
   prices on customer report`, and :guilabel:`Save`.
