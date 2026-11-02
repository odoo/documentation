:show-content:

===========
Recruitment
===========

Odoo keeps all job applicants organized with a preconfigured series of steps and stages that each
applicant goes through. Each stage has specific steps that should be performed. These range from
scheduling a phone call, conducting an interview, or sending a job offer, for example. This process
is referred to as the *applicant flow.*

When an applicant applies for a job position, an *applicant card* is automatically created in Odoo's
**Recruitment** app for that specific job position. As the applicant progresses through the
recruitment pipeline, the recruitment team moves their card from one stage to the next.

:ref:`Stages can be configured <recruitment/modify-stages>` so that an email is automatically sent
out using a set, preconfigured template as soon as an applicant's card enters a stage. These
automated emails are defined on each stage in the applicant flow.

The flow described in this document is Odoo's default configuration, but it can be customized to
suit any recruitment process.

.. note::
   Stages apply to all job positions and all companies unless they are :ref:`limited to specific
   job positions or to a company <recruitment/edit-stage>`. Changes to stages (e.g., additions,
   deletions) affect all positions unless explicitly scoped.

.. _recruitment/settings:

Settings
========

Before creating a job position in Odoo, configure the necessary settings for the **Recruitment**
app. To view and edit the settings, navigate to :menuselection:`Recruitment app --> Configuration
--> Settings`. After any changes are made, click the :guilabel:`Save` button in the corner.

Job posting
-----------

The *Job Posting* section of the settings page specifies where job positions can be posted. To post
job positions on the website, enable the :guilabel:`Online Posting` option.

To post job positions on :ref:`job boards <recruitment/post-job/boards>`, click the
:icon:`fa-arrow-right` :guilabel:`Activate Job Board` link in the :guilabel:`Job Board` setting.
This opens the list of available job board modules (such as *Job Board - Monster.com*), which can be
activated from there.

Process
-------

The *Process* section of the settings page specifies what the database can and cannot do during
recruitment.

Send interview survey
~~~~~~~~~~~~~~~~~~~~~

Odoo is capable of having a survey sent to an applicant to gather more information about them.
Surveys can be thought of as exams, or questionnaires, and can be customized in various ways to
provide the recruitment team with valuable insights into the applicant.

Enable the :guilabel:`Send Interview Survey` option to send surveys to applicants. Once enabled, an
:icon:`fa-arrow-right` :guilabel:`Interview Survey` internal link appears. Click the
:icon:`fa-arrow-right` :guilabel:`Interview Survey` link to navigate to a list of all created
surveys.

This list includes all surveys that were created in the database, not only surveys used in the
**Recruitment** app. If no surveys have been created, the surveys list displays a :guilabel:`No
Survey Found` message and presents options to create a survey from several preconfigured survey
templates.

.. seealso::
   :doc:`create and edit surveys <../marketing/surveys/create>`

.. note::
   Enabling the :guilabel:`Send Interview Survey` option will install the **Surveys** application
   once the settings are saved, if not already installed.

Salary package configurator
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting is available when the *Salary Configurator* module is installed. It defines the
validity duration of the salary package requests sent to new applicants. Enter the number of days
in the :guilabel:`days` field.

.. seealso::
   :doc:`recruitment/offer_job_positions`

In-app purchases
----------------

The *In-App Purchases* section of the settings page covers items that require credits to use, such
as :abbr:`SMS (Short Message Service)` text messages, and digitizing résumés.

.. seealso::
   :doc:`SMS pricing and FAQs <../marketing/sms_marketing/pricing_and_faq>`

Send SMS
~~~~~~~~

It is possible to send text messages to applicants directly through the **Recruitment** app. This
feature requires credits to use. Click the :icon:`fa-arrow-right` :guilabel:`Manage Service & Buy
Credits` internal link, and follow the steps to :doc:`purchase credits
<../marketing/sms_marketing/pricing_and_faq>`.

.. _recruitment/cv-ocr:

Résumé digitization (OCR)
~~~~~~~~~~~~~~~~~~~~~~~~~

When an application is submitted using any of the available methods, such as an online application
submission, emailing a resume to the job position alias, or creating an applicant record directly
from the database, it is possible to have Odoo extract the applicant's name, phone number, and email
address from the résumé and populate the applicant's form. To do so, enable the :guilabel:`Résumé
Digitization (OCR)` option.

When enabled, additional options appear. Click on the corresponding radio button to select one of
the following options:

- :guilabel:`Do not digitize`: This option turns off résumé digitization.
- :guilabel:`Digitize on demand only`: This option only digitizes résumés when requested. A
  :guilabel:`Digitize document` button appears on applicant cards. When clicked, the résumé is
  scanned, and the applicant's card is updated.
- :guilabel:`Digitize automatically`: This option automatically digitizes all résumés when they are
  submitted.

Beneath these options are two additional links. Click the :icon:`fa-arrow-right` :guilabel:`Manage
Service & Buy Credits` internal link to purchase credits for résumé digitization. Click the
:icon:`fa-arrow-right` :guilabel:`View My Services` internal link to view a list of all current
services, and their remaining credit balances.

For more information on document digitization and :abbr:`IAP's (in-app purchases)`, refer to the
:doc:`In-app purchase (IAP) <../essentials/in_app_purchase>` documentation.

.. note::
   The :guilabel:`Do not digitize` option may appear redundant but serves a distinct purpose.
   Disabling the :guilabel:`Résumé Digitization (OCR)` option uninstalls the module, while
   :guilabel:`Do not digitize` keeps the module installed but inactive—allowing the user to
   re-enable digitization later without reinstalling the module.

View job positions
==================

To access the Kanban view for a job position, navigate to the main :menuselection:`Recruitment` app
dashboard (:menuselection:`Recruitment app --> Applications --> By Job Positions`), which is the
default view when opening the application. All job positions appear on the main dashboard, with
their number of :guilabel:`new applications`, applications :guilabel:`in progress`, and employees
:guilabel:`to recruit`. Click a job position card to navigate to the Kanban view for all applicants
for that particular job position.

.. image:: recruitment/dashboard.png
   :alt: Main dashboard view of all job positions.

.. tip::
   To view all applications across job positions, navigate to :menuselection:`Recruitment app -->
   Applications --> All Applications`. To manage applicants that are kept for future job openings,
   navigate to :menuselection:`Recruitment app --> Applications --> By Talent Pools` (see
   :doc:`recruitment/talent_pools`).

Inside the job application, the Kanban stages appear, with all the applicants populated in their
respective columns, indicating what stage they are currently in. In Odoo, six default stages are
configured:

- :ref:`New <recruitment/recruitment_flow/new>`
- :ref:`Qualification <recruitment/recruitment_flow/qualification>`
- :ref:`First Interview <recruitment/recruitment_flow/first-interview>`
- :ref:`Second Interview <recruitment/recruitment_flow/second-interview>`
- :doc:`Contract Proposal <recruitment/offer_job_positions>`
- :ref:`Contract Signed <recruitment/offer_job_positions/contract-signed>`

The last column, :guilabel:`Contract Signed`, is folded by default. Folded columns appear as a thin
vertical column with the stage name, and the applicants in it are hidden from view. To expand the
folded stage and view the applicant cards for that column, click anywhere on the thin column that
says the stage name and the column expands, revealing the applicants.

.. image:: recruitment/stages.png
   :alt: The applications of a job position, with the Contract Signed stage folded.

Each stage has a color-coded bar beneath the stage name, providing status information for the
applicants in that specific stage. The statuses are:

- :guilabel:`In Progress` (gray): The applicant is still in progress at the current stage and is
  neither ready nor blocked from the next stage.
- :guilabel:`Ready` (green): The applicant is ready to move to the next stage.
- :guilabel:`Waiting` (yellow): The applicant is waiting for something before a decision can be
  made.
- :guilabel:`Blocked` (red): The applicant is blocked from moving to the next stage.

The status for each card is set manually. To set the status, click on the small circle in the corner
of the applicant card. A status pop-up window appears. Click on the desired status for the
applicant. When the applicant moves to another stage, the status is reset to :guilabel:`In
Progress`.

.. image:: recruitment/status-dots.png
   :alt: The applicant card statuses, and status bar.

.. _recruitment/customize-stages:

Customize stages
================

Stages can be modified, added, or deleted to match the particular hiring steps of a business.

New stage
---------

To create a new stage, hover to the right of the :guilabel:`Contract Signed` stage, revealing an
:guilabel:`Add Stage` option. Click :guilabel:`Add Stage` and a new column appears. Enter the title
for the new stage in the blank box at the top of the new stage, then click the :icon:`fa-check`
button. The new column appears, and another new stage appears. If no new stages are needed, click
the :icon:`fa-times` button in the new stage to close the new stage. Once the stage is created,
click and drag the stage to move it to the desired position in the workflow.

.. tip::
   All stages can also be managed from a list, by navigating to :menuselection:`Recruitment app -->
   Configuration --> Job Positions --> Stages`, in :ref:`developer mode <developer-mode>`.

.. _recruitment/modify-stages:

Modify stage
------------

To modify the settings of a stage, hover over the name of the stage, and a :icon:`fa-cog`
:guilabel:`(Settings)` icon appears next to it. Click the :icon:`fa-cog` :guilabel:`(Settings)` icon,
then click :icon:`fa-pencil` :guilabel:`Edit` from the resulting drop-down menu. An *Edit: (Stage)*
pop-up window appears. Make any desired modifications in the pop-up window, then click
:guilabel:`Save` when done.

.. image:: recruitment/gear.png
   :alt: The gear icon that appears when a column name is moused over, and the drop-down menu it
         displays when clicked.

The drop-down menu also contains the :guilabel:`Fold` option, to fold the column in the current
view, the :guilabel:`Automations` option, to :doc:`automate actions <../studio/automated_actions>`
when applicants enter the stage, and the :guilabel:`Delete` option.

.. _recruitment/edit-stage:

Edit stage
~~~~~~~~~~

The *Edit: (Stage)* form is where the stage's settings are configured. The only required field is
the stage name. Modify the stage as desired, then click :guilabel:`Save` to save the changes.

The fields to be populated or modified are:

- :guilabel:`Stage Name`: Type in a name for the stage.
- :guilabel:`Email Template`: Select an :ref:`email template <recruitment/templates>` to be used
  from the drop-down menu. If a template is selected, when the applicant card enters the stage, an
  email is automatically sent to the applicant using the selected template.
- :guilabel:`Hired Stage`: Check the box if this stage indicates that the applicant is hired. When
  an applicant's card enters this stage, the card displays a :guilabel:`Hired` banner in the upper
  right corner, and the date is used as the applicant's hire date.

  .. warning::
     Unchecking :guilabel:`Hired Stage` on a stage that contains hired applicants removes their hire
     date and hired status.

- :guilabel:`Rotting in`: Enter the number of days without any activity (record update, message, or
  completed activity) after which an applicant in this stage is considered stale. Stale applicants
  are highlighted on the Kanban view, with the number of days since the last activity. Enter `0` to
  disable this. This field is hidden for hired stages.
- :guilabel:`Show to Referrer`: Check the box if this stage should be seen in the **Referrals**
  application. When a referred applicant reaches this stage, the referrer earns the number of points
  entered in the :guilabel:`Award (#) points` field. The **Referrals** app must be installed to use
  this option.
- :guilabel:`Job Positions`: If the stage only applies to specific job positions, select the job
  positions from the drop-down menu. Multiple job positions can be selected. Leave the field empty
  to show the stage for all positions.
- :guilabel:`Fold by Default`: Check the box to have the stage appear folded in the Kanban view.
- :guilabel:`Company`: If the stage only applies to one company, select it. Leave the field empty to
  make the stage available to all companies.
- :guilabel:`Requirements` section: Enter any internal notes for this stage explaining any
  requirements of the stage.

.. note::
   The names of the four applicant statuses (:guilabel:`In Progress`, :guilabel:`Ready`,
   :guilabel:`Waiting`, and :guilabel:`Blocked`) are the same for all stages, and cannot be
   modified.

Delete stage
------------

If a stage is no longer needed, the stage can be deleted. To delete a stage, hover over the name of
the stage, and click the :icon:`fa-cog` :guilabel:`(Settings)` icon that appears. Click
:icon:`fa-trash` :guilabel:`Delete` and a *Confirmation* pop-up warning appears, asking
:guilabel:`Are you sure you want to delete this column?` Click :guilabel:`Delete` to delete the
stage.

.. important::
   If there are applicants currently in the stage being deleted, an error pops up when attempting to
   delete that stage. The records in that stage must be deleted, archived, or moved to a different
   stage before the stage can be deleted.

.. _recruitment/templates:

Email templates
===============

To communicate with the applicant, Odoo has several preconfigured email templates that can be used.
The preconfigured email templates and when to use them are as follows:

- :guilabel:`Recruitment: Application Acknowledgement`: This template is used to let the applicant
  know their application was received. This email is automatically sent out once the applicant is in
  the :guilabel:`New` stage.
- :guilabel:`Recruitment: Interest`: This template is used to let the applicant know that their
  application caught the recruiter's attention, and they have been shortlisted for either a phone
  call or an interview.
- :guilabel:`Recruitment: Not interested anymore`: This template is used when an applicant
  communicates that they are no longer interested in the position, and thanks them for their time
  and consideration.
- :guilabel:`Recruitment: Refuse`: This template is used when an applicant is no longer being
  considered for the position.
- :guilabel:`Recruitment: Schedule interview`: This template invites the applicant to book an
  interview slot in the recruiting team's agenda. It is only available when the **Appointments**
  app is installed. Refer to the :ref:`applicant scheduled interviews
  <recruitment/schedule_interviews/applicant-scheduled>` documentation.

When the *Salary Configurator* module is installed, the :guilabel:`Recruitment: Your Salary Package`
template is used to :doc:`send offers <recruitment/offer_job_positions>` to applicants.

.. note::
   Email templates can be created, modified, and deleted to suit the needs of a business. For more
   information on email templates, refer to the :doc:`../general/companies/email_template` document.

To manually send an email, click :guilabel:`Send message` in the chatter. A text box appears, as
well as the applicant's email address. Enter the message in the text box.

Click the :icon:`fa-expand` :guilabel:`(Open Full Composer)` icon in the text box. A pop-up window
loads, with the :guilabel:`To` and :guilabel:`Subject` fields pre-populated. The applicant is
entered in the :guilabel:`To` field.

To use a preconfigured email template, click the :icon:`fa-ellipsis-v` :guilabel:`(Templates)` icon
in the bottom of the window. Select the email template to use from the drop-down menu.

Preconfigured email templates may contain dynamic placeholders so unique information can be
populated in the email for a more personalized message to the applicant. Several preconfigured email
templates are available to choose from. Depending on the template selected, the email subject or
body may change.

.. note::
   Only the email templates that are configured for the model load. Other email templates come
   preconfigured in Odoo, but if they are not configured for the recruitment application, they do
   not appear in the list of available templates.

If any attachments need to be added, click the :icon:`fa-paperclip` :guilabel:`(Attach files)`
button at the bottom of the window. Navigate to the file to be attached, then click :guilabel:`Open`
to attach it. To delete an attachment, click the :icon:`fa-times` :guilabel:`(Delete)` icon at the
end of the attachment.

If any changes need to be made to the email, edit the body of the email. If the edits should be
saved to be used in the future, the email can be saved as a new template. Click the
:icon:`fa-ellipsis-v` :guilabel:`(Templates)` button in the bottom of the window, and select
:guilabel:`Save as Template`. To edit or delete existing templates, select :guilabel:`Manage
Templates` instead.

To send the email, click :guilabel:`Send`. The email is sent to the applicant and the email appears
in the chatter.

.. image:: recruitment/send-email.png
   :alt: The full composer pop-up window, with the list of email templates displayed.

.. toctree::
   :titlesonly:

   recruitment/new_job
   recruitment/post_job
   recruitment/recruitment_flow
   recruitment/add_applicants
   recruitment/talent_pools
   recruitment/schedule_interviews
   recruitment/offer_job_positions
   recruitment/refuse_applicant
   recruitment/application_analysis
   recruitment/source_analysis
   recruitment/hiring_velocity
   recruitment/team_performance
   recruitment/offer_analysis
