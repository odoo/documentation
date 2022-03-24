===================================
Install the Adyen Pay by Link Patch
===================================

Starting October 2022, due to `Adyen deprecating their Hosted Payment Page solution
<https://docs.adyen.com/online-payments/classic-integrations/hosted-payment-pages/deprecation>`_,
:doc:`Adyen <../adyen>` needs to be updated to continue accepting payments.

.. note::
   If your Odoo database is created after the update was released, the update module is installed
   automatically. To check if this module is already installed, go to :guilabel:`Apps`, remove the
   ``Apps`` filter and search for ``Adyen``. If the module :guilabel:`Adyen Payment
   Acquirer/Pay by Link Patch` is present and marked as installed, your Odoo database is already
   up-to-date and you can proceed with the configuration step of :doc:`Adyen <../adyen>`.

Update Odoo to the latest release
=================================

The new integration is made available through a new Odoo module; to be able to install it, you must
make sure that your Odoo source code is up-to-date.

If you use Odoo on Odoo.com or Odoo.sh platform, your code is already up-to-date and
you can proceed to the next step.

If you use Odoo with an on-premise setup or through a partner, then you must update
your installation as detailed in
:doc:`this documentation page </administration/maintain/update>`
or by contacting your integrating partner.

Update the list of available modules
====================================

New modules must be *discovered* by your Odoo instance to be available in the **Apps**
menu.

To do so, activate the :ref:`developer mode <developer-mode>`, and go to :menuselection:`Apps -->
Update Apps List`. A wizard will ask for confirmation.

Install the Adyen Payment Acquirer/Pay by Link Patch
====================================================

.. warning::
   You should never install new modules in your production database without first testing them in a
   duplicate or staging environment. For Odoo.com customers, a duplicate database can be created
   from the database management page. For Odoo.sh users, you should use a staging or duplicate
   database. For on-premise users, you should use a staging environment---contact your integrating
   partner for more information regarding how to test a new module in your particular setup.

The module should now be available in your :guilabel:`Apps` menu. Remove the ``Apps`` filter and
search for ``Adyen``; the module :guilabel:`Adyen Payment Acquirer/Pay by Link Patch` should be
available for installation. If you cannot find the module after having updated the list of available
modules, it means your Odoo source code is not up-to-date; refer to step one of this page.

Once the module is installed, configure your acquirer following the instructions on the
:doc:`Adyen <../adyen>` page.
