=========
Reporting
=========

.. |SLA| replace:: :abbr:`SLA (Service Level Agreement)`
.. |SLAs| replace:: :abbr:`SLAs (Service Level Agreements)`

Reports in Odoo **Helpdesk** provide the opportunity to manage employee workloads, identify areas
for improvement, and confirm if customer expectations are being met.

Available reports
=================

Details about the reports available in Odoo **Helpdesk** can be found below. To view the different
reports, go to :menuselection:`Helpdesk app --> Reporting`, and select one of the following:
:guilabel:`Tickets Analysis`, :guilabel:`SLA Status Analysis`, or :guilabel:`Customer Ratings`.

Tickets Analysis
----------------

The *Tickets Analysis* report (:menuselection:`Helpdesk app --> Reporting --> Tickets Analysis`)
provides an overview of every customer support ticket in the database.

This report is useful for identifying where teams are spending the most time, and helps determine if
there is an uneven workload distribution among the support staff. The default report counts the
number of tickets per team and groups them by stage.

.. image:: reports/tickets-default.png
   :alt: View of Ticket Analysis report default view.

Alternative measures can be selected to track where the most time is spent at different points in
the workflow. To change the measures used for the report that is currently displayed, or to add
more, click the :guilabel:`Measures` button, and select one or more options from the drop-down menu:

- :guilabel:`Average Hours to Respond`: average number of working hours between a message sent from
  the customer and the response from the support team. *This does not include messages sent when the
  ticket was in a folded stage.*
- :guilabel:`Hours Open`: number of hours between the date the ticket was created and the closed
  date. If there is no closed date on the ticket, the current date is used. **This measure is not
  specific to working hours.**
- :guilabel:`Hours Spent`: number of *Timesheet* hours logged on a ticket. *This measure is only
  available if Timesheets are enabled on a team, and the current user has the access rights to view
  them.*
- :guilabel:`Hours to Assign`: number of working hours between the date the ticket was created and
  when it was assigned to a team member.
- :guilabel:`Hours to Close`: number of working hours between the date the ticket was created and
  the date it was closed.
- :guilabel:`Hours to First Response`: number of working hours between the date the ticket was
  received and the date on which the first message was sent. *This does not include email sent
  automatically when a ticket reaches a stage.*
- :guilabel:`Hours until SLA Deadline`: number of working hours remaining to reach the last |SLA|
  deadline on a ticket.
- :guilabel:`Rating (/5)`: number out of five to represent customer feedback (Dissatisfied = 1,
  Okay/Neutral = 3, Satisfied = 5).
- :guilabel:`Remaining Hours on SO`: hours remaining on a linked sales order.
- :guilabel:`Count`: number of tickets in total.

.. note::
   *Working hours* are calculated based on the default working calendar. To view or change the
   working calendar, go to the :menuselection:`Settings` application and select
   :menuselection:`Employees --> Company Working Hours`.

SLA Status Analysis
-------------------

The *SLA Status Analysis* report (:menuselection:`Helpdesk app --> Reporting --> SLA Status
Analysis`) :ref:`analyzes the performance <helpdesk/analyze-sla-performance>` of individual SLA
(Service Level Agreement) policies.

By default, this report is filtered to show the number of |SLAs| failed, in progress, and the number
that have been successful. The results are grouped by teams.

.. image:: reports/sla-status.png
   :alt: View of Group by options of Ticket Analysis report.

To change the measures used for the report that is currently displayed, or to add more, click the
:guilabel:`Measures` button, and select one or more options from the drop-down menu:

- :guilabel:`Number of SLA Failed`: number of tickets that have failed at least one |SLA|.
- :guilabel:`Rating (/5)`: number value representing customer feedback (Dissatisfied = 1,
  Okay/Neutral = 3, Satisfied = 5).
- :guilabel:`Remaining Hours on SO`: hours remaining on a linked sales order.
- :guilabel:`Working Hours to Assign`: number of working hours between the date the ticket was
  created and when it was assigned to a team member.
- :guilabel:`Working Hours to Close`: number of working hours between the date the ticket was
  created and the date it was closed.
- :guilabel:`Working Hours to Reach SLA`: number of working hours between the date the ticket was
  created and the date the |SLA| was satisfied.
- :guilabel:`Count`: number of tickets in total.

.. seealso::
   :doc:`Service Level Agreements (SLA) <sla>`

Customer Ratings
----------------

The *Customer Ratings* report (:menuselection:`Helpdesk app--> Reporting --> Customer Ratings`)
displays an overview of the ratings received on individual support tickets, as well as any
additional comments submitted with the rating.

.. image:: reports/customer-ratings.png
   :alt: View of the Kanban display in the Customer Ratings report.

Click on an individual rating to see additional details about the rating submitted by the customer,
including a link to the original ticket.

.. image:: reports/ratings-details.png
   :alt: View of the details of an individual customer rating.

.. tip::
   On the rating's details page, tick the :guilabel:`Visible Internally Only` checkbox to hide the
   rating from public and portal users.

The *Customer Ratings* report is displayed in a Kanban view by default, but can also be displayed in
graph, list, or pivot view.

.. seealso::
   :doc:`Ratings <ratings>`

Use cases
=========

Track performance by team
-------------------------

The :guilabel:`Tickets Analysis` report can be used to track the performance of a team against
various measures.

First, navigate to :menuselection:`Helpdesk app --> Reporting --> Tickets Analysis`.



.. seealso::
  :doc:`Odoo essentials reporting <../../../essentials/reporting>`
