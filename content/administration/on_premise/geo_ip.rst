======
Geo IP
======

.. note::
   This documentation only applies to On-premise databases.

Installation
============

#. Download both the GeoLite2 City and Country
   `databases <https://dev.maxmind.com/geoip/geoip2/geolite2/>`_. You should end up with two files
   called :file:`GeoLite2-City.mmdb` and :file:`GeoLite2-Country.mmdb`.

#. Move the files to the folder :file:`/usr/share/GeoIP/`.

   .. code-block:: bash

       mv ~/Downloads/GeoLite2-City.mmdb /usr/share/GeoIP/
       mv ~/Downloads/GeoLite2-Country.mmdb /usr/share/GeoIP/

#. Restart the server

.. note::
   If you don't want to locate the geoip database in :file:`/usr/share/GeoIP/`, use the
   :option:`--geoip-city-db <odoo-bin --geoip-city-db>` and
   :option:`--geoip-country-db <odoo-bin --geoip-country-db>` options of the Odoo command line
   interface. These options take the absolute path to the GeoIP database file and use it as the
   GeoIP database. For example:

   .. code-block:: bash

      ./odoo-bin --geoip-city-db= ~/Downloads/GeoLite2-City.mmdb

   .. seealso::
      - :doc:`CLI documentation </developer/reference/cli>`.

Test GeoIP geolocation in your Odoo website
===========================================

Edit a web page to include some geo-ip information such as the country name of the current
request IP address. To do so:

#. Go to your website. Open the web page that you want to test ``GeoIP``.
#. Choose :menuselection:`Customize --> HTML/CSS/JS Editor`.
#. Add the following piece of XML in the page :

   .. code-block:: xml

       <h1 class="text-center" t-esc="request.geoip.country.name or 'geoip failure'"/>

#. Save and refresh the page.

Geo-ip is working if you read your country name displayed in bold in the middle of the page.

In case you read "**geoip failure**" instead then the geolocalization failed. The common causes are:

#. The browsing IP address is the localhost (``127.0.0.1``) or a local area network one. If you
   don't know, you can access your website using mobile data.
#. You are using a reverse-proxy (apache, nginx) in front of Odoo but didn't start Odoo with the
   proxy-mode enabled. See :option:`proxy mode <odoo-bin --proxy-mode>`.
#. The GeoIP database is corrupt, missing or unaccessible. In such case a warning was logged in the
   server logs.
