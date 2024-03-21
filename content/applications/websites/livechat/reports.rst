=======
Reports
=======

Odoo *Live Chat* includes several reports that allow for the monitoring of operator performance and
the identification of trends in customer conversations.

Available reports
=================

The following reports are included in the *Live Chat* app:

- :ref:`Sessions History <livechat/sessions-history>`
- :ref:`Session Statistics <livechat/session-statistics>`
- :ref:`Operator Analysis <livechat/operator-analysis>`

.. note::
   The *Live Chat Ratings Report* can also be accessed through the :guilabel:`Report` menu. For more
   information on this report, and on the *Live Chat* rating process, see :doc:`Live Chat Ratings
   <../livechat/ratings>`.

To access a drop-down menu of all the available reports, navigate to :menuselection:`Live Chat app
--> Report`.

.. _livechat/sessions-history:

Sessions History
----------------

The *Sessions History* report displays an overview of live chat sessions, including session dates,
participant name and country, session duration, the number of messages, and the rating. It also
provides access to the complete transcripts of live chat sessions.

To access this report, navigate to :menuselection:`Live Chat app --> Report --> Sessions History`.

.. image:: reports/sessions-history.png
   :align: center
   :alt: Example of the Sessions History report from the Live Chat application.

The information in this report can be exported, or inserted into a spreadsheet.

Click the :guilabel:`⚙️ (gear)` icon to the right of the :guilabel:`History` page title, in the
top-left corner. Doing so reveals a drop-down menu.

From the drop-down menu, click :guilabel:`Export All` to export all sessions to a spreadsheet, or
:guilabel:`Insert list in spreadsheet` to insert the information in a new, or existing, spreadsheet.

To only export select sessions, first select the desired sessions to be exported from the list, by
clicking the checkbox to the left of each individual session. With the sessions selected, click the
:guilabel:`⚙️ (gear) Actions` icon in the top-center of the page, and click :guilabel:`Export` or
:guilabel:`Insert list in spreadsheet`.

To view the transcript of an individual conversation, click anywhere on the entry line. This opens
the *Discuss* thread for the conversation.

In the *Discuss* thread, the conversation view displays the entire transcript of the conversation.
At the top of the conversation, there is a list of the web pages the visitor browsed before
beginning their chat session, along with corresponding time stamps. If the visitor left a rating, it
is included at the end of the transcript.

.. image:: reports/chat-transcript.png
   :align: center
   :alt: View of the chat transcript in the Discuss application.

.. _livechat/session-statistics:

Session Statistics
------------------

The *Session Statistics* report provides a statistical overview of live chat sessions. The default
view for this report displays sessions grouped by the date of creation.

To access this report, navigate to :menuselection:`Live Chat app --> Reports --> Session
Statistics`.

.. figure:: reports/sessions-statistics.png
   :align: center
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
-----------------

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
   :align: center
   :alt: Example of the Operator Analysis report from the Live Chat application.

View and filter options
=======================

On any Odoo report, the view and filter options vary, depending on what data is being analyzed,
measured, and grouped. See below for additional information on the available views for the *Live
Chat* reports.

.. note::
   The :ref:`Sessions History <livechat/sessions-history>` report is **only** available in list
   view.

Pivot view
----------

The *pivot* view presents data in an interactive manner. The :ref:`Session Statistics
<livechat/session-statistics>` and :ref:`Operator Analysis <livechat/operator-analysis>` reports are
available in pivot view.

The pivot view can be accessed on a report by selecting the :guilabel:`grid icon` at the top-right
of the screen.

To add a group to a row or column, click the :guilabel:`➕ (plus sign)` icon next to
:guilabel:`Total`, and then select one of the groups from the drop-down menu that appears. To remove
one, click the :guilabel:`➖ (minus sign)` icon, and de-select the appropriate option.

Graph view
----------

The *graph* view presents data in either a *bar*, *line*, or *pie* chart. The :ref:`Session
Statistics <livechat/session-statistics>` and :ref:`Operator Analysis <livechat/operator-analysis>`
reports are available in graph view.

Switch to the graph view by selecting the :guilabel:`line chart` icon at the top-right of the
screen. To switch between the different charts, select the desired view's corresponding icon at the
top-left of the chart, while in graph view.

.. tip::
   Both the bar chart and line chart can utilize the *stacked* view option. This presents two or
   more groups of data on top of each other, instead of next to each other, making it easier to
   compare data.

Save and share a favorite search
--------------------------------

The *Favorites* feature found on reports allows users to save their most commonly used filters,
without having to reconstruct them every time they are needed.

To create and save a filter to the *Favorites* section on the search bar drop-down menu, follow the
steps below:

#. Set the necessary parameters using the :guilabel:`Filters` and :guilabel:`Group By` options
   available in the :guilabel:`Search...` bar drop-down menu and the :guilabel:`Measures` drop-down
   menu at the top-left of the report.
#. Click the :guilabel:`🔻(triangle pointed down)` icon next to the :guilabel:`Search...` bar to
   open the drop-down menu.
#. Under the :guilabel:`Favorites` heading, click :guilabel:`Save current search`.
#. Rename the search.
#. Select :guilabel:`Default filter` to have these filter settings automatically displayed when the
   report is opened. Otherwise, leave it blank.
#. Select :guilabel:`Shared` to make this filter available to all other database users. If this box
   is not checked, the filter is only available to the user who creates it.
#. Click :guilabel:`Save` to preserve the configuration for future use.
