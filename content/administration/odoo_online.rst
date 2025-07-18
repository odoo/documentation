===========
Odoo Online
===========

`Odoo Online <https://www.odoo.com/trial>`_ provides private databases which are fully managed and
hosted by Odoo. It can be used for long-term production or to test Odoo thoroughly, including
customizations that don't require code.

.. note::
   Odoo Online is incompatible with custom modules or the Odoo App Store.

Odoo Online databases are accessed using any web browser and do not require a local installation.

To quickly try out Odoo, shared `demo <https://demo.odoo.com>`_ instances are available. No
registration is required, but each instance only lives for a few hours.

.. _odoo_online/database-management:

Database management
===================

To manage a database, go to the `database manager <https://www.odoo.com/my/databases>`_ and sign in
as the database administrator.

All the main database management options are available by clicking the database name, except the
upgrade option, which can be accessed by clicking the **arrow in a circle** icon next to the
database name. It is only displayed if an upgrade is available.

.. image:: odoo_online/database-manager.png
   :alt: Accessing the database management options

- :ref:`odoo_online/upgrade`
- :ref:`odoo_online/duplicate`
- :ref:`odoo_online/rename`
- :ref:`odoo_online/download`
- :ref:`odoo_online/domains`
- :ref:`odoo_online/tags`
- :ref:`odoo_online/delete`
- :ref:`odoo_online/contact-support`
- :ref:`odoo_online/users`
- :ref:`odoo_online/web-services`

.. _odoo_online/upgrade:

Upgrade
=======

Trigger a database upgrade.

.. seealso::
   For more information about the upgrade process, check out the :ref:`Odoo Online upgrade
   documentation <upgrade-request-test>`.

.. _odoo_online/duplicate:

Duplicate
=========

Create an exact copy of the database, which can be used to perform testing without compromising
daily operations.

.. important::
   - By checking :guilabel:`For testing purposes`, all external actions (emails, payments, delivery
     orders, etc.) are disabled by default on the duplicated database.
   - Duplicated databases expire automatically after 15 days.
   - A maximum of five duplicates can be made per database. Under extraordinary circumstances,
     contact `support <https://www.odoo.com/help>`_ to raise the limit.

.. _odoo_online/rename:

Rename
======

Rename the database and its URL.

.. _odoo_online/download:

Download
========

Download a ZIP file containing a backup of the database.

.. note::
   - Databases are backed up daily as per the `Odoo Cloud Hosting SLA
     <https://www.odoo.com/cloud-sla>`_.
   - If the :guilabel:`Download` option is disabled, it means your database is too large to be
     downloaded through this method. In this case, please contact `Odoo Support
     <https://www.odoo.com/help>`_ to request an alternative download solution.

.. _odoo_online/domains:

Domain names
============

Use a custom :doc:`domain name </applications/websites/website/configuration/domain_names>` to
access the database via another URL.

.. tip::
   You can :ref:`register a domain name for free <domain-name/register>`.

.. _odoo_online/tags:

Tags
====

Add tags to easily identify and sort your databases.

.. tip::
   You can search for tags in the search bar.

.. _odoo_online/delete:

Delete
======

Delete a database instantly.

.. danger::
   Deleting a database means that all data is permanently lost. The deletion is instant and applies
   to all users. It is recommended to create a backup of the database before deleting it.

Carefully read the warning message and only proceed if the implications of deleting a database are
fully understood.

.. image:: odoo_online/delete.png
   :alt: The warning message displayed before deleting a database

.. note::
   - Only an administrator can delete a database.
   - The database name is immediately made available to anyone.
   - Deleting a database if it has expired or is linked to a subscription is impossible. In that
     case, contact `Odoo Support <https://www.odoo.com/help>`_.

.. _odoo_online/contact-support:

Contact us
==========

Access the `Odoo.com support page <https://www.odoo.com/help>`_ with the database's details already
pre-filled.

.. _odoo_online/users:

Invite / remove users
=====================

To invite users, fill out the new user's email address and click :guilabel:`Invite`. To add multiple
users, click :guilabel:`Add more users`.

.. image:: odoo_online/invite-users.png
   :alt: Inviting a user on a database

To remove users, select them and click :guilabel:`Remove`.

.. seealso::
   - :doc:`/applications/general/users`
   - :doc:`odoo_accounts`

.. _odoo_online/web-services:

Web Services
============

In order to programmatically retrieve the list of the databases displayed in the
`database manager <https://www.odoo.com/my/databases>`_, call the method `list` of the model
`odoo.database` via a :doc:`Web Service </developer/howtos/web_services>` call.

Inspired from the examples provided in the :doc:`Web Services </developer/howtos/web_services>`
section, this is how to retrieve this list with the library ``xmlrpc.client``::

   import xmlrpc.client

   USER = 'user@domain.tld'
   APIKEY = 'your_apikey'

   root = 'https://www.odoo.com/xmlrpc/'
   uid = xmlrpc.client.ServerProxy(root + 'common').login('openerp', USER, APIKEY)
   sock = xmlrpc.client.ServerProxy(root + 'object')
   databases_list = sock.execute('openerp', uid, APIKEY, 'odoo.database', 'list')

And here is the equivalent example with JSON-RPC::

   import json
   import random
   import urllib.request

   USER = 'user@domain.tld'
   APIKEY = 'your_apikey'

   def json_rpc(url, method, params):
       data = {
           'jsonrpc': '2.0',
           'method': method,
           'params': params,
           'id': random.randint(0, 1000000000),
       }
       req = urllib.request.Request(url=url, data=json.dumps(data).encode(), headers={
           "Content-Type": "application/json",
       })
       reply = json.loads(urllib.request.urlopen(req).read().decode('UTF-8'))
       if reply.get('error'):
           raise Exception(reply['error'])
       return reply['result']

   def call(url, service, method, *args):
       return json_rpc(url, 'call', {'service': service, 'method': method, 'args': args})

   url = 'https://www.odoo.com/jsonrpc'
   uid = call(url, 'common', 'login', 'openerp', USER, APIKEY)
   databases_list = call(url, 'object', 'execute', 'openerp', uid, APIKEY, 'odoo.database', 'list')
