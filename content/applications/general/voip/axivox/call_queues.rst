===========
Call queues
===========

A call queue is a system that organizes and routes incoming calls. When customers call a business,
and all of the agents are busy, the call queue lines up the callers in sequential order, based on
the time they called in.

The callers then wait on hold to be connected to the next available call center agent.

Implementing a call queue system reduces stress for employees, and helps build brand trust with
customers. Many companies use call queues to set expectations with customers, and to distribute the
workload equally amongst employees.

This document covers the process required to configure call queues (with advanced settings), as well
as how to log into a call queue from the Odoo database.

.. seealso::
   :ref:`voip/axivox/music_on_hold`

Add a queue
===========

To add a call queue in Axivox, navigate to the `Axivox management console
<https://manage.axivox.com>`_. In the left menu, click :guilabel:`Queues`. Next, click
:guilabel:`Add a queue`. Doing so reveals a blank :guilabel:`New queue` form with various fields to
fill out.

Name
----

Once the :guilabel:`New queue` page appears, enter the :guilabel:`Name` of the queue.

Internal extension
------------------

Choose an :guilabel:`Internal extension` for the queue. This is a number to be dialed by users of
the database to reach the login prompt for the queue.

Strategy
--------

Next, is the :guilabel:`Strategy` field. This field determines the call routing of received calls
into this queue.

The following choices are available in the :guilabel:`Strategy` drop-down menu:

- :guilabel:`Call all available agents`
- :guilabel:`Calls the agent who has received the call for the longest time`
- :guilabel:`Calls the agent who has received the least call`
- :guilabel:`Call a random agent`
- :guilabel:`Call agents one after the other`
- :guilabel:`Call agents one after the other starting with the first in the list`

Choose a strategy that best meets the company's needs for customers in the queue.

Maximum waiting time in seconds
-------------------------------

In the :guilabel:`Maximum waiting time in seconds` field, determine the longest time a customer
waits in the queue before going to a voicemail, or wherever else they are directed to in a dial
plan. Enter a time in seconds.

Maximum duration of ringing at an agent
---------------------------------------

In the :guilabel:`Maximum duration of ringing at an agent` field, determine the longest time an
individual agent's line rings before moving on to another agent, or moving to the next step in the
dial plan. Enter a time in seconds.

.. seealso::
   For more information on dial plans, visit:

   - :doc:`dial_plan_basics`
   - :doc:`dial_plan_advanced`

Adding agents
-------------

The final two fields on the :guilabel:`New queue` form revolve around adding agents. Adding
:guilabel:`Static agents` and :guilabel:`Dynamic agents` are two pre-configured methods for adding
agents onto the call queue during the configuration.

.. _voip/axivox/static-agents:

Static agents
~~~~~~~~~~~~~

When :guilabel:`Static agents` are added, these agents are automatically added to the queue without
the need to log in to receive calls.

.. _voip/axivox/dynamic-agents:

Dynamic agents
~~~~~~~~~~~~~~

When :guilabel:`Dynamic agents` are added, these agents have the ability to log into this queue.
They are **not** logged-in automatically, and **must** log in to receive calls.

Be sure to :guilabel:`Save` the changes, and click :guilabel:`Apply changes` in the upper-right
corner to implement the change in production.

Agent connection
================

There are three ways call agents can connect to an Axivox call queue:

#. Dynamic agents connect automatically.
#. Manager logs in specific agent(s), via the `Axivox management console
   <https://manage.axivox.com>`_.
#. Agent connects to the queue in Odoo, via the *VoIP* widget.

.. seealso::
   See the documentation on setting :ref:`voip/axivox/dynamic-agents` in the `Axivox management
   console <https://manage.axivox.com>`_.

Connect via Axivox queue
------------------------

After the initial configuration of the call queue is completed, with the changes saved and
implemented, a manager can log into the `Axivox management console <https://manage.axivox.com>`_ and
connect dynamic agents to the queue manually.

To connect an agent, click :guilabel:`Queues`, located in the left-hand column. Doing so reveals the
:guilabel:`Queues` dashboard, with a few different columns listed:

- :guilabel:`Name`: name of the queue.
- :guilabel:`Extension`: number of the extension to be dialed to reach the queue.
- :guilabel:`Agent Connection`: number to dial to log into the queue.
- :guilabel:`Agent disconnection`: number to dial to log out of the queue.
- :guilabel:`Connected Agents`: name of agent connected to the queue.

The following buttons are also available on the :guilabel:`Queues` dashboard:

- :guilabel:`Connect an agent`: manually connect an agent to the queue.
- :guilabel:`Report`: run a report on the queue.
- :guilabel:`Delete`: delete the queue.
- :guilabel:`Edit`: make changes to the settings of the queue.

When agents are connected to the queue, or are live with a customer, they are displayed under the
:guilabel:`Connected Agents` column.

If they are static agents, they **always** show up as connected.

Connect an agent by clicking the orange button labeled, :guilabel:`Connect an agent`. Then, select
the desired agent's name from the drop-down menu, and click :guilabel:`Connect`.

.. image:: call_queues/call-queue.png
   :align: center
   :alt: Call queue with connected agents column highlighted and connect an agent and report buttons
         highlighted.

.. seealso::
   For more information on static and dynamic agents, see this documentation:

   - :ref:`voip/axivox/static-agents`
   - :ref:`voip/axivox/dynamic-agents`

Report
~~~~~~

Click :guilabel:`Report` to check on the reporting for a particular queue, in order to see who
connected when, and what phone calls came in and out of the queue. This information is showcased on
a separate :guilabel:`Queue report` page, when the green :guilabel:`Report` button is clicked.

Reports can be customized by date in the :guilabel:`Period` field, and specified in the
:guilabel:`From` and :guilabel:`to` fields. The information can be organized by :guilabel:`Event
type`, and :guilabel:`Call ID`.

When the custom configurations have been entered, click :guilabel:`Apply`.

Each report can be exported to a :abbr:`CSV (comma separated value)` file for further use and
analysis, via the :guilabel:`Export to CSV` button.

When the :guilabel:`Event type` field is clicked, a drop-down menu appears with the following
options:

- :guilabel:`The caller quit`
- :guilabel:`An agent is connecting`
- :guilabel:`An agent is disconnecting`
- :guilabel:`The call was terminated (agent hangs up)`
- :guilabel:`The call was terminated (caller hangs up)`
- :guilabel:`The caller is connected to an agent.`
- :guilabel:`Someone is entering the queue`
- :guilabel:`The caller exits the queue (no agent is connected)`
- :guilabel:`The caller exits the queue (timeout)`
- :guilabel:`No one is answering`
- :guilabel:`No one is answering, the caller hangs up`
- :guilabel:`Transfer`
- :guilabel:`Blind Transfer`

.. image:: call_queues/event-type.png
   :align: center
   :alt: Event types in the Axivox queue reporting feature.

There is no limit to how many options can be selected from the :guilabel:`Event type` drop-down
menu.

Clicking :guilabel:`Check all` selects all the available options from the drop-down menu, and
clicking :guilabel:`Uncheck all` removes all selections from the drop-down menu.

To select an individual :guilabel:`Event type`, click on the desired option in the drop-down menu.

.. image:: call_queues/report.png
   :align: center
   :alt: Axivox queue report with result, event type, and period highlighted.

Connect to queue on Odoo
------------------------

Dynamic agents can connect manually to the Axivox call queue from the Odoo *VoIP* widget, once the
*VoIP* app is configured for the individual user in Odoo.

.. seealso::
   :doc:`axivox_config`

To access the Odoo *VoIP* widget, click the :guilabel:`☎️ (phone)` icon in the upper-right corner of
the screen, from any window within Odoo.

.. seealso::
   For more information on the Odoo *VoIP* widget, see this documentation: :doc:`../voip_widget`

For an agent to connect to the call queue, simply dial the :guilabel:`Agent connection` number, and
press the green call button :guilabel:`📞 (phone)` icon in the *VoIP* widget. Then, the agent hears
a short, two-second message indicating the agent is logged in. The call automatically ends
(disconnects).

To view the connected agents in a call queue, navigate to the `Axivox management console
<https://manage.axivox.com>`_, and click :guilabel:`Queues`, located in the left-hand column.

Then, click the green :guilabel:`Refresh` button at the top of the :guilabel:`Connected agents`
column. Any agent (static or dynamic) that is connected to the queue currently, appears in the
column next to the queue they are logged into.

To log out of the queue, open the Odoo *VoIP* widget, dial the :guilabel:`Agent disconnection`
number, and press the green call button :guilabel:`📞 (phone)` icon. The agent is disconnected from
the queue after a short, two-second message.

To manually log a dynamic agent out of a call queue, navigate to the `Axivox management console
<https://manage.axivox.com>`_, and click :guilabel:`Queues`, located in the left-hand column. Then,
click the green :guilabel:`Refresh` button at the top of the :guilabel:`Connected agents` column.

To disconnect an agent manually, click the red :guilabel:`Disconnect` button, and they are
immediately disconnected. This can be helpful in situations where agents forget to log out at the
end of the day.
