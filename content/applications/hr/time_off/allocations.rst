===========
Allocations
===========

Once :ref:`time off types <time_off/time-off-types>` and :ref:`accrual plans
<time_off/accrual-plans>` have been configured, the next step is to *allocate*, or give, time off to
employees.

The *Allocations* page of the **Time Off** app is **only** visible to users who have either *Time
Off Officer* or *Administrator* access rights for the **Time Off** application. For more information
on access rights, refer to the :doc:`access rights <../../general/users/access_rights/>`
documentation.

Allocate time off
=================

To create a new allocation, navigate to :menuselection:`Time Off app --> Management -->
Allocations`.

This presents a list of all current allocations, including their respective statuses.

Click :guilabel:`New` to allocate time off, and a blank allocation form appears.

After entering a name for the allocation on the first blank field of the form, enter the following
information:

- :guilabel:`Time Off Type`: Using the drop-down menu, select the type of time off that is being
  allocated to the employees.
- :guilabel:`Allocation Type`: Select either :guilabel:`Regular Allocation` or :guilabel:`Accrual
  Allocation`. If the allocation is **not** based on an :ref:`accrual plan
  <time_off/accrual-plans>`, select :guilabel:`Regular Allocation`.
- :guilabel:`Accrual Plan`: If :guilabel:`Accrual Allocation` is selected for the
  :guilabel:`Allocation Type`, the :guilabel:`Accrual Plan` field appears. Using the drop-down menu,
  select the accrual plan with which the allocation is associated. An accrual plan **must** be
  selected for an :guilabel:`Accrual Allocation`.
- :guilabel:`Validity Period/Start Date`: If :guilabel:`Regular Allocation` is selected for the
  :guilabel:`Allocation Type`, this field is labeled :guilabel:`Validity Period`. If
  :guilabel:`Accrual Allocation` is selected for the :guilabel:`Allocation Type`, this field is
  labeled :guilabel:`Start Date`.

  The current date populates the first date field, by default. To select another date, click on the
  pre-populated date to reveal a popover calendar window. Navigate to the desired start date for the
  allocation, and click on the date to select it.

  If the allocation expires, select the expiration date in the next date field. If the time off does
  *not* expire, leave the second date field blank. :guilabel:`No Limit` appears in the field if no
  date is selected.

  If :guilabel:`Accrual Allocation` is selected for the :guilabel:`Allocation Type`, this second
  field is labeled :guilabel:`Run until`.

  .. important::
     If the :guilabel:`Start Date` entered is in the middle of a period of time, such as the middle
     of the month, Odoo applies the allocation to the beginning or end of the period, depending on
     the *Accrued Gain Time* entered on the :ref:`accrual plan <time_off/accrual-plans>` (either *At
     the start of the accrual period*, or *At the end of the accrual period*) instead of the
     specific date entered.

     For example, an allocation is created, and references an accrual plan that grants time *At the
     start of the accrual period*, monthly, on the first of the month.

     On the allocation form, the :guilabel:`Allocation Type` is set to :guilabel:`Accrual
     Allocation`, and the :guilabel:`Start Date` entered is `06/16/24`.

     Odoo's **Time Off** app retroactively applies the allocation to the beginning of the time
     period entered in the :guilabel:`Start Date`.

     Therefore, this allocation accrues time from `06/01/24`, rather than `06/16/24`.

     Additionally, if on the accrual form, the allocation references an accrual plan that grants
     time *`At the end of the accrual period*, the allocation accrues time from `7/01/24` rather
     than `6/18/24`.

- :guilabel:`Allocation`: Enter the amount of time that is being allocated to the employees. This
  field displays the time in either :guilabel:`Hours` or :guilabel:`Days`, depending on how the
  selected :ref:`Time Off Type <time_off/time-off-types>` is configured.
- :guilabel:`Mode`: Using the drop-down menu, select how the allocation is assigned. This selection
  determines who receives the time off allocation. The options are :guilabel:`By Employee`,
  :guilabel:`By Company`, :guilabel:`By Department`, or :guilabel:`By Employee Tag`.

  Depending on what is selected for the :guilabel:`Mode`, the field beneath :guilabel:`Mode` is
  labeled either: :guilabel:`Employees`, :guilabel:`Company`, :guilabel:`Department`, or
  :guilabel:`Employee Tag`.

  Using the drop-down menu, indicate the specific employees, company, department, or employee tags
  receiving this time off.

  Multiple selections can be made for either :guilabel:`Employees` or :guilabel:`Employee Tag`.

  Only one selection can be made for the :guilabel:`Company` or :guilabel:`Department`.
- :guilabel:`Add a reason...`: If any description or note is necessary to explain the time off
  allocation, enter it in this field at the bottom of the form.

.. image:: allocations/new-allocation.png
   :align: center
   :alt: A new allocation form with all the fields filled out for the annual two week vacation
         granted to all employees.

.. _time_off/request-allocation:

Request allocation
==================

If an employee has used all their time off, or will run out of time off, they can request an
allocation for additional time. Allocations can be requested in one of two ways, either from the
:ref:`Dashboard <time_off/dashboard>` or the :ref:`My Allocations <time_off/my-allocations>` view.

To create a new allocation request, click either the :guilabel:`New Allocation Request` button on
the main **Time Off** dashboard, or the :guilabel:`New` button in the :guilabel:`My Allocations`
list view. Both buttons open a new allocation request form.

.. note::
   Both options open a new allocation request form, but when requested from the
   :guilabel:`Dashboard`, the form appears in a pop-up window, and the *Validity Period* field does
   **not** appear. When requested from the :guilabel:`My Allocations` list view, the screen
   navigates to a new allocation request page, instead of presenting a pop-up window.

Enter the following information on the new allocation request form:

- :guilabel:`Time Off Type`: Select the type of time off being requested for the allocation from the
  drop-down menu. After a selection is made, the title updates with the time off type.
- :guilabel:`Validity Period`: By default, the current date populates this field, and it is **not**
  able to be modified. This field **only** appears when requesting an allocatoin from the
  :guilabel:`My Allocations` view (:menuselection:`Time Off --> My Time --> My Allocations`).
- :guilabel:`Allocation`: Enter the amount of time being requested in this field. The format is
  presented in either :guilabel:`Days` or :guilabel:`Hours`, depending on how the :guilabel:`Time
  Off Type` is configured. Once this field is populated, the name of the allocation request is
  updated to include the amount of time being requested.
- :guilabel:`Add a reason...`: Enter a description for the allocation request in this field. This
  should include any details that approvers may need to approve the request.

If the request was created from the :guilabel:`Dashboard`, click the :guilabel:`Save & Close` button
on the :guilabel:`New Allocation` pop-up window to save the information and submit the request.

If the form was completed from the :guilabel:`My Allocations` list view, the information is
automatically saved as it is entered. However, the form can be saved manually at any time by
clicking the :icon:`fa-cloud-upload` :guilabel:`(cloud upload)` icon.

.. image:: allocations/allocation-request.png
   :align: center
   :alt: An allocation request form filled out for an employee requesting an additional week of
         sick time.
