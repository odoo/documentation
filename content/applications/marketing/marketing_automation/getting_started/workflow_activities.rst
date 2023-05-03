====================
Marketing activities
====================

When creating a campaign in the *Marketing Automation* app, users can plan marketing activities,
such as email or SMS campaigns.

To get started, navigate to the bottom of a marketing automation campaign detail form, and click
:guilabel:`Add New Activity`. Doing so reveals a :guilabel:`Create Activities` pop-up window. This
pop-up window is a blank activity template, where specific parameters can be set for that particular
activity.

The following fields are available in the :guilabel:`Create Activities` pop-up window (when
:guilabel:`Add New Activity` is clicked):

.. image:: workflow_activities/activity-template.png
   :align: center
   :alt: An activity template in Odoo Marketing Automation.

- :guilabel:`Activity Name`: the title of the activity.
- :guilabel:`Activity Type`: choose between `Email`, `Server Action` (internal Odoo operation), or
  `SMS`.
- :guilabel:`Mail Template`: choose from pre-configured templates (or create a new one on-the-fly).
- :guilabel:`Trigger`: choose when this activity should be triggered.
- :guilabel:`Expiry Duration`: configure to stop the actions after a specific amount of time (after
  the scheduled date). When selected, a :guilabel:`Cancel after` field appears, in which the user
  can choose how many :guilabel:`Hours, Days, Weeks, or Months` they want the actions to cease after
  the initial date.
- :guilabel:`Activity Filter`: domain related to this activity (and all subsequent child
  activities).
- :guilabel:`Applied Filter`: activity will *only* be performed if it satisfies the specified domain
  (filter).

After the activity's settings are fully configured, click :guilabel:`Save & Close` to save the
activity and return to the marketing automation campaign form, :guilabel:`Save & New` to save the
activity and immediately create another one in a fresh :guilabel:`Create Activities` pop-up window,
or :guilabel:`Discard` to delete the activity and return to the marketing automation campaign form.

Workflow activity
=================

Once an activity is saved, the :guilabel:`Workflow Activity` section appears at the bottom of the
marketing automation campaign form. Each activity is displayed as a line graph.

The configured :guilabel:`Trigger` time for that activity can be found to the left of the
:guilabel:`Workflow Activity` card in the :guilabel:`Workflow` section.

Once the activity has been triggered, a figure representing the number of :guilabel:`Success` or
:guilabel:`Rejected` activities will be displayed to the right of the graph.

.. image:: workflow_activities/workflow-activity.png
   :align: center
   :alt: Typical workflow activity in Odoo Marketing Automation.

.. tip::
   If the :guilabel:`Activity Type` of the activity is set to :guilabel:`Email`, there are more
   in-depth analytics beneath the activity graph data, detailing how many emails have been
   :guilabel:`Sent`, and what percentage of those have been :guilabel:`Clicked`, :guilabel:`Replied`
   to, or :guilabel:`Bounced`.

Child activities
================

There is also the option to add a *child activity* by clicking :guilabel:`Add child activity`,
located at the bottom of each activity block in the :guilabel:`Workflow` section of a marketing
automation form.

Child activities are sub-activities that are connected to (and triggered by) the activity above it,
which is also known as its *parent activity*.

Odoo provides a number of triggering options to launch a child activity - all of which depend on the
trigger configurations related to the parent activity. Under the desired parent activity, hover over
:guilabel:`Add child activity`, and select any of the following triggers:

- :guilabel:`Add Another Activity`: instantly add another activity.
- :guilabel:`Opened`: the next activity will be triggered if the (email) recipient opens the
  mailing.
- :guilabel:`Not Opened`: the next activity will be triggered if the recipient does not open the
  mailing.
- :guilabel:`Replied`: the next activity will be triggered if the recipient replies to the mailing.
- :guilabel:`Not Replied`: the next activity will be triggered if the recipient does not reply to
  the mailing.
- :guilabel:`Clicked`: the next activity will be triggered if the recipient clicks on a link
  included in the mailing.
- :guilabel:`Not Clicked`: the next activity will be triggered if the recipient does not click on a
  link included in the mailing.
- :guilabel:`Bounced`: the next activity will be triggered if the mailing is bounced (not sent).

Once a trigger is selected, the user can configure the child activity (it has the same configuration
options as a regular activity), and click :guilabel:`Save & Close` to finish creating the child
activity, which will then be displayed in the :guilabel:`Workflow` section, in a slightly indented
position beneath its parent activity.
