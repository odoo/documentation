===========================================
Geo IP installation (on-premises database)
===========================================

Installation
============

.. warning:: Please note that the installation depends on your computer operating system and distribution. We will assume here that a Linux operating system is used.

#. Install `geoip2 <https://pypi.org/project/geoip2/>`__ Python library
    .. code-block:: bash

      pip install geoip2

#. Download the `GeoLite2 City database <https://dev.maxmind.com/geoip/geoip2/geolite2/>`_. You should end up with a file called ``GeoLite2-City.mmdb``
#. Move the file to the folder ``/usr/share/GeoIP/``
    .. code-block:: bash

        mv ~/Downloads/GeoLite2-City.mmdb /usr/share/GeoIP/

#. Restart the server

.. note:: If you can't/don't want to locate the geoip database in ``/usr/share/GeoIP/``, you can use the ``--geoip-db`` option of the Odoo command line interface.
    This option takes the absolute path to the GeoIP database file and will use it as the GeoIP database.
    For example:

    .. code-block:: bash

        ./odoo-bin --geoip-db= ~/Downloads/GeoLite2-City.mmdb

    .. seealso::
        - `CLI documentation <https://www.odoo.com/documentation/13.0/reference/cmdline.html>`_.

.. warning:: ``GeoIP`` Python library can also be used. However this version is discontinued since January 2019. See `GeoLite Legacy databases are now discontinued <https://support.maxmind.com/geolite-legacy-discontinuation-notice/>`_

How to test GeoIP geolocation in your Odoo website?
===================================================
1. Go into your website. Open the web page on which you want to test ``GeoIP``.
2. Choose :menuselection:`Customize --> HTML/CSS/JS Editor`.
3. Add the following piece of XML in the page :

.. code-block:: xml

    <h1 class="text-center" t-esc="request.session.get('geoip')"/>

You should end up with a dictionary indicating the location of the ip address.

.. image:: media/on-premise_geo-ip-installation01.png
    :align: center

.. note:: If the curly braces are empty ``{}``, it can be for any of the following reason :

   - The browsing IP address is the localhost (``127.0.0.1``) or a local area network one (``192.168.*.*``)
   - If a reversed proxy is used, make sure to configure it correctly. See `--proxy-mode <https://www.odoo.com/documentation/13.0/reference/cmdline.html#cmdoption-odoo-bin-proxy-mode>`__
   - ``geoip2`` is not installed or the GeoIP database file wasn't found
   - The GeoIP database was unable to resolve the given IP address


    
    

