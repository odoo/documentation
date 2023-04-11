=============================
Commands and Canned Responses
=============================

Using canned responses can help you save time and have a previous, well-thought response, to some
of your most common questions and comments.

Use commands
============

Commands are shortcuts that do specific actions within the chat window:

#. **/help**: shows a help message.
#. **/helpdesk**: creates a helpdesk ticket.
#. **/helpdesk_search**: searches for a helpdesk ticket.
#. **/history**: shows the last 15 visited pages.
#. **/lead**: creates a new lead.
#. **/leave**: leaves the channel.

.. important::
   | - For *helpdesk tickets*: make sure the application is installed on your database and the
     option *Live Chat* under :menuselection:`Helpdesk --> Configuration --> Helpdesk Teams`
     is enabled.
   | - For *leads*: the *CRM* application must be installed on your database.

To access the ticket or lead created from the chat, click on the shortcut link.

.. image:: responses/create_ticket.png
   :align: center
   :alt: View of the chat window with a helpdesk ticket created in Odoo Live Chat

.. tip::
   Helpdesk tickets created from the chat automatically add the conversation as a description of
   the ticket. The same goes for the creation of a lead.

Send canned responses
=====================

| Canned responses allow you to have a full piece of text being placed when you type a shortcut word.
  To create them, go to :menuselection:`Live Chat --> Configuration --> Canned Responses`.
| To use them during a conversation, simply type **:** followed by the shortcut word you created.

.. image:: responses/canned_response.png
   :align: center
   :alt: View of a chat window and the use of a canned response in Odoo Live Chat

.. seealso::
   - :doc:`ratings`
