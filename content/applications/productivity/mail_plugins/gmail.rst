============
Gmail Plugin
============

Configuration
=============

The Gmail :doc:`Mail Plugin <../mail_plugins>` needs to be configured both on Odoo and Gmail.

.. _mail-plugin/gmail/enable-mail-plugin:

Enable Mail Plugin
------------------

First, you need to enable the *Mail Plugin* feature in your database. Go to :menuselection:`Settings
--> General Settings --> Integrations`, enable *Mail Plugin*, and *Save* the configuration.

.. _mail-plugin/gmail/install-plugin:

Install the Gmail Plugin
------------------------

#. Open the `Gmail Plugin Apps Script project
   <https://script.google.com/d/1n7cxtaR4fGXKcP0RwinNQmL8S4FhVqpo-ZZ_cUAhYuuDpZAP_CnHE_7q/edit>`_.

#. Verify you are logged in using the Google account you want to install the plugin on.

#. Click on *Publish* then *Deploy from manifest...*

   .. image:: gmail/deploy-from-manifest.png
      :align: center
      :alt: Deploying from manifest the Gmail Plugin from the Apps Script project

   .. important::
      Make sure you are using the legacy editor; otherwise the *Deploy from manifest* functionality
      may not be available.

      .. image:: gmail/legacy-editor.png
         :align: center
         :alt: Using the legacy editor in the Gmail Plugin Apps Script project

#. Click on *Install add-on*. A "Deployment installed" notification should appear. You can then
   click on *Close*.

   .. image:: gmail/install-add-on.png
      :align: center
      :alt: Installing the Gmail Plugin from the Apps Script project

.. _mail-plugin/gmail/configure-mailbox:

Configure your Gmail mailbox
----------------------------

#. Open any email in your Gmail mailbox. On the right-side panel, click on the Odoo icon and then
   *Authorize Access*.

   .. image:: gmail/authorize-access.png
      :align: center
      :alt: Authorizing access to the Gmail Plugin

#. Choose the right Google account.

   .. image:: gmail/choose-account.png
      :align: center
      :alt: Choosing your Google account

#. Allow the Gmail Plugin to access some of your data.

   .. image:: gmail/allow-permissions.png
      :align: center
      :alt: Allowing the Gmail Plugin to access Google data

#. The right-side panel can now display **Company Insights**. At the bottom, click on *Login*.

   .. image:: gmail/panel-login.png
      :align: center
      :alt: Logging in your Odoo database

   .. note::
      Only a limited amount of *Company Insights* (*Lead Enrichment*) requests are available as a
      trial. This feature requires :ref:`prepaid credits <mail_plugins/pricing>`.

#. Enter your Odoo database URL and click on *Login*.

   .. image:: gmail/database-url.png
      :align: center
      :alt: Entering your Odoo database URL

#. If you aren't logged into your database, enter your credentials.

#. Click on *Allow* to let the Gmail Plugin connect to your database.

   .. image:: gmail/odoo-permission.png
      :align: center
      :alt: Allowing the Gmail Plugin to connect to a database
