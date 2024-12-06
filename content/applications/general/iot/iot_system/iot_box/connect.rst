
====================================
Connect your IoT Box to Your Network
====================================

Ethernet
========

All IoT boxes are equipped with an Ethernet port.
To connect your IoT box to your network using an Ethernet cable, 
simply plug one end of the cable into the Ethernet port on the IoT box and the other end into a free port on your router 
(or to an ethernet switch connected to your router).

If the distance between your IoT box and your router is too far for an Ethernet cable, you can instead connect your IoT box to your network using Wi-Fi:

WiFi
====

Prerequisite
------------

* No ethernet cable is connected to the IoT box
* A computer/mobile/tablet with Wifi capabilities

Steps
-----

1. Power on the IoT Box by connecting its the power source cable
2. Wait for the IoT Box to boot up (around 2 minutes)

  .. note::
    
    Once booted, the IoT Box will start emitting a WiFi signal prefixed with `IoT-Box-XXXX` where `XXXX` is a random unique identifier
    
    .. image:: connect/connect-iot-wifi.png
       :align: center
       :alt: WiFi networks available on the computer.

3. With the computer, connect to the IoT Box WiFi. 
This should start your web browser and redirect you to the IoT Box homepage

  .. note::
    
    Depending on your operating system, the web browser page will not trigger.
    If it is the case, you can manually access it by navigating to `http://10.11.12.1` in your web browser

4. On the IoT Box homepage, next to the `Internet Status` section, click on the `Configure` button
5. After the scan of the available WiFi networks, select the network you want to connect to and enter the WiFi password then click on the `Next` button
6. The IoT Box will reboot and connect to the selected WiFi network
  
  .. note::
    
    Once connected to the WiFi network, the IoT Box will stop emit to emit its WiFi signal.
    The computer should automatically reconnect to the original WiFi network, if not, you can manually reconnect to it
