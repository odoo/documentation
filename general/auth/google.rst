=======================================
Integrate Google Sign-In Authentication
=======================================

test2 The **Google Sign-In Authentication** is a function that allows your users to sign in to Odoo 
with their Google account (the same account they already use with Gmail, etc). It reduces the burden 
of login for the users, and makes the process easier, quicker and more secure for them. Moreover, 
users do not need to remember or manage yet another password.

.. _google/configuration:

Configuration
=============

The integration of the Google sign-in function requires configuration both in Google and in Odoo.

These are the steps to follow in order to integrate Google sign-in authentication:

#. Connect to your Google account and go to the `Google API Dashboard 
   <https://console.developers.google.com/>`_.

#. Click on *Create Project* on the right, and enter the project name and other details of your 
   company.

#. Click on *Create*.

   .. image:: media/google-auth-create-project.png
      :align: center
      :alt: Create project button

   .. image:: media/google-auth-new-project-details.png
      :align: center
      :alt: Filling in the details of a new project

   .. note::
      - Type the name of your own company, NOT odoo.com as in the example.

#. On the left side menu, click on :menuselection:`OAuth consent screen`.

   .. image:: media/google-oauth-consent-selection.png
      :align: center
      :alt: Google oauth consent selection menu

#. Choose one of the options **(Internal / External)** as instructed, and click on *Create*.

   .. image:: media/google-oauth-consent.png
      :align: center
      :alt: Choice of a user type in oauth consent

#. Fill in your details, then click on *Save and Continue*.

   .. image:: media/google-auth-edit-app-registration.png
      :align: center
      :alt: Edit app registration page

   .. image:: media/google-auth-edit-app-registration-part2.png
      :align: center
      :alt: Edit app registration page part 2

#. Click on *Save and Continue* once again, then click on *Back to Dashboard*.

#. On the left side menu, click on :menuselection:`Credentials`.

   .. image:: media/google-auth-credentials-button.png
      :align: center
      :alt: Credentials button menu

#. Click on *Create Credentials* and select **OAuth client ID**.

   .. image:: media/google-oauth-client-id.png
      :align: center
      :alt: Oauth client id selection

#. Select **Web Application** as the Application type. Now configure the allowed pages on which you 
   will be redirected. To achieve this, complete the field **Authorized redirect URIs**. Copy paste 
   the following link into the box: http://mydomain.odoo.com/auth_oauth/signin (replace "mydomain"
   with your own domain). Then click on *Create*.

   .. image:: media/google-create-oauth-client-id.png
      :align: center
      :alt: Creating oauth client id

#. Once done, you receive two infos (your Client ID and Client Secret). *Insert* your Client ID in 
   the **General Settings** on Odoo.

   .. image:: media/google-auth-secret-ids.png
      :align: center
      :alt: Secret ids display
	
   .. image:: media/odoo-settings-client-id.png
      :align: center
      :alt: Filling in the client id in odoo settings

.. seealso::
   - `Google Identity <https://developers.google.com/identity/sign-in/web/sign-in>`_
