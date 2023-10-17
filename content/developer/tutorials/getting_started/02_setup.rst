========================================
Chapter 2: Development environment setup
========================================

Depending on the intended use case, there are multiple ways to install Odoo. For developers of the
Odoo community and Odoo employees alike, the preferred way is to perform a source install
(:dfn:`running Odoo from the source code`).

Prepare the environment
=======================

First, follow the :ref:`contributing/development/setup` section of the contributing guide to prepare
your environment.

.. important::
   The following steps are intended only for Odoo employees. The mentioned repositories are not
   accessible to third parties.

By now, you should have downloaded the source code into two local repositories, one for `odoo/odoo`
and one for `odoo/enterprise`. These repositories are set up to push changes to pre-defined shared
forks on GitHub. This will prove to be convenient when you start contributing to the codebase, but
for the scope of this tutorial, we want to avoid polluting the shared repositories with training
material. Let's then develop your own module in a third repository `technical-training-sandbox`.
Like the first two repositories, it will be part of the `addons-path` that references all
directories containing Odoo modules.

#. Following the same process as with the `odoo/odoo` and `odoo/enterprise` repositories, visit
   `github.com/odoo/technical-training-sandbox
   <https://github.com/odoo/technical-training-sandbox>`_ and click the :guilabel:`Fork` button to
   create a fork of the repository under your account.
#. Clone the repository on your machine with:

   .. code-block:: console

      $ git clone git@github.com:odoo/technical-training-sandbox.git

#. Configure the repository to push changes to your fork:

   .. code-block:: console

      $ cd technical-training-sandbox/
      $ git remote add dev git@github.com:<your_github_account>/technical-training-sandbox.git
      $ git remote set-url --push origin you_should_not_push_on_this_repository

That's it! Your environment is now prepared to run Odoo from the sources, and you have successfully
created a repository to serve as an addons directory. This will allow you to push your work to
GitHub.

Now, make a small change in the `technical-training-sandbox` repository, such as updating the
:file:`README.md` file. Then, follow the :ref:`contributing/development/first-contribution` section
of the contributing guide to push your changes to GitHub and create a :abbr:`PR (Pull Request)`.
This will enable you to share your upcoming work and receive feedback. Adjust the instructions to
use the branch `master` and the repository `technical-training-sandbox`.

To ensure a continuous feedback loop, we recommend pushing a new commit as soon as you reach a new
milestone, such as completing a chapter of the tutorial.

.. note::
   The specific location of the repositories on your file system is not crucial. However, for the
   sake of simplicity, we will assume that you have cloned all the repositories under the same
   directory. If this is not the case, make sure to adjust the following commands accordingly,
   providing the appropriate relative path from the `odoo/odoo` repository to the
   `odoo/technical-training-sandbox` repository.

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

.. note::
   For now you cannot add `../technical-training-sandbox` to your `addons-path` as it is empty
   and will result into an invalid addons-path folder error, but you will have to add it back later on !

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
     $ git switch {BRANCH}

     $ cd $HOME/src/enterprise
     $ git switch {BRANCH}

- Fetch and rebase:

  .. code-block:: console

     $ cd $HOME/src/odoo
     $ git fetch --all --prune
     $ git rebase --autostash odoo/{BRANCH}

     $ cd $HOME/src/enterprise
     $ git fetch --all --prune
     $ git rebase --autostash enterprise/{BRANCH}

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
----------------------------------

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

Now that your server is running, it's time to start :ref:`writing your own application
<tutorials/getting_started/03_newapp>`!
