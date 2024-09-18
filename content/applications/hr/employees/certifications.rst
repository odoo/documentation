==============
Certifications
==============

When jobs require specific knowledge, it is necessary to track employee certifications to ensure the
necessary knowledge and certifications are in place.

Certifications include classes, tests, professional seminars, and more. There are no restrictions in
terms of what type of certification records can be added in Odoo.

.. important::
   To access the *Employee Certifications* report, the **Surveys** app **must** be installed.

View certifications
===================

To view a full list of all employee certifications, navigate to :menuselection:`Employees app -->
Reporting --> Certifications`.

All certifications appear in a list view, grouped by employee. Each certification entry displays the
following:

- :guilabel:`Employee`: the employee's name, along with their avatar image.
- :guilabel:`Name`: the title of the certification.
- :guilabel:`Validity Start`: when the employee received the certification.
- :guilabel:`Validity End`: when the certification expires.
- :guilabel:`Certification`: the corresponding course in the **Surveys** app that was completed by
  the employee, if applicable.

The entries are also color-coded. Current certifications that are still valid appear in black,
expired certifications appear in red, and certifications that are going to expire within the next
90 days appear in orange.

.. image:: certifications/certifications.png
   :align: center
   :alt: The list of employee certifications.

.. important::
   **Only** certification records with the *Display Type* set to *Certification* on their
   :ref:`certification form <employees/certifications-form>` appear on the :guilabel:`Employee
   Certifications` report. All other certifications appear in the resume section of the
   :doc:`employee form <new_employee>`.

View certifications by expiration status
----------------------------------------

When managing a large number of employees with a variety of certifications, it can be difficult to
determine which employees need to keep necessary certifications current in the default list view. In
this scenario, it is beneficial to view the certifications by expiration status.

To do so, navigate to :menuselection:`Employees app --> Reporting --> Certifications`. Next, click
the :icon:`fa-caret-down` :guilabel:`(down arrow)` in the search bar, then click :guilabel:`Add
Custom Group`, revealing a drop-down menu. Click :guilabel:`Expiration Status`, then click away from
the drop-down menu to close it.

After doing so, all the certifications are organized by status, starting with :guilabel:`Expired`
certifications, then certifications that are :guilabel:`Expiring` soon (within the next 90 days),
and lastly, certifications that are still :guilabel:`Valid`.

This view provides an easy way to see which employees have certifications that are going to expire
soon, to determine which employees need to take action to keep their certifications current.

.. image:: certifications/status.png
   :align: center
   :alt: The list of employee certifications, grouped by status.

.. _employees/certifications-form:

Log a certification
===================

To log a certification for an employee, navigate to :menuselection:`Employees app --> Reporting -->
Certifications`. Click :guilabel:`New`, and a blank certification form loads. Enter the following
information on the form:

- :guilabel:`Title`: Enter a short description for the certification in this field.
- :guilabel:`Employee`: Using the drop-down menu, select the employee who received the
  certification.
- :guilabel:`Type`: Using the drop-down menu, select the type of certification received. This field
  determines where on the employee's resume the certification appears. To create a new
  :guilabel:`Type`, enter the type in the field, then click :guilabel:`Create "type"`.

  The default options are:

  - :guilabel:`Experience`: Select this option to have the certification appear in the *Experience*
    section of the *Resume* tab on the :doc:`employee form <new_employee>`.
  - :guilabel:`Education`: Select this option to have the certification appear in the *Education*
    section of the *Resume* tab on the :doc:`employee form <new_employee>`.
  - :guilabel:`Internal Certification`: Select this option to have the certification appear in the
    *Internal Certification* section of the *Resume* tab on the :doc:`employee form <new_employee>`.
  - :guilabel:`Completed Internal Training`: Select this option to have the certification appear in
    *Completed Internal Training* section of the *Resume* tab on the :doc:`employee form
    <new_employee>`.

- :guilabel:`Display Type`: Select the visibility of the certification in this field. The default
  options are:

  - :guilabel:`Classic`: Select this option to have the certification appear in the *Resume* section
    of the employee form, and **not** appear on the *Employee Certifications* report.
  - :guilabel:`Course`: Select this option to have the certification appear in the *Resume* section
    of the employee form, and **not** appear on the *Employee Certifications* report. Once this
    option is selected, a :guilabel:`Course` field appears beneath the :guilabel:`Display Type`
    field. Using the drop-down menu, select the course the employee took. The course is created in
    the **Surveys** app.
  - :guilabel:`Certification`: Select this option to have the certification appear in the *Resume*
    section of the employee form, **and** appear on the *Employee Certifications* report. Once this
    is selected, a :guilabel:`Certification` field appears beneath the :guilabel:`Display
    Type` field. Using the drop-down menu, select the certification the employee took.

- :guilabel:`Description`: Enter a description for the certification in this field.
- :guilabel:`Duration`: Click into the first field, and a calendar pop-over window appears. Click on
  the start and end dates for the certification validity period. When the correct dates are
  selected, click :icon:`fa-check` :guilabel:`Apply`, and both fields are populated.

.. image:: certifications/osha.png
   :align: center
   :alt: A certification form filled out for an OSHA certificate for construction.
