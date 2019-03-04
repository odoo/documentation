:banner: banners/odoo-sh.jpg

==================================
Containers
==================================

Overview
========

Each build is isolated within its own container (Linux namespaced container).

The base is an Ubuntu 16.04 system, where all of Odoo's required dependencies,
as well as common useful packages, are installed.

The Odoo.sh team is open to install any system packages
as long as they are distributed in the official Ubuntu repositories.
`Leave us a feedback <https://www.odoo.sh/feedback>`_ if you would like a package not yet installed.

If your project requires additional Python dependencies, or more recent releases,
you can define a :file:`requirements.txt` file in the root of your branches listing them.
The platform will take care to install these dependencies in your containers.
`The pip requirements specifiers <https://pip.pypa.io/en/stable/reference/pip_install/#requirement-specifiers>`_
documentation can help you write a :file:`requirements.txt` file.
To have a concrete example,
check out the `requirements.txt file of Odoo <https://github.com/odoo/odoo/blob/11.0/requirements.txt>`_.

The :file:`requirements.txt` files of submodules are taken into account as well. The platform
looks for :file:`requirements.txt` files in each folder containing Odoo modules: Not in the module folder itself,
but in their parent folder.

Directory structure
===================

As the containers are Ubuntu based, their directory structure follows the linux Filesystem Hierarchy Standard.
`Ubuntu's filesystem tree overview <https://help.ubuntu.com/community/LinuxFilesystemTreeOverview#Main_directories>`_
explains the main directories.

Here are the Odoo.sh pertinent directories:

::

  .
  ├── home
  │    └── odoo
  │         ├── src
  │         │    ├── odoo                Odoo Community source code
  │         │    │    └── odoo-bin       Odoo server executable
  │         │    ├── enterprise          Odoo Enterprise source code
  │         │    ├── themes              Odoo Themes source code
  │         │    └── user                Your repository branch source code
  │         ├── data
  │         │    ├── filestore           database attachments, as well as the files of binary fields
  │         │    └── sessions            visitors and users sessions
  │         └── logs
  │              ├── install.log         Database installation logs
  │              ├── odoo.log            Running server logs
  │              ├── update.log          Database updates logs
  │              └── pip.log             Python packages installation logs
  └── usr
       ├── lib
       │    ├── python2.7
       │         └── dist-packages       Python 2.7 standard libraries
       │    ├── python3
       │         └── dist-packages       Python 3 standard libraries
       │    └── python3.5
       │         └── dist-packages       Python 3.5 standard libraries
       ├── local
       │    └── lib
       │         ├── python2.7
       │         │    └── dist-packages  Python 2.7 third-party libraries
       │         └── python3.5
       │              └── dist-packages  Python 3.5 third-party libraries
       └── usr
            └── bin
                 ├── python2.7           Python 2.7 executable
                 └── python3.5           Python 3.5 executable

Both Python 2.7 and 3.5 are installed in the containers. However:

* If your project is configured to use Odoo 10.0, the Odoo server runs with Python 2.7.
* If your project is configured to use Odoo 11.0 or greater, the Odoo server runs with Python 3.5.

Database shell
==============

While accessing a container with the shell, you can access the database using *psql*.

.. code-block:: bash

  odoo@odoo-addons-master-1.odoo.sh:~$ psql
  psql (9.5.2, server 9.5.11)
  SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
  Type "help" for help.

  odoo-addons-master-1=>

**Be careful !**
`Use transactions <https://www.postgresql.org/docs/current/static/sql-begin.html>`_ (*BEGIN...COMMIT/ROLLBACK*)
for every *sql* statements leading to changes
(*UPDATE*, *DELETE*, *ALTER*, ...), especially for your production database.

The transaction mechanism is your safety net in case of mistake.
You simply have to rollback your changes to revert your database to its previous state.

For example, it may happen that you forget to set your *WHERE* condition.

.. code-block:: sql

  odoo-addons-master-1=> BEGIN;
  BEGIN
  odoo-addons-master-1=> UPDATE res_users SET password = '***';
  UPDATE 457
  odoo-addons-master-1=> ROLLBACK;
  ROLLBACK

In such a case, you can rollback to revert the unwanted changes that you just mistakenly did, and rewrite the statement:

.. code-block:: sql

  odoo-addons-master-1=> BEGIN;
  BEGIN
  odoo-addons-master-1=> UPDATE res_users SET password = '***' WHERE id = 1;
  UPDATE 1
  odoo-addons-master-1=> COMMIT;
  COMMIT

However, do not forget to either commit or rollback your transaction after having done it.
Open transactions may lock records in your tables
and your running database may wait for them to be released. It can cause a server to hang indefinitely.

In addition, when possible, use your staging databases to test your statements first. It gives you an extra safety net.

Run an Odoo server
==================

You can start an Odoo server instance from a container shell. You won't be able to access it from the outside world
with a browser, but you can for instance:

* use the Odoo shell,

.. code-block:: bash

  $  odoo-bin shell
  >>> partner = env['res.partner'].search([('email', '=', 'asusteK@yourcompany.example.com')], limit=1)
  >>> partner.name
  'ASUSTeK'
  >>> partner.name = 'Odoo'
  >>> env['res.partner'].search([('email', '=', 'asusteK@yourcompany.example.com')], limit=1).name
  'Odoo'

* install a module,

.. code-block:: bash

  $  odoo-bin -i sale --without-demo=all --stop-after-init

* update a module,

.. code-block:: bash

  $  odoo-bin -u sale --stop-after-init

* run the tests for a module,

.. code-block:: bash

  $  odoo-bin -i sale --test-enable --log-level=test --stop-after-init

In the above commands, the argument:

* ``--without-demo=all`` prevents demo data to be loaded for all modules
* ``--stop-after-init`` will immediately shutdown the server instance after it completed the operations you asked.

More options are available and detailed in the
`CLI documentation <https://www.odoo.com/documentation/11.0/reference/cmdline.html>`_.

You can find in the logs (*~/logs/odoo.log*) the addons path used by Odoo.sh to run your server.
Look for "*odoo: addons paths*":

::

  2018-02-19 10:51:39,267 4 INFO ? odoo: Odoo version 11.0
  2018-02-19 10:51:39,268 4 INFO ? odoo: Using configuration file at /home/odoo/.config/odoo/odoo.conf
  2018-02-19 10:51:39,268 4 INFO ? odoo: addons paths: ['/home/odoo/data/addons/11.0', '/home/odoo/src/user', '/home/odoo/src/enterprise', '/home/odoo/src/themes', '/home/odoo/src/odoo/addons', '/home/odoo/src/odoo/odoo/addons']

**Be careful**, especially with your production database.
Operations that you perform running this Odoo server instance are not isolated:
Changes will be effective in the database. Always, make your tests in your staging databases.
