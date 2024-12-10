
==========================================
Configure Windows Firewall for Windows IoT
==========================================

Firewalls keep devices safe and secure. Sometimes they can block connections that should be made
though. The Windows :abbr:`IoT (Internet of Things)` box software may not be reachable to
the :abbr:`LAN (Local Area Network)` due to a firewall preventing the connection. Consult your local
IT support team to make exceptions (network discovery) in the :abbr:`OS (Operating System)` or
firewall program. Windows has their own firewall as do other virus protection programs.

.. example::
   A client might encounter a time when they are able to reach the homepage of the :abbr:`IoT
   (Internet of Things)` box, yet they cannot access it from another computer/mobile device/tablet
   on the same network.

.. important::
   We do assume that no third-party firewall software is installed on the Windows IoT device.
   If it is the case the client should consult the software documentation for the firewall

Making an exception on Windows Defender
=======================================

It is possible to allow other devices to access the Windows virtual :abbr:`IoT (Internet of Things)`
box while keeping the firewall on. This is done by creating a rule on *Windows Defender* and
allowing communication through certain ports. The following process describes the steps to take in
order to make this exception.

1. open the *Windows Firewall* by navigating to the :menuselection:`Start Menu` and typing in
`Firewall`. Then, open the :menuselection:`Windows Defender Firewall` program. In the left-hand
menu, navigate to :guilabel:`Advanced Settings`
   
   .. image:: firewall/advanced-settings.png
      :align: center
      :alt: Advanced settings option highlighted in the left pane of the Windows Defender Firewall app.

2. In the left menu, choose :guilabel:`Inbound Rules`.

   .. image:: firewall/inbound-rules.png
      :align: center
      :alt: Windows Defender left window pane with inbound rules menu item highlighted.

3. After selecting :guilabel:`Inbound Rules`, select :guilabel:`New Rule` in the far right menu.

   .. image:: firewall/new-rule.png
      :align: center
      :alt: New rule dropdown shown with new rule option highlighted.

4. For the :guilabel:`Rule Type`, select the radio button for :guilabel:`Port`. Click
:guilabel:`Next` to continue to the rest of the configuration.

   .. image:: firewall/radio-port.png
      :align: center
      :alt: Rule Type window open, with the radio button next to port highlighted.

5. On the :guilabel:`Protocols and Ports` page, choose the radio button for :guilabel:`TCP`, under
:guilabel:`Does this rule apply to TCP or UDP?`.

6. Next, under :guilabel:`Does this rule apply to all local ports or specific ports?`, select the radio
button for :guilabel:`Specific local ports`. Then, enter `8069, 80, 443`, and click :guilabel:`Next` to
continue.

.. important::
   Other ports might need to be added depending on the IoT devices you plan to use:

   * Worldline: `9050`
   ..
      TODO: check for SIX

7. The next screen is the :guilabel:`Action` page. Under :guilabel:`What action should be taken when a
connection matches the specified conditions?`, choose the radio button for :guilabel:`Allow the
connection`. Then, click :guilabel:`Next` to continue.

8. A :guilabel:`Profile` page appears. Under :guilabel:`When does this rule apply?`, leave the three
boxes checked for: :guilabel:`Domain`, :guilabel:`Private`, and :guilabel:`Public`. Click
:guilabel:`Next` to continue to the naming convention page.

9. On the :guilabel:`Name` page, enter `Odoo`, under the :guilabel:`Name` field. Enter a
:guilabel:`Description (optional)`. Finally, once ready, click :guilabel:`Finish`.
