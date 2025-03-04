========
Webhooks
========

.. warning::
  It is *highly recommended* to consult with a developer, solution architect, or another technical
  role when deciding to use webhooks and throughout the implementation process. If not properly
  configured, webhooks may disrupt the Odoo database and can take time to revert.

Webhooks, which can be created in **Studio**, are automation rules triggered by external events via
user-defined HTTP callbacks. When an external system sends data to an Odoo webhook's URL (the
"trigger") with a data file (the "payload"), Odoo responds with a predefined action in the database.

Unlike scheduled actions or manual API calls, webhooks enable real-time communication and
automation. For example, if a sales order is confirmed in an external POS system, a webhook can
instantly update Odoo's inventory, ensuring system synchronization.

.. note::
   This article covers creating a webhook that *takes in* data from an external source. However,
   an automated action that :ref:`sends an API call to an external webhook
   <studio/automated-actions/action-webhook>` can also be created.

Create a webhook in Studio
==========================

Webhooks are configured in **Studio**, and their setup is split between their :ref:`trigger
<studio/webhooks/webhook_trigger>` and their :ref:`actions <studio/webhooks/webhook_action>`.

.. tip::
  - Setting up a webhook in Odoo requires no coding when connecting Odoo databases, but testing
    requires an external tool like `Postman <https://www.postman.com/>`_. :ref:`Custom target
    records or actions  <studio/webhooks/webhook-example>` may require programming skills.
  - :ref:`Activate developer mode <developer-mode>` to modify the model targeted by the webhook
    (e.g., sales orders or contact information) and to find the model's technical name (which may be
    required for proper payload configuration).

.. _studio/webhooks/webhook_trigger:

Set the webhook's trigger
-------------------------

To create a webhook with **Studio**, :ref:`open Studio <studio/access>`, click :guilabel:`Webhooks`,
then :guilabel:`New`. From here, name the webhook, modify the webhook's model (the kind of database
entry to be targeted) if needed, and toggle whether calls made to the webhook URL should be logged
(which would track the webhook's call history for troubleshooting).

The webhook's URL is automatically generated. This is the URL that should be used for testing the
webhook and connecting it to the external system that will send updates to the database.

.. danger::
   The webhook's URL is **confidential** and should be treated with care. Sharing it online or
   without caution can provide unintended access to the Odoo database. Click :guilabel:`Rotate
   Secret` to change the URL if needed.

Finally, if the system sending the webhook is not Odoo, adjust the :guilabel:`Target Record` actions
to look for the JSON record that is included in the API call's payload when the call is made to the
webhook's URL. If the system sending the webhook is an Odoo database, then make sure that the `id`
and `model` appear in the payload.

.. tip::
   Although the :guilabel:`Model` is set in Odoo, it is the model's technical name that must be
   included in the payload. Hover over the model name, then click the :icon:`fa-arrow-right`
   :guilabel:`(Internal link)` icon to find this technical name in the :guilabel:`Model` field. For
   example, a sales order webhook uses the *Sales Order* model, but the technical name `sale.order`
   is used in the payload.

.. note::
  When creating a record in the Odoo database, the target record's default format should not be
  used. Instead, use `model.browse(i)` or `model.search(i)`.

.. _studio/webhooks/webhook_action:

Set the webhook's action
------------------------

To set a webhook's action while configuring a webhook, click :guilabel:`Add an action` under the
:guilabel:`Actions To Do` tab. Click the action's :guilabel:`Type` and set the fields as needed.

.. _studio/webhooks/test_webhook:

Test the webhook
----------------

.. note::
   Testing the webhook requires the webhook to be set up, a test payload to send to the webhook, and
   an external tool or system to send the payload through a `POST` API request. Consider using a
   tool like `Postman <https://www.postman.com/>`_ so less technical skills are required.

If a message saying `200 OK` or `status: ok` gets returned during testing, then the webhook is
functioning properly on Odoo's side. From here, implementation can begin with the other tool to
automatically send those webhook calls into Odoo using the webhook's URL.

If any other responses are returned, the number sent in the response helps to identify the problem.
For example, a `500 Internal Server Error` means that Odoo could not interpret the call properly. If
this gets returned, ensure the fields found in the JSON file are properly mapped in the webhook's
configuration and in the system sending the test call. Turning on call logging in the webhook's
configuration provides error logs if the webhook is not functioning as intended.

Implement the webhook
---------------------

Once the webhook is fully configured, begin connecting it to the system that sends data to the Odoo
database through this webhook. Make sure that the API calls are sent to the webhook's URL when
setting that system up.

.. _studio/webhooks/webhook_examples:

Webhook use cases
=================

Below are two examples of how to use webhooks in Odoo. These webhooks require external tools (which
are listed with the example).

.. warning::
   Consult with a developer, solution architect, or another technical role when deciding to
   implement webhooks. If not properly configured, webhooks may disrupt the Odoo database and can
   take time to revert.

Update a sales order's currency
-------------------------------

This webhook updates a sales order in the **Sales** app to USD. It useful for subsidiaries outside
the United States with a mother company located inside the United States or during mergers when
consolidating data into one Odoo database.

Set the webhook's trigger
~~~~~~~~~~~~~~~~~~~~~~~~~

To set up this webhook, open the **Sales** app. Then, :ref:`set the trigger
<studio/webhooks/webhook_trigger>` so the :guilabel:`Model` is set to `Sales Order`. Also, set
the :guilabel:`Target Record` to `model.env[payload.get('model')].browse(int(payload.get('id')))`.
This is broken down below.

- **model**: what gets updated in Odoo (in this case, sales orders). This matches the
  :guilabel:`Model` set earlier.
- **env**: where the action takes place. In this case, it is Odoo.
- **payload**: what is sent to the webhook's URL. This contains the information that updates
  the sales order.
- **get('model')**: tells the webhook what database record to look at. In this case, the
  webhook retrieves (`get`) the data tied to a specific `model`. In this example, this is the
  Sales Order model.
- **browse**: tells the webhook to look in the `model` (Sales Order) set by the payload for what to
  update.
- **int**: turns the target into an `integer` (a whole number). This is important in case some
  words (a `string`) or a decimal number is included in the payload's target record.
- **get('id')**: identifies the sales order number that is being updated in Odoo.

Set the webhook's action
~~~~~~~~~~~~~~~~~~~~~~~~

After setting the trigger, set the webhook's action by clicking :guilabel:`Add an action`. For the
:guilabel:`Type`, click :guilabel:`Update Record`. Then, select `Update`, choose the field
`Currency`, and select `USD` to have the currency field updated to USD. Finally, click
:guilabel:`Save & Close`.

Webhook setup summary
~~~~~~~~~~~~~~~~~~~~~

To summarize what is set up, the webhook targets sales orders, identified by their sales order
number, and updates their currency to `USD` when a POST request is sent to the webhook's URL that
includes that sales order number (which is identified by the payload's `id` record).

Test the webhook
~~~~~~~~~~~~~~~~

Test the webhook's setup to make sure everything is correct. This process uses a tool called
`Postman <https://www.postman.com/>`_ to send the simulated trigger.

This section walks through the steps to test this webhook in Postman, but does not offer help if
there's an issue within that tool. To get specific help with Postman, contact their support team.

Once Postman is open, create a new :guilabel:`HTTP` request and set its method to :guilabel:`POST`.
Next, copy the webhook's URL that is being tested and paste it into the URL field in Postman. After
that, click the :guilabel:`Body` tab and select the :guilabel:`raw` option. Set the file type to
:guilabel:`JSON`, then copy this code and paste it into the file.

.. code-block:: json

   {
       "model": "sale.order",
       "id": "SALES ORDER NUMBER"
   }

From here, choose a sales order to test the webhook on. If it is not possible to test in a live
Odoo database, consider creating a demo database with a sample sales order and the webhook that was
configured. Replace `SALES ORDER NUMBER` with the sales order's number without the `S` or any zeros
before the number. For example, a sales order with the number `S00007` should be entered as `7` in
Postman. Finally, click :guilabel:`Send` in Postman.

If a message saying `200 OK` or `status: ok` gets returned, then the webhook is functioning properly
on Odoo's side. The test sales order's currency is updated. From here, implementation can begin with
the other tool to automatically send those webhook calls into Odoo using the webhook's URL.

If any other responses are returned, the number associated with them helps to identify the problem.
For example, a `500 Internal Server Error` means that Odoo could not interpret the call properly. If
this gets returned, ensure the `model` and `id` fields are properly mapped in the webhook's
configuration and in Postman.

.. _studio/webhooks/webhook-example:

Create a new contact
--------------------

This webhook uses custom code to create a new contact in an Odoo database. This could be helpful for
automatically creating new vendors or customers.

Set the webhook's trigger
~~~~~~~~~~~~~~~~~~~~~~~~~

To set up this webhook, open the **Contacts** app. Then, :ref:`set the trigger
<studio/webhooks/webhook_trigger>` so the :guilabel:`Model` is set to `Contact`. Also, set the
:guilabel:`Target Record` to `model.browse([2])`. This is broken down below.

- **model**: what gets updated in Odoo (in this case, a contact). This matches the :guilabel:`Model`
  set earlier.
- **browse**: tells the webhook to look in the `model` (the contacts) set by the payload for
  what to create.

Set the webhook's action
~~~~~~~~~~~~~~~~~~~~~~~~

After setting the trigger, set the webhook's action by clicking :guilabel:`Add an action`. For the
:guilabel:`Type`, click :guilabel:`Execute Code`, then set the :guilabel:`code` to the sample code
below. Finally, click :guilabel:`Save & Close`.

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


Webhook setup summary
~~~~~~~~~~~~~~~~~~~~~

To summarize what is set up, the webhook creates a contact when an API call is sent to the webhook's
URL that includes the contact's information.

Test the webhook
~~~~~~~~~~~~~~~~

Test the webhook's setup to make sure everything is correct. This process uses a tool called
`Postman <https://www.postman.com/>`_ to send the simulated trigger.

This section walks through the steps to test this webhook in Postman, but does not offer help if
there's an issue within that tool. To get specific help with Postman, contact their support team.

Once Postman is open, create a new request, and set its method to :guilabel:`POST`. Next, copy the
webhook's URL that is being tested and paste it into the URL field in Postman. After that, click the
:guilabel:`Body` tab and click :guilabel:`raw`. Set the file type to :guilabel:`JSON`, then copy
this code and paste it into the file.

.. code-block:: json

   {
       "name": "CONTACT NAME",
       "email": "CONTACTEMAIL@EMAIL.COM",
       "phone": "CONTACT PHONE NUMBER"
   }

Replace the fields above with a new contact's information in Postman, and then click
:guilabel:`Send`.

If a message saying `200 OK` or `status: ok` gets returned, then the webhook is functioning properly
on Odoo's side. The new test contact appears in the **Contacts** app. From here, implementation can
begin with the other tool to automatically send those webhook calls into Odoo using the webhook's
URL.

If any other responses are returned, the number associated with them helps to identify the problem.
For example, a `500 Internal Server Error` means that Odoo could not interpret the call properly. If
this gets returned, ensure the fields found in the JSON file are properly mapped in the webhook's
configuration and in Postman.
