===========
Call queues
===========

A call queue organizes and routes incoming calls when all agents are busy, placing callers on hold
in the order they called. This system helps manage high call volumes more efficiently, ensures fair
workload distribution, and provides a more predictable experience for both callers and agents.

This document explains how to configure call queue settings and log into a queue from the Odoo
database.

.. seealso::
   :ref:`Set up on hold music <voip/axivox/music_on_hold>`

Add a queue
===========

To add a call queue in Axivox, navigate to the `Axivox management console
<https://manage.axivox.com>`_. In the left menu, click :guilabel:`Queues`. Next, click
:guilabel:`Add a queue`. From here, set up the call queue.

- :guilabel:`Name`: The call queue's name. A required field.
- :guilabel:`Internal Extension`: The extension agents can transfer callers to. A required field.
- :guilabel:`Strategy`: How calls are routed. Choose the option that best matches the company's
  needs for this call queue:

  - :guilabel:`Call all available agents`: The call is sent to every agent.
  - :guilabel:`Calls the agent who has received the call for the longest time`: The call is sent to
    the agent with the longest idle time.
  - :guilabel:`Calls the agent who has received the least call`: The call is sent to the agent who
    has handled the fewest calls in a time window.
  - :guilabel:`Call a random agent`: The call is sent to a random agent.
  - :guilabel:`Call agents one after the other`: The call is sent to the next agent in a specified
    order. This order is remembered, and the order does not reset after each call.
  - :guilabel:`Call agents one after the other starting with the first in the list`: The call is
    sent to the next agent in a specified order. This order is remembered, and the order does reset
    after each call.

- :guilabel:`Maximum waiting time in seconds`: How long a customer can wait in the queue before
  getting forwarded to voicemail or a specific agent.
- :guilabel:`Maximum duration of ringing at an agent`: How long an individual agent's phone rings
  before the call gets moved onto the next step in the dial plan. Learn more about :doc:`dial plans
  <dial_plan_basics>`.
- :guilabel:`Static agents`: Agents in the queue who receive calls without logging in.
- :guilabel:`Dynamic agents`: Agents who must log into the queue to receive calls from it.

.. seealso::
   - :ref:`voip/axivox/music_on_hold`
   - :doc:`dial_plan_basics`
   - :doc:`dial_plan_advanced`

Agent connection
================

Agents have three ways to join a call queue:

- Static agents connect automatically.

  - Static agents are always signed into the call queue.

- Manager logs in specific agents, via the `Axivox management console <https://manage.axivox.com>`_.
- Agent connects to the queue in Odoo, via the **VoIP** widget.

Connect to the queue through Axivox
-----------------------------------

Once the call queue is set up and the changes are applied, a manager can log into the `Axivox
management console <https://manage.axivox.com>`_ and connect dynamic agents to the queue manually.

To connect an agent, click :guilabel:`Queues`, located in the left-hand menu. Doing so opens the
:guilabel:`Queues` dashboard, with a few different columns listed:

- :guilabel:`Name`: name of the queue.
- :guilabel:`Extension`: number of the extension to be dialed to reach the queue.
- :guilabel:`Agent Connection`: number to dial for dynamic agents to log into the queue.
- :guilabel:`Agent disconnection`: number to dial for dynamic agents to log out of the queue.
- :guilabel:`Connected Agents`: name of agents connected to the queue.

The following buttons are also available on the :guilabel:`Queues` dashboard:

- :guilabel:`Connect an agent`: manually connect an agent to the queue.
- :guilabel:`Report`: run a report on the queue.
- :guilabel:`Delete`: delete the queue.
- :guilabel:`Edit`: make changes to the queue's settings.

When agents are connected to the queue, or are live with a customer, they are displayed under the
:guilabel:`Connected Agents` column.

If they are static agents, they **always** show up as connected.

Connect an agent by clicking the orange button labeled :guilabel:`Connect an agent`. Then, select
the desired agent's name from the drop-down menu, and click :guilabel:`Connect`.

To manually log a dynamic agent out of a call queue, navigate to the `Axivox management console
<https://manage.axivox.com>`_, and click :guilabel:`Queues` from the left-hand menu. Then, click the
green :guilabel:`Refresh` button at the top of the :guilabel:`Connected agents` column. From here,
click the red :guilabel:`Disconnect` button, and they are immediately disconnected. This can be
helpful in situations where agents forget to log out at the end of the day.

.. image:: call_queues/call-queue.png
   :alt: Call queue with connected agents column highlighted and connect an agent and report buttons
         highlighted.

Report
~~~~~~

Click :guilabel:`Report` to open a :guilabel:`Queue report` page that shows queue activity. This
report includes who connected and when when, as well as what phone calls were handled by the queue.f
This information is showcased on a separate :guilabel:`Queue report` page.

Set the report's date in the :guilabel:`Period` field. To pick a specific date range, use the
:guilabel:`From` and :guilabel:`to` fields. The information can be organized by :guilabel:`Event
type` (covered below), and :guilabel:`Call ID`.

Generate the report by clicking :guilabel:`Apply`.

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
- :guilabel:`Blind Transfer` (when the caller is transferred without interacting with an agent)

Any or all of the thirteen options can be selected from the :guilabel:`Event type` drop-down menu.
Clicking :guilabel:`Check all` selects all the available options from the drop-down menu, and
clicking :guilabel:`Uncheck all` removes all selections from the drop-down menu.

To select an individual :guilabel:`Event type`, click on the desired option in the drop-down menu.

.. image:: call_queues/report.png
   :alt: Axivox queue report with result, event type, and period highlighted.

Connect to queue on Odoo
------------------------

Dynamic agents can connect manually to the Axivox call queue from the Odoo **VoIP** widget once the
**VoIP** app is configured for the individual user in Odoo.

To access the Odoo **VoIP** widget, click the :icon:`oi-voip` :guilabel:`(VoIP)`  icon in the
upper-right corner of the screen anywhere in an Odoo database.

.. seealso::
   - :doc:`axivox_config`
   - :doc:`../voip_widget`

For an agent to connect to the call queue, dial the :guilabel:`Agent connection` number, and then
press the green call button :icon:`fa-phone` :guilabel:`(phone)` icon in the **VoIP** widget. Then,
the agent hears a short, two-second message indicating the agent is logged in. The call
automatically ends.

To view the connected agents in a call queue, navigate to the `Axivox management console
<https://manage.axivox.com>`_, and click :guilabel:`Queues` from the left-hand menu.

Then, click the green :guilabel:`Refresh` button at the top of the :guilabel:`Connected agents`
column. Any agent, static or dynamic, that is connected to the queue currently appears in the column
next to the queue they are logged into.

To log out of the queue, open the Odoo **VoIP** widget, dial the :guilabel:`Agent disconnection`
number, and then press the green call button :icon:`fa-phone` :guilabel:`(phone)` icon. The agent is
disconnected from the queue after a short, two-second message.
