================
Connect a screen
================

In Odoo, an :abbr:`IoT (Internet of Things)` Box can be connected to a screen display. After being
connected, the screen can be used to display a :abbr:`PoS (Point of Sale)` order to a client.

.. image:: screen/screen-pos-client-display.png
   :align: center
   :alt: An example of a PoS (point of sale) order on a screen display.

.. note::
   Access the customer display from any other computer by going to the :abbr:`IoT (Internet of Things)`
   Box homepage and clicking on the :guilabel:`POS Display` button.


Connection
==========

The way to connect the screen display to the :abbr:`IoT (Internet of Things)` Box differs depending
on the model.

.. tabs::

   .. tab:: IoT Box model 4

      Connect up to two screens with Micro-HDMI cables on the side of the :abbr:`IoT (Internet of Things)`
      Box. If two screens are connected, they can display distinct content (see usage below).

   .. tab:: IoT Box model 3

      Connect the screen with an HDMI cable on the side of the :abbr:`IoT (Internet of Things)` Box.

.. important::
   Screen(s) should be connected before the :abbr:`IoT (Internet of Things)` Box is switched on. If it
   is already on, connect the screen(s), and then restart the :abbr:`IoT (Internet of Things)` Box by
   unplugging it and plugging it back into its power source.

.. warning::
   The usage of HDMI/Micro-HDMI adapters may cause issues which will result in a blank, black screen on
   the screen display. Cable usage is recommended.

If the connection was successful, the screen should display the :guilabel:`POS Client display`
screen.

.. image:: screen/screen-pos-client-display-no-order.png
   :align: center
   :alt: The default "POS Client Display" screen that appears when a screen display is successfully
         connected to an IoT Box.

The screen should also appear in the list of :guilabel:`Displays` on the :abbr:`IoT (Internet of
Things)` Box homepage.

.. image:: screen/screen-screen-name-example.png
   :align: center
   :alt: An example of a screen display name shown on the IoT Box homepage.

.. note::
    If no screen is detected, a default display named :guilabel:`Distant Display` will be used instead.

    .. image:: screen/screen-no-screen.png
       :align: center
       :alt: The "Distant Display" screen name will be used if no screen is detected.

Usage
=====

Show Point of Sales orders to customers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To use the screen in the :guilabel:`Point of Sale` app, go to :menuselection:`Point of Sale -->
Configuration --> Point of Sale`, open the desired screen, click on :guilabel:`Edit`, and enable the
:guilabel:`IoT Box Devices` feature.

Now, select :guilabel:`IoT Box` in the drop-down menu and choose the screen in the
:guilabel:`Customer Display` option. Then, click :guilabel:`Save`.

    .. image:: screen/screen-pos-screen-config.png
       :align: center
       :alt: Connect the screen display to the Point of Sale app.

The screen is now available for :abbr:`PoS (Point of Sale)` sessions. A "screen" icon will appear
in the top bar to inform the connection status with the screen.

    .. image:: screen/screen-pos-icon.png
       :align: center
       :alt: The "screen" icon on the Point of Sale display shows the connection status with the screen.

The screen will automatically show the :abbr:`PoS (Point of Sale)` orders and update when changes are
performed on the order.

.. image:: screen/screen-pos-client-display.png
   :align: center
   :alt: An example of a PoS order on a screen display.

Display a website
~~~~~~~~~~~~~~~~~

Opening the screen form view at :menuselection:`IoT --> Devices --> (screen device)` allows the user
to choose a particular website URL to display on the screen with the :guilabel:`Screen URL` field.
