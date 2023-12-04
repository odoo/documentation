===================
Packaged installers
===================

Odoo provides packaged installers for Debian-based Linux distributions (Debian, Ubuntu, etc.),
RPM-based Linux distributions (Fedora, CentOS, RHEL, etc.), and Windows for the Community and
Enterprise editions.

Official **Community** nightly packages with all relevant dependency requirements are available on
the `nightly server <https://nightly.odoo.com>`_.

.. note::
   Nightly packages may be difficult to keep up to date.

Official **Community** and **Enterprise** packages can be downloaded from the `Odoo download page
<https://www.odoo.com/page/download>`_.

.. note::
   It is required to be logged in as a paying customer or partner to download the Enterprise
   packages.

.. _install/packages/linux:

Linux
=====

Prepare
-------

Odoo needs a `PostgreSQL <https://www.postgresql.org/>`_ server to run properly.

.. tabs::

   .. group-tab:: Debian/Ubuntu

      The default configuration for the Odoo 'deb' package is to use the PostgreSQL server on the
      same host as the Odoo instance. Execute the following command to install the PostgreSQL
      server:

      .. code-block:: console

         $ sudo apt install postgresql -y

   .. group-tab:: Fedora

      Make sure that the `sudo` command is available and well configured and, only then, execute the
      following command to install the PostgreSQL server:

      .. code-block:: console

         $ sudo dnf install -y postgresql-server
         $ sudo postgresql-setup --initdb --unit postgresql
         $ sudo systemctl enable postgresql
         $ sudo systemctl start postgresql

.. warning::
   `wkhtmltopdf` is not installed through **pip** and must be installed manually in `version 0.12.6
   <https://github.com/wkhtmltopdf/packaging/releases/tag/0.12.6.1-3>`_ for it to support headers
   and footers. Check out the `wkhtmltopdf wiki <https://github.com/odoo/odoo/wiki/Wkhtmltopdf>`_
   for more details on the various versions.

Repository
----------

Odoo S.A. provides a repository that can be used to install the **Community** edition by executing
the following commands:

.. tabs::

   .. group-tab:: Debian/Ubuntu

      .. code-block:: console

         $ wget -q -O - https://nightly.odoo.com/odoo.key | sudo gpg --dearmor -o /usr/share/keyrings/odoo-archive-keyring.gpg
         $ echo 'deb [signed-by=/usr/share/keyrings/odoo-archive-keyring.gpg] https://nightly.odoo.com/{CURRENT_MAJOR_BRANCH}/nightly/deb/ ./' | sudo tee /etc/apt/sources.list.d/odoo.list
         $ sudo apt-get update && sudo apt-get install odoo

      Use the usual `apt-get upgrade` command to keep the installation up-to-date.

   .. group-tab:: Fedora

      .. code-block:: console

         $ sudo dnf config-manager --add-repo=https://nightly.odoo.com/{CURRENT_MAJOR_BRANCH}/nightly/rpm/odoo.repo
         $ sudo dnf install -y odoo
         $ sudo systemctl enable odoo
         $ sudo systemctl start odoo

.. note::
   Currently, there is no nightly repository for the Enterprise edition.

Distribution package
--------------------

Instead of using the repository, packages for both the **Community** and **Enterprise** editions can
be downloaded from the `Odoo download page <https://www.odoo.com/page/download>`_.

.. tabs::

   .. group-tab:: Debian/Ubuntu

      .. note::
         Odoo {CURRENT_MAJOR_VERSION} 'deb' package currently supports `Debian Buster
         <https://www.debian.org/releases/buster/>`_ and `Ubuntu 18.04
         <https://releases.ubuntu.com/18.04>`_ or above.

      Once downloaded, execute the following commands **as root** to install Odoo as a service,
      create the necessary PostgreSQL user, and automatically start the server:

      .. code-block:: console

         # dpkg -i <path_to_installation_package> # this probably fails with missing dependencies
         # apt-get install -f # should install the missing dependencies
         # dpkg -i <path_to_installation_package>

      .. warning::
         - The `python3-xlwt` Debian package, needed to export into the XLS format, does not exist
           in Debian Buster nor Ubuntu 18.04. If needed, install it manually with the following:

           .. code-block:: console

              $ sudo pip3 install xlwt

         - The `num2words` Python package - needed to render textual amounts - does not exist in
           Debian Buster nor Ubuntu 18.04, which could cause problems with the `l10n_mx_edi` module.
           If needed, install it manually with the following:

           .. code-block:: console

              $ sudo pip3 install num2words

   .. group-tab:: Fedora

      .. note::
         Odoo {CURRENT_MAJOR_VERSION} 'rpm' package supports Fedora 36.

      Once downloaded, the package can be installed using the 'dnf' package manager:

      .. code-block:: console

         $ sudo dnf localinstall odoo_{CURRENT_MAJOR_BRANCH}.latest.noarch.rpm
         $ sudo systemctl enable odoo
         $ sudo systemctl start odoo

.. _install/packages/windows:

Windows
=======

   .. warning::
      Windows packaging is offered for the convenience of testing or running single-user local
      instances but production deployment is discouraged due to a number of limitations and risks
      associated with deploying Odoo on a Windows platform.

#. Download the installer from the `nightly server <https://nightly.odoo.com>`_ (Community only) or
   the Windows installer from the `Odoo download page <https://www.odoo.com/page/download>`_ (any
   edition.
#. Execute the downloaded file.

   .. warning::
      On Windows 8 and later, a warning titled *Windows protected your PC* may be displayed. Click
      **More Info** and then **Run anyway** to proceed.

#. Accept the `UAC <https://en.wikipedia.org/wiki/User_Account_Control>`_ prompt.
#. Go through the installation steps.

Odoo launches automatically at the end of the installation.
