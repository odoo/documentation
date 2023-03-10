=================
Survey essentials
=================

Companies often use surveys to collect valuable information from their customers and employees,
which in turn, allows them to make more informed business decisions.

In Odoo, surveys are used to collect customer feedback, evaluate the success of a recent event,
measure the satisfaction of customers (or employees), and gain more insight into shifting market
sentiments.

Getting started
===============

To begin, open the :guilabel:`Surveys` application and click :guilabel:`Create`. Odoo then
redirects the page to a blank survey template form.

On the survey form, add a :guilabel:`Survey Title` and then add a cover image to the survey by
hovering over the photo icon and clicking on the :guilabel:`Edit (pencil)` icon. When the file
explorer window opens, choose an image from the local files.

Below the :guilabel:`Survey Title` are various tabs in which the survey questions and format can be
created and customized. These tabs are labeled as follows:

- :guilabel:`Questions`: the list of questions to be asked in the survey
- :guilabel:`Description`: contextual information to aid in understanding the survey
- :guilabel:`Options`: choices for survey respondents to answer the questions

.. image:: create/questions-description-options.png
   :align: center
   :alt: Various tabs that can be found on the survey template page.

Questions tab
=============

Add questions and sections to the survey in the :guilabel:`Questions` tab. A section divides the
survey into parts in order to visually group similar questions together. To make a section, click
:guilabel:`Add a section` and type in a section name. Then, add questions or drag and drop
questions into the divided sections.

Clicking :guilabel:`Add a question` opens the :guilabel:`Create Sections and Questions` pop-up to
create and customize the survey question.

.. image:: create/survey-question-pop-up.png
   :align: center
   :alt: The survey question pop-up window.

Create questions
----------------

In the :guilabel:`Create Sections and Questions` pop-up, type the question in the
:guilabel:`Question` field. Then, choose the :guilabel:`Question Type`. A preview of how the
question type looks is shown in the preview window.

Choose from the following :guilabel:`Question Types`:

- :guilabel:`Multiple Lines Text Box`
- :guilabel:`Single Line Text Box`
- :guilabel:`Numerical Value`
- :guilabel:`Date`
- :guilabel:`Datetime`
- :guilabel:`Multiple choice: only one answer`
- :guilabel:`Multiple choice: multiple answers allowed`
- :guilabel:`Matrix`

.. note::
   Different features appear in the :guilabel:`Answers` and :guilabel:`Options` tabs, depending on
   the :guilabel:`Question Type` chosen. However, the :guilabel:`Description` tab always remains
   the same, regardless of what question is chosen.

Create sections and questions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once a :guilabel:`Question Type` has been selected, there are three possible tabs where information
can be customized for the question. These include the :guilabel:`Answers` (if applicable),
:guilabel:`Description`, and :guilabel:`Options` tabs.

Each tab offers a variety of different features depending on what :guilabel:`Question Type` was
chosen.

For example, in the :guilabel:`Options` tab, the following options may appear:

- :guilabel:`Mandatory Answer`: the question must be answered.
- :guilabel:`Matrix Type`: for matrix-type questions, select if one choice or multiple choices can
  be selected per row.
- :guilabel:`Number of columns`: select how many columns are displayed.
- :guilabel:`Images on answers`: allow images on the answer options.
- :guilabel:`Conditional Display`: determine if the question is displayed based on the
  participant's answer to a previous question.
- :guilabel:`Show Comments Field`: allow the participant to type a comment in a text box.
- :guilabel:`Question Time Limit`: for live session surveys, set a time limit for the question.

Conditional Display
*******************

:guilabel:`Conditional Display` means the question is only displayed if the specified conditional
answer has been selected in a previous question.

When the box next to :guilabel:`Conditional Display` is selected, the :guilabel:`Triggering
Question` field appears. Select a question from the survey.

Then, a :guilabel:`Triggering Answer` field appears. Here, select which answer will trigger this
:guilabel:`Conditional Display` question.

Options tab
===========

Back on the main survey template form, under the :guilabel:`Options` tab, there are different
sections of settings that can be modified.

The sections include:

- :guilabel:`Questions`: focuses on the overall presentation of the survey
- :guilabel:`Scoring`: decides how the survey is scored
- :guilabel:`Candidates`: manages access to the survey
- :guilabel:`Live Session`: enables the survey into a real-time group activity.

Questions
---------

First, select the :guilabel:`Layout` of the survey. The following options can be chosen:

- :guilabel:`One page with all the questions`
- :guilabel:`One page per section`
- :guilabel:`One page per question`

If either the :guilabel:`One page per section` or :guilabel:`One page per question` options are
chosen, then the :guilabel:`Back Button` option appears. If selected, the :guilabel:`Back Button`
option allows the participant to go back to a question during the survey.

Under the :guilabel:`Layout` options is the :guilabel:`Progression Mode` setting, which indicates
how the participant's progress during the survey is displayed. It is shown as either a
:guilabel:`Percentage` or a :guilabel:`Number`.

Next, there is an option available to add a :guilabel:`Survey Time Limit`. To implement this
option, simply check the box, and enter the amount of time (in minutes) participants have to
complete the survey.

After the :guilabel:`Survey Time Limit` option is a section labeled :guilabel:`Selection`. Here,
questions can be :guilabel:`Randomized per section`, in other words, the number of random questions
can be configured by section. This mode is ignored in a live session.

.. seealso::
   :doc:`time_random`

Scoring
-------

The following options are available when deciding how a :guilabel:`Scoring` method:

- :guilabel:`No scoring`
- :guilabel:`Scoring with answers at the end`
- :guilabel:`Scoring without answers at the end`

If either the :guilabel:`Scoring with answers at the end` or :guilabel:`Scoring without answers at
the end` options are selected, a :guilabel:`Success %` field appears. Set the percentage of correct
answers needed to pass the survey.

Next, there is the option to make the survey a certification. To do so, check the box next to the
option labeled :guilabel:`Is a Certification`, and two additional fields appear. Select a color
theme in the :guilabel:`Certification Template` field and then choose an :guilabel:`Email
Template`. When a participant passes the certification with the required score, an email from Odoo
will automatically be sent to that person using the selected email template.

If the :guilabel:`Give Badge` feature is enabled and the :guilabel:`Certification Badge` is set,
the survey participant also receives a badge upon passing the certification.

.. seealso::
   :doc:`scoring`

Candidates
----------

To determine access to the survey, the :guilabel:`Access Mode` has two options to choose between:
:guilabel:`Anyone with the link` and :guilabel:`Invited people only`.

Below the :guilabel:`Appraisal Managers Only` checkbox is the :guilabel:`Login Required` option to
require a login to participate in the survey. If this option is activated, an :guilabel:`Attempts
Limit` field also populates, in which the number of survey attempts is defined for the participant.

Live Session
------------

The :guilabel:`Live Session` section is dedicated to users who are conducting surveys in real-time,
wherein they directly engage with and collect answers from a live audience.

Customize the :guilabel:`Session Code` here; this code is needed for participants to access the
live session survey. Reward participants for quick answers by selecting the checkbox labeled
:guilabel:`Reward quick answers`. By checking it, attendees will get more points if they answer
quickly.

Description tab
===============

Back on the main survey template page is the :guilabel:`Description` tab, where a custom
description of the survey can be added. This is displayed beneath the title on the survey's
homepage, which is on the front end of the website made through the Odoo :guilabel:`Website` app.

Test and share the survey
=========================

Once the survey is created and saved, run a test to check for possible errors before finally
sending it out to the participants by clicking :guilabel:`Test` in the upper left corner of the
survey template page.

When activated, Odoo redirects the page to a test version of the survey on the front end of the
website. This page displays how the survey will look to participants. Proceed to run through the
survey, like a normal participant, to check for errors.

To return to the survey template form in the backend, simply click the :guilabel:`This is a test
survey. Edit Survey` link in the blue banner along the top of the page. Once Odoo redirects the
page to the survey template in the backend, make any further changes, as needed, before officially
sending the survey out to participants.

When the survey is ready to be shared with the audience, click the :guilabel:`Start Survey` button
in the upper-left corner of the survey template form. Then, click :guilabel:`Share`.

In the pop-up window, add the survey recipients in the :guilabel:`Recipients` field (for existing
contacts in the Odoo database) or the :guilabel:`Additional emails` field (for contacts that do not
want to be listed in the Odoo database). Finally, click :guilabel:`Send`.

As answers are received, check them by clicking the :guilabel:`Answers` smart button on the survey
template form, or the :guilabel:`See Results` button in the upper left corner. To end the survey,
click the :guilabel:`Close` button on the survey template form.
