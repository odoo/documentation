==============
Upgrading data
==============

Errors during upgrade
---------------------

Suppose some critical data is removed during the standard upgrade process or an exception is raised,
stopping the upgrade process. In that case, a migration script must be injected during the process
to fix the issue. It can only be done by Odoo employees, as only trusted code can be executed on the
Upgrade server, and custom migration scripts are only executed after the standard process succeeds.

Errors can be due to two things:

  - An inconsistency in the data of the original database, in which case the underlying issue can be
    fixed in production **after testing on a duplicated database**
  - An error during the generation of data during the upgrade, in which case the `intervention of a
    developer of the Upgrade team <https://www.odoo.com/help>`_ is required to fix the issue and
    restart the upgrade process

.. spoiler:: Access error

   Access errors are raised when a user tries to access a record without the proper access rights.
   During upgrades, the administrator user (`ID=2`) is used to perform all operations and,
   therefore, should be able to access all records.

    .. example::
       `odoo.exceptions.AccessError: You are not allowed to access 'Applicant' (hr.applicant)
       records.`

       This message means the administrator (`ID=2`) does not have the access rights to read a
       record of the model `hr.applicant` (Recruitment app). The same error message can appear when
       trying to access a record from the web interface without the access rights to do so.

    The error can be solved by giving back all administrator access rights to the administrator,
    even for custom groups or record rules.

.. spoiler:: Validation error

   Validation errors are raised by various safeguards implemented in the source code of Odoo,
   ensuring data is consistent. The message is usually accompanied by the traceback, which might
   display which record is causing the error.

    .. example::
       `odoo.exceptions.ValidationError: the tax group must have the same country_id as the tax
       using it.`

       This error is raised in `this part of the code <https://github.com/odoo/odoo/blob/2e06b0e1ce9bb3d87a1e44d631dcdc1808c1bfcb/addons/account/models/account_tax.py#L179-L183>`_.
       It is possible to conclude that this error appears if there is a record of the `account.tax`
       model for which the country set on the tax group differs from the country set on the tax
       itself.

       Therefore, fixing the error requires searching for faulty taxes and fixing them by setting
       their country to the country of their tax group (or vice versa), either manually via the web
       page of the database, with PSQL queries, or with the :ref:`Odoo shell
       <reference/cmdline/shell>`, depending on the hosting type.

.. seealso::
    - :ref:`reference/exceptions`
    - :doc:`Data access restriction </developer/tutorials/restrict_data_access>`
    - :doc:`Access rights </applications/general/users/access_rights>`
    - :doc:`User management </applications/general/users/manage_users>`

Upgrading server, scheduled, and automated actions
--------------------------------------------------

References to fields in server, scheduled, and automated actions might be broken due to changes in
the fields' definitions. This is usually the case for the actions *Execute Python Code*, *Create a
new Record*, or *Update the Record*.

Those actions are susceptible to being removed by the standard upgrade process, requiring
`intervention from an Odoo developer <https://www.odoo.com/help>`_. Otherwise, it can be fixed
with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. note::
   To prevent actions from being removed, it is possible to preemptively change the reference(s) to
   a field before upgrading and restoring them after the upgrade process.

.. seealso::
   :ref:`Server actions <reference/actions/server>`