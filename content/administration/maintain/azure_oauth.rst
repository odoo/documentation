=======================================================
Connect Microsoft Outlook 365 to Odoo using Azure OAuth
=======================================================

Odoo is compatible with Microsoft's Azure OAuth for Microsoft 365. In order to send and receive
secure emails from a custom domain, all that is required is to configure a few settings on the
Azure platform and on the back end of the Odoo database. This configuration works with either a
personal email address or an address created by a custom domain.

.. tip::
   For more information, visit `Microsoft's documentation <https://learn.microsoft.com/en-us/azure/
   active-directory/develop/quickstart-register-app>`_ on setting up OAuth in Azure.

.. seealso::
   - :doc:`/applications/general/auth/azure`
   - :doc:`/applications/productivity/calendar/outlook`

Setup in Microsoft Azure Portal
===============================

Create a new application
------------------------

To get started, go to `Microsoft's Azure Portal <https://portal.azure.com/>`_. Log in with the
:guilabel:`Microsoft Outlook Office 365` account if there is one, otherwise log in with the
personal :guilabel:`Microsoft account`. A user with administrative access to the Azure Settings
will need to connect and perform the following configuration. Next, navigate to the section
labeled :guilabel:`Manage Microsoft Entra ID` (formally *Azure Active Directory*).

Now, click on :guilabel:`Add (+)`, located in the top menu, and then select :guilabel:`App
registration`. On the :guilabel:`Register an application` screen, rename the :guilabel:`Name` to
`Odoo` or something recognizable. Under the :guilabel:`Supported account types` section select
:guilabel:`Accounts in any organizational directory (Any Microsoft Entra ID directory - Multitenant)
and personal Microsoft accounts (e.g. Skype, Xbox)`.

Under the :guilabel:`Redirect URL` section, select :guilabel:`Web` as the platform, and then input
`https://<odoo base url>/microsoft_outlook/confirm` in the :guilabel:`URL` field. The Odoo base
URL is the canonical domain at which your Odoo instance can be reached (e.g. mydatabase.odoo.com
if you are hosted on Odoo.com) in the URL field. Then, click :guilabel:`Register` and the
application is created.

API permissions
---------------

The :guilabel:`API permissions` should be set next. Odoo will need specific API permissions to be
able to read (IMAP) and send (SMTP) emails in the Microsoft 365 setup. First, click the
:guilabel:`API permissions` link, located in the left menu bar. Next, click on the
:guilabel:`(+) Add a Permission` button and select :guilabel:`Microsoft Graph` under
:guilabel:`Commonly Used Microsoft APIs`. After, select the :guilabel:`Delegated Permissions`
option.

In the search bar, search for the following :guilabel:`Deregulated permissions` and click
:guilabel:`Add permissions` for each one:

- :guilabel:`SMTP.Send`
- :guilabel:`IMAP.AccessAsUser.All`

.. note::
   The :guilabel:`User.Read` permission will be added by default.

.. image:: azure_oauth/permissions.png
   :align: center
   :alt: API permissions added for the app.

Assign users and groups
=======================

After adding the API permissions, navigate back to the :guilabel:`Overview` of the
:guilabel:`Application` in the top of the left sidebar menu.

Now, add users to this application. Under the :guilabel:`Essentials` overview table, click on the
link labeled :guilabel:`Managed Application in Local Directory`, or the last option on the bottom
right-hand side of the table.

.. image:: azure_oauth/managed-application.png
   :align: center
   :alt: Link to the created application and to add users/groups.

In the left sidebar menu, select :guilabel:`Users and Groups`. Next, click on :guilabel:`(+) Add
User/Group`. Depending on the account, either a :guilabel:`Group` and a :guilabel:`User` can be
added, or only :guilabel:`Users`. Personal accounts will only allow for :guilabel:`Users` to be
added.

Under :guilabel:`Users` or :guilabel:`Groups`, click on :guilabel:`None Selected` and add the users
or group of users that will be sending emails from the :guilabel:`Microsoft account` in Odoo.
:guilabel:`Add` the users/groups, click :guilabel:`Select`, and then :guilabel:`Assign` them to the
application.

Create credentials
------------------

Now that the Microsoft Azure app is set up, credentials need to be created for the Odoo setup.
These include the :guilabel:`Client ID` and :guilabel:`Client Secret`. To start, the
:guilabel:`Client ID` can be copied from the :guilabel:`Overview` page of the app. The
:guilabel:`Client ID` or :guilabel:`Application ID` is located under the :guilabel:`Display Name`
in the :guilabel:`Essentials` overview of the app.

.. image:: azure_oauth/application-id.png
   :align: center
   :alt: Application/Client ID located in the Overview of the app.

Next, the :guilabel:`Client Secret Value` needs to be retrieved. To get this value, click on
:guilabel:`Certificates & Secrets` in the left sidebar menu. Then, a :guilabel:`Client Secret`
needs to be produced. In order to do this, click on the :guilabel:`(+) New Client Secret` button.

A window on the right will populate with a button labeled :guilabel:`Add a client secret`. Under
:guilabel:`Description`, type in `Odoo Fetchmail` or something recognizable, and then set the
:guilabel:`expiration date`.

.. important::
   A new :guilabel:`Client Secret` will need to be produced and configured if the first one expires.
   In this event, there could be an interruption of service, so the expiration date should be noted
   and set to the furthest possible date.

Next, click on :guilabel:`Add` when these two values are entered. A :guilabel:`Client Secret Value`
and :guilabel:`Secret ID` will be created. It is important to copy the :guilabel:`Value` or
:guilabel:`Client Secret Value` into a notepad as it will become encrypted after leaving this page.
The :guilabel:`Secret ID` is not needed.

.. image:: azure_oauth/secretvalue.png
   :align: center
   :alt: Client Secret Value or Value in the app's credentials.

After these steps, the following items should be ready to be set up in Odoo:

- A client ID (:guilabel:`Client ID` or :guilabel:`Application ID`)
- A client secret (:guilabel:`Value` or :guilabel:`Client Secret Value`)

This completes the setup on the :guilabel:`Microsoft Azure Portal` side.

Setup in Odoo
=============

Enter Microsoft Outlook credentials
-----------------------------------

First, open the Odoo database and navigate to the :guilabel:`Apps` module. Then, remove the
:guilabel:`Apps` filter from the search bar and type in `Outlook`. After that, install the module
called :guilabel:`Microsoft Outlook`.

Next, navigate to :guilabel:`Settings --> General Settings`, and under the :guilabel:`Discuss`
section, ensure that the checkbox for :guilabel:`External Email Servers` is checked. This populates
a new option for :guilabel:`Outlook Credentials`.

:guilabel:`Save` the progress.

Then, copy and paste the :guilabel:`Client ID` (Application ID) and :guilabel:`Client Secret
(Client Secret Value)` into the respective fields and :guilabel:`Save` the settings.

Configure outgoing email server
-------------------------------

On the :guilabel:`General Settings` page, under the :guilabel:`External Email Servers` setting,
click the :guilabel:`Outgoing Email Servers` link to configure the Microsoft account.

Then, create a new email server and check the box for :guilabel:`Outlook`. Next, fill in the
:guilabel:`Description` (it can be anything) and the Microsoft Outlook email :guilabel:`Username`.

Then, cick on :guilabel:`Connect your Outlook account`.

A new window from Microsoft opens to complete the :guilabel:`authorization process`. Select the
appropriate email address that is being configured in Odoo.

.. image:: azure_oauth/verify-outlook.png
   :align: center
   :alt: Permission page to grant access between newly created app and Odoo.

Then, allow Odoo to access the Microsoft account by clicking on :guilabel:`Yes`. After this, the
page will navigate back to the newly configured :guilabel:`Outgoing Mail Server` in Odoo. The
configuration automatically loads the :guilabel:`token` in Odoo, and a tag stating
:guilabel:`Outlook Token Valid` appears in green.

Finally, click :guilabel:`Test Connection`. A confirmation message should appear. The Odoo database
can now send safe, secure emails through Microsoft Outlook using OAuth authentication.

.. tip::
   To extend the server's use, set a :guilabel:`mail.force.smtp.from` system parameter so that
   email is sent from a default *from email address* for all emails sent from the database. The
   value of the system parameter should be the :guilabel:`username` being configured in Microsoft
   Outlook.

.. note::
   The :guilabel:`System Parameters` can be accessed by activating
   :doc:`../../applications/general/developer_mode` in the :menuselection:`Settings --> Technical
   --> Parameters --> System Parameters` menu.

.. seealso::
   - :doc:`../../applications/general/email_communication/email_domain`
