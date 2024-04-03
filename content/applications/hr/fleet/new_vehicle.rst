============
New vehicles
============

Odoo's *Fleet* app manages all vehicles, and the accompanying documentation that comes with vehicle
maintenance, and drivers records.

Upon opening the :menuselection:`Fleet` application, all vehicles are organized within the
:guilabel:`Vehicles` dashboard, which is the default dashboard for the *Fleet* application. Each
vehicle is displayed in its corresponding Kanban stage, based on its status. The default stages are
:guilabel:`New Request`, :guilabel:`To Order`, :guilabel:`Registered`, and :guilabel:`Downgraded`.

To add a new vehicle to the fleet from the :guilabel:`Vehicles` page, click the :guilabel:`New`
button in the top-left corner, and a blank vehicle form loads. Then, proceed to enter the vehicle
information on the vehicle form.

The form auto-saves as data is entered. However, the form can be saved manually at any time by
clicking the *save manually* option, represented by a :guilabel:`(cloud upload)` icon, located in
the top-left corner of the page.

.. _fleet/new_vehicle/vehicle-form:

Vehicle form fields
===================

- :guilabel:`Model`: select the vehicle's model from the drop-down menu. Once a model is selected,
  additional fields may appear on the form.

  If the model is not listed, type in the model name, and click either :guilabel:`Create "model"`,
  or :guilabel:`Create and edit...` to :ref:`create a new model and edit the model details
  <fleet/add-model>`.
- :guilabel:`License Plate`: enter the vehicle's license plate number in this field.
- :guilabel:`Tags`: select any tags from the drop-down menu, or type in a new tag. There is no limit
  on the amount of tags that can be selected.

.. image:: new_vehicle/model.png
   :align: center
   :alt: The new vehicle form, showing the model section.

.. note::
   The :guilabel:`Model` is the only required field on the new vehicle form. When a model is
   selected, other fields appear on the vehicle form, and relevant information auto-populates the
   fields that apply to the model. If some of the fields do not appear, this may indicate there is
   no model selected.

Driver section
--------------

This section of the vehicle form relates to the person who is currently driving the car, as well as
any plans for a change in the driver in the future, and when.

- :guilabel:`Driver`: select the driver from the drop-down menu, or type in a new driver and click
  either :guilabel:`Create "driver"` or :guilabel:`Create and edit...` to :ref:`create a new driver,
  and edit the driver details <fleet/new_vehicle/add-driver>`.

  .. important::
     A driver does **not** have to be an employee. When creating a new driver, the driver is added
     to the *Fleet* application, **not** the *Employees* application.

     If the *Contacts* application is installed, the driver information is also stored in the
     *Contacts* application.

- :guilabel:`Mobility Card`: if the selected driver has a mobility card listed on their employee
  card in the *Employees* application, the mobility card number appears in this field. If there is
  no mobility card listed, and one should be added, :ref:`edit the employee record
  <employees/hr-settings>` in the *Employees* application.
- :guilabel:`Future Driver`: if the next driver for the vehicle is known, select the next driver
  from the drop-down menu. Or, type in the next driver and click either :guilabel:`Create "future
  driver"` or :guilabel:`Create and edit...` to :ref:`create a new future driver, and edit the
  driver details <fleet/new_vehicle/add-driver>`.
- :guilabel:`Plan To Change Car`: if the current driver set for this vehicle plans to change their
  vehicle - either because they are waiting on a new vehicle that is being ordered, or this is a
  temporary vehicle assignment, and they know which vehicle they are driving next - check this box.
  Do **not** check this box if the current driver does not plan to change their vehicle.
- :guilabel:`Assignment Date`: using the drop-down calendar, select when the vehicle is available
  for another driver. Select the date by navigating to the correct month and year using the
  :guilabel:`⬅️ (left arrow)` and :guilabel:`➡️ (right arrow)` icons. Then, click on the specific
  day. If this field is left blank, that indicates the vehicle is currently available, and can be
  reassigned to another driver. If it is populated, the vehicle is not available for another driver
  until the selected date.
- :guilabel:`Company`: select the company from the drop-down menu. This field only appears in a
  multi-company database.

.. _fleet/new_vehicle/add-driver:

Create a new driver
~~~~~~~~~~~~~~~~~~~

If a driver is not already in the system, the new driver should first be configured and added to the
database. A new driver can be added either from the :guilabel:`Driver` or :guilabel:`Future Driver`
fields on the :ref:`vehicle form <fleet/new_vehicle/vehicle-form>`.

First, type in the name of the new driver in either the :guilabel:`Driver` or :guilabel:`Future
Driver` field, then click :guilabel:`Create and edit...`. A :guilabel:`Create Driver` or
:guilabel:`Create Future Driver` form appears, depending on which field initiated the form.

Both the :guilabel:`Create Driver` and :guilabel:`Create Future Driver` forms are identical.

.. _fleet/new_vehicle/general-info:

.. note::
   Depending on the installed applications, different tabs or fields may be visible on the
   :guilabel:`Create Driver` and :guilabel:`Create Future Driver` forms.

General information
*******************

Fill out the following information on the top-half of the form:

- :guilabel:`Individual` or :guilabel:`Company`: choose if the driver being added is an individual
  driver or a company. Click the radio button to make a selection.

  When a selection is made, some fields may disappear from the form. If any of the fields below are
  not visible, that is because :guilabel:`Company` was selected instead of :guilabel:`Individual`.
- :guilabel:`Name`: enter the name of the driver or company in this field.
- :guilabel:`Company Name...`: using the drop-down menu, select the company the driver is associated
  with.

  If the :guilabel:`Company` radio button is selected at the top of the form, this field does not
  appear.
- :guilabel:`Contact`: enter the contact information in this section.

  If desired, the :guilabel:`Contact` field can be changed to a different type of contact. Click on
  :guilabel:`Contact` to reveal a drop-down menu. The available options to select are
  :guilabel:`Contact`, :guilabel:`Invoice Address`, :guilabel:`Delivery Address`,
  :guilabel:`Follow-up Address`, or :guilabel:`Other Address`.

  If desired, select one of these other options for the :guilabel:`Contact` field, and enter the
  corresponding information.

  If the :guilabel:`Company` radio button is selected at the top of the form, this field is labeled
  :guilabel:`Address` and cannot be modified.

- :guilabel:`Tax ID`: enter the driver or company's tax ID in this field.
- :guilabel:`Job Position`: enter the driver's job position in this field. If the
  :guilabel:`Company` radio button is selected at the top of the form, this field does not appear.
- :guilabel:`Phone`: enter the driver or company's phone number in this field.
- :guilabel:`Mobile`: enter the driver or company's mobile number in this field.
- :guilabel:`Email`: enter the driver or company's email address in this field.
- :guilabel:`Website`: enter the driver or company's website address in this field.
- :guilabel:`Title`: using the drop-down menu, select the driver's title in this field. The default
  options are :guilabel:`Doctor`, :guilabel:`Madam`, :guilabel:`Miss`, :guilabel:`Mister`, and
  :guilabel:`Professor`.

  If the :guilabel:`Company` radio button is selected at the top of the form, this field does not
  appear.
- :guilabel:`Tags`: using the drop-down menu, select any tags that apply to the driver or company.

  To add a new tag, type in the tag, then click :guilabel:`Create "tag"`.

  There is no limit to the number of tags that can be selected.

.. image:: new_vehicle/create-driver.png
   :align: center
   :alt: The top portion of the create driver form.

Contacts & Addresses tab
************************

After completing the top-half of the :guilabel:`Create Driver` or :guilabel:`Create Future Driver`
form, add any other contacts and addresses associated with the driver or company in this tab.

To add a new contact, click the :guilabel:`Add` button, and a :guilabel:`Create Contact` pop-up
window appears.

Before entering the necessary information on the form, select the type of contact being added from a
series radio button options located at the top of the form. Those options are:

- :guilabel:`Contact`: select this option to add general contact details for employees of the
  associated company.
- :guilabel:`Invoice Address`: select this option to add a preferred address for all invoices. When
  added to the form, this address is selected by default when sending an invoice to the associated
  company.
- :guilabel:`Delivery Address`: select this option to add a preferred address for all deliveries.
  When added to the form, this address is selected by default when delivering an order to the
  associated company.
- :guilabel:`Follow-up Address`: select this option to add a preferred address for all follow-up
  correspondence. When added to the form, this address is selected by default when sending reminders
  about overdue invoices.
- :guilabel:`Other Address`: select this option to add any other necessary addresses for the company
  or driver.

.. image:: new_vehicle/create-contact.png
   :align: center
   :alt: The create contact form with all parts filled in.

Depending on the :guilabel:`Contact Type`, some optional fields may not be visible. The available
fields are identical to the fields in the :ref:`general information
<fleet/new_vehicle/general-info>` section of the new driver form.

Add any notes to the :guilabel:`Internal notes...` section of the form.

After entering all of the information, click either :guilabel:`Save & Close` to add the one new
contact, or :guilabel:`Save & New` to add the current address record and create another address
record.

As contacts are added to this tab, each contact appears in a separate box, with an icon indicating
what type of contact is listed.

.. example::
   An :guilabel:`Invoice Address` displays a :guilabel:`💲 (dollar sign)` icon inside that specific
   address box, whereas a :guilabel:`Delivery Address` displays a :guilabel:`🚚 (truck)` icon
   inside.

   .. image:: new_vehicle/contacts-address.png
     :align: center
     :alt: The create contact form with all parts filled in.

Sales & Purchase tab
********************

Enter the following sales and purchasing information, in the :guilabel:`Sales & Purchase` tab of the
:guilabel:`Create Driver` or :guilabel:`Create Future Driver` pop-up form for the various sections
below.

Depending on the other installed applications, additional fields and sections may appear. The
following are all default fields for the *Fleet* application **only**.

Sales section
^^^^^^^^^^^^^

- :guilabel:`Salesperson`: using the drop-down menu, select the user who is the main point of
  contact for sales with this driver's company.

  This person **must** be an internal user of the company, meaning they can log into the database as
  a user.

Misc
^^^^

- :guilabel:`Company ID`: if the company has an ID number, **other than** its *tax ID*, enter it in
  this field.
- :guilabel:`Reference`: enter any text to give more information regarding the contact person. This
  is an internal note to provide any additional information.

  .. example::
     A company has several people with the same name, John Smith. The :guilabel:`Reference` field
     could state `John Smith at X205 - purchaser` to provide additional details.

Internal Notes tab
******************

Add any notes that pertain to the driver, or any other necessary information, in this tab.

Vehicle section
---------------

This section of the vehicle form relates to the physical details of the vehicle.

If a preexisting vehicle in the database was selected for the :guilabel:`Model` field in the top
portion of the form, some fields may auto-populate, and additional fields may also appear.

Fill in the following fields on the form:

- :guilabel:`Category`: using the drop-down menu, select the vehicle category from the available
  options. To create a new category, type in the new category name, then click :guilabel:`Create
  "category"`.
- :guilabel:`Order Date`: using the drop-down calendar, select the date the vehicle was ordered.
- :guilabel:`Registration Date`: using the drop-down calendar, select the date the vehicle was
  registered.
- :guilabel:`Cancellation Date`: using the drop-down calendar, select the date the vehicle lease
  expires, or when the vehicle is no longer available.
- :guilabel:`Chassis Number`: enter the chassis number in the field. This is known in some countries
  as the :abbr:`VIN (Vehicle Identification Number)` number.
- :guilabel:`Last Odometer`: enter the last known odometer reading in the number field. Using the
  drop-down menu next to the number field, select whether the odometer reading is in kilometers
  :guilabel:`(km)` or miles :guilabel:`(mi)`.
- :guilabel:`Fleet Manager`: select the fleet manager from the drop-down menu, or type in a new
  fleet manager, and click either :guilabel:`Create` or :guilabel:`Create and Edit`.
- :guilabel:`Location`: type in the specific location where the vehicle is typically located in this
  field. The entry should clearly explain where the vehicle can be found, such as `Main Garage` or
  `Building 2 Parking Lot`.

.. image:: new_vehicle/new-vehicle-type.png
   :align: center
   :alt: The new vehicle form, showing the vehicle tax section.

Tax Info tab
------------

Depending on the localization setting for the database, and what additional applications are
installed, other fields may be present on the form.

The sections below are default and appear for all vehicles, regardless of other installed
applications or localization settings.

Fiscality
~~~~~~~~~

- :guilabel:`Horsepower Taxation`: enter the amount that is taxed based on the size of the vehicle's
  engine. This is determined by local taxes and regulations, and varies depending on the location.
  It is recommended to check with the accounting department to ensure this value is correct.

Contract
~~~~~~~~

- :guilabel:`First Contract Date`: select the start date for the vehicle's first contract using the
  drop-down calendar. Typically this is the day the vehicle is purchased or leased.
- :guilabel:`Catalog Value (VAT Incl.)`: enter the MSRP (Manufacturer's Suggested Retail Price) for
  the vehicle at the time of purchase or lease.
- :guilabel:`Purchase Value`: enter the purchase price or the value of the lease for the vehicle.
- :guilabel:`Residual Value`: enter the current value of the vehicle.

.. note::
   The values listed above affect the accounting department. It is recommended to check with the
   accounting department for more information and/or assistance with these values.

.. image:: new_vehicle/new-vehicle-tax.png
   :align: center
   :alt: The new vehicle form, showing the vehicle tax section.

Model tab
---------

If the model for the new vehicle is already configured in the database, the :guilabel:`Model` tab
will be populated with the corresponding information. If the model is not already in the database
and the :guilabel:`Model` tab needs to be configured, :ref:`configure the new vehicle model
<fleet/add-model>`.

Check the information in the :guilabel:`Model` tab to ensure it is accurate. For example, the color
of the vehicle, or if a trailer hitch is installed, are examples of common information that may need
updating.

.. image:: new_vehicle/model-tab.png
   :align: center
   :alt: The new vehicle form, showing the vehicle tax section.

Note tab
--------

Enter any notes for the vehicle in this section.
