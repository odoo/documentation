=================
Refuse applicants
=================

At any point in the recruitment process, an applicant can be refused for a job position.

To refuse an applicant, start by navigating to the applicant's card in the **Recruitment** app. This
is done in one of two ways:

- Open the main *Job Positions* dashboard by navigating to :menuselection:`Recruitment app -->
  Applications --> By Job Positions`. Next, click on the desired job position card, then click on
  the individual applicant card from the *Applications* page.
- Navigate to :menuselection:`Recruitment app --> Applications --> All Applications`. In the
  :guilabel:`Applications` list, click anywhere on the desired applicant's line to open that
  specific applicant's card.

At the top of the applicant's card, there are several buttons. Click the one labeled
:guilabel:`Refuse`.

.. tip::
   An applicant can also be refused from the Kanban view of the *Applications* page: click the
   :icon:`more_vert` :guilabel:`(Dropdown menu)` icon on the applicant card, then click
   :guilabel:`Refuse`. To refuse several applicants at once, select them in the list view, then
   click :guilabel:`Refuse` at the top of the list.

.. _recruitment/refuse-reasons:

Refuse reasons
==============

*Refuse reasons* allow recruiters to document why an applicant was not a good fit, and send specific
refusal reason email templates to the applicant.

Clicking :guilabel:`Refuse` on an applicant's form makes the *Refuse Reason* pop-up window appear.
The available refuse reasons are displayed as buttons at the top of the pop-up window.

The default refuse reasons in Odoo, and their corresponding :ref:`refusal email
<recruitment/refuse_applicant/send-refusal-email>` templates, are:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Email Template
     - Refusal Reason
   * - :guilabel:`Recruitment: Refuse`
     - | :guilabel:`Does not fit the job requirements`
       | :guilabel:`Job already fulfilled`
       | :guilabel:`Duplicate`
       | :guilabel:`Spam`
   * - :guilabel:`Recruitment: Not interested anymore`
     - | :guilabel:`Refused by applicant: job fit`
       | :guilabel:`Refused by applicant: salary`

Additional refusal reasons :ref:`can be created, and existing ones can be modified (or deleted)
<recruitment/refuse_applicant/new-refuse>`.

.. _recruitment/refuse_applicant/new-refuse:

Create or modify refuse reasons
-------------------------------

To view and configure refuse reasons, navigate to :menuselection:`Recruitment app --> Configuration
--> Applications --> Refuse Reasons`. Doing so reveals the *Refuse Reasons* page, where all the
existing refusal reasons are listed.

To create a new refuse reason from the *Refuse Reasons* page, click the :guilabel:`New` button. A
blank line appears at the bottom of the list, with an empty field present in the
:guilabel:`Description` column.

Type in the new refuse reason in the field. It is recommended to enter a reason that is short and
concise, such as `Offer expired` or `Withdrew application`.

Then, click in the :guilabel:`Email Template` field to reveal a drop-down menu. Select the desired
email template from the list to be used when the new refuse reason is selected.

If a new email template is desired, type in the name for the new template in the field. Then, click
:guilabel:`Create and edit...`, and a *Create Email Template* pop-up window appears.

The :guilabel:`Template Name` field is populated with the name entered in the :guilabel:`Email
Template` column by default, but can be modified if desired. Enter the email :guilabel:`Subject` in
the corresponding field, and add the email content in the *Body* tab. To include attachments, click
the *Options* tab, and add the attachment using the :icon:`attach_file` :guilabel:`Attachments`
button. To assign an :guilabel:`Owner` for the template, select a user in the drop-down menu. Enter
a :guilabel:`Template Description` in the corresponding field.

Click :guilabel:`Save`, and Odoo returns to the *Refuse Reasons* list.

The new template appears in the new refuse reason :guilabel:`Email Template` field.

.. note::
   Pre-configured recruitment refusal email templates in Odoo use dynamic placeholders, which are
   personalized placeholders that populate data from the applicant's record in the email body.

   For example, if the applicant's name is used in a dynamic placeholder, the applicant's name
   appears anytime that dynamic placeholder appears on the email template.

   For more detailed information on email templates, refer to the
   :doc:`../../general/companies/email_template` documentation.

.. _recruitment/refuse_applicant/send-refusal-email:

Send refusal email
==================

After clicking the :guilabel:`Refuse` button on an applicant form, select a :ref:`refuse reason
<recruitment/refuse-reasons>` at the top of the *Refuse Reason* pop-up window.

The applicant's name appears in the :guilabel:`Applicant` field. If the selected refuse reason has
an email template, the :guilabel:`Send Email` toggle is enabled, and the :guilabel:`Subject` and
email body are populated according to the corresponding email template, with the applicant's
information already filled in. When refusing a single applicant, the email can be modified before
it is sent, and attachments can be added using the :icon:`attach_file` :guilabel:`Attachments`
button. To send the email later, click the :icon:`schedule` :guilabel:`(Send Later)` icon, and
select the date and time.

To send the refusal email to the applicant, click :guilabel:`Refuse` at the bottom of the *Refuse
Reason* pop-up window. The refusal email is sent to the applicant, and a red :guilabel:`Refused`
banner appears on the applicant's card in the corner. Any offer sent to the applicant that is not
yet refused is also marked as refused.

.. tip::
   If an application should be refused but an email should **not** be sent (if, for example, the
   application was spam), click the :guilabel:`Send Email` toggle to deactivate it, and click
   :guilabel:`Refuse` at the bottom of the *Refuse Reason* pop-up window.

.. note::
   When several applicants are refused at once, the email is generated from the template for each
   applicant when it is sent. In this case, the email body can only be modified by users with the
   rights to edit email templates.

.. image:: refuse_applicant/refuse.png
   :alt: The refuse reason pop-up window, with the email subject and body populated.

Refuse duplicate applicant
--------------------------

Occasionally, applicants apply multiple times, for the same or for different job positions. When
this occurs, it is possible to refuse all their applications at once, instead of individually.

Odoo considers applications as duplicates when they share the same email address, phone number, or
LinkedIn profile, and are still in progress. In this situation, a :guilabel:`Refuse Duplicate
Applications` toggle appears on the *Refuse Reason* pop-up window. Enable
the toggle, and a :guilabel:`Duplicate Applications` field appears beneath it, listing the
applicant's name for each duplicate application in the system. Remove any application that should
not be refused from this field.

To refuse *all* the listed applications for that applicant, click the :guilabel:`Refuse` button.

The applicant is only sent one email, all the listed applications are marked as *Refused*, and a
note linking to the original application is logged in the chatter of each duplicate.

.. image:: refuse_applicant/duplicates.png
   :alt: Duplicate applications refused in one email.

View refused applicants
=======================

After refusal, the applicant's card is hidden by default. However, it is still possible to view
applicants who have been refused :ref:`by job position <recruitment/refuse_applicant/job-refused>`,
or view :ref:`all refused applicants <recruitment/refuse_applicant/all-refused>`.

.. _recruitment/refuse_applicant/job-refused:

By job position
---------------

To view the refused applicants for a specific job position, navigate to :menuselection:`Recruitment
app --> Applications --> By Job Positions`, then click the desired job position Kanban card.

On the *Applications* page, click the search bar, then click :guilabel:`Refused` in the
:icon:`filter_alt_f` :guilabel:`Filters` column.

All applicants that have been refused for the job position appear in the stage they were in when
they were refused, with a red :guilabel:`Refused` banner, and all other applicants are hidden.

.. image:: refuse_applicant/refused-by-job.png
   :alt: All applicants refused for a job position.

.. _recruitment/refuse_applicant/all-refused:

All refused applicants
----------------------

To view all refused applicants across all job positions, navigate to :menuselection:`Recruitment app
--> Applications --> All Applications`. Every applicant record is displayed in a default list view.

Click the search bar, then click :guilabel:`Refused` in the :icon:`filter_alt_f` :guilabel:`Filters`
column.

All applicants that have been refused appear, with the text in red. By default, the applicant's
:guilabel:`Name`, :guilabel:`Matching Score`, :guilabel:`Matching Factors`, :guilabel:`Missing
Factors`, :guilabel:`Recruiter`, and :guilabel:`Availability` are listed. Click the
:icon:`tune` :guilabel:`(Optional columns)` icon to display other columns, such as the
:guilabel:`Job Position`, :guilabel:`Stage`, or :guilabel:`Refuse Reason`.

.. image:: refuse_applicant/refused-list.png
   :alt: All applicants refused for all job positions.

.. _recruitment/refuse_applicant/restore:

Restore a refused applicant
===========================

To reconsider a refused applicant, open the applicant's form, then click :guilabel:`Restore`. The
refuse reason is removed, and the applicant is moved back to the first stage of the job position's
pipeline.
