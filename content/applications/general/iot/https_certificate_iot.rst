.. _iot/https_certificate_iot:

=======================
HTTPS certificate (IoT)
=======================

*Hypertext Transfer Protocol Secure* (HTTPS) is the secure and encrypted version of *Hypertext
Transfer Protocol* (HTTP), which is the primary protocol used for data communication between a web
browser and a website. It secures communications by using an encryption protocol known as *Transport
Layer Security* (TLS), previously referred to as *Secure Sockets Layer* (SSL). The security of
:abbr:`HTTPS (Hypertext Transfer Protocol Secure)` relies on :abbr:`TLS (Transport Layer Security)`
/:abbr:`SSL (Secure Sockets Layer)` certificates, which authenticate the provider and verify their
identity.

The use of :abbr:`HTTPS (Hypertext Transfer Protocol Secure)` is required to communicate with
certain network devices, particularly payment terminals. If the :abbr:`HTTPS (Hypertext Transfer
Protocol Secure)` certificate is not valid, some devices are unable to interact with the IoT system.

.. note::
   In this documentation and throughout Odoo, the term *HTTPS certificate*  refers to a valid
   :abbr:`SSL (Secure Sockets Layer)` certificate that allows an :abbr:`HTTPS (Hypertext Transfer
   Protocol Secure)` connection.

HTTPS certificate generation
============================

The :abbr:`HTTPS (Hypertext Transfer Protocol Secure)` certificate is generated automatically.

When the IoT system is (re-)started (e.g., after it is connected to the Odoo database), a request is
sent to `<https://www.odoo.com>`_, which returns the :abbr:`HTTPS (Hypertext Transfer Protocol
Secure)` certificate if the IoT system and database meet the eligibility criteria:

.. _iot/iot-eligibility:

- The database should be a **production** instance. The database instance should not be a copy, a
  duplicate, a staging, or a development environment.
- The Odoo subscription must be ongoing (:guilabel:`In Progress` status) and have an :guilabel:`IoT
  Box Subscription` line.

.. tip::
   If the subscription is linked to a `<https://www.odoo.com>`_ portal user, check the information
   on the portal subscription page:

    .. image:: https_certificate_iot/sub-example-in-progress.png
       :alt: Odoo.com portal subscriptions filtered by "in progress".

   If you have issues related to your subscription, contact the database's Account Manager or
   Partner for assistance.

When the certificate has been received, a new :abbr:`HTTPS (Hypertext Transfer Protocol Secure)`
URL, ending with `.odoo-iot.com` appears on the :ref:`IoT system's form <iot/connect/IoT-form>`.

XXX CHANGE

.. image:: https_certificate_iot/odoo-new-domain.png
   :alt: Odoo IoT app IoT box with .odoo-iot.com domain.

Navigating to this URL in a browser establishes a secure :abbr:`HTTPS (Hypertext Transfer Protocol
Secure)` connection and, on the IoT system's homepage, the :guilabel:`HTTPS certificate` section
displays the :guilabel:`OK` status. Click the :icon:`fa-caret-right` (:guilabel:`carret-right`) icon
to display additional information about the certificate.

XXX CHANGE

.. image:: https_certificate_iot/status-ok.png
   :alt: IoT box homepage with HTTPS certificate OK status.

HTTPS certificate generation issues and errors
==============================================

The HTTPS certificate does not generate
---------------------------------------

Potential causes include the following:

- No IoT box subscription is linked to your account.
- The IoT box subscription was added *after* connecting the IoT system to the database. In this
  case, refresh the IoT system's homepage or reboot/:ref:`restart <iot/windows_iot/restart>` to
  regenerate the HTTPS certificate.
- The firewall is preventing the :abbr:`HTTPS (Hypertext Transfer Protocol Secure)` certificate
  from generating correctly. In this case, deactivate the firewall until the certificate is
  successfully generated.

  .. note::
     Some devices, such routers with a built-in firewall, can prevent the :abbr:`HTTPS
     (Hypertext Transfer Protocol Secure)` certificate from generating.

The IOT system's homepage can be accessed using its IP address but not the `xxx.odoo-iot.com` URL
-------------------------------------------------------------------------------------------------

.. warning::
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
   - On some browsers, an error code mentioning the :abbr:`DNS (Domain Name System)` (such as
     `DNS_PROBE_FINISHED_NXDOMAIN`) is displayed.

Errors
------

If anything goes wrong during the process of the "HTTPS certificate" generation or reception, a
specific error code is displayed on the IoT system's homepage.

.. tip::
   Accessing the IoT system's homepage automatically checks for the presence of an HTTPS certificate
   and attempts to generate one if it is missing. If an error appears on the IoT system's homepage,
   refresh the page to see if the issue resolves.

`ERR_IOT_HTTPS_CHECK_NO_SERVER`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The server configuration is missing, meaning the Odoo instance is not :doc:`connected <connect>`
to the IoT system.

Check the server is configured.


`ERR_IOT_HTTPS_CHECK_CERT_READ_EXCEPTION`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An error occurred while attempting to read the existing HTTPS certificate.
Verify that the HTTPS certificate file is readable.

`ERR_IOT_HTTPS_LOAD_NO_CREDENTIAL`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The contract and/or database :abbr:`UUID (Universal Unique Identifier)` is missing.

Verify that both values are correctly configured. To update them, access the IoT system's homepage,
click the :icon:`fa-cogs` (:guilabel:`cogs`) button, then click :guilabel:`Credential`.

.. seealso::
   - :ref:`iot/iot-box/homepage`
   - :ref:`iot/windows-iot/homepage`

`ERR_IOT_HTTPS_LOAD_REQUEST_EXCEPTION`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An unexpected error occurred while the IoT system tried to reach https://www.odoo.com. This is
likely due to network-related issues, such as:

- The IoT system does not have internet access.
- Network restrictions (e.g., firewalls or VPNs) are preventing communication with
  https://www.odoo.com.

.. note::
   More information regarding the error that occurred can be found in the full request
   exception details, which can be accessed in the IoT system's logs: click :guilabel:`Download
   logs` on the :ref:`IoT system's form <iot/connect/IoT-form>`.

.. warning::
   Contact your system or network administrator to address the issue. Network-related problems are
   beyond the scope of Odoo support services.

`ERR_IOT_HTTPS_LOAD_REQUEST_STATUS`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The IoT system successfully reached `<https://www.odoo.com>`_ but received an unexpected
`HTTP response (status codes) <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>`_.

This error code includes the HTTP status. For example, `ERR_IOT_HTTPS_LOAD_REQUEST_STATUS 404` means
the server returned a "Page Not Found" response.

To solve this issue:

#. Open <https://www.odoo.com>`_ in a web browser to check if the website is temporarily down for
   maintenance.
#. | If `<https://www.odoo.com>`_ is down for maintenance, wait for it to resume.
   | If the website is operational, open a `support ticket <https://www.odoo.com/help>`_ and make
     sure to include the 3-digit HTTPS status code in the ticket.

`ERR_IOT_HTTPS_LOAD_REQUEST_NO_RESULT`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The IoT system successfully connected to `<https://www.odoo.com>`_, but the server refused to
provide the HTTPS certificate.

Check that the IoT system and database meet the :ref:`eligibility requirements
<iot/iot-eligibility>` for an HTTPS certificate.
