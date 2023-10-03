=============================
Upgrading your data if needed
=============================

In case of deleted automated action
===================================

If your upgraded database does not contain your automated action anymore, this means that it has been deleted by the standard upgrade process, most likely due to the fact that the corresponding model has been removed by that process. In which case, you could either manually temporarily set the model of your automated action to a different one, just for upgrading, or you can request :doc:`request assistance </upgrade/assistance>` of the Upgrade team to help you fix the issue.

In case of error message when executed
======================================

Another other type of issue you can encounter with automated actions is an error message when they are triggered. For automated actions that execute Python code, this usually means that the Python code is not compatible with the upgraded version of your database, probably due to functions being renamed, fields being moved, etc. This means that you will have to upgrade the code, using the various tips and tricks written in :doc:`/upgrade/advanced/upgrade_custom_code`.

.. seealso::
    :doc:`/applications/productivity/studio/automated_actions`