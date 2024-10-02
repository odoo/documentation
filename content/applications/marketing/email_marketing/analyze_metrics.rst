===============
Analyze metrics
===============

.. |CTR| replace:: :abbr:`CTR (Click through rate)`

In order to properly understand the success or failure of an email marketing campaign, it is
necessary to monitor several key metrics. The insights gained from these metrics can then be used to
optimize future campaigns. Odoo's **Email Marketing** application tracks several :ref:`key metrics
<email-marketing/view-metrics>`, that can be interpreted through :ref:`reports
<email_marketing/create_reports>` to improve future campaigns.

.. _email-marketing/view-metrics:

View metrics
============

After a mass mail has been sent, the results for that particular mailing are displayed in multiple
locations.

To access the metrics for an individual mailing, navigate to :menuselection:`Email Marketing app
--> Mailings`. Locate the specific mailing in the list view, and use the column headings to view the
results for that mailing. Click on one of the mailings in the list to open the record.

At the top of the record, detailed metrics are displayed as smart buttons.

.. image:: analyze_metrics/metric-smart-buttons.png
   :align: center
   :alt: The smart buttons on a mass mailing, displaying the results of the message.

Opened rate
-----------

The percentage of emails opened by recipients, against the total number of sent emails.

In cases where a reply is expected, such as cold outreach emails, high open rate may indicate the
subject line was timely, compelling, and successfully prompted the recipients to view the message.

In cases where a reply is not expected, such as promotional emails, it may indicate an issue with
the email, such as incorrect product links or coupon codes.

In cases where a reply is expected, a low open rate may indicate the subject
line failed to capture the recipients' interest or the message ended up in a spam or junk folder. It
could also indicate the email ended up in a spam or junk folder.

.. note::
   Emails that consistently land in recipient spam folders could be due to having a poor sender
   reputation (i.e. high unsubscribe rate, high percentage of past emails marked as spam, etc.),
   or failing to :doc:`configure the proper DNS records
   <../../general/email_communication/email_domain>`.

Replied rate
------------

The percentage of recipients who responded to the email, against the total number of sent emails.

A high replied rate may indicate the email resonated with recipients, prompting them to take
action or provide feedback.

A low replied rate may suggest the message lacked relevance or did not contain a clear
call-to-action.

Clicked rate
------------

This represents the *Clicked through rate (CTR)*, which measures the
percentage of recipients who clicked on a link within the email, against the total number of sent
emails.

A high |CTR| may indicate the email content was relevant and appropriately targeted. Recipients
were motivated to click the links provided, and likely found the content engaging.

A low |CTR| may indicate issues with either the targeting, or the content itself. Recipients may
have been unmotivated by the calls-to-action, if there were any, or the message itself may have
been directed toward the wrong audience.

Received rate
-------------

This rate measures the percentage of emails that were **successfully** delivered, against the total
number of sent emails.

A high received rate can indicate the mailing list used is up-to-date, and the sender authentication
is trusted by email providers.

A low received rate may indicate issues, either with the mailing list used for the mailing, or with
the sender authentication. View the :ref:`email-marketing/deliverability-issues` section for more
information.

Bounced rate
------------

This rate measures the percentage of emails that were **unsuccessfully** delivered, and did not
enter a recipient's inbox, against the total number of sent emails.

A high bounce rate could indicate issues, either with the mailing list used for the mailing, or with
the sender authentication.

A low bounce rate may indicate that the mailing list used is up-to-date, and the sender
authentication is trusted by email providers. View the :ref:`email-marketing/deliverability-issues`
section for more information.

.. tip::
   Click on the respective smart buttons to see all the corresponding recipient records that are
   attributed to each metric. When these filtered records are in view, multiple types of reports can
   be run for further analysis.

.. _email_marketing/create_reports:

Create metrics reports
======================

Individual metrics can be analyzed by creating a report. To begin, click on the smart button of the
desired metric.

Next, click the :icon:`fa-caret-down` :guilabel:`(down arrow)` to the right of the search bar to see
a drop-down menu of filtering and grouping parameters.

:guilabel:`Filters`, located in the left column of the search options, can be used to keep only the
results that fit the filter. For example, selecting the *Bounced* filter only shows emails
that could not be delivered.

:guilabel:`Group By`, found in the middle column, is used to organize the results into groups, and
can be used with or without filters.

.. note::
   Setting multiple :guilabel:`Group By` options creates nested groups, according to which option
   is selected first. For example, selecting :guilabel:`Sent Period`, followed by
   :guilabel:`Add Custom Group --> Responsible`, in the :guilabel:`Group By` column, sorts all
   results *first* by the sent period, *then* by the team member responsible. This is a useful
   metric for analyzing who on the team is sending in volume or quantity over a set time period.

   This can be verified by looking at the direction, and order, of the selections in the group tile
   that appears in the search bar after the selections are made.

.. example::
   A monthly newsletter has been sent out, and 6.9% of the sent emails were bounced.

   .. image:: analyze_metrics/newsletter-metrics.png
      :align: center
      :alt: The metrics smart buttons of the newsletter.

   To see what these bounced recipients have in common, the records are grouped using a custom group
   targeting :guilabel:`Mailing Lists`, which groups all records by the mailing lists they are on.
   The records are then filtered using a custom filter with the rule `Created on >= 07/01/2024
   00:00:00`, to filter by when the mailing list was last checked. This filter only includes
   recipients that have been created on, or after, July 1st, 2024, in the report.

   .. image:: analyze_metrics/metrics-filter.png
      :align: center
      :alt: The custom filter creation form.

   Using these configurations, it is evident that all the recipients with bounced emails were added
   after the list was last checked. Looking closer at the domains, it is evident that each
   recipient has a malformed email domain (i.e: @yaoo.com instead of @yahoo.com), likely due to a
   manual entry error while updating the database.

   .. image:: analyze_metrics/malformed-addresses.png
      :align: center
      :alt: A list of bounced email addresses with malformed email domains.

.. seealso::
   View :doc:`../../essentials/search` for more information about making custom groups and
   filters.

.. _email-marketing/deliverability-issues:

Mass mailing analysis
=====================

It is also possible to analyze the success between mailing campaigns by creating a *Mass Mailing
Analysis* report. To begin, navigate to :menuselection:`Email Marketing app --> Reporting --> Mass
Mailing Analysis`.

A dashboard appears displaying a bar chart containing each mailing campaign. By default,
:guilabel:`Sent` is selected, displaying the number of sent records on the y-axis. To change the
measure, click the :guilabel:`Measures` button, and select the desired measure from the drop-down
menu.

.. example::
   The following chart displays the number of opened emails from two different mass mailings.

   In this view, it can be seen that the first mass mailing led to a higher opened rate than the
   second. Because a lower opened rate can sometimes be attributed to a subject line that failed to
   capture readers' attention, the subject line of each mass mailing can be a good place to begin
   looking.

   .. image:: analyze_metrics/mma-opened.png
      :align: center
      :alt: A bar chart displaying the different opened rate between two mass mailing campaigns.

   Comparing the two subject lines, it is clear the newsletter's subject line was less engaging,
   which may have led to the lower opened rate, when compared to the other mass mailing.

   .. image:: analyze_metrics/mailing-comparison.png
      :align: center
      :alt: alt text

Deliverability issues
=====================

The following define possible reasons for a high bounce rate or low received rate:

- Using a mailing list that contains outdated contact information, or malformed email addresses are
  likely to result in a high bounce rate and/or a low received rate.
- Mailings sent using a *From* email address that differs from the sender's domain are likely to
  bounce with certain email providers due to failing :ref:`DMARC authentication
  <email-domain-dmarc>`.
- Failing to :doc:`configure the proper DNS records
  <../../general/email_communication/email_domain>` can also result in a high bounce rate.

.. seealso::
   - :ref:`Mailing campaigns <email_marketing/mailing-campaigns>`
   - :doc:`Manage unsubscriptions <unsubscriptions>`
