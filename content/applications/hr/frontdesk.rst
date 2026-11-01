:show-content:

=========
Frontdesk
=========

The Odoo **Frontdesk** application provides a way for visitors to check in to a building or
location, and alert the person they are meeting about their arrival.

This application is ideal for businesses that do **not** have someone working at a reception desk,
or locations **without** a designated waiting area available to guests and visitors.

Configuration
=============

The only item to configure in the **Frontdesk** application is the *station*.

.. _frontdesk/stations:

Stations
--------

In Odoo's **Frontdesk** application, a *station* can be thought of as any location where someone can
sign in and wait for an employee. This is typically some form of waiting room, such as a lobby. Each
station has a kiosk where visitors check in.

When setting up the **Frontdesk** application, a minimum of one station **must** be configured, but
there is no limit to how many stations can be created and configured.

To create a station, navigate to :menuselection:`Frontdesk app --> Stations`, and click
:guilabel:`New`. When clicked, a blank station form appears.

Enter the following information on the form:

- :guilabel:`Frontdesk Name`: Enter a name for the specific frontdesk location. This should be short
  and identifiable, such as `Reception Desk` or `Main Lobby`. This field is required.
- :guilabel:`Responsibles`: Select the users who are notified in the **Discuss** app every time a
  visitor checks in at the station. Multiple users can be selected. This field is required.
- :guilabel:`Company`: The company the station belongs to. This field only appears in multi-company
  databases.
- :guilabel:`Kiosk URL`: This field is automatically populated when the station is saved. This URL
  is one way the station's kiosk is accessed. Click the :icon:`assignment` :guilabel:`(Copy)` icon
  at the end of the URL to copy it.
- :guilabel:`Image`: Hover over the image placeholder in the corner of the form, and click the
  :icon:`edit_f` :guilabel:`(Edit)` icon that appears. Navigate to the desired image file, then
  click :guilabel:`Open` to select it. The selected image is used as the kiosk background.

.. _frontdesk/settings-tab:

Settings tab
~~~~~~~~~~~~

.. _frontdesk/host:

- :guilabel:`Host Selection`: Enable this option to allow the visitor to select and notify the
  person they are visiting (the *host*). By default, all the employees of the company can be
  selected. To restrict the list, select the available employees in the :guilabel:`Select Hosts`
  field that appears when this option is enabled.
- :guilabel:`Self Check-In`: Enable this option to display a QR code on the kiosk welcome screen,
  which allows guests to check in using their mobile device. This option is recommended for a busy
  kiosk with multiple guests checking in at any time.
- :guilabel:`Guest Details`: Enable this option to request additional information when a guest
  checks in. Click the checkbox next to :guilabel:`Email`, :guilabel:`Phone`, or
  :guilabel:`Organization` to require the corresponding information upon check-in. When this
  option is disabled, guests only enter their name.
- :guilabel:`Host Notifications`: To notify hosts *in addition to* the default **Discuss** app
  notification, click the checkbox next to one of the following options:

  - :guilabel:`Notify by email`: An email is sent to the host's work email, using the template
    selected in the field that appears after enabling this option. By default,
    :guilabel:`Frontdesk Email Template` is selected.
  - :guilabel:`Notify by SMS`: An SMS is sent to the host's work phone, using the template selected
    in the field that appears after enabling this option. By default, :guilabel:`Frontdesk SMS
    Template` is selected.

- :guilabel:`Auto-Checkout`: Enter the duration after which checked-in visitors are automatically
  checked out, in a `##h ##m` format. Set this field to `0h` to disable automatic check-out.
- :guilabel:`Privacy Notice`: Enter a short summary of how visitors' personal data is processed.
  This text is displayed at the bottom of the kiosk welcome screen.
- :guilabel:`Privacy Notice Details`: Enter the full privacy notice, covering data storage, rights,
  and contact information. Visitors can display this text by clicking :guilabel:`Read more` on the
  kiosk.

.. tip::
   The host notification options are only useful if :ref:`Host Selection <frontdesk/host>` is
   enabled. If no host is selected, only the station's :guilabel:`Responsibles` are notified.

Side Message tab
~~~~~~~~~~~~~~~~

Enter any desired text to appear on the station kiosk after a guest has checked in, such as a
welcome greeting or any necessary instructions. The text appears on the confirmation page, on the
right side of the screen, after a guest has completed the check-in process.

.. image:: frontdesk/station-form.png
   :alt: Frontdesk station form with all the information filled out.

.. _frontdesk/dashboard:

Station dashboard
=================

The *Stations* dashboard displays all station cards along with some basic information. To access
the dashboard, navigate to :menuselection:`Frontdesk app --> Stations`. Each station card displays
the following information:

- :icon:`star` :guilabel:`(Add to Favorites)`: Click this icon to select the station as a favorite,
  click it again to deselect it.
- :guilabel:`Frontdesk Name`: The name of the station.
- :guilabel:`Open Desk`: A button to open the station's :ref:`kiosk <frontdesk/kiosk>`.
- :guilabel:`# On Site`: The number of visitors currently checked in at this station, displayed only
  when at least one visitor is on site. Click to open the visitors list.
- :guilabel:`Last Check-In`: How long ago the last visitor still on site checked in.
- :guilabel:`Responsibles`: The avatars of the users responsible for the station.

Click on a card to view a list of all the visitors to the station, including past visitors.

.. tip::
   To modify a station, click the :icon:`more_vert` :guilabel:`(Dropdown menu)` icon on its card,
   then click :guilabel:`Configuration`, and the station form loads.

.. image:: frontdesk/stations-dashboard.png
   :alt: The Stations dashboard, with a card for each station.

.. _frontdesk/kiosk:

Kiosk setup
===========

Set up each kiosk for use after configuring the related station. It is recommended to use a
dedicated device for each frontdesk kiosk, such as a tablet.

Navigate to the kiosk in one of the following ways:

- Navigate to the :ref:`Stations dashboard <frontdesk/dashboard>`, click the :guilabel:`Open Desk`
  button on the corresponding station card, and the kiosk loads in the current browser tab.
- Open the station form, and click the :guilabel:`Open Kiosk` button. A *Frontdesk* pop-up window
  loads, displaying the kiosk URL to open on the kiosk device, and an :guilabel:`Install App` button
  to install the kiosk as an application on the device.
- Copy the :guilabel:`Kiosk URL` from the station form, and paste it into a browser on the kiosk
  device.

.. important::
   Once a frontdesk kiosk is accessed, the user is *automatically signed out of the database* on
   that specific device.

   This is a security measure designed to prevent unauthorized access to the database.

.. _frontdesk/visitor-flow:

Visitor check-in
================

When a visitor arrives, the *Your Information* section of the kiosk welcome screen is filled out.
All visitors are required to enter their :guilabel:`Name`, and depending on the :ref:`configuration
<frontdesk/settings-tab>`, an :guilabel:`Email`, :guilabel:`Phone`, and :guilabel:`Company` field
may also appear.

If the :guilabel:`Host Selection` option is enabled, the visitor clicks :icon:`stacks`
:guilabel:`Browse All Hosts` in the *Select Host* section, and a list of hosts appears. The visitor
clicks the person they are visiting, then clicks :guilabel:`Continue`.

If the :guilabel:`Host Selection` option is disabled, the visitor clicks :guilabel:`Check In`.

.. image:: frontdesk/kiosk-welcome.png
   :alt: The kiosk welcome screen, with the visitor information filled out and a host selected.

A confirmation screen appears, displaying the station's side message. The visitor is recorded as
checked in, and the station's responsibles and the host are notified.

.. note::
   If the selected host is taking time off, the visitor is informed that their host is unavailable
   via email or SMS, depending on how the :ref:`station is configured <frontdesk/settings-tab>`.

.. tip::
   If :guilabel:`Self Check-In` is enabled, visitors can instead scan the QR code displayed in the
   top-right corner of the welcome screen with their mobile device, and fill out the same
   information on their phone, in the language selected on the kiosk.

Reporting
=========

To analyze visits, navigate to :menuselection:`Frontdesk app --> Visitors`, remove the default
filters, and click the :icon:`bar_chart` :guilabel:`(Graph)` or :icon:`oi_view-pivot`
:guilabel:`(Pivot)` icon in the corner. By default, the graph displays the number of
visitors by station.

As with all reports in Odoo, the filters and groups can be modified to show other metrics, as well.

.. seealso::
   - :doc:`frontdesk/visitors`

.. toctree::
   :titlesonly:

   frontdesk/visitors
