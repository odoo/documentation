
================
Module Manifests
================



.. _reference/module/manifest:

Manifest
========

The manifest file serves to declare a python package as an Odoo module
and to specify module metadata.

It is a file called ``__manifest__.py`` and contains a single Python
dictionary, where each key specifies module metadatum.

::

    {
        'name': "A Module",
        'version': '1.0',
        'depends': ['base'],
        'author': "Author Name",
        'category': 'Category',
        'description': """
        Description text
        """,
        'data': [
            'views/module_view.xml',
        ],
        'demo': [
            'demo/demo_data.xml',
        ],
    }

Available manifest keys:

.. container:: d-flex justify-content-between pb-4

    .. container::

        * :ref:`application <application>`
        * :ref:`assets <assets>`
        * :ref:`author <author>`
        * :ref:`auto_install <auto_install>`
        * :ref:`category <category>`
        * :ref:`data <data>`
        * :ref:`demo <demo>`

    .. container::

        * :ref:`depends <depends>`
        * :ref:`description <description>`
        * :ref:`external_dependencies <external_dependencies>`
        * :ref:`installable <installable>`
        * :ref:`license <license>`
        * :ref:`maintainer <maintainer>`
        * :ref:`name <name>`

    .. container::

        * :ref:`post_init_hook <post_init_hook>`
        * :ref:`pre_init_hook <pre_init_hook>`
        * :ref:`uninstall_hook <uninstall_hook>`
        * :ref:`version <version>`
        * :ref:`website <website>`

.. _application:

**application**

.. container:: ps-3 pb-3

    :badge-primary:`bool` :badge-secondary:`default: False`

    Specifies if the module should be considered as a fully-fledged application (``True``) or is just a technical module (``False``) that provides some extra functionality to an existing application module.

.. _assets:

**assets**

.. container:: ps-3 pb-3

    :badge-primary:`dict`

    Specifies how all static files are loaded in various assets bundles.

    See the :ref:`assets <reference/assets>` page for more details on how to describe bundles.

.. _author:

**author**

.. container:: ps-3 pb-3

    :badge-primary:`dict`

    Specifies the person or entity that authored the module.

    If you are an employee at Odoo, it should be ``Odoo S.A.``.


.. _auto_install:

**auto_install**

.. container:: ps-3 pb-3

    :badge-primary:`bool` :badge-primary:`list(str)`

    If it is a ``bool``, it specifies if the module should be automatically installed once all of its dependencies are installed (``True``).

    If it is a ``list(str)``, it must contain a subset of dependencies. It specifies if the module should be automatically installed once all the subset dependencies are installed and install the remaining dependencies.

    ::

        # Once the module 'crm' is installed, this module will be automatically installed as well as
        # the modules 'sale', and 'web'.

        {
            'depends': ['crm', 'sale', 'web'],
            'auto_install': ['crm'],
        }


    If the list of subset of dependencies is empty, the module will always be installed regardless of its dependencies and those will be installed as well.

    ::

        # This module will always be automatically installed as well as the modules 'crm', 'sale',
        # and 'web'.

        {
            'depends': ['crm', 'sale', 'web'],
            'auto_install': [],
        }

    This key is generally used for bridge modules implementing synergistic integration between two otherwise independent modules.

    For example, ``sale_crm`` depends on both ``sale`` and ``crm`` and is set to ``auto_install``. When both ``sale`` and ``crm`` are installed, it will automatically add CRM campaigns tracking to sale orders without either ``sale`` or ``crm`` being aware of one another.

.. _category:

**category**

.. container:: ps-3 pb-3

    :badge-primary:`str` :badge-secondary:`default: Uncategorized`

    Specifies the classification category (business domain) within Odoo.

    Although using existing categories is recommended, the field is freeform and unknown categories are created on-the-fly. Category hierarchies can be created using the separator ``/`` e.g. ``Foo/Bar`` will create a category ``Foo``, a category ``Bar`` as a child category of ``Foo``, and will set ``Bar`` as the module’s category.

.. _data:

**data**

.. container:: ps-3 pb-3

    :badge-primary:`list(str)`

    Specifies the list of data files that are only installed or updated with the module.

    The paths must be specified from the module root directory.

.. _demo:

**demo**

.. container:: ps-3 pb-3

    :badge-primary:`list(str)`

    Specifies the list of data files that are only installed or updated in *demonstration mode*.

.. _depends:

**depends**

.. container:: ps-3 pb-3

    :badge-primary:`list(str)`

    Specifies the list of modules that will be installed (or loaded) before installing (or loading) this module.

    A module depends on another if it uses features from it or alter its resources.

    The module base is always installed in any Odoo instance but it still needs to be specified as a dependency to make sure the module is updated when base is.

.. _description:

**description**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies the extended description of the module in *reStructuredText*.

.. _external_dependencies:

**external_dependencies**

.. container:: ps-3 pb-3

    :badge-primary:`dict(key=list(str))`

    Specifies a dictionary containing python and/or binary dependencies.

    ::

        {
            'external_dependencies': {
                'python': [...],
                'bin': [...]
            },
        }

    For python dependencies, the ``python`` key must be defined for this dictionary and a list of python modules to be imported should be assigned to it.

    For binary dependencies, the ``bin`` key must be defined for this dictionary and a list of binary executable names should be assigned to it.

    The module won’t be installed if either the python module is not installed in the host machine or the binary executable is not found within the host machine’s PATH environment variable.

.. _installable:

**installable**

.. container:: ps-3 pb-3

    :badge-primary:`bool` :badge-secondary:`default: True`

    Specifies if the user is able to install the module from the Web User Interface (``True``).

.. _license:

**license**

.. container:: ps-3 pb-3

    :badge-primary:`str` :badge-secondary:`default: LGPL-3`

    Specifies the distribution license for the module.

    Its value should be one of the following:

    * ``GPL-2 or any later version``
    * ``GPL-3 or any later version``
    * ``AGPL-3``
    * ``LGPL-3``
    * ``Other OSI approved licence``
    * ``OEEL-1`` (Odoo Enterprise Edition License v1.0)
    * ``OPL-1`` (Odoo Proprietary License v1.0)
    * ``Other proprietary``

.. _maintainer:

**maintainer**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies the person or entity in charge of the maintenance of this module.

    By default, it is assumed that the author is also the maintainer.

.. _name:

**name**

.. container:: ps-3 pb-3

    :badge-primary:`str` :badge-danger:`required`

    Specifies the human-readable name of the module.

.. _post_init_hook:

**post_init_hook**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies a function that will be executed right after the module’s installation.

    Its value should be the name of a function defined inside the module’s ``__init__.py``.

    This key should only be used when the setup required for this module is either extremely difficult or impossible through the api.

.. _pre_init_hook:

**pre_init_hook**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies a function that will be executed right before the module’s installation.

    Its value should be the name of a function defined inside the module’s ``__init__.py``.

    This key should only be used when the setup required for this module is either extremely difficult or impossible through the api.

.. _uninstall_hook:

**uninstall_hook**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies a function that will be executed right after the module’s uninstallation.

    Its value should be the name of a function defined inside the module’s ``__init__.py``.

    This key should only be used when the cleanup required for this module is either extremely difficult or impossible through the api.

.. _version:

**version**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies the `semantic version`_ of the module.

.. _website:

**website**

.. container:: ps-3 pb-3

    :badge-primary:`str`

    Specifies the website url of the module author.

.. _semantic version: https://semver.org
.. _existing categories: {GITHUB_PATH}/odoo/addons/base/data/ir_module_category_data.xml
