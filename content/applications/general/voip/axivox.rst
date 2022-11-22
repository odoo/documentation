=====================================
Use VoIP services in Odoo with Axivox
=====================================

Introduction
============

Odoo VoIP can be set up to work together with `Axivox <https://www.axivox.com/>`_. In that case, an
:doc:`Asterisk server <asterisk>` is not necessary as the infrastructure is hosted and managed by
Axivox.

To use this service, `contact Axivox <https://www.axivox.com/contact/>`_ to open an account. Before
doing so, verify that Axivox covers your area and the areas you wish to call.

Configuration
=============

Go to :menuselection:`Apps` and install the **VoIP Module**.

.. image:: axivox/voip-installation.png
   :align: center
   :alt: VoIP module installation on an Odoo database

Go to :menuselection:`Settings --> General Settings --> Integrations`, and fill out the **Asterisk
(VoIP)** field:

- **PBX Server IP**: set the domain created by Axivox for your account (e.g.,
  *yourcompany.axivox.com*)
- **WebSocket**: type in ``wss://pabx.axivox.com:3443``
- **VoIP Environment**: set as *Production*

.. image:: axivox/voip-configuration.png
   :align: center
   :alt: Integration of Axivox as VoIP provider in an Odoo database

Configure the VOIP user in the Odoo's user
------------------------------------------

Go to :menuselection:`Settings --> Users & Companies --> Users`, then open the user's form you want
to configure. Under the **Preferences** tab, fill out the section **PBX Configuration**:

- **SIP Login / Browser's Extension**: the Axivox *username*
- **SIP Password**: the Axivox *SIP Password*

.. image:: axivox/odoo-user.png
   :align: center
   :alt: Integration of Axivox user in the Odoo user preference

.. note::
   You can find all this information by logging in at https://manage.axivox.com/, selecting the user
   you want to configure, and referring to the fields as pictured below.

   .. image:: axivox/manager-sip.png
      :align: center
      :alt: SIP credentials in the Axivox manager

Phone Calls
===========

You can make phone calls by clicking on the phone icon in the navigation bar.

You can also receive phone calls. Odoo rings and displays a notification.

.. note::
   Your number is the one provided by Axivox.

.. image:: axivox/incoming-call.png
   :align: center
   :alt: Incoming VoIP call in Odoo

.. tip::
   If you see a *Missing Parameter* message in the **Odoo softphone**, refresh your Odoo window and
   try again.

   .. image:: axivox/missing-parameter.png
      :align: center
      :alt: "Missing Parameter" error message in the Odoo softphone

.. tip::
   If you see an *Incorrect Number* message in the Odoo softphone, make sure to use the
   international format, leading with the plus (+) sign followed by the international country code.
   E.g., +16506913277 (where +1 is the international prefix for the United States).

   .. image:: axivox/incorrect-number.png
      :align: center
      :alt: "Incorrect Number" error message in the Odoo softphone
