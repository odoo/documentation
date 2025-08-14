======
Alerts
======

In the **Referrals** application, it is possible to post a message, also referred to as an *alert*,
at the top of the dashboard to share important information with users.

Alerts remain on the main **Referrals** dashboard for the specified amount of time configured on the
individual alert.

.. image:: alerts/alerts.png
   :alt: Two alert banners appear above the user's photo.

.. _referrals/create-alert:

Create an alert
===============

Only users with *Administrator* access rights for the **Recruitment** app can create alerts. To add
a new alert, navigate to the :menuselection:`Referrals app --> Configuration --> Alerts`.

Click :guilabel:`New` to open a blank alert form. Enter the following information on the form:

- :guilabel:`Date From`: the date the alert starts. On this date, the alert is visible on the
  dashboard.
- :guilabel:`Date To`: the date the alert ends. After this date, the alert is hidden from view.
- :guilabel:`Company`: the current company populates this field, by default. To modify the company
  the alert should be displayed for, select the desired company from the drop-down menu in this
  field.

  If this field remains blank, the alert is visible to everyone with access to the **Referrals**
  app.

  If a company is specified, only users within that company (who also have access to the
  **Referrals** app) see the alert. This field **only** appears in a multi-company database.
- :guilabel:`Alert`: enter the text for the alert. This message appears inside the alert banner on
  the main **Referrals** app dashboard.
- :guilabel:`On Click`: there are three options for the alert. Click the radio button next to the
  desired selection. The options are:

  - :guilabel:`Not Clickable`: the alert only displays text, there is no link to click.
  - :guilabel:`Go to All Jobs`: the alert contains a link that, when clicked, navigates to the
    website with all the job positions that are currently posted.
  - :guilabel:`Specify URL`: the alert contains a link to a specific URL that, when clicked,
    navigates to that URL. When selected, a :guilabel:`URL` field appears below the :guilabel:`On
    Click` section. Enter the desired URL in that field.

.. image:: alerts/alert-form.png
   :alt: An alert form completely filled in with all selections entered.

Notify users
============

In addition to posting an alert on the **Referrals** app, users can be contacted directly via email,
instead of waiting for users to view the alert when they open the **Referrals** app.

After :ref:`creating an alert <referrals/create-alert>`, click the :guilabel:`Send Mail` button
above the alert form. This causes a :guilabel:`Send Mail` pop-up window to load.

The currently configured users populate the :guilabel:`User` field, and the :guilabel:`Subject` is
populated with `New Alert In Referrals App`, by default.

The :guilabel:`Body` is populated with `A new alert has been added to the Referrals app! Check your
dashboard now!`, with the word `dashboard` linked to the **Referrals** app dashboard.

Make any desired modifications to the email, then click :guilabel:`Send`.

Dismiss an alert
================

It is possible to dismiss an alert, if a user does not wish to see a specific alert again.

To dismiss an alert, click the :icon:`fa-times` :guilabel:`(remove)` icon on the far-right side of
the alert on the **Referrals** app dashboard, to remove the alert.

This prevents the alert from appearing again, even when opening the **Referrals** app for the first
time in a new session.
