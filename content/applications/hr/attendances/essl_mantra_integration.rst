============================
eSSL and Mantra integrations
============================

The eSSL and Mantra integrations allow Odoo to receive attendance *punches*, or records, from their
respective attendance servers. These are converted into attendance records, eliminating the need to
record employee check-ins and check-outs manually in the **Attendances** app.

Supported devices
=================

.. important::
   The integrations connect to the attendance server, **not** directly to the biometric terminals.
   The server acts as middleware between the connected biometric devices and Odoo.

The following devices are supported:

- eSSL biometric devices that communicate through *eSSL eBioServer*.
- Mantra biometric devices that communicate through *Minop Cloud*.

eSSL
----

The eSSL integration is built for *eSSL eBioServer*. The eBioServer acts as middleware between the
connected eSSL biometric devices and Odoo.

Attendance punches are sent from the biometric device to the eBioServer. The eBioServer then sends
the attendance data to Odoo using the configured webhook.

Mantra
------

The Mantra integration connects to *Minop Cloud*. Minop Cloud acts as middleware between the
connected Mantra biometric devices and Odoo.

Attendance punches are sent from the biometric device to Minop Cloud. Minop Cloud then sends the
attendance data to Odoo using the configured webhook.

Installation
============

To configure the database, a module must be installed first. Open the **Apps** application, remove
the default filter in the search bar, and search for `eSSL` or `Mantra`. Install the module
corresponding to the attendance server in use:

- :guilabel:`Biometric Attendances - eSSL`: for eSSL devices connected to eBioServer.
- :guilabel:`Biometric Attendances - Mantra`: for Mantra devices connected to Minop Cloud.

Both modules can be installed in the same database if the company uses both types of devices.

Configuration
=============

To configure the integration, navigate to :menuselection:`Attendances app --> Configuration -->
Settings`. Scroll to the :guilabel:`eSSL Webhook` or :guilabel:`Mantra Webhook` section, depending
on the installed module.

The :guilabel:`Webhook URL` field displays the URL provided by Odoo. Click the :icon:`fa-clipboard`
:guilabel:`(Copy)` icon at the end of the field to copy it, then configure it in the corresponding
attendance server:

- **eSSL**: configure the URL in the eBioServer.
- **Mantra**: configure the URL in Minop Cloud.

This allows the attendance server to send attendance punches to Odoo.

Each company has its own webhook URL. In a multi-company database, make sure the correct company is
selected in the company switcher before copying the URL, so punches are recorded for the right
company.

.. warning::
   The webhook URL contains a secret token that identifies the company. Anyone with this URL can
   send attendance data to the database. Only share it with the people responsible for configuring
   the attendance server.

To revoke the current URL, for example if it has been shared by mistake, click :guilabel:`Generate
New Token`. A new webhook URL is generated, and the previous one stops working immediately. Update
the URL in the attendance server afterward, otherwise its punches are rejected.

.. note::
   Punch times sent without a time zone are interpreted using the company's time zone. Make sure the
   time zone is set correctly on the company, as well as on the attendance server.

Employee configuration
----------------------

Odoo matches each punch to an employee using the employee's ID on the attendance server. This ID
must be entered in the :guilabel:`Badge ID` field, in the *Settings* tab of the :ref:`employee form
<employees/new_employee/hr-attn-pos>`.

- For eSSL, enter the employee's *Employee Code* from the eBioServer.
- For Mantra, enter the employee's *Punch ID* from Minop Cloud.

.. important::
   If the :guilabel:`Badge ID` does not exactly match the ID on the attendance server, the punch is
   received but **cannot** be converted into an attendance record.

Receive transactions
====================

When an employee punches on a connected biometric device, the corresponding attendance server sends
the transaction to Odoo through the configured webhook. Each transaction is stored as a *biometric
event*, and is processed automatically into an **Attendances** app record as soon as it is received.

To view the received transactions, navigate to :menuselection:`Attendances app --> Management -->
Biometric Events`. By default, transactions are grouped by punch date, then by employee. Each
transaction contains the following information:

- :guilabel:`Punch Datetime`: The time of the punch, displayed in the user's time zone.
- :guilabel:`Employee`: The employee matched using the :guilabel:`Badge ID` configured on the
  employee form.
- :guilabel:`Employee Code`: The employee ID sent by the attendance server.
- :guilabel:`Provider`: The integration that sent the punch, either `eSSL` or `Mantra`.
- :guilabel:`State`: Indicates whether the transaction has been processed. It is either `Processed`
  or `Error`.
- :guilabel:`Attendance`: The attendance record created from the transaction.
- :guilabel:`Device ID`: The device that generated the punch. This column is hidden by default, and
  can be enabled from the :icon:`oi-settings-adjust` :guilabel:`(optional columns)` menu.

Use the :guilabel:`Processed`, :guilabel:`Errors`, :guilabel:`Essl`, and :guilabel:`Mantra` filters
in the search bar to quickly find specific transactions.

.. note::
   If the attendance server sends the same punch more than once, only one transaction is recorded,
   so duplicate attendance records are not created.

Check-ins and check-outs
------------------------

Biometric devices do not specify whether a punch is a check-in or a check-out. Odoo determines this
automatically for each employee, processing their punches in chronological order:

- A *check-in* creates a new attendance record, unless the employee already has an open attendance
  record (a check-in without a check-out).
- A *check-out* closes the employee's open attendance record.

Attendance records created this way display `Biometric` as their check-in and check-out mode. The
:guilabel:`Biometric Check-In Event` and :guilabel:`Biometric Check-Out Event` fields on the
attendance record link to the transactions that created them.

.. note::
   An employee **cannot** have two open attendance records at the same time.

.. example::
   An employee punches on the device at 9:00 AM, 1:00 PM, 2:00 PM, and 6:00 PM. Odoo creates two
   attendance records: one from 9:00 AM to 1:00 PM, and another from 2:00 PM to 6:00 PM.

Errors
------

A transaction is set to the `Error` state when it cannot be processed. The reason appears in a red
banner at the top of the transaction form. The most common causes are:

- :guilabel:`Employee not found`: No employee has a :guilabel:`Badge ID` matching the ID sent by the
  attendance server.
- The punch time is earlier than the employee's last processed punch, or earlier than the check-in
  of their open attendance record. This usually happens when punches reach Odoo late, for example
  after a device was offline.

To fix a transaction in error, first correct the cause, for example by setting the right
:guilabel:`Badge ID` on the employee form, or by correcting the employee's attendance records. Then,
select the transaction in the list view and click :guilabel:`Process`. Several transactions can be
selected and processed at once.

.. note::
   Only transactions in the `Error` state can be processed again. Transactions that are already
   processed are ignored.

.. important::
   A processed transaction **cannot** be deleted. Deleting the attendance record linked to a
   transaction also deletes the related transactions.

.. seealso::
   - :doc:`biotime_integration`
   - :doc:`check_in_check_out`
