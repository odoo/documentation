=============
Job positions
=============

In Odoo's **Recruitment** application, all job positions are shown on the default *Job Positions*
dashboard, which includes both active and inactive positions.

Each job position is shown on an individual line, with the number of new applications,
applications in progress, and employees to recruit. If the job position is published on the
website, and applicants can apply, a green :guilabel:`Published` banner appears in the top-right
corner of the card. If the publication is planned for a later date, a :guilabel:`Scheduled` banner
appears instead.

View submitted applications by clicking anywhere on a job position card, except the
:icon:`fa-clock-o` :guilabel:`(Activities)` icon, the :guilabel:`Job Page` button, or the
:guilabel:`Configure` button. Click the :icon:`fa-star-o` :guilabel:`(Favorite)` icon next to the
job position name to display it at the top of the dashboard.

.. image:: new_job/jobs.png
   :alt: Main dashboard view of Recruitment app showing all job positions.

.. _recruitment/new_job/create-job-position:

Create a job position
=====================

To create a job position from the main dashboard in the **Recruitment** app, click the
:guilabel:`New` button in the top-left corner, and a *Create a Job Position* pop-up window appears.

First, enter the name of the :guilabel:`Job Position` (such as `Sales Manager`, `Mechanical
Engineer`, etc.) in the corresponding field.

Next, enter an :guilabel:`Application email` by typing in the first half of the email address in the
first field, then select the second half of the email using the drop-down menu in the second field.
Applicants can send a resumé to this specific email address, and Odoo creates an application for
them automatically.

When complete, click the :guilabel:`Create` button to save the entry, or the :guilabel:`Discard`
button to delete it.

.. image:: new_job/job-title.png
   :alt: Create a new job position.

.. note::
   Once the :guilabel:`Create` button is clicked, the *Applications* dashboard for the newly created
   job loads. The *Applications* dashboard is empty, as there are no applicants. Click the
   :guilabel:`Job Positions` breadcrumb to return to the main **Recruitment** app dashboard.

.. _recruitment/new_job/configure-job-position:

Configure a job position
------------------------

Once the job position has been :ref:`created <recruitment/new_job/create-job-position>`, the details
must be configured. On the main **Recruitment** app dashboard, click the :guilabel:`Configure`
button at the end of the Kanban card, and the detailed job position form loads.

Configure the *Details*, *Summary*, *Application Info*, *Trackers*, and *Job Boards* tabs, as
described below.

The following buttons appear at the top of the form:

- :guilabel:`Matching Talents`: Create applications for this job position from existing
  :doc:`talents <talent_pools>`.
- :guilabel:`Promote`: Send an email to employees, inviting them to refer people for this job
  position. This button only appears when the **Referrals** app is installed, and the job position
  is published.

The smart buttons give access to the job position's :guilabel:`Applications`,
:guilabel:`Documents`, current :guilabel:`Employees`, and to the job page on the website
(:guilabel:`Go to Website`).

Details tab
~~~~~~~~~~~

All the basic details about the job position are housed in the *Details* tab.

None of the fields are required, but it is important to configure and populate the
:guilabel:`Department`, :guilabel:`Job Location`, and :guilabel:`Employee Type` fields, as they are
all visible to prospective applicants on the website.

.. note::
   Some fields listed below may not appear depending on the installed apps and database
   configuration.

Enter the information in the following sections.

.. _recruitment/new_job/hiring-process:

Hiring process section
**********************

- :guilabel:`Recruiter`: Select the person responsible for recruiting this role. Only employees
  whose user has access rights to the **Recruitment** app can be selected.
- :guilabel:`Published`: When the job position is ready to be published on the website, click the
  :guilabel:`Published` toggle to publish the job position. The toggle changes to green, indicating
  the listing is live on the website. To publish the job position automatically at a later date,
  leave the toggle disabled, and select the date and time in the :guilabel:`Publish On` field next
  to it. A :guilabel:`Scheduled` banner then appears on the job position card. Click
  :guilabel:`Unschedule` to cancel the planned publication.
- :guilabel:`Target`: Enter the number of employees to be hired for this position.
- :guilabel:`Interviewers`: Select who should perform the interviews. Multiple people can be
  selected. Interviewers can access the applications of this job position.
- :guilabel:`Interview Form`: Select an interview form that applicants fill out during the
  recruitment process. This field only appears if the :ref:`Send Interview Survey
  <recruitment/settings>` setting is enabled.
- :guilabel:`Email Alias`: Enter an email address to which applicants can send a resumé. Once
  emailed, Odoo automatically creates an application for them. If an email was entered when creating
  the job position, this field is populated.
- :guilabel:`Tags`: Select tags to categorize the job position, such as `Multi-Site` or
  `Cross-Departmental`. Job tags are managed in :menuselection:`Recruitment app --> Configuration -->
  Job Positions --> Job Tags`.
- :guilabel:`Website`: Select the website the job is published on. Leave the field empty to publish
  the job position on all websites.

.. _recruitment/new_job/job-posting:

Job section
***********

- :guilabel:`Company`: Select the company the job is for. This field only appears if using a
  multi-company database.
- :guilabel:`Department`: Select the relevant department for the job position. This is visible on
  the website.
- :guilabel:`Salary Range`: Enter both the minimum and maximum salaries offered for the position in
  the two fields. Then, set the last field to the time-frame for the salary range. The available
  options are :guilabel:`Hour`, :guilabel:`Day`, :guilabel:`Week`, :guilabel:`Bi-Week`,
  :guilabel:`Month`, and :guilabel:`Year`.
- :guilabel:`Job Location`: Select the physical address for the job. Only the addresses of the
  company are available. If the job position is remote, leave this field blank. This is visible on
  the website.
- :guilabel:`Expected Degree`: Select the level of education desired, using the drop-down menu.
  Degrees are managed in :menuselection:`Recruitment app --> Configuration --> Applications -->
  Degrees`.
- :guilabel:`Expected Skills`: Select all the desired skills for the job position in this field. To
  add a skill, click the :icon:`fa-plus` :guilabel:`(plus sign)` icon, and select the skill and
  skill level for each skill added. The skills presented are :ref:`configured in the Employees app
  <employees/skills>`. The expected skills and degree are used to compute the matching score of
  the applicants.

Contract section
****************

- :guilabel:`Employee Type`: Select the type of employee to be hired, such as :guilabel:`Employee`,
  :guilabel:`Student`, :guilabel:`Intern`, or :guilabel:`Interim`. Depending on the installed
  localization, other options may be available. This is visible on the website. Employee types are
  managed in :menuselection:`Recruitment app --> Configuration --> Job Positions --> Employee
  Types`.
- :guilabel:`Working Schedule`: Select the working schedule for the job position.
- :guilabel:`Contract Template`: Select the contract template used to :doc:`generate offers
  <offer_job_positions>` for this job position. This field only appears when the *Salary
  Configurator* module is installed.

To add custom fields to the job position, click the :icon:`fa-ellipsis-v` :guilabel:`(Actions)`
icon next to the job position name, then click :guilabel:`Edit Properties`.

.. image:: new_job/details.png
   :alt: The Details tab of a job position form.

Summary tab
~~~~~~~~~~~

Enter the complete job description in the *Summary* tab. This description is visible on the website,
and should convey any relevant information for the position that is **not** covered or explained in
the *Details* tab. This may include information such as specific tasks the job requires, any
required past experience, or uncommon benefits or compensation.

.. _recruitment/new_job/application_info:

Application info tab
~~~~~~~~~~~~~~~~~~~~

The *Process Details* section of the *Application Info* tab contains information that is displayed
online for the job position. This informs the applicants of the timeline and steps for the
recruitment process, so they know when to expect a reply.

The following fields are populated by default, but can be modified to suit the recruitment timeline
of the business:

- :guilabel:`Time to Answer`: The number of days before the applicant is contacted. :guilabel:`2
  open days` populates this field by default.
- :guilabel:`Process`: The various stages the applicant goes through during the recruitment process.
  By default, two process steps are visible: :guilabel:`1 Phone Call` and :guilabel:`1 Onsite
  Interview`.
- :guilabel:`Days to get an Offer`: The number of days before the applicant should expect an offer
  after the recruitment process has ended. The default is :guilabel:`4 Days after Interview`.

.. image:: new_job/app-info.png
   :alt: Enter job information details in the recruitment tab.

.. note::
   The *Process Details* section of the *Application Info* tab is a text field. All answers are
   typed in rather than selected from a drop-down menu. The text is displayed on the website exactly
   as it appears in this tab.

Trackers tab
~~~~~~~~~~~~

When reaching potential applicants, recruiters often share the job position across multiple
websites, including social media sites, job board sites, and third-party hosting sites. The
*Trackers* tab provides a centralized place for recruiters to keep a record of all the places a
tracking link has been shared. This allows recruiters to determine which sites were the most
successful in terms of receiving applications from them.

.. tip::
   Before creating trackers, first :ref:`publish <recruitment/post-job/website>` the job on the
   company website.

To add a tracking link, click on the *Trackers* tab, click :guilabel:`Add a line`, and a blank line
appears at the top of the list. Configure the following fields for each tracker:

- :guilabel:`Campaign`: Select the :ref:`campaign <marketing/social-campaigns/new-campaign>` the job
  position falls under using the drop-down menu.
- :guilabel:`Medium`: Select the method used to share the tracker, such as :guilabel:`Banner`,
  :guilabel:`Email`, or :guilabel:`Social Media`.
- :guilabel:`Tracker URL`: Once the line is saved, Odoo automatically creates the corresponding
  tracking link. Click :guilabel:`URL` :icon:`fa-clipboard` to copy the link to the clipboard, then
  share the link where appropriate.
- :guilabel:`Source`: Enter where the tracker is used, such as `LinkedIn` or `Job fair`. The source
  cannot be modified once the line is saved.
- :guilabel:`Email`: If an alias domain is configured, Odoo automatically creates a dedicated email
  address for the tracker. Click :guilabel:`Email` :icon:`fa-clipboard` to copy the email address to
  the clipboard, then share the email where appropriate.

Applications received through a tracker link or email are tagged with the corresponding source,
medium, and campaign, which are used in the :doc:`source_analysis` report.

.. image:: new_job/trackers.png
   :alt: The list of all tracked links for the job position.

Job boards tab
~~~~~~~~~~~~~~

The *Job Boards* tab is automatically populated as the job position is :ref:`shared on a job board
<recruitment/post-job/boards>`. As each listing is created, its job board, start and end dates,
apply method, and status appear in this tab.

.. seealso::
   :doc:`post_job`
