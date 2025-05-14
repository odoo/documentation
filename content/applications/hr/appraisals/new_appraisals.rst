==================
Conduct appraisals
==================

This guide explains the end-to-end appraisal workflow in Odoo, from creation to final rating,
showing how managers and employees collaborate at each stage.

- :ref:`Employee self-assessment <appraisals/employee-feedback>`: The employee completes the
  Employee's Feedback template and updates their skills. Responses remain hidden until the employee
  sets the form to *Visible to Manager*.
- :ref:`Manager feedback <appraisals/manager-feedback>`: While the employee works on their section,
  the manager reviews goals, gathers peer input if needed, and fills out the *Manager's Feedback*
  template. Feedback can remain hidden until the appraisal meeting.
- :ref:`Appraisal review <appraisals/review>`: Manager and employee meet to discuss both feedback
  sections, validate skill changes, and agree on next steps. The meeting can be scheduled directly
  from the appraisal or the calendar.
- :ref:`Completion and rating <appraisals/complete>`: After the discussion, the manager assigns a
  final rating, adds any private notes, and marks the appraisal Done. The record then locks unless
  it is reopened for further edits.

Throughout the process, optional actions, such as requesting peer feedback or logging private
manager notes, enhance the appraisal's accuracy and relevance.

.. _appraisals/employee-feedback:

Employee self-assessment
========================

Once an appraisal is confirmed, the employee is required to fill out the self-assessment.

.. note::
   Only confirmed appraisals can be worked on. If an appraisal is *not* confirmed, the fields on the
   appraisal form cannot be edited, and feedback cannot be recorded.

After the employee receives a notification via email that an appraisal is confirmed and scheduled,
they are requested to fill out their half of the default appraisal template, and update any skills.

Employee's can click on the link in the confirmation email to navigate to the appraisal, or they
can open their appraisal in the **Appraisals** app. To do this, open the **Appraisals** app, then
click on the appraisal card.

The :guilabel:`Employee's Feedback` half of the template includes the following sections:
:guilabel:`My work`, :guilabel:`My future`, and :guilabel:`My feelings`. Each of these sections
consists of several questions for the employee to answer, allowing the employee to perform a
self-assessment, and provide feedback on how they feel about the company and their role.

Employee skills
---------------

After completing the :ref:`Employee's Feedback <appraisals/employee-feedback>` section in the
:guilabel:`Appraisal` tab, the employee next updates their skills in the :guilabel:`Skills` tab.

Any skills that were present on the employee's record when the appraisal was confirmed, appear in
this tab. If a :guilabel:`Skill Level` has changed since the last appraisal, the level must be
updated.

.. note::
   The :guilabel:`Skills` tab does not appear on the appraisal until the appraisal is confirmed.

Click on the :guilabel:`Skill Level` for the skill that has changed, revealing a drop-down of all
available levels. Click on the new level for the skill. Once selected, the :guilabel:`Progress`
field updates accordingly. Next, click into the :guilabel:`Justification` field for the skill, and
enter any relevant details explaining the change. This field is not necessary, but may aid
management when reviewing the employee's skills.

Complete the self-assessment
----------------------------

The employee feedback remains hidden from management while the employee is performing their
self-assessment. Once the employee has completed their half of the appraisal, and updated any
skills, they tick the gray :guilabel:`Not Visible to Manager` toggle. This changes the toggle text
to :guilabel:`Visible to Manager`, the color changes to green, and their responses are then visible
to management.

Additionally, a green dot appears on the appraisal card on the **Appraisals** app dashboard,
indicating the employee has completed their assessment, and marked their half of the appraisal as
done.

.. _appraisals/manager-feedback:

Manager feedback
================

While the employee is completing their :guilabel:`Employee's Feedback` section, the manager fills
out the :guilabel:`Manager's Feedback` section.

Before the manager fills out their portion of the appraisal, managers typically review the
employee's goals and skills, and ask for :ref:`additional feedback <appraisals/ask-feedback>` from
the employee's coworkers, to better understand all the achievements and challenges for the employee.

Once the manager has all the information they need to evaluate the employee, they fill out the
:guilabel:`Manager's Feedback` section of the appraisal form. The manager's half has the following
sections: :guilabel:`Feedback`, :guilabel:`Evaluation`, and :guilabel:`Improvements`.

The manager's appraisal focuses on the employee's accomplishments, as well as identifying areas of
improvements, with actionable steps to help the employee achieve their goals in both the long and
short term.

When the feedback section is completed, the manager can tick the :guilabel:`Not Visible to Employee`
toggle. This changes the toggle text to :guilabel:`Visible to Employee`, the color changes to green,
and their responses are then visible to the employee.

.. note::
   Some managers prefer to keep their feedback hidden from the employee until they :ref:`meet with
   the employee <appraisals/review>` to discuss the appraisal.

.. _appraisals/ask-feedback:

Ask for feedback
----------------

As part of the appraisal process, the manager can :ref:`request feedback for an employee
<appraisals/360-request-feedback>`  from anyone in the company about an employee. In Odoo, this is
referred to as *360 Feedback*.

Feedback is requested from coworkers and anyone else who works with the employee. This is to get a
more well-rounded view of the employee, and aid in the manager's overall assessment.

.. important::
   To request feedback, the appraisal **must** be confirmed. Once confirmed, an :guilabel:`Ask
   Feedback` button appears in the upper-left corner of the form.

.. _appraisals/review:

Appraisal review
================

Once both portions of an appraisal are completed (the :ref:`employee <appraisals/employee-feedback>`
and :ref:`manager <appraisals/manager-feedback>` feedback sections), it is time for the employee and
manager to :ref:`meet and discuss the appraisal <appraisals/schedule>`.

During the appraisal meeting, the manager reviews both the :ref:`Employee's Feedback
<appraisals/employee-feedback>` section as well as their own :ref:`Manager feedback
<appraisals/manager-feedback>`.

Additionally, the employee's :ref:`skills <appraisals/skills>` and :doc:`goals <goals>`
are reviewed at this time, and updated as needed.

.. _appraisals/schedule:

Schedule appraisal review
-------------------------

A meeting can be scheduled in one of two ways: either from the **Appraisals** app dashboard, or from
an individual appraisal card.

To schedule an appraisal from the dashboard of the **Appraisals** app, first navigate to
:menuselection:`Appraisals app --> Appraisals`.

Click the activity icon beneath the appraisal date on the desired appraisal card, and an activity
pop-up window appears. Click :icon:`fa-plus` :guilabel:`Schedule an activity`, and set the
:guilabel:`Activity Type`` to :guilabel:`Meeting`. For more information on scheduling activities,
refer to the :ref:`activities documentation <activities/all>`.

Doing so opens a :guilabel:`New Event` pop-up form. From this pop-up form, make any desired
modifications, such as designating a :guilabel:`Start` time.

The employee populates the :guilabel:`Attendees` section by default. Add anyone else who should be
in the meeting, if necessary.

To make the meeting a video call, instead of an in-person meeting, click :icon:`fa-plus`
:guilabel:`Odoo meeting`, and a :guilabel:`Videocall URL` link appears in the field.

Once all the desired changes are complete, click :guilabel:`Save & Close`.

The meeting now appears on the calendar, and the invited parties are informed, via email.

.. image:: new_appraisals/meeting.png
   :alt: The meeting form with all information entered for Ronnie Hart's annual appraisal.

The other way to schedule a meeting is from the individual appraisal form. To do this, navigate to
the :menuselection:`Appraisal app` dashboard, then click on an appraisal card.

Next, click on the :icon:`fa-calendar` :guilabel:`Meeting` smart button, and the calendar loads.
Follow the same directions above to create the meeting.

For more detailed information on how to schedule activities, refer to the :doc:`activities
<../../essentials/activities>` documentation.

.. note::
   If no meetings are scheduled, the :guilabel:`Meeting` smart button reads :guilabel:`No Meeting`.

.. _appraisals/skills:

Review employee skills
----------------------

Part of an appraisal is evaluating an employee's skills, and tracking their progress over time. The
:guilabel:`Skills` tab of the appraisal form auto-populates with the skills from the :ref:`employee
form <employees/skills>`, once an appraisal is confirmed.

Each skill is grouped with like skills, and the :guilabel:`Skill Level`, :guilabel:`Progress`, and
:guilabel:`Justification` are displayed for each skill.

:ref:`Update any skills, or add any new skills <employees/skills>` to the :guilabel:`Skills` tab.

If a skill level has increased, enter a reason for the improved rating in the
:guilabel:`Justification` field, such as `took a fluency language test` or `received Javascript
certification`.

After an appraisal is completed, and the skills have been updated, the next time an appraisal is
confirmed, the updated skills populate the :guilabel:`Skills` tab.

.. note::
   The :guilabel:`Skills` tab *can* be modified **after** the employee and their manager have met
   and discussed the employee's appraisal.

   This is a common situation as the manager may not have all the necessary information to assess
   and update the employee's skills before meeting.

.. _appraisals/complete:

Complete an appraisal
=====================

After the appraisal has been filled out by both the employee and the manager, and both parties have
met and discussed the employee's performance, the manager then :ref:`logs any notes
<appraisals/notes>`, and :ref:`assigns a rating <appraisals/rate>`.

When completed, click the :guilabel:`Mark as Done` button in the upper-left corner of the appraisal
form.

Once the appraisal is marked as *Done*, the status changes from :guilabel:`Confirmed` to
:guilabel:`Done`, and the :guilabel:`Mark as Done` button changes to a :guilabel:`Reopen` button.

.. tip::
   Modifications are **not** possible once the appraisal is marked as done.

   To make any changes to an appraisal with a status of :guilabel:`Done`, click the
   :guilabel:`Reopen` button, then, click :guilabel:`Confirm`, and make any modifications needed.
   Once all modifications are complete, click the :guilabel:`Mark as Done` button again.

.. _appraisals/notes:

Add a private note
------------------

Managers can log notes on an appraisal that are **only** visible to other managers. Enter any notes
in the :guilabel:`Private Note` tab. This can be done anytime during the appraisal process.

The employee being evaluated does **not** have access to this tab, and the tab does **not** appear
on their appraisal.

The tab is optional and does not affect the final rating.

.. _appraisals/rate:

Provide a final rating
----------------------

After both the manager and employee have met to discuss the employee's performance, the appraisal
must be given a :guilabel:`Final Rating`.

Using the drop-down menu, select the rating for the employee. The default options are:
:guilabel:`Needs improvement`, :guilabel:`Meets expectations`, :guilabel:`Exceeds expectations`,
:guilabel:`Strongly Exceeds Expectations`, and :guilabel:`Good`.

To add a new rating, navigate to :menuselection:`Appraisals app --> Configuration --> Evaluation
Scale`. The default ratings are presented in a list view. To add a new rating, click the
:guilabel:`New` button in the upper-left corner, and a blank line appears at the bottom of the list.
Enter the new rating, then press the enter key, or click away from the line. Add as many new ratings
as needed.

Click :menuselection:`Appraisals` in the top menu to return to the :guilabel:`Appraisals` dashboard,
click on the appraisal, then select the desired :guilabel:`Final Rating`.

.. seealso::
   - :doc:`../appraisals/goals`
   - :doc:`../appraisals/appraisal_analysis`
   - :doc:`../appraisals/skills_evolution`
