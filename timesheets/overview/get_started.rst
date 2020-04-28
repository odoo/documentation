===========================
Get Started with Timesheets
===========================

When you use timesheets (from any device, anywhere) to track the time spent on tasks, you are able
to bill customers for the exact right amount they should be billed. In addition to it, add a
description of the work done to have a reliable tracking and history, and compare the forecasted
times, all in favor of becoming a more proactive company.

Choose an encoding unit
=======================

| Under :menuselection:`Timesheets --> Configuration --> Settings`, choose the unit of measure to
  register your timesheet. This provides tools and widgets to help you encoding.
| *Minimal duration* is the minimum time at which a task is recorded.
| *Rounding up* allows you to time up or down to the nearest minutes or hours. For example: if the
  interval is set to 30min, a 14min entry will show up in reports as 0min, and a 29min entry
  as 30min.

.. image:: media/get1.png
   :align: center
   :alt: Set the time unit used to record your timesheets in Odoo Timesheets application

.. note::
   Reportings are expressed in hours, the default value.

Create a task from a SO & timesheet on it
=========================================

| Under the *General Settings* of your product, categorize it as a service.
| On the *Sales* tab, (section *Sales Invoicing Policy*) choose if you want to invoice customers
  based on the quantity previous ordered (the one sent on a quotation, for instance), on the time
  recorded (while the service was being executed), or by manually adding the time spent when
  creating the invoice.
| Chose the right *Service Tracking* for you and, from now on, when a sales order is confirmed,
  Odoo automatically creates a task/project (if that was the chosen option) and allows you to
  timesheet on it.

.. image:: media/get2.png
   :align: center
   :alt: Choose the invoicing options under a product form in Odoo Timesheets application

Choose an Invoicing Policy
==========================

Go to :menuselection:`Timesheets --> Configuration --> Settings` and choose if you want the recorded
time to be directly invoiced, or if it should be approved first.

.. image:: media/get3.png
   :align: center
   :alt: Choose how to invoice the recorded times in Odoo Timesheets application

Send reminders
==============

| Choose to have an automatic email being sent to all users and managers who have not recorded their
  times.
| Go to :menuselection:`Timesheets --> Configuration --> Settings` and enable the *Employee
  Reminder* and *Manager Reminder* features.

.. image:: media/get4.png
   :align: center
   :alt: Activate timesheet reminders for managers and employees in Odoo Timesheets application

.. tip::
   Odoo Timesheets continues to run even if there is no internet connection. The data syncs once you
   are back online.
