=======
Reports
=======

Odoo **Live Chat** includes several reports that allow for the monitoring of operator performance
and the identification of trends in customer conversations.

The following reports are included in the **Live Chat** app:

- :ref:`Sessions History <livechat/sessions-history>`
- :ref:`Session Statistics <livechat/session-statistics>`
- :ref:`Operator Analysis <livechat/operator-analysis>`

.. note::
   The *Live Chat Ratings Report* can also be accessed through the :guilabel:`Report` menu. For more
   information on this report, and on the **Live Chat** rating process, see :doc:`Live Chat Ratings
   <../livechat/ratings>`.

To access a drop-down menu of all the available reports, navigate to :menuselection:`Live Chat app
--> Report`.

.. _livechat/sessions-history:

Sessions History
================

The *Sessions History* report displays an overview of live chat sessions, including session dates,
participant name and country, session duration, the number of messages, and the rating. It also
provides access to the complete transcripts of live chat sessions.

To access this report, navigate to :menuselection:`Live Chat app --> Report --> Sessions History`.
Each live chat session is represented by a Kanban card.

.. image:: reports/sessions-history.png
   :alt: Example of the Sessions History report from the Live Chat application.

To view the transcript from a specific session, click the Kanban card. This opens the *Discuss*
thread for the conversation.

In the *Discuss* thread, the conversation view displays the entire transcript of the conversation.
If the visitor left a rating, it is included at the end of the transcript.

.. image:: reports/chat-transcript.png
   :alt: View of the chat transcript in the Discuss application.

Export sessions history
-----------------------

The information in this report can be exported, or inserted into a spreadsheet.

On the *Sessions History* report, click the :icon:`oi-view-list` :guilabel:`(List)` icon to switch
to list view. Next, click the :icon:`fa-cog` :guilabel:`(gear)` icon to the right of the
:guilabel:`History` page title to reveal a drop-down menu.

From the drop-down menu, click :guilabel:`Export All` to export all sessions to a spreadsheet, or
:guilabel:`Insert list in spreadsheet` to insert the information in a new, or existing, spreadsheet.

To only export select sessions, first select the desired sessions to be exported from the list, by
clicking the checkbox to the left of each individual session. With the sessions selected, click the
:icon:`fa-cog` :guilabel:`Actions` icon at the top of the page, and click :guilabel:`Export` or
:guilabel:`Insert list in spreadsheet`.

.. _livechat/session-statistics:

Session Statistics
==================

The *Session Statistics* report provides a statistical overview of live chat sessions. The default
view for this report displays sessions grouped by the date of creation.

To access this report, navigate to :menuselection:`Live Chat app --> Reports --> Session
Statistics`.

.. figure:: reports/sessions-statistics.png
   :alt: Example of the Sessions Statistics report from the Live Chat application.

   The stacked bar graph view of the *Session Statistics* report, with results grouped by Creation
   Date (hour), then by rating.

To view a different measure, click the :guilabel:`Measures` drop-down menu at the top-left of the
report. The measures available for this report include:

- :guilabel:`# of speakers`: number of participants in the conversation.
- :guilabel:`Days of activity`: number of days since the operator's first session.
- :guilabel:`Duration of Session (min)`: the duration of a conversation, in minutes.
- :guilabel:`Is visitor anonymous`: denotes whether the conversation participant is anonymous.
- :guilabel:`Messages per session`: the total number of messages sent in a conversation. This
  measure is included in the default view.
- :guilabel:`Rating`: the rating received by an operator at the end of a session, if one was
  provided.
- :guilabel:`Session not rated`: denotes if a session did **not** receive a rating at the end of the
  conversation.
- :guilabel:`Time to answer (sec)`: the average time, in seconds, before an operator responds to a
  chat request.
- :guilabel:`Visitor is Happy`: denotes whether a positive rating was provided. If the visitor gave
  either a negative or neutral rating, they are considered *unhappy*.
- :guilabel:`Count`: the total number of sessions.

.. _livechat/operator-analysis:

Operator Analysis
=================

The *Operator Analysis* report is used to monitor the performance of individual live chat operators.

To access the report, navigate to :menuselection:`Live Chat app --> Reports --> Operator Analysis`.

The default view for this report is a bar chart, which only displays conversations from the current
month, as indicated by the :guilabel:`This Month` default search filter. Conversations are grouped
by operator.

To view a different measure, click the :guilabel:`Measures` drop-down menu at the top-left of the
report. The measures available for this report include:

- :guilabel:`# of Sessions`: the number of sessions an operator participated in. This measure is
  included by default.
- :guilabel:`Average duration`: the average duration of a conversation, in seconds.
- :guilabel:`Average rating`: the average rating received by the operator.
- :guilabel:`Time to answer`: the average amount of time before the operator responds to a chat
  request, in seconds.
- :guilabel:`Count`: the total number of sessions.

.. image:: reports/operator-analysis.png
   :alt: Example of the Operator Analysis report from the Live Chat application.
