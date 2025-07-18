===================
External JSON-2 API
===================

Odoo is usually extended internally via modules, but many of its features and all of its data are
also available from the outside for external analysis or integration with various tools. Part of
the :ref:`reference/orm/model` API is easily available over HTTP via the ``/json/2`` endpoint.


TL;DR
=====

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
      "ids": [5],
      "context": {
         "lang": "en_US"
      },
      "vals_list": [
         {
            "name": "Deco Classic"
         }
      ]
   }

The JSON must be a json-object containing the arguments for the model's method. The two ``ids``
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

The function's return value is serialized as json in the body.

.. code:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   [
      {"id": 5, "name": "Deco Addict"}
   ]


Error response
--------------

The errors use a sensible http status code. The error message is serialized as a json string in the
body. 

.. code:: http

   HTTP/1.1 401 Unauthorized
   Date: Fri, 18 Jul 2025 08:33:35 GMT
   Content-Type: application/json; charset=utf-8

   "Invalid apikey"

The complete traceback is available in the server log, at the same date as the error response.


.. _User-Agent: https://httpwg.org/specs/rfc9110.html#field.user-agent
