===================
Schedule appraisals
===================

Odoo's **Appraisals** app helps managers run recurring performance reviews. Each review can include
a self-assessment and can follow any schedule the company sets.

Regular appraisals turn day-to-day work into clear goals and measurable skill targets. They also
supply the objective evidence HR needs for raises or promotions, and keep individual performance
aligned with company KPIs.

Reviews can be :ref:`scheduled automatically <appraisals/auto>` through an :ref:`appraisal plan
<appraisals/appraisal-plan>` that triggers evaluations at set intervals, :ref:`launched for a group
of employees <appraisals/campaign>` with an appraisal campaign, or :ref:`created manually
<appraisals/manual>` whenever needed, such as before a promotion or department transfer.

An appraisal goes through three statuses:

- :guilabel:`Draft`: The appraisal is created, but not yet started. The employee and appraisers
  cannot record feedback yet.
- :guilabel:`Ongoing`: The appraisal is confirmed. The employee and appraisers fill out their
  feedback, and the appraisal card displays a green :guilabel:`Confirmed` ribbon.
- :guilabel:`Done`: The appraisal is completed and locked. The appraisal card displays a purple
  :guilabel:`Done` ribbon.

.. _appraisals/auto:

Automatic scheduling
====================

To ensure no appraisal is missed, enable automatic scheduling by going to :menuselection:`Appraisals
app --> Configuration --> Settings`.

The *Appraisals Plans* section determines the frequency with which appraisals are scheduled. These
settings are company-specific.

.. image:: schedule_appraisals/appraisal-settings.png
   :alt: The Appraisals Plans section of the settings, with the default timeline and 360 Feedback
         enabled.

.. _appraisals/appraisal-plan:

Appraisals plans
----------------

By default, the first appraisal is planned six months after the employee's contract start date,
the second one six months after that, and then one appraisal every twelve months.

To modify this schedule, change the number of months in the fields of the :guilabel:`Appraisals
Plans` setting (:guilabel:`(#) months after recruitment`, :guilabel:`then after (#) months`,
:guilabel:`then every (#) months.`), then click :guilabel:`Save`.

.. important::
   Changing the :guilabel:`Appraisals Plans` field updates every employee record whose
   :guilabel:`Next Appraisal Date` is empty.

.. _appraisals/automation:

Appraisals automation
---------------------

Enable the :guilabel:`Appraisals Automation` option to have Odoo automatically create *and* confirm
appraisals when an employee's :guilabel:`Next Appraisal Date` is reached.

When the :guilabel:`Appraisals Automation` option is enabled, Odoo uses the configured
:guilabel:`Appraisals Plans` to compute the :guilabel:`Next Appraisal Date` displayed in the
:ref:`Work tab <employees/work-info-tab>` of the employee form, for every employee who does not have
an ongoing appraisal.

When enabled, Odoo automatically creates an appraisal using the employee's manager as the appraiser,
its :guilabel:`Appraisal Date` is set eight days after the :guilabel:`Next Appraisal Date`, and the
manager receives a scheduled activity to fill out the appraisal.

This option is enabled by default. If this option is disabled, appraisals are not created
automatically, and must be :ref:`launched in a campaign <appraisals/campaign>` or :ref:`created
manually <appraisals/manual>`.

.. _appraisals/campaign:

Launch an appraisal campaign
============================

An *appraisal campaign* creates appraisals for several employees at once, such as for a yearly
review cycle. To launch a campaign, open the **Appraisals** app, click the :guilabel:`Launch
Campaign` button on the main *Appraisals* dashboard, and an *Appraisal Campaign* pop-up window
loads.

Fill out the following fields in the pop-up window. All fields are required.

- :guilabel:`Employees`: Select the employees to evaluate. Leave this field empty to create an
  appraisal for **all** employees of the company. Managers who are not appraisal officers can only
  select the employees they manage.
- :guilabel:`Manager`: Select who conducts the appraisals. This field is only visible to Appraisals
  administrators: for other users, the appraisals are conducted by the employee's manager.

  - :guilabel:`Employee's Manager`: Each appraisal is conducted by the employee's direct manager set
    on their employee form.
  - :guilabel:`Other`: All appraisals are conducted by the employees selected in the
    :guilabel:`Others` field that appears beneath.

- :guilabel:`Appraisal Template`: Select the :doc:`appraisal template <appraisal_templates>` to use
  for all appraisals of the campaign.
- :guilabel:`Appraisal Date`: The date by which the appraisals should be completed. By default, this
  is one month from the current date.

If some employees cannot be included, a warning appears at the bottom of the pop-up window, for
example when an employee does not have a manager, or already has an appraisal on the same date with
the same appraisers. In the latter case, the existing appraisal is used instead of creating a new
one.

Click :guilabel:`Schedule` to create the appraisals. The page reloads to display only the appraisals
created for the campaign, in a default Kanban view. All appraisals have a status of
:guilabel:`Ongoing` so the employees and appraisers can start filling them out immediately.

.. image:: schedule_appraisals/campaign.png
   :alt: The Appraisal Campaign pop-up window, configured for three employees with the Yearly
         meeting template.

.. _appraisals/manual:

Manually schedule an appraisal
==============================

Managers can schedule an appraisal at any time, outside the regular cycle.

For example, if an employee is promoted, or transfers to a new role or a new department, an
appraisal is scheduled to assess performance in the current role.

To create a new appraisal, open the :menuselection:`Appraisals` app, and click the :guilabel:`New`
button in the corner. This opens a blank appraisal form.

First, select the employee being evaluated in the :guilabel:`Employee to review` field using the
drop-down menu. Once an employee is selected, their manager populates the :guilabel:`Appraisers`
field. The :guilabel:`Job` and :guilabel:`Department` fields (and the :guilabel:`Company` field, in
a multi-company database) are populated according to the information on the employee record.

.. note::
   If another appraisal with the same employee and appraisers is already ongoing, a warning appears
   at the top of the form.

The :guilabel:`Appraisal Date` is when the appraisal is scheduled to be completed. The default
deadline is one month from the current date, but can be adjusted using the calendar selector.

Last, select the desired :guilabel:`Template`. The first available :doc:`appraisal template
<appraisal_templates>` populates this field by default. Using the drop-down menu, select a different
template if desired. This field is **only** visible while the appraisal's status is
:guilabel:`Draft`.

.. tip::
   Only universal templates (templates not restricted to a specific department) or templates
   specific to the employee's department are available.

.. image:: schedule_appraisals/new-appraisal.png
   :alt: A new appraisal form with the top half filled out.

Once the information in the top half of the appraisal form is complete, click the
:guilabel:`Confirm` button in the corner. The status changes to :guilabel:`Ongoing`, and both the
employee and appraisers can start to fill out the appraisal.

Two additional fields appear once the appraisal is confirmed: a :guilabel:`Final Rating` and a
:guilabel:`Target Job` field. The :guilabel:`Target Job` allows the manager to select a job position
the employee may be working towards. When a job position is selected in this field, any required
skills for the job appear in the *Skills* tab. This aids in seeing where the employee stands in
regards to the job requirements :doc:`during the appraisal <new_appraisals>`. The :guilabel:`Final
Rating` field is populated when the appraisal is :ref:`completed <appraisals/rate>`.

Once the appraisal is marked as done with a :guilabel:`Final Rating`, a :guilabel:`Next Appraisal
Date` field appears, populated with the date of the next appraisal according to the :ref:`appraisal
plan <appraisals/appraisal-plan>`. If no plan applies, the field displays :guilabel:`On demand`.

.. _appraisals/bulk-actions:

Manage several appraisals at once
=================================

Several appraisals can be processed at the same time from the list view. Navigate to
:menuselection:`Appraisals app --> Appraisals`, click the :icon:`reorder` :guilabel:`(List)` icon,
and click the checkbox next to each appraisal to process. Then, click the :icon:`settings_f`
:guilabel:`Actions` button, and select one of the following options:

- :guilabel:`Send By Email`: Opens a *Send By Email* pop-up window to send a message to the selected
  employees.
- :guilabel:`Confirm`: Confirms the selected appraisals, and their status changes from
  :guilabel:`Draft` to :guilabel:`Ongoing`.
- :guilabel:`Mark as Done`: Completes the selected appraisals, including :guilabel:`Draft` ones. If
  an appraisal is selected with a status of :guilabel:`Done`, an error message appears.
- :guilabel:`Reset`: Sets the selected appraisals back to :guilabel:`Draft`, excluding any with a
  status of :guilabel:`Done`.

With :guilabel:`Confirm` and :guilabel:`Reset`, appraisals that are not in the expected status are
skipped, and a warning notification is displayed.

.. seealso::
   - :doc:`new_appraisals`
   - :doc:`appraisal_templates`
