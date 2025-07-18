===================
External JSON-2 API
===================

.. versionadded:: 19.0

Odoo is usually extended internally via modules, but many of its features and all of its data are
also available from the outside for external analysis or integration with various tools. Part of
the :ref:`reference/orm/model` API is easily available over HTTP via the ``/json/2`` endpoint.


Examples
========

Request
-------

POST a json object at the ``/json/2/<model>/<method>`` URL. 

.. code:: http

   POST /json/2/res.partner/search_read HTTP/1.1
   Host: mycompany.odoo.com
   X-Odoo-Database: mycompany
   Authorization: Bearer 6578616d706c65206a736f6e20617069206b6579
   Content-Type: application/json; charset=utf-8
   User-Agent: mysoftware python-requests/2.25.1

   {
      "domain": [
         ["name", "ilike", "%deco%"],
         ["is_company", "=", true]
      ],
      "fields": ["name"],
   }

.. code:: http

   POST /json/2/res.partner/write HTTP/1.1
   Host: mycompany.odoo.com
   X-Odoo-Database: mycompany
   Authorization: Bearer 6578616d706c65206a736f6e20617069206b6579
   Content-Type: application/json; charset=utf-8
   User-Agent: mysoftware python-requests/2.25.1

   {
      "ids": [25],
      "context": {
         "lang": "en_US"
      },
      "vals_list": [
         {
            "name": "Deco Classic"
         }
      ]
   }

The body must be a json-object containing the arguments for the model's method. The two ``ids``
and ``context`` are special arguments and serve to craft a recordset on which the method is
executed.

The headers ``Host``, ``Authorization`` (bearer + api key) and ``Content-Type`` are required. The 
``X-Odoo-Database`` header is only necessary when multiple databases are hosted behind a same
``Host``. A ``User-Agent`` with the name of the software where the request comes from is
recommended.

The available models and methods depend on the list of modules that are installed in the database.
The exact list of what's available is accessible on the ``/doc`` page of every database.


Success response
----------------

A **200 OK** status with the method's return value serialized as json in the body.

.. code:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   [
      {"id": 25, "name": "Deco Addict"}
   ]


Error response
--------------

A **4xx**/**5xx** status with the error message serialized as a json string in the body.

.. code:: http

   HTTP/1.1 401 Unauthorized
   Date: Fri, 18 Jul 2025 08:33:35 GMT
   Content-Type: application/json; charset=utf-8

   "Invalid apikey"

The complete traceback is available in the server log, at the same date as the error response.


.. _User-Agent: https://httpwg.org/specs/rfc9110.html#field.user-agent


Authentication & Access Control
===============================

The JSON-2 API uses the access rights of the current user for all operations, and the user is
selected using an API key.

API Key
-------

Create a new API key for a user via :guilabel:`Preferences`, :guilabel:`Account Security`, and
:guilabel:`New API Key`.

.. have the three images appear next to each other
.. list-table::

   * - .. image:: external_api/preferences2.png
          :align: center

     - .. image:: external_api/account-security2.png
          :align: center

     - .. image:: external_api/new-api-key.png
          :align: center

A description and a duration are needed to create a new api key. The description makes it possible
to identify the key, and to determine later whether the key is still in use or should be removed.
It should be as clear and complete as possible. The duration determines the lifetime of the key
after which the the key becomes invalid. It is recommended to set a short duration (typically 1 day)
for interactive usage. It is not possible to create keys that last for more than 3 months, it means
that long lasting keys must be rotated at least once every 3 months.

The :guilabel:`Generate Key` creates a 20 bytes (160 bits) strong random key. Its value appears on
screen, this is the only time and place the key is visible on screen, it must be copied and stored
somewhere safe. If it ever gets compromized or lost, then it must be removed.

The `Secrets Management Cheat Sheet`_ is a document published by the OWASP foundation on how to
safely manage and store secrets such as API keys, with additionnal resources linked at the end.

.. _Secrets Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html#secrets-management-cheat-sheet
