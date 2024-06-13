================
Canned responses
================

In order to streamline the process of answering customer inquiries, the *Helpdesk* application
allows for the use of *canned responses*. Canned responses are customizable inputs where a shortcut
stands in for a longer response. An operator enters a keyword shortcut, which is then automatically
replaced by the expanded substitution response.

.. important::
   *Canned responses* are managed through the *Live Chat* application. In order to utilize this
   feature, the *Live Chat* app **must** be installed on the database. The *Helpdesk* team does
   **not** have to have *Live Chat* enabled in order to use canned responses will responding to
   tickets.

What are canned responses
=========================

Canned responses consist of two main components: the *shortcut* and the *substitution*. The shortcut
is the keyword or key phrase that is to be replaced. The substitution is the longer message that
replaces the shortcut.

Creating canned responses
=========================

Canned responses are managed in the *Live Chat* application. To create or edit a canned response,
navigate to :menuselection:`Live Chat app --> Configuration --> Canned Responses`.

To create a new canned response, click :guilabel:`New`.

Next, type a shortcut command in the :guilabel:`Shortcut` field. Then, click to the
:guilabel:`Substitution` field and type the message that will replace the shortcut.

.. tip::
   Try to connect the shortcut to the topic of the substitution. Not only does this make it easier
   to use the responses, it prevents the list of responses from becoming disorganized and
   overwhelming.

In the next field, add a :guilabel:`Description` that provides context for this response, such as
guidelines for when it should or should not be used.

Using canned responses in Helpdesk
==================================

Canned responses can be used in the *chatter* on a ticket, either as part of an internal note, or in
a message. First, navigate to :menuselection:`Helpdesk app` and click the :guilabel:`Tickets`
button on a *Helpdesk* team's Kanban card, then select a ticket to open. Alternatively, open the
:menuselection:`Tickets` menu and select :menuselection:`All Tickets` or :menuselection:`My
Tickets` to choose a ticket.

On the ticket, at the top of the chatter, click the :guilabel:`Send message` button, or the
:guilabel:`Log note` button, to open the text box. Type a colon (`:`) into the text box, followed by
the desired shortcut.

.. tip::
   Typing `:` in the chatter window on its own generates a drop-down list of available canned
   responses. A response can then be selected from the list, in addition to the use of shortcuts.

.. example::
   While working on a customer issue, a support team member wants to add a message about the
   expected turnaround time for responses. They type `:` into the :guilabel:`Send Message` field on
   a *Helpdesk* ticket to see a list of available responses. They then either select or type the
   shortcut `timeline`. This shortcut is replaced with the message below.

