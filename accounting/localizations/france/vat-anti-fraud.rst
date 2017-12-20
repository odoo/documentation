==============================================
Get the VAT anti-fraud certification with Odoo
==============================================

As of January 1st 2018, a new anti-fraud legislation will come into effect 
in France and DOM-TOM. This new legislation stipulates certain criteria 
concerning the inalterability, security, storage and archiving of sales data. 
These legal requirements are implemented in Odoo, version 9 onward, 
through an add-on.

Is my company required to use an anti-fraud software?
=====================================================
Your company is required to use an anti-fraud cash register software like 
Odoo (CGI art. 286, I. 3° bis) if:

* You are taxable (not VAT exempt) in France or any DOM-TOM,
* Some of your customers are private individuals (B2C).

This rule applies to any company size. Auto-entrepreneurs are exempted from 
VAT and therefore are not affected.

Get certified with Odoo
=======================
Getting compliant with Odoo is vey easy.

Your company is requested by the tax administration to deliver a Certificate 
of Conformity testifying that your software complies with the anti-fraud 
legislation. This certificate is granted by Odoo SA to Odoo Enterprise users. 
If you use Odoo Community, you should 
`upgrade to Odoo Enterprise <https://www.odoo.com/documentation/online/setup/enterprise.html>`__
or contact your Odoo service provider. 
`Get the certificate here <https://www.odoo.com/my/home/french-certification>`__.

In case of non-conformity, your company risks a fine of €7,500.

To get the certification just follow the following steps:

* Install the anti-fraud add-on fitting your Odoo environment from the 
  *Apps* menu:

  * France - VAT Anti-Fraud Certification for Point of Sale (CGI 286 I-3 bis) (if you use Odoo Point of Sale)

  * France - VAT Anti-Fraud Certification (CGI 286 I-3 bis) (in any other case)
* Make sure a country is set on your company, otherwise your entries won’t be 
  encrypted for the inalterability check. To edit your company’s data, 
  go to :menuselection:`Settings --> Users & Companies --> Companies`. 
  Select a country from the list; Do not create a new country.
* Download the mandatory Certificate of Conformity delivered by Odoo SA from `here <https://www.odoo.com/my/home/french-certification>`__.

.. note:: If case you run Odoo on-premise, you should update your 
  installation and restart your server to get such new add-ons available 
  in your Apps repository. For any issue you can still download the
  modules from `Odoo's Apps store <https://www.odoo.com/apps>`__.

Anti-fraud features of Odoo
===========================
The anti-fraud add-on introduces the following features:

* **Inalterability**: deactivation of all the ways to cancel or modify 
  key data of POS orders, invoices and journal entries;
* **Security**: chaining algorithm to verify the inalterability;
* **Storage**: automatic sales closings with computation of both period 
  and cumulative totals (daily, monthly, annually).

Inalterability
--------------
All the possible ways to cancel and modify key data of paid POS orders, 
confirmed invoices and journal entries are deactivated, 
if the company is located in France or in any DOM-TOM. 

.. note:: If you run a multi-companies environment, only the documents of 
 such companies are impacted.

Security
--------
To ensure the inalterability, every order or journal entry is encrypted 
upon validation. 
This number (or hash) is calculated from the key data of the document as 
well as from the hash of the precedent documents.

The add-on introduces an interface to test the data inalterability. 
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
-------
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
   To prompt users to do it on a daily basis, the add-on prevents from resuming 
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
================
Do not uninstall the module! If you do so, the hashes will be reset and none 
of your past data will be longer guaranteed as being inalterable.

Users remain responsible for their Odoo instance and must use it with 
due diligence. It is not permitted to modify the source code which guarantees 
the inalterability of data.
 
Odoo absolves itself of all and any responsibility in case of changes 
in the add-on’s functions caused by 3rd party applications not certified by Odoo.


More Information
================
You will find more information about this legislation in the official documents:

* `Frequently Asked Questions <https://www.economie.gouv.fr/files/files/directions_services/dgfip/controle_fiscal/actualites_reponses/logiciels_de_caisse.pdf>`__
* `Official Statement <http://bofip.impots.gouv.fr/bofip/10691-PGP.html?identifiant=BOI-TVA-DECLA-30-10-30-20160803>`__
* `Item 88 of Finance Law 2016 <https://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000031732968&categorieLien=id&cidTexte=JORFTEXT000031732865>`__











