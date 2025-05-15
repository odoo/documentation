========
Webhooks
========

.. warning::
  It is *highly recommended* to consult with a developer, solution architect, or another technical
  role when deciding to use webhooks and throughout the implementation process. If not properly
  configured, webhooks may disrupt the Odoo database and can take time to revert.

Webhooks, which can be created in **Studio**, allow you to automate an action in your Odoo database
when a specific event occurs in another, external system. In practice, this works as follows: when
the event occurs in the external system, a data file (the "payload") is sent to the Odoo webhook's
URL via a `POST` API request, and a predefined action is performed in your Odoo database.

Unlike scheduled actions, which run at predefined intervals, or manual API requests, which need to
be explicitly invoked, webhooks enable real-time, event-driven communication and automation. For
example, you can set up a webhook to have your Odoo inventory data updated automatically when a
sales order is confirmed in an external point-of-sale system.

.. note::
   This article covers creating a webhook that *receives* data from an external source. However,
   an automated action that :ref:`sends data to an external webhook
   <studio/automated-actions/action-webhook>` when a change occurs in your Odoo database can also be
   created.

.. _studio/webhooks/create-webhook:

Create a webhook
================

.. tip::
  - Setting up a webhook in Odoo requires no coding when connecting two Odoo databases, but testing
    requires an external tool like `Postman <https://www.postman.com/>`_. :ref:`Custom target
    records or actions <studio/webhooks/webhook-example>` may require programming skills.

  - :ref:`Activating developer mode <developer-mode>` before creating up a webhook gives greater
    flexibility in selecting the :doc:`model <../models_modules_apps>` the automation rule
    targets and allows you to find a model's technical name, which may be required to configure the
    payload.

To create a webhook in **Studio**, proceed as follows:

#. :ref:`Open Studio <studio/access>` and click :guilabel:`Webhooks`, then :guilabel:`New`.
#. If needed, :ref:`activate developer mode <developer-mode>` and select the appropriate
   :guilabel:`Model` from the drop-down.
#. Set the :guilabel:`Trigger` to :guilabel:`On webhook`.

   .. note::
      The webhook's URL is automatically generated. This is the URL that should be used for
      :ref:`testing the webhook <studio/webhooks/test-webhook>` and connecting it to the external
      system that will send updates to the database.

   .. warning::
      The URL is **confidential** and should be treated with care. Sharing it online or without
      caution can provide unintended access to the Odoo database. Click :guilabel:`Rotate Secret` to
      change the URL if needed. If the URL is updated after the initial implementation, make sure to
      update it in the external system.

#. If desired, enable :guilabel:`Log Calls` to track the history of API requests made to the
   webhook's URL, e.g., for troubleshooting purposes.

#. If the system sending the webhook is not Odoo, adjust the :guilabel:`Target Record` code to look
   for the JSON record included in the payload when the API request is made to the webhook's URL. If
   the system sending the webhook is an Odoo database, ensure that the `id` and `model` appear in
   the payload.

   .. tip::
      To find a model's technical name, e.g., to include it in the payload, :ref:`activate developer
      mode <developer-mode>`, then hover over the model name and then click the
      :icon:`fa-arrow-right` :guilabel:`(Internal link)` icon. The technical name can be found in
      the :guilabel:`Model` field. For example, a sales order webhook uses the *Sales Order* model,
      but the technical name `sale.order` is used in the payload.

   .. note::
      When creating a record in the Odoo database, the target record's default format should not be
      used. Instead, use `model.browse(i)` or `model.search(i)`.

#. Click :guilabel:`Add an action` in the :guilabel:`Actions To Do` tab to define the :ref:`actions
   <studio/automated-actions/action>` to be executed.
#. Before implementing the webhook in the external system, :ref:`test
   <studio/webhooks/test-webhook>` it to ensure it is working as intended.

.. tip::
   - If the purpose of the webhook is anything other than to update an existing record, e.g., to
     create a new record, the :guilabel:`Execute Code` action must be chosen.
   - To access the history of API requests if :guilabel:`Log Calls` has been enabled, click the
     :guilabel:`Logs` smart button at the top of the :guilabel:`Automation rules` form.

.. _studio/webhooks/test-webhook:

Test a webhook
==============

Testing a webhook requires a test payload and an external tool or system, like
`Postman <https://www.postman.com/>`_, to send the payload via a `POST` API request. This section
walks through the steps to test a webhook in Postman.

.. tip::
   - See the :ref:`webhook use cases section <studio/webhooks/webhook-examples>` for step-by-step
     explanations of how to test a webhook, including test payloads.
   - To get specific help with testing a webhook with Postman, contact their support team.

#. With a Postman workspace open, create a new HTTP request and set its method to :guilabel:`POST`.
#. Copy the webhook's URL from your Odoo database using the :icon:`fa-link` (link) icon and paste it
   into the URL field in Postman.
#. Click the :guilabel:`Body` tab and select :guilabel:`raw`.
#. Set the file type to :guilabel:`JSON`, then copy the code from the test payload and paste it into
   the code editor.
#. Click :guilabel:`Send`.

.. _studio/webhooks/test-webhook-response:

In the :guilabel:`Response` viewer at the bottom of the screen in Postman, details including a HTTP
response code let you know if the webhook is functioning correctly.

- If a message saying `200 OK` or `status: ok` gets returned, the webhook is functioning properly
  on Odoo's side. From here, implementation can begin with the other system to automatically send
  the API requests to the Odoo webhook's URL.

- If any other response is returned, the number associated with it helps to identify the problem.
  For example, a `500 Internal Server Error` means that Odoo could not interpret the call properly.
  In this case, ensure the fields found in the JSON file are properly mapped in the webhook's
  configuration and in the system sending the test call.

.. tip::
   - Turning on call logging in the webhook's configuration provides error logs if the webhook is
     not functioning as intended.

Implement a webhook
===================

When the webhook has been successfully configured and tested, begin connecting it to the system that
sends data to the Odoo database through this webhook. It is typically in the external system that Make sure that the `POST` API requests are
sent to the webhook's URL when setting that system up.

.. _studio/webhooks/webhook-examples:

Webhook use cases
=================

Below are two examples of how to use webhooks in Odoo. These examples use
`Postman <https://www.postman.com/>`_ to send the test payload.

.. important::
  It is *highly recommended* to consult with a developer, solution architect, or another technical
  role when deciding to use webhooks and throughout the implementation process. If not properly
  configured, webhooks may disrupt the Odoo database and can take time to revert.

Update a sales order's currency
-------------------------------

This webhook updates a sales order in the **Sales** app to USD. It useful for subsidiaries outside
the United States with a mother company located inside the United States or during mergers when
consolidating data into one Odoo database.

Create the webhook
~~~~~~~~~~~~~~~~~~

To create this webhook, proceed as follows:

#. Open the **Sales** app, then :ref:`open Studio <studio/access>` and click :guilabel:`Webhooks`.
   The *Sales Order* model is selected by default.
#. Click :guilabel:`New`.
#. Set the :guilabel:`Trigger` to :guilabel:`On webhook`.
#. Set the :guilabel:`Target Record` to `model.env[payload.get('model')].browse(int(payload.get('id')))`.

   This is broken down below.

   - **model**: what gets updated in Odoo (in this case, sales orders). This matches the
     :guilabel:`Model` set earlier.
   - **env**: where the action takes place. In this case, it is Odoo.
   - **payload**: what is sent to the webhook's URL. This contains the information that updates
     the sales order.
   - **get('model')**: tells the webhook what database record to look at. In this case, the
     webhook retrieves (`get`) the data tied to a specific `model`. In this example, this is the
     Sales Order model.
   - **browse**: tells the webhook to look in the `model` (Sales Order) set by the payload for what
     to update.
   - **int**: turns the target into an `integer` (a whole number). This is important in case some
     words (a `string`) or a decimal number is included in the payload's target record.
   - **get('id')**: identifies the sales order number that is being updated in Odoo.

#. Set the webhook's action by clicking :guilabel:`Add an action`.
#. For the :guilabel:`Type` of action, click :guilabel:`Update Record`.
#. In the :guilabel:`Action details`, select :guilabel:`Update`, choose the field
   :guilabel:`Currency`, and select :guilabel:`USD`.
#. Click :guilabel:`Save & Close`.

To summarize what is set up: the webhook targets sales orders, identified by their sales order
number, and updates their currency to `USD` when a `POST` API request is sent to the webhook's URL
that includes that sales order number (which is identified by the payload's `id` record).

Test the webhook
~~~~~~~~~~~~~~~~

To test this webhook, proceed as follows:

#. With a `Postman <https://www.postman.com/>`_ workspace open, create a new HTTP request and set
   its method to :guilabel:`POST`.
#. Copy the URL of the Odoo webhook using the :icon:`fa-link` (link) icon and paste it into the URL
   field in Postman.
#. Click the :guilabel:`Body` tab and select :guilabel:`raw`.
#. Set the file type to :guilabel:`JSON`, then copy this code and paste it into the code editor:

   .. code-block:: json

      {
          "model": "sale.order",
          "id": "SALES ORDER NUMBER"
      }

   In your Odoo database, choose a sales order to test the webhook on. Replace `SALES ORDER NUMBER`
   in the payload with the sales order's number without the `S` or any zeros before
   the number. For example, a sales order with the number `S00007` should be entered as `7` in
   Postman.

   .. tip::
      If it is not possible to test in a live Odoo database, consider creating a demo database with
      a sample sales order and the webhook that was configured.

#. Click :guilabel:`Send`.
#. Consult the :ref:`Response viewer <studio/webhooks/test-webhook-response>` in Postman to
   determine whether or not the webhook is functioning properly. If a message other than `200 OK` or
   `status: ok` is returned, the number associated with the message helps to identify the problem.

.. _studio/webhooks/webhook-example:

Create a new contact
--------------------

This webhook uses custom code to create a new contact in an Odoo database. This could be helpful for
automatically creating new vendors or customers.

Create the webhook
~~~~~~~~~~~~~~~~~~

To create this webhook, proceed as follows:

#. Open the **Contacts** app, then :ref:`open Studio <studio/access>` and click :guilabel:`Webhooks`.
   The *Contact* model is selected by default.
#. Click :guilabel:`New`.
#. Set the :guilabel:`Trigger` to :guilabel:`On webhook`.
#. Set the :guilabel:`Target Record` to `model.browse([2])`.

   This is broken down below.

   - **model**: what gets updated in Odoo (in this case, a contact). This matches the
     :guilabel:`Model` set earlier.
   - **browse**: tells the webhook to look in the `model` (the contacts) set by the payload for
     what to create.

#. Set the webhook's action by clicking :guilabel:`Add an action`.
#. For the :guilabel:`Type` of action, click :guilabel:`Execute Code` then copy this code and paste
   it into the code editor in the :guilabel:`Code` tab:

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

To summarize what is set up: the webhook creates a contact when a `POST` API request is sent to the
webhook's URL that includes the contact's information.

Test the webhook
~~~~~~~~~~~~~~~~

To test this webhook, proceed as follows:

#. With a `Postman <https://www.postman.com/>`_ workspace open, create a new HTTP request and set
   its method to :guilabel:`POST`.
#. Copy the URL of the Odoo webhook using the :icon:`fa-link` (link) icon and paste it into the URL
   field in Postman.
#. Click the :guilabel:`Body` tab and select :guilabel:`raw`.
#. Set the file type to :guilabel:`JSON`, then copy this code and paste it into the code editor:

   .. code-block:: json

      {
          "name": "CONTACT NAME",
          "email": "CONTACTEMAIL@EMAIL.COM",
          "phone": "CONTACT PHONE NUMBER"
      }

   Replace the fields above with a new contact's information in Postman.
#. Click :guilabel:`Send`.
#. Consult the :ref:`Response viewer <studio/webhooks/test-webhook-response>` in Postman to
   determine whether or not the webhook is functioning properly. If a message other than `200 OK` or
   `status: ok` is returned, the number associated with the message helps to identify the problem.
