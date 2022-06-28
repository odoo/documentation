==========================================
Geo IP Installation (On-Premises Database)
==========================================

Installation
============

.. warning::
   Please note that the installation depends on your computer's operating system and distribution.
   We will assume that a Linux operating system is being used.

#. Install `geoip2 <https://pypi.org/project/geoip2/>`__ Python library
    .. code-block:: bash

      pip install geoip2

#. Download the `GeoLite2 City database <https://dev.maxmind.com/geoip/geoip2/geolite2/>`_. You
   should end up with a file called ``GeoLite2-City.mmdb``
#. Move the file to the folder ``/usr/share/GeoIP/``
    .. code-block:: bash

        mv ~/Downloads/GeoLite2-City.mmdb /usr/share/GeoIP/

#. Restart the server

.. note::
   If you can't/don't want to locate the geoip database in ``/usr/share/GeoIP/``, you can use the
   ``--geoip-db`` option of the Odoo command line interface. This option takes the absolute path to
   the GeoIP database file and uses it as the GeoIP database. For example:

   .. code-block:: bash

      ./odoo-bin --geoip-db= ~/Downloads/GeoLite2-City.mmdb

   .. seealso::
      - :doc:`CLI documentation </developer/cli>`.

.. warning::
   ``GeoIP`` Python library can also be used. However this version is discontinued since January
   1.    See `GeoLite Legacy databases are now discontinued
   <https://support.maxmind.com/geolite-legacy-discontinuation-notice/>`_

How To Test GeoIP Geolocation In Your Odoo Website
==================================================
1. Go to your website. Open the web page that you want to test ``GeoIP``.
2. Choose :menuselection:`Customize --> HTML/CSS/JS Editor`.
3. Add the following piece of XML in the page :

.. code-block:: xml

    <h1 class="text-center" t-esc="request.session.get('geoip')"/>

You should end up with a dictionary indicating the location of the IP address.

.. image:: on-premise_geo-ip-installation/on-premise_geo-ip-installation01.png
    :align: center

.. note::
   If the curly braces are empty ``{}``, it can be for any of the following reasons :

   - The browsing IP address is the localhost (``127.0.0.1``) or a local area network one (``192.168.*.*``)
   - If a reversed proxy is used, make sure to configure it correctly. See :option:`proxy mode <odoo-bin --proxy-mode>`
   - ``geoip2`` is not installed or the GeoIP database file wasn't found
   - The GeoIP database was unable to resolve the given IP address
