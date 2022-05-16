==========================================
Geo IP Installation (On-Premises Database)
==========================================

Installation
============

1. Download both the GeoLite2 City and Country
   `databases <https://dev.maxmind.com/geoip/geoip2/geolite2/>`_. You should end up with two files
   called ``GeoLite2-City.mmdb`` and ``GeoLite2-Country.mmdb``

2. Move the files to the folder ``/usr/share/GeoIP/``
    .. code-block:: bash

        mv ~/Downloads/GeoLite2-City.mmdb /usr/share/GeoIP/
        mv ~/Downloads/GeoLite2-Country.mmdb /usr/share/GeoIP/

3. Restart the server

.. note::
   If you can't/don't want to locate the geoip database in ``/usr/share/GeoIP/``, you can use the
   :option:`--geoip-city-db <odoo-bin --geoip-city-db>` and
   :option:`--geoip-country-db <odoo-bin --geoip-country-db>` options of the Odoo command line
   interface. These options takes the absolute path to the GeoIP database file and uses it as the
   GeoIP database. For example:

   .. code-block:: bash

      ./odoo-bin --geoip-city-db= ~/Downloads/GeoLite2-City.mmdb

   .. seealso::
      - :doc:`CLI documentation </developer/misc/other/cmdline>`.

How To Test GeoIP Geolocation In Your Odoo Website
==================================================

Edit a web page in order to include some geo-ip information such as the country name of the current
request ip address. In order to do so you can:

1. Go to your website. Open the web page that you want to test ``GeoIP``.
2. Choose :menuselection:`Customize --> HTML/CSS/JS Editor`.
3. Add the following piece of XML in the page :

.. code-block:: xml

    <h1 class="text-center" t-esc="request.geoip.country.name or 'geoip failure'"/>

4. Save and refresh the page.

Geo-ip is working if you read your country name displayed in bold in the middle of the page.

In case you read "**geoip failure**" instead then the geolocalization failed. The common causes are:

1. The browsing IP address is the localhost (``127.0.0.1``) or a local area network one. If you
   don't know, you can access your website using mobile data.
2. You are using a reverse-proxy (apache, nginx) in front of Odoo but didn't start Odoo with the
   proxy-mode enabled. See :option:`proxy mode <odoo-bin --proxy-mode>`.
3. The GeoIP database is corrupt, missing or unaccessible. In such case a warning was logged in the
   server logs.
