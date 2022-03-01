==============
Outlook Plugin
==============

Configuration
=============

The Outlook :doc:`Mail Plugin <../mail_plugins>` needs to be configured both on Odoo and Outlook.

.. _mail-plugin/outlook/enable-mail-plugin:

Enable Mail Plugin
------------------

First, you need to enable the *Mail Plugin* feature in your database. Go to :menuselection:`Settings
--> General Settings --> Integrations`, enable *Mail Plugin*, and *Save* the configuration.

.. _mail-plugin/outlook/install-plugin:

Install the Outlook Plugin
--------------------------

#. Open your Outlook mailbox and select any email.

#. Click on the *More actions* button and select *Get Add-ins*.

   .. image:: outlook/more-actions.png
      :align: center
      :alt: More actions button in Outlook

#. Select the *My add-ins* tab.

   .. image:: outlook/my-add-ins.png
      :align: center
      :alt: My add-ins in Outlook

#. Under *Custom add-ins*, click on *+ Add a custom add-in*, and then on *Add from URL...*

   .. image:: outlook/custom-add-ins.png
      :align: center
      :alt: Custom add-ins in Outlook

#. Enter the following URL `https://download.odoo.com/plugins/outlook/manifest.xml` and press
   *OK*.

   .. image:: outlook/enter-add-in-url.png
      :align: center
      :alt: Entering the add-in URL in Outlook

#. Read the warning and click on *Install*.

   .. image:: outlook/add-in-warning.png
      :align: center
      :alt: Custom add-in installation warning in Outlook

.. _mail-plugin/outlook/connect-database:

Connect your database
---------------------

#. Open any email in your Outlook mailbox, click on the *More actions* button, and select *Odoo for
   Outlook*.

   .. image:: outlook/odoo-for-outlook.png
      :align: center
      :alt: Odoo for Outlook add-in button

#. The right-side panel can now display **Company Insights**. At the bottom, click on *Login*.

   .. image:: outlook/panel-login.png
      :align: center
      :alt: Logging in your Odoo database

   .. note::
      Only a limited amount of *Company Insights* (*Lead Enrichment*) requests are available as a
      trial. This feature requires :ref:`prepaid credits <mail_plugins/pricing>`.

   .. tip::
      If, after a short while, the panel is still empty, it is possible that your browser cookie
      settings prevented it from loading.
      Note that these settings also change if you are in "Incognito" mode on your
      browser.

      To fix this issue, configure your browser to always allow cookies on Odoo's plugin page.

      For Google Chrome, you can do so by following the guide at:
      `https://support.google.com/chrome/answer/95647 <https://support.google.com/chrome/answer/95647#:~:text=Allow%20or%20block%20cookies%20for%20a%20specific%20site>`_
      and adding `download.odoo.com` to the list of `Sites that can always use cookies`.

      Once done, the Outlook panel needs to be opened again.


#. Enter your Odoo database URL and click on *Login*.

   .. image:: outlook/enter-database-url.png
      :align: center
      :alt: Entering your Odoo database URL

#. Click on *Allow* to open the pop-up window.

   .. image:: outlook/new-window-warning.png
      :align: center
      :alt: New window pop-up warning

#. If you aren't logged into your database, enter your credentials.

#. Click on *Allow* to let the Outlook Plugin connect to your database.

   .. image:: outlook/odoo-permission.png
      :align: center
      :alt: Allowing the Outlook Plugin to connect to a database

.. _mail-plugin/outlook/add-shortcut:

Add a shortcut to the plugin
----------------------------

By default, the Outlook Plugin can be opened from the *More actions* menu. However, to save
time, it's possible to add it next to the other default actions.

#. In your Outlook mailbox, click on *Settings*, then on *View all Outlook settings*.

   .. image:: outlook/all-outlook-settings.png
      :align: center
      :alt: Viewing all Outlook settings

#. Select *Customize actions* under *Mail*, click on *Odoo for Outlook*, and then *Save*.

   .. image:: outlook/customize-actions.png
      :align: center
      :alt: Odoo for Outlook customized action

#. Open any email; the shortcut should be displayed.

   .. image:: outlook/odoo-outlook-shortcut.png
      :align: center
      :alt: Odoo for Outlook customized action