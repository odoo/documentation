======
Source
======

The source 'installation' is not about installing Odoo but running it directly from the source
instead.

Using the Odoo source can be more convenient for module developers as it is more easily accessible
than using packaged installers.

It makes starting and stopping Odoo more flexible and explicit than the services set up by the
packaged installers. Also, it allows overriding settings using :ref:`command-line parameters
<reference/cmdline>` without needing to edit a configuration file.

Finally, it provides greater control over the system's setup and allows to more easily keep (and
run) multiple versions of Odoo side-by-side.

Fetch the sources
-----------------

There are two ways to obtain the source code of Odoo: as a ZIP **archive** or through **Git**.

Archive
~~~~~~~

Community edition:

- `Odoo download page <https://www.odoo.com/page/download>`_
- `GitHub Community repository <https://github.com/odoo/odoo>`_
- `Nightly server <https://nightly.odoo.com>`_

Enterprise edition:

- `Odoo download page <https://www.odoo.com/page/download>`_
- `GitHub Enterprise repository <https://github.com/odoo/enterprise>`_

.. _install/source/git:

Git
~~~

.. note::
   It is required to have `Git <https://git-scm.com/>`_ installed, and it is recommended to have a
   basic knowledge of Git commands to proceed.

To clone a Git repository, choose between cloning with HTTPS or SSH. In most cases, the best option
is HTTPS. However, choose SSH to contribute to Odoo source code or when following the :doc:`Getting
Started developer tutorial </developer/tutorials/getting_started>`.

.. tabs::

   .. group-tab:: Linux

      .. tabs::

         .. tab:: Clone with HTTPS

            .. code-block:: console

               $ git clone https://github.com/odoo/odoo.git
               $ git clone https://github.com/odoo/enterprise.git

         .. tab:: Clone with SSH

            .. code-block:: console

               $ git clone git@github.com:odoo/odoo.git
               $ git clone git@github.com:odoo/enterprise.git

   .. group-tab:: Windows

      .. tabs::

         .. tab:: Clone with HTTPS

            .. code-block:: doscon

               C:\> git clone https://github.com/odoo/odoo.git
               C:\> git clone https://github.com/odoo/enterprise.git

         .. tab:: Clone with SSH

            .. code-block:: doscon

               C:\> git clone git@github.com:odoo/odoo.git
               C:\> git clone git@github.com:odoo/enterprise.git

   .. group-tab:: Mac OS

      .. tabs::

         .. tab:: Clone with HTTPS

            .. code-block:: console

               $ git clone https://github.com/odoo/odoo.git
               $ git clone https://github.com/odoo/enterprise.git

         .. tab:: Clone with SSH

            .. code-block:: console

               $ git clone git@github.com:odoo/odoo.git
               $ git clone git@github.com:odoo/enterprise.git

.. note::
   **The Enterprise git repository does not contain the full Odoo source code**. It is only a
   collection of extra add-ons. The main server code is in the Community edition. Running the
   Enterprise version means running the server from the Community version with the `addons-path`
   option set to the folder with the Enterprise edition. It is required to clone both the Community
   and Enterprise repositories to have a working Odoo Enterprise installation.

.. _install/source/prepare:

Prepare
-------

Python
~~~~~~

Odoo requires **Python 3.10** or later to run.

.. versionchanged:: 17
    Minimum requirement updated from Python 3.7 to Python 3.10.


.. tabs::

   .. group-tab:: Linux

      Use a package manager to download and install Python 3 if needed.

   .. group-tab:: Windows

      `Download the latest version of Python 3 <https://www.python.org/downloads/windows/>`_ and
      install it.

      During installation, check **Add Python 3 to PATH**, then click **Customize Installation** and
      make sure that **pip** is checked.

   .. group-tab:: Mac OS

      Use a package manager (`Homebrew <https://brew.sh/>`_, `MacPorts <https://www.macports.org>`_)
      to download and install Python 3 if needed.

.. note::
   If Python 3 is already installed, make sure that the version is 3.7 or above, as previous
   versions are not compatible with Odoo.

   .. tabs::

      .. group-tab:: Linux

         .. code-block:: console

            $ python3 --version

      .. group-tab:: Windows

         .. code-block:: doscon

            C:\> python --version

      .. group-tab:: Mac OS

         .. code-block:: console

            $ python3 --version

   Verify that `pip <https://pip.pypa.io>`_ is also installed for this version.

   .. tabs::

      .. group-tab:: Linux

         .. code-block:: console

            $ pip3 --version

      .. group-tab:: Windows

         .. code-block:: doscon

            C:\> pip --version

      .. group-tab:: Mac OS

         .. code-block:: console

            $ pip3 --version

PostgreSQL
~~~~~~~~~~

Odoo uses PostgreSQL as its database management system.

.. tabs::

   .. group-tab:: Linux

      Use a package manager to download and install PostgreSQL (supported versions: 12.0 or above).
      It can be achieved by executing the following:

      .. code-block:: console

         $ sudo apt install postgresql postgresql-client

   .. group-tab:: Windows

      `Download PostgreSQL <https://www.postgresql.org/download/windows>`_ (supported versions: 12.0
      or above) and install it.

   .. group-tab:: Mac OS

      Use `Postgres.app <https://postgresapp.com>`_ to download and install PostgreSQL (supported
      version: 12.0 or above).

      .. tip::
         To make the command line tools bundled with Postgres.app available, make sure to set up the
         `$PATH` variable by following the `Postgres.app CLI tools instructions
         <https://postgresapp.com/documentation/cli-tools.html>`_.

By default, the only user is `postgres`. As Odoo forbids connecting as `postgres`, create a new
PostgreSQL user.

.. tabs::

   .. group-tab:: Linux

      .. code-block:: console

         $ sudo -u postgres createuser -d -R -S $USER
         $ createdb $USER

      .. note::
         Because the PostgreSQL user has the same name as the Unix login, it is possible to connect
         to the database without a password.

   .. group-tab:: Windows

      #. Add PostgreSQL's `bin` directory (by default:
         :file:`C:\\Program Files\\PostgreSQL\\<version>\\bin`) to the `PATH`.
      #. Create a postgres user with a password using the pg admin gui:

         #. Open **pgAdmin**.
         #. Double-click the server to create a connection.
         #. Select :menuselection:`Object --> Create --> Login/Group Role`.
         #. Enter the username in the **Role Name** field (e.g., `odoo`).
         #. Open the **Definition** tab, enter a password (e.g., `odoo`), and click **Save**.
         #. Open the **Privileges** tab and switch **Can login?** to `Yes` and **Create database?**
            to `Yes`.

   .. group-tab:: Mac OS

      .. code-block:: console

         $ sudo -u postgres createuser -d -R -S $USER
         $ createdb $USER

      .. note::
         Because the PostgreSQL user has the same name as the Unix login, it is possible to connect
         to the database without a password.

.. _install/dependencies:

Dependencies
~~~~~~~~~~~~

.. tabs::

   .. group-tab:: Linux

      Using **distribution packages** is the preferred way of installing dependencies.
      Alternatively, install the Python dependencies with **pip**.

      .. tabs::

         .. tab:: Debian/Ubuntu

            For Debian-based systems, the packages are listed in the `debian/control
            <{GITHUB_PATH}/debian/control>`_ file of the Odoo sources.

            On Debian/Ubuntu, the following commands should install the required packages:

            .. code-block:: console

               $ cd /CommunityPath
               $ sed -n -e '/^Depends:/,/^Pre/ s/ python3-\(.*\),/python3-\1/p' debian/control | sudo xargs apt-get install -y

         .. tab:: Install with pip

            As some of the Python packages need a compilation step, they require system libraries to
            be installed.

            On Debian/Ubuntu, the following command should install these required libraries:

            .. code-block:: console

               $ sudo apt install python3-pip libldap2-dev libpq-dev libsasl2-dev

            Odoo dependencies are listed in the :file:`requirements.txt` file located at the root of
            the Odoo Community directory.

            .. note::
               The Python packages in :file:`requirements.txt` are based on their stable/LTS
               Debian/Ubuntu corresponding version at the moment of the Odoo release. For example,
               for Odoo 15.0, the `python3-babel` package version is 2.8.0 in Debian Bullseye and
               2.6.0 in Ubuntu Focal. The lowest version is then chosen in the
               :file:`requirements.txt`.

            .. tip::
               It can be preferable not to mix Python module packages between different instances of
               Odoo or with the system. However, it is possible to use `virtualenv
               <https://pypi.org/project/virtualenv/>`_ to create isolated Python environments.

            Navigate to the path of the Odoo Community installation (:file:`CommunityPath`) and run
            **pip** on the requirements file to install the requirements for the current user.

            .. code-block:: console

               $ cd /CommunityPath
               $ pip install -r requirements.txt

   .. group-tab:: Windows

      Before installing the dependencies, download and install the `Build Tools for Visual
      Studio <https://visualstudio.microsoft.com/downloads/>`_. Select **C++ build tools** in the
      **Workloads** tab and install them when prompted.

      Odoo dependencies are listed in the `requirements.txt` file located at the root of the Odoo
      Community directory.

         .. tip::
            It can be preferable not to mix Python module packages between different instances of
            Odoo or with the system. However, it is possible to use `virtualenv
            <https://pypi.org/project/virtualenv/>`_ to create isolated Python environments.

      Navigate to the path of the Odoo Community installation (`CommunityPath`) and run **pip** on
      the requirements file in a terminal **with Administrator privileges**:

      .. code-block:: doscon

         C:\> cd \CommunityPath
         C:\> pip install setuptools wheel
         C:\> pip install -r requirements.txt

   .. group-tab:: Mac OS

      Odoo dependencies are listed in the `requirements.txt` file located at the root of the Odoo
      Community directory.

         .. tip::
            It can be preferable not to mix Python module packages between different instances of
            Odoo or with the system. However, it is possible to use `virtualenv
            <https://pypi.org/project/virtualenv/>`_ to create isolated Python environments.

      Navigate to the path of the Odoo Community installation (`CommunityPath`) and run **pip** on
      the requirements file:

      .. code-block:: console

         $ cd /CommunityPath
         $ pip3 install setuptools wheel
         $ pip3 install -r requirements.txt

      .. warning::
         Non-Python dependencies must be installed with a package manager (`Homebrew
         <https://brew.sh/>`_, `MacPorts <https://www.macports.org>`_).

         #. Download and install the **Command Line Tools**:

            .. code-block:: console

               $ xcode-select --install

         #. Use the package manager to install non-Python dependencies.

.. note::
   For languages using a **right-to-left interface** (such as Arabic or Hebrew), the `rtlcss`
   package is required.

   .. tabs::

      .. group-tab:: Linux

         #. Download and install **nodejs** and **npm** with a package manager.
         #. Install `rtlcss`:

            .. code-block:: console

               $ sudo npm install -g rtlcss

      .. group-tab:: Windows

         #. Download and install `nodejs <https://nodejs.org/en/download>`_.
         #. Install `rtlcss`:

            .. code-block:: doscon

               C:\> npm install -g rtlcss

         #. Edit the system environment's variable `PATH` to add the folder where `rtlcss.cmd` is
            located (typically: :file:`C:\\Users\\<user>\\AppData\\Roaming\\npm\\`).

      .. group-tab:: Mac OS

         #. Download and install **nodejs** with a package manager (`Homebrew <https://brew.sh/>`_,
            `MacPorts <https://www.macports.org>`_).
         #. Install `rtlcss`:

            .. code-block:: console

               $ sudo npm install -g rtlcss

.. warning::
   `wkhtmltopdf` is not installed through **pip** and must be installed manually in `version 0.12.6
   <https://github.com/wkhtmltopdf/packaging/releases/tag/0.12.6.1-3>`_ for it to support headers
   and footers. Check out the `wkhtmltopdf wiki <https://github.com/odoo/odoo/wiki/Wkhtmltopdf>`_
   for more details on the various versions.

.. _install/source/running_odoo:

Running Odoo
------------

Once all dependencies are set up, Odoo can be launched by running `odoo-bin`, the command-line
interface of the server. It is located at the root of the Odoo Community directory.

To configure the server, either specify :ref:`command-line arguments <reference/cmdline/server>` or
a :ref:`configuration file <reference/cmdline/config>`.

.. tip::
   For the Enterprise edition, add the path to the `enterprise` add-ons to the `addons-path`
   argument. Note that it must come before the other paths in `addons-path` for add-ons to be loaded
   correctly.

Common necessary configurations are:

- PostgreSQL user and password.
- Custom addon paths beyond the defaults to load custom modules.

A typical way to run the server would be:

.. tabs::

   .. group-tab:: Linux

      .. code-block:: console

         $ cd /CommunityPath
         $ python3 odoo-bin --addons-path=addons -d mydb

      Where `CommunityPath` is the path of the Odoo Community installation, and `mydb` is the name
      of the PostgreSQL database.

   .. group-tab:: Windows

      .. code-block:: doscon

         C:\> cd CommunityPath/
         C:\> python odoo-bin -r dbuser -w dbpassword --addons-path=addons -d mydb

      Where `CommunityPath` is the path of the Odoo Community installation, `dbuser` is the
      PostgreSQL login, `dbpassword` is the PostgreSQL password, and `mydb` is the name of the
      PostgreSQL database.

   .. group-tab:: Mac OS

      .. code-block:: console

         $ cd /CommunityPath
         $ python3 odoo-bin --addons-path=addons -d mydb

      Where `CommunityPath` is the path of the Odoo Community installation, and `mydb` is the name
      of the PostgreSQL database.

After the server has started (the INFO log `odoo.modules.loading: Modules loaded.` is printed), open
http://localhost:8069 in a web browser and log into the Odoo database with the base administrator
account: use `admin` as the email and, again, `admin` as the password.

.. tip::
   - From there, create and manage new :doc:`users <../../applications/general/users/manage_users>`.
   - The user account used to log into Odoo's web interface differs from the :option:`--db_user
     <odoo-bin -r>` CLI argument.

.. seealso::
   :doc:`The list of CLI arguments for odoo-bin </developer/reference/cli>`
