:show-content:

===================================
VoIP (Voice over Internet Protocol)
===================================

.. |VOIP| replace:: :abbr:`VoIP (Voice over Internet Protocol)`

|VOIP| in Odoo enables businesses to handle calls over the internet by integrating directly with
Odoo apps like **CRM**, **Helpdesk**, and more. Calls and messages are logged within these apps,
keeping records linked to customer interactions.

.. seealso::
   `Odoo Tutorials: VoIP <https://www.odoo.com/slides/voip-voice-over-ip-315>`_

Users can make and receive calls, track communication history, and automate call routing based on
predefined rules. Features like call recording and analytics provide insights into call volume and
response times, helping teams track communication efficiency.

.. cards::
   .. card:: VoIP actions
      :target: voip/voip_widget
      :large:

      Get oriented with the features of the VoIP widget, like what actions can be taken during a
      call.

   .. card:: Devices and integrations
      :target: voip/devices_integrations
      :large:

      Learn about accessing the VoIP widget from different devices (like phones) and apps (like
      Linphone).

VoIP terms
==========

- **VoIP**: Voice over Internet Protocol. Technology that is used to handle calls that are not made
  from a phone line.
- **SIP**: Session Initiation Protocol. Technology included in |VOIP| that specifically handles the
  setup, management, and termination of calls.
- **Call queue**: A system to route calls (usually in a support team). This allows customers to wait
  for help if no support agents are available.
- **Dial plans**: A system to define how |VOIP| calls are routed, based on set rules.

Configure VoIP
==============

To use |VOIP|, first :ref:`install <general/install>` the :guilabel:`VoIP` module.

Once the module is installed, a :icon:`oi-voip` (:guilabel:`VoIP`) icon will appear at the top of
the screen. This is where phone calls are made from within Odoo. When this icon is clicked, a |VOIP|
pop-up widget appears on the screen, and is where emails can be sent, user and employee info can be
edited, and activities can be managed. While this pop-up widget is open, the user can navigate
through their Odoo apps.

Using |VOIP| also requires a service provider. The next section explains how to connect a service
provider to the Odoo database.

VoIP providers
--------------

While |VOIP| setup is minimal in Odoo, most configuration happens in the external |VOIP| service
provider. Two verified providers are :doc:`OnSIP <voip/onsip>` and :doc:`Axivox <voip/axivox>`.
Click on the cards below to learn how to configure these service providers in the Odoo database. If
these providers cannot be used, an alternate provider must meet these requirements to connect with
Odoo:

- |VOIP| host must provide access to a SIP server via a websocket connection
- |VOIP| host must support WebRTC protocol

To add the credentials for the alternate provider, go to the **Settings** app and search for `VoIP`.
In the :guilabel:`Integrations` section under :guilabel:`VoIP`, click :guilabel:`Manage Providers`.
And then, click :guilabel:`New` and enter the requested information (like the websocket's URL). Note
that the :guilabel:`OnSIP Domain` field is where the domain created by the alternate provider goes.

If any issues with the |VOIP| service provider are encountered, then reach out to their support
team. If any issues when setting up the |VOIP| service provider are encountered in Odoo, then follow
the :ref:`relevant troubleshooting steps <voip/voip_widget/troubleshooting_voip>`.

.. warning::
   Odoo **cannot** verify that every alternate provider is compatible with Odoo's systems. However,
   if the above requirements are met, then no issues should be found.

.. cards::
   .. card:: Axivox configuration
      :target: voip/axivox
      :large:

      Learn how to set up Axivox in Odoo. This includes adding users to Axivox, setting up call
      queues, and more.

   .. card:: OnSIP configuration
      :target: voip/onsip
      :large:

      Learn how to set up OnSIP in Odoo. This includes entering OnSIP credentials into Odoo and
      handling troubleshooting.

VoIP workflows
==============

 Here are a few commonly used workflows for Odoo |VOIP|. This technology is especially popular with
 sales teams, but can be useful for other teams as well.

.. cards::
   .. card:: Sales teams and VoIP
      :target: voip/sales_calls
      :large:

      Learn how to use VoIP for a sales team. This includes making sales calls, handling
      follow-ups, and sending a sales quotation while on a call.


.. toctree::
   :titlesonly:

   voip/onsip
   voip/axivox
   voip/voip_widget
   voip/devices_integrations
   voip/sales_calls
