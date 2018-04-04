=====================================
Synchronize Google Calendar with Odoo
=====================================

Odoo is perfectly integrated with Google Calendar so that you 
can see & manage your meetings from both platforms 
(updates go through both directions).

Setup in Google
===============
- Go to `Google APIs platform <https://console.developers.google.com>`__ 
  to generate Google Calendar API credentials. Log in with your Google account. 

- Go to the API & Services page.

.. image:: media/google_calendar_credentials00.png
    :align: center

- Search for *Google Calendar API* and select it.

.. image:: media/google_calendar_credentials01.png
    :align: center

.. image:: media/google_calendar_credentials02.png
    :align: center

- Enable the API.

.. image:: media/google_calendar_credentials03.png
    :align: center

- Select or create an API project to store the credentials if not yet done 
  before. Give it an explicit name (e.g. Odoo Sync).

- Create credentials.

.. image:: media/google_calendar_credentials04.png
    :align: center

- Select *Web browser (Javascript)* 
  as calling source and *User data* as kind of data.

.. image:: media/google_calendar_credentials05.png
    :align: center

- Then you can create a Client ID.
  Enter the name of the application (e.g. Odoo Calendar) and the allowed pages on 
  which you will be redirected. The *Authorized JavaScript origin* is your 
  Odoo's instance URL. The *Authorized redirect URI* is your Odoo's instance 
  URL followed by '/google_account/authentication'.

.. image:: media/google_calendar_credentials06.png
    :align: center

- Go through the Consent Screen step by entering a product name 
  (e.g. Odoo Calendar). Feel free to check the customizations options 
  but this is not mandatory. The Consent Screen will only show up when you 
  enter the Client ID in Odoo for the first time.

- Finally you are provided with your **Client ID**. Go to *Credentials* to 
  get the **Client Secret** as well. Both of them are required in Odoo.

.. image:: media/google_calendar_credentials07.png
    :align: center

Setup in Odoo
=============

- Install the **Google Calendar** App from the *Apps* menu or by checking 
  the option in :menuselection:`Settings --> General Settings`.

.. image:: media/google_calendar_credentials08.png
    :align: center

- Go to :menuselection:`Settings --> General Settings` and enter your 
  **Client ID** and **Client Secret** in Google Calendar option.

.. image:: media/google_calendar_credentials09.png
    :align: center

- The setup is now ready. Open your Odoo Calendar and sync with Google.
  The first time you do it you are redirected to Google to authorize
  the connection. Once back in Odoo, click the sync button again.
  You can click it whenever you want to synchronize your calendar.

.. image:: media/google_calendar_credentials10.png
    :align: center

As of now you no longer have excuses to miss a meeting!

