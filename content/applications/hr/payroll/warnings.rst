================
Payroll warnings
================

*Payroll warnings* flag missing or inconsistent information, such as an employee without a bank
account or a contract about to expire, before it causes errors in payslips. Resolving these issues
ahead of each pay run keeps payroll processing on schedule and avoids corrections after payment.

Warnings appear as cards on the **Payroll** app dashboard, and as alerts directly on the affected
records, such as employees or payslips. Each warning can also send email reminders and prevent
payslips from being validated until the issue is fixed.

Default warnings are provided by the **Payroll** app and the installed :doc:`payroll localizations
<payroll_localizations>`. They can be adapted, and new warnings can be created to match the
company's internal processes.

.. _payroll/warnings/configuration:

Configuration
=============

To view or configure payroll warnings, navigate to :menuselection:`Payroll app --> Configuration
--> Warnings`. Click :guilabel:`New` to create a warning, or click an existing warning to edit it.

.. note::
   Only users with the *Administrator* access rights for the **Payroll** app can access this menu.

Enter a name for the warning in the title field; this name is the title of the warning card. Then,
fill in the following fields:

- :guilabel:`Description`: a short explanation displayed on the warning card.
- :guilabel:`Checked Model`: the type of records the warning checks, such as employees, payslips,
  or time off requests.
- :guilabel:`Dependencies`: the fields that trigger a new check of the warning when they are
  modified on a record.
- :guilabel:`Blocking`: enable this option to prevent payslips displaying this warning from being
  validated.
- :guilabel:`Snoozed Until`: the date until which the warning is :ref:`hidden from the dashboard
  <payroll/warnings/hide>`.
- :guilabel:`Country`: the country the warning applies to. Leave this field empty to apply the
  warning to all countries.
- :guilabel:`Display On`: tick :guilabel:`Dashboard` to display the warning on the **Payroll** app
  dashboard.
- :guilabel:`Shown On`: the types of records on which the warning is displayed as an alert. Leave
  this field empty to display the warning on the dashboard only.
- :guilabel:`Visible To`: the level of payroll access rights the warning is intended for.
- :guilabel:`Color Class`: the color of the warning card. Cards are sorted by color on the
  dashboard.

.. note::
   A warning must be displayed on the dashboard, on at least one type of record, or on both.

.. _payroll/warnings/computation:

Computation
-----------

The :guilabel:`Computation` tab defines which records have the issue.

Use the :guilabel:`Warning Domain` field to set the conditions the records must meet to be
flagged. Click :guilabel:`New Rule` to add a condition, and edit the field, operator, and value of
each rule as needed.

.. example::
   To flag employees without a bank account, set the :guilabel:`Checked Model` to `Employee`, and
   add a rule where the :guilabel:`Bank Accounts` field is not set.

When the :guilabel:`Checked Model` is linked to contracts, such as employees, enable
:guilabel:`Running Contracts` to only flag records with a running contract.

For more complex conditions, the :guilabel:`Python Code` field filters the records further. The
records matching the domain are available in the code through the `warning_records` variable. The
available variables and the possible results are listed next to the field.

The code can also adapt the warning card to the flagged records. The values it sets take
precedence over the fields of the form:

- `warning_title` replaces the title of the warning;
- `warning_description` replaces the :guilabel:`Description`;
- `warning_button` replaces the :guilabel:`Button Name`;
- `warning_deadline` replaces the deadline computed from the :ref:`Communication
  <payroll/warnings/communication>` tab;
- `warning_count` replaces the number of flagged records displayed on the card;
- `warning_action` and `additional_context` change the :ref:`action of the button
  <payroll/warnings/action>`.

.. important::
   Writing Python code requires technical knowledge. Incorrect code can prevent the warning from
   being displayed.

.. _payroll/warnings/action:

Action
------

The :guilabel:`Action` tab configures the button displayed on the warning card.

Enter the label of the button in the :guilabel:`Button Name` field, for example, `Open Employees`.

With :ref:`developer mode <developer-mode>` enabled, the :guilabel:`Action` and
:guilabel:`Action Configuration` fields define what the button opens. The action of the button is
built in the following order, each step overriding the previous ones:

#. By default, the button opens the flagged records: the record itself if there is only one, or
   the list of the records otherwise.
#. If an :guilabel:`Action` is selected, it replaces the default action.
#. The :guilabel:`Action Configuration`, a Python dictionary, overrides the values of the action
   from the previous step. The `context` key is added to the context of the action, while the
   other keys, such as `domain`, replace the corresponding values. The ids of the flagged records
   are available through the `warning_record_ids` variable.
#. If the :guilabel:`Python Code` of the :ref:`Computation <payroll/warnings/computation>` tab
   sets `warning_action`, this action replaces all the previous steps: the :guilabel:`Action` and
   :guilabel:`Action Configuration` fields are ignored.
#. Finally, the `additional_context` set by the :guilabel:`Python Code` is added to the context
   of the action, whichever action is used.

When the resulting action lists records of the :guilabel:`Checked Model`, it is restricted to the
flagged records, unless a `domain` is given by the :guilabel:`Action Configuration` or by
`warning_action`.

.. example::
   To open the flagged employees in a specific list view, leave the :guilabel:`Action` field empty
   and set the :guilabel:`Action Configuration` to
   `{'context': {'list_view_ref': 'module.view_xml_id'}}`, replacing `module.view_xml_id` with the
   identifier of the view.

.. _payroll/warnings/communication:

Communication
-------------

The :guilabel:`Communication` tab sets the deadline of the warning and its email reminders.

The :guilabel:`Deadline` is the number of days after a reference date by which the issue should
be resolved. Select the reference date in the drop-down menu:

- :guilabel:`Today`: the current date.
- :guilabel:`Next Payslip`: the closing date of the next pay run.
- :guilabel:`Contract Start` or :guilabel:`Contract End`: the start or end date of the employee's
  contract.
- :guilabel:`End of the Month`, :guilabel:`End of the Quarter`, or :guilabel:`End of the Year`:
  the last day of the current month, quarter, or year.
- :guilabel:`Payroll Start Date`: the start date of the company's payroll.

.. tip::
   Enter a negative number of days to set the deadline *before* the reference date, for example,
   `-30` days after :guilabel:`Contract End` to be warned a month before a contract expires.

When the reference date is not :guilabel:`Today`, email reminders can be configured:

- :guilabel:`Email Message`: the content of the email. Leave this field empty to send no email.
- :guilabel:`Email Alert`: the number of days after the deadline when the email is sent if the
  issue is still not resolved.
- :guilabel:`Email To`: the recipients of the email.

  - :guilabel:`Assistant`: all payroll users.
  - :guilabel:`Officer`: payroll officers and administrators.
  - :guilabel:`Admin`: payroll administrators only.
  - :guilabel:`Employee` or :guilabel:`Employee's Manager`: the employees concerned by the issue,
    or their managers. These options are only available when the :guilabel:`Checked Model` is
    `Employee` and a :guilabel:`Warning Domain` is set.

.. _payroll/warnings/resolve:

Resolve warnings
================

To review all payroll warnings, navigate to :menuselection:`Payroll app --> Dashboard`. Each card
displays the number of records with the issue, the warning title, and its description.

Click the button on a card to open the flagged records. Depending on the warning, the fields to
fix are highlighted, along with the tabs that contain them. A field is no longer highlighted once
it is modified.

Warnings configured to be :guilabel:`Shown On` records also appear as alerts directly on the
affected records, for example, at the top of an employee form or on a payslip.

.. important::
   Payslips displaying a :guilabel:`Blocking` warning cannot be validated until the issue is
   resolved.

.. _payroll/warnings/hide:

Hide a warning
--------------

To temporarily hide a warning from the dashboard, hover over its card, click the :guilabel:`×`
(:guilabel:`Hide warning`) button next to it, then click :guilabel:`Hide`. The warning is snoozed
for 25 days, and its :guilabel:`Snoozed Until` date is updated accordingly.

To hide a warning permanently, tick :guilabel:`Never show it again` before clicking
:guilabel:`Hide`. The warning is archived, but remains in the :ref:`warnings list
<payroll/warnings/configuration>`, where it can be unarchived.
