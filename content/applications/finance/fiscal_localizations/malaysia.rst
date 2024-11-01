========
Malaysia
========

.. _MyTax: https://mytax.hasil.gov.my

.. _malaysia/configuration:

Configuration
=============

.. _malaysia/configuration/modules:

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get all the features of the Malaysian
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Malaysia - Accounting`
     - `l10n_my`
     - This module includes the default
       :ref:`fiscal localization package <fiscal_localizations/packages>`.
   * - :guilabel:`Malaysia - Accounting Reports`
     - `l10n_my_reports`
     - This module includes the accounting reports for Malaysia.
   * - :guilabel:`Malaysia - UBL PINT`
     - `l10n_my_ubl_pint`
     - This module includes the features required to export invoices in PINT format.
   * - :guilabel:`Malaysia - E-invoicing`
     - `l10n_my_edi`
     - This module includes the features required for integration with MyInvois under IRBM.

.. _malaysia/configuration/company:

Company information
-------------------

To configure your company information, go to the :guilabel:`Contacts` app, search for your company,
and select it. Then configure the following fields:

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
  and :guilabel:`Country`.

   - In the :guilabel:`Street` field, enter the street name, number, and any additional address
     information.
   - In the :guilabel:`Street 2` field, enter the neighborhood.

- :guilabel:`Tax ID`: Tax identification number
- :guilabel:`SST`: Malaysian Sales and Service Tax Number, if applicable
- :guilabel:`TTx`: Malaysian Tourism Tax Number, if applicable
- :guilabel:`Phone`

.. _malaysia/myinvois:

E-invoicing integration with MyInvois
=====================================

The MyInvois Portal is a platform provided by the :abbr:`IRBM (Inland Revenue Board of Malaysia)`
that facilitates the implementation of e-invoices for Malaysian taxpayers.
Odoo supports integration with MyInvois to submit the invoices generated in Odoo.

.. note::
   The :guilabel:`Malaysia - E-invoicing module` must be installed to submit invoices to MyInvois.

.. _malaysia/myinvois/setup:

Set-up
------

.. _malaysia/myinvois/setup/registration:

MyInvois registration
~~~~~~~~~~~~~~~~~~~~~

To send electronic invoices to MyInvois, you first need to register and log in to the MyInvois
portal to grant Odoo the **right to invoice** as an intermediary for your company.

.. note::
   If this is the first time you log into the MyInvois portal, click :guilabel:`User Manual` on
   MyTax_ to learn more about the registration process. Both the **pre-production** (:dfn:`testing
   environment to try the functions before using the actual (production) environment`) and
   **production** (:dfn:`actual environment to submit e-invoices with accurate information`)
   environments are supported.

#. Log into MyTax_. Choose the :guilabel:`ID Type` and the corresponding
   :guilabel:`identification number` used to register for the digital certificate.
#. From the dashboard, click the :icon:`fa-angle-down` :guilabel:`(angle-down)` icon in the
   top-right corner and select :guilabel:`View Taxpayer Profile`.
#. In the :guilabel:`Representatives` section, click :guilabel:`Add Intermediary` in the top-right
   corner.

   .. image:: malaysia/myinvois-add-intermediary.png
      :alt: MyInvois add intermediary

#. Add `ODOO S.A.` as an intermediary using the following information:

   - :guilabel:`TIN`: `C57800417080`
   - :guilabel:`BRN`: `BE0477472701`
   - :guilabel:`Name`: `ODOO S.A.`

#. Grant the following permissions by clicking the :icon:`fa-toggle-on` :guilabel:`(toggle-on)`
   icon:

   - :guilabel:`Representation From`
   - :guilabel:`Document - Submit`
   - :guilabel:`Document - Cancel`
   - :guilabel:`Document - Request Rejection`

   .. note::
      - Access can be revoked in the future if needed.
      - Odoo, as an intermediary, does not store invoices sent on behalf of the client on the proxy
        server.

#. Click :guilabel:`Save`. The status for `ODOO S.A.` is then :guilabel:`Active`.

   .. image:: malaysia/myinvois-intermediary-active.png
      :alt: MyInvois status active

.. _malaysia/myinvois/setup/odoo:

Configuration in Odoo
~~~~~~~~~~~~~~~~~~~~~

.. _malaysia/myinvois/setup/odoo/einvoicing:

Electronic invoicing
********************

Go to :menuselection:`Accounting --> Configuration --> Settings`. In the
:guilabel:`Malaysian Electronic Invoicing` section, choose the relevant :guilabel:`MyInvois mode`
based on the environment you used to register on MyInvois.

Make sure to allow Odoo to process e-invoices by checking the box, then click :guilabel:`Register`.

.. note::
   To change the TIN reference, click :guilabel:`Unregister`, change the company's information and
   make sure the number registered on MyInvois matches, then :guilabel:`Register` again.

.. _malaysia/myinvois/setup/odoo/company:

Company
*******

Open the Settings app, and in the :guilabel:`Companies` section, click :guilabel:`Update Info`. Then,
in the :guilabel:`E-invoicing` section, fill in the following fields:

   - :guilabel:`Identification`: The :guilabel:`ID Type` and associated :guilabel:`Identification
     number` used to register for the digital certificate.
   - :guilabel:`Ind. Classification`: The 5-digit numeric code that represents the nature and
     activity of the business.

Contacts
********

Access the contact's form and fill in the following fields:

   - :guilabel:`Country`
   - :guilabel:`State`
   - :guilabel:`Phone`
   - :guilabel:`Tax ID`
   - :guilabel:`Identification`: the :guilabel:`ID Type` and the corresponding
     :guilabel:`Identification number` of the contact registered on MyTax.

.. _malaysia/myinvois/setup/odoo/product:

Products
********

All products to be included in e-invoices require a Malaysian classification code. To add it,
access the :guilabel:`Product` form and in the :guilabel:`General Information` tab, fill in the
:guilabel:`Malaysian classification code` field.

.. _malaysia/myinvois/workflow:

Workflow
--------

.. _malaysia/myinvois/workflow/sending:

Send invoices to MyInvois
~~~~~~~~~~~~~~~~~~~~~~~~~

Invoices can be sent to MyInvois once they have been confirmed. To do so, follow the
:ref:`invoice sending <accounting/invoice/sending>` steps, and in the :guilabel:`Send` window,
enable the :guilabel:`Send to MyInvois` option and click :guilabel:`Send & Print`.

.. _malaysia/myinvois/workflow/sending/status:

MyInvois status
***************

In the :guilabel:`MyInvois` tab of the invoice, the :guilabel:`MyInvois State` is updated to
:guilabel:`Valid` when the submission to MyInvois is successful. The :guilabel:`Submission UID`,
:guilabel:`MyInvois` and :guilabel:`Validation Time` are also updated.
The same information is available on MyInvois.

.. note::
   If no information is received from the MyInvois portal, the :guilabel:`MyInvois State` is
   :guilabel:`In Progress`. In this case, Odoo automatically checks and updates the status.

.. _malaysia/myinvois/workflow/cancellation:

Invoice cancellation
~~~~~~~~~~~~~~~~~~~~

Sent invoices can be canceled within 72 hours from :guilabel:`Validation time`. In this case, open
the invoice and click :guilabel:`Request Cancel`. In the :guilabel:`Cancel document` window, include
the cancellation :guilabel:`Reason`, then click :guilabel:`Update Invoice`. The
:guilabel:`MyInvois State` is updated to :guilabel:`cancelled`.

.. _malaysia/employment-hero:

Employment Hero payroll
=======================

If your business is already up and running with :doc:`Employment Hero <employment_hero>`, you can
use our connector as an alternative payroll solution.

.. important::
   To :ref:`configure the Employment Hero API <employment_hero/configuration>` for **Malaysia**, use
   the following value as :guilabel:`Payroll URL`: `https://apimy.yourpayroll.io/`.
