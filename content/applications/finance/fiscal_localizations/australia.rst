=========
Australia
=========

Documentation Guidelines
========================

Modules: (Daju)
========================

.. list-table::
   :header-rows: 1
   :widths: 25 20 55

   * - Module Name
     - Technical Name
     - Description
   * - Australia - Accounting
     - l10n_au
     - Australian accounting basic charts and localizations. Also:
       - activates a number of regional currencies.
       - sets up Australian taxes.
   * - ABA Credit Transfer
     - l10n_au_aba
     - This module allows the generation of payment batches as ABA (Australian Bankers Association) text files. The generated 'aba' file can be uploaded to many Australian banks.
   * - Employment Hero Australian Payroll
     - l10n_au_keypay
     - Employment Hero Payroll Integration This Module will synchronise all payrun journals from Employment Hero to Odoo.
   * - Australian Reports - Accounting
     - l10n_au_reports
     - Taxable Payments Annual Reports (TPAR) for Australia. The Taxable payments annual report (TPAR) allows:  Payments made to contractors (or subcontractors) for services, or Grants paid by government entities to ABN holders to be reported where required under the Taxable Payments Reporting System (TPRS) and the Taxable Government Grants and Payments reporting measure.
   * - Australia - Payroll
     - 
     - 
   * - Australia - Payroll with Accounting
     - 
     - 


 
COA: (Dymo)
----------

Taxes (DAJU)
------------

Default Australian taxes are automatically generated upon installation of the **Australia - Accounting (l10n_au)**. This is installed by default if the database is created for an Australian Company.

These taxes impact the BAS Report, which can be accessed through 
``Accounting ‣ Reporting ‣ BAS Report``.

.. _Link to BAS - TAX report:

In Australia, the standard Goods and Services Tax (GST) rate is 10%, but there are different rates and exemptions for specific categories of goods and services.

Tax Name
~~~~~~~~
The tax name will be utilized across multiple Odoo databases. Within the Australian localization package, tax names encompass the tax rate as an integral part of their naming convention.

Despite the high amount of taxes in Odoo, these taxes are pretty similar (mostly 0% and 10%), with different tax grid variations for:

- Goods
- Services
- TPAR
- TPAR without ABN

There are two primary tax categories: Purchase and Sales. These taxes are further categorized based on whether their tax scope is Services.

The “TPAR” and “TPAR without ABN” tax variations will determine whether a transaction should be shown on the TPAR report. For products that can be bought, the vendor taxes should also include the “TPAR” and “TPAR without ABN” variations of these taxes so that the fiscal positions can be mapped correctly based on the chosen contact.

.. _Link to T-PAR Report:

Here is the taxes for Australia in v17.

.. list-table::
   :widths: 20 20 20 20
   :header-rows: 1

   * - Name
     - Description
     - Tax Scope
     - Type Tax Use
   * - 10%
     - GST Sales
     - 
   * - Sales
     - 10% INC
     - GST Inclusive Sales
     - 
   * - Sales
     - 0% EX
     - Zero Rated (Export) Sales
     - 
   * - Sales
     - 0% EXEMPT
     - Exempt Sales
     - 
   * - Sales
     - 0% I
     - Input Taxed Sales
     - 
   * - Sales
     - 10% Adj
     - Tax Adjustments (Sales)
     - 
   * - Purchases
     - 10%
     - GST Purchases
     - 
   * - Purchases
     - 10% INC
     - GST Inclusive Purchases
     - 
   * - Purchases
     - 10% C
     - Capital Purchases
     - 
   * - Purchases
     - 0% C
     - Zero Rated Purch
     - 
   * - Purchases
     - 100% T EX
     - Purchase (Taxable Imports) - Tax Paid Separately
     - 
   * - Purchases
     - 10% I
     - Purchases for Input Taxed Sales
     - 
   * - Purchases
     - 10% P
     - Purchases for Private use or not deductible
     - 
   * - Purchases
     - 100% EX
     - GST Only on Imports
     - 
   * - Purchases
     - 10% Adj
     - Tax Adjustments (Purchases)
     - 
   * - Purchases
     - Services (Purchase)
     - 10% TPAR
     - GST Purchases
   * - Purchases
     - Services
     - 10% TPAR NO ABN
     - GST Purchases
   * - Purchases
     - Services
     - 10% INC TPAR
     - GST Inclusive Purchases





BAS - TAX report (DAJU)
-----------------------

TPAR Report (PERO)
------------------

Configuration
~~~~~~~~~~~~~

Customer statement (Dymo)
-------------------------

Remittance Advice (Dymo)
------------------------

E-Invoicing via Peppol (Dymo)
----------------------------

Set up Starshipit shipping services in Odoo (PERO)
--------------------------------------------------

Setup in Starshipit
~~~~~~~~~~~~~~~~~~~

Find Starshipit credentials
~~~~~~~~~~~~~~~~~~~~~~~~~~

Setup in Odoo
~~~~~~~~~~~~~

Rate computation
~~~~~~~~~~~~~~~~

Manage Packages
~~~~~~~~~~~~~~~

Process an order from Odoo to Starshipit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Returns management
~~~~~~~~~~~~~~~~~~

Cancellations/ Refunds
~~~~~~~~~~~~~~~~~~~~~

ABA Files (DAJU)
----------------

Context
~~~~~~~

Definition
~~~~~~~~~~

Why do we need them?
~~~~~~~~~~~~~~~~~~~~

Limitations to know of
~~~~~~~~~~~~~~~~~~~~~~

Setup
~~~~~

Flow
~~~~

Online payment solution Asia Pay (DYMO)
---------------------------------------

Open Banking standards for bank sync (LWI)
------------------------------------------

Export QIF, OFX Import (DAJU)
-----------------------------

Import OFX statement files
~~~~~~~~~~~~~~~~~~~~~~~~~~

Import QIF statement files
~~~~~~~~~~~~~~~~~~~~~~~~~~

Configuration
~~~~~~~~~~~~~

POS terminal → in store payment solution (DAJU) (Stripe)
--------------------------------------------------------

Configuration
~~~~~~~~~~~~~

Flow
~~~~

Payroll (LWI)
-------------

Employees
~~~~~~~~~

Contracts
~~~~~~~~~

Superannuation
~~~~~~~~~~~~~~

Generating payslips
~~~~~~~~~~~~~~~~~~~

Paying employees using an ABA file
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Paying super contributions
~~~~~~~~~~~~~~~~~~~~~~~~~~

Termination payments
~~~~~~~~~~~~~~~~~~~~

Add custom pay items
~~~~~~~~~~~~~~~~~~~~

Work entry types
~~~~~~~~~~~~~~~~

Allowances
~~~~~~~~~~

Commissions and other bonuses
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Compliance
~~~~~~~~~~

STP Phase 2
~~~~~~~~~~~

SuperStream
~~~~~~~~~~~

Employment Hero (DAJU)
----------------------
