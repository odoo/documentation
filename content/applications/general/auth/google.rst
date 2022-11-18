=============================
Google Sign-In Authentication
=============================

The **Google Sign-In Authentication** is a useful function that allows your users to sign in to Odoo
with their Google account.

This is particularly helpful if your organization uses Google Workforce and you want the employees
within your organization to connect to Odoo with their Google Accounts.

.. _google-sign-in/configuration:

Configuration
=============

The integration of the Google sign-in function requires configuration both on Google and on Odoo.

.. _google-sign-in/api:

Google API Dashboard
--------------------

#. Go to the `Google API Dashboard <https://console.developers.google.com/>`_.
#. Make sure the right project is opened. If you don't have a project yet, click on *Create
   Project*, fill out the project name and other details of your company, and click on *Create*.

   .. image:: google/new-project-details.png
      :align: center
      :alt: Filling out the details of a new project

   .. tip::
      Choose the name of your own company from the drop-down menu.

.. _google-sign-in/oauth:

OAuth consent screen
~~~~~~~~~~~~~~~~~~~~

#. On the left side menu, click on :menuselection:`OAuth consent screen`.

   .. image:: google/consent-selection.png
      :align: center
      :alt: Google oauth consent selection menu

#. Choose one of the options **(Internal / External)** as instructed, and click on *Create*.

   .. image:: google/consent.png
      :align: center
      :alt: Choice of a user type in oauth consent

#. Fill out your details and domain info, then click on *Save and Continue*.
#. On the **Scopes** page, leave all fields as is, and click on *Save and Continue*.

.. _google-sign-in/credentials:

Credentials
~~~~~~~~~~~

#. On the left side menu, click on :menuselection:`Credentials`.

   .. image:: google/credentials-button.png
      :align: center
      :alt: Credentials button menu

#. Click on *Create Credentials* and select **OAuth client ID**.

   .. image:: google/client-id.png
      :align: center
      :alt: Oauth client id selection

#. Select **Web Application** as the Application type. Now configure the allowed pages on which you
   will be redirected.

   In order to achieve this, in the **Authorized redirect URIs** field, enter your database's domain
   immediately followed by ``/auth_oauth/signin``. For example:
   ``https://mydomain.odoo.com/auth_oauth/signin``, then click on *Create*.

   .. image:: google/create-client-id.png
      :align: center
      :alt: Creating oauth client id

.. _google-sign-in/auth-odoo:

Google Authentication on Odoo
-----------------------------

.. _google-sign-in/client-id:

Retrieve the Client ID
~~~~~~~~~~~~~~~~~~~~~~

Once you have done the previous steps, two keys are generated on the Google API Dashboard: *Client
ID* and *Client Secret*. Copy the *Client ID*.

.. image:: google/secret-ids.png
   :align: center
   :alt: Google OAuth Client ID generated

.. _google-sign-in/odoo-activation:

Odoo activation
~~~~~~~~~~~~~~~

#. Go to :menuselection:`Odoo General Settings --> Integrations` and activate **OAuth
   Authentication**.

   .. note::
      You may have to log in again after this step.

#. Go back to :menuselection:`General Settings --> Integrations`, activate **Google
   Authentication**, then fill out the *Client ID* with the key from the Google API Dashboard, and
   *Save*.

   .. image:: google/odoo-client-id.png
      :align: center
      :alt: Filling out the client id in Odoo settings

.. _google-sign-in/log-in:

Log in to Odoo with Google
==========================

To link your Google account to your Odoo profile, click on *Log in with Google* when you are asked
to choose a new password.

   .. image:: google/first-login.png
      :align: center
      :alt: Reset password screen with "Log in with Google" button

Existing users must :ref:`reset their password <users/reset-password>` to access the *reset
password* page, while new users can directly click on *Log in with Google* instead of choosing a new
password.

.. seealso::
   - `Google Cloud Platform Console Help - Setting up OAuth 2.0
     <https://support.google.com/cloud/answer/6158849>`_
