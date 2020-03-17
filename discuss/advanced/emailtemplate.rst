===============
Email Templates
===============

We all know writing good emails is vital to get a high response rate, but you do not want to
rewrite the same structure every time, do you? That is where email templates come in.
Without the need to rewrite the entire email structure every time, you save time to focus on
the content. Multiple templates also let you deliver the right message to the right audience,
improving their overall experience with the company.

Enable it and understand a few concepts
=======================================

The :doc:`Developer mode <../../general/developer_mode/activate>` must be activated. Then, go to
:menuselection:`Settings --> Technical --> Templates`. A view of the existing templates is shown.

.. warning::
   **It is highly recommended not to change the content in existing templates unless the user has
   prior knowledge about placeholders.**

To add a new one, click on *Create* and choose the type of document this template is used with. In
the example below, the template would be sent to job applicants.

.. image:: media/newtemplate.png
   :align: center
   :alt: New email template form in Odoo

| Under *Email Configuration*, fields such as *From*, *To (Emails)*, *To (Partners)*, require
  placeholders. If the *From* field is not set, the default value is the author’s email alias, if
  configured, or email address.
| Under *Advanced Settings*, if an *Outgoing Mail Server* is not set, the one with the highest
  priority is used.
| The option *Auto Delete* permanently deletes the emails after they are sent, saving space in your
  database.

Writing content including placeholder expressions
-------------------------------------------------

Under the tab *Dynamic Placeholder Generator*, look for the *Field* you would like to use.

.. image:: media/placeholders.png
   :align: center
   :alt: View of the dynamic placeholder generator tab under a new template in Odoo

Next, copy the *Placeholder Expression* and paste it in the *Body* of the email, under the *Content*
tab, using - essentially - the *Code View*.

.. image:: media/codeview.png
   :align: center
   :alt: View of the body code view under the content tab in Odoo

Deactivate the *Code View* option by simply clicking on it again, and easily design the message.
Click on *Preview* to check how the email looks before sending it.

.. image:: media/preview.png
   :align: center
   :alt: View of the content with the standard body view in Odoo


