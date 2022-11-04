============
External API
============

Odoo is usually extended internally via modules, but many of its features and all of its data are
also available from the outside for external analysis or integration with various tools. Part of
the :ref:`reference/orm/model` API is easily available over XML-RPC_ or JSON-RPC_ and accessible
from a variety of languages.

.. spoiler:: I don't want to write XML or JSON

   Don't let the name fool you, you are **not** going to write XML or JSON. Many languages come with
   a XML-RPC or JSON-RPC library that let you call the remote Odoo function like you would call a
   function in your language, serializing the arguments and return value in XML or JSON on the fly.

.. spoiler:: Is there a REST API instead?

   The Odoo API is not limited to a few CRUD operations that would nicely map to the few HTTP GET,
   POST, PUT and DELETE methods. Operations such as "confirm a quotation" neither have a proper HTTP
   verb nor a proper HTTP status code for errors like "you cannot confirm a cancelled quotation".

Connection
==========

Configuration
-------------

If you already have an Odoo server installed, you can just use its parameters.

.. important::

   For Odoo Online instances (<domain>.odoo.com), users are created without a *local* password (as a
   person you are logged in via the Odoo Online authentication system, not by the instance itself).
   To use XML-RPC on Odoo Online instances, you will need to set a password on the user account you
   want to use:

   * Log in your instance with an administrator account.
   * Go to :menuselection:`Settings --> Users & Companies --> Users`.
   * Click on the user you want to use for XML-RPC access.
   * Click on :guilabel:`Action` and select :guilabel:`Change Password`.
   * Set a :guilabel:`New Password` value then click :guilabel:`Change Password`.

   The *server url* is the instance's domain (e.g. *https://mycompany.odoo.com*), the *database name*
   is the name of the instance (e.g. *mycompany*). The *username* is the configured user's login as
   shown by the *Change Password* screen.

.. tabs::

   .. group-tab:: Python XML-RPC

      .. code:: python

         scheme = 'https'
         domain = <insert server URL>  # 'mycompany.odoo.com'
         database = <insert database name>  # 'mycompany'
         username = 'admin'
         password = <insert password for your admin user (default: admin)>

   .. group-tab:: Python JSON-RPC

      .. code:: python

         scheme = 'https'
         domain = <insert server URL>  # 'mycompany.odoo.com'
         database = <insert database name>  # 'mycompany'
         username = 'admin'
         password = <insert password for your admin user (default: admin)>

   .. group-tab:: Node.js

      .. code:: javascript

         const scheme = 'https'
         const domain = <insert server URL>  // 'mycompany.odoo.com'
         const database = <insert database name>  // 'mycompany'
         const username = 'admin'
         const password = <insert password for your admin user (default: admin)>

   .. group-tab:: Ruby

      .. code:: ruby

         scheme = "https"
         domain = <insert server URL>  # "mycompany.odoo.com"
         database = <insert database name>  # "mycompany"
         username = "admin"
         password = <insert password for your admin user (default: admin)>

   .. group-tab:: PHP

      .. code:: php

         $scheme = "https";
         $domain = <insert server URL>;  // "mycompany.odoo.com"
         $database = <insert database name>;  // "mycompany"
         $username = "admin";
         $password = <insert password for your admin user (default: admin)>;

   .. group-tab:: Java

      .. code:: java

         final String scheme = "https"
               domain = <insert server URL>,  // "mycompany.odoo.com"
               database = <insert database name>,  // "mycompany"
               username = "admin",
               password = <insert password for your admin user (default: admin)>;

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
         :language: java
         :dedent: 8
         :start-after: <a id=setup>
         :end-before: </a>

   .. group-tab:: cURL (sh)

      .. code:: bash

         scheme='https'
         domain=<insert server URL>  # 'mycompany.odoo.com'
         $database=<insert database name>  # 'mycompany'
         $username='admin'
         $password=<insert password for your admin user (default: admin)>



API Keys
~~~~~~~~

.. versionadded:: 14.0

Odoo has support for **api keys** and (depending on modules or settings) may **require** these keys
to perform webservice operations.

The way to use API Keys in your scripts is to simply replace your **password** by the key. The login
remains in-use. You should store the API Key as carefully as the password as they essentially
provide the same access to your user account (although they can not be used to log-in via the
interface).

In order to add a key to your account, simply go to your :guilabel:`Preferences` (or :guilabel:
`My Profile`):

.. image:: external_api/preferences.png
   :align: center

then open the :guilabel:`Account Security` tab, and click :guilabel:`New API Key`:

.. image:: external_api/account-security.png
   :align: center

Input a description for the key, **this description should be as clear and complete as possible**:
it is the only way you will have to identify your keys later and know whether you should remove them
or keep them around.

Click :guilabel:`Generate Key`, then copy the key provided. **Store this key carefully**: it is
equivalent to your password, and just like your password the system will not be able to retrieve or
show the key again later on. If you lose this key, you will have to create a new one (and probably
delete the one you lost).

Once you have keys configured on your account, they will appear above the :guilabel:`New API Key`
button, and you will be able to delete them:

.. image:: external_api/delete-key.png
   :align: center

**A deleted API key can not be undeleted or re-set**. You will have to generate a new key and update
all the places where you used the old one.

Libraries
~~~~~~~~~

Many languages provide XML-RPC and/or JSON-RPC libraries. For the examples of this tutorial we are
using:


.. tabs::

   .. group-tab:: Python XML-RPC

      `xmlrpc.client <Python-xmlrpc-client_>`_, a rich XML-RPC client from the Python standard
      library, with the ``allow_none`` option set.

   .. group-tab:: Python JSON-RPC

      `jsonrpc_client <Odoo-jsonrpc-client_>`_, a rich JSON-RPC client from the Odoo tools built on
      top of `requests <Python-requests_>`_. You can vendor it in your own project.

   .. group-tab:: Node.js

      `jayson <JS-jayson>`_, a JSON-RPC client available on npm.

   .. group-tab:: Ruby

      `xmlrpc/client <Ruby-xmlrpc-client_>`_, a rich XML-RPC client from the ``xmlrpc`` gem, with
      the ``ENABLE_NIL_PARSER`` configuration set.

   .. group-tab:: PHP

      `Ripcord <PHP-Ripcord_>`_, a rich XML-RPC client built on top of the `xmlrpc <PHP-xmlrpc_>`_
      and `openssl <PHP-openssl_>`_ extensions from the standard library. Make sure both extensions
      are enabled.

      .. warning::

         Starting with PHP8, xmlrpc is no more compiled by default.

   .. group-tab:: Java

      `Apache XML-RPC <Apache-xmlrpc_>`_, a basic XML-RPC client from the Apache Web Services
      project, extended to support the ``<nil/>`` tag.

      .. important::

         Odoo solely understands ``<nil/>`` as ``None`` value but Apache XML-RPC serializes ``null``
         as ``<ex:nil/>`` in XML. Please `reconfigure <Apache-xmlrpc-nil_>`_ the apache library so
         that it prefers ``NullSerializer.NIL_TAG`` over ``NullSerializer.EX_NIL_TAG``.

   .. group-tab:: cURL (sh)

      `Bash <Bash_>`_ with `cURL <cURL_>`_ for requesting the server over JSON-RPC and `jq <jq_>`_
      for parsing the response.

Test database
~~~~~~~~~~~~~

To make exploration simpler, you can also ask https://demo.odoo.com for a test database:

.. tabs::

   .. code-tab:: python

      info = xmlrpc.client.ServerProxy('https://demo.odoo.com/start').start()
      url, database, username, password = \
         info['host'][8:], info['database'], info['user'], info['password']

   .. code-tab:: javascript

      const client = jayson.Client.https('https://demo.odoo.com/start');
      const {host, database, username, password} = await client.request('start');
      const url = host.slice(8);

   .. code-tab:: ruby

      info = XMLRPC::Client.new2('https://demo.odoo.com/start').call('start')
      url, database, username, password = \
         info['host'][8..-1], info['database'], info['user'], info['password']

   .. code-tab:: php

      $info = ripcord::client('https://demo.odoo.com/start')->start();
      list($url, $database, $username, $password) =
        [substr($info['host'], 8), $info['database'], $info['user'], $info['password']];

   .. code-tab:: java

      final XmlRpcClient start = new XmlRpcClient() {{
          setConfig(new XmlRpcClientConfigImpl() {{
              setServerURL(new URL("https://demo.odoo.com/start"));
          }});
      }};
      final Map<String, String> info =
          (Map<String, String>) start.execute("start", emptyList());

      final String url = info.get("host").substring(8),
              database = info.get("database"),
              username = info.get("user"),
              password = info.get("password");

Logging in
----------

Odoo requires users of the API to be authenticated before they can query most data.

The ``RPC2`` endpoint provides meta-calls which don't require authentication, such as the database
management or fetching the server version. To verify if the connection information is correct before
trying to authenticate, the simplest call is to ask for the server's version.

.. tabs::

   .. group-tab:: Python XML-RPC

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
         :language: python
         :dedent: 8
         :start-after: <a id=xmlcommon>
         :end-before: </a>

   .. group-tab:: Python JSON-RPC

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
         :language: python
         :dedent: 8
         :start-after: <a id=jsoncommon>
         :end-before: </a>

   .. group-tab:: Node.js

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
         :language: javascript
         :dedent: 4
         :start-after: <a id=common>
         :end-before: </a>

   .. group-tab:: Ruby

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
         :language: ruby
         :start-after: <a id=common>
         :end-before: </a>

   .. group-tab:: PHP

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
         :language: php
         :start-after: <a id=common>
         :end-before: </a>

   .. group-tab:: Java

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
         :language: java
         :dedent: 8
         :start-after: <a id=common>
         :end-before: </a>

   .. group-tab:: cURL (sh)

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
         :language: bash
         :start-after: <a id=common>
         :end-before: </a>

The ``RPC2`` endpoints also provides access to the many models of a database, this time it does
require valid authentication. To verify if the database connection information is correct you can
perform the following "no-operation" call.

.. tabs::

   .. group-tab:: Python XML-RPC

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
         :language: python
         :dedent: 8
         :start-after: <a id=xmlmodels>
         :end-before: </a>

   .. group-tab:: Python JSON-RPC

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
         :language: python
         :dedent: 8
         :start-after: <a id=jsonmodels>
         :end-before: </a>

   .. group-tab:: Node.js

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
         :language: javascript
         :dedent: 4
         :start-after: <a id=models>
         :end-before: </a>

   .. group-tab:: Ruby

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
         :language: ruby
         :start-after: <a id=models>
         :end-before: </a>

   .. group-tab:: PHP

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
         :language: php
         :start-after: <a id=models>
         :end-before: </a>

   .. group-tab:: Java

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
         :language: java
         :dedent: 8
         :start-after: <a id=models>
         :end-before: </a>

   .. group-tab:: cURL (sh)

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
         :language: bash
         :start-after: <a id=models>
         :end-before: </a>

Result:

.. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
   :language: json
   :start-after: <a id=common>
   :end-before: </a>

.. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
   :language: json
   :start-after: <a id=models>
   :end-before: </a>

.. _api/external_api/calling_methods:

Calling methods
===============

When connected to a specific database, the procedure name is the concatenation of the model name,
``.`` and the method name. The parameters are:

* a mandatory subject, which provides both the records and context to use for the call (if any) and
  can be one of:

   * a falsy value (in the Python sense so an empty collection, the boolean ``false``, a ``null``,
     the integer ``0``, ...)
   * an array (list) of record ids
   * a struct (mapping/dict) with the keys ids (an array/list of record ids) and context (call's
     context)

* an optional array of positional parameters
* an optional struct of keyword parameters

The result of the call is whatever the method returned, with a few conversions:

* returned recordsets are converted to arrays of ids
* iterables are converted to arrays of whatever they contain
* mappings are converted to structs
* mapping keys are converted to strings
* other objects are converted to structs of their vars

Depending on the API, it may also be possible to create or keep a proxy to a model on which you can
keep calling methods.

.. tabs::

   .. group-tab:: Python

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
         :language: python
         :dedent: 8
         :start-after: <a id=check_access_rights>
         :end-before: </a>

   .. group-tab:: Node.js

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
         :language: javascript
         :dedent: 4
         :start-after: <a id=check_access_rights>
         :end-before: </a>

   .. group-tab:: Ruby

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
         :language: ruby
         :start-after: <a id=check_access_rights>
         :end-before: </a>

   .. group-tab:: PHP

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
         :language: php
         :start-after: <a id=check_access_rights>
         :end-before: </a>

   .. group-tab:: Java

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
         :language: java
         :dedent: 8
         :start-after: <a id=check_access_rights>
         :end-before: </a>

   .. group-tab:: cURL (sh)

      .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
         :language: bash
         :start-after: <a id=check_access_rights>
         :end-before: </a>

Result:

.. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
   :language: json
   :start-after: <a id=check_access_rights>
   :end-before: </a>


.. _external_api/search:

List records
------------

Records can be listed and filtered via :meth:`~odoo.models.Model.search`.

:meth:`~odoo.models.Model.search` takes a mandatory :ref:`domain <reference/orm/domains>` filter
(possibly empty), and returns the database identifiers of all records matching the filter.

.. example::

   To list customer companies, for instance:

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=list>
            :end-before: </a>

      .. group-tab:: Node.js

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
            :language: javascript
            :dedent: 4
            :start-after: <a id=list>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=list>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=list>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=list>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=list>
            :end-before: </a>


   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=list>
      :end-before: </a>

Pagination
~~~~~~~~~~

By default a search will return the ids of all records matching the condition, which may be a huge
number. ``offset`` and ``limit`` parameters are available to only retrieve a subset of all matched
records.

.. example::

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=pagination>
            :end-before: </a>

      .. group-tab:: Node.js

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
            :language: javascript
            :dedent: 4
            :start-after: <a id=pagination>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=pagination>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=pagination>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=pagination>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=pagination>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=pagination>
      :end-before: </a>

Count records
-------------

Rather than retrieve a possibly gigantic list of records and count them,
:meth:`~odoo.models.Model.search_count` can be used to retrieve only the number of records matching
the query. It takes the same :ref:`domain <reference/orm/domains>` filter as
:meth:`~odoo.models.Model.search` and no other parameter.

.. example::

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=count>
            :end-before: </a>

      .. group-tab:: Node.js

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
            :language: javascript
            :dedent: 4
            :start-after: <a id=count>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=count>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=count>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=count>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=count>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=count>
      :end-before: </a>

.. note::
   Calling ``search`` then ``search_count`` (or the other way around) may not yield coherent results
   if other users are using the server: stored data could have changed between the calls.

Read records
------------

Record data are accessible via the :meth:`~odoo.models.Model.search_read` and
:meth:`~odoo.models.Model.read` methods. ``search_read`` takes a domain to  search and find the
records to read whereas ``read`` takes a list of record ids (as returned by
:meth:`~odoo.models.Model.search`), and optionally a list of fields to fetch. It fetches all the
fields the current user can read by default. You can call the method with a non-empty ``fields``
argument to only fetch some fields.

.. example::

   This first exemple shows you how to use :meth:`~odoo.models.Model.search_read`.

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=search_read>
            :end-before: </a>

      .. group-tab:: Node.js

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
            :language: javascript
            :dedent: 4
            :start-after: <a id=search_read>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=search_read>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=search_read>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=search_read>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=search_read>
            :end-before: </a>

   This second example shows how to use :meth:`~odoo.models.Model.read` using the first record we
   fetched in the :ref:`external_api/search` section.

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=read>
            :end-before: </a>

      .. group-tab:: Node.js

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
            :language: javascript
            :dedent: 4
            :start-after: <a id=read>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=read>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=read>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=read>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=read>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=search_read>
      :end-before: </a>

.. note::
   Even if the ``id`` field is not requested, it is always returned.

List record fields
------------------

:meth:`~odoo.models.Model.fields_get` can be used to inspect
a model's fields and check which ones seem to be of interest.

Because it returns a large amount of meta-information (it is also used by client programs) it should
be filtered before printing, the most interesting items for a human user are ``string`` (the field's
label), ``help`` (a help text if available) and ``type`` (to know which values to expect, or to send
when updating a record). Using the simpler model ``ir.bank`` in order to shorten the output.

.. example::

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=fields_get>
            :end-before: </a>

      .. group-tab:: Node.js

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.js
            :language: javascript
            :dedent: 4
            :start-after: <a id=fields_get>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=fields_get>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=fields_get>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=fields_get>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=fields_get>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=fields_get>
      :end-before: </a>

.. _external_api/create:

Create records
--------------

Records of a model are created using :meth:`~odoo.models.Model.create`. The method creates a single
record and returns its database identifier.

:meth:`~odoo.models.Model.create` takes a mapping of fields to values, used to initialize the
record. For any field which has a default value and is not set through the mapping argument, the
default value will be used.

.. example::

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 12
            :start-after: <a id=create>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=create>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=create>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=create>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=create>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=create>
      :end-before: </a>

.. warning::

   While most value types are what would expect (integer for :class:`~odoo.fields.Integer`, string
   for :class:`~odoo.fields.Char` or :class:`~odoo.fields.Text`),

   - :class:`~odoo.fields.Date`, :class:`~odoo.fields.Datetime` and :class:`~odoo.fields.Binary`
     fields use string values
   - :class:`~odoo.fields.One2many` and :class:`~odoo.fields.Many2many` use a special command
     protocol detailed in :meth:`the documentation to the write method <odoo.models.Model.write>`.

Update records
--------------

Records can be updated using :meth:`~odoo.models.Model.write`. It takes a list of records to update
and a mapping of updated fields to values similar to :meth:`~odoo.models.Model.create`.

Multiple records can be updated simultaneously, but they will all get the same values for the fields
being set. It is not possible to perform "computed" updates (where the value being set depends on an
existing value of a record).

.. example::

   Because we need records on which to write, we are going to use the record we created in the
   :ref:`external_api/create` section.

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=write>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=write>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=write>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=write>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=write>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=write>
      :end-before: </a>

Delete records
--------------

Records can be deleted in bulk by providing their ids to :meth:`~odoo.models.Model.unlink`.

.. example::

   Because we need records on which to write, we use the record we created in the
   :ref:`external_api/create` section.

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=unlink>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=unlink>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=unlink>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=unlink>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=unlink>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=unlink>
      :end-before: </a>

Inspection and introspection
----------------------------

While we previously used :meth:`~odoo.models.Model.fields_get` to query a model and have been using
an arbitrary model from the start, Odoo stores most model metadata inside a few meta-models which
allow both querying the system and altering models and fields (with some limitations) on the fly
over RPC.

.. _external_api/ir.model:
.. _reference/webservice/inspection/models:

``ir.model``
~~~~~~~~~~~~

Provides information about Odoo models via its various fields.

``name``
    a human-readable description of the model
``model``
    the name of each model in the system
``state``
    whether the model was generated in Python code (``base``) or by creating
    an ``ir.model`` record (``manual``)
``field_id``
    list of the model's fields through a :class:`~odoo.fields.One2many` to
    :ref:`reference/webservice/inspection/fields`
``view_ids``
    :class:`~odoo.fields.One2many` to the :ref:`reference/views` defined
    for the model
``access_ids``
    :class:`~odoo.fields.One2many` relation to the
    :ref:`reference/security/acl` set on the model

``ir.model`` can be used to

- Query the system for installed models (as a precondition to operations on the model or to explore
  the system's content).
- Get information about a specific model (generally by listing the fields associated with it).
- Create new models dynamically over RPC.

.. important::
   * Custom model names must start with ``x_``.
   * The ``state`` must be provided and set to ``manual``, otherwise the model will not be loaded.
   * It is not possible to add new *methods* to a custom model, only fields.

.. example::

   A custom model will initially contain only the "built-in" fields available on all models:

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=ir.model>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=ir.model>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=ir.model>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=ir.model>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=ir.model>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=ir.model>
      :end-before: </a>

.. _reference/webservice/inspection/fields:

``ir.model.fields``
~~~~~~~~~~~~~~~~~~~

Provides information about the fields of Odoo models and allows adding custom fields without using
Python code.

``model_id``
    :class:`~odoo.fields.Many2one` to
    :ref:`reference/webservice/inspection/models` to which the field belongs
``name``
    the field's technical name (used in ``read`` or ``write``)
``field_description``
    the field's user-readable label (e.g. ``string`` in ``fields_get``)
``ttype``
    the :ref:`type <reference/orm/fields>` of field to create
``state``
    whether the field was created via Python code (``base``) or via
    ``ir.model.fields`` (``manual``)
``required``, ``readonly``, ``translate``
    enables the corresponding flag on the field
``groups``
    :ref:`field-level access control <reference/security/fields>`, a
    :class:`~odoo.fields.Many2many` to ``res.groups``
``selection``, ``size``, ``on_delete``, ``relation``, ``relation_field``, ``domain``
    type-specific properties and customizations, see :ref:`the fields documentation
    <reference/orm/fields>` for details

.. important::

   - Like custom models, only new fields created with ``state="manual"`` are activated as actual
     fields on the model.
   - Computed fields can not be added via ``ir.model.fields``, some field meta-information (defaults,
     onchange) can not be set either.

.. example::

   Because we need a model on which to add a custom field, we use the model we created in the
   :ref:`external_api/ir.model` section.

   .. tabs::

      .. group-tab:: Python

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.py
            :language: python
            :dedent: 8
            :start-after: <a id=ir.model.fields>
            :end-before: </a>

      .. group-tab:: Ruby

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.rb
            :language: ruby
            :start-after: <a id=ir.model.fields>
            :end-before: </a>

      .. group-tab:: PHP

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.php
            :language: php
            :start-after: <a id=ir.model.fields>
            :end-before: </a>

      .. group-tab:: Java

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.java
            :language: java
            :dedent: 8
            :start-after: <a id=ir.model.fields>
            :end-before: </a>

      .. group-tab:: cURL (sh)

         .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/test_rpc2_doc.sh
            :language: bash
            :start-after: <a id=ir.model.fields>
            :end-before: </a>

   Result:

   .. literalinclude:: {ODOO_RELPATH}/odoo/addons/test_rpc2/tests/doc_result.json
      :language: json
      :start-after: <a id=ir.model.fields>
      :end-before: </a>

.. _PostgreSQL: https://www.postgresql.org
.. _XML-RPC: https://en.wikipedia.org/wiki/XML-RPC
.. _JSON-RPC: https://en.wikipedia.org/wiki/JSON-RPC
.. _base64: https://en.wikipedia.org/wiki/Base64

.. _Python-xmlrpc-client: https://docs.python.org/3/library/xmlrpc.client.html
.. _Odoo-jsonrpc-client: https://github.com/odoo/odoo/blob/master/odoo/tools/jsonrpc_client.py
.. _Python-requests: https://requests.readthedocs.io/en/latest/
.. _JS-jayson: https://www.npmjs.com/package/jayson
.. _Ruby-xmlrpc-client: https://github.com/ruby/xmlrpc
.. _PHP-Ripcord: https://github.com/DarkaOnLine/Ripcord
.. _PHP-xmlrpc: https://php.net/manual/en/xmlrpc.installation.php
.. _PHP-openssl: https://php.net/manual/en/openssl.installation.php
.. _Apache-xmlrpc: https://ws.apache.org/xmlrpc/
.. _Apache-xmlrpc-nil: https://github.com/odoo/odoo/blob/master/odoo/addons/test_rpc2/tests/test_rpc2_doc.java#L14-L29
.. _Bash: https://www.gnu.org/software/bash/
.. _cURL: https://curl.se/
.. _jq: https://stedolan.github.io/jq/
