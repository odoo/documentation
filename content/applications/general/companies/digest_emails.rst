=============
Digest Emails
=============

*Digest Emails* are periodic snapshots sent to users in the organization via email that include
high-level information about how the business is performing.

Navigate to Digest Emails by going to :menuselection:`Settings --> General Settings --> Statistics`,
then activate the :guilabel:`Digest Emails` feature and click on :guilabel:`Save`.

.. image:: digest_emails/digest-email-settings.png
   :align: center
   :alt: Digest Emails section inside General Settings.

A variety of settings can be configured for Digest Emails, such as:

- Which KPIs are shared in the digest emails
- How often digest emails are sent
- Who in the organization receives digest emails
- Creating custom digest email templates
- Adding additional KPIs (Studio required)

.. note::
   By default, Digest Email is *enabled*, and *Your Odoo Periodic Digest* serves as the primary
   template, which includes all KPI measurements across the Odoo database and is sent daily to
   administrators.

.. warning::
   When creating duplicates of databases that have sending capabilities (not testing-mode) the
   digest emails will continue to send from the duplicate database unless deactivated. To deactivate
   navigate to :menuselection:`Settings --> General Settings --> Statistics`. Then deactivate the
   :guilabel:`Digest Emails` feature by un-ticking the checkbox and click on :guilabel:`Save`.

.. _digest-emails/customize-digest:

Customize *Your Odoo Periodic Digest*
=====================================

To customize the default Digest Email (*Your Odoo Periodic Digest*), go to :menuselection:`Settings
--> General Settings --> Statistics --> Digest Email`, select *Your Odoo Periodic Digest* and click
on the :guilabel:`external link` icon next to the drop-down menu selection.

A popup window appears and presents a variety of editable settings, which include:

- :guilabel:`Digest Name` - the name of the digest email.
- :guilabel:`Periodicity` - control the regimen in how often digest emails are sent.
- :guilabel:`Next Send Date` - the date which the digest email will be sent again.
- :guilabel:`KPIs` tab - check/uncheck each calculated KPI that appears in digest emails.
- :guilabel:`Recipients` tab - add/remove users who receive the digest emails.

.. note::
   The :abbr:`KPIs (key performance indicators)` can be customized using Odoo *Studio*. Additional
   costs to the database subscription will be incurred should *Studio* need to be installed.

.. image:: digest_emails/periodic-digest.png
   :align: center
   :alt: Customize default Digest Email settings and custom KPIs.

Deactivate digest email
-----------------------

To manually deactivate an individual digest email, first navigate to :menuselection:`Settings -->
General Settings --> Statistics` and click :guilabel:`Configure Digest Emails`. Then select the
digest email from the list that should be deactivated.

Next, click :guilabel:`DEACTIVATE FOR EVERYONE` or :guilabel:`UNSUBSCRIBE ME` to remove the logged
in user from the mailing list. These buttons are located in the top menu just above the
:guilabel:`Digest Name`.

Manually send digest email
--------------------------

To manually send a digest email, first navigate to :menuselection:`Settings --> General Settings -->
Statistics` and click :guilabel:`Configure Digest Emails`. Then select the digest email and click
:guilabel:`SEND NOW`. This button is located in the top menu just above the :guilabel:`Digest Name`.

KPIs
----

Pre-configured :abbr:`KPIs (key performance indicators)` can be added to the digest email from the
:abbr:`KPIs (key performance indicators)` tab. First navigate to :menuselection:`Settings -->
General Settings --> Statistics` and click :guilabel:`Configure Digest Emails`. Open the digest
email and click on the :guilabel:`KPIs` tab. To add a :abbr:`KPI (key performance indicator)` to
the digest email simply tick the checkbox next to the desired :abbr:`KPI (key performance
indicator)`. After all :abbr:`KPIs (key performance indicators)` are added or deselected, then
:guilabel:`Save` the progress.

Recipients
----------

Recipients are added from the :guilabel:`Recipients` tab. To add a recipient simply navigate to
:menuselection:`Settings --> General Settings --> Statistics` and click :guilabel:`Configure Digest
Emails`. Then open the digest email and click on the :guilabel:`Recipients` tab. To add a recipient
click :guilabel:`Add a line` and a pop-up will appear with available users to add on as recipients.
Tick the checkbox next the the :guilabel:`Name` of the user and click the :guilabel:`Select` button.

To remove a user as a recipient click the :guilabel:`❌` icon to the far right of the user listed in
the :guilabel:`Recipients` tab.

:guilabel:`Save` the work to implement the changes.

.. _digest-emails/custom-emails:

Create a new digest email
=========================

To create a new digest email navigate to :menuselection:`Settings --> General Settings -->
Statistics` and click :guilabel:`Configure Digest Emails`. Click :guilabel:`Create` to create a new
digest email.

A popup window appears and presents a variety of editable settings, which include:

- :guilabel:`Digest Name` - the name of the Digest Email.
- :guilabel:`Periodicity` - control the regimen in how often Digest Emails are sent.
- :guilabel:`Next Send Date` - the date which the digest email will be sent again.
- :guilabel:`KPIs` tab - check/uncheck each calculated KPI that appears in Digest Emails.
- :guilabel:`Recipients` tab - add/remove users who receive the Digest Emails.

From there, give the digest email a :guilabel:`Digest Name`, specify :guilabel:`Periodicity`, and
choose the desired :guilabel:`KPIs` and add :guilabel:`Recipients` as needed.

After clicking :guilabel:`Save`, the new custom digest email is available as a selection in the
:guilabel:`General Settings` drop-down menu.

.. _digest-emails/custom-kpi:

Custom KPIs with Studio
-----------------------

The :abbr:`KPIs (key performance indicators)` can be customized using Odoo *Studio*. Additional
costs to the database subscription will be incurred should *Studio* need to be installed.

For either *Your Odoo Periodic Digest* or a custom digest email, KPIs can be added by using Odoo
Studio.

To begin, click the :guilabel:`🛠️ (tools)` icon. This is the link to *Studio* application.

In order to create additional fields, create two fields on the digest object:

#. Create a boolean field called `kpi_myfield` and display it in the KPIs tab
#. Create a computed field called `kpi_myfield_value` that computes the customized KPI
#. Select the KPI(s) in the KPIs tab.

.. tip::
   An alternative is to click the :guilabel:`Recipients` tab and then the :guilabel:`...` (ellipses)
   to edit this view. Either click :guilabel:`EDIT LIST VIEW` or :guilabel:`EDIT FORM VIEW` to
   modify this tab.

Computed values reference table
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------------+-------------------------------------------+
| LABEL                 | VALUE                                     |
+=======================+===========================================+
| Connected Users       | `kpi_res_users_connected_value`           |
+-----------------------+-------------------------------------------+
| Messages Sent         | `kpi_mail_message_total_value`            |
+-----------------------+-------------------------------------------+
| New Leads             | `kpi_crm_lead_created_value`              |
+-----------------------+-------------------------------------------+
| Opportunities Won     | `kpi_crm_opportunities_won_value`         |
+-----------------------+-------------------------------------------+
| Open Tasks            | `kpi_project_task_opened_value`           |
+-----------------------+-------------------------------------------+
| Tickets Closed        | `kpi_helpdesk_tickets_closed_value`       |
+-----------------------+-------------------------------------------+
| % of Happiness        | `kpi_livechat_rating_value`               |
+-----------------------+-------------------------------------------+
| Conversations handled | `kpi_livechat_conversations_value`        |
+-----------------------+-------------------------------------------+
| Time to answer (sec)  | `kpi_livechat_response_value`             |
+-----------------------+-------------------------------------------+
| All Sales             | `kpi_all_sale_total_value`                |
+-----------------------+-------------------------------------------+
| eCommerce Sales       | `kpi_website_sale_total_value`            |
+-----------------------+-------------------------------------------+
| Revenue               | `kpi_account_total_revenue_value`         |
+-----------------------+-------------------------------------------+
| Bank & Cash Moves     | `kpi_account_bank_cash_value`             |
+-----------------------+-------------------------------------------+
| POS Sales             | `kpi_pos_total_value`                     |
+-----------------------+-------------------------------------------+
| New Employees         | `kpi_hr_recruitment_new_colleagues_value` |
+-----------------------+-------------------------------------------+
