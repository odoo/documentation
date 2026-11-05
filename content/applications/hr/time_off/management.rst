==========
Management
==========

.. _time_off/management/approvals:

Time off requests and allocation requests undergo an approval process before being granted. Requests
either need one or two approvals, if any, depending on how the specific type of time off is
configured. All these configurations can be found under the *Management* section of the **Time Off**
application.

.. note::
   The *Management* section in the **Time Off** application is **only** visible to users who can
   :ref:`approve allocation requests and time off requests <employees/work-info-tab>`.

.. _time_off/management/manage-time-off:

View time off requests
======================

To view time off requests waiting for approval, navigate to :menuselection:`Time Off app -->
Management --> Time Off`. Doing so reveals the *All Time Off* page. All time off requests appear in
a default Kanban view.

The only time off requests that are visible on this page belong to employees the user either has
:guilabel:`Time Off Officer` or :guilabel:`Administrator` access rights for in the **Time Off**
application.

The default filter on the :guilabel:`All Time Off` page is :icon:`fa-filter` :guilabel:`Waiting For
Me`. This filter only presents time off requests that need to be approved for current employees on
the user's team, with a status of either :guilabel:`To Approve` or :guilabel:`Second Approval`.

On the left side of the :guilabel:`All Time Off` page, there are grouping options that can be used
to narrow down the presented time off requests, located beneath the :icon:`fa-folder`
:guilabel:`Status` heading.

Since only time off requests that need to be approved are shown, the only :icon:`fa-folder`
:guilabel:`Status` options are :guilabel:`All`, :guilabel:`To Approve`, and :guilabel:`Second
Approval`.

If the :icon:`fa-filter` :guilabel:`Waiting For Me` filter is removed, all statuses appear.

.. note::
   If no requests fall under one of the status options, that status is **not** visible on the side
   menu.

.. image:: management/time-off-requests.png
   :alt: Time off requests with the filter, groupings, and status sections highlighted.

Approve or refuse time off requests
===================================

To approve or refuse a time off request, navigate to :menuselection:`Time Off app --> Management -->
Time Off`. At the end of each time off request Kanban card, two buttons appear: an
:guilabel:`Approve` or :guilabel:`Validate` button, depending on the status of the request, and a
:guilabel:`Refuse` button.

To approve a time off request, click the :guilabel:`Approve` button. To validate a time off request
that has already been approved and is waiting on a second approval, click the :guilabel:`Validate`
button. To refuse a request, click the :guilabel:`Refuse` button.

If more information is needed before approving a time off request, click anywhere on the Kanban card
(except for the :guilabel:`Approve`, :guilabel:`Validate`, or :guilabel:`Refuse` buttons). Doing so
loads the detailed time off request form.

Depending on the rights of the user, changes can be made. To modify the request, make any desired
changes to the form. All changes are automatically saved.

It is also possible to approve, validate, or refuse the request from this form. Click the
:guilabel:`Approve` button to approve, the :guilabel:`Validate` button to validate, or the
:guilabel:`Refuse` button to refuse the request.

:guilabel:`All Time Off` page. To view *all* requests, including approved and refused requests,
clear the default filters in the search bar.

.. image:: management/detailed-request.png
   :alt: The detailed time off request form for the employee George Davis.

.. _time_off/management/missing:

Add missing time off requests
=============================

If an employee forgets to request time off for days they did not work, a time off record must be
created retroactively. Missing time off records can be done from the :ref:`All Time Off dashboard
<time_off/management/all-time-off>` or from the :ref:`Overview <time_off/management/overview>`.

.. _time_off/management/all-time-off:

From the dashboard
------------------

To create missing time off requests from the *All Time Off* dashboard, navigate to
:menuselection:`Time Off app --> Management --> Time Off`, and click :guilabel:`New`.

On the time off request form, configure the following fields:

- :icon:`person_f` :guilabel:`Employee`: Select the employee missing the time off request.
- :icon:`label` :guilabel:`Time Type`: Select the :doc:`type of time off <time_off_types>` for the
  request.
- :icon:`schedule` :guilabel:`Dates`: Using the calendar selector, configure the start and end dates
  for the time off request. Depending on how the :doc:`Time Type <time_off_types>` is configured,
  one of the following additional fields may appear:

  - *Duration Selector*: Click the corresponding button to indicate if the request is for a
    :guilabel:`Full Day`, the :guilabel:`Morning`, or the :guilabel:`Afternoon`.
  - *Duration Drop-down*: Select when the time off starts for each selected date, either
    :guilabel:`Morning` or :guilabel:`Afternoon` .
  - *Hours*: Type in the number of hours being requested in the blank field beneath the dates.

- :icon:`edit_f` :guilabel:`Description`: Enter any information regarding the request. For example,
  `Family emergency` or `Could not request time off as they were sick.`

A summary of the user's time off for the year appears in a gray box, listing all the approved time
off and remaining balances.

Once the form is filled out, click either :guilabel:`Approve` or :guilabel:`Validate` to approve the
request. The available button is determined by the configured :guilabel:`Time Type`.

.. image:: management/missing-to-form.png
   :alt: A time off form for missing time off.

.. tip::
   If there is relevant documentation for the request, such as a doctor's note, click the
   :icon:`fa-paperclip` :guilabel:`(Attach files)` button in the chatter, navigate to the desired
   file, then click :guilabel:`Open` to attach the document.

.. _time_off/management/overview:

From the overview
-----------------

To create a missing time off request from the *Overview* dashboard, navigate to :menuselection:`Time
Off app --> Overview`, and the *All Time Off* dashboard loads.

Click on any cell to select that day, or click and drag multiple consecutive cells to select several
days at once. The selected cells turn light blue, and a :guilabel:`# selected` smart button appears
at the top, indicating how many entries are selected. Next, click the corresponding time type button
at the top of the screen, and the time off record is created.

.. image:: management/quick-add.png
   :alt: The Overview displaying five selected days to add missing time off recorss for.

.. tip::
   If the time off record must specify a duration or a description is needed, instead of clicking a
   time type button, click the :guilabel:`Apply` button and a time off request pop-up window loads.
   Select the duration next to the :icon:`schedule` :guilabel:`(Dates)` icon. Enter an optional
   description next to the :icon:`edit_f` :guilabel:`(Description)` icon. Once the pop-up window is
   configured, click :guilabel:`Add` to add the missing time off record.

   .. image:: management/to-pop-up.png
      :alt: The quick add pop-up window, specifying sick time off for the afternoon.

.. _time_off/management/manage-allocations:

View allocation requests
========================

To view allocation requests waiting for approval, navigate to :menuselection:`Time Off app -->
Management --> Allocations`. Doing so reveals the :guilabel:`Allocations` page. All allocation
requests appear in a default Kanban view.

The only allocation requests that are visible on this page belong to employees the user either has
:guilabel:`Time Off Officer` or :guilabel:`Administrator` access rights for in the **Time Off**
application.

The default filters on the :guilabel:`Allocations` page are :icon:`fa-filter` :guilabel:`First
Approval` and :icon:`fa-filter` :guilabel:`My Team`. These filters only present allocation requests
that need to be approved for current employees on the user's team, awaiting approval or validation.

On the left side of the :guilabel:`Allocations` page, there are various grouping options that can be
used to narrow down the presented allocation requests, located beneath the :icon:`fa-folder`
:guilabel:`Status` and :icon:`fa-users` :guilabel:`Department` headings.

Since only allocation requests that need to be approved are shown, the only :icon:`fa-folder`
:guilabel:`Status` options are :guilabel:`All`, :guilabel:`To Approve`, and :guilabel:`Approved`.

The various departments the user is a member of, and manages employees under, also appear on the
left side of the page, under :icon:`fa-users` :guilabel:`Departments`.

To only display allocation requests for specific departments, click on the :guilabel:`Department` on
the left-hand side of the page. Only requests within the selected department are then presented.

If the :icon:`fa-filter` :guilabel:`First Approval` and :icon:`fa-filter` :guilabel:`My Team`
filters are removed, all statuses appear.

.. note::
   If no requests fall under one of the status options or departments, that status or department is
   **not** visible on the left-side menu.

.. image:: management/allocations-requests.png
   :alt: Allocations dashboard showing unapproved allocation requests.

Approve or refuse allocation requests
=====================================

To approve or refuse an allocation request, navigate to :menuselection:`Time Off app --> Management
--> Allocations`. At the end of each Kanban card, two buttons appear: an :guilabel:`Approve` or
:guilabel:`Validate` button, depending on the status of the request, and a :guilabel:`Refuse`
button.

If more information is needed before approving an allocation request, click anywhere on the Kanban
card (except for the :guilabel:`Approve`, :guilabel:`Validate`, or :guilabel:`Refuse` buttons).
Doing so loads the detailed allocation request form.

Depending on the rights of the user, changes can be made. To modify the request, make any desired
changes to the form. All changes are automatically saved.

It is also possible to approve, validate, or refuse the request from this form. Click the
:guilabel:`Approve` button to approve, the :guilabel:`Validate` button to validate, or the
:guilabel:`Refuse` button to refuse the request.

Once a request has been approved, validated, or refused, the Kanban card disappears from the default
:guilabel:`Allocations` page. To view *all* requests, including approved and refused requests, clear
the default filters in the search bar.

.. image:: management/approve-allocation.png
   :alt: An allocation request in detail.
