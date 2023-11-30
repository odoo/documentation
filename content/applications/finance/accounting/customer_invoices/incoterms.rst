=========
Incoterms
=========

:abbr:`Incoterms (International Commercial Terms)` are standardized trade terms used in
international transactions to define the rights and responsibilities of buyers and sellers. They
establish the obligations related to the delivery of goods, the transfer of risks, and the
distribution of costs between the parties involved. Incoterms specify important details, such as the
point at which the risk and costs transfer from the seller to the buyer, the responsibility for
transportation, insurance, customs clearance, and other relevant aspects of the transaction.

.. note::
   By default, all 11 Incoterms are available in Odoo:

   - **EXW**: Ex works
   - **FCA**: Free carrier
   - **FAS**: Free alongside ship
   - **FOB**: Free on board
   - **CFR**: Cost and freight
   - **CIF**: Cost, insurance and freight
   - **CPT**: Carriage paid to
   - **CIP**: Carriage and insurance paid to
   - **DPU**: Delivered at place unloaded
   - **DAP**: Delivered at place
   - **DDP**: Delivered duty paid

.. seealso::
   - :doc:`../reporting/intrastat`
   - :doc:`../customer_invoices`
   - :doc:`../vendor_bills`

.. _incoterms/invoices:

Define an Incoterm
==================

To define an Incoterm manually, create an invoice or bill, click the :guilabel:`Other Info` tab, and
select the :guilabel:`Incoterm`.

Incoterm location
-----------------

A location relevant to the chosen Incoterm can be added to the invoice or bill under
:guilabel:`Other Info` in the :guilabel:`Incoterm Location` field.

.. example::
   If the chosen Incoterm code is `CIF` (Cost, Insurance, Freight), the associated location might be
   the destination port where the goods will be delivered.

.. _incoterms/default:

Default Incoterm configuration
==============================

You can set a default Incoterm rule to **automatically** populate the Incoterm field on all newly
created invoices and bills. Under :menuselection:`Accounting/Invoicing --> Configuration -->
Settings`, scroll down to the :guilabel:`Customer Invoices` section, and select an Incoterm in the
:guilabel:`Default Incoterm` field.
