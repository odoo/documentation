:show-content:

==========
Appraisals
==========

Configuration
=============

The :guilabel:`Configuration` menu in the *Appraisals* application is where the settings can be
configured, feedback templates can be edited, evaluation scales can be managed, data for 360
feedback can be stored, and goal tags can be viewed/created.

Settings
========

To access the *Settings* menu, navigate to :menuselection:`Appraisals application --> Configuration
--> Settings`.

Feedback templates
------------------

Feedback templates are form outlines used during an employee appraisal. Any edits made to a template
are, ultimately, reflected in the appraisals sent to employees.

There are two default templates pre-configured in Odoo *Appraisals*: one for employee feedback, and
one for manager feedback. Each contains several sections, along with questions, and brief
explanations for how to respond to the questions.

The :guilabel:`Employee Feedback Template` has the following sections: :guilabel:`My work`,
:guilabel:`My future`, and :guilabel:`My feelings`.

The :guilabel:`Manager Feedback Template` has the following sections: :guilabel:`Feedback`,
:guilabel:`Evaluation`, and :guilabel:`Improvements`.

Any desired changes to the default feedback templates can be made by making changes directly in each
template.

360 feedback
============

The :guilabel:`360 Feedback` option can be enabled to allow managers to request feedback from other
employees using a different survey form, at any time, independent of the appraisal schedule.

Typically, managers ask for feedback from other people who work with an employee they manage. This
includes the employee's various managers, peers, and direct reports.

To view the :guilabel:`360 Feedback` survey, click the :guilabel:`→ Internal link` icon at the end
of the :guilabel:`Default Template` field. The :guilabel:`360 Feedback` survey loads, and any
desired changes to the survey can be made.

For more information on how to edit a survey, refer to the :doc:`../marketing/surveys/create`
document.

.. important::
   The :guilabel:`360 Feedback` form is a pre-configured survey within the *Surveys* application. In
   order to use the :guilabel:`360 Feedback` option, including the ability to edit the survey, the
   *Surveys* application **must** be installed.

Evaluation scale
================

On each employee appraisal form, final rating options appear by default. To view and edit these
options, navigate to :menuselection:`Appraisals application --> Configuration --> Evaluation Scale`.
This presents the ratings in a list view.

The pre-configured ratings are :guilabel:`Needs Improvement`, :guilabel:`Meets Expectations`,
:guilabel:`Exceeds Expectations`, and :guilabel:`Strongly Exceeds Expectations`. To add another
rating, click the :guilabel:`New` button.

When the :guilabel:`New` button is clicked on the :guilabel:`Evaluation Scale` page, a blank line
appears at the bottom of the list. Enter the name of the rating in the field.

To rearrange the order of the ratings, click the :guilabel:`(six small gray boxes)` icon to the left
of a rating, and drag the rating to the desired position on the list.

.. image:: appraisals/evaluation-scale.png
   :align: center
   :alt: The evaluation scale, with the new button and click and drag icons highlighted.

.. seealso::
   - :doc:`appraisals/schedule_appraisals`
   - :doc:`appraisals/new_appraisals`
   - :doc:`appraisals/appraisal_templates`
   - :doc:`appraisals/360`
   - :doc:`appraisals/goals`
   - :doc:`appraisals/appraisal_analysis`
   - :doc:`appraisals/skills_evolution`

.. toctree::
   :titlesonly:

   appraisals/schedule_appraisals
   appraisals/new_appraisals
   appraisals/appraisal_templates
   appraisals/360
   appraisals/goals
   appraisals/appraisal_analysis
   appraisals/skills_evolution
