:banner: banners/odoo-sh.jpg

==================
Storage Management
==================

Several elements take space in odoo.sh instances. This include:
 - The production database
 - The backups databases
 - The staging builds

More details for your instance can be found in the :ref:`Settings <odoosh-gettingstarted-settings-storage-size>`.

Free up memory
==============

Filestore
---------
The filestore is a folder which contains every media file of a database instance. It does include the following:
 - Pictures (products thumbnails, users avatar, ...)
 - Attached chatter files (invoice and quotation PDF, ...)
 - Minified CSS/JS files needed for the website to render quicker

The filestore size can have a big impact in the total memory usage as it can increase quickly if you store a lot of files.
It will also impact the backup size as the filestore is copied within it.

----------------------------
Delete file in the filestore
----------------------------
In order to delete file in the filestore, please do as follows:
 #. Connect to your Odoo database
 #. Activate debug mode
 #. Go to :menuselection:`Settings --> Technical --> Database Structure --> Attachments`
 #. Select the file you want to delete
 #. :menuselection:`Action --> Delete`

.. warning::
   Once deleted the files are hard to recover, make sure to delete file you don't need.
   Keep any file on which you have a doubt of its purpose.

Deleting the attachment won't directly delete the file in the container.
The action of deleting the file is done by the ``Base: Auto-vacuum internal data`` scheduled action.
It should automatically triggers once per day on the production branch.

.. warning::
   As staging branches scheduled actions are deactivated by default. You will have to run it manually.

.. tip::
   To delete the heavier files you can add to the list view the ``file_size`` field to then sort on it.
   This customisation can be either with Odoo Studio or a custom module.
