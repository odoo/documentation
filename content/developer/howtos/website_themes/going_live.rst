==========
Going live
==========

Once you have finished all the web design and development work, it's time to deploy it on a
development or production database.

Module import
=============

Odoo SaaS
---------

Follow these steps the first time you import a module:

#. Create a ZIP file of your module.
#. Connect to the project database.
#. Enable the :ref:`developer mode <developer-mode>`.
#. Go to :guilabel:`Apps`, search for `base_import_module`, and install it if necessary.
#. Click on :guilabel:`Import Module` in the menu.
#. Upload your ZIP file, tick :guilabel:`Force init`, and click the :guilabel:`Import App` button.

If you need to re-import a module after making some changes, follow the same steps, but before
importing the module, open the developer menu and select :guilabel:`Become Superuser`. To leave the
Superuser mode, log out and log back in.

.. warning::
   The ZIP file size must be less than 50 MB.

.. seealso::
   - `Odoo eLearning: Register a Free Domain Name <https://www.odoo.com/slides/slide/register-a-free-domain-name-1663>`_

Odoo.sh
-------

Go to :guilabel:`Apps` and click on :guilabel:`Update Apps List` in the menu. Search for your module
in the list and install it.

.. seealso::
   :doc:`Introduction to Odoo.sh <../../../administration/odoo_sh/overview/introduction>`
