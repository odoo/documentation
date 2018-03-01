:banner: banners/odoo-sh.jpg

==================================
Containers
==================================

Overview
========

Each build is isolated within its own container (Linux namespaced container).

The base is an Ubuntu 16.04 system, where are installed all required Odoo dependencies
as well as common useful packages.

The Odoo.sh team is open to install any system packages
as long as they are distributed by the official Ubuntu repositories.
`Leave us a feedback <https://www.odoo.sh/feedback>`_ if you would like a package which is not yet installed.

If your project requires Python dependencies not installed by default in the container, or more recent releases,
you can define a *requirements.txt* file, listing your Python modules dependencies,
in the root of your branches. The platform will take care to install these dependencies in your containers.
`The pip requirements specifiers <https://pip.pypa.io/en/stable/reference/pip_install/#requirement-specifiers>`_
documentation can help you to know how to write a `requirements.txt` file.
To have a concrete example,
check out the `requirements.txt file of Odoo <https://github.com/odoo/odoo/blob/11.0/requirements.txt>`_.

Directory structure
===================

As the containers are Ubuntu based, their directory structure follows the linux Filesystem Hierarchy Standard.
`Ubuntu's filesystem tree overview <https://help.ubuntu.com/community/LinuxFilesystemTreeOverview#Main_directories>`_
explains the main directories.

The Odoo.sh pertinent directories are presented in the below list:

::

  .
  ├── home
      └── odoo
          ├── src
          │   ├── odoo           Odoo Community source code
          │   ├── enterprise     Odoo Enterprise source code
          │   ├── themes         Odoo Themes source code
          │   └── user           source code of your repository branch associated to the build
          ├── data
          │   ├── filestore      the database attachments, as well as the files of binary fields
          │   └── sessions       the visitors and users sessions
          └── logs
              ├── install.log    Database installation logs
              ├── odoo.log       Running server logs
              └── update.log     Database updates logs
              └── pip.log        Python packages installation logs
