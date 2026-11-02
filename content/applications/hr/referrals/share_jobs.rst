===================
Share job positions
===================

In Odoo **Referrals**, users can earn referral points by sharing job positions with potential
applicants. Individual job positions can be shared in several ways: via :ref:`email
<referrals/email>`, :ref:`SMS <referrals/sms>`, :ref:`WhatsApp <referrals/whatsapp>`, a
:ref:`tracking link <referrals/link>`, and various :ref:`social media platforms <referrals/social>`.

Additionally, *all* job positions can be :ref:`shared via email <referrals/email-jobs>`, instead of
sharing individual job positions, and recruiters can :ref:`promote a job position
<referrals/promote>` to all employees.

.. note::
   Sharing jobs can **only** occur after :ref:`onboarding <referrals/onboarding>` slides have been
   viewed or skipped.

.. _referrals/view-jobs:

View all jobs
=============

To see all job positions that are actively recruiting, click the :guilabel:`View Jobs` button on
the main **Referrals** app dashboard. This presents all job positions, with each job presented with
its own card.

.. image:: share_jobs/jobs.png
   :alt: The View Jobs screen, displaying all current open job positions, with the Share menu of a
         job position open.

Each job position card contains the following information:

- The title of the job position. This information is taken from the :guilabel:`Job Position` field
  of the job form.
- The total :doc:`points <points>` a user earns when the referred applicant is hired for the
  position.
- The number of :guilabel:`Open Positions` being recruited. This information is taken from the
  :guilabel:`Target` field of the job form.
- The job description detailing the job position. This information is taken from the
  :guilabel:`Summary` tab of the job form.

.. note::
   Only published job positions are visible in the **Referrals** app. To check which job positions
   are published or not, refer to the :doc:`../recruitment/new_job` documentation.

Share an individual job
=======================

To share an individual job position, first click the :guilabel:`View Jobs` button on the main
**Referrals** app dashboard. This presents a list of all currently published jobs. From this page,
share a job position using one of the methods below. Each method uses a tracking link specific to
the employee sharing the job position: the applicants who apply through this link are recorded as
referred by that employee, who then earns the :doc:`referral points <points>`.

.. _referrals/email:

Send email
----------

To share an individual job position via email, click the :icon:`send_f` :guilabel:`Send`
button on the specific job position card, then click :icon:`mail` :guilabel:`Send by Email`. A
:guilabel:`Send Job Opportunity by Mail` pop-up window appears. Enter the recipient's email address
in the :guilabel:`Email` field.

The :guilabel:`Subject` and :guilabel:`Body` are populated using a default template. The
:guilabel:`Subject` `Job for you` is present, by default, but can be modified, if desired.

The specific title of the job position populates the email body. The `See Job opportunity` text in
the email body is an individualized tracking link to the specific job position listed on the
website.

When the prospective employee receives the email, the link sends them to the job position page,
where they can apply for the position, and the person who referred them is tracked in the
**Referrals** app.

If desired, add any text or closing salutation to the email body. When all edits have been made,
click :guilabel:`Send Mail` to send the email, or click :guilabel:`Discard` to close the pop-up
window.

.. _referrals/sms:

Send SMS
--------

To share an individual job position with someone via SMS (text message), click the
:icon:`send_f` :guilabel:`Send` button on the specific job position card, then click
:icon:`smartphone` :guilabel:`Send by SMS`. A :guilabel:`Send Job Opportunity by SMS` pop-up window
appears. Enter the recipient's mobile number in the :guilabel:`Recipient` field.

Modify the prepopulated message, if desired, then click the :guilabel:`Send SMS` button to send the
message, or click :guilabel:`Discard` to close the pop-up window and cancel the message.

.. note::
   Sending text messages is **not** a default capability with Odoo. To send text messages, credits
   are required, which need to be purchased. For more information on IAP credits and plans, refer to
   the :doc:`../../essentials/in_app_purchase` documentation.

.. _referrals/whatsapp:

Send WhatsApp
-------------

When the **WhatsApp** app is installed and configured, job positions can also be shared via
WhatsApp. Click the :icon:`send_f` :guilabel:`Send` button on the job position card, then click
:icon:`oi_whatsapp` :guilabel:`Send by WhatsApp`. A :guilabel:`Share Job By WhatsApp` pop-up window
appears.

Select the WhatsApp :guilabel:`Template` to use, and enter the recipient's phone number. The
**Referrals** app provides a *Referral Sharing* template, containing the tracking link to the job
position; like any WhatsApp template, it must be approved by Meta before it can be used. Then, click
:guilabel:`Send Message` to send the message, or click :guilabel:`Close` to cancel.

.. note::
   For more information on configuring WhatsApp, refer to the :doc:`../../productivity/whatsapp`
   documentation.

Job page
--------

To see all the details for a job position, click the :icon:`public` :guilabel:`Job Page` button on
the specific card. Doing so opens the job position webpage. This is what an applicant sees before
applying for a position.

.. _referrals/link:

Copy link
---------

To share the job position with a customized tracking link, click the :icon:`family_history`
:guilabel:`Share` button on the job position card, then click :icon:`assignment` :guilabel:`Copy
Link` to copy the link to the clipboard.

Next, share the link with the prospective employee.

.. _referrals/social:

Share a job via social media
----------------------------

To share a job position on social media (:ref:`Facebook <referrals/facebook>`, :ref:`X
<referrals/x>`, or :ref:`LinkedIn <referrals/linkedin>`), click the :icon:`family_history`
:guilabel:`Share` button on the job position card to reveal these options. The number of times a
shared link is clicked appears next to the corresponding platform in this menu.

.. _referrals/facebook:

Facebook
~~~~~~~~

To share the job position using Facebook, click :icon:`family_history` :guilabel:`Share`, then
:icon:`oi_facebook` :guilabel:`Share on Facebook`.

If the user is already logged in to Facebook, a new tab opens with a draft post containing the
tracking link. Otherwise, Facebook prompts the user to log in.

Type in any additional information to add to the post, then share the job position using the
available options in Facebook.

.. _referrals/x:

X (formerly Twitter)
~~~~~~~~~~~~~~~~~~~~

To share a job position on X, click :icon:`family_history` :guilabel:`Share`, then
:icon:`oi_x` :guilabel:`Share on X`.

If the user is already signed in to X, a new tab opens with a draft post containing the tracking
link. Otherwise, X prompts the user to sign in.

Type in any additional information, or make any edits to the default message, then share using the
available options in X.

.. _referrals/linkedin:

LinkedIn
~~~~~~~~

To share a job position on LinkedIn, click :icon:`family_history` :guilabel:`Share`, then
:icon:`oi_linkedin` :guilabel:`Share on LinkedIn`.

If the user is already logged in to LinkedIn, a new tab opens with the tracking link to the job
position. Otherwise, LinkedIn prompts the user to log in.

The job position can be shared either in a public post, or in a private message to an individual (or
group of individuals).

Type in any additional information, or make any edits to the message or post, then share using the
available options in LinkedIn.

.. _referrals/email-jobs:

Share job list
==============

Another way to share job opportunities is to share the entire current list of open job positions,
instead of one job position at a time. To do this, navigate to the :menuselection:`Referrals` main
dashboard, then click the :guilabel:`Email a friend` button at the bottom of the screen. A
:guilabel:`Send Job Opportunity by Mail` pop-up window appears.

Enter the email address in the :guilabel:`Email` field. The email can be sent to multiple recipients
by separating each email address with a comma followed by a single space. The :guilabel:`Subject` is
preconfigured with :guilabel:`Job for you`, but can be edited. The email :guilabel:`Body` is also
populated with preconfigured text.

The link to all active job positions is a tracking link to a complete list of all job positions
currently being recruited for. Add any additional text and make any edits to the message body, if
necessary. Then, click :guilabel:`Send Mail` to send the email. This sends the message, and closes
the window.

.. _referrals/promote:

Promote a job position
======================

To invite employees to refer people for a specific job position, go to :menuselection:`Recruitment
app --> Applications --> By Job Positions`, click :guilabel:`Configure` on the job position card,
then click :guilabel:`Promote`. The :guilabel:`Promote` button appears only for published job
positions.

In the :guilabel:`Promotion Campaign` pop-up window that appears, select the employees to contact in
the :guilabel:`To` field. Leave the field empty to send the email to every employee with a database
user.
Modify the subject and body of the email if desired, then click :guilabel:`Send`. A copy of the
email is logged in the chatter of the job position.

.. _referrals/link-tracker:

Track referral links
====================

To view the performance of the referral links, navigate to :menuselection:`Referrals app -->
Reporting --> Link Tracker`. Users with the :guilabel:`User: Referral only` :ref:`access rights
<referrals/access-rights>` see the links they created, with the number of clicks on each link. Users
with the :guilabel:`Administrator` access rights see the referral links of all users, grouped by
campaign.
