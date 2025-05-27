===========
Setup guide
===========

Depending on the intended use case, there are multiple ways to install Odoo. For developers of the
Odoo community and Odoo employees alike, the preferred way is to perform a source install
(:dfn:`running Odoo from the source code`).

.. important::
   Follow the :ref:`contributing/development/setup` section of the contributing guide to prepare
   your environment for pushing local changes to the Odoo repositories.

.. _tutorials/setup_guide/adapt_env:

Adapt the environment to the tutorials
======================================

By now, you should have downloaded the source code into two local repositories, one for `odoo/odoo`
and one for `odoo/enterprise`. These repositories are set up to push changes to pre-defined
forks on GitHub. This will prove to be convenient when you start contributing to the codebase, but
in the scope of following a tutorial, we want to avoid polluting them with training material. Let's
then push your changes in a third repository: `odoo/tutorials`. Like the first two repositories, it
will be part of the `addons-path` that references all directories containing Odoo modules.

.. note::
   Depending on the tutorial that you are following, you might not need to install all the modules
   that this repository contains.

#. Following the same process as with the `odoo/odoo` and `odoo/enterprise` repositories, clone
   the `odoo/tutorials` repository on your machine with:

   .. code-block:: console

      $ git clone --branch {BRANCH} --single-branch git@github.com:odoo/tutorials.git

#. Configure your fork and Git to push changes to your fork rather than to the main codebase. If you
   work at Odoo, configure Git to push changes to the shared fork created on the account
   **odoo-dev**.

   .. tabs::

      .. tab:: Link Git with your fork

         #. Visit `github.com/odoo/tutorials <https://github.com/odoo/tutorials>`_ and click the
            :guilabel:`Fork` button to create a fork of the repository on your account.

         #. In the command below, replace `<your_github_account>` with the name of the GitHub
            account on which you created the fork.

            .. code-block:: console

               $ cd /TutorialsPath
               $ git remote add dev git@github.com:<your_github_account>/tutorials.git

      .. tab:: Link Git with odoo-dev

         .. code-block:: console

            $ cd /tutorials
            $ git remote add dev git@github.com:odoo-dev/tutorials.git
            $ git remote set-url --push origin you_should_not_push_on_this_repository

That's it! Your environment is now prepared to run Odoo from the sources, and you have successfully
created a local repository to serve as an addons directory. This will allow you to push your work to
GitHub.

.. important::
   **For Odoo employees only:**

   #. Make sure to read very carefully :ref:`contributing/development/first-contribution`. In
      particular:

      - Your code must follow the :doc:`guidelines </contributing/development/coding_guidelines>`.
      - Your commit messages must be :doc:`correctly written
        </contributing/development/git_guidelines>`.
      - Your branch name must follow our conventions.

   #. Once you have pushed your first change to the shared fork on **odoo-dev**, create a **draft**
      :abbr:`PR (Pull Request)` with your quadrigram in the title. This will enable you to share
      your upcoming work and receive feedback from your coaches. To ensure a continuous feedback
      loop, push a new commit as soon as you complete an exercise of a tutorial.
   #. At Odoo we use `Runbot <https://runbot.odoo.com>`_ extensively for our :abbr:`CI (Continuous
      Integration)` tests. When you push your changes to **odoo-dev**, Runbot creates a new build
      and tests your code. Once logged in, you will be able to see your branch on the `Tutorials
      project <https://runbot.odoo.com/runbot/tutorials-12>`_.

.. note::
   The specific location of the repositories on your file system is not crucial. However, for the
   sake of simplicity, we will assume that you have cloned all the repositories under the same
   directory. If this is not the case, make sure to adjust the following commands accordingly,
   providing the appropriate relative path from the `odoo/odoo` repository to the
   `odoo/tutorials` repository.

.. _tutorials/setup_guide/start_server:

Start the server
================

Once all dependencies are set up, Odoo can be launched by running `odoo-bin`, the command-line
interface of the server, and passing the comma-separated list of repositories with the `addons-path`
argument. If you have access to the `odoo/enterprise` repository, add it to the `addons-path`.

.. tabs::

   .. tab:: Run the community edition

      .. code-block:: console

         $ cd $HOME/src/odoo/
         $ ./odoo-bin --addons-path="addons/,../tutorials" -d tutorials

   .. tab:: Run the enterprise edition

      .. code-block:: console

         $ cd $HOME/src/odoo/
         $ ./odoo-bin --addons-path="addons/,../enterprise/,../tutorials" -d tutorials

There are multiple :ref:`command-line arguments <reference/cmdline/server>` that you can use to run
the server. In this training you will only need some of them.

.. option:: -d <database>

   The database to use.

.. option:: --addons-path <directories>

   A comma-separated list of directories in which modules are stored. These directories are scanned
   for modules.

.. option:: --limit-time-cpu <limit>

   Prevent the worker from using more than `<limit>` CPU seconds for each request.

.. option:: --limit-time-real <limit>

   Prevent the worker from taking longer than `<limit>` seconds to process a request.

.. tip::
   - The :option:`--limit-time-cpu` and :option:`--limit-time-real` arguments can be used to prevent
     the worker from being killed when debugging the source code.
   - Other commonly used arguments are:

     - :option:`-i <odoo-bin --init>`: Install some modules before running the server
       (comma-separated list). This is equivalent to going to :guilabel:`Apps` in the user interface
       and installing the module from there.
     - :option:`-u <odoo-bin --update>`: Update some modules before running the server
       (comma-separated list). This is equivalent to going to :guilabel:`Apps` in the user interface
       and updating the module from there.

.. _tutorials/setup_guide/log_in:

Log in to Odoo
==============

Open http://localhost:8069/ in your browser. We recommend using `Chrome
<https://www.google.com/intl/en/chrome/>`_, `Firefox <https://www.mozilla.org/firefox/new/>`_, or
any other browser with development tools.

To log in as the administrator user, use the following credentials:

- Email: `admin`
- Password: `admin`

.. _tutorials/setup_guide/extra_tools:

Extra tools
===========

.. _tutorials/setup_guide/extra_tools/dev_mode:

Developer mode
--------------

:ref:`Enable the developer mode <developer-mode>` to get access to developer-oriented tools in the
interface.

.. _tutorials/setup_guide/extra_tools/git_commands:

Useful Git commands
-------------------

Here are some useful Git commands for your day-to-day work.

- Switch branches:

  .. code-block:: console

     $ cd $HOME/src/odoo
     $ git switch {BRANCH}

     $ cd $HOME/src/enterprise
     $ git switch {BRANCH}

  .. important::
     When you switch branches, both repositories (odoo and enterprise) must be synchronized, i.e.
     both need to be in the same branch.

- Fetch and rebase:

  .. code-block:: console

     $ cd $HOME/src/odoo
     $ git fetch --all --prune
     $ git rebase --autostash odoo/{BRANCH}

     $ cd $HOME/src/enterprise
     $ git fetch --all --prune
     $ git rebase --autostash enterprise/{BRANCH}

.. _tutorials/setup_guide/extra_tools/code_editor:

Code editor
-----------

You are free to choose your code preferred editor. Most Odoo developers use `VSCode
<https://code.visualstudio.com>`_, `VSCodium <https://vscodium.com>`_ (the open source equivalent),
`PyCharm <https://www.jetbrains.com/pycharm/download/#section=linux>`_, or `Sublime Text
<https://www.sublimetext.com>`_.

It is important to configure your linters correctly. Using a linter helps you by showing syntax and
semantic warnings or errors. For JavaScript, we use ESLint and you can find a `configuration file
example here <https://github.com/odoo/odoo/wiki/Javascript-coding-guidelines#use-a-linter>`_.

.. _tutorials/setup_guide/extra_tools/psql_tools:

Administrator tools for PostgreSQL
----------------------------------

You can manage your PostgreSQL databases using the command line or a GUI application such as
`pgAdmin <https://www.pgadmin.org/download/pgadmin-4-apt/>`_ or `DBeaver <https://dbeaver.io/>`_.

We recommend you connect the GUI application to your database using the Unix socket.

- Host name/address: `/var/run/postgresql`
- Port: `5432`
- Username: `$USER`

.. _tutorials/setup_guide/extra_tools/python_debugging:

Python debugging
----------------

When facing a bug or trying to understand how the code works, simply printing things out can help a
lot, but a proper debugger can save a lot of time.

You can use your editor's debugger, or a classic Python library debugger (`pdb
<https://docs.python.org/3/library/pdb.html>`_, `pudb <https://pypi.org/project/pudb/>`_, or `ipdb
<https://pypi.org/project/ipdb/>`_).

In the following example, we use ipdb, but the process is similar to other libraries.

#. Install the library:

   .. code-block:: console

      $ pip install ipdb

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
