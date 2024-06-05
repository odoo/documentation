:show-content:
:show-toc:

===========
Recruitment
===========

Odoo keeps all job applicants organized with a pre-configured series of steps and stages that each
applicant goes through. Each stage has a specific step(s) that should be performed. These range from
scheduling a phone call, conducting an interview, or sending a job offer, for example. This process
is referred to as the 'applicant flow.'

When an applicant applies for a job position, an *applicant card* is automatically created in Odoo's
*Recruitment* app for that specific job position. As the applicant progresses through the
recruitment pipeline, the recruitment team moves their card from one stage to the next.

:ref:`Stages can be configured <recruitment/modify-stages>` so that an email is automatically sent
out using a set, pre-configured template as soon as an applicant's card enters a stage. These
automated emails are defined on each stage in the applicant flow.

The applicant flow explained in this document is the default flow in Odoo, and goes through the
applicant flow when using the *Recruitment* application's default configuration. The applicant flow
is able to be modified to suit the specific recruitment flow for any business.

.. note::
   The applicant flow with all its stages are universal and applies to all job positions, unless
   specified. :ref:`A specific stage can be configured <recruitment/customize-stages>` to be
   job-specific, meaning that specific stage is only visible for that specific job position.
   Otherwise, if a new stage is created, or an existing stage is modified, those changes are
   visible on all job positions.

.. _recruitment/settings:

Settings
========

Before creating a job position in Odoo, configure the necessary settings for the *Recruitment* app.
To view and edit the settings, navigate to :menuselection:`Recruitment app --> Configuration -->
Settings`. After any changes are made, click the :guilabel:`Save` button in the top-left corner to
save all the changes.

Job posting
-----------

The :guilabel:`Job Posting` section of the *Recruitment* app settings has only one selection to
make. If job positions are to be posted to the company's website, enable the :guilabel:`Online
Posting` option.

.. note::
   The :guilabel:`Online Posting` is only available if the *Website* application is also installed.

Recruitment process
-------------------

The :guilabel:`Recruitment process` section of the settings page specifies what the database can and
cannot do during the recruitment process.

Send interview survey
~~~~~~~~~~~~~~~~~~~~~

Odoo is capable of having a survey sent to an applicant to gather more information about them.
Surveys can be thought of as exams, or questionnaires, and can be customized in various ways to
provide the recruitment team with valuable insights into the applicant

Enable the :guilabel:`Send Interview Survey` option to send surveys to applicants. Once enabled, an
:icon:`fa-arrow-right` :guilabel:`Interview Survey` internal link appears. Click the
:icon:`fa-arrow-right` :guilabel:`Interview Survey` link to navigate to a list of all created
surveys.

This list includes all surveys that were created in the database, not just surveys used in the
*Recruitment* app. If no surveys have been created, the surveys list displays a :guilabel:`No Survey
Found` message, and presents options to create a survey from several pre-configured survey
templates.

.. seealso::
   For more detailed information about surveys, refer to the :doc:`survey essentials
   <../marketing/surveys/create>` documentation.

.. note::
   Enabling the :guilabel:`Send Interview Survey` option will install the *Surveys* application once
   the settings are saved, if it is not installed already.

Send SMS
~~~~~~~~

It is possible to send text messages to applicants directly through the *Recruitment* app. To do so,
enable the :guilabel:`Send SMS` option. This option requires credits to use, which can be obtained
by clicking the :icon:`fa-arrow-right` :guilabel:`Buy credits` internal link that emerges when the
feature is enabled.

.. seealso::
   For more information, refer to the :doc:`SMS pricing and FAQs
   <../marketing/sms_marketing/pricing/pricing_and_faq>` documentation.

.. _recruitment/cv-display:

CV display
~~~~~~~~~~

When applicants submit an application, one of the default required fields is a resumé, or :abbr:`CV
(curriculum vitae)`. All resumés are stored in the *Documents* application, and are accessible on
the applicant's card.

A resumé has the option to appear on the applicant's form, which can be viewed by clicking on the
applicant's card. The resumé appears on the right-side of the screen. If this is not enabled, the
resumé is accessed via a link in the chatter, where it needs to be clicked to expand and view it, or
downloaded.

Enable the :guilabel:`CV Display` option to show the resumé on the applicant's card by default, and
in addition to the document link. When enabled, the resumé appears on the right side of the
applicant's card.

.. note::
   For the resumé to appear on the right-side, the browser window must be in full-screen mode (where
   the browser spans the entire screen).

   If the browser window is set to a size smaller than the entire width of the screen (not
   full-screen), then the resumé does not appear on the right-side. Instead, the resumé appears in
   the :guilabel:`Files` section of the chatter, below the applicant's card.

.. image:: recruitment/cv-display.png
   :align: center
   :alt: The resumé on an applicant's card, appearing on the right side.

.. _recruitment/cv-ocr:

CV digitization (OCR)
~~~~~~~~~~~~~~~~~~~~~

When an application is submitted using any of the available methods, such as an online application
submission, emailing a resume to the job position alias, or creating an applicant record directly
from the database, it is possible to have Odoo extract the applicant's name, phone number, and email
address from the resumé and populate the applicant's form. To do so, enable the :guilabel:`CV
Digitization (OCR)` option.

When enabled, additional options appear. Click on the corresponding radio button to select one of
the following options:

- :guilabel:`Do not digitize`: this option turns off resumé digitization.
- :guilabel:`Digitize on demand only`: this option only digitizes resumes when requested. A
  :guilabel:`Digitize document` buttons appears on applicant cards. When clicked, the resumé is
  scanned and the applicant's card is updated.
- :guilabel:`Digitize automatically`: this option automatically digitizes all resumés when they are
  submitted.

Beneath these options are two additional links. Click the :icon:`fa-arrow-right` :guilabel:`Buy
credits` button to purchase credits for CV digitization. Click the :icon:`fa-arrow-right`
:guilabel:`View My Services` to view a list of all current services, and their remaining credit
balances.

For more information on document digitization and :abbr:`IAP's (in-app purchases)`, refer to the
:doc:`In-app purchase (IAP) <../essentials/in_app_purchase>` documentation.

.. note::
   The :guilabel:`Do not digitize` option for :guilabel:`CV digitization (OCR)` at first may seem
   like a redundancy. It seems to be the same as disabling the :guilabel:`CV digitization (OCR)`
   option.

   When the :guilabel:`CV digitization (OCR)` option is enabled, a module is installed so that
   resumés can be scanned. Disabling this option would uninstall the module.

   If at some point, there is a desire to temporarily stop digitizing resumés, the :guilabel:`Do not
   digitize` option is selected. The reason this option is available is so that the module is not
   uninstalled, allowing for digitization to be enabled in the future by selecting one of the other
   two options.

Salary package configurator
~~~~~~~~~~~~~~~~~~~~~~~~~~~

When sending an offer to an applicant, an expiration date can be set on the offer. Enter the number
of days an offer is valid for in the :guilabel:`days` field. After the set amount of days has
passed, if the applicant has not accepted the offer, the offer is no longer available.

Kanban view
===========

To access the Kanban view for a job position, navigate to the main :menuselection:`Recruitment app`
dashboard, which is the default view when opening the application. All job positions appear on the
main dashboard. Click the :guilabel:`(#) New Applications` smart button on a job position card to
navigate to the Kanban view for all the applicants for that particular job position.

.. image:: recruitment/new-applicants-button.png
   :align: center
   :alt: Main dashboard view of job position card, showing new applications button.

Inside the job application, the Kanban stages appear, with all the applicants populated in their
respective columns, indicating what stage they are currently in. There are six default stages in
Odoo:

- :ref:`New <recruitment/new>`
- :ref:`Initial Qualification <recruitment/initial-qualification>`
- :ref:`First Interview <recruitment/first-interview>`
- :ref:`Second Interview <recruitment/second-interview>`
- :ref:`Contract Proposal <recruitment/contract-proposal>`
- :ref:`Contract Signed <recruitment/contract-signed>`

The last column, :guilabel:`Contract Signed`, is folded by default. Folded columns appear gray, and
the applicants in it are hidden from view. To expand the folded stage and view the applicant cards
for that column, click anywhere on the thin gray column that says the stage name and the column
expands, revealing the applicants.

.. image:: recruitment/stages.png
   :align: center
   :alt: Expand a folded column by clicking on it in the Kanban view.

Each stage has a color-coded bar beneath the stage name, providing status information for the
applicant's in that specific stage. The status colors are:

- :guilabel:`Green`: the applicant is ready to move to the next stage.
- :guilabel:`Red`: the applicant is blocked from moving to the next stage.
- :guilabel:`Gray`: the applicant is still in progress in the current stage and is neither ready nor
  blocked from the next stage.

The status for each card is set manually. To set the status, click on the small circle in the
lower-left of the applicant card. A status pop-up window appears. Click on the desired status for
the applicant. The status dot on the applicant card as well as the status bar updates.

.. image:: recruitment/status-dots.png
   :align: center
   :alt: The applicant card statuses, and status bar.

.. tip::
   The names for the three status colors (`In Progress`, `Blocked`, and `Ready for Next Stage`)
   :ref:`can be modified <recruitment/modify-stages>`, if desired.

.. _recruitment/customize-stages:

Customize stages
================

Stages can be modified, added, or deleted to best meet the needs of the particular hiring steps of
a business.

New stage
---------

To create a new stage, click on :icon:`fa-plus` :guilabel:`Stage` and a new column appears. Enter
the title for the new stage in the :guilabel:`Stage title` field, then click :guilabel:`Add`. The
new column appears, and another new stage is available to create. If no new stages are needed, click
anywhere on the screen to exit the new stage creation.

.. image:: recruitment/add-column.png
   :align: center
   :alt: The plus sign to click to add a new column to the Kanban stages.

.. _recruitment/modify-stages:

Modify stage
------------

To modify the settings of a stage, hover over the name of the stage, and a :icon:`fa-cog`
:guilabel:`(gear)` icon appears in the upper right hand side of the stage. Click on the
:icon:`fa-cog` :guilabel:`(gear)` icon and a menu appears. Then click on the :guilabel:`Edit`
option. An :guilabel:`Edit: (Stage)` form appears. Make any desired modifications to the form, then
click :guilabel:`Save & Close` when done.

.. image:: recruitment/gear.png
   :align: center
   :alt: The gear icon that appears when a column name is moused over, and the drop-down menu it
         displays when clicked.

.. _recruitment/edit-stage:

Edit stage form
~~~~~~~~~~~~~~~

The :guilabel:`Edit: (Stage)` form is where the stage's settings are configured. The only required
field is the :guilabel:`Stage Name`.

The fields to be populated or modified are:

- :guilabel:`Stage Name`: type in a name for the stage.
- :guilabel:`Email Template`: select an email template to be used from the drop-down menu. If a
  template is selected, when the applicant card enters the stage, an email is automatically sent to
  the applicant using the selected template.
- :guilabel:`Folded in Kanban`: check the box to have the stage appear folded (hidden) at all times
  in the default view.
- :guilabel:`Hired Stage`: check the box if this stage indicates that the applicant is hired. When
  an applicant's card enters this stage, the card displays a :guilabel:`Hired` banner in the upper
  right corner. If this box is checked, this stage is used to determine the hire date of an
  applicant.
- :guilabel:`Job Specific`: if the stage only applies to specific job positions, select the job
  positions from the drop-down menu. Multiple job positions can be selected.
- :guilabel:`Show in Referrals`: check the box if this stage should be seen in the *Referrals*
  application, and allow the referrer to accrue points when a referral of theirs reaches this stage.
  If this is active, a :guilabel:`Points` field appears. Enter the amount of referral points the
  employee receives when an applicant enters this stage. The *Referrals* app must be installed in
  order to use this option.
- :guilabel:`Tooltips` section: there are three pre-configured status labels (colored circles) for
  each applicant's card, indicating its status. These colors are displayed at the top of each stage
  to reflect the statuses of the applicants in the stage. The *names* for the label can be modified,
  but the label itself (the color) cannot. The default names and labels are: :guilabel:`In Progress`
  (gray), :guilabel:`Blocked` (red), and :guilabel:`Ready for Next Stage` (green).
- :guilabel:`Requirements`: enter any internal notes for this stage explaining any requirements of
  the stage.

Delete stage
------------

If a stage is no longer needed, the stage can be deleted. To delete a stage, hover over the name of
the stage, and a :icon:`fa-cog` :guilabel:`(gear)` icon appears. First, click on the :icon:`fa-cog`
:guilabel:`(gear)` icon to reveal a drop-down menu, then click :guilabel:`Delete`. A
:guilabel:`Confirmation` pop-up warning appears, asking :guilabel:`Are you sure you want to delete
this column?` Click :guilabel:`Delete` to delete the column.

.. important::
   If there are applicants currently in the stage being deleted, an error pops up when attempting to
   delete the stage. The records currently in the stage to need to be either deleted, archived, or
   moved to a different stage before the stage can be deleted.

Email templates
===============

To communicate with the applicant, Odoo has several pre-configured email templates that can be used.
The pre-configured email templates and when to use them are as follows:

- :guilabel:`Recruitment: Applicant Acknowledgement`: this template is used to let the applicant
  know that their application was received. This email is automatically sent out once the applicant
  is in the :guilabel:`New` stage.
- :guilabel:`Recruitment: Interest`: this template is used to let the applicant know that their
  application caught the recruiter's attention, and they have been shortlisted for either a phone
  call or an interview.
- :guilabel:`Recruitment: Schedule Interview`: this template is used to let the applicant know that
  they have passed the :guilabel:`Initial Qualification` stage and they will be contacted to set up
  an interview with the recruiter. This email is automatically sent out once the applicant is in the
  :guilabel:`Initial Qualification` stage.
- :guilabel:`Recruitment: Not interested anymore`: this template is used when an applicant
  communicates that they are no longer interested in the position, and thanks them for their time
  and consideration.
- :guilabel:`Recruitment: Refuse`: this template is used when an applicant is no longer being
  considered for the position.

.. note::
   Email templates can be created, modified, and deleted to suit the needs of a business. For more
   information on email templates, refer to the :doc:`../general/companies/email_template` document.

To manually send an email, click :guilabel:`Send message` in the chatter. A text box appears, as
well as the applicant's email address.

.. image:: recruitment/full-composer.png
   :align: center
   :alt: Send an email from the chatter.

Click the :icon:`fa-expand` :guilabel:`(expand)` full composer icon in the bottom right corner of
the :guilabel:`Send Message` tab in the chatter. A :guilabel:`Compose Email` pop-up window loads,
with the :guilabel:`Recipients` and :guilabel:`Subject` pre-populated. The applicant's email address
is entered in the :guilabel:`Recipients` line, and the :guilabel:`Subject` is `(Job Position)`. The
email body is empty by default.

To use a pre-configured email template, click the field next to :guilabel:`Load template` in the
bottom section of the window. Select the email template to use from the drop-down menu.

Pre-configured email templates may contain dynamic placeholders so unique information can be
populated in the email for a more personalized message to the applicant. There are several
pre-configured email templates to choose from. Depending on the template selected, the email subject
and/or body may change.

.. note::
   Only the email templates that are configured for the model load. There are other email templates
   pre-configured in Odoo, but if they are not configured for the recruitment application, they do
   not appear in the list of available templates.

If any attachments are to be added, click the :guilabel:`Attachments` button in the lower left
corner. Navigate to the file to be attached, then click :guilabel:`Open` to attach it. To delete an
attachment, click the :icon:`fa-close` :guilabel:`(delete)` icon to the right of the attachment.

If any changes need to be made to the email, edit the body of the email. If the edits should be
saved to be used in the future, the email can be saved as a new template. Click the :guilabel:`Save
Template` button in the bottom. To send the email, click :guilabel:`Send` and the email is sent to
the applicant. The email then appears in the chatter.

Stage flow
==========

In order to move an applicant's card from one stage to another, the applicant's card can either be
dragged and dropped in the Kanban view to the desired stage, or the stage can be modified on the
applicant's card.

To change the stage on the applicant's card, click on the applicant's card in the Kanban view to go
to a detailed view of the card. The current stage for the card is highlighted at the top, above the
card.

Click the desired stage for the card, and the stage changes. A log note indicating the stage change
appears in the chatter. Navigate back to the Kanban view by clicking on :guilabel:`Applications` in
the breadcrumb menu in the top-left, and the applicant's card now appears in the new stage.

.. image:: recruitment/stage-change.png
   :align: center
   :alt: Change the stage of an applicant by clicking on the desired stage at the top of the
         applicant's card.

.. _recruitment/new:

New
---

.. important::
   The following information is based on Odoo's default recruitment pipeline flow. Be advised that
   if modifications are made to create a customized recruitment pipeline flow, it will vary from the
   following information.

All applicants appear in the :guilabel:`New` stage, whether submitted online or if the applicant is
manually entered by a recruiter.

When the applicant's card is created, Odoo automatically populates the
:guilabel:`Subject/Application`, the applicant's :guilabel:`Name`, :guilabel:`Email`,
:guilabel:`Mobile` number, and :guilabel:`LinkedIn Profile` on the applicant's card. This
information is required when applying for a job position, by default.

.. note::
   If the website application form is modified, different fields may be populated based on what
   information is requested on the website.

If the applicant entered any information in the :guilabel:`Short Introduction` section of the online
application, it will populate in the :guilabel:`Application Summary` tab at the bottom of the
applicant's card.

Resumé
~~~~~~

If a resumé was attached to the online application, the resumé would appear in the attachments
section of the chatter, and is also stored in the *Documents* application. To find the recruitment
documents stored in the *Documents* application, navigate to the main :menuselection:`Documents`
dashboard, and click the folder labeled :guilabel:`Recruitment` on the left-hand side. All
recruitment documents are stored within that folder.

If the :ref:`CV Display <recruitment/cv-display>` option was enabled in the :ref:`Settings
<recruitment/settings>` menu, the resumé appears on the applicant's card, on the right-hand side.

Send interview
~~~~~~~~~~~~~~

At any point in the hiring process, an *interview* can be sent to the applicant to obtain more
information. These interviews are custom-made, and can be formatted in a variety of ways.

The *Surveys* application is used to send these *interviews*, therefore the *Surveys* application
must be installed to send an interview to an applicant.

Odoo uses the term *interview*, but these can be thought of as questionnaires, surveys, tests,
certifications, etc. Custom interviews can be formatted to suit each individual job positions
needs. For more information on creating and editing interview forms, refer to the
:doc:`../hr/recruitment/new_job` documentation.

.. example::
   A job position for a computer programmer could have an interview in the form of a programming
   quiz to determine the skill level of the applicant. A job position for a restaurant server could
   have a questionnaire inquiring about the applicant's availability, if the desired applicant needs
   to be available on weekend evenings.

To send an interview to an applicant, click on an applicant's card to navigate to a detailed view of
the applicant's card. At the top-left of the applicant's card, click the :guilabel:`Send Interview`
button.

If the applicant's card has an email address on file, a :guilabel:`Send an interview` pop-up window
appears, with all the information populated.

.. note::
   In order to send an email to an applicant, there must be an email address on the applicant's
   card. If an email address is not entered on the applicant's card, when :guilabel:`Send Interview`
   is clicked, an :guilabel:`Edit:(Applicant)` pop-up window appears on top of the :guilabel:`Send
   an interview` pop-up window. Enter the email address in the :guilabel:`email` field, then click
   :guilabel:`Save & Close`. Once the applicant's information is saved, the :guilabel:`Edit:
   (Applicant)` closes and the :guilabel:`Send an interview` pop-up window remains.

Email templates use dynamic placeholders to personalize the email to the applicant and the job
position. Add any additional recipients for the survey if more people should receive the email. If
an email is in the database as a contact, add that contact in the :guilabel:`Recipients` field. If
an email should be sent to someone who is not in the database as a contact, and they should **not**
be added as a contact, add their email in the :guilabel:`Additional emails` field.

If any attachments need to be added, click the :guilabel:`Attachments` button and a file explorer
window appears. Navigate to the desired file, then click :guilabel:`Open` to attach it to the email.
The attachment loads, and is listed above the :guilabel:`Attachments` button.

If the emailed interview must be completed by a specific date, select a date for the
:guilabel:`Answer deadline` in the lower-right area of the pop-up window. Click on the line next to
:guilabel:`Answer deadline`, and a calendar selector appears. Use the :icon:`fa-chevron-left`
:guilabel:`(left)`  and :icon:`fa-chevron-right` :guilabel:`(right)` arrows on either side of the
month to navigate to the desired month, then click on the :guilabel:`day` to select the date.

The :guilabel:`Mail Template` field is pre-populated based on the configuration for the interview. A
different template can be chosen from the drop-down menu if desired. If a new template is selected,
the new email template loads in the email body.

To send the email with the interview link to the applicant, click :guilabel:`Send` at the bottom of
the email pop-up.

.. image:: recruitment/send-survey.png
   :align: center
   :alt: Send a custom survey, also referred to as an interview form, to an applicant using a
         pre-configured template.

New applicant
~~~~~~~~~~~~~

An applicant card can be manually added if needed. If an applicant needs to be added to the list of
prospective candidates and an applicant card has not been created yet (they have not applied for the
job online) an applicant card can be easily added from the job position Kanban view in one of two
ways, using either the :ref:`quick add <recruitment/quick-add-applicant>` button or the :ref:`New
<recruitment/create-new-applicant>` button.

.. _recruitment/quick-add-applicant:

Quick add
*********

Quickly add a new applicant using the *quick add* button. If not already in the job position Kanban
view, navigate to the main recruitment dashboard by going to :menuselection:`Recruitment app -->
Applications --> By Job Positions`. Click the :guilabel:`(#) New Applications` button on the job
position card that the applicant should be added to. Then, click on the small :icon:`fa-plus`
:guilabel:`(plus)` icon in the top-right of the :guilabel:`New` stage to quickly add a new
applicant.

Enter the following information on the card:

- :guilabel:`Subject/Application`: Enter the title for the card. Typically this is the applicant's
  name and job position being applied to, for example: `Laura Smith - HR Manager`. This field is not
  visible in the Kanban view, unless the :guilabel:`Applicant's Name` is left blank. If there is no
  :guilabel:`Applicant's Name`, then the :guilabel:`Subject/Application Name` is what is displayed
  on the applicant card in the Kanban view.
- :guilabel:`Applicant's Name`: enter the applicant's name.
- :guilabel:`Email`: enter the applicant's email address.
- :guilabel:`Applied Job`: the current job position populates this field. If needed, the job
  position can be changed by selecting a different position from the drop-down menu. If a different
  job position is selected, after the card is created, the card appears in the selected job
  position.

After the information is entered, click :guilabel:`Add`. The applicant appears in the list, and a
new blank applicant card appears. Click either the :icon:`fa-trash-o` :guilabel:`delete` icon or
anywhere on the screen to close the card.

If preferred, after entering the applicant name, click :guilabel:`Edit` and a detailed
:guilabel:`Applicant Form` loads. :ref:`Enter the information on the form
<recruitment/applicant-details>`.

.. image:: recruitment/quick-add.png
   :align: center
   :alt: All the fields for a new applicant form entered when using the Quick Add option.

.. _recruitment/create-new-applicant:

New
***

Add a new applicant including all the relevant information using the *New* button. If not already in
the Kanban view for the job position to add an applicant to, navigate to the main recruitment
dashboard by going to :menuselection:`Recruitment app --> Applications --> By Job Positions`. Then,
click the :guilabel:`New` button in the top-left of the Kanban view and a blank applicant form
loads.

Certain fields on the applicant card may be pre-populated, depending on how the job position is
configured. Typically, the :guilabel:`Job` section, as well as the :guilabel:`Recruiter` field, are
all pre-populated.

Enter the following information on the new applicant form. Note that not all fields listed below may
be visible. Depending on installed applications and configurations, some fields may not be
displayed.

.. _recruitment/applicant-details:

Applicant section
^^^^^^^^^^^^^^^^^

- :guilabel:`Subject/Application Name`: this is the only required field. Enter the title for the
  card. Typically this is the applicant's name and job position being applied to, for example:
  `John Smith - Experienced Developer`. This field is not visible in the Kanban view, unless the
  :guilabel:`Applicant's Name` is left blank. If there is no :guilabel:`Applicant's Name`, then the
  :guilabel:`Subject/Application Name` is what is displayed on the applicant card in the Kanban
  view.
- :guilabel:`Applicant's Name`: enter the applicant's name.
- :guilabel:`Email`: enter the applicant's email address.
- :guilabel:`Phone`: enter the applicant's phone number.
- :guilabel:`Mobile`: enter the applicant's mobile number.
- :guilabel:`LinkedIn Profile`: enter the web address for the applicant's personal profile on
  LinkedIn.
- :guilabel:`Degree`: select the applicant's highest level of education earned from the drop-down
  menu. Options are :guilabel:`Graduate`, :guilabel:`Bachelor Degree`, :guilabel:`Master Degree`, or
  :guilabel:`Doctoral Degree`. The :guilabel:`Graduate` option indicates graduating the highest
  level of school before a Bachelor's degree, such as a high school or secondary school diploma,
  depending on the country.
- :guilabel:`Interviewers`: using the drop-down menu, select the people who will conduct the
  interview(s). The selected people must have either *recruiter* or *officer* rights configured for
  the Recruitment application to appear in the drop-down list.
- :guilabel:`Recruiter`: select the person responsible for the entire recruitment process for the
  job position. Only *users* can be selected, and all users are presented in the drop-down to
  select from.
- :guilabel:`Evaluation`: click on one of the stars to select a rating for the applicant. One star
  indicates :guilabel:`Good`, two stars indicates :guilabel:`Very Good`, and three stars indicates
  :guilabel:`Excellent.`
- :guilabel:`Source`: using the drop-down menu, select where the applicant learned about the job
  position. The following options come pre-configured in Odoo: :guilabel:`Search engine`,
  :guilabel:`Lead Recall`, :guilabel:`Newsletter`, :guilabel:`Facebook`, :guilabel:`Twitter`,
  :guilabel:`LinkedIn`, :guilabel:`Monster`, :guilabel:`Glassdoor`, and :guilabel:`Craigslist`. To
  add a new :guilabel:`Source`, type in the source, then click :guilabel:`Create "(new source)"`.
- :guilabel:`Medium`: using the drop-down menu, select the method, or :guilabel:`Medium`, for the
  :guilabel:`Source` that the applicant found the job listing with. The pre-configured options are:
  :guilabel:`Banner`, :guilabel:`Direct`, :guilabel:`Email`, :guilabel:`Facebook`, :guilabel:`Google
  Adwords`, :guilabel:`LinkedIn`, :guilabel:`Phone`, :guilabel:`Television`, :guilabel:`Twitter`
  (now known as "X"), or :guilabel:`Website`. To add a new :guilabel:`Medium`, type in the medium,
  then click :guilabel:`Create "(new medium)"`.
- :guilabel:`Referred By User`: if referral points are to be earned for this job position in the
  *Referrals* application, select the user who referred the applicant from the drop-down menu. The
  *Referrals* application must be installed for this field to appear.
- :guilabel:`Availability`: select the available start date for the applicant. To select a date,
  click on the field to reveal a calendar. Use the :guilabel:`< (left)` and :guilabel:`> (right)`
  arrows on either side of the month to navigate to the desired month, then click on the
  :guilabel:`day` to select the date. If no entry is selected that indicates the applicant is ready
  to begin work immediately.
- :guilabel:`Tags`: select as many tags as desired from the drop-down menu. To add a tag that does
  not exist, type in the tag name, then click :guilabel:`Create "new tag"`.

Job section
^^^^^^^^^^^

The following fields are pre-populated when creating a new applicant, as long as these field are
specified on the Job Position. Editing the fields is possible, if desired.

- :guilabel:`Applied Job`: select the job position the applicant is applying to from the drop-down
  menu.
- :guilabel:`Department`: select the department the job position falls under from the drop-down
  menu.
- :guilabel:`Company`: select the company the job position is for using the drop-down menu. This
  field only appears when in a multi-company database.

Contract section
^^^^^^^^^^^^^^^^

- :guilabel:`Expected Salary`: enter the amount the applicant is requesting for the role in this
  field. The number should be in a `XX,XXX.XX` format. The currency is determined by the
  localization setting for the company.
- :guilabel:`Extra advantages...`: if any extra advantages are requested by the applicant, enter it
  in the :guilabel:`Extra advantages...` field to the right of the :guilabel:`Expected Salary`
  field. This should be short and descriptive, such as `1 week extra vacation` or `dental plan`.
- :guilabel:`Proposed Salary`: enter the amount to be offered to the applicant for the role in this
  field. The number should be in a `XX,XXX.XX` format. The currency is determined by the
  localization setting for the company.
- :guilabel:`Extra advantages...`: if any extra advantages are offered to the applicant, enter it in
  the :guilabel:`Extra advantages...` field to the right of the :guilabel:`Proposed Salary` field.
  This should be short and descriptive, such as `unlimited sick time` or `retirement plan`.

Application summary tab
^^^^^^^^^^^^^^^^^^^^^^^

Any additional details or notes that should be added to the applicant's card can be typed into this
field.

Skills tab
^^^^^^^^^^

Skills can be added to the applicant's card. To add a skill, follow the same steps as outlined in
the skills section of the :ref:`Create new employees <employees/skills>` document.

.. image:: recruitment/new-applicant.png
   :align: center
   :alt: All the fields for a new applicant form entered.

.. _recruitment/initial-qualification:

Initial qualification
---------------------

If an applicant seems to be a good potential candidate, they are moved to the :guilabel:`Initial
Qualification` stage. This could be for a number of reasons, such as they have the relevant
experience, education, or certifications the position requires.

This stage is to quickly sort candidates that have potential, and those that do not meet the
requirements. No automatic actions, such as emails, are set for this stage. This stage simply
informs the recruitment team to potentially set up a phone call or an interview with the candidate.

.. _recruitment/first-interview:

First interview
---------------

After an applicant has passed the :guilabel:`Initial Qualification` stage, they can be moved to the
:guilabel:`First Interview` stage in the job position Kanban view. To move the applicant to the next
stage, drag and drop the applicant's card to the :guilabel:`First Interview` stage, or click on the
:guilabel:`First Interview` stage button at the top of the individual applicant's card.

.. image:: recruitment/move.png
   :align: center
   :alt: An applicant's card moves from one stage to another by using the click and drag method.

.. tip::
   The :guilabel:`First Interview` stage can be modified so when the applicant's card moves to the
   :guilabel:`First Interview` stage, an email is automatically sent to the applicant stating an
   interview is requested. In this pre-configured email template, a link to the recruiting team's
   calendar appears, allowing the applicant to schedule their interview.

   :ref:`Edit <recruitment/edit-stage>` the :guilabel:`First Interview` stage, and select the
   :guilabel:`Recruitment: Schedule Interview` for the :guilabel:`Email Template` field, to automate
   this action.

.. _recruitment/schedule-meetings:

Schedule a meeting
~~~~~~~~~~~~~~~~~~

An interview can be scheduled in one of two ways: either manually by the recruitment team, or by the
applicant themselves.

If the :guilabel:`First Interview` stage was modified to send the :guilabel:`Recruitment: Schedule
Interview` email template when an applicant reaches that stage, the applicant received a link to the
recruitment team's calendar, and can schedule the interview on their own. The recruitment team's
availability is reflected in the calendar.

If the interview needs to be scheduled by the recruitment team, they should reach out to the
applicant for a date and time that works. When a date and time have been agreed upon for both the
applicant and interviewer, the interview can be scheduled. To schedule an interview, whether a phone
or in-person interview, click the :guilabel:`Meeting` smart button at the top of the applicant's
record.

.. note::
   The meeting smart button displays :guilabel:`No Meeting` if no meetings are currently scheduled.
   For new applicants who are new to the :guilabel:`First Interview` stage, this is the default.

   If there is one meeting already scheduled, the smart button displays :guilabel:`1 Meeting`, with
   the date of the upcoming meeting beneath it. If more than one meeting is scheduled, the button
   displays :guilabel:`Next Meeting`, with the date of the first upcoming meeting beneath it.

Doing so loads the *Calendar* application, showing the currently scheduled meetings and events for
the user. The meetings and events displayed are for the employees who are listed under the
:guilabel:`Attendees` section on the right side of the calendar view. To change the currently loaded
meetings and events being displayed, uncheck the person who's calendar events are to be hidden. Only
the checked attendees are visible on the calendar.

The default view is the :guilabel:`Week` view. To change the calendar view, click the
:guilabel:`Week` button, then select the desired view from the drop-down menu. The other options are
either :guilabel:`Day`, :guilabel:`Month`, or :guilabel:`Year`.

An option to display or hide weekends is available. Click the :guilabel:`Week` button, then click
:guilabel:`Show weekends` to deactivate it (the default is to show weekends). If a check mark is
next to :guilabel:`Show weekends`, weekends are visible. If there is no check mark, weekends are
hidden.

To change the displayed date range for the calendar, either use the :icon:`fa-arrow-left`
:guilabel:`(left arrow)`, :icon:`fa-arrow-right` :guilabel:`(Right arrow)`, or :guilabel:`Today`
buttons above the calendar, or click on a date in the calendar on the right side of the displayed
calendar.

.. image:: recruitment/calendar.png
   :align: center
   :alt: The calendar view, highlighting how to change the displayed meetings.

To add a meeting to the calendar when in the day or week view, click on the start time of the
meeting and drag to the end time, to select the date, time, and the length of the meeting. A meeting
can also be added in this view by clicking on the day *and* the time slot the meeting is to take
place.

Both methods cause a :ref:`New Event <recruitment/event-card>` pop up window to appear.

.. _recruitment/event-card:

New event pop-up window
***********************

Enter the information on the form. The only required fields to enter are the :guilabel:`Meeting
Title`, and the :guilabel:`Start` and :guilabel:`End` fields. Once the card details are entered,
click :guilabel:`Save & Close` to save the changes and create the interview.

The fields available to populate or modify on the :guilabel:`New Event` card are as follows:

- :guilabel:`Meeting Title`: enter the subject for the meeting. This should clearly indicate the
  purpose of the meeting. The default subject is the :guilabel:`Subject/Application Name` on the
  applicant's card.
- :guilabel:`Start` and :guilabel:`End`: select the start and end date and times for the meeting.
  Click on one of the fields and a calendar pop-up window appears. Select both the start and end
  date and times, then click :guilabel:`Apply`.
- :guilabel:`All Day`: if the meeting is an all-day interview, check the box. If this box is
  checked, the :guilabel:`Start` and :guilabel:`End` fields are hidden from view.
- :guilabel:`Attendees`: select the people who should be in attendance. The default employee listed
  is the person who is creating the meeting. Add as many other people as desired.
- :guilabel:`Videocall URL`: if the meeting is virtual, or if there is a virtual option available,
  click :guilabel:`+ Odoo meeting` and a URL is automatically created for the meeting and populates
  the field.
- :guilabel:`Description`: enter a brief description in this field. There is an option to enter
  formatted text, such as numbered lists, headings, tables, as well as links, photos, and more. Use
  the powerbox feature, by typing a `/`, and a list of options are presented. Scroll through the
  options and click on the desired item. The item appears in the field and can be modified. Each
  command presents a different pop-up window. Follow the instructions for each command to complete
  the entry.

More options
^^^^^^^^^^^^

To add additional information to the meeting, click the :guilabel:`More Options` button in the
lower-right corner of the pop-up window. Enter any of the following additional fields:

- :guilabel:`Duration`: this field auto populates based on the :guilabel:`Starting At` and
  :guilabel:`Ending At` times entered. If the meeting time is adjusted, this field automatically
  adjusts to the correct duration length. The default length of a meeting is one hour.
- :guilabel:`Recurrent`: if the meeting should repeat at a selected interval (not typical for a
  first interview), check the box next to :guilabel:`Recurrent`. Several additional fields appear
  when this is enabled:

  - :guilabel:`Timezone`: using the drop-down menu, select the :guilabel:`Timezone` for the
    meetings.
  - :guilabel:`Repeat`: using the drop-down menu, select when the meetings repeat. The available
    options are :guilabel:`Daily`, :guilabel:`Weekly`, :guilabel:`Monthly`, :guilabel:`Yearly`, or
    :guilabel:`Custom`. If :guilabel:`Custom` is selected, a :guilabel:`Repeat Every` field appears
    beneath it, along with another time frequency parameter (:guilabel:`Days`, :guilabel:`Weeks`,
    :guilabel:`Months`, or :guilabel:`Years`). Enter a number in the blank field, then select the
    time period using the drop-down menu.
  - :guilabel:`Repeat on`: if :guilabel:`Weekly` is selected for the :guilabel:`Repeat` field, the
    :guilabel:`Repeat on` field appears. Click on the corresponding day to select it.
  - :guilabel:`Day of Month`: if :guilabel:`Monthly` is selected for the :guilabel:`Repeat` field,
    the :guilabel:`Day of Month` field appears. Using the drop-down menu, select either
    :guilabel:`Date of month` or :guilabel:`Day of month`. If :guilabel:`Date of month` is selected,
    enter the date the meeting repeats. If :guilabel:`Day of month` is selected, use the drop-down
    menus to determine the frequency. Select either :guilabel:`First`, :guilabel:`Second`,
    :guilabel:`Third`, :guilabel:`Fourth`, or :guilabel:`Last` for the first drop-down menu, then
    select the day (:guilabel:`Monday`, :guilabel:`Tuesday`, etc.) in the second drop-down menu.
  - :guilabel:`Until`: using the drop-down menu, select when the meetings stop repeating. The
    available options are :guilabel:`Number of repetitions`, :guilabel:`End date`, and
    :guilabel:`Forever`. If :guilabel:`Number of repetitions` is selected, enter the number of
    total meetings to occur in the blank field. If :guilabel:`End date` is selected, specify the
    date using the calendar pop-up window, or type in a date in a XX/XX/XXXX format.
    :guilabel:`Forever` schedules meetings indefinitely.

- :guilabel:`Location`: enter the location for the meeting.
- :guilabel:`Tags`: select any tag(s) for the meeting using the drop-down menu. There is no limit to
  the number of tags that can be used.
- :guilabel:`Appointment`: if an appointment is associated with this meeting, select it form the
  drop-down menu, or create a new appointment by typing in the appointment name, then click
  :guilabel:`Create & Edit...`. A :guilabel:`Create Appointment` form loads. Enter the information
  on the form, then click :guilabel:`Save & Close`.
- :guilabel:`Privacy`: select if the organizer appears either :guilabel:`Available` or
  :guilabel:`Busy` for the duration of the meeting, using the drop-down menu. Next, select the
  visibility of this meeting, using the drop-down menu to the right of the first selection. Options
  are :guilabel:`Public`, :guilabel:`Private`, and :guilabel:`Only internal users`.
  :guilabel:`Public` allows for everyone to see the meeting, :guilabel:`Private` allows only the
  attendees listed on the meeting to see the meeting, and :guilabel:`Only internal users` allows
  anyone logged into the company database to see the meeting.
- :guilabel:`Organizer`: the employee who created the meeting is populated in this field. Use the
  drop-down menu to change the selected employee.
- :guilabel:`Reminders`: select a reminder from the drop-down menu. Default options include
  :guilabel:`Notification`, :guilabel:`Email`, and :guilabel:`SMS Text Message`, each with a
  specific time period before the event (hours, days, etc). The reminder chosen alerts the meeting
  participants of the meeting via the selected option at the specified time. Multiple reminders can
  be selected in this field.

.. image:: recruitment/new-event.png
   :align: center
   :alt: A new meeting card with all the details populated, and ready to save.

Send meeting to attendees
*************************

Once changes have been entered and the meeting details are correct, the meeting can be sent to the
attendees via email or text message from the expanded :guilabel:`Event Form` (what is seen when the
:guilabel:`More Options` button is clicked on in the event pop-up window).

To send the meeting via email, click the :icon:`fa-envelope` :guilabel:`Email` button next to the
list of attendees. A :guilabel:`Contact Attendees` email configurator pop-up window appears. A
pre-formatted email using the default :guilabel:`Calendar: Event Update` email template populates
the email body field. The followers of the document (job application), as well as the user who
created the meeting are added as :guilabel:`Recipients` by default. Add the applicant's email
address to the list to send the email to the applicant as well. Make any other desired changes to
the email. If an attachment is needed, click the :guilabel:`Attachments` button, navigate to the
file, then click :guilabel:`Open`. Once the email is ready to be sent, click :guilabel:`Send`.

.. image:: recruitment/email-event.png
   :align: center
   :alt: Enter the information to send the event via email.

To send the meeting via text message, click the :icon:`fa-mobile` :guilabel:`SMS` button next to
the list of attendees. A :guilabel:`Send SMS Text Message` pop-up appears.

At the top, a blue box appears if any attendees do not have valid mobile numbers, and lists how many
records are invalid. If a contact does not have a valid mobile number listed, click
:guilabel:`Close`, and edit the attendee's record, then redo these steps.

When no warning message appears, type in the message to be sent to the attendees in the
:guilabel:`Message` field. to add any emojis to the message, click the :guilabel:`Add Emoji` icon
on the right-side of the pop-up window.

Beneath the message field, the number of characters, as well as the amount of text messages required
to send the message (according to GSM7 criteria) appears. Click :guilabel:`Put In Queue` to have the
text sent later, after any other messages are scheduled, or click :guilabel:`Send Now` to send the
message immediately.

.. image:: recruitment/send-sms.png
   :align: center
   :alt: Send a text message to the attendees of the meeting.

.. note::
   Sending text messages is not a default capability with Odoo. To send text messages, credits are
   required, which need to be purchased. For more information on IAP credits and plans, refer to
   the :doc:`../essentials/in_app_purchase` documentation.

.. _recruitment/second-interview:

Second interview
----------------

After an applicant has passed the :guilabel:`First Interview` stage, they can be moved to the
:guilabel:`Second Interview` stage. To move the applicant to the next stage, drag and drop the
applicant's card to the :guilabel:`Second Interview` stage, or click on the :guilabel:`Second
Interview` stage button at the top of the individual applicant's card.

When the applicant's card moves to the :guilabel:`Second Interview` stage, there are no automatic
activities or emails configured for this stage. The recruiter can now :ref:`schedule a second
interview <recruitment/schedule-meetings>` with the applicant, following the same process as the
first interview.

.. _recruitment/contract-proposal:

Contract proposal
-----------------

When the applicant has passed the interview stages and an offer is ready to be sent, they can be
moved to the :guilabel:`Contract Proposal` stage. Drag and drop the applicant's card to the
:guilabel:`Contract Proposal` stage, or click on the :guilabel:`Contract Proposal` stage button at
the top-right of the individual applicant's card.

The next step is to send an offer to the applicant. On the applicant's card, click the
:guilabel:`Generate Offer` button. A :guilabel:`Generate a Simulation Link` pop-up appears. Most
fields are pre-populated with information from the job position. If any necessary fields are blank,
enter the relevant information in the fields.

.. note::
   Not all fields may appear on the :guilabel:`Generate a Simulation Link` pop-up. Depending on the
   localization setting for the company and the applications installed, some fields may not appear.
   For example if the *Fleet* application is not installed, any fields related to vehicles do not
   appear on the pop-up window.

Universal fields
~~~~~~~~~~~~~~~~

The following fields appear for all offers sent to applicants regardless of localization settings.

- :guilabel:`Contract Template`: the template currently being used to populate the
  :guilabel:`Generate a Simulation Link` pop-up window. To modify the template, click the
  :guilabel:`Internal link` icon to the right of the drop-down arrow. Make any changes, then click
  :guilabel:`Save & Close`. A different :guilabel:`Contract Template` can be selected using the
  drop-down menu.
- :guilabel:`Job Position`: the name of the :guilabel:`Job Position` being offered to the
  applicant. The selections available in the drop-down menu correspond to the :guilabel:`Job
  Positions` configured on the main *Recruitment* dashboard.
- :guilabel:`Job Title`: the specific name of the position being offered to the applicant.
- :guilabel:`Department`: the :guilabel:`Department` the job position falls under.
- :guilabel:`Contract Start Date`: the date the contract takes effect. The default date is the
  current date. To modify the date, click the drop-down to reveal a calendar. Use the :guilabel:`<
  (left)` and :guilabel:`> (right)` arrows on either side of the month to navigate to the desired
  month, then click on the :guilabel:`day` to select the date.
- :guilabel:`Yearly Cost`: the annual salary being offered.
- :guilabel:`Link Expiration Date`: job offers are only valid for a specific period of time. The
  default expiration date is 30 days. Modify the expiration date, if desired.

Send offer
~~~~~~~~~~

When the information is all updated, click :guilabel:`Send By Email` to send the offer to the
applicant.

If the applicant does not have an email address listed on their applicant card, a warning appears in
a red box at the bottom of the :guilabel:`Generate a Simulation Link` pop-up window, stating
:guilabel:`The applicant does not have a valid email set. The Offer Link won't be able to be
completed.` Click :guilabel:`Discard`, enter an email on the applicant's card, then click the
:guilabel:`Generate Offer` button again.

An email pop-up window loads. The default :guilabel:`Recruitment: Your Salary Package` email
template is used, and the :guilabel:`Recipients`, :guilabel:`Subject`, and email body are
pre-populated based on the email template.

If any attachments need to be added, click the :guilabel:`Attachments` button and a file explorer
window appears. Navigate to the desired file, then click :guilabel:`Open` to attach it to the email.
The attachment loads, and is listed above the :guilabel:`Attachments` button.

Once the email is ready to send, click :guilabel:`Send`.

.. note::
   To send an offer, ensure the *Sign* application is installed. This is necessary so the offer can
   be sent to the applicant by the recruiter. The applicant does not need any software installed.

.. image:: recruitment/send-offer.png
   :align: center
   :alt: Send an email to the applicant with a link to the offered salary.

Configure your package
~~~~~~~~~~~~~~~~~~~~~~

The email template includes a :guilabel:`Configure your package` button. This link takes the
applicant to a webpage where they can modify the proposed salary package, and enter their personal
information.

Once the applicant is hired, the personal information entered on the webpage is imported to their
employee record, when created.

If applicable, the applicant can modify their salary package. This option is not available for all
localizations. Depending on where the company is located, this option may not be available.

Once all the information is completed, the applicant accepts the offer by clicking the
:guilabel:`Review Contract & Sign` button to accept the contract and sign it using the *Sign*
application.

.. _recruitment/contract-signed:

Contract signed
---------------

Once the applicant has accepted the offer and signed the contract, the next step is to move the
applicant to the :guilabel:`Contract Signed` stage. To move the applicant to the next stage, drag
and drop the applicant's card to the :guilabel:`Contract Signed` stage, or click the
:guilabel:`More` button at the top of the applicant's card to reveal the :guilabel:`Contract
Signed` stage button at the top of the individual applicant's card, and click :guilabel:`Contract
Signed`.

The :guilabel:`Contract Signed` stage is folded in the Kanban view, but the card may still be
dragged and dropped into that stage.

Once the applicant's card moves to the :guilabel:`Contract Signed` stage, a green :guilabel:`HIRED`
banner appears in the top-right of the applicant's card.

.. image:: recruitment/hired.png
   :align: center
   :alt: Hired banner in the top right corner of applicant card.

Create employee
~~~~~~~~~~~~~~~

Once the applicant has been hired, the next step is to create an employee record of them. On the
applicant's card, click the :guilabel:`Create Employee` button in the top-left. An employee form
appears, and any information from the applicant's card that can be imported into the employee card
appears in the form.

Fill out the rest of the form. For detailed information on the fields, refer to the
:doc:`employees/new_employee` documentation. When done, the employee record is saved in the
*Employees* app.

.. toctree::
   :titlesonly:

   recruitment/new_job
   recruitment/refuse_applicant
