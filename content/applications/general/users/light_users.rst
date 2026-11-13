===========
Light users
===========

In Odoo 20, employees who do not need full access to business applications can be assigned a *Light*
role. *Light* users have access to a predefined set of features for employee self-service and
day-to-day operations, without access to the core business applications used to manage a company.

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
the predefined light role.

If an employee needs to perform tasks outside the available light user features, they must be
assigned a regular user role.

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

