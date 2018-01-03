=======
Germany
=======

German Chart of Accounts
========================

The chart of accounts SKR03 and SKR04 are both supported in Odoo. You can choose the
one you want by going in :menuselection:`Accounting --> Configuration` then choose the
package you want in the Fiscal Localization section.

Be careful, you can only change the accounting package as long as you have not created any accounting entry. 

.. tip::

    When you create a new SaaS database, the SKR03 is installed by default. 

German Accounting Reports
=========================

Here is the list of German-specific reports available on Odoo Enterprise:

- Balance Sheet 
- Profit & Loss
- Tax Report (Umsatzsteuervoranmeldung)
- Partner VAT Intra

Export from Odoo to Datev
=========================

It is possible to export your accounting entries from Odoo to Datev. To be able to use this
feature, the german accounting localization needs to be installed on your Odoo Enterprise database.
Then you can go in :menuselection:`Accounting --> Reporting --> General Ledger` then click on the
**Export Datev (csv)** button. 
