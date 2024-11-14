.. _iot/https_certificate_iot:

=======================
HTTPS certificate (IoT)
=======================

*Hypertext Transfer Protocol Secure* (HTTPS) is the secure and encrypted version of *Hypertext
Transfer Protocol* (HTTP), which is the primary protocol used for data communication between a web
browser and a website. It secures communications by using an encryption protocol known as *Transport
Layer Security* (TLS), previously called *Secure Sockets Layer* (SSL). The security of
:abbr:`HTTPS (Hypertext Transfer Protocol Secure)` relies on :abbr:`TLS (Transport Layer Security)`
/:abbr:`SSL (Secure Sockets Layer)` certificates, which authenticate the provider and verify their
identity.

The use of HTTPS is required to communicate with certain network devices, particularly payment
terminals. If the HTTPS certificate is not valid, some devices cannot interact with the IoT
system.

.. note::
   In this documentation and throughout Odoo, the term *HTTPS certificate*  refers to a valid
   SSL certificate that allows an HTTPS connection.

.. _iot/https_certificate_iot/generation:

HTTPS certificate generation
============================

The HTTPS certificate is generated automatically. When the IoT system is (re-)started (e.g., after
it is connected to the Odoo database), a request is sent to `<https://www.odoo.com>`_, which returns
the HTTPS certificate if the IoT system and database meet the eligibility criteria:

.. _iot/https_certificate_iot/iot-eligibility:

- The database must be a **production** instance. The database instance should not be a copy, a
  duplicate, a staging, or a development environment.
- The Odoo subscription must be ongoing (:guilabel:`In Progress` status) and have an :ref:`IoT
  box subscription <iot/iot/iot-subscription>` line.

When the certificate has been received:

- The IoT system's homepage address is updated to a new HTTPS URL ending with `.odoo-iot.com`. Click
  the URL to establish a secure HTTPS connection.

  .. image:: https_certificate_iot/iot-new-domain.png
     :alt: Odoo IoT app IoT box with .odoo-iot.com domain.

- The :guilabel:`HTTPS certificate` banner displays the certificate's validity period. To view this
  information, click the :icon:`fa-cogs` (:guilabel:`cogs`) button on the IoT system's homepage.

  .. image:: https_certificate_iot/https-valid.png
     :alt: IoT box homepage with HTTPS certificate validity date.

HTTPS certificate generation issues and errors
==============================================

The HTTPS certificate does not generate
---------------------------------------

Potential causes include the following:

- No :ref:`IoT box subscription <iot/iot/iot-subscription>` is linked to your account.
- The :ref:`IoT box subscription <iot/iot/iot-subscription>` was added *after* connecting the IoT
  system to the database. In this case, refresh the IoT system's homepage or reboot/:ref:`restart
  <iot/windows_iot/restart>` the IoT system to regenerate the HTTPS certificate.
- The firewall is preventing the HTTPS certificate from generating correctly. In this case,
  deactivate the firewall until the certificate is successfully generated.

  .. note::
     Some devices, such as routers with a built-in firewall, can prevent the HTTPS certificate from
     generating.

The IoT system's homepage can be accessed using its IP address but not the `xxx.odoo-iot.com` URL
-------------------------------------------------------------------------------------------------

Contact your system or network administrator to address the issue. Network-related problems are
beyond the scope of Odoo support services.

- If the router allows manual :abbr:`DNS (Domain Name System)` configuration, update the settings to
  use `Google DNS <https://developers.google.com/speed/public-dns>`_.
- If the router does not support this, you need to update the DNS settings directly on each device
  that interacts with the IoT system to use `Google DNS
  <https://developers.google.com/speed/public-dns>`_. Instructions for configuring DNS on individual
  devices can be found on the respective manufacturer's website.

.. note::
   - Some IoT devices, such as payment terminals, likely do not require DNS changes, as they are
     typically pre-configured with custom DNS settings.
   - On some browsers, an error code mentioning the DNS (such as `DNS_PROBE_FINISHED_NXDOMAIN`) is
     displayed.

Errors
------

A specific error code is displayed on the IoT system's homepage if any issues occur during the
generation or reception of the HTTPS certificate.

.. tip::
   When you access the IoT system's homepage, it automatically checks for an HTTPS certificate and
   attempts to generate one if it is missing. If an error appears, refresh the page to see if the
   issue is resolved.

`ERR_IOT_HTTPS_CHECK_NO_SERVER`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The server configuration is missing, i.e., the Odoo instance is not :doc:`connected <../connect>` to
the IoT system.

`ERR_IOT_HTTPS_CHECK_CERT_READ_EXCEPTION`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An error occurred while attempting to read the existing HTTPS certificate.
Verify that the HTTPS certificate file is readable.

`ERR_IOT_HTTPS_LOAD_NO_CREDENTIAL`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The contract and/or database :abbr:`UUID (Universal Unique Identifier)` is missing form the IoT.

Verify that both values are correctly configured. To update them, :ref:`access the IoT box's
<iot/iot-box/homepage>` or :ref:`Windows virtual IoT's homepage <iot/windows-iot/homepage>`,
click the :icon:`fa-cogs` (:guilabel:`cogs`) button, then click :guilabel:`Credential`.

`ERR_IOT_HTTPS_LOAD_REQUEST_EXCEPTION`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An unexpected error occurred while the IoT system tried to reach `<https://www.odoo.com>`_. This is
likely due to network-related issues, such as:

- The IoT system does not have Internet access.
- Network restrictions (e.g., firewalls or VPNs) are preventing communication with
  https://www.odoo.com.

.. note::
   - To access the full request exception details with information regarding the error, :ref:`enable
     the developer mode <developer-mode>`, click the IoT system's card in the IoT app, and click
     :guilabel:`Download logs` on the :ref:`IoT system's form <iot/connect/IoT-form>`.
     To define the log levels recorded in the IoT system's log file, :ref:`access the IoT box's
     <iot/windows-iot/homepage>` or :ref:`Windows virtual IoT's <iot/iot-box/homepage>` homepage,
     click the :icon:`fa-cogs` (:guilabel:`cogs`) button, then :guilabel:`Log level` at the
     bottom of the page.
   - To address network-related issues, contact your system or network administrator; these issues
     are beyond the scope of Odoo support services.

`ERR_IOT_HTTPS_LOAD_REQUEST_STATUS`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The IoT system successfully reached `<https://www.odoo.com>`_ but received an unexpected
`HTTP response (status codes) <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>`_.

This error code includes the HTTP status. For example, `ERR_IOT_HTTPS_LOAD_REQUEST_STATUS 404` means
the server returned a "Page Not Found" response.

To solve this issue:

#. Open `<https://www.odoo.com>`_ in a web browser to check if the website is temporarily down for
   maintenance.
#. | If `<https://www.odoo.com>`_ is down for maintenance, wait for it to resume.
   | If the website is operational, open a `support ticket <https://www.odoo.com/help>`_ and make
     sure to include the 3-digit HTTPS status code in the ticket.

`ERR_IOT_HTTPS_LOAD_REQUEST_NO_RESULT`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The IoT system successfully connected to `<https://www.odoo.com>`_, but the server refused to
provide the HTTPS certificate.

Check that the IoT system and database meet the :ref:`eligibility requirements
<iot/https_certificate_iot/iot-eligibility>` for an HTTPS certificate.
