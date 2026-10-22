:show-content:

===============
Email Marketing
===============

The Odoo *Email Marketing* app provides drag-and-drop design tools, pre-built templates, and other
interactive features to create engaging email campaigns. The *Email Marketing* app also provides
detailed reporting metrics to track the campaigns' overall effectiveness.

.. seealso::
   - `Odoo Tutorial: Email Marketing
     <https://www.odoo.com/slides/slide/email-marketing-essentials-989?fullscreen=1>`_
   - `Magic Sheet - Email Marketing strategy [PDF]
     <https://drive.google.com/drive/folders/1TqZfYCF-56yhUSDVyfFjkmB23RWaRBP7>`_

.. cards::

   .. card:: Mailing lists
      :target: email_marketing/mailing_lists

      Silo contacts into specific mailing lists.

   .. card:: Manage unsubscriptions (Blacklist)
      :target: email_marketing/unsubscriptions

      Allow recipients to unsubscribe and blacklist from future mailings.

   .. card:: Lost leads reactivation email
      :target: email_marketing/lost_leads_email

      Target lost leads with Email Marketing.

   .. card:: Analyze Metrics
      :target: email_marketing/analyze_metrics

      Analyzing campaign metrics.

Email Marketing dashboard
=========================

After installing the application, open the **Email Marketing** app. This opens a dashboard of
mailings with different view and filter options.

The following view options are available:

.. tabs::

   .. tab:: List

      The :icon:`oi-view-list` :guilabel:`(List)` view is the default view of the
      :guilabel:`Mailings` dashboard, displaying detailed information about each individual mailing.

      By default, information about mailings are shown in the following columns:

      - :guilabel:`Date`: The date the email was sent.
      - :guilabel:`Subject`: The subject of the email.
      - :guilabel:`Responsible`: The user who created the email, or the user assigned to the email.
      - :guilabel:`Sent`: How many times the email has been sent.
      - :guilabel:`Delivered (%)`: Percentage of sent emails that have been successfully delivered.
      - :guilabel:`Opened (%)`: Percentage of sent emails that have been opened by the recipients.
      - :guilabel:`Clicked (%)`: Percentage of sent emails that have been clicked by the recipients.
      - :guilabel:`Replied (%)`: Percentage of sent emails that have been replied to by the
        recipients.
      - :guilabel:`Status`: The status of the email (:guilabel:`Draft`, :guilabel:`In Queue`, or
        :guilabel:`Sent`).

      To add or remove columns, click the :guilabel:`Additional Options (two horizontal lines with
      dots)` icon at the end of the columns, then select the additional options from the drop-down
      menu.

   .. tab:: Kanban

      The :icon:`oi-view-kanban` :guilabel:`(inverted bar graph)` view provides a quick overview of
      mailings, categorized into various stages according to their corresponding status.

      By default, mailings are categorized into the following stages:

      - :guilabel:`Draft`: The email is still being written/created.
      - :guilabel:`In Queue`: The email is scheduled to be sent at a later date.
      - :guilabel:`Sending`: The email is currently being sent to its recipients.
      - :guilabel:`Sent`: The email has already been sent to its recipients.

      Each card on the :guilabel:`Mailings` dashboard provides key information about the
      corresponding email. Click the upper corner of the card set a color, :guilabel:`Delete` the
      email, or :guilabel:`Archive` the message for future use.

      .. image:: email_marketing/three-dot-dropdown.png
         :alt: View of the three-dot drop-down menu on the Odoo Email Marketing dashboard.

   .. tab:: Calendar

      The :guilabel:`(calendar)` view displays each mailing as a clickable entry on the date it was
      sent or scheduled.

      In the side panel, filter the results by :guilabel:`Responsible` user and/or mailing
      :guilabel:`Status` via the checkboxes.

      Click any of the entries to :guilabel:`View` the mailing in more detail or :guilabel:`Delete`
      it.

Search options
--------------

To filter or organize the records shown in a view, click the search bar and select the following
filtering or grouping options.

.. tabs::

   .. tab:: Filters

      Mailings can be filtered using the following options:

      - :guilabel:`My Mailings`: Filter by the current user's mailings.
      - :guilabel:`Sent Date`: Filter by the date sent. Click the option to filter by mailings sent
        during a specific time period (e.g., `Today` or `Q4 2026`) or on a :guilabel:`Custom
        Date...`.
      - :guilabel:`A/B Tests`: Filter by mailings with A/B testing enabled.
      - :guilabel:`A/B Tests to review`: Filter by A/B mailings still in testing progress.
      - :guilabel:`Archived`: Filter by archived mailings.
      - :guilabel:`Custom Filter...`: Filter by a :ref:`custom filter <search/custom-filters>`.

   .. tab:: Group By

      Mailings can be grouped by the following options:

      - :guilabel:`Status`: Group mailings by their status.
      - :guilabel:`Sent By`: Group mailings by the user who sent them.
      - :guilabel:`Mailing List`: Group mailings by their associated mailing list.
      - :guilabel:`Sent Period`: Group mailings by the time period during which they were sent.
        Click the option to group by mailings sent during a specific time period (e.g., `Year`).
      - :guilabel:`Custom Group`: Group by a :ref:`custom group <search/group>`.


   .. tab:: Favorites

      This section provides the opportunity to save custom filters and/or groupings for future use.
      To utilize this section, click the :guilabel:`Save current search` field, which reveals
      additional fields.

      To save the current selected filters and groupings, click :guilabel:`Save search`. Enter a
      name for the search. Optionally, toggle the :icon:`fa-toggle-on` :guilabel:`Default filter`
      button to set the search as the default.

      Finally, click :guilabel:`Save` to save the filter or :guilabel:`Edit` to modify the search
      settings.

.. _email_marketing/create_email:

Create an email
===============

To create an email from the *Mailings* dashboard, click the :guilabel:`New` button. A blank email
form loads.

Begin by specifying the subject and recipients. Beneath that, the :ref:`Mail Body
<email_marketing/mail_body>` and :ref:`Settings <email_marketing/settings_tab>` tabs provide
additional configurations to customize the mailing.

Subject and recipients
----------------------

Start by entering the :guilabel:`Subject` of the mailing.

Then, select one of the following :guilabel:`Recipients`:

- :guilabel:`Applicant`: Send the mailing to applicants.
- :guilabel:`Contact`: Send the mailing to contacts.
- :guilabel:`Employee`: Send the mailing to employees.
- :guilabel:`Event Registration`: Send the mailing to event attendees.
- :guilabel:`Event Track`: Send the mailing to event track speakers.
- :guilabel:`Lead`: Send the mailing to leads.
- :guilabel:`Mailing Contact`: Send the mailing to mailing contacts. These contacts can be accessed
  by navigating to :menuselection:`Email Marketing app --> Mailing Lists --> Mailing List Contacts`.
- :guilabel:`Mailing List`: Send the mailing to the recipients of the selected :guilabel:`Mailing
  Lists`.
- :guilabel:`Point of Sale Order`: Send the mailing to vendors on point of sale orders.
- :guilabel:`Purchase Order`: Send the mailing to vendors on purchase orders.
- :guilabel:`Sales Order`: ties specifically to the *Sales* app, and focuses on a specific sales
  orders in the database.

.. note::
   With the default :guilabel:`Mailing List` option selected, a specific mailing list **must** be
   chosen from the adjacent :guilabel:`Select mailing lists` field drop-down menu.

   Those options (excluding the default :guilabel:`Mailing List`) provide the option to create a
   more specified recipient filter in the :guilabel:`Domain` field. Optionally, :guilabel:`Dynamic
   Lists` can be selected to automatically populate the domain.

.. _email_marketing/mail_body:

Mail Body tab
-------------

In the *Mail Body* tab, select a message template. The template can be modified using the sidebar.

The features on the sidebar used to create and customize emails are separated into three sections:
:guilabel:`Blocks`, :guilabel:`Customize`, and :guilabel:`Design`.

Each building block provides unique features and professional design elements. To use a building
block, drag-and-drop the desired block element onto the body of the email being built. Once dropped,
various aspects of the building block can be customized.

.. tip::
   To build an email from the ground up, without any building block elements, select the
   :guilabel:`Plain Text` template. When selected, Odoo provides a completely blank email canvas,
   which can be customized in a number of way using the front-end rich text editor that accepts
   forward slash `/` commands.

   When `/` is typed into the blank body of the email, while using a :guilabel:`Plain Text`
   template, a drop-down menu of various design elements appears, which can be used to create the
   desired email design.

.. _email_marketing/settings_tab:

Settings tab
------------

The options present in the *Settings* tab of the mail form are divided into two sections: *Email
Content*, *Tracking*, and *Advanced*.

.. note::
   The options available in the *Settings* tab vary depending on if the *Mailing Campaigns* feature
   is activated in :menuselection:`Email Marketing --> Configuration --> Settings`. See
   :ref:`email_marketing/mailing-campaigns` for more information.

Email content
~~~~~~~~~~~~~

The *Email Content* section provides the following configuration options:

- :guilabel:`Preview Text`: Enter a preview sentence to encourage recipients to open the email. In
  most inboxes, this is displayed next to the subject. If left empty, the first characters of the
  email content appear, instead.
- :guilabel:`Send From`: Designate an email alias that displays as the sender of this particular
  email.
- :guilabel:`Reply To`: Designate an email alias to whom all the replies of this particular email
  are sent.
- :guilabel:`Attach a file`: Upload any required (or helpful) :icon:`fa-paperclip`
  :guilabel:`Attachments` on this mailing.

Tracking
~~~~~~~~

The *Tracking* section includes the following configuration options:

- :guilabel:`Medium`: Choose a tracking method (e.g., `Email`, `SMS`).
- :guilabel:`Source`: Choose a source for which to track (e.g., `Mass Mailing`, `Newsletter`).
- :guilabel:`Responsible`: Designate a user in the database to be responsible for this particular
  email.

.. note::
   If the *Mailing Campaign* feature *is* activated, an additional :guilabel:`Campaign` field
   appears in the :guilabel:`Tracking` section of the *Settings* tab.

Advanced
~~~~~~~~

Select the :guilabel:`Keep Archives` option to keep archived mailings.

If the :guilabel:`Allow A/B Testing` option is enabled, different versions of the same mailing to
random recipients to gauge the effectiveness of the mailing.

In the :guilabel:`on (#)%` field appears, specify the percentage of recipients that are sent this
current version of the mailing as part of the test. Specify the name of the version in the
:guilabel:`A/B Testing Version` field.

Beneath that, two additional fields appear:

In the :guilabel:`Winner Selection` field, select the criteria to determine how the final version of
the email is selected. The following options are provided:

- :guilabel:`Manual`: Allows the user to determine the "winning" version of the mailing. This option
  removes the :guilabel:`Send Final On` field.
- :guilabel:`Highest Open Rate` (default): The mailing with the highest open rate is determined to
  be the "winning" version.
- :guilabel:`Highest Click Rate`: The mailing with the highest click rate is determined to be the
  "winning" version.
- :guilabel:`Highest Reply Rate`: The mailing with the highest reply rate is determined to be the
  "winning" version.
- :guilabel:`Leads`: The mailing with the most leads generated is determined to be the "winning"
  version.
- :guilabel:`Quotations`: The mailing with the most quotations generated is determined to be the
  "winning" version.
- :guilabel:`Revenues`: The mailing with the most revenue generated is determined to be the
  "winning" version.

The :guilabel:`Send Final On` field allows users to choose a date that is used to know *when* Odoo
should determine the winning version and send it to the remaining recipients.

To the right of those fields is a :guilabel:`Create an Alternative Version` button. When clicked,
Odoo presents a new *Mail Body* tab for the user to create an alternate version of the email to
test.

Send, schedule, test
====================

Once the mailing is finalized, proceed to :ref:`Send <email_marketing/send>`, :ref:`Schedule
<email_marketing/schedule>`, or :ref:`Test <email_marketing/test>` it.

.. _email_marketing/send:

Send
----

The :guilabel:`Send` button reveals a :guilabel:`Ready to unleash emails?` pop-up window.

When the :guilabel:`Send to all` button is clicked, Odoo sends the email to the desired recipients.
Once Odoo has sent the mailing, the status changes to :guilabel:`Sent`.

.. _email_marketing/schedule:

Schedule
--------

The :guilabel:`Schedule` button reveals a :guilabel:`When do you want to send your mailing?` pop-up
window. Click the :guilabel:`Send on` field to and select and future date and time on the calendar
pop-over.

When a date and time are chosen, click the :guilabel:`Schedule` button, and the status of the
mailing changes to :guilabel:`In Queue`.

.. _email_marketing/test:

Test
----

The :guilabel:`Test` button reveals a :guilabel:`Test Mailing` pop-up window.

In the :guilabel:`Recipients` field, enter one or more email addresses of the contacts to whom Odoo
should send this test email.

Once all the desired email addresses have been entered in the :guilabel:`Recipients` field, click
the :guilabel:`Send Test` button.

.. warning::
   By default, there's a daily limit applied for **all emails** sent throughout **all
   applications**. If there are remaining emails to be sent after a limit has been reached, those
   mailings are **not** sent automatically the next day. The sending needs to be forced, by opening
   the email and clicking :guilabel:`Retry`.

.. _email_marketing/mailing-campaigns:

Mailing campaigns
=================

In order to create and customize mailing campaigns, the *Mailing Campaigns* feature **must** be
activated in the *Settings* page of the **Email Marketing** application. To do that, navigate to
:menuselection:`Email Marketing app --> Configuration --> Settings`, tick the box beside
:guilabel:`Mailing Campaigns`, and click the :guilabel:`Save` button.

Once the :guilabel:`Mailing Campaigns` feature is activated, a new :guilabel:`Campaigns` menu option
appears in the header.

When that is clicked, Odoo reveals a separate :guilabel:`Campaigns` page, displaying all the mailing
campaigns in the database, and the current stage they are in, showcased in a default Kanban view.

.. _email_marketing/campaign-page:

Create mailing campaign
-----------------------

When the *Mailing Campaigns* feature is activated, a new *Campaigns* option appears in the header of
the *Email Marketing* application. Campaigns can be created directly on the *Campaigns* page in the
*Email Marketing* app.

To do that, navigate to :menuselection:`Email Marketing app --> Campaigns`. Then, click
:guilabel:`New`.

On the campaign form, specify a :guilabel:`Campaign Name`, a :guilabel:`Responsible` user, and
:guilabel:`Tags`, if applicable.

At the top of the form, various metric-related smart buttons can be seen that showcase specific
analytics related to the campaign. Those smart buttons are: :guilabel:`Revenues`,
:guilabel:`Quotations`, :guilabel:`Opportunities`, and :guilabel:`Clicks`.

.. note::
   Once a :guilabel:`Campaign Name` is entered and saved, additional buttons appear at the top of
   the campaign form: :guilabel:`Send Mailing` and :guilabel:`Send SMS`.

The status of the campaign can be viewed in the upper-right corner of the campaign form, as well.

.. seealso::
   - :doc:`email_marketing/mailing_lists`
   - :doc:`email_marketing/unsubscriptions`
   - :doc:`email_marketing/lost_leads_email`
   - :doc:`email_marketing/analyze_metrics`

.. toctree::
   :titlesonly:

   email_marketing/mailing_lists
   email_marketing/unsubscriptions
   email_marketing/lost_leads_email
   email_marketing/analyze_metrics
