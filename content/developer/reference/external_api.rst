===================
External JSON-2 API
===================

.. versionadded:: 19.0

Odoo is usually extended internally via modules, but many of its features and all of its data are
also available externally for analysis or integration with various other softwares. Part of the
:ref:`reference/orm/model` API is easily available over HTTP via the ``/json/2`` endpoint.

.. note::

   The actual models, fields and methods available are specific to every database and can be
   consulted on their ``/doc`` page.

.. note::

   Access to data via the external API is only available on *Custom* Odoo pricing plans. Access to
   the external API is not available on *One App Free* or *Standard* plans. For more information
   visit the `Odoo pricing page <https://www.odoo.com/pricing-plan>`_ or reach out to your Customer
   Success Manager.

API
===

Request
-------

Post a JSON object at the ``/json/2/<model>/<method>`` URL.

**HTTP Headers**

:Host: Required, the hostname of the server.
:Autorization: Required, ``bearer`` followed by an API key.
:Content-Type: Required, ``application/json``, a charset is recommended.
:X-Odoo-Dataase: Optional, the name of the database on which to connect.
:User-Agent: Recommended, the name of your software.

**URL Path**

:model: Required, the technical model name.
:method: Required, the method to execute.

**Body JSON object**

:ids: An array of record ids on which to execute the method.
:context: Optional, an object of additional values. e.g. ``{"lang": "en_US"}``.
:*param*: As many time as needed, a value for the method's *param* parameter.

The ``ids`` entry must be empty when calling a ``@api.model``-decorated method.

**Example**

.. code:: http

    POST /json/2/res.partner/search_read HTTP/1.1
    Host: mycompany.example.com
    X-Odoo-Database: mycompany
    Authorization: bearer 6578616d706c65206a736f6e20617069206b6579
    Content-Type: application/json; charset=utf-8
    User-Agent: mysoftware python-requests/2.25.1

    {
        "context": {
            "lang": "en_US"
        },
        "domain": [
            ["name", "ilike", "%deco%"],
            ["is_company", "=", true]
        ],
        "fields": ["name"]
    }

Response
--------

In case of **success**, a **200** status with the JSON-serialized return value of the called method
in the body.

.. code:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   [
      {"id": 25, "name": "Deco Addict"}
   ]

In case of **error**, a **4xx**/**5xx** status with a JSON-serialized error object in the body.

.. tabs::

   .. code-tab:: http

      HTTP/1.1 401 Unauthorized
      Content-Type: application/json; charset=utf-8

      {
        "name": "werkzeug.exceptions.Unauthorized",
        "message": "Invalid apikey",
        "arguments": ["Invalid apikey", 401],
        "context": {},
        "debug": "Traceback (most recent call last):\n  File \"/opt/Odoo/community/odoo/http.py\", line 2212, in _transactioning\n    return service_model.retrying(func, env=self.env)\n  File \"/opt/Odoo/community/odoo/service/model.py\", line 176, in retrying\n    result = func()\n  File \"/opt/Odoo/community/odoo/http.py\", line 2177, in _serve_ir_http\n    self.registry['ir.http']._authenticate(rule.endpoint)\n  File \"/opt/Odoo/community/odoo/addons/base/models/ir_http.py\", line 274, in _authenticate\n    cls._authenticate_explicit(auth)\n  File \"/opt/Odoo/community/odoo/addons/base/models/ir_http.py\", line 283, in _authenticate_explicit\n    getattr(cls, f'_auth_method_{auth}')()\n  File \"/opt/Odoo/community/odoo/addons/base/models/ir_http.py\", line 240, in _auth_method_bearer\n    raise werkzeug.exceptions.Unauthorized(\nwerkzeug.exceptions.Unauthorized: 401 Unauthorized: Invalid apikey\n"
      }

   .. tab:: Debug

      .. code::

         Traceback (most recent call last):
           File "/opt/Odoo/community/odoo/http.py", line 2212, in _transactioning
             return service_model.retrying(func, env=self.env)
           File "/opt/Odoo/community/odoo/service/model.py", line 176, in retrying
             result = func()
           File "/opt/Odoo/community/odoo/http.py", line 2177, in _serve_ir_http
             self.registry['ir.http']._authenticate(rule.endpoint)
           File "/opt/Odoo/community/odoo/addons/base/models/ir_http.py", line 274, in _authenticate
             cls._authenticate_explicit(auth)
           File "/opt/Odoo/community/odoo/addons/base/models/ir_http.py", line 283, in _authenticate_explicit
             getattr(cls, f'_auth_method_{auth}')()
           File "/opt/Odoo/community/odoo/addons/base/models/ir_http.py", line 240, in _auth_method_bearer
             raise werkzeug.exceptions.Unauthorized(
         werkzeug.exceptions.Unauthorized: 401 Unauthorized: Invalid apikey

:name: The fully qualified name of the Python exception that occured.
:message: The exception message, usually the same as `arguments[0]`.
:arguments: All the exception arguments.
:context: The context used by the request.
:debug: The exception traceback, for debugging purpose.

Configuration
=============

API Key
-------

An API key must be set in the ``Authorization`` request header, as a bearer token.

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
The duration determines the lifetime of the key after which the key becomes invalid. It is
recommended to set a short duration (typically 1 day) for interactive usage. It is not possible to
create keys that last for more than 3 months, it means that long lasting keys must be rotated at
least once every 3 months.

The :guilabel:`Generate Key` button creates a strong 160-bits random key. Its value appears on
screen, this is the only time and place the key is visible on screen. It must be copied, kept secret
and stored somewhere secure. If it ever gets compromised or lost, then it must be removed.

Please refer to OWASP's `Secrets Management Cheat Sheet`_ for further guidance on the management of
API keys.

.. _Secrets Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html#secrets-management-cheat-sheet


Access Rights
-------------

The JSON-2 API uses the standard :ref:`security <reference/security>` model of Odoo. All operations
are validated against the access rights, record rules and field accesses of the user.

For **interactive usage**, such as discovering the API or running one-time scripts, it is fine to
use a **personal account**.

For **extended automated usage**, such as an integration with another software, it is recommended to
create and use **dedicated bot users**.

Using dedicated bot users has several benefits:

* The minimum required permissions can be granted to the bot, limiting the impact may the API key
  gets compromised;
* The password can be set empty to disable login/password authentication, limiting the likelihood
  the account gets compromised;
* The :ref:`reference/fields/automatic/log_access` use the bot account. No user is impersonalized.


Database
--------

Depending on the deployment, the ``Host`` and/or ``X-Odoo-Database`` request headers might be
required. The ``Host`` header is required by HTTP/1.1 and is needed on servers where Odoo is
installed next to other web applications, so a web-server/reverse-proxy is able to route the request
to the Odoo server. The ``X-Odoo-Database`` header is required when a single Odoo server hosts
multiple databases, and that :ref:`dbfilter` wasn't configured to use the ``Host`` header.

Most HTTP client libraries automatically set the ``Host`` header using the connection URL.


Transaction
===========

.. note::

   Under construction


Code Example
============

The following examples showcase how to execute two of the :ref:`reference/orm/models/crud` on a fake
database ``mycompany`` hosted on a fake website ``https://mycompany.example.com``. Its comprehensive
documentation would be available at https://mycompany.example.com/doc

.. tabs::

   .. code-tab:: python

      import requests

      BASE_URL = "https://mycompany.example.com/json/2"
      API_KEY = ...  # get it from a secure location
      headers = {
          "Authorization": f"bearer {API_KEY}",
          "X-Odoo-Database": "mycompany",
          "User-Agent": "mysoftware " + requests.utils.default_user_agent(),
      }

      res_search = requests.post(
          f"{BASE_URL}/res.partner/search",
          headers=headers,
          json={
              "context": {"lang": "en_US"},
              "domain": [
                  ("name", "ilike", "%deco%"),
                  ("is_company", "=", True),
              ],
          },
      )
      res_search.raise_for_status()
      ids = res_search.json()

      res_read = requests.post(
          f"{BASE_URL}/res.partner/read",
          headers=headers,
          json={
              "ids": ids,
              "context": {"lang": "en_US"},
              "fields": ["name"],
          }
      )
      res_read.raise_for_status()
      names = res_read.json()
      print(names)


   .. code-tab:: javascript

      (async () => {
          const BASE_URL = "https://mycompany.example.com/json/2";
          const API_KEY = ;  // get it from a secure location
          const headers = {
              "Content-Type": "application/json",
              "Authorization": "bearer " + API_KEY,
              "X-Odoo-Database": DATABASE,
          }

          const reqSearch = {
              method: "POST",
              headers: headers,
              body: {
                  context: {lang: "en_US"},
                  domain: [
                      ["name", "ilike", "%deco%"],
                      ["is_company", "=", true],
                  ],
              },
          };
          const resSearch = await fetch(BASE_URL + "/res.partner/search_read", reqSearch);
          if (!response.ok) throw new Error(resSearch.json());
          const ids = await resSearch.json();

          const reqRead = {
              method: "POST",
              headers: headers,
              body: {
                  ids: ids,
                  context: {lang: "en_US"},
                  fields: ["name"],
              },
          };
          const resRead = await fetch(BASE_URL + "/res.partner/search_read", reqRead);
          if (!response.ok) throw new Error(resRead.json());
          const names = await resRead.json();
          console.log(names);
      })();

   .. code-tab:: bash

      set -eu

      DATABASE=mycompany
      BASE_URL=https://$DATABASE.odoo.com/json/2
      API_KEY=

      ids=$(curl $BASE_URL/res.partner/search \
          -X POST \
          --oauth2-bearer $API_KEY \
          -H "X-Odoo-Database: $DATABASE" \
          -H "Content-Type: application/json" \
          -d '{"context": {"lang": "en_US"}, "domain": [["name", "ilike", "%deco%"], ["is_company", "=", true]]}' \
          --silent \
          --fail
      )
      curl $BASE_URL/res.partner/read \
          -X POST \
          --oauth2-bearer $API_KEY \
          -H "X-Odoo-Database: $DATABASE" \
          -H "Content-Type: application/json" \
          -d "{\"ids\": $ids, \"context\": {\"lang\": \"en_US\"}, \"fields\": [\"name\"]}" \
          --silent \
          --fail-with-body


The above example would be equivalent to running::

   Model = self.env["res.partner"].with_context({"lang": "en_US"})
   records = Model.search([("name", "ilike", "%deco%"), ("is_company", "=", True)])
   return json.dumps(records.ids)

Then in a new transaction::

   records = self.env["res.partner"].with_context({"lang": "en_US"}).browse(ids)
   names = records.read(["name"])
   return json.dumps(names)


Migrating from XML-RPC / JSON-RPC
=================================

.. note::

   Under construction
