================
AI server action
================

**ai_server_actions** is a module in Odoo that uses artificial intelligence be the trigger of an
action in Odoo, and uses the server action to perform in action in the database. (WIP i dont like
this explanation)

Use case
========

Assign helpdesk team
~~~~~~~~~~~~~~~~~~~~

Use ChatGPT model 4.1 to decide which helpdesk team is most suitable to handle an incoming ticket.
To perform this action, create a server action of :guilabel:`Type` :guilabel:`Update Record`, and
select :guilabel:`Update with AI` in the first input. Then, select the field that will be changed,
in the text field, input the user prompt:

Based on the :guilabel:`Description`, assign the ticket to the correct Helpdesk Team.

Helpdesk team scopes:

- `Customer Care`: For general customer inquiries that are not technical or issue-related.
- `IT Support`: For technical questions, bugs, or any IT-related issues.

:guilabel:`Description` is a field representing the description of a helpdesk ticket. `Customer
Care` and `IT support` are existing helpdesk teams in this use case.

The field records and the user prompt are sent to the model to analyze whether the helpdesk ticket
is better routed to which helpdesk team. After the response is given back to Odoo, the server action
updates the Helpdesk Team.

