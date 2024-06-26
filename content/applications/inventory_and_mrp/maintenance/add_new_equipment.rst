=================
Add new equipment
=================

.. _maintenance/equipment_management/add_new_equipment:

In Odoo, *equipment* refers to any item that is used in everyday operations, including the
manufacturing of products. This can mean a piece of machinery on a production line, a tool that is
used in different locations, or a computer in an office space. Equipment registered in Odoo can be
owned by the company that uses the Odoo database, or by a third party, such as a vendor in the case
of equipment rentals.

Using Odoo *Maintenance*, it is possible to track individual pieces of equipment, along with
information about their maintenance requirements. To add a new piece of equipment, navigate to the
:guilabel:`Maintenance` module, select :menuselection:`Equipments --> Machines & Tools --> Create`,
and configure the equipment as follows:

- :guilabel:`Equipment Name`: the product name of the piece of equipment
- :guilabel:`Equipment Category`: the category that the equipment belongs to; for example,
  computers, machinery, tools, etc.; new categories can be created by navigating to
  :menuselection:`Configuration --> Equipment Categories` and clicking :guilabel:`Create`
- :guilabel:`Company`: the company that owns the equipment; again, this can be the company that uses
  the Odoo database, or a third-party company
- :guilabel:`Used By`: specify if the equipment is used by a specific employee, department, or both;
  select :guilabel:`Other` to specify both an employee and a department
- :guilabel:`Maintenance Team`: the team responsible for servicing the equipment; new teams can be
  created by navigating to :menuselection:`Configuration --> Maintenance Teams` and
  selecting :guilabel:`Create`; the members of each team can also be assigned from this page
- :guilabel:`Technician`: the person responsible for servicing the equipment; this can be used to
  assign a specific individual in the event that no maintenance team is assigned or when a specific
  member of the assigned team should always be responsible for the equipment; any person added to
  Odoo as a user can be assigned as a technician
- :guilabel:`Used in location`: the location where the equipment is used; this is a simple text
  field that can be used to specify locations that are not work centers, like an office, for
  example
- :guilabel:`Work Center`: if the equipment is used at a work center, specify it here; equipment can
  also be assigned to a work center by navigating to :menuselection:`Maintenance --> Equipments -->
  Work Centers`, selecting a work center or creating a new one using the :guilabel:`Create` button,
  and clicking the :guilabel:`Equipment` tab on the work center form

.. image:: add_new_equipment/new-equipment-form.png
   :align: center
   :alt: An example of a fully configured new equipment form.

Include additional product information
--------------------------------------

The :guilabel:`Product Information` tab at the bottom of the page can be used to provide further
details about the piece of equipment:

- :guilabel:`Vendor`: the vendor that the equipment was purchased from
- :guilabel:`Vendor Reference`: the reference code assigned to the vendor
- :guilabel:`Model`: the specific model of the piece of equipment
- :guilabel:`Serial Number`: the unique serial number of the equipment
- :guilabel:`Effective Date`: the date that the equipment became available for use; this is used to
  calculate the :abbr:`MTBF (Mean Time Between Failures)`
- :guilabel:`Cost`: the amount the equipment was purchased for
- :guilabel:`Warranty Expiration Date`: the date on which the equipment's warranty will expire

.. image:: add_new_equipment/new-equipment-product-information.png
   :align: center
   :alt: The product information tab for the new piece of equipment.

Add maintenance details
-----------------------

The :guilabel:`Maintenance` tab at the bottom of the page provides information about the failure
frequency of the piece of equipment:

- :guilabel:`Expected Mean Time Between Failure`: the average number of days the equipment is
  expected to operate between failures. This number can be configured manually.
- :guilabel:`Mean Time Between Failure`: the average number of days the equipment operates between
  failures. This number is calculated automatically based on previous failures, and cannot
  be configured manually.
- :guilabel:`Estimated Next Failure`: the estimated date the equipment may experience its next
  failure.
  This date is calculated automatically based on the data in the :guilabel:`Mean Time Between
  Failure` and :guilabel:`Latest Failure` fields, and cannot be configured manually.
- :guilabel:`Latest Failure`: the most recent date on which the equipment failed. This date is based
  on the creation date of the equipment's most recent maintenance request, and cannot be configured
  manually.
- :guilabel:`Mean Time To Repair`: the average number of days needed to repair the equipment. This
  number is calculated automatically based on the duration of previous maintenance requests, and
  cannot be configured manually.

.. image:: add_new_equipment/new-equipment-maintenance.png
   :align: center
   :alt: The maintenance tab for a piece of equipment.

.. tip::
   To see any open maintenance requests for a piece of equipment, go to the page for the equipment,
   and click the :guilabel:`Maintenance` smart button at the top of the page.
