==================
Add new applicants
==================

Once an applicant submits an application, either using the online application, or emailing a job
position alias, an applicant card is automatically created in the **Recruitment** application.

However, in some instances, applicants may need to be created manually in the database. This could
be necessary if, for example, a company accepts paper applications in the mail, or is meeting
prospective applicants at an in-person job fair.

To view current applicants, navigate to the :menuselection:`Recruitment` app, then click the desired
job position card. Doing so reveals the :guilabel:`Applications` page, which displays all applicants
for that specific role, in a default Kanban view, organized by stage.

Add new applicants from a job position's :guilabel:`Applications` page by using either: the
:ref:`quick add <recruitment/quick-add-applicant>` button, or the :ref:`New
<recruitment/create-new-applicant>` button.

.. _recruitment/quick-add-applicant:

Quick add
=========

On the :guilabel:`Applications` page, click the quick add button, represented by a small
:icon:`fa-plus` :guilabel:`(plus)` icon in the top-right corner of each stage, to add a new
applicant to that stage.

Enter the following information on the card:

- :guilabel:`Candidate`: Select the applicant from the drop-down menu. Displays as the card title in
  the Kanban view of the :guilabel:`Applications` page. If the candidate is *not* in the system
  (from a previous application, or is a current employee), after entering the applicant's name,
  click :guilabel:`Create "(candidate)"`.
- :guilabel:`Job Position`: The current job position populates this field. If needed, the job
  position can be changed by selecting a different position from the drop-down menu. If a different
  job position is selected, after the card is created, the card appears on the
  :guilabel:`Applications` page for that newly-selected job position.

After the information is entered, click :guilabel:`Add`. The applicant appears in the list, and a
new blank applicant card appears.

If preferred, after entering the :guilabel:`Candidate` in the Kanban card that appears, click
:guilabel:`Edit`, and a detailed applicant form loads. Refer to the :ref:`New applicant form
<recruitment/applicant-details>` section for details about filling out the form.

When doing a quick add, clicking away from an empty card, or clicking the :icon:`fa-trash-o`
(:guilabel:`trash`) icon, discards the applicant.

.. image:: add-new-applicants/quick-add.png
   :alt: All the fields for a new applicant form entered when using the Quick Add option.

.. _recruitment/create-new-applicant:

New applicant form
==================

On the :guilabel:`Applications` page, click the :guilabel:`New` button in the top-left corner, and a
blank application form loads.

On the new application form, the :guilabel:`Job Position` and :guilabel:`Recruiter` fields are
populated according to the job position configurations, by default. Additionally, the
:guilabel:`Department` and :guilabel:`Company` fields in the :guilabel:`Details` tab may also be
populated, if those details are configured on the job position.

Complete the fields in the following sections on the new applicant form.

.. note::
   Depending on installed applications and configurations, some fields may **not** be displayed.

.. _recruitment/applicant-details:

Candidate section
-----------------

- :guilabel:`Evaluation`: Represents a rating for the applicant: one star (:icon:`fa-star`
  :icon:`fa-star-o` :icon:`fa-star-o`) is :guilabel:`Good`, two stars (:icon:`fa-star`
  :icon:`fa-star` :icon:`fa-star-o`) is :guilabel:`Very Good`, and three stars (:icon:`fa-star`
  :icon:`fa-star` :icon:`fa-star`)is :guilabel:`Excellent.`
- :guilabel:`Candidate`: Enter the applicant's name. This field is displayed as the card title in
  the Kanban view of the :guilabel:`Applications` page. This is the **only** required field on the
  form.
- :guilabel:`Email`: Enter the applicant's email address.
- :guilabel:`Phone`: Enter the applicant's phone number.
- :guilabel:`LinkedIn Profile`: Enter the web address for the applicant's personal profile on
  LinkedIn.
- :guilabel:`Job Position`: Select the job position the applicant is applying for. This field is
  populated by default, but can be changed if necessary.
- :guilabel:`Recruiter`: Select the user responsible for the entire recruitment process for the job
  position.
- :guilabel:`Interviewers`: Using the drop-down menu, select the people to conduct the interviews.
  The selected people **must** have either *recruiter* or *officer* rights configured for the
  **Recruitment** application to appear in the drop-down list. Refer to the :doc:`Access rights
  <../../general/users/access_rights>` documentation for more information.
- :guilabel:`Tags`: Select as many tags as desired from the drop-down menu. To add a tag that does
  not exist, type in the tag name, then click :guilabel:`Create "new tag"` from the resulting
  drop-down menu.

.. image:: add-new-applicants/new-applicant.png
   :alt: All the fields of the Candidate section for a new applicant form entered.

Notes tab
---------

Enter any notes regarding the applicant in this tab. These notes are only visible internally, with
users that have the proper access rights.

Details tab
-----------

The :guilabel:`Details` tab houses various information regarding the applicant and the job position.

Applicant section
~~~~~~~~~~~~~~~~~

Enter the following information in the respective fields:

- :guilabel:`Degree`: Select the applicant's highest level of education from the drop-down menu.
  Options are: :guilabel:`Graduate`, :guilabel:`Bachelor Degree`, :guilabel:`Master Degree`, or
  :guilabel:`Doctoral Degree`. The :guilabel:`Graduate` option indicates the applicant graduated at
  the highest level of school before a Bachelor's degree, such as a high school or secondary school
  diploma, depending on the country.
- :guilabel:`Availability`: Select the available start date for the applicant. To select a date,
  click on the field to reveal a popover calendar. Use the :icon:`fa-angle-left` :guilabel:`(left)`
  and :icon:`fa-angle-right` :guilabel:`(right)` arrows on either side of the month to navigate to
  the desired month, then click the desired date. Leaving this field blank indicates the applicant
  can start immediately.

Salary package section
~~~~~~~~~~~~~~~~~~~~~~

Configure both the offered and proposed salary and benefits in this section. Fill out the following
fields:

- :guilabel:`Expected`: Enter the amount the applicant is requesting in this field. The number
  should be in a `XX,XXX.XX` format. The currency is determined by the localization setting for the
  company.
- :guilabel:`Other Benefits`: If any benefits are requested by the applicant, enter them in the
  blank :guilabel:`Other Benefits` text field to the right of the :guilabel:`Expected` salary field.
  The benefits should be short and descriptive, such as `4 Weeks Vacation` or `Dental Plan`.
- :guilabel:`Proposed`: Enter the amount to be offered to the applicant for the role in this field.
  The number should be in a `XX,XXX.XX` format.
- :guilabel:`Other Benefits`: If any benefits are offered to the applicant, enter them in the
  :guilabel:`Other Benefits` text field to the right of the :guilabel:`Proposed` field. The benefits
  should be short and descriptive, such as `Unlimited Sick Time` or `Health Insurance`.

Job section
~~~~~~~~~~~

The following fields are pre-populated when creating a new applicant, as long as these fields are
specified on the job position form. Editing the fields is possible, if desired.

- :guilabel:`Department`: select the department the job position falls under from the drop-down
  menu.
- :guilabel:`Company`: select the company the job position is for using the drop-down menu. This
  field **only** appears when in a multi-company database.

Sourcing section
~~~~~~~~~~~~~~~~

This section houses the details regarding the way the applicant applied for the job position. This
information is necessary for :doc:`employee referrals <../referrals>`, and allows for reporting on
the channels with the highest applicant generation.

- :guilabel:`Source`: Using the drop-down menu, select where the applicant learned about the job
  position. The following options come preconfigured in Odoo: :guilabel:`Search engine`,
  :guilabel:`Lead Recall`, :guilabel:`Newsletter`, :guilabel:`Facebook`, :guilabel:`X`,
  :guilabel:`LinkedIn`, :guilabel:`Monster`, :guilabel:`Glassdoor`, and :guilabel:`Craigslist`. To
  add a new :guilabel:`Source`, type in the source, then click :guilabel:`Create "(new source)"`.
- :guilabel:`Medium`: Using the drop-down menu, specify how the job listing was found. The
  preconfigured options are: :guilabel:`Banner`, :guilabel:`Direct`, :guilabel:`Email`,
  :guilabel:`Facebook`, :guilabel:`Google Adwords`, :guilabel:`LinkedIn`, :guilabel:`Phone`,
  :guilabel:`SMS`, :guilabel:`Television`, :guilabel:`Website`, :guilabel:`X` (formerly "Twitter"),
  or :guilabel:`[Push Notifications] (website name)`. To add a new :guilabel:`Medium`, type in the
  medium, then click :guilabel:`Create "(new medium)"`.
- :guilabel:`Referred By User`: If referral points are to be earned for this job position in the
  **Referrals** application, select the user who referred the applicant from the drop-down menu. The
  **Referrals** application **must** be installed for this field to appear.

.. image:: add-new-applicants/details-tab.png
   :alt: All the fields of the Details tab for a new applicant form entered.

Skills tab
----------

Skills can be added to the applicant's card. For details on adding skills, refer to the :ref:`Create
new employees <employees/skills>` document.
