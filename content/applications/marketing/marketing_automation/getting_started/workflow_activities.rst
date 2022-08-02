====================
Marketing activities
====================

When creating a campaign in the :guilabel:`Marketing Automation` app, users can plan marketing
activities such as email or SMS campaigns. To get started, navigate to the :guilabel:`Workflow`
area, and click :guilabel:`Add New Activity`. A blank activity template will appear where
parameters can be set for that specific activity.

When :guilabel:`Add New Activity` is selected, a blank activity template will appear with the
following customizable fields:

.. image:: workflow_activities/activity-template.png
   :align: center
   :alt: An activity template in Odoo Marketing Automation.

- :guilabel:`Activity Name`: the title of the activity.
- :guilabel:`Activity Type`: choose between Email, Server Action (internal Odoo operation), or SMS.
- :guilabel:`Mail Template`: choose from pre-configured templates (or create a new one on-the-fly).
- :guilabel:`Trigger`: choose when this activity should be triggered.
- :guilabel:`Expiry Duration`: configure to stop the actions after a specific amount of time (after
  the scheduled date). When selected, a :guilabel:`Cancel after` field appears, in which the user
  can choose how many :guilabel:`Hours, Days, Weeks, or Months` they want the actions to cease
  after the initial date.
- :guilabel:`Activity Filter`: domain related to this activity (and all subsequent Child
  Activities).
- :guilabel:`Applied Filter`: activity will *only* be performed if it satisfies the specified
  domain (filter).

After the activity's settings are fully configured, click :guilabel:`Save & Close` to finish
creating the activity.

Workflow activity
=================

Once saved, the :guilabel:`Workflow Activity` will appear in Odoo, where each activity will be
shown as a graph by default. The configured trigger time for that activity can be found to the left
of the :guilabel:`Workflow Activity` card.

In the :guilabel:`Workflow Activity` section, there is also the number of activities that are
successful or rejected. The :guilabel:`Success` and :guilabel:`Rejected` numbers are color-coded
in the graph for easy reference (in green and red, respectively).

.. image:: workflow_activities/workflow-activity.png
   :align: center
   :alt: Typical workflow activity in Odoo Marketing Automation.

.. tip::
   If the :guilabel:`Activity Type` of the activity is set to :guilabel:`Email`, there are more
   in-depth analytics beneath the :guilabel:`Workflow Activity` data detailing how many emails have
   been :guilabel:`Sent`, and what percentage of those have been :guilabel:`Clicked`,
   :guilabel:`Replied` to, or :guilabel:`Bounced`.

Child activities
================

Odoo also has the option to :guilabel:`Add Child Activity`. *Child Activities* are sub-activities
that are connected to (and triggered by) the activity above it, which is also known as its *Parent
Activity*.

Odoo provides a number of triggering options to launch a :guilabel:`Child Activity` - all of which
depend on the trigger configurations related to the parent activity. Under the desired parent
activity, hover over :guilabel:`Add child activity`, and select the trigger:

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

Once a trigger is selected, the user can configure the child activity (it has the same
configuration options as a regular activity) and click :guilabel:`Save & Close`` to finish creating
the child activity.
