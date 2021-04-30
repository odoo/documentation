======
France
======

FEC 
===

If you have installed the French Accounting, you will be able to download the FEC.
For this, go in :menuselection:`Accounting --> Reporting --> France --> FEC`. 

.. tip::
    If you do not see the submenu **FEC**, go in **Apps** and search for the module
    called **France-FEC** and verify if it is well installed. 

French Accounting Reports
=========================

If you have installed the French Accounting, you will have access to some accounting reports specific to France: 

- Bilan comptable
- Compte de résultats
- Plan de Taxes France 

Get the VAT anti-fraud certification with Odoo
==============================================

As of January 1st 2018, a new anti-fraud legislation comes into effect 
in France and DOM-TOM. This new legislation stipulates certain criteria 
concerning the inalterability, security, storage and archiving of sales data. 
These legal requirements are implemented in Odoo, version 9 onward, 
through a module and a certificate of conformity to download.

Is my company required to use an anti-fraud software?
-----------------------------------------------------

Your company is required to use an anti-fraud cash register software like 
Odoo (CGI art. 286, I. 3° bis) if:

* You are taxable (not VAT exempt) in France or any DOM-TOM,
* Some of your customers are private individuals (B2C).

This rule applies to any company size. Auto-entrepreneurs are exempted from 
VAT and therefore are not affected.

Get certified with Odoo
-----------------------

Getting compliant with Odoo is very easy.

Your company is requested by the tax administration to deliver a certificate 
of conformity testifying that your software complies with the anti-fraud 
legislation. This certificate is granted by Odoo SA to Odoo Enterprise users 
`here <https://www.odoo.com/my/contract/french-certification/>`__. 
If you use Odoo Community, you should 
`upgrade to Odoo Enterprise <https://www.odoo.com/documentation/online/setup/enterprise.html>`__
or contact your Odoo service provider. 

In case of non-conformity, your company risks a fine of €7,500.

To get the certification just follow the following steps:

* Install the anti-fraud module fitting your Odoo environment from the 
  *Apps* menu:

  * if you use Odoo Point of Sale: *l10n_fr_pos_cert*: France - VAT Anti-Fraud Certification for Point of Sale (CGI 286 I-3 bis)

  * in any other case: *l10n_fr_certification*: France - VAT Anti-Fraud Certification (CGI 286 I-3 bis)
* Make sure a country is set on your company, otherwise your entries won’t be 
  encrypted for the inalterability check. To edit your company’s data, 
  go to :menuselection:`Settings --> Users & Companies --> Companies`. 
  Select a country from the list; Do not create a new country.
* Download the mandatory certificate of conformity delivered by Odoo SA `here <https://www.odoo.com/my/contract/french-certification/>`__.

.. note:: * To install the module in any system created before 
   December 18th 2017, you should update the modules list.
   To do so, activate the developer mode from the *Settings* menu.
   Then go to the *Apps* menu and press *Update Modules List* in the top-menu.
 * In case you run Odoo on-premise, you need to update your installation 
   and restart your server beforehand.
 * If you have installed the initial version of the anti-fraud module
   (prior to December 18th 2017), you need to update it.
   The module's name was *France - Accounting - Certified CGI 286 I-3 bis*.
   After an update of the modules list, search for 
   the updated module in *Apps*, select it and click *Upgrade*. 
   Finally, make sure the following module *l10n_fr_sale_closing* 
   is installed.

Anti-fraud features
-------------------

The anti-fraud module introduces the following features:

* **Inalterability**: deactivation of all the ways to cancel or modify 
  key data of POS orders, invoices and journal entries;
* **Security**: chaining algorithm to verify the inalterability;
* **Storage**: automatic sales closings with computation of both period 
  and cumulative totals (daily, monthly, annually).

Inalterability
~~~~~~~~~~~~~~

All the possible ways to cancel and modify key data of paid POS orders, 
confirmed invoices and journal entries are deactivated, 
if the company is located in France or in any DOM-TOM. 

.. note:: If you run a multi-companies environment, only the documents of 
 such companies are impacted.

Security
~~~~~~~~

To ensure the inalterability, every order or journal entry is encrypted 
upon validation. 
This number (or hash) is calculated from the key data of the document as 
well as from the hash of the precedent documents.

The module introduces an interface to test the data inalterability. 
If any information is modified on a document after its validation, 
the test will fail. The algorithm recomputes all the hashes and compares them 
against the initial ones. In case of failure, the system points out the first 
corrupted document recorded in the system.

Users with *Manager* access rights can launch the inalterability check. 
For POS orders, go to 
:menuselection:`Point of Sales --> Reporting --> French Statements`. 
For invoices or journal entries, 
go to :menuselection:`Invoicing/Accounting --> Reporting --> French Statements`.

Storage
~~~~~~~

The system also processes automatic sales closings on a daily, monthly 
and annual basis.
Such closings distinctly compute the sales total of the period as well as 
the cumulative grand totals from the very first sales entry recorded 
in the system.

Closings can be found in the *French Statements* menu of Point of Sale, 
Invoicing and Accounting apps.

.. note::
 * Closings compute the totals for journal entries of sales journals (Journal Type = Sales).

 * For multi-companies environments, such closings are performed by company.

 * POS orders are posted as journal entries at the closing of the POS session. 
   Closing a POS session can be done anytime. 
   To prompt users to do it on a daily basis, the module prevents from resuming 
   a session opened more than 24 hours ago. 
   Such a session must be closed before selling again.

 * A period’s total is computed from all the journal entries posted after the 
   previous closing of the same type, regardless of their posting date. 
   If you record a new sales transaction for a period already closed, 
   it will be counted in the very next closing.

.. tip:: For test & audit purposes such closings can be manually generated in the 
 developer mode. Go to 
 :menuselection:`Settings --> Technical --> Automation --> Scheduled Actions` 
 to do so.


Responsibilities
----------------

Do not uninstall the module! If you do so, the hashes will be reset and none 
of your past data will be longer guaranteed as being inalterable.

Users remain responsible for their Odoo instance and must use it with 
due diligence. It is not permitted to modify the source code which guarantees 
the inalterability of data.
 
Odoo absolves itself of all and any responsibility in case of changes 
in the module’s functions caused by 3rd party applications not certified by Odoo.


More Information
----------------

You will find more information about this legislation in the official documents:

* `Frequently Asked Questions <https://www.economie.gouv.fr/files/files/directions_services/dgfip/controle_fiscal/actualites_reponses/logiciels_de_caisse.pdf>`__
* `Official Statement <http://bofip.impots.gouv.fr/bofip/10691-PGP.html?identifiant=BOI-TVA-DECLA-30-10-30-20160803>`__
* `Item 88 of Finance Law 2016 <https://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000031732968&categorieLien=id&cidTexte=JORFTEXT000031732865>`__











