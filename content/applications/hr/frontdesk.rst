:show-content:

=========
Frontdesk
=========

The Odoo *Frontdesk* application provides a way for visitors to check in to a building or location,
and alert the person they are meeting about their arrival. Additionally, they can request a
pre-configured beverage to be brought to them, while they wait.

This application is ideal for businesses that do **not** have someone working at a reception desk,
locations **without** a designated waiting area available to guests and visitors.

Configuration
=============

The first item to configure with the *Frontdesk* application is the station, followed by any drink
selections that might optionally be offered.

Stations
--------

In Odoo's *Frontdesk* application, a *Station* can be thought of as any location where someone can
sign in and wait for an employee. This is typically some form of waiting room, such as a lobby. Each
station has a kiosk where visitors check in.

When setting up the *Frontdesk* application, a minimum of one station **must** be configured, but
there is no limit to how many stations can be created and configured.

To create a station, navigate to :menuselection:`Frontdesk app --> Configuration --> Stations`, and
click :guilabel:`New`. When clicked, a blank frontdesk form appears.

Enter the following information on the form:

- :guilabel:`Frontdesk Name`: enter a name for the specific frontdesk location. This should be
  short and easily identifiable, such as `Reception Desk` or `Main Lobby`. This field is required in
  order to create a station.
- :guilabel:`Responsibles`: select the person (or persons) who are alerted when a visitor checks in
  using this specific frontdesk. Multiple selections can be entered. This field is required in order
  to create a station.
- :guilabel:`Kiosk URL`: this field auto-populates once the frontdesk form is saved, with at least
  the :guilabel:`Frontdesk Name` and :guilabel:`Responsibles` fields filled. To save manually, click
  the :guilabel:`(cloud with upward arrow)` icon, located at the top of the form.

  Once saved, a URL is generated in the :guilabel:`Kiosk URL` field. This URL is one way the
  frontdesk kiosk is accessed.

  To access the kiosk, click the :guilabel:`Copy` button at the end of the URL, and navigate to that
  URL in a web browser. This URL opens that specific station's frontdesk sign-in page.

  .. tip::
     To add an image/photo to a frontdesk form, hover over the :guilabel:`(camera with a '+' sign)`
     icon in the top-right of the form to reveal a :guilabel:`✏️ (pencil)` icon.

     Click on the :guilabel:`✏️ (pencil)` icon to open a file explorer, navigate to the desired
     image/photo file, then click :guilabel:`Open` to select it.

     The image selected for the station photo appears as the background image for the station kiosk.

Options tab
~~~~~~~~~~~

.. _frontdesk/host:

- :guilabel:`Host Selection`: if the visitor is attending a meeting, this option allows the visitor
  to select the meeting host from a presented list, and notify that individual. When enabled,
  additional fields appear, as detailed below.
- :guilabel:`Authenticate Guest`: if additional information is required when a guest checks in,
  enable this option, and select which of the following are required:

  - :guilabel:`Email`: select whether the guest's email address is :guilabel:`Required`,
    :guilabel:`Optional`, or if the information is not requested at all (:guilabel:`None`).
  - :guilabel:`Phone`: select whether the guest's phone number is :guilabel:`Required`,
    :guilabel:`Optional`, or if the information is not requested at all (:guilabel:`None`).
  - :guilabel:`Organization`: select whether the guest's organization is :guilabel:`Required`,
    :guilabel:`Optional`, or if the information is not requested at all (:guilabel:`None`).

- :guilabel:`Theme`: select the color mode of the kiosk. Choose either :guilabel:`Light` or
  :guilabel:`Dark`. The :guilabel:`Light` selection displays a pale gray background on the kiosk,
  whereas the :guilabel:`Dark` selection displays a dark gray and black background.
- :guilabel:`Self Check-In`: enable this option to present a check-in QR code on the kiosk. The QR
  code allows guests to check in using their mobile device, instead of using the kiosk. This option
  is recommended for a busy kiosk with multiple guests checking in at any time.
- :guilabel:`Offer Drinks`: enable this option to offer guests a drink upon check in. If this option
  is enabled, it is necessary to :ref:`configure the drinks being offered <frontdesk/drinks>`, via
  the :guilabel:`Configure Drinks` link that appears when the option is enabled. Once all drink
  options are configured, select each drink to be offered using the drop-down menu.

.. note::
   The following options are only visible in the :guilabel:`Options` tab if the :ref:`Host Selection
   <frontdesk/host>` option is enabled.

- :guilabel:`Notify by email`: enable this option to have an email sent to the person the guest is
  visiting upon check in. When enabled, an :guilabel:`Email Template` field appears beneath, with
  the default :guilabel:`Frontdesk Email Template` selected.

  To change the default email template, click the drop-down menu in the :guilabel:`Email Template`
  field, then select another email template.

  To modify the currently selected template, click the :guilabel:`Internal link (arrow)` icon at the
  end of the line, and make any edits to the template.
- :guilabel:`Notify by SMS`: enable this option to have an SMS (text) message sent to the person the
  guest is visiting upon check in. When enabled, an :guilabel:`SMS Template` field appears beneath,
  with the default :guilabel:`Frontdesk SMS Template` selected.

  To change the default SMS template, click the drop-down menu in the :guilabel:`SMS Template`
  field, and select another SMS template.

  To modify the currently selected template, click the :guilabel:`Internal link (arrow)` icon at the
  end of the line, and make any desired edits to the content of the template. The SMS message may
  have a maximum of 242 characters, which fits in 4 SMS (UNICODE) messages.
- :guilabel:`Notify by Discuss`: this option is enabled by default when the :guilabel:`Host
  Selection` option is enabled. This option opens a *Discuss* application message window with the
  person the guest is visiting upon check in.

  When enabled, a default message appears for the person the guest is visiting. The *Discuss*
  application **must** be installed in order for this option to work.

.. note::
   *Discuss* is installed by default when creating an Odoo database, and does not count towards
   billing. As long as the *Discuss* application is not intentionally uninstalled, the
   :guilabel:`Notify by Discuss` option works.

.. example::
   The default message format for the :guilabel:`Notify by Discuss` option is: `(Frontdesk Station)
   Check-In: (Guest Name) (Guest Phone Number) (Organization) to meet (Name of employee).`

   An example of how that might appear in a *Discuss* message is: `Main Lobby Check-In: John Doe
   (123-555-1234) (Odoo, Inc.) to meet Marc Demo.`

.. image:: frontdesk/station-form.png
   :align: center
   :alt: Frontdesk station form with all the information filled out.

Side Message tab
~~~~~~~~~~~~~~~~

Enter any desired text to appear on the station kiosk after a guest has checked in, such as a
welcome greeting or any necessary instructions. The text appears on the confirmation page, on the
right side of the screen after a guest has completed the check-in process.

.. _frontdesk/drinks:

Drinks
------

After a station is created, the next step is to configure the drinks to offer visitors, if desired.
This step is **not** necessary or required for the *Frontdesk* application to work, and only needs
to be configured if drinks are offered to guests.

To add a drink option, navigate to :menuselection:`Frontdesk app --> Configuration --> Drinks`, and
click :guilabel:`New`. Doing so reveals a blank drink form to configure.

Enter the following information on the drink form:

- :guilabel:`Drink Name`: type the name of the drink option in this field. This field is required.
- :guilabel:`People to Notify`: use the drop-down menu in this field to select who is notified when
  the drink is selected. Multiple people can be entered in this field. This field is required.
- :guilabel:`Sequence`: enter a numerical value in this field to indicate where in the list of drink
  options this specific option appears. The lower the number, the higher on the list the drink
  appears. For example, entering the number one would place that drink at the top of the list, and
  appear first in the sequence.

.. tip::
   To add an image/photo to a drink form, hover over the :guilabel:`(camera with a '+' sign)` icon
   in the top-right of the form to reveal a :guilabel:`✏️ (pencil)` icon.

   Click on the :guilabel:`✏️ (pencil)` icon to open a file explorer, navigate to the desired
   image/photo file, then click :guilabel:`Open` to select it.

   The image selected now appears in the picture field, and is set as the image for the drink.

.. image:: frontdesk/espresso.png
   :align: center
   :alt: Drink form with the information filled out for an espresso.

Station dashboard
=================

.. tip::
   To add an image/photo to a drink form, hover over the :guilabel:`(camera with a '+' sign)` icon
   in the top-right of the form to reveal a :guilabel:`✏️ (pencil)` icon.

   Click on the :guilabel:`✏️ (pencil)` icon to open a file explorer, navigate to the desired
   image/photo file, then click :guilabel:`Open` to select it.

   The image selected now appears in the picture field, and is set as the image for the drink.

.. _frontdesk/kiosk:

Kiosk setup
===========

Set up each kiosk for use after configuring the various stations. It is recommended to use a
dedicated device for each frontdesk kiosk, such as a tablet.

Navigate to the kiosk in one of two ways:

- Navigate to the main *Frontdesk* application dashboard, and click the :guilabel:`Open Desk`
  button on the desired station card. The kiosk loads in a new browser tab.
- Navigate to :menuselection:`Frontdesk app --> Configuration --> Stations`, and click on the
  desired station. Then, click the :guilabel:`Copy` button at the end of the :guilabel:`Kiosk URL`
  line, and paste the URL into a new browser tab or window.

.. important::
   It is recommended to log out of the database, and close the tab, after navigating to the kiosk.
   That way, there is no possibility of a visitor accessing the database when checking-in.

Reporting
=========

The *Frontdesk* application has two reports available: :guilabel:`Visitors` and :guilabel:`Drinks`.

To access either of these reports, navigate to :menuselection:`Frontdesk app --> Reporting` to
reveal a drop-down menu containing the options: :guilabel:`Visitors` and :guilabel:`Drinks`.

The :guilabel:`Visitors` report displays the number of visitors by month, for the current year. The
:guilabel:`Drinks` report shows how many total requests were made for each drink.

As with all reports in Odoo, the filters and groups can be modified to show other metrics, as well.

.. seealso::
   - :doc:`frontdesk/visitors`

.. toctree::
   :titlesonly:

   frontdesk/visitors
