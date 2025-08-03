.. _reference/cmdline:

============================
Command-line interface (CLI)
============================

The CLI :dfn:`command-line interface` offers several functionalities related to Odoo. You can use it
to :ref:`run the server <reference/cmdline/server>`, :ref:`launch Odoo as a Python console
environment <reference/cmdline/shell>`, :ref:`scaffold an Odoo module <reference/cmdline/scaffold>`,
:ref:`populate a database <reference/cmdline/populate>` or :ref:`count the number of lines of code <reference/cmdline/cloc>`.

.. important::
   The command to use to call the CLI depends on how you installed Odoo. In the examples below, we
   assume that you are :doc:`running Odoo from source </administration/on_premise/source>` with the
   :file:`odoo-bin` file. If you installed Odoo :doc:`from a distribution package
   </administration/on_premise/packages>` or with `Docker <https://hub.docker.com/_/odoo/>`_, you
   must adapt the command.

   .. tabs::

      .. tab:: Run Odoo from source

         #. Navigate to the root of the directory where you downloaded the source files of Odoo
            Community.
         #. Run all CLI commands with :command:`./odoo-bin`

      .. tab:: Odoo was installed from a distribution package

         When Odoo was installed, an executable named `odoo` was added to your user's PATH. Replace
         all occurrences of :command:`odoo-bin` with :command:`odoo` in the examples below.

      .. tab:: Odoo was installed with Docker

         Please refer to the `documentation of the official Docker image of Odoo
         <https://hub.docker.com/_/odoo/>`_.

.. _reference/cmdline/help:

Help & version
==============

.. program:: odoo-bin

.. option:: -h, --help

    shows help text with all available options

.. option:: --version

   shows Odoo version e.g. "Odoo Server {BRANCH}"

.. tip:: You can enable auto-completion in your shell by running

  .. code-block:: bash

    echo "complete -W '`./odoo-bin --help | \
      sed -e 's/[^a-z_-]\(-\+[a-z0-9_-]\+\)/\n\1\n/' | \
      grep -- '^-' | sort | uniq | tr '\n' ' '`' odoo-bin" >> ~/.bash_completion

.. _reference/cmdline/server:

Running the server
==================

.. program:: odoo-bin

.. option:: -d <database>, --database <database>

    database(s) used when installing or updating modules.
    Providing a comma-separated list restrict access to databases provided in
    list.

    For advanced database options, take a look :ref:`below <reference/cmdline/server/database>`.

.. option:: -i <modules>, --init <modules>

    comma-separated list of modules to install before running the server
    (requires :option:`-d`).

.. option:: -u <modules>, --update <modules>

    comma-separated list of modules to update before running the server.
    Use ``all`` for all modules. (requires :option:`-d`).

.. option:: --addons-path <directories>

    comma-separated list of directories in which modules are stored. These
    directories are scanned for modules.

    .. (nb: when and why?)

.. option:: --upgrade-path <upgrade_path>

   comma-separated list of directories from which additional upgrade scripts
   are loaded.

.. option:: --pre-upgrade-scripts <pre_upgrade_scripts>

   comma-separated list of paths to upgrade scripts. The scripts are run before
   loading base module when an upgrade of any module is requested. This is
   useful to perform some actions during custom modules upgrade after a major
   upgrade.

.. option:: --load <modules>

   list of server-wide modules to load. Those modules are supposed to provide
   features not necessarily tied to a particular database. This is in contrast
   to modules that are always bound to a specific database when they are
   installed (i.e. the majority of Odoo addons). Default is ``base,web``.

.. option:: -c <config>, --config <config>

    path to an alternate :ref:`configuration file <reference/cmdline/config>`.
    If not defined, Odoo checks ``ODOO_RC`` environmental variable
    and default location :file:`{$HOME}/.odoorc`.
    See configuration file section :ref:`below <reference/cmdline/config>`.

.. option:: -D <data-dir-path>, --data-dir <data-dir-path>

   directory path where to store Odoo data (eg. filestore, sessions).
   If not specified, Odoo will fallback
   to a predefined path. On Unix systems its
   one defined in ``$XDG_DATA_HOME`` environmental variable
   or :file:`~/.local/share/Odoo` or :file:`/var/lib/Odoo`.

.. option:: -s, --save

    saves the server configuration to the current configuration file
    (:file:`{$HOME}/.odoorc` by default, and can be overridden using
    :option:`-c`).

.. option:: --without-demo

    disables demo data loading for modules installed
    comma-separated, use ``all`` for all modules.
    Requires :option:`-d` and :option:`-i`.

.. option:: --pidfile=<pidfile>

    path to a file where the server pid will be stored

.. option:: --stop-after-init

    stops the server after its initialization.

.. option:: --geoip-city-db <path>

   Absolute path to the GeoIP City database file.

.. option:: --geoip-country-db <path>

   Absolute path to the GeoIP Country database file.


.. _reference/cmdline/testing:

Testing Configuration
=====================

.. option:: --test-enable

    runs tests after module installation

.. option:: --test-file <file>

    runs a python test file

.. option:: --test-tags [-][tag][/module][:class][.method]

    Comma-separated list of specs to filter which tests to execute. Enable unit tests if set.

    Example: `--test-tags :TestClass.test_func,/test_module,external`

    * The `-` specifies if we want to include or exclude tests matching this spec.
    * The tag will match tags added on a class with a :func:`~odoo.tests.common.tagged` decorator
      (all :ref:`test classes <reference/testing>` have `standard` and `at_install` tags
      until explicitly removed, see the decorator documentation).
    * `*` will match all tags.
    * If tag is omitted on include mode, its value is `standard`.
    * If tag is omitted on exclude mode, its value is `*`.
    * The module, class, and method will respectively match the module name, test class name and test method name.

    Filtering and executing the tests happens twice: right
    after each module installation/update and at the end
    of the modules loading. At each stage tests are filtered
    by `--test-tags` specs and additionally by dynamic specs
    `at_install` and `post_install` correspondingly.

.. option:: --screenshots

    Specify directory where to write screenshots when an HttpCase.browser_js test
    fails. It defaults to :file:`/tmp/odoo_tests/{db_name}/screenshots`

.. option:: --screencasts

    Enable screencasts and specify directory where to write screencasts files.
    The ``ffmpeg`` utility needs to be installed to encode frames into a video
    file. Otherwise frames will be kept instead of the video file.

.. _reference/cmdline/server/database:

Database
--------

.. option:: -r <user>, --db_user <user>

    database username, used to connect to PostgreSQL.

.. option:: -w <password>, --db_password <password>

    database password, if using `password authentication`_.

.. option:: --db_host <hostname>

    host for the database server

    * ``localhost`` on Windows
    * UNIX socket otherwise

.. option:: --db_port <port>

    port the database listens on, defaults to 5432

.. option:: --db_replica_host <hostname>

    host for the replica server

    When set, it redirect all read-only transactions to this host, instead of of the primary
    database at ``--db_host``.

    The host can be set to an empty string or to the same value as ``--db_host`` to simulate a
    replicated environnement, for development.

.. option:: --db_replica_port <port>

    port the replica database listens on, defaults to 5432

.. option:: --db-filter <filter>

    hides databases that do not match ``<filter>``. The filter is a
    `regular expression`_, with the additions that:

    - ``%h`` is replaced by the whole hostname the request is made on.
    - ``%d`` is replaced by the subdomain the request is made on, with the
      exception of ``www`` (so domain ``odoo.com`` and ``www.odoo.com`` both
      match the database ``odoo``).

      These operations are case sensitive. Add option ``(?i)`` to match all
      databases (so domain ``odoo.com`` using ``(?i)%d`` matches the database
      ``Odoo``).

    Since version 11, it's also possible to restrict access to a given database
    listen by using the --database parameter and specifying a comma-separated
    list of databases

    When combining the two parameters, db-filter supersedes the comma-separated
    database list for restricting database list, while the comma-separated list
    is used for performing requested operations like upgrade of modules.

    .. code-block:: bash

        $ odoo-bin --db-filter ^11.*$

    Restrict access to databases whose name starts with 11

    .. code-block:: bash

        $ odoo-bin --database 11firstdatabase,11seconddatabase

    Restrict access to only two databases, 11firstdatabase and 11seconddatabase

    .. code-block:: bash

        $ odoo-bin --database 11firstdatabase,11seconddatabase -u base

    Restrict access to only two databases, 11firstdatabase and 11seconddatabase,
    and update base module on one database: 11firstdatabase.
    If database 11seconddatabase doesn't exist, the database is created and base modules
    is installed

    .. code-block:: bash

        $ odoo-bin --db-filter ^11.*$ --database 11firstdatabase,11seconddatabase -u base

    Restrict access to databases whose name starts with 11,
    and update base module on one database: 11firstdatabase.
    If database 11seconddatabase doesn't exist, the database is created and base modules
    is installed

.. option:: --db-template <template>

    when creating new databases from the database-management screens, use the
    specified `template database`_. Defaults to ``template0``.

.. option:: --pg_path </path/to/postgresql/binaries>

    Path to the PostgreSQL binaries that are used by the database manager to
    dump and restore databases. You have to specify this option only if these
    binaries are located in a non-standard directory.

.. option:: --no-database-list

    Suppresses the ability to list databases available on the system

.. option:: --db_sslmode

    Control the SSL security of the connection between Odoo and PostgreSQL.
    Value should be one of 'disable', 'allow', 'prefer', 'require',
    'verify-ca' or 'verify-full'
    Default value is 'prefer'

.. option:: --unaccent

   Try to enable the unaccent extension when creating new databases

.. _reference/cmdline/server/emails:

Emails
------

.. option:: --email-from <address>

    Email address used as <FROM> when Odoo needs to send mails

.. option:: --from-filter <address or domain>

    Define which email address the SMTP configuration will apply to. The field can be a domain name
    or an entire email address, or it can remain empty. If the sender's email address does not
    match this set filter, then the email will be encapsulated using a combination of the two
    system parameters: ``mail.default.from`` and ``mail.catchall.domain``. For example, "Admin"
    <admin\@example.com> => "Admin" <notifications\@mycompany.com>.

.. option:: --smtp <server>

    Address of the SMTP server to connect to in order to send mails

.. option:: --smtp-port <port>

.. option:: --smtp-ssl

    If set, odoo should use SSL/STARTSSL SMTP connections

.. option:: --smtp-user <name>

    Username to connect to the SMTP server

.. option:: --smtp-password <password>

    Password to connect to the SMTP server

.. option:: --smtp-ssl-certificate-filename <path/to/cert.pem>

    An SSL certificate is to be used for authentication. If set, then `smtp-ssl-private-key` is
    required.

.. option:: --smtp-ssl-private-key-filename <path/to/key.pem>

    An SSL private key is used for authentication. If set, then `smtp-ssl-certificate` is required.

.. _reference/cmdline/server/internationalisation:

Internationalisation
--------------------

Use these options to translate Odoo to another language. See i18n section of
the user manual. Option '-d' is mandatory. Option '-l' is mandatory in case
of importation

.. option:: --load-language <languages>

    specifies the languages (separated by commas) for the translations you
    want to be loaded

.. option:: -l, --language <language>

    specify the language of the translation file. Use it with --i18n-export
    or --i18n-import

.. option:: --i18n-export <filename>

    export all sentences to be translated to a CSV file, a PO file or a TGZ
    archive and exit.

.. option:: --i18n-import <filename>

    import a CSV or a PO file with translations and exit. The '-l' option is
    required.

.. option:: --i18n-overwrite

    overwrites existing translation terms on updating a module or importing
    a CSV or a PO file.

.. option:: --modules

    specify modules to export. Use in combination with --i18n-export

.. _reference/cmdline/advanced:

Advanced Options
----------------

.. _reference/cmdline/dev:

Developer features
~~~~~~~~~~~~~~~~~~

.. option:: --dev <feature,feature,...,feature>

    comma-separated list of features. For development purposes only. Do not use it in production.
    Possible features are:

    * ``all``: all the features below are activated

    * ``xml``: read QWeb template from xml file directly instead of database.
      Once a template has been modified in database, it will be not be read from
      the xml file until the next update/init. Particularly, templates are not
      translated on using this option.

    * ``reload``: restart server when python file are updated (may not be detected
      depending on the text editor used)

    * ``qweb``: break in the evaluation of QWeb template when a node contains ``t-debug='debugger'``

    * ``(i)p(u)db``: start the chosen python debugger in the code when an
      unexpected error is raised before logging and returning the error.

    * ``werkzeug``: display the full traceback on the frontend page in case of exception


.. _reference/cmdline/server/http:

HTTP
~~~~

.. option:: --no-http

    do not start the HTTP or long-polling workers (may still start :ref:`cron <reference/actions/cron>`
    workers)

    .. warning:: has no effect if :option:`--test-enable` is set, as tests
                 require an accessible HTTP server

.. option:: --http-interface <interface>

    TCP/IP address on which the HTTP server listens, defaults to ``0.0.0.0``
    (all addresses)

.. option:: -p <port>
.. option:: --http-port <port>

    Port on which the HTTP server listens, defaults to 8069.

.. option:: --gevent-port <port>

    TCP port for websocket connections in multiprocessing or gevent mode,
    defaults to 8072. Not used in default (threaded) mode.

.. option:: --proxy-mode

    enables the use of ``X-Forwarded-*`` headers through `Werkzeug's proxy
    support`_.

    It ignores all ``X-Forwarded-*`` headers in case ``X-Forwarded-Host`` is
    missing from the request.

    It always gets the real IP from the last entry of the ``X-Forwarded-For``
    chain. Configure your web server accordingly using directives such as
    nginx's `set_real_ip_from <https://nginx.org/en/docs/http/ngx_http_realip_module.html>`_
    in case there are other trusted proxies along the chain that must be ignored.

    ``X-Forwarded-Proto`` and ``X-Forwarded-Host`` are used to update the
    request root URL, which in turn is used to update the ``web.base.url``
    system parameter upon a successful admin authentication. This system
    parameter is used to generate all links for the current database; see
    :ref:`domain-name/web-base-url`.


    .. warning:: proxy mode *must not* be enabled outside of a reverse proxy
                 scenario

.. option:: --x-sendfile

    delegates serving attachments files to the static web server and sets both
    ``X-Sendfile`` (apache) and ``X-Accel-*`` (nginx) http headers on stream
    responses. See :ref:`deploy/streaming` for web server configuration.

.. _reference/cmdline/server/logging:

Logging
~~~~~~~

By default, Odoo displays all logging of level_ ``INFO``, ``WARNING`` and ``ERROR``. All logs
independently of the level are output on ``stderr``. Various options are available to redirect
logging to other destinations and to customize the verbosity.

.. option:: --logfile <file>

    sends logging output to the specified file instead of ``stderr``. On Unix, the
    file `can be managed by external log rotation programs
    <https://docs.python.org/3/library/logging.handlers.html#watchedfilehandler>`_
    and will automatically be reopened when replaced

.. option:: --syslog

    logs to the system's event logger: `syslog on unices <https://docs.python.org/3/library/logging.handlers.html#sysloghandler>`_
    and `the Event Log on Windows <https://docs.python.org/3/library/logging.handlers.html#nteventloghandler>`_.

    Neither is configurable

.. option:: --log-db <dbname>

    logs to the ``ir.logging`` model (``ir_logging`` table) of the specified
    database. The database can be the name of a database in the "current"
    PostgreSQL, or `a PostgreSQL URI`_ for e.g. log aggregation.

.. option:: --log-handler <handler-spec>

    :samp:`{LOGGER}:{LEVEL}`, enables ``LOGGER`` at the provided ``LEVEL``
    e.g. ``odoo.models:DEBUG`` will enable all logging messages at or above
    ``DEBUG`` level in the models.

    * The colon ``:`` is mandatory
    * The logger can be omitted to configure the root (default) handler
    * If the level is omitted, the logger is set to ``INFO``

    The option can be repeated to configure multiple loggers e.g.

    .. code-block:: console

        $ odoo-bin --log-handler :DEBUG --log-handler werkzeug:CRITICAL --log-handler odoo.fields:WARNING

.. option:: --log-web

    enables DEBUG logging of HTTP requests and responses, equivalent to
    ``--log-handler=odoo.http:DEBUG``

.. option:: --log-sql

    enables DEBUG logging of SQL querying, equivalent to
    ``--log-handler=odoo.sql_db:DEBUG``

.. option:: --log-level <level>

    Shortcut to more easily set predefined levels on specific loggers. "real"
    levels (``critical``, ``error``, ``warn``, ``debug``) are set on the
    ``odoo`` and ``werkzeug`` loggers (except for ``debug`` which is only
    set on ``odoo``).

    Odoo also provides debugging pseudo-levels which apply to different sets
    of loggers:

    ``debug_sql``
        sets the SQL logger to ``debug``

        equivalent to ``--log-sql``
    ``debug_rpc``
        sets the ``odoo`` and HTTP request loggers to ``debug``

        equivalent to ``--log-level debug --log-request``
    ``debug_rpc_answer``
        sets the ``odoo`` and HTTP request and response loggers to
        ``debug``

        equivalent to ``--log-level debug --log-request --log-response``

    .. note::

        In case of conflict between :option:`--log-level` and
        :option:`--log-handler`, the latter is used

.. _reference/cdmline/workers:

Multiprocessing
~~~~~~~~~~~~~~~

.. option:: --workers <count>

    if ``count`` is not 0 (the default), enables multiprocessing and sets up
    the specified number of HTTP workers (sub-processes processing HTTP
    and RPC requests).

    .. note:: multiprocessing mode is only available on Unix-based systems

    A number of options allow limiting and recycling workers:

    .. option:: --limit-request <limit>

        Number of requests a worker will process before being recycled and
        restarted.

        Defaults to *8196*.

    .. option:: --limit-memory-soft <limit>

        Maximum allowed virtual memory per worker in bytes. If the limit is exceeded,
        the worker is killed and recycled at the end of the current request.

        Defaults to *2048MiB (2048\*1024\*1024B)*.

    .. option:: --limit-memory-hard <limit>

        Hard limit on virtual memory in bytes, any worker exceeding the limit will be
        immediately killed without waiting for the end of the current request
        processing.

        Defaults to *2560MiB (2560\*1024\*1024B)*.

    .. option:: --limit-time-cpu <limit>

        Prevents the worker from using more than <limit> CPU seconds for each
        request. If the limit is exceeded, the worker is killed.

        Defaults to *60*.

    .. option:: --limit-time-real <limit>

        Prevents the worker from taking longer than <limit> seconds to process
        a request. If the limit is exceeded, the worker is killed.

        Differs from :option:`--limit-time-cpu` in that this is a "wall time"
        limit including e.g. SQL queries.

        Defaults to *120*.

.. option:: --max-cron-threads <count>

    number of workers dedicated to :ref:`cron <reference/actions/cron>` jobs. Defaults to *2*.
    The workers are threads in multi-threading mode and processes in multi-processing mode.

    For multi-processing mode, this is in addition to the HTTP worker processes.

.. option:: --limit-time-worker-cron <limit>

    Soft limit on how long a :ref:`cron <reference/actions/cron>` thread/worker is
    allowed to live before is is restarted, in seconds.

    Set to 0 to disable.

    Defaults to *0*.

.. _reference/cmdline/config:

Configuration file
==================

.. program:: odoo-bin

Most of the command-line options can also be specified via a configuration
file. Most of the time, they use similar names with the prefix ``-`` removed
and other ``-`` are replaced by ``_`` e.g. :option:`--db-template` becomes
``db_template``.

Some conversions don't match the pattern:

* :option:`--db-filter` becomes ``dbfilter``
* :option:`--no-http` corresponds to the ``http_enable`` boolean
* logging presets (all options starting with ``--log-`` except for
  :option:`--log-handler` and :option:`--log-db`) just add content to
  ``log_handler``, use that directly in the configuration file
* :option:`--smtp` is stored as ``smtp_server``
* :option:`--database` is stored as ``db_name``
* :option:`--i18n-import` and :option:`--i18n-export` aren't available at all
  from configuration files

.. _reference/cmdline/config_file:

The default configuration file is :file:`{$HOME}/.odoorc` which
can be overridden using :option:`--config <odoo-bin -c>`. Specifying
:option:`--save <odoo-bin -s>` will save the current configuration state back
to that file. The configuration items relative to the command-line are to be
specified in the section ``[options]``.

Here is a sample file:

.. code-block:: ini

   [options]
   db_user=odoo
   dbfilter=odoo

.. _jinja2: https://jinja.palletsprojects.com/
.. _regular expression: https://docs.python.org/3/library/re.html
.. _password authentication:
    https://www.postgresql.org/docs/12/static/auth-methods.html#AUTH-PASSWORD
.. _template database:
    https://www.postgresql.org/docs/12/static/manage-ag-templatedbs.html
.. _level:
    https://docs.python.org/3/library/logging.html#logging.Logger.setLevel
.. _a PostgreSQL URI:
    https://www.postgresql.org/docs/12/static/libpq-connect.html#AEN38208
.. _Werkzeug's proxy support:
    https://werkzeug.palletsprojects.com/en/0.16.x/middleware/proxy_fix/#module-werkzeug.middleware.proxy_fix
.. _pyinotify: https://github.com/seb-m/pyinotify/wiki

.. _reference/cmdline/shell:

Shell
=====

The Odoo command line also allows launching Odoo as a Python console environment, enabling direct
interaction with the :ref:`orm <reference/orm>` and its functionalities.

.. code-block:: console

   $ odoo-bin shell

.. example::

   Adding an exclamation mark to all contacts' names:

   .. code-block:: python

      In [1]: records = env["res.partner"].search([])

      In [2]: records
      Out[2]: res.partner(14, 26, 33, 21, 10)

      In [3]: for partner in records:
         ...:     partner.name = "%s !" % partner.name
         ...:

      In [4]: env.cr.commit()

   .. important::
      By default, the shell is running in transaction mode. This means that any change made to the
      database is rolled back when exiting the shell. To commit changes, use `env.cr.commit()`.

.. option:: --shell-interface (ipython|ptpython|bpython|python)

   Specify a preferred REPL to use in shell mode. This shell is started with the `env` variable
   already initialized to be able to access the ORM and other Odoo modules.

.. seealso::
   :ref:`reference/orm/environment`

.. _reference/cmdline/scaffold:

Neutralize
==========

.. program:: odoo-bin neutralize

The Odoo command line allows for neutralizing a database as well. The command must be run with a
database option.

.. code-block:: console

   $ odoo-bin --addons-path <PATH,...>  neutralize -d <database>

.. option:: -d <database, --database <database>

   Specify the database name that you would like to neutralize.


.. option:: --stdout

   Output the neutralization SQL instead of applying it

.. seealso::
   :doc:`../../administration/neutralized_database`

Scaffolding
===========

.. program:: odoo-bin scaffold

Scaffolding is the automated creation of a skeleton structure to simplify
bootstrapping (of new modules, in the case of Odoo). While not necessary it
avoids the tedium of setting up basic structures and looking up what all
starting requirements are.

Scaffolding is available via the :command:`odoo-bin scaffold` subcommand.

.. code-block:: console

    $ odoo-bin scaffold my_module /addons/

.. option:: name (required)

    the name of the module to create, may munged in various manners to
    generate programmatic names (e.g. module directory name, model names, …)

.. option:: destination (default=current directory)

    directory in which to create the new module, defaults to the current
    directory

.. option:: -t <template>

    a template directory, files are passed through jinja2_ then copied to
    the ``destination`` directory


This will create module *my_module* in directory */addons/*.

.. _reference/cmdline/populate:

Database population
===================

.. program:: odoo-bin populate

Odoo Populate allows to duplicate existing data in a given database. This can be used
for testing and benchmarking when large tables are needed. The duplication process
introduces variation for some fields to respect `UNIQUE` constraints, among other things.
It also follows x2Many relationships.

.. code-block:: console

    $ odoo-bin populate -d  my_database --models res.partner,account.move --factors 1000

.. option:: -d <database>

    name of the database to populate

.. option:: --models

    list of models to populate. Models appearing twice will only be populated once.

.. option:: --factors

    list of populate factors. In case a factor is missing for a model, the last factor in
    the list will be used.

.. option:: --sep

    separator used to generate record names

.. _reference/cmdline/cloc:

Cloc
====

.. program:: odoo-bin cloc

Odoo Cloc is a tool to count the number of relevant lines written in
Python, Javascript, CSS, SCSS, or XML. This can be used as a rough metric for pricing
maintenance of extra modules.

Command-line options
--------------------
.. option:: -d <database>, --database <database>

| Process the code of all extra modules installed on the provided database,
  and of all server actions and computed fields manually created in the provided
  database.
| The :option:`--addons-path` option is required to specify the path(s) to the
  module folder(s).
| If combined with :option:`--path`, the count will be that of the sum of both
  options' results (with possible overlaps). At least one of these two options is
  required to specify which code to process.

.. code-block:: console

   $ odoo-bin cloc --addons-path=addons -d my_database

.. seealso::
   - :ref:`reference/cmdline/cloc/database-option`


.. option:: -p <path>, --path <path>

| Process the files in the provided path.
| If combined with :option:`--database`, the count will be that of the sum of both
  options' results (with possible overlaps). At least one of these two options is
  required to specify which code to process.

.. code-block:: console

   $ odoo-bin cloc -p addons/account


Multiple paths can be provided by repeating the option.

.. code-block:: console

   $ odoo-bin cloc -p addons/account -p addons/sale

.. seealso::
   - :ref:`reference/cmdline/cloc/path-option`


.. option:: --addons-path <directories>

| Comma-separated list of directories in which modules are stored. These directories
  are scanned for modules.
| Required if the :option:`--database` option is used.


.. option:: -c <directories>

Specify a configuration file to use in place of the :option:`--addons-path` option.

.. code-block:: console

    $ odoo-bin cloc -c config.conf -d my_database


.. option:: -v, --verbose

Show the details of lines counted for each file.


Processed files
---------------

.. _reference/cmdline/cloc/database-option:

With the :option:`--database` option
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Odoo Cloc counts the lines in each file of extra installed modules in a
given database. In addition, it counts the Python lines of server actions and
custom computed fields that have been directly created in the database or
imported. Finally, it counts the lines of code of Javascript, CSS, and SCSS files,
and of QWeb views from imported modules.

Some files are excluded from the count by default:

- The manifest (:file:`__manifest__.py` or :file:`__openerp__.py`)
- The contents of the folder :file:`static/lib`
- The tests defined in the folder :file:`tests` and :file:`static/tests`
- The migrations scripts defined in the folder :file:`migrations` and `upgrades`
- The XML files declared in the ``demo`` or ``demo_xml`` sections of the manifest

For special cases, a list of files that should be ignored by Odoo Cloc can be defined
per module. This is specified by the ``cloc_exclude`` entry of the manifest:

.. code-block:: python

    "cloc_exclude": [
        "lib/common.py", # exclude a single file
        "data/*.xml",    # exclude all XML files in a specific folder
        "example/**/*",  # exclude all files in a folder hierarchy recursively
        "**/*.scss",     # exclude all scss file from the module
    ]

| The pattern ``**/*`` can be used to ignore an entire module. This can be useful
  to exclude a module from maintenance service costs.
| For more information about the pattern syntax, see `glob
  <https://docs.python.org/3/library/pathlib.html#pathlib.Path.glob>`_.

.. _reference/cmdline/cloc/path-option:

With the :option:`--path` option
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This method works the same as with the :ref:`--database option
<reference/cmdline/cloc/database-option>` if a manifest file is present in the given
folder. Otherwise, it counts all files.


Identifying Extra Modules
-------------------------

To distinguish between standard and extra modules, Odoo Cloc uses the following heuristic:
modules that are located (real file system path, after following symbolic links)
in the same parent directory as the ``base``, ``web`` or ``web_enterprise``
standard modules are considered standard. Other modules are treated as extra modules.


Error Handling
--------------

Some file cannot be counted by Odoo Cloc.
Those file are reported at the end of the output.

Max file size exceeded
~~~~~~~~~~~~~~~~~~~~~~

Odoo Cloc rejects any file larger than 25MB. Usually, source files are smaller
than 1 MB. If a file is rejected, it may be:

- A generated XML file that contains lots of data. It should be excluded in the manifest.
- A JavaScript library that should be placed in the :file:`static/lib` folder.

Syntax Error
~~~~~~~~~~~~

Odoo Cloc cannot count the lines of code of a Python file with a syntax problem.
If an extra module contains such files, they should be fixed to allow the module to
load. If the module works despite the presence of those files, they are probably
not loaded and should therefore be removed from the module, or at least excluded
in the manifest via ``cloc_exclude``.

TSConfig Generator
==================

.. program:: odoo-bin tsconfig

When working on javascript, there are ways to help your editor providing you with
powerful auto-completion. One of those ways is the use of a tsconfig.json file.
Originally meant for typescript, editors can use its information with plain javascript also.
With this config file, you will now have full auto-completion across modules.

The command to generate this files takes as many unnamed arguments as you need. Those are relative paths
to your addon directories. In the example below, we move up one folder to save the tsconfig file in the folder
containing community and enterprise.

.. code-block:: console

   $ community/odoo-bin tsconfig --addons-path community/addons,community/odoo/addons,enterprise > tsconfig.json
