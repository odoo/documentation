========================================
Chapter 2: Development environment setup
========================================

Depending on the intended use case, there are multiple ways to install Odoo. This tutorial will
stick to the :ref:`source install <setup/install/source>` (:dfn:`running Odoo from the source
code`), which is best suited for Odoo developers.

Throughout this document, we assume that you are installing your development environment on a
laptop provided by Odoo with Linux Mint installed and up-to-date. If that is not the case, switch to
the :guilabel:`Windows` or :guilabel:`Mac OS` tab if any section of the installation guide,
depending on which OS you are on. The steps remain essentially the same.

Set up Git
==========

Install and configure Git
-------------------------

The very first step of the installation process is to install the `Git version control system
<https://git-scm.com/>`_ because the Odoo source code is managed on `GitHub <https://github.com/>`_.

.. code-block:: console

   $ sudo apt install git

.. tip::
   Check if Git is installed by trying to print Git's version with the following command:

   .. code-block:: console

      $ git --version

Once installed, register your name and email:

.. code-block:: console

   $ git config --global user.name "Your full name (trigram)"
   $ git config --global user.email "xyz@odoo.com"

Configure GitHub
----------------

You need a GitHub account to fetch the sources and contribute to Odoo's development. If you don't
have one yet, create it. For the username, we recommend using your trigram "xyz" (or quadrigam)
followed by '-odoo': 'xyz-odoo'.

The easiest way to authenticate with GitHub is to use an SSH connection. Using SSH authentication
allows you to connect to GitHub without supplying your username and password every time you type a
command.

.. note::
   The following step-by-step procedure is based based on the `official GitHub documentation
   <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>`_.

#. Generate a new SSH key, add it to the ssh-agent, and copy the SSH key to your clipboard.

   .. code-block:: console

      $ ssh-keygen -t ed25519 -C "xyz@odoo.com"
      $ ssh-add ~/.ssh/id_ed25519
      $ sudo apt install xclip
      $ xclip -sel clip < ~/.ssh/id_ed25519.pub

#. Go to `GitHub.com <https://github.com/>`_, then click on your profile picture in the upper-right
   corner of the page and then on :guilabel:`Settings`.

   .. image:: 02_setup/account-settings.png

#. On the user settings sidebar, click on :guilabel:`SSH and GPG keys`.

   .. image:: 02_setup/settings-sidebar-ssh-keys.png

#. Click on :guilabel:`New SSH key` or on :guilabel:`Add SSH key`.

   .. image:: 02_setup/ssh-add-ssh-key.png

#. In the :guilabel:`Title` field, add a descriptive label for the new key.
#. Paste your key into the :guilabel:`Key` field.

   .. image:: 02_setup/ssh-key-paste.png

#. Click on :guilabel:`Add SSH key`.

Fetch the sources
=================

It is time to fetch the source code of Odoo. First, let's create a home for the Git repositories in
:file:`$HOME/src/`.

.. code-block:: console

   $ mkdir -p $HOME/src
   $ cd $HOME/src

Then, clone the two repositories with SSH as explained in the :ref:`Installing Odoo guide
<setup/install/source/git>`.

.. tip::
   Cloning the repositories will take a while, enjoy a cup of coffee while you wait.

.. _howto/rdtraining/02_setup/development_repository:

Configure the Git repositories
==============================

To contribute to an Odoo repository, you first need to `fork it
<https://docs.github.com/en/get-started/quickstart/contributing-to-projects>`_, then create a branch
containing your changes on the fork, and finally submit a `Pull Request
<https://docs.github.com/en/get-started/quickstart/github-glossary#pull-request>`_ to the
repository.

.. tip::
   If you are lucky enough to work at Odoo, the forks already exist. They are hosted on
   https://github.com/odoo-dev/odoo and https://github.com/odoo-dev/enterprise.

After your two forks are created, their remote address can be added in your local repositories. In
the commands below, replace `odoo-dev/odoo` and `odoo-dev/enterprise` with the name of your forks if
needed.

.. code-block:: console

   $ cd  $HOME/src/odoo
   $ git remote add odoo-dev git@github.com:odoo-dev/odoo.git  # Add odoo-dev as a new remote.
   $ git remote rename origin odoo  # Change the name of origin (the odoo repository) to odoo.
   $ git remote set-url --push odoo no_push  # Remove the possibility to push directly to odoo (you can only push to odoo-dev).

   $ cd  $HOME/src/enterprise
   $ git remote add enterprise-dev git@github.com:odoo-dev/enterprise.git
   $ git remote rename origin enterprise
   $ git remote set-url --push enterprise no_push

Install the dependencies
========================

As seen in :ref:`howto/rdtraining/01_architecture`, Odoo's server runs on Python and uses PostgreSQL
as an RDBMS. In the context of a development machine, the easiest approach is to install everything
locally. To do so, follow once again the :ref:`Installing Odoo guide
<setup/install/source/prepare>`.

.. tip::
   Some useful SQL commands:

   .. code-block:: console

      $ createdb $DB_NAME  # Create a database.
      $ dropdb $DB_NAME  # Drop a database.

      $ psql $DB_NAME  # Connect to a database.
          \l  #List all the available databases.
          \dt  #List all the tables of the $DB_NAME database.
          \d $TABLE_NAME  #Show the structure of the table $TABLE_NAME.
          \q  #Quit the psql environment (ctrl + d).

Run the server
==============

Launch with `odoo-bin`
----------------------

Once all dependencies are set up, Odoo can be launched by running `odoo-bin`, the command-line
interface of the server.

.. code-block:: console

    $ cd $HOME/src/odoo/
    $ ./odoo-bin --addons-path="addons/,../enterprise/" -d rd-demo

There are multiple :ref:`command-line arguments <reference/cmdline/server>` that you can use to run
the server. In this training you will only need some of them.

.. option:: -d <database>

   The database that is going to be used.

.. option:: --addons-path <directories>

   A comma-separated list of directories in which modules are stored. These directories are scanned
   for modules.

.. option:: --limit-time-cpu <limit>

   Prevent the worker from using more than <limit> CPU seconds for each request.

.. option:: --limit-time-real <limit>

   Prevent the worker from taking longer than <limit> seconds to process a request.

.. tip::
   - The :option:`--limit-time-cpu` and :option:`--limit-time-real` arguments can be used to prevent
     the worker from being killed when debugging the source code.
   - | You may face an error similar to `AttributeError: module '<MODULE_NAME>' has no attribute
       '<$ATTRIBUTE'>`. In this case, you may need to re-install the module with :command:`$ pip
       install --upgrade --force-reinstall <MODULE_NAME>`.
     | If this error occurs with more than one module, you may need to re-install all the
       requirements with :command:`$ pip install --upgrade --force-reinstall -r requirements.txt`.
     | You can also clear the python cache to solve the issue:

       .. code-block:: console

          $ cd $HOME/.local/lib/python3.8/site-packages/
          $ find -name '*.pyc' -type f -delete

   - Other commonly used arguments are:

     - :option:`-i <odoo-bin --init>`: Install some modules before running the server
       (comma-separated list).
     - :option:`-u <odoo-bin --update>`: Update some modules before running the server
       (comma-separated list).

Log in to Odoo
--------------

Open http://localhost:8069/ on your browser. We recommend using `Chrome
<https://www.google.com/intl/en/chrome/>`_, `Firefox <https://www.mozilla.org/firefox/new/>`_, or
any other browser with development tools.

To log in as the administrator user, use the following credentials:

- email: `admin`
- password: `admin`

Enable the developer mode
=========================

The developer or debug mode is useful for training as it gives access to additional (advanced)
tools. In the next chapters, **we will always assume that you have enabled the developer mode**.

:ref:`Enable the developer mode <developer-mode>` now. Choose the method that you prefer; they are
all equivalent.

.. note::
   The main page of the Settings screen is only accessible if at least one application is installed.
   You will be led into installing your own application in the next chapter.

Extra tools
===========

Useful Git commands
-------------------

Here are some useful Git commands for your day-to-day work.

- | Switch branches:
  | When you switch branches, both repositories (odoo and enterprise) must be synchronized, i.e.
    both need to be in the same branch.

  .. code-block:: console

     $ cd $HOME/src/odoo
     $ git switch master

     $ cd $HOME/src/enterprise
     $ git switch master

- Fetch and rebase:

  .. code-block:: console

     $ cd $HOME/src/odoo
     $ git fetch --all --prune
     $ git rebase --autostash odoo/master

     $ cd $HOME/src/enterprise
     $ git fetch --all --prune
     $ git rebase --autostash enterprise/master

Code Editor
-----------

If you are working at Odoo, many of your colleagues are using `VSCode
<https://code.visualstudio.com>`_, `VSCodium <https://vscodium.com>`_ (the open source equivalent),
`PyCharm <https://www.jetbrains.com/pycharm/download/#section=linux>`_, or `Sublime Text
<https://www.sublimetext.com>`_. However, you are free to choose your preferred editor.

It is important to configure your linters correctly. Using a linter helps you by showing syntax and
semantic warnings or errors. Odoo source code tries to respect Python's and JavaScript's standards,
but some of them can be ignored.

For Python, we use PEP8 with these options ignored:

- `E501`: line too long
- `E301`: expected 1 blank line, found 0
- `E302`: expected 2 blank lines, found 1

For JavaScript, we use ESLint and you can find a `configuration file example here
<https://github.com/odoo/odoo/wiki/Javascript-coding-guidelines#use-a-linter>`_.

Administrator tools for PostgreSQL
-----------------------------------

You can manage your PostgreSQL databases using the command line as demonstrated earlier or using
a GUI application such as `pgAdmin <https://www.pgadmin.org/download/pgadmin-4-apt/>`_ or `DBeaver
<https://dbeaver.io/>`_.

To connect the GUI application to your database we recommend you connect using the Unix socket.

- Host name/address: `/var/run/postgresql`
- Port: `5432`
- Username: `$USER`

Python Debugging
----------------

When facing a bug or trying to understand how the code works, simply printing things out can go a
long way, but a proper debugger can save a lot of time.

You can use a classic Python library debugger (`pdb <https://docs.python.org/3/library/pdb.html>`_,
`pudb <https://pypi.org/project/pudb/>`_ or `ipdb <https://pypi.org/project/ipdb/>`_), or you can
use your editor's debugger.

In the following example we use ipdb, but the process is similar with other libraries.

#. Install the library:

   .. code-block:: console

      pip install ipdb

#. Place a trigger (breakpoint):

   .. code-block:: python

      import ipdb; ipdb.set_trace()

   .. example::

      .. code-block:: python
         :emphasize-lines: 2

         def copy(self, default=None):
             import ipdb; ipdb.set_trace()
             self.ensure_one()
             chosen_name = default.get('name') if default else ''
             new_name = chosen_name or _('%s (copy)') % self.name
             default = dict(default or {}, name=new_name)
             return super(Partner, self).copy(default)

Here is a list of commands:

.. option:: h(elp) [command]

   Print the list of available commands if not argument is supplied. With a command as an argument,
   print the help about that command.

.. option:: pp expression

   The value of the `expression` is pretty-printed using the `pprint` module.

.. option:: w(here)

   Print a stack trace with the most recent frame at the bottom.

.. option:: d(own)

   Move the current frame one level down in the stack trace (to a newer frame).

.. option:: u(p)

   Move the current frame one level up in the stack trace (to an older frame).

.. option:: n(ext)

   Continue the execution until the next line in the current function is reached or it returns.

.. option:: c(ontinue)

   Continue the execution and only stop when a breakpoint is encountered.

.. option:: s(tep)

   Execute the current line. Stop at the first possible occasion (either in a function that is
   called or on the next line in the current function).

.. option:: q(uit)

   Quit the debugger. The program being executed is aborted.

----

Now that your server is running, it's time to start :ref:`writing your own application
<howto/rdtraining/03_newapp>`!
