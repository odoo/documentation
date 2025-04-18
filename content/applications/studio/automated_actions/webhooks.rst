========
Webhooks
========

.. warning::
  It is *highly recommended* to consult with a developer, solution architect, or another technical
  role when deciding to use webhooks and throughout the implementation process. If not properly
  configured, webhooks may disrupt the Odoo database and can take time to revert.

Webhooks, which can be created in **Odoo Studio**, allow you to automate an action in your Odoo
database when a specific event occurs in another, external system.

In practice, this works as follows: when the event occurs in the external system, a data file (the
"payload") is sent to the Odoo webhook's URL via a `POST` API request, and a predefined action is
performed in your Odoo database.

Unlike scheduled actions, which run at predefined intervals, or manual API requests, which need to
be explicitly invoked, webhooks enable real-time, event-driven communication and automation. For
example, you can set up a webhook to have your Odoo inventory data updated automatically when a
sales order is confirmed in an external point-of-sale system.

Setting up a webhook in Odoo requires no coding when connecting two Odoo databases, but
:ref:`testing a webhook <studio/webhooks/test-webhook>` requires an external tool.
:ref:`Custom target records or actions <studio/webhooks/webhook-example>` may require programming
skills.

.. note::
   This article covers creating a webhook that *receives* data from an external source. However,
   it is also possible to create an automated action that :ref:`sends data to an external webhook
   <studio/automated-actions/action-webhook>` when a change occurs in your Odoo database.

.. _studio/webhooks/create-webhook:

Create a webhook in Odoo
========================

.. important::
   Before implementing a webhook in a live database, configure and test it using a :ref:`duplicate
   database <odoo_online/database-management>` to ensure the webhook performs as intended.

.. tip::
   :ref:`Activating developer mode <developer-mode>` before creating up a webhook gives greater
   flexibility in selecting the :doc:`model <../models_modules_apps>` the automation rule
   targets. It also allows you to find the technical name of the model and fields, which may be
   needed to configure the payload.

   To find a model's technical name, with developer mode activated, hover over the model name and
   then click :icon:`fa-arrow-right` :guilabel:`(Internal link)`. The technical name can be found in
   the :guilabel:`Model` field. For example, a sales order webhook uses the *Sales
   Order* model, but the technical name `sale.order` is used in the payload.

To create a webhook in **Studio**, proceed as follows:

#. :ref:`Open Studio <studio/access>` and click :guilabel:`Webhooks`, then :guilabel:`New`.
#. Give the webhook a clear, meaningful name that identifies its purpose.
#. If needed, and provided developer mode is activated, select the appropriate :guilabel:`Model`
   from the dropdown. If developer mode is not activated, the automation rule targets the current
   model by default.

#. The webhook's URL is automatically generated, but can be changed if needed by clicking
   :guilabel:`Rotate Secret`. This is the URL that should be used when implementing the webhook in
   the external system that will send updates to the database.

   .. warning::
      The URL is **confidential** and should be treated with care. Sharing it online or without
      caution can provide unintended access to the Odoo database. If the URL is updated after the
      initial implementation, make sure to update it in the external system.

#. If desired, enable :guilabel:`Log Calls` to track the history of API requests made to the
   webhook's URL, e.g., for troubleshooting purposes.

#. If the system sending the webhook is not Odoo, adjust the :guilabel:`Target Record` code to look
   for the JSON record included in the payload when the API request is made to the webhook's URL. If
   the system sending the webhook is an Odoo database, ensure that the `id` and `model` appear in
   the payload.

   If the webhook is used to create records in the Odoo database, use `model.browse(i)` or
   `model.search(i)` instead of the default :guilabel:`Target Record` format.

#. Click :guilabel:`Add an action` in the :guilabel:`Actions To Do` tab to define the :ref:`actions
   <studio/automated-actions/action>` to be executed.
#. Before implementing the webhook in the external system, :ref:`test
   <studio/webhooks/test-webhook>` it to ensure it works as intended.

.. tip::
   - Webhooks can also be created via the :guilabel:`Automations` menu in **Studio** by selecting
     the trigger :guilabel:`On webhook`.
   - To access the history of API requests if :guilabel:`Log Calls` has been enabled, click the
     :guilabel:`Logs` smart button at the top of the :guilabel:`Automation rules` form.
   - If the purpose of the webhook is anything other than to update an existing record, e.g., to
     create a new record, the :guilabel:`Execute Code` action must be chosen.

.. _studio/webhooks/test-webhook:

Test a webhook
==============

Testing a webhook requires a test payload and an external tool or system, like
`Postman <https://www.postman.com/>`_, to send the payload via a `POST` API request. This section
presents the steps to test a webhook in Postman.

.. tip::
   - See the :ref:`webhook use cases section <studio/webhooks/webhook-examples>` for step-by-step
     explanations of how to test webhooks using test payloads.
   - To get specific help with testing a webhook with Postman, contact their support team.

#. In Postman, create a new HTTP request and set its method to :guilabel:`POST`.
#. Copy the webhook's URL from your Odoo database using the :icon:`fa-link` :guilabel:`(link)` icon
   and paste it into the URL field in Postman.
#. Click the :guilabel:`Body` tab and select :guilabel:`raw`.
#. Set the file type to :guilabel:`JSON`, then copy the code from the test payload and paste it into
   the code editor.
#. Click :guilabel:`Send`.

.. _studio/webhooks/test-webhook-response:

In the :guilabel:`Response` viewer at the bottom of the screen in Postman, details, including a HTTP
response code, indicate whether or not the webhook is functioning correctly.

- A `200 OK` or `status: ok` message indicates that the webhook is functioning properly on Odoo's
  side. From here, implementation can begin with the other system to automatically send the API
  requests to the Odoo webhook's URL.

- If any other response is returned, the number associated with it helps to identify the problem.
  For example, a `500 Internal Server Error` message means that Odoo could not interpret the call
  properly. In this case, ensure the fields found in the JSON file are properly mapped in the
  webhook's configuration and in the system sending the test call.

.. tip::
   Turning on call logging in the webhook's configuration in Odoo provides error logs if the webhook
   is not functioning as intended.

Implement a webhook in an external system
=========================================

When the webhook has been successfully created in Odoo and tested, implement it in the system that
sends data to the Odoo database, making sure the `POST` API requests are sent to the webhook's URL.

.. _studio/webhooks/webhook-examples:

Webhook use cases
=================

Below are two examples of how to use webhooks in Odoo. A test payload is provided for each example,
and can be found in the section on testing the webhook. `Postman <https://www.postman.com/>`_ is
used to send the test payload.

Update a sales order's currency
-------------------------------

This webhook updates a sales order in the **Sales** app to `USD` when the external system sends a
`POST` API request to the webhook's URL that includes that sales order number (which is identified
by the payload's `id` record).

This could be useful for subsidiaries outside the United States with a mother company located inside
the United States or during mergers when consolidating data into one Odoo database.

Create the webhook
~~~~~~~~~~~~~~~~~~

To create this webhook, proceed as follows:

#. Open the **Sales** app, then :ref:`open Studio <studio/access>` and click :guilabel:`Webhooks`.
   The *Sales Order* model is selected by default.
#. Click :guilabel:`New`. The :guilabel:`Trigger` is set to :guilabel:`On webhook` by default.
#. Set the :guilabel:`Target Record` to
   `model.env[payload.get('_model')].browse(int(payload.get('_id')))`, where:

   - `payload.get('_model')` retrieves the value associated with the `model` key in the payload,
     i.e., `sale.order`, which is the technical name of the *Sales Order* model.
   - `payload.get('_id')` retrieves the value associated with the `id` key in the payload, i.e.,
     the number of the target sales order in your Odoo database with the `S` and leading
     zeros removed.
   - `int` converts the retrieved id to an integer (i.e., a whole number) because the method
     `browse()` can only be used with an integer.

#. Click :guilabel:`Add an action`.
#. In the :guilabel:`Type` section, click :guilabel:`Update Record`.
#. In the :guilabel:`Action details` section, select :guilabel:`Update`, choose the field
   :guilabel:`Currency`, and select :guilabel:`USD`.
#. Click :guilabel:`Save & Close`.

Test the webhook
~~~~~~~~~~~~~~~~

To test this webhook, proceed as follows:

#. With `Postman <https://www.postman.com/>`_ open, create a new HTTP request and set its method to
   :guilabel:`POST`.
#. Copy the URL of the Odoo webhook using the :icon:`fa-link` :guilabel:`(link)` icon and paste it
   into the URL field in Postman.
#. Click the :guilabel:`Body` tab and select :guilabel:`raw`.
#. Set the file type to :guilabel:`JSON`, then copy this code, i.e., the payload, and paste it into
   the code editor:

   .. code-block:: json

      {
          "_model": "sale.order",
          "_id": "SALES ORDER NUMBER"
      }

#. In your Odoo database, choose a sales order to test the webhook on. In the pasted code, replace
   `SALES ORDER NUMBER` with the sales order's number without the `S` or any zeros before the
   number. For example, a sales order with the number `S00007` should be entered as `7` in Postman.
#. Click :guilabel:`Send`.
#. Consult the :ref:`Response viewer <studio/webhooks/test-webhook-response>` in Postman to
   determine whether or not the webhook is functioning properly. If a message other than `200 OK` or
   `status: ok` is returned, the number associated with the message helps to identify the problem.

.. _studio/webhooks/webhook-example:

Create a new contact
--------------------

This webhook uses custom code to create a new contact in an Odoo database when the external system
sends a `POST` API request to the webhook's URL that includes the contact's information. This could
be helpful for automatically creating new vendors or customers.

Create the webhook
~~~~~~~~~~~~~~~~~~

To create this webhook, proceed as follows:

#. Open the **Contacts** app, then :ref:`open Studio <studio/access>` and click :guilabel:`Webhooks`.
   The *Contact* model is selected by default.
#. Click :guilabel:`New`. The :guilabel:`Trigger` is set to :guilabel:`On webhook` by default.
#. Set the :guilabel:`Target Record` to `model.browse([2])`. This is essentially a placeholder as
   the code in the automated action tells the webhook what needs to be retrieved from the payload
   and in which model the record needs to be created.
#. Click :guilabel:`Add an action`.
#. In the :guilabel:`Type` section, click :guilabel:`Execute Code`.
#. Copy this code and paste it into the code editor in the :guilabel:`Code` tab of the
   :guilabel:`Action details` section:

   .. code-block:: python

      # variables to retrieve and hold data from the payload
      contact_name = payload.get('name')
      contact_email = payload.get('email')
      contact_phone = payload.get('phone')

      # a Python function to turn the variables into a contact in Odoo
      if contact_name and contact_email:
          new_partner = env['res.partner'].create({
              'name': contact_name,
              'email': contact_email,
              'phone': contact_phone,
              'company_type':'person',
              'customer_rank': 1,
          })
      # an error message for missing required data in the payload
      else:
          raise ValueError("Missing required fields: 'name' and 'email'")

#. Click :guilabel:`Save & Close`.

Test the webhook
~~~~~~~~~~~~~~~~

To test this webhook, proceed as follows:

#. In `Postman <https://www.postman.com/>`_, create a new HTTP request and set its method to
   :guilabel:`POST`.
#. Copy the URL of the Odoo webhook using the :icon:`fa-link` :guilabel:`(link)` icon and paste it
   into the URL field in Postman.
#. Click the :guilabel:`Body` tab and select :guilabel:`raw`.
#. Set the file type to :guilabel:`JSON`, then copy this code, i.e., the payload, and paste it into
   the code editor:

   .. code-block:: json

      {
          "name": "CONTACT NAME",
          "email": "CONTACTEMAIL@EMAIL.COM",
          "phone": "CONTACT PHONE NUMBER"
      }

#. In the pasted code, replace the `CONTACT NAME`, `CONTACTEMAIL@EMAIL.COM`, and `CONTACT PHONE
   NUMBER` with a new contact's information.
#. Click :guilabel:`Send`.
#. Consult the :ref:`Response viewer <studio/webhooks/test-webhook-response>` in Postman to
   determine whether or not the webhook is functioning properly. If a message other than `200 OK` or
   `status: ok` is returned, the number associated with the message helps to identify the problem.
