===============
Advanced topics
===============

This section covers advanced features of Odoo.sh related to :ref:`containers
<odoo-sh/advanced/containers>`, :ref:`Git submodules <odoo-sh/advanced/submodules>`, and
:ref:`scheduled actions <odoo-sh/advanced/scheduled>`.

.. _odoo-sh/advanced/containers:

Containers
==========

Each build is isolated in its own container (Linux namespace container). The base is an Ubuntu-based
system on which all of Odoo's required dependencies, as well as common, useful packages, are
installed.

If your project requires :ref:`additional Python dependencies <odoo-sh/module/library>` or more
recent releases, you can define a :file:`requirements.txt` file at the root of your branches that
lists them. The platform will ensure these dependencies are installed in your containers.

.. seealso::
   - For a concrete example, check out the Odoo Community `requirements.txt file
     <{GITHUB_PATH}/requirements.txt>`_.
   - `PyPA requirements specifiers documentation
     <https://pip.pypa.io/en/stable/reference/requirement-specifiers/>`_

.. note::
   The :file:`requirements.txt` files of :ref:`submodules <odoo-sh/advanced/submodules>` are also
   taken into account. The platform looks for such files in the parent folder of each folder
   containing an Odoo module.

.. _odoo-sh/advanced/containers/directory:

Directory structure
-------------------

As the containers are Ubuntu-based, their directory structure follows the `Filesystem Hierarchy
Standard <https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard>`_.

.. seealso::
   `Ubuntu main directories documentation <https://help.ubuntu.com/community/LinuxFilesystemTreeOverview#Main_directories>`_

The directories relevant to Odoo.sh are the following:

::

  .
  ├── home
  │    └── odoo
  │         ├── backup.daily
  │         ├── data
  │         │    ├── filestore           Database attachments, as well as the files of binary fields
  │         │    └── sessions            Visitors and users sessions
  │         ├── logs
  │         │    ├── install.log         Database installation logs
  │         │    ├── odoo.log            Running server logs
  │         │    ├── update.log          Database updates logs
  │         │    └── pip.log             Python packages installation logs
  │         └── src
  │              ├── odoo                Odoo Community source code
  │              │    └── odoo-bin       Odoo server executable
  │              ├── enterprise          Odoo Enterprise source code
  │              ├── themes              Odoo Themes source code
  │              └── user                Your repository branch source code
  └── usr
       ├── lib
       │    └── pythonX.XX
       │         └── dist-packages       Python X.XX standard libraries
       ├── local
       │    └── lib
       │         └── pythonX.XX
       │              └── dist-packages  Python X.XX third-party libraries
       └── usr
            └── bin
                 └── pythonX.X           Python X.XX executable

.. _odoo-sh/advanced/containers/database:

Database shell
--------------

While accessing a container with the shell, you can access the database using the `psql` command.

.. code-block:: bash

   odoo@odoo-master-1.odoo.sh:~$ psql
   psql (16.9)
   Type "help" for help.

   odoo-master-1=>

.. warning::
   Always use `transactions <https://www.postgresql.org/docs/current/static/sql-begin.html>`_ (e.g.,
   `BEGIN` (...) `COMMIT` / `ROLLBACK`) when an SQL statement leads to changes (e.g., `UPDATE`,
   `DELETE`, `ALTER`, etc.) , especially for your production database. The transaction mechanism is
   your safety net in case of a mistake. You simply have to rollback your changes to revert your
   database to its previous state.

   Do not forget to commit or roll back transactions. Open transactions may lock records in your
   tables, and a running database may wait for them to be released, causing a server to hang
   indefinitely.

   In addition, use your staging databases to test your statements first. It gives you an extra
   safety net.

   .. example::
      You forgot to set your `WHERE` condition. In such a case, you can rollback to revert the
      unwanted change:

      .. code-block:: sql

         odoo-master-1=> BEGIN;
         BEGIN
         odoo-master-1=> UPDATE res_users SET password = '***';
         UPDATE 457
         odoo-master-1=> ROLLBACK;
         ROLLBACK

      Then, rewrite the statement and commit the change:

      .. code-block:: sql

         odoo-master-1=> BEGIN;
         BEGIN
         odoo-master-1=> UPDATE res_users SET password = '***' WHERE id = 1;
         UPDATE 1
         odoo-master-1=> COMMIT;
         COMMIT

.. _odoo-sh/advanced/containers/server:

Run an Odoo server
------------------

You can start an Odoo server instance from a container shell. You won't be able to access it from
the outside world with a web browser, but you can, for example:

- Use the Odoo shell:

  .. code-block:: bash

     odoo-bin shell
     >>> partner = env['res.partner'].search([('email', '=', 'asusteK@yourcompany.example.com')], limit=1)
     >>> partner.name
     'ASUSTeK'
     >>> partner.name = 'Odoo'
     >>> env['res.partner'].search([('email', '=', 'asusteK@yourcompany.example.com')], limit=1).name
     'Odoo'

- Install a module:

  .. code-block:: bash

     odoo-bin -i sale --without-demo=all --stop-after-init

  .. tip::
     - The argument `--without-demo=all` prevents demo data from being loaded for all modules.
     - The argument `--stop-after-init` immediately shutdowns the server instance after the
       operation is completed.

- Update a module:

  .. code-block:: bash

     odoo-bin -u sale --stop-after-init

- Run the tests for a module:

  .. code-block:: bash

     odoo-bin -i sale --test-enable --log-level=test --stop-after-init

.. seealso::
   :doc:`CLI documentation </developer/reference/cli>`

To find the addons path used by Odoo.sh to run your server, look for "*odoo: addons paths*" in the
logs (:file:`~/logs/odoo.log`).

::

  2025-02-19 10:51:39,267 4 INFO ? odoo: Odoo version 18.0
  2025-02-19 10:51:39,268 4 INFO ? odoo: Using configuration file at /home/odoo/.config/odoo/odoo.conf
  2025-02-19 10:51:39,268 4 INFO ? odoo: addons paths: ['/home/odoo/data/addons/18.0', '/home/odoo/src/user', '/home/odoo/src/enterprise', '/home/odoo/src/themes', '/home/odoo/src/odoo/addons', '/home/odoo/src/odoo/odoo/addons']

.. warning::
   Operations you perform on an Odoo server instance are not isolated; changes will be reflected in
   the database. Remember to always carry out tests in your staging databases.

.. _odoo-sh/advanced/containers/debugging:

Debugging in Odoo.sh
--------------------

.. note::
   Debugging an Odoo.sh build is not really different from debugging another Python app. As such,
   the goal of this section is to cover the specificities and limitations of the Odoo.sh platform,
   and assumes that you already know how to use a debugger.

You can use `pdb`, `pudb`, or `ipdb` to debug code on Odoo.sh. Since the server runs outside a
shell, you cannot launch the debugger directly from your Odoo backend, as it requires a shell to
operate.

`pdb <https://docs.python.org/3/library/pdb.html>`_ is installed by default in every container.

.. tip::
   To use `pudb <https://pypi.org/project/pudb/>`_ or `ipdb <https://pypi.org/project/ipdb/>`_, it
   is necessary to install them either:

   - permanently by adding `pudb` or `ipdb` to your project's :file:`requirements.txt` file, or
   - temporarily (only in the current build) by running the relevant command:

     .. code-block:: bash

        pip install pudb --user

     .. code-block:: bash

        pip install ipdb --user

#. To trigger the debugger, add this to the code you want to debug:

   .. code-block:: python

      import sys
      if sys.__stdin__.isatty():
          import pdb; pdb.set_trace()

   .. note::
      The condition `sys.__stdin__.isatty()` is a workaround for detecting whether you are running
      Odoo from a shell.

#. Next, save the file and run the Odoo shell:

   .. code-block:: bash

      odoo-bin shell

#. Use the Odoo shell to trigger the code you want to debug.

   .. image:: advanced/pdb-sh.png
      :alt: pdb running in an Odoo.sh shell

.. _odoo-sh/advanced/submodules:

Submodules
==========

`Git submodules <https://git-scm.com/book/en/v2/Git-Tools-Submodules>`_ let you link external
repositories directly into your project without copy-pasting code, streamlining deployment by
cloning dependencies alongside your main codebase. You maintain precise version control by choosing
exact branches and pinning specific commit revisions to update whenever you choose.

On Odoo.sh, the platform automatically detects submodules and adds them to your addons path for
database installation, provided you :ref:`configure a deploy key in your project and repository
settings <odoo-sh/settings/submodules>` when integrating private repositories.

.. _odoo-sh/advanced/submodules/add:

Adding a submodule
------------------

.. tabs::

   .. tab:: With Odoo.sh

      .. note::
         Currently, it is not possible to add **private** repositories with Odoo.sh. You can
         nevertheless do so with Git.

      #. From the :doc:`Branches <getting_started/branches>` view of your Odoo.sh project, choose
         the branch in which you want to add a submodule.
      #. In the upper right corner, click :guilabel:`Submodule`, then :guilabel:`Run on Odoo.sh`.
      #. In the dialog box, fill in the following:

         - :guilabel:`Repository URL`: the SSH URL of the repository

            .. tip::
               On GitHub, click :guilabel:`Clone`, select :guilabel:`SSH`, and copy the URL.

               .. image:: advanced/submodule-sh-github-ssh.png
                  :alt:

         - :guilabel:`Branch`: the specific branch that should be used
         - :guilabel:`Path`: the folder in which the submodule should be added to in your branch

      .. image:: advanced/submodule-sh-add.png
         :alt:

   .. tab:: With Git (advanced)

      #. In a terminal, in the folder where your Git repository is cloned, checkout the branch in
         which you want to add a submodule:

         .. code-block:: bash

            git checkout <branch>

      #. Add the submodule:

         .. code-block:: bash

            git submodule add -b <branch> <git@yourprovider.com>:<username/repository.git> <path>

         - *<git@yourprovider.com>:<username/repository.git>*: the SSH URL of the repository you
           want to add as a submodule
         - *<branch>*: the branch you want to use in the above repository
         - *<path>*: the folder in which you want to add this submodule

      #. Commit and push the changes:

         .. code-block:: bash

            git commit -a && git push -u <remote> <branch>

         - *<remote>*: the repository on which you want to push your changes. On a standard Git
           setup, this is *origin*.
         - *<branch>*: the branch on which you want to push your changes. Most likely, the branch
           you checked out in the first step.

.. tip::
   When adding a repository that contains many modules, you may want to ignore some of them if any
   are installed automatically.  To do so, prefix your submodule folder with a :code:`.` (e.g.
   `.folder`). The platform will ignore this folder, and you can hand-pick the modules by creating
   `symbolic links <https://en.wikipedia.org/wiki/Symbolic_link>`_ to them from another folder.

.. _odoo-sh/advanced/scheduled:

Scheduled actions
=================

On the Odoo.sh platform, scheduled actions are implemented slightly differently from a regular Odoo
server and are run on a best-effort basis. This is because there might be multiple customers on the
same server, and each customer is guaranteed a fair share of the server's resources. Therefore, an
exact running time for scheduled actions cannot be guaranteed.

.. important::
   Do not expect any scheduled action to be run more often than every five minutes.

As the execution time of scheduled actions is limited, it is advised to ensure your scheduled
actions:

- Work on small batches of records.
- Commit their work after processing each batch so that if they are interrupted by the time limit,
  they do not need to start over.
- Are idempotent, i.e, they must not cause side effects if they are started more often than
  expected.
