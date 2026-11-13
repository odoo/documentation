===========
Light users
===========

In Odoo 20, employees who do not need full access to business applications can be assigned a *Light*
role. *Light* users have access to a predefined set of features for employee self-service and
day-to-day operations, but not to the core business applications used to manage the company.

This allows businesses to provide employees with the tools they need while reserving full user
licenses for employees who manage business processes.

Light user access
=================

A light user can access a predefined set of features in Odoo, depending on their role and the way
they interact with the database.

.. important::
   The available features are predefined. Administrators **cannot** customize light user permissions
   or grant light users access to additional applications.

Light users can access the following features:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Application
     - Available features
   * - Appraisals
     - Review and update their own goals and appraisals.
   * - Attendances
     - Check in and check out, and review and update their attendance records.
   * - Barcode
     - Scan products and packages, process transfers, and count inventory.
   * - Discuss
     - Start meetings, use individual and channel chats, and manage their own activities.
   * - Documents
     - Review, update, upload, download, share, and search shared documents.
   * - Employees
     - Browse the employee directory, update their private information, and review equipment
       assigned to them.
   * - Expenses
     - Review, upload, update, and analyze their own expenses.
   * - Field Service
     - Review and complete assigned visits, complete worksheets, and collect customer sign-offs.
   * - Knowledge
     - Read, search, and favorite shared articles.
   * - Lunch
     - Order lunch and review meal history and available meal balances.
   * - Planning
     - Review published shifts and update their own shifts.
   * - Point of Sale
     - Access configured Point of Sale sessions as an employee.
   * - Referrals
     - Review job opportunities, rewards, and referral points, and generate referral links.
   * - Shop Floor
     - Process work orders at configured work centers.
   * - Time Off
     - Request and review time off.

.. important::
   Some features are accessed through the Odoo interface's top bar rather than through a dedicated
   application menu. These include *Attendance* check-in and check-out, *Discuss*, and activity
   features.

Assigning a light user role
===========================

To assign a light user role to an employee with a database user account:

#. Open the Settings app and navigate to :menuselection:`Users & Companies --> Users`.
#. Open a user record, or click :guilabel:`New` to create a new one.
#. Set the :guilabel:`Role` field to *Light*.

The user is then restricted to the predefined light user permissions.

Converting an existing regular user
-----------------------------------

To convert an existing regular user to a light user, open their user record and change the
:guilabel:`Role` field to *Light*.

.. important::
   Granting access beyond the predefined light user permissions automatically upgrades the account
   to the regular user role. This also affects the licensing requirements for the database.

Access through shared devices
=============================

Light users can also interact with certain Odoo features through devices or interfaces configured
for employee use.

For example, employees can:

- Check in and check out using the Attendance Kiosk.
- Access configured Point of Sale sessions using their employee credentials.
- Process work orders through configured Shop Floor work centers.

These interactions do not necessarily require employees to log in to Odoo using individual database
credentials.

.. note::
   Multiple employees can use Shop Floor from a shared device without individual login accounts.
   Once someone has opened Odoo on the device, other employees can access Shop Floor through that
   session.

Access limitations
==================

Light users have restricted access to Odoo, and cannot manage the company's core business processes.

They do **not** have access to applications and functionality such as:

- *Sales*: Create and manage quotations and sales orders.
- *Purchase*: Create and manage requests for quotation and purchase orders.
- *Accounting*: Manage invoices, payments, and financial records.
- *Project*: Create and manage projects and project tasks.
- *Administration*: Configure Odoo, manage application settings, or customize the database.

Light users also cannot be granted additional application permissions. Their access is determined by
the predefined light role. If an employee needs to perform tasks outside the available light user
features, they must be assigned a regular user role.

.. note::
  Some operations also require a regular user account, even when the employee does not need direct
  access to the associated application. For example, only regular users can be assigned as
  salespeople on sales orders and invoices or assigned *Helpdesk* tickets. Employees and light users
  cannot be assigned to these records.

Light users vs regular users
============================

Odoo provides different user roles to accommodate employees with different access requirements.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * -
     - Light User
     - Regular User
   * - Intended use
     - Employee self-service and front-line operations
     - Managing business processes and operations
   * - Application access
     - Predefined, limited features
     - Applications included in the subscription
   * - Business operations
     - Cannot manage core business processes
     - Can manage business processes, subject to assigned access rights
   * - Permissions
     - Fixed permissions
     - Configurable access rights
   * - License cost
     - Reduced license cost
     - Standard user license cost

.. example::
   For example, a warehouse employee who scans products and processes inventory transfers may only
   need a light user role. A warehouse manager who manages purchasing, inventory operations, and
   reporting requires a regular user role.

Common use cases
================

Light users are intended for employees who need to interact with Odoo as part of their daily work,
but not manage the company's business processes.

Typical examples include:

- Warehouse employees who scan products, process transfers, and perform inventory counts using the
  *Barcode* app.
- Processing work orders using *Shop Floor*.
- Field service technicians reviewing assigned visits, completing worksheets, and collecting
  customer signatures.
- Cashiers accessing *Point of Sale* sessions.
- Hourly employees checking in to the *Attendance* app, reviewing schedules, and requesting time
  off.
- Employees submitting expenses, reviewing payslips, and participating in appraisals.

.. tip::
   A regular user role is more appropriate for employees who create or approve quotations, purchase
   orders, invoices, or projects, or who configure Odoo and manage other employees' records.

Employee records and licensing
==============================

An employee record and a user account are two different things in Odoo. An employee can have an
associated user account that allows them to log in to the database, or they can have an employee
record without individual login access.

Licensing is determined by the employee's status, associated user account, and activity in Odoo:

- *Regular User account*: An employee linked to an active regular user account is counted as a
  regular user.
- *Light User account*: An active user account assigned the light role is counted as a light user.
- *Employee record without a user account*: An employee record without an associated user account
  can count as a light user when the employee participates in :ref:`HR activities
  <users/light_users/hr-activities>`.
- *Employee record without HR activity*: An employee record without an associated user account or
  :ref:`HR activity <users/light_users/hr-activities>` does not count as a light user.

.. _users/light_users/hr-activities:

Applicable HR activities
------------------------

HR activities that can cause an employee without a user account to count as a light user include:

- Payslips
- Attendances
- Timesheets
- Appraisals
- Expenses
- Planning shifts and schedules
- Time Off
- Adding money to the Lunch app

.. important::
   To avoid counting employees who do not need Odoo access as light users, do **not** assign them a
   login account or involve them in HR activities in Odoo. Consequently, the number of employees in
   a database can affect the number of licenses required, even when not every employee has
   individual login credentials.

Licensing and pricing
---------------------

Light users have a reduced license cost compared to regular users. This allows businesses to provide
access to Odoo for a larger portion of their workforce without purchasing a full license for every
employee.

The total subscription cost depends on the number of light and regular users and the selected
subscription plan.

To determine the number and type of licenses required, consider:

- The total number of active employee records.
- Which employees need individual login access.
- Which employees participate in HR activities in Odoo.
- Which employees require access to core business applications.
- Which employees only use the predefined Light User features.
- Whether any employees use Point of Sale exclusively.

For current pricing and licensing information, refer to the `Odoo pricing page
<https://www.odoo.com/pricing>`_ or contact an Odoo representative to review your organization's
requirements.

POS only users
--------------

Employees who exclusively use *Point of Sale* are excluded from the light user count and do not
require a light user license. To qualify for this exemption, the employee must:

- Have an employee profile without an associated user account.
- Be strictly limited to using the Point of Sale frontend, with no HR or operational records.
- Have a PIN code configured on the *Settings* tab of their employee record, under *Attendance/Point
  of Sale/Manufacturing*.
