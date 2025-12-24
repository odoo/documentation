========
WhatsApp
========

**WhatsApp** is an instant messaging and voice-over-IP app that allows users to send messages, make
calls, and share content. Businesses can use `WhatsApp Business
<https://developers.facebook.com/products/whatsapp/>`__ to communicate with their customers by text,
send documents, and provide support. This documentation covers the integration of a WhatsApp
Business Account (WABA) with Odoo.

.. warning::
   **WhatsApp** is an Odoo Enterprise-only application that does not work in Odoo Community edition.
   To use the Odoo **WhatsApp** app, sign up for `Odoo Enterprise edition
   <https://www.odoo.com/trial>`_.

.. seealso::
   :doc:`/administration/on_premise/community_to_enterprise`

Connecting a WhatsApp Business Account (WABA) to an Odoo database enables the following in Odoo's
**WhatsApp** app:

- Send and receive WhatsApp messages directly from an Odoo database.
- Create and send pre-approved templates with dynamic placeholders/variables, such as:

  - Quotations from the **Sales** app.
  - Receipts and invoices from the **Point of Sale** app.
  - Tickets from the **Events** app.

.. seealso::
   - `Meta Business: create message templates for the WhatsApp Business account
     <https://www.facebook.com/business/help/2055875911147364>`__
   - `Meta Business: connect a phone number to the WhatsApp Business account
     <https://www.facebook.com/business/help/456220311516626>`__
   - `Meta Business: change the WhatsApp Business display name
     <https://www.facebook.com/business/help/378834799515077>`__

The WhatsApp integration supports two flows: company-initiated and customer-initiated. A company can
start a discussion by sending a template to one or more customers. If the customer answers within 15
days, a **Discuss** chat window pops up to begin the conversation.

If a customer initiates by sending a message to the company's public WhatsApp number, Odoo opens a
group chat with all operators responsible for the WhatsApp channel.

.. tip::
   Consider setting up separate WhatsApp accounts for each department, to better manage
   communications.

.. seealso::
   `Magic Sheet - WhatsApp configuration [PDF]
   <https://drive.google.com/drive/folders/1hHEYq6jxmqKGFOeM3UQ7vOfiF7KuGX5W>`_

WhatsApp configuration in Meta
==============================

WhatsApp is operated by Meta, the parent company of Facebook. Odoo's WhatsApp integration uses a
standard :abbr:`API (Application Programming Interface)` connection configured in Meta:

#. Create a Meta business account.
#. Create a Meta developer account.
#. Set up an *app* and WhatsApp *product* in Meta's developer console.
#. Test the API connection.

Once the WhatsApp :abbr:`API (Application Programming Interface)` is connected, Odoo users can send
and receive messages through Odoo's **Discuss** application.

Create a Meta business account
------------------------------

.. important::
   In order to create a Meta business account, the user must have a personal Facebook account that
   has existed for a minimum of one hour prior to setting up the Facebook Business account. Trying
   to create the business account prior to this time results in an error.

To create a business account with Meta, navigate to `Meta Business Suite
<https://business.facebook.com/overview>`__. Click :guilabel:`Create account` and then enter the
business name, the administrator's name, and a work email address. Click :guilabel:`Next`, and
confirm the email address in the pop-up window that appears. After confirming, click
:guilabel:`Done` to close the window.

Next, follow the instructions in the email sent by Facebook to confirm the creation of the business
account and to complete the setup process.

.. seealso::
   `Set up a Meta business account
   <https://www.facebook.com/business/help/1710077379203657?id=180505742745347>`__

.. important::
   If the business account is linked to a personal Facebook account, the administrator must switch
   between their personal account and the business account for the remainder of the configuration.

   To switch to the business account, navigate to the `Meta Developer Dashboard
   <https://developers.facebook.com>`__ and click the *account name* in the top-right corner. Under
   :guilabel:`Business Accounts`, select the business to be configured.

   .. image:: whatsapp/toggle.png
      :alt: Toggle between Meta personal and business accounts.

Create a Meta developer app for Odoo
------------------------------------

On the `Meta Developer Dashboard <https://developers.facebook.com>`__ dashboard, sign in with the
Meta developer account. If no account is configured yet, link a Facebook account to create a Meta
developer account.

.. note::
   A Facebook *developer* account is different than a Facebook *business* account. While developer
   accounts are tied to personal Facebook accounts, business accounts are **not** as they represent
   a business and manage all of the business's assets in Meta, such as apps.

.. seealso::
   `Set up the WhatsApp Business Platform
   <https://www.facebookblueprint.com/student/collection/409587/path/360218>`__

After signing in to the Meta developer account, click :guilabel:`My Apps` in the top-right corner.
This redirects the administrator to all the apps the developer has configured in the specific
developer account. Click :guilabel:`Create App` to configure a new Meta application.

.. _whatsapp/app-details:

Add app details
---------------

The first step of the :guilabel:`Create an app` process is to fill out the :guilabel:`App details`
section. Enter `Odoo` in the :guilabel:`App name` field.

.. note::
   The app name can be changed in the settings afterward.

.. warning::
   Trademarks and branded elements may **not** be used in this text section. This includes the Meta
   group of companies. Do **not** include the word `WhatsApp` or the system flags this as an error.

Next, enter the developer email address in the :guilabel:`App contact email` field, then click
:guilabel:`Next`.

Select the app type
-------------------

The next step in app creation is the ::guilabel:`Use cases` section. Under :menuselection:`Filter
by`, select :guilabel:`Others`, select :guilabel:`Others`, then click :guilabel:`Next`. The page
redirects to :guilabel:`Select an app type`.

Select :guilabel:`Business`. This selection allows for the creation and management of the WhatsApp
:abbr:`API (Application Programming Interface)`. Click :guilabel:`Next` to configure the app as
desired.

Select the business portfolio
-----------------------------

The last step of the app creation process is to connect a business portfolio.

Under :guilabel:`Business portfolio - Optional`, click the drop-down menu and select the Meta
business account profile. Review the *Meta Platform Terms* and *Developer Policies* agreements, then
click :guilabel:`Create app` to accept and create the app.

To accept the agreements and create the app, enter the Facebook account password and click
:guilabel:`Submit`. The browser then redirects to the :guilabel:`Meta for Developers` dashboard.

.. warning::
   If the Meta business account is prohibited from advertising, the app can't be claimed. To resolve
   this issue, navigate to `Meta Business Suite <https://business.facebook.com/business>`__ for
   assistance.

   For more information, see `Meta's documentation on advertising restrictions
   <https://www.facebook.com/business/help/975570072950669>`_.

Add a WhatsApp product to the app
---------------------------------

Now that the basic structure of the app has been created, a product needs to be added to the app.
Navigate to the `Meta Developer Dashboard <https://developers.facebook.com/apps>`__, and click on
the app that is being configured. The page redirects to the app's dashboard.

Under :guilabel:`Add products to your app`, go to WhatsApp near the bottom of the page and click
:guilabel:`Set up`.

.. seealso::
   `Meta's WhatsApp developer documentation <https://developers.facebook.com/docs/whatsapp/>`__

The browser then redirects to the configuration page for the :guilabel:`WhatsApp Business Platform
API`.

Under :guilabel:`Select a Meta Business Account` option, select the Meta business to be configured,
then click :guilabel:`Continue` to confirm the selection and agree to Meta's terms and conditions as
linked on the :guilabel:`Meta App Dashboard`.

Once the WhatsApp product is added to the app, Meta provides a WhatsApp test phone number. This test
phone number can send unlimited messages to a maximum of five recipients.

Under :guilabel:`Send and receive messages`, select the :guilabel:`To` field and choose
:guilabel:`Manage phone number list`. Add up to five valid WhatsApp number as recipients, then enter
the confirmation codes sent to those phone numbers in WhatsApp to verify.

.. seealso::
   `WhatsApp Cloud API guide
   <https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#add-recipient-number>`__

WhatsApp API quickstart
-----------------------

Once the Meta accounts and app have been configured, click :guilabel:`Continue` to proceed to the
WhatsApp :guilabel:`Quickstart` page. This page provides a starting point for configuring the
WhatsApp API by adding a phone number and sending an initial test message.

.. note::
   If the browser doesn't automatically redirect to the WhatsApp :guilabel:`Quickstart` page,
   navigate to the `Meta Developer Dashboard <https://developers.facebook.com/apps>`__ and select
   the `Odoo` app.

   In the menu on the left-hand side of the page, click the :icon:`fa-chevron-down` :guilabel:`(down
   chevron)` icon next to the :guilabel:`WhatsApp` section heading. A small menu opens, containing
   the following options:

   - :guilabel:`Quickstart`
   - :guilabel:`API Setup`
   - :guilabel:`Configuration`

   Click the :guilabel:`Quickstart` option, and then click :guilabel:`Start using the API`.

API Setup
~~~~~~~~~

After clicking on :guilabel:`Start using the API`, the page navigates to the :guilabel:`API Setup`.
Now that the test number has been created, a test message can be sent to confirm that WhatsApp is
working properly. Navigate to the :guilabel:`Send and receive messages` section. Under
:guilabel:`Step 1 Select phone numbers`, click the drop-down menu next to :guilabel:`To`.

Next, select the only option available: :guilabel:`Manage phone number list`. Follow the steps and
add up to five phone numbers to send the free test messages to. Enter the appropriate country code
and phone number, then click :guilabel:`Next`.

.. important::
   Adding a phone number to send to in this step allows for a successful test to be sent by the
   terminal. This is critical to ensure the WhatsApp :abbr:`API (Application Programming Interface)`
   is working.

On the next page, enter the verification code sent to the phone numbers, and click :guilabel:`Next`
to verify the numbers.

Send a test message via terminal
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once the phone number has been verified, send a test message via the terminal. Under :guilabel:`Step
2 Send messages with the API`, click :guilabel:`Send Message`. This should send a test message to
the phone numbers that were added.

Upon successfully receiving the message to the numbers, move onto the next section to :ref:`produce
and configure webhooks <productivity/whatsapp/webhooks>`.

.. _productivity/whatsapp/webhooks:

WhatsApp configuration in Odoo
==============================

To create a :guilabel:`Callback URL` and :guilabel:`Webhook Verify Token`, the phone number, token,
app ID, and account ID need to be configured in Odoo; these values are used to set up webhooks,
which make it possible to receive messages in the database. The configuration steps in this section
are all performed in the Odoo database.

In Odoo, navigate to :menuselection:`WhatsApp app --> Configuration --> WhatsApp Business Accounts`,
then click :guilabel:`New` to configure the WhatsApp business account in Odoo.

In another browser tab, navigate to `Meta Developer Dashboard <https://developers.facebook.com>`__.
Select :menuselection:`My Apps --> WhatsApp --> API Configuration`, and then copy the following
values from the Meta developer console into the corresponding fields in Odoo:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name
     - Meta Console
     - Odoo Interface
   * - Phone
     - :guilabel:`Phone number ID`
     - :guilabel:`Phone Number ID`
   * - Token
     - :guilabel:`Temporary access token`
     - :guilabel:`Access Token`
   * - App ID
     - :guilabel:`App ID`
     - :guilabel:`App ID`
   * - Account ID
     - :guilabel:`WhatsApp Business Account ID`
     - :guilabel:`Account ID`

To retrieve the :guilabel:`App Secret`, navigate to the `Meta Developer Dashboard
<https://developers.facebook.com/apps>`__, and select the `Odoo` app. In the left-hand side menu,
under :guilabel:`App settings`, select :guilabel:`Basic`.

Next, click :guilabel:`Show` next to :guilabel:`App secret`, and enter the account password. Copy
the :guilabel:`App secret` and then paste it into the :guilabel:`App Secret` field on the Odoo
:guilabel:`WhatsApp Business Account` configuration dashboard.

To complete the setup of the WhatsApp business account in Odoo, click :guilabel:`Test Connection`.
If the configuration is set correctly, a successful message in green populates the upper-right
corner of the dashboard.

Configure webhooks
------------------

To configure the webhooks for the Odoo **WhatsApp** app, navigate to the `Meta Developer Dashboard
<https://developers.facebook.com/apps>`__, and select the `Odoo` app. In the left-hand side menu,
click :menuselection:`WhatsApp --> API Setup`. Go to :guilabel:`Step 3: Configure webhooks to
receive messages` and click :guilabel:`Configure webhooks`.

.. tip::
   Webhook configuration settings can also be accessed by navigating to the `Meta Developer
   Dashboard <https://developers.facebook.com/apps>`__, selecting the `Odoo` app, and then selecting
   :guilabel:`Webhooks` in the left hand menu.

   .. image:: whatsapp/webhooks.png
      :alt: Manually navigating to the Whatsapp webhooks configuration.

On the :menuselection:`Webhook configuration` page, click :guilabel:`Edit`. This is where the
:guilabel:`Callback URL` and :guilabel:`Webhook Verify Token` values from Odoo are added.

..  note::
    The :guilabel:`Callback URL` and :guilabel:`Webhook Verify Token` values are both automatically
    populated after clicking on :guilabel:`Test Connection` in the previous step.

In a separate browser window, retrieve the necessary values in Odoo by navigating to
:menuselection:`WhatsApp app --> Configuration --> WhatsApp Business Accounts` and then selecting
the account that is being configured. The values are located under :guilabel:`Receiving Messages`.

Copy and paste the :guilabel:`Callback URL` from Odoo into the :guilabel:`Callback URL` field in
Meta, then copy and paste the :guilabel:`Webhook Verify Token` into the :guilabel:`Verify Token`
field on the Meta developer console. Click :guilabel:`Verify and save`.

Add webhook fields
~~~~~~~~~~~~~~~~~~

Now that the Odoo database and WhatsApp have been configured to communicate with each other, the
next step is to add webhook fields to specify the information that should be sent between the two.
To add individual webhook fields in Meta's developer console, go to the :guilabel:`Webhook fields`
section and click :guilabel:`Manage`. In the pop-up window that loads, check the boxes in the
:guilabel:`Subscribe` column for the following *field names*:

- account_update
- message_template_quality_update
- message_template_status_update
- messages
- template_category_update

After making the selections, click :guilabel:`Done`.

If the :guilabel:`Webhooks` configuration is successful, the buttons in the :guilabel:`Subscribe`
column should change from :guilabel:`Subscribe` to :guilabel:`Unsubscribe`:

.. image:: whatsapp/webhooks-done.png
   :alt: WhatsApp webhooks set in the Meta developer console.

.. important::
   :guilabel:`Webhook fields` only appear once the subscription is confirmed using the
   :guilabel:`Callback URL` and :guilabel:`Webhook Verify Token`.

.. seealso::
   `Meta's WhatsApp documentation on setting webhooks
   <https://developers.facebook.com/docs/whatsapp/cloud-api/guides/set-up-webhooks>`__

Add a phone number
~~~~~~~~~~~~~~~~~~

To configure the business phone number to use for **WhatsApp** in Odoo, navigate back to the `Meta
Developer Dashboard <https://developers.facebook.com/apps>`__ and select the `Odoo` app. Under
:guilabel:`WhatsApp` in the left-hand side menu, click :guilabel:`API Setup`. Go to :guilabel:`Step
5: Add a phone number`, and click :guilabel:`Add phone number`.

Enter a :guilabel:`Business name` and :guilabel:`Business website or profile page`.

.. tip::
   The :guilabel:`Business website or profile page` field can be a link to a social media page.

Select the country that the company does business in from the :guilabel:`Country` drop-down menu; a
business address is optional. After adding the business location, click :guilabel:`Next`.

On the next page, fill out the following :guilabel:`WhatsApp Business profile` details:

- :guilabel:`WhatsApp Business Profile Display Name`
- :guilabel:`Timezone`
- :guilabel:`Category`
- :guilabel:`Business description` (optional)

Once these sections are complete, click :guilabel:`Next`. The page refreshes and then prompts the
administrator to :guilabel:`Add a phone number for WhatsApp` in the respective field. Enter the
business phone number to be used with WhatsApp.

.. seealso::
   `Migrate an Existing WhatsApp Number to a Business Account
   <https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/migrate-existing-whatsapp-
   number-to-a-business-account>`__

Select :guilabel:`Text message` or :guilabel:`Phone call` for the phone number verification method,
and then click :guilabel:`Next` to proceed.

The business phone number receives a WhatsApp code through the chosen verification method. Enter the
verification code into the :guilabel:`Verification code` field and click :guilabel:`Next` to verify
the business phone number.

.. warning::
   A payment method **must** be added to proceed. This is part of Meta's fraud detection system. In
   order to ensure that the account/company is real, a payment method is required to proceed. See
   Meta's documentation on `how to add a payment method in Meta Business Suite
   <https://www.facebook.com/business/help/915454841921082?id=180505742745347>`__.

.. seealso::
   `Meta for Developers: Add a Phone Number
   <https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/add-a-phone-number>`__

.. _productivity/whatsapp/token:

Create a permanent token
~~~~~~~~~~~~~~~~~~~~~~~~

After configuration and testing are complete, create a permanent token to replace the
:guilabel:`Temporary token`.

.. seealso::
   `Meta for Developers: System User Access Tokens
   <https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#system-user-
   access-tokens>`__

Navigate to `Meta Business Suite <https://business.facebook.com/>`__ and then go to
:menuselection:`Business settings --> User --> System Users`. Select an existing system user or
create a new system user by clicking :guilabel:`Add`.

To generate a permanent token, assets must be added to the system user. Click :guilabel:`Add
assets`, and a pop-up window appears. Select :guilabel:`Apps` under :guilabel:`Select asset type`,
then select the `Odoo` app and toggle the permissions to :guilabel:`On` under the :guilabel:`Full
control` option, then click :guilabel:`Save Changes`. Click :guilabel:`Done` in the confirmation
window that appears.

Click :guilabel:`Generate new token`, and a pop-up window appears asking which app this token should
be generated for. Select the `Odoo` app, then set the expiration date to either :guilabel:`60 days`
or :guilabel:`Never`.

Meta asks which permissions the system user allows.  Add both of the following permissions:

- `business_management`
- `whatsapp_business_messaging`
- `whatsapp_business_management`
- `whatsapp_business_manage_events`

When permissions are set, click :guilabel:`Generate token`. Copy the token value that populates on
the screen that follows.

With that token value, update the :guilabel:`Access Token` field in the WhatsApp business account in
Odoo by navigating to :menuselection:`WhatsApp app --> Configuration --> WhatsApp Business
Accounts`.

Go live with the Meta app
=========================

Finally, to launch the app, the Meta app must be set to :guilabel:`Live` in the `Meta Developer
Dashboard <https://developers.facebook.com/apps>`__. Click the app that is being configured, then
toggle the :guilabel:`App Mode` field from :guilabel:`Development` to :guilabel:`Live`.

.. important::
   If the app status is **not** set to *live*, then the database is only able to contact the test
   numbers specified in the developer console.

.. warning::
   A privacy policy URL must be set in order for the app to be set to live. Go to the `Meta
   Developer Dashboard <https://developers.facebook.com/apps>`__ and select the `Odoo` app. Then, in
   the left-hand side menu, go to :menuselection:`App Settings --> Basic`. Enter the privacy policy
   hyperlink address under the :guilabel:`Privacy Policy URL` field of the form. Click
   :guilabel:`Save changes` to apply the privacy policy to the app.

Once the app has gone live in the Meta developer console, a confirmation email is sent to the
administrator.

.. _productivity/whatsapp/templates:

WhatsApp templates
==================

WhatsApp templates allow users to store messages that are frequently sent. By creating templates
tailored to specific situations, users can easily send pre-approved messages, without having to
compromise on quality or compose the same text repeatedly. This ensures quick turnaround and
consistent customer service messaging, and increases the overall engagement rate with the customer.

WhatsApp templates can be created on both the :ref:`Odoo <whatsapp/odoo-templates>` and :ref:`Meta
<whatsapp/meta-templates>` consoles.

.. important::
   WhatsApp has an approval process that **must** be completed *before* the template can be used.
   See :ref:`productivity/whatsapp/approval`.

To access WhatsApp templates, navigate to the :menuselection:`WhatsApp app --> Templates` dashboard.

Each template has three tabs:

- :guilabel:`Body`\: stores the message body. The message body may contain placeholders for dynamic
  content which is populated when the message is sent.
- :guilabel:`Buttons`\: adds clickable buttons/hyperlinks at the bottom of the WhatsApp template.
  Currently, there are three button types\: *Quick Reply*, *Visit Website*, and *Call Number*.
  *Visit Website* supports static, dynamic, and tracked URLs.
- :guilabel:`Variables`\: lists all of the placeholders in the template, as well as the variables
  that should be populated. For example, messages can contain placeholders for a recipient's name,
  purchased products, or sales order number.

.. _whatsapp/odoo-templates:

Create WhatsApp templates in Odoo
---------------------------------

To create a WhatsApp template, go to the :menuselection:`WhatsApp app --> Templates` dashboard and
click :guilabel:`New`. Enter a :guilabel:`Name` for the template, and select a :guilabel:`Language`.

.. important::
   In order to complete this next task, :doc:`administrator access rights
   <../general/users/access_rights>` are needed to edit the :guilabel:`Applies to` field.

In the :guilabel:`Account` drop-down menu, select the *WhatsApp business account* in Odoo that this
template should link to. Next, under the :guilabel:`Applies to` field, select the *model* the server
action should apply to this template.

.. tip::
   These models can also be accessed in :ref:`developer mode <developer-mode>`. In a contact form
   (or similar relevant form in Odoo), navigate to the model to be referenced, and hover over a
   field name. This displays backend information, including the specific Odoo :guilabel:`Model` name
   in the backend. Search for the model's *frontend* name  in the WhatsApp template, under the
   :guilabel:`Applies to` drop-down menu.

.. warning::
   The :guilabel:`Phone Field` may produce an error when changing the model or :guilabel:`Applies
   to` field. The :guilabel:`Phone Field` should always be set to the `Phone` or `Mobile` model.

To search available fields, type the frontend name in the :guilabel:`Search...` box.  This displays
results from all of the available fields for the model (:guilabel:`Applies to`) that the template is
created for.

.. note::
   To find specific fields, multiple levels may need to be navigated in the search results box. Use
   the :icon:`fa-chevron-right` :guilabel:`(right chevron) and :icon:`fa-arrow-left`
   :guilabel:`(left arrow)` icon icons to navigate between the menu levels.

.. image:: whatsapp/phone-field.png
   :alt: Searching for the phone field in the search bar.

Change the :guilabel:`Category` to one of the following:

- :guilabel:`Marketing`: Promotions or information about your business, products or services. Or any
     message that isn't utility or authentication.
- :guilabel:`Utility`: Messages about a specific transaction, account, order or customer request.
- :guilabel:`Authentication`: One-time passwords your customers use to authenticate a transaction or
     login.

.. important::
   Specifying an incorrect category can cause a flag/rejected status from Meta during the approval
   process.

Add any :guilabel:`Users` that are allowed to use this template. In the right-side column, a
:guilabel:`Header type` can be configured along with a :guilabel:`Header message`, as well.

The available :guilabel:`Header types` are as follows:

- Text
- Image
- Video
- Document
- Location (variables need to be set)

Navigate to the :guilabel:`Body` tab to configure the main message of the template.

When all the necessary changes are made to the template, click the :guilabel:`Submit for approval`
button in the upper-left corner, and the status of the template changes to :guilabel:`Pending`.

The status remains :guilabel:`Pending` until a decision has been made by Meta, whereby a
confirmation email is sent indicating that the template has been approved or rejected. Next, sync
the templates from the Odoo database.

.. seealso::
   :ref:`Syncing templates <productivity/whatsapp/sync>`

.. tip::
   There are pre-configured demo data templates available in Odoo to use or modify. These templates
   can be used as-is or modified to suit a specific business need.

   To use these templates, navigate to :menuselection:`WhatsApp app --> Templates` and select a
   pre-configured template. Click :guilabel:`Submit for Approval` to start the approval process. An
   email is sent to the administrator of the Meta account when the template has been approved.

Buttons
~~~~~~~

Buttons can be added into the message from the :guilabel:`Buttons` tab. Enter the :guilabel:`Type`
(either :guilabel:`Visit Website`, :guilabel:`Call Number`, or :guilabel:`Quick Reply`), and then
specify the :guilabel:`Button Text`, :guilabel:`Call Number` or :guilabel:`Website URL` (including
:guilabel:`Url Type`), depending on the :guilabel:`Type` of button.

.. note::
   Buttons can also be added on the `Meta Business Suite
   <https://business.facebook.com/wa/manage/home>`__. To see Meta's WhatsApp template dashboard, go
   to :menuselection:`Account tools --> Message templates`.

Placeholders and variables
~~~~~~~~~~~~~~~~~~~~~~~~~~

Dynamic variables reference certain fields within the Odoo database to produce unique data in the
WhatsApp message when using a template. Dynamic variables are encoded to display fields from within
the database, referencing fields from within a model.

.. example::
   Many companies like to customize their WhatsApp messages with a personalized piece of customer
   information to grab attention. This can be accomplished in Odoo by referencing a field within a
   model by setting a dynamic variable. For example, a customer's name can be referenced in the
   email from the :guilabel:`Customer` field on the :guilabel:`Sales Order` model.

.. image:: whatsapp/message.png
   :alt: WhatsApp message with dynamic variables highlighted.

Dynamic variables can be added in to the :guilabel:`Body` by adding :guilabel:`placeholders` in the
*text*. To add a placeholder in the *message body* enter the following text `{{1}}`. For the second
placeholder enter `{{2}}` and increase incrementally as more placeholders are added to the text.

.. example::
   *The following is the text from payment receipt template body:*

   Dear {{1}},

   | Here is your invoice *{{2}}* from *{{3}}* for a total of *{{4}}{{5}}*.
   | To review your invoice or pay online: {{6}}

   Thank you

.. seealso::
   :ref:`productivity/whatsapp/templates`

These placeholders **must** be configured on the :guilabel:`Variables` tab of the template before
submitting for approval from Meta. To edit the dynamic variables on a template, first change the
:guilabel:`Type` to :guilabel:`Field of Model`. This allows Odoo to reference a field within a model
to produce unique data in the message being sent.

Next, edit the :guilabel:`Field` of the dynamic variables. The :guilabel:`Applies to` field in the
template should be edited prior to ensure the correct model and field are referenced.

To search the available fields, type in the front-end name of the field in the search box. This
finds a result from all of the available fields for the model (:guilabel:`Applies to`) that the
template is created for. There may be multiple levels that need to be configured.

.. example::
   The following is an example of the variables set for the above placeholders in the payment
   receipt noted above:

   .. list-table::
      :header-rows: 1
      :stub-columns: 1

      * - Name
        - Sample Value
        - Type
        - Field
      * - body - {{1}}
        - Azure Interior
        - Field of Model
        - `Partner`
      * - body - {{2}}
        - INV/2022/00001
        - Field of Model
        - `Number`
      * - body - {{3}}
        - My Company
        - Field of Model
        - `Company`
      * - body - {{4}}
        - $
        - Field of Model
        - `Currency > Symbol`
      * - body - {{5}}
        - 4000
        - Field of Model
        - `Amount`
      * - body - {{6}}
        - \https://..
        - Portal link
        -

.. example::
   For example, in the :guilabel:`Body` tab, if the following is typed, "Hello {{1}},", then `{{1}}`
   must be set in the :guilabel:`Variables` tab. For this specific case, the message should greet
   the customer by name, so the `{{1}}` should be configured to populate the `{{1}}`
   :guilabel:`Field` with the :guilabel:`Customer` name.

.. warning::
   Customizing WhatsApp templates is out of the scope of Odoo Support.

.. _productivity/whatsapp/approval:

Meta template approval
~~~~~~~~~~~~~~~~~~~~~~

After updating the dynamic variables on the template, the template needs to be resubmitted to Meta
for approval. Click :guilabel:`Submit for Approval` to start the approval process. An email is sent
to the administrator of the Meta account when the template has been approved.

Following the approval from Meta, sync the templates again in the Odoo database. See this
documentation: :ref:`productivity/whatsapp/sync`.

.. tip::
   To see the status, go to `Meta Business Suite <https://business.facebook.com/wa/manage/home>`__
   and select :menuselection:`Account tools --> Message templates`.

.. _productivity/whatsapp/sync:

Syncing templates
~~~~~~~~~~~~~~~~~

Templates must be synced on the Odoo database once they are approved by the Meta team. To do so,
begin by navigating to :menuselection:`WhatsApp app --> Configuration --> WhatsApp Business
Accounts` and select the configuration that should be synced. Under the section marked
:menuselection:`Sending messages`, towards the bottom, click :guilabel:`Sync Templates`. Meta
updates the templates that are approved so that they can be utilized with various apps in the
database.

.. image:: whatsapp/sync-template.png
   :alt: Syncing Meta WhatsApp templates to the Odoo database, with the 'Sync Templates'
         highlighted.

A successful message in green appears in the upper-right corner with the number of templates
updated.

.. tip::
   Templates can also be synced individually from the template itself. Navigate to the
   :menuselection:`WhatsApp app --> Templates` dashboard and select the template to sync. Then,
   click the :guilabel:`Sync Template` button located in the top menu of the template's form.

.. _whatsapp/meta-templates:

Create WhatsApp templates in Meta
---------------------------------

First, navigate to `Meta Business Suite <https://business.facebook.com/wa/manage/home>`__, and then
go to :menuselection:`Account tools --> Message templates`.

.. image:: whatsapp/account-tools.png
   :alt: Account tools highlighted in business manager with the manage templates link highlighted.

To create a WhatsApp template, click the blue :guilabel:`Create template` button, and then select
the :guilabel:`Category` from one of the following:

- :guilabel:`Marketing`: Promotions or information about your business, products or services. Or any
     message that isn't utility or authentication.
- :guilabel:`Utility`: Messages about a specific transaction, account, order or customer request.
- :guilabel:`Authentication`: One-time passwords your customers use to authenticate a transaction or
     login.

Enter the :guilabel:`Name` of the template and then select the :guilabel:`Language` for the
template.

.. note::
   Multiple languages can be selected by typing the language names, then selecting the other
   languages as needed.

.. image:: whatsapp/template-config.png
   :alt: Template configuration options listed, with Marketing, Utility, Name and Language
         highlighted.

After making the appropriate selections, click :guilabel:`Continue` in the top-right corner. The
browser redirects to the :guilabel:`Edit template` page where the :guilabel:`Header`,
:guilabel:`Body`, :guilabel:`Footer`, and :guilabel:`Buttons` are configured. To the right of the
template is a preview of what the template looks like in production.

.. image:: whatsapp/edit-template.png
   :alt: Edit the template using a header, body, footer and buttons.

When all necessary changes are made to the template, click :guilabel:`Submit` button in the
top-right corner, and a window populates to confirm the language. Click :guilabel:`Confirm` to
approve and then another window states that the template has been submitted to Meta for review and
approval.

The :guilabel:`Status` of the template remains :guilabel:`In review` until a decision is made by
Meta. Once an email confirmation approving the template is received, the templates need to be synced
from within the Odoo database.

.. seealso::
   `Meta's WhatsApp template documentation
   <https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/>`__

Notifications
=============

Notifications in WhatsApp are handled similar to a message conversation in Odoo. A pop-up window
appears with the received conversation from the customer. By default, notifications are set in the
WhatsApp business account configuration in Odoo.

Notification settings can be adjusted by navigating to :menuselection:`WhatsApp app -->
Configuration --> WhatsApp Business Accounts`. From there, select the account and scroll down to the
:menuselection:`Control` section where notifications are handled. Under the :guilabel:`Notify users`
heading, type in the field which users should be notified for this particular WhatsApp channel.

.. note::
   Once a conversation is initiated between a user and a customer, notifications to all the users
   specified in the WhatsApp business account configuration won't occur. Only notifications to the
   users in the conversation occur. Should the user not respond within 15 days, the customer's reply
   after the 15 days populates once again to all the users specified in the WhatsApp configuration.

Add users to a chat
===================

Users can be added to a WhatsApp chat by expanding the WhatsApp pop-up window. WhatsApp
conversations are located in the **Discuss** app. Select a conversation, then click the
:icon:`fa-user-plus` :guilabel:`(Add User)` icon in the top-right, and a window appears to invite
users to the conversation.

.. image:: whatsapp/add-users.png
   :alt: Adding users to a WhatsApp conversation, with the add user icon highlighted.

WhatsApp API FAQ
================

Verification
------------

As of February 1, 2023, if the Meta app requires advanced level access to permissions, a complete
business verification may need to be completed. This includes submitting office business documents
to Meta. `See this documentation
<https://developers.facebook.com/docs/development/release/business-verification>`__.

.. seealso::
   `Meta's WhatsApp access verification documentation
   <https://developers.facebook.com/docs/development/release/access-verification/>`__

Template errors
---------------

Editing templates can cause tracebacks and errors unless :ref:`the exact process is followed
<productivity/whatsapp/templates>`.

Duplicate validation error
~~~~~~~~~~~~~~~~~~~~~~~~~~

When syncing the templates there may be an instance when there are multiple templates with the same
name on Meta's business manager and in Odoo. This causes a duplicate validation error. Odoo displays
`Validation Error: The operation cannot be completed: Duplicate template is not allowed for one Meta
account`. To correct this issue, rename the duplicate template name on Odoo and :ref:`sync the
templates once again <productivity/whatsapp/sync>`.

.. image:: whatsapp/validation-error-2.png
   :alt: Error message displayed in Odoo when a duplicate template exists.

Token errors
------------

User error 190
~~~~~~~~~~~~~~

If the temporary token is not replaced with a permanent token, Odoo displays `User Error 190: Error
validating access token: Session has expired`. To correct this issue, :ref:`add a permanent token
<productivity/whatsapp/token>`.

.. image:: whatsapp/user-error.png
   :alt: Error message displayed in Odoo when the temporary token expires.

User error 100
~~~~~~~~~~~~~~

If an :guilabel:`Employee` attempts to set up the permanent token, Odoo displays `User Error 100:
Unsupported get request`.

To correct this error, :ref:`create an Admin system user <productivity/whatsapp/token>`.

.. image:: whatsapp/user-error-2.png
   :alt: Error message displayed in Odoo when an employee token is generated instead of an Admin
    user.

Other
-----

WhatsApp template can't be sent to multiple contacts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure the *Multi-Template* feature is enabled on the template.

Check why a WhatsApp message failed to send
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Enable the *Failure Type* and *Failure Reason* columns under :guilabel:`WhatsApp ---> Messages`.

Other error codes
-----------------

For other errors, see Meta’s Developer Suite for `WhatsApp Error Codes
<https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes>`__.
