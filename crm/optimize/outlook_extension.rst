=================
Outlook Extension
=================

The **Odoo CRM Extension** is a connector that bridges your Outlook mailbox with your Odoo database.
This extension allows you to:

- Create leads from emails sent to your mailbox.
- Centralize Prospects' emails into a CRM.
- Search and store insights on your contacts.

.. image:: media/outlook-extension-overview.png
   :align: center
   :alt: Overview of the Outlook Extension in Outlook

.. note::
   This extension is compatible with the Web version of Outlook as well as the desktop apps.

.. important::
   The Outlook Extension uses *Partner Autocomplete IAP credits* to search and store insights on
   your contacts. See the :ref:`Pricing section <outlook_extension/pricing>` below for more
   information.

.. _outlook_extension/configuration:

Configuration
=============

The Outlook Extension requires to be configured both in Odoo and in Outlook.

.. _outlook_extension/enable-feature:

Enable the feature on your database
-----------------------------------

To enable this feature on your Odoo database, go to :menuselection:`CRM --> Configuration --> Lead
Generation`, enable **Outlook CRM Extension**, and click on *Save*.

.. _outlook_extension/add-in-installation:

Install the add-in on Outlook
-----------------------------

You can install the Outlook Extension as a **Custom Add-in**. To do so, follow these steps:

.. important::
   | URL of the **Odoo for Outlook** add-in's manifest file:
   | ``https://download.odoo.com/plugins/outlook/manifest.xml``

   .. todo:: add copy button when the feature is added to the doc

#. Connect to your Outlook mailbox, open any email, and click on the *More actions* button,
   displayed as three little dots.

   .. image:: media/outlook-extension-more-actions.png
      :align: center
      :alt: The button "More actions" in Outlook

#. Click on *Get add-ins*.

   .. image:: media/outlook-extension-get-add-ins.png
      :align: center
      :alt: List of actions in Outlook, including the installation of new add-ins

#. In the new window, select the tab named *My add-ins*, click on *+ Add a custom add-in*, and then
   on *Add from URL...*

   .. image:: media/outlook-extension-custom-add-ins.png
      :align: center
      :alt: Installation of a custom add-in in Outlook

#. | Outlook prompts you to **enter the URL of the add-in's manifest file**. To do so, copy the
     following URL, paste it in the box, and click on *OK*.
   | ``https://download.odoo.com/plugins/outlook/manifest.xml``

   .. image:: media/outlook-extension-add-in-url.png
      :align: center
      :alt: Getting a custom add-in in Outlook by providing the manifest file's URL

#. Outlook warns you that Microsoft hasn’t verified the add-in. Click on *Install* to complete the
   installation.

.. note::
   The *Odoo for Outlook* add-in is not listed yet on Outlook's add-ins list. This is why it is
   currently necessary to install it as a *custom add-in*.

.. _outlook_extension/connection:

Add a shortcut to open the extension
------------------------------------

By default, you can open the **Odoo for Outlook** extension from the *More actions* menu. This
section explains how to move the launcher next to the other default actions.

.. image:: media/outlook-extension-default-actions.png
   :align: center
   :alt: Odoo for Outlook extension as a default action in the mailbox

#. In your Outlook mailbox, click on *Settings*, then on *View all Outlook settings*.
#. Go to :menuselection:`Settings --> Mail --> Customize actions --> Message surface`, select
   *Odoo for Outlook*, and click on *Save*.

   .. image:: media/outlook-extension-customize-actions.png
      :align: center
      :alt: add Odoo for Outlook extension as a default action in the message surface


Connect to your database
------------------------

#. Open **Odoo for Outlook** from any email. This opens the extension as a panel on the right side of
   your screen.
#. Click on *login* at the bottom of the extension.
#. Insert your database's URL then click on *Login*.

   .. image:: media/outlook-extension-database-url.png
      :align: center
      :alt: Connection to an Odoo database from the Outlook extension

#. Log into your database by entering your credentials. Skip this step if you are already logged in
   with this browser.
#. A message asks you if you want to let Outlook access your Odoo database. Click on *Allow* to
   complete the connection.

   .. important::
      Make sure first to :ref:`enable the feature on your database
      <outlook_extension/enable-feature>`. Failing to do so would result in an *error 404 message*.

.. note::
   The extension displays some information, even if you do not connect it to any Odoo database.
   Note that only a limited amount of contact enrichment requests are available as a trial, as this
   feature requires prepaid credits. See the :ref:`Pricing section <outlook_extension/pricing>`
   below for more information.

.. _outlook_extension/pricing:

Pricing
=======

The extension is **free** and doesn't require any purchase to be installed and used.

However, this extension provides you with *Lead Enrichment* in the **Company Insights** section.
This service is part of a paid service known as **Lead Generation**.

The extension allows you to test this service for free, whether you connect the extension to a
database or not. After a while, the extension asks you to buy credits to keep using this additional
service.

.. image:: media/outlook-extension-credits-message.png
   :align: center
   :alt: "Could not auto-complete the company: not enough credits!" warning message in the Outlook
         extension

.. tip::
   You can buy more *Lead Generation* credits to keep using this service or disregard this message
   and keep using the extension for free without *Lead Enrichment*.

In-App Purchase
---------------

| *Lead Generation* is an *In-App Purchase (IAP)* service, which requires prepaid credits to be
  used. Each request consumes one credit.
| To buy credits, go to :menuselection:`Settings --> Contacts --> Partner Autocomplete or Odoo IAP -->
  View My Services` and select a package.

.. note::
   - If you run out of credits, the only information populated when clicking on the suggested
     company is the website link and logo.
   - If you are on Odoo Online (SAAS) and have the Enterprise version, you benefit from free
     trial credits to test the feature.
   - Learn about our *Privacy Policy* `here <https://iap.odoo.com/privacy#header_2>`_.

.. seealso::
   - :doc:`../../general/in_app_purchase/in_app_purchase`
   - `Odoo Learn: Lead Enrichment <https://www.odoo.com/r/p73>`_