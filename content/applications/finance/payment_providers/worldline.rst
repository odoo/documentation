=========
Worldline
=========

`Worldline <https://worldline.com/>`_ is a France-based company and the world's fourth largest
payment provider.

Settings in Worldline
=====================

.. _worldline/API-user:

Create an API user
------------------

It is recommended to set up an **API user** to create transactions from Odoo to ensure that your
Worldline configuration remains safe even if credentials are compromised. Additionally, API users do
not require frequent password updates like regular accounts.

To create an **API user**, proceed as follows:

#. Log into your `Worldline Merchant Portal <https://merchant-portal.preprod.worldline-solutions.com/dashboard>`_,
   click the :icon:`fa-th` (:guilabel:`menu`) icon, and select :guilabel:`Back Office`.
#. Go to :menuselection:`Configuration --> Users` and click on :guilabel:`New User`.
#. Configure the following fields:

   #. Specify a :guilabel:`UserID`, :guilabel:`User's name`, :guilabel:`E-mail address`, and
      :guilabel:`Timezone` of your choice.
   #. Set the :guilabel:`Profile` field to :guilabel:`Admin`.
   #. Enable :guilabel:`Special user for API`.

.. tip::
   If you have already set up a user, make sure it is activated without any error.

.. _worldline/set-up:

Set up Worldline for Odoo
-------------------------

Worldline must now be configured to accept payments from Odoo.

#. From your merchant portal, go to :menuselection:`Developer --> Payment API` and click on
   :guilabel:`Generate API key`. Copy the :guilabel:`API key ID` and the :guilabel:`Secret API key`
   and save them for :ref:`later <worldline/odoo-configuration>`.
#. Go to :menuselection:`Developer --> Webhooks` and click on :guilabel:`Generate webhook keys`.
   Copy the :guilabel:`Webhook ID` and the associated :guilabel:`Secret webhook key` and
   save them for :ref:`later <worldline/odoo-configuration>`.
#. | Click :guilabel:`Add webhook endpoint`, enter your Odoo database's URL followed by
     `/payment/worldline/webhook` in the :guilabel:`Endpoint url` field, and :guilabel:`Confirm`.
   | For example: `https://example.odoo.com/payment/worldline/webhook`.

.. _worldline/odoo-configuration:

Settings in Odoo
================

To set up Worldline in Odoo:

#. :ref:`Navigate to the payment provider Worldline <payment_providers/add_new>`.
#. In the :guilabel:`Credentials` tab, enter the :guilabel:`PSPID` of your Worldline account and
   fill in the :guilabel:`API Key`, :guilabel:`API Secret`, :guilabel:`Webhook Key`, and
   :guilabel:`Webhook Secret` with the values you saved at the step :ref:`Set up Worldline for
   Odoo <worldline/set-up>`.
#. Configure the rest of the options to your liking.
#. Set the :guilabel:`State` field to :guilabel:`Enabled`.

.. seealso::
   :doc:`../payment_providers`

.. _worldline/ogone-migration:

Migration from Ogone to Worldline
=================================

As of January 1, 2026, Worldline, the company behind the Ogone payment solution, no longer supports
Ogone. Users of the :doc:`Ogone payment provider <ogone>` should migrate to Worldline. To do so,
follow these steps:

#. Log into the `Worldline Merchant Portal <https://merchant-portal.preprod.worldline-solutions.com/dashboard>`_
   using your Ogone account credentials.
#. Complete the :ref:`Worldline setup for Odoo <worldline/set-up>`. The existing API key and secret
   can be reused; however, **a new webhook key and secret must be regenerated**.
#. For on-premise installations or databases managed by a partner, update the Odoo installation
   as described in the :doc:`/administration/on_premise/update` documentation, or by
   contacting your integrating partner.
#. In Odoo, :ref:`install <general/install>` the :guilabel:`Payment Provider: Worldline`
   (`payment_worldline`) module.
#. :ref:`Configure the Worldline payment provider <worldline/odoo-configuration>`.
