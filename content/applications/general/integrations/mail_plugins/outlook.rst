==============
Outlook Plugin
==============

Outlook allows for third-party applications to connect in order to execute database actions from
emails. Odoo has a plugin for Outlook that allows for the creation of an opportunity from the email
panel.

Configuration
=============

The Outlook :doc:`Mail Plugin <../mail_plugins>` needs to be configured both on Odoo and Outlook.

.. _mail-plugin/outlook/enable-mail-plugin:

Enable Mail Plugin
------------------

First, enable the *Mail Plugin* module in the database. Go to :menuselection:`Settings --> General
Settings --> Integrations`, enable :guilabel:`Mail Plugin`, and :guilabel:`Save` the configuration.

.. _mail-plugin/outlook/install-plugin:

Install the Outlook Plugin
--------------------------

Download (:menuselection:`Save Page As --> Web Page XML only`) the following XML file to upload
later: `https://download.odoocdn.com/plugins/outlook/manifest.xml
<https://download.odoocdn.com/plugins/outlook/manifest.xml>`_.

Next, open the Outlook mailbox, and select any email. After completing this, click on the
:guilabel:`Apps` button in the upper right-side, then click :guilabel:`Get add-ins`.

.. image:: outlook/more-actions.png
   :alt: Apps button in Outlook

Following this step, select the :guilabel:`My add-ins` tab on the left-side.

.. image:: outlook/my-add-ins.png
   :alt: My add-ins in Outlook

Under :guilabel:`Custom Addins` towards the bottom, click on :guilabel:`+ Add a custom add-in`, then
select :guilabel:`Add from file...`

.. image:: outlook/custom-add-ins.png
   :alt: Custom add-ins in Outlook

For the next step, attach the `manifest.xml` file downloaded above, and press :guilabel:`OK`. Next,
read the warning and click on :guilabel:`Install`.

.. image:: outlook/add-in-warning.png
   :alt: Custom add-in installation warning in Outlook

.. _mail-plugin/outlook/connect-database:

Connect the database
--------------------

Now, Outlook will be connected to the Odoo database. First, open any email in the Outlook mailbox,
click on the :guilabel:`Apps` button in the upper right-side, and select :guilabel:`Odoo Inbox
Addin`.

.. image:: outlook/odoo-for-outlook.png
   :alt: Odoo for Outlook add-in button

The right-side panel can now display **Company Insights**. At the bottom, click on
:guilabel:`Login`.

.. image:: outlook/panel-login.png
   :alt: Logging in the Odoo database

.. note::
   Only a limited amount of **Company Insights** (*Lead Enrichment*) requests are available as a
   trial database. This feature requires :ref:`prepaid credits <mail_plugins/pricing>`.

.. tip::
   If, after a short while, the panel is still empty, it is possible that the browser cookie
   settings prevented it from loading. Note that these settings also change if the browser is in
   *Incognito* mode.

   To fix this issue, configure the browser to always allow cookies on Odoo's plugin page.

   For Google Chrome, change the browser cookie settings by following the guide at:
   `https://support.google.com/chrome/answer/95647
   <https://support.google.com/chrome/answer/95647>`_ and adding `download.odoo.com` to the list of
   :guilabel:`Sites that can always use cookies`.

   Once this is complete, the Outlook panel needs to be opened again.

Now, enter the Odoo database URL and click on :guilabel:`Login`.

.. image:: outlook/enter-database-url.png
   :alt: Entering the Odoo database URL

Next, click on :guilabel:`Allow` to open the pop-up window.

.. image:: outlook/new-window-warning.png
   :alt: New window pop-up warning

If the user isn't logged into the database, enter the credentials. Click on :guilabel:`Allow` to let
the Outlook Plugin connect to the database.

.. image:: outlook/odoo-permission.png
   :alt: Allowing the Outlook Plugin to connect to a database

.. _mail-plugin/outlook/add-shortcut:

Using the inbox plugin
======================

To use the plugin, open any email in the Outlook mailbox, click on the :guilabel:`Apps` button in
the upper right-side, and select :guilabel:`Odoo Inbox Addin` to open the panel.

.. note::
   The options available in the panel will vary based on the applications installed in the database.

Create a contact
----------------

To create a contact record in Odoo from an email, click the :icon:`fa-plus-circle`
:guilabel:`(circle plus)` icon.

.. note::
   A contact record **must** be created before a lead/opportunity can be created.

Create an opportunity
---------------------

To create an opportunity from an email, click the :icon:`fa-plus` :guilabel:`(plus)` icon next to
:guilabel:`Opportunities`. Doing so opens a new opportunity record in Odoo in a new tab. The subject
of the email is used as the opportunity title, and the content of the email is added to the
:guilabel:`Notes` tab of the opportunity.

Create a task
-------------

To create a task from an email, click the :icon:`fa-plus` :guilabel:`(plus)` icon next to
:guilabel:`Tasks`. Then, enter the title of the project where the task should be created in the
resulting field, and select the appropriate project from the resulting list. This opens a new task
record in Odoo in a new tab. The subject of the email is used as the task title, and the content of
the email is added to the :guilabel:`Description` tab.

Create a ticket
---------------

To create a task from an email, click the :icon:`fa-plus` :guilabel:`(plus)` icon next to
:guilabel:`Tickets`. Doing so opens a new ticket record in Odoo in a new tab. The subject of the
email is used as the ticket title, and the content of the email is added to the
:guilabel:`Description` tab of the ticket.
