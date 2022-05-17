======================================
Allow Customers to Close their Tickets
======================================

Allowing customers to close their tickets gives them autonomy and minimize misunderstandings about
when an issue is considered solved, or not. It makes communication and actions more efficient.

Configure the feature
=====================

To configure the feature go to :menuselection:`Helpdesk --> Settings --> Helpdesk Teams --> Edit`
and enable *Ticket closing*.

.. image:: close_tickets/closetickets1.png
   :align: center
   :alt: Ticket closing in Odoo Helpdesk

In order to designate to which stage the ticket migrates to once it is closed, go to
:menuselection:`Helpdesk --> Overview --> Tickets`.

.. image:: close_tickets/closetickets2.png
   :align: center
   :alt: Ticket closing in Odoo Helpdesk

You can either create a new Kanban stage or work with an existing one. For both scenarios, go to
:menuselection:`Helpdesk --> Settings --> Edit Stage` and enable *Closing Stage*.

.. image:: close_tickets/closetickets3.png
   :align: center
   :alt: Ticket closing in Odoo Helpdesk

If a closing stage is not specified, by default, the ticket is moved to the last stage;
contrarily, if you have more than one stage set as closing, the ticket is put in the first one.

The Costumer Portal
===================

Now, once the user logs into his Portal, the option *Close this ticket* is available.

.. image:: close_tickets/closetickets4.png
   :align: center
   :alt: Ticket closing in Odoo Helpdesk

Get reports on tickets closed by costumers
==========================================

To do an analysis of the tickets that have been closed by costumers go to
:menuselection:`Helpdesk --> Reporting --> Tickets --> Filters --> Add Custom filter -->
Closed by partner --> Applied`.

.. image:: close_tickets/closetickets5.png
   :align: center
   :height: 300
   :alt: Reports on Ticket closing in Odoo Helpdesk
