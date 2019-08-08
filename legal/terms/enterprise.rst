
.. _enterprise_agreement:

======================================
Odoo Enterprise Subscription Agreement
======================================

.. note:: Version 8.0 - 2018-05-22

.. v6: add "App" definition + update pricing per-App
.. v7: remove possibility of price change at renewal after prior notice
.. 7.1: specify that 7% renewal increase applies to all charges, not just per-User.
.. v8.0: adapt for "Self-Hosting" + "Data Protection" for GDPR

By subscribing to the Odoo Enterprise services (the "Services") provided by Odoo SA and its
affiliates (collectively, "Odoo SA") in relation with Odoo Enterprise Edition or Odoo Community
Edition (the "Software"), hosted on Odoo SA's Cloud platforms (the "Cloud Platform") or
on-premises ("Self-Hosting"), you (the "Customer") are agreeing to be bound by the
following terms and conditions (the "Agreement").

.. _term:

1 Term of the Agreement
=======================

The duration of this Agreement (the “Term”) shall be specified in writing on conclusion of this
Agreement, beginning on the date of conclusion.
It is automatically renewed for an equal Term, unless either party provides a written notice of
termination minimum 30 days before the end of the Term to the other party.

.. _definitions:

2 Definitions
=============

User
    Any active user account with access to the Software in creation and/or edition mode.
    Deactivated user accounts and accounts used by external people (or systems) who only have
    limited access to the Software through the portal facilities (known as "portal Users") are not
    counted as Users.

App
    An "App" is a specialized group of features available for installation in the Software,
    and listed in the public Pricing section of `Odoo SA's website <https://www.odoo.com>`_.

Bug
    Is considered a Bug any failure of the Software that results in a complete stop, error
    traceback or security breach, and is not directly caused by a defective installation or
    configuration. Non-compliance with specifications or requirements will be considered as Bugs at
    the discretion of Odoo SA (typically, when the Software does not produce the results or
    performance it was designed to produce, or when a country-specific feature does not meet legal
    accounting requirements anymore).

Covered Versions
    Unless specified otherwise, the Services provided under this Agreement are applicable only
    to the Covered Versions of
    the Software, which include the 3 (three) most recently released major versions.

    To be covered by the current Agreement, the Customer has to run the most recent
    Covered Version at the time of conclusion of this Agreement. When this is not the case,
    additional costs are applicable, as described in :ref:`charges`.


.. _enterprise_access:

3 Access to the Software
========================

The Customer can use the Software hosted on the Cloud Platform, or choose the Self-Hosting option.
The Cloud Platform is hosted and fully managed by Odoo SA, and accessed remotely by the Customer.
With the Self-Hosting option, the Customer instead hosts the Software on computer systems of their
choice, that are not under the control of Odoo SA.

For the duration of this Agreement, Odoo SA gives the Customer a non-exclusive, non-transferable
license to use (execute, modify, execute after modification) the Odoo Enterprise Edition software,
under the terms set forth in :ref:`appendix_a`.

The Customer agrees to take all necessary measures to guarantee the unmodified execution of
the part of the Software that verifies the validity of the Odoo Enterprise Edition usage and
collects statistics for that purpose, including but not limited to the running of an instance,
the number of Users and installed Apps.

Odoo SA commits not to disclose individual or named figures to third parties without the consent
of the Customer, and to deal with all collected data in compliance with its official Privacy
Policy, published at https://www.odoo.com/privacy.

Upon expiration or termination of this Agreement, this license is revoked immediately and the
Customer agrees to stop using the Odoo Enterprise Edition software and the Cloud Platform.

Should the Customer breach the terms of this section, the Customer agrees to pay Odoo SA an extra
fee equal to 300% of the applicable list price for the actual number of Users and installed Apps.


.. _services:

4 Services
==========

.. _bugfix:

4.1 Bug Fixing Service
----------------------

For the duration of this Agreement, Odoo SA commits to making all reasonable efforts to remedy any
Bug of the Software submitted by the Customer through the appropriate channel (typically, Odoo SA's
service desk email address or website form), and to start handling such Customer submissions
within 2 business days.

The Customer understands that Bugs caused by a modification or extension that is not part of the
official Software will not be covered by this service.

As soon as the Bug is fixed an appropriate remedy will be communicated to the Customer.

For Self-Hosting, if the bug has been addressed in a more recent revision of the Covered Version of the
Software used by the Customer, the Customer agrees to update its systems to that revision in order
to obtain the correction. The Customer will not be asked to upgrade to a more recent Covered
Version of the Software as a remedy to a Bug.

When a Bug is fixed in any Covered Version, Odoo SA commits to fixing the Bug in all more recent
Covered Versions of the Software.

Both parties acknowledge that as specified in the license of the Software and in the :ref:`liability`
section of this Agreement, Odoo SA cannot be held liable for Bugs in the Software.


4.2 Security Updates Service
----------------------------

.. _secu_self_hosting:

Self-Hosting
++++++++++++

For the duration of this Agreement, Odoo SA commits to sending a "Security Advisory" to the Customer
for any security Bug that is discovered in the Covered Versions of the Software, at least 2 weeks
before making the Security Advisory public, unless the Bug has already been disclosed publicly by a
third party.
Security Advisories include a complete description of the Bug, its cause, its possible impacts
on the Customer's systems, and the corresponding remedy for each Covered Version.

The Customer understands that the Bug and the information in the Security Advisory must be treated
as Confidential Information as described in :ref:`confidentiality` during the embargo period prior to
the public disclosure.

.. _secu_cloud_platform:

Cloud Platform
++++++++++++++

Odoo SA commits to apply the security remedies for any security Bug discovered in a version of
the Software hosted on the Cloud Platform, on all systems under its control, as soon as
the remedy is available, without requiring any manual action of the Customer.


.. _upgrade:

4.3 Upgrade Services
--------------------

.. _upgrade_odoo:

Upgrade Service for the Software
++++++++++++++++++++++++++++++++

For the duration of this Agreement, the Customer can submit upgrade requests through the appropriate
channel (typically Odoo SA's upgrade service website), in order to convert a database of the Software
from one Covered Version of the Software to a more recent Covered Version (the "Target Version").

For the Cloud Platform, upgrade requests are submitted directly from the control panel of the
Cloud Platform, and do not require any data upload. For Self-Hosting,
upgrade requests must include a complete backup copy of the Customer's database and the
associated data (typically obtained from the Backup menu of the Software).

This service provided through an automated platform in order to allow the Customer to perform
unattended upgrades once a previous version of the Customer's database has been successfully
upgraded for a Covered Version.
The Customer may submit successive upgrade requests for a database, and agrees to submit at least
1 upgrade request for testing purposes before submitting the final upgrade request.

The Upgrade Service is limited to the technical conversion and adaptation of the Customer's database
to make it compatible with the Target Version, and the correction of any Bug directly caused by the
upgrade operation and not normally occurring in the Target Version.

It is the sole responsibility of the Customer to verify and validate the upgraded database in order
to detect Bugs, to analyze the impact of changes and new features implemented in the Target Version,
and to convert and adapt for the Target Version any third-party extensions of the Software that
were installed in the database before the upgrade (except where applicable as foreseen in section
:ref:`upgrade_extra`).
The Customer may submit multiple upgrade requests for a database, until an acceptable result is
achieved.

.. _upgrade_extra:

Upgrade Service for third-party extensions
++++++++++++++++++++++++++++++++++++++++++

For the duration of this Agreement, the Customer may request optional upgrade services for
third-party extension modules of the Software, in addition to the regular Upgrade Services.
This optional service is subject to additional fees (as described in :ref:`charges`) and includes the
technical adaptation of third-party modules installed in the Customer's database and their
corresponding data in order to be compatible with the Target Version. The Customer will receive an
upgraded version of all installed third-party modules along with the upgraded database.


.. _cloud_hosting:

4.4 Cloud Hosting Services
--------------------------

For the duration of this Agreement, when the Customer chooses to use the Cloud Platform,
Odoo SA commits to providing at least the following services:

- Choice of multiple hosting regions (minimum 3: Europe, America, Asia/Pacific)
- Hosting in Tier-III data centers or equivalent, with 99.9% network uptime
- Grade A SSL (HTTPS) Encryption of communication
- Fully automated, verified backups, replicated in multiple regions
- Disaster Recovery Plan, tested regularly

The details of the Cloud Hosting Services are described on the Service Level Agreement page at
https://www.odoo.com/cloud-sla.


.. _support_service:

4.5 Support Services
--------------------

Scope
+++++

For the duration of this Agreement, the Customer may open an unlimited number of support tickets
free of charge, exclusively for questions regarding Bugs (see :ref:`bugfix`) or guidance
with respect to the use of the standard features of the Software and Services
(functionalities, intended use, configuration, troubleshooting).

Other assistance requests, such as questions related to development, customizations,
installation for Self-Hosting, or services requiring to access the Customer's database,
may be covered through the purchase of a separate Service Pack.
In case it’s not clear if a request is covered by this Agreement or a Service Pack,
the decision is at the discretion of Odoo SA.

Availability
++++++++++++

Tickets can be submitted online at https://www.odoo.com/help, or by phone directly to the
various Odoo SA offices, subject to local opening hours.



.. _charges:

5 Charges and Fees
==================

.. _charges_standard:

5.1 Standard charges
--------------------

The standard charges for the Odoo Enterprise subscription and the Services are based on the number
of Users, the installed Apps, the Software version used by the Customer, and specified in writing
at the conclusion of the Agreement.

When during the Term, the Customer has more Users or more installed Apps than specified at the time
of conclusion of this Agreement, the Customer agrees to pay an extra fee equivalent to the applicable
list price (at the beginning of the Term) for the additional Users or Apps, for the remainder of the Term.

If at the time of the conclusion of this Agreement, the Customer uses a Covered Version
that is not the most recent one, the standard charges may be increased by 50% for the duration
of the first Term, at the sole discretion of Odoo SA, to cover the extra maintenance costs.

.. _charges_renewal:

5.2 Renewal charges
-------------------

Upon renewal as covered in section :ref:`term`, if the charges applied during the previous Term
are lower than the most current applicable list price, these charges will increase by up to 7%.


.. _charges_thirdparty:

5.3 Charges for Upgrade Services of third-party modules
-------------------------------------------------------

.. FIXME: should we really fix the price in the contract?

The additional charge for the Upgrade Service for third-party modules is EUR (€) 1000.00 (one
thousand euros) per 1000 Lines of Code in the third-party modules, rounded up to the next thousand
lines. Lines of Code include all text lines in the source code of those modules, regardless of the
programming language (Python, Javascript, etc.) or data format (XML, CSV, etc.), excluding blank
lines and comment lines.

Odoo SA reserves the right to reject an upgrade request for third-party modules under the above
conditions if the quality of the source code of those modules is too low, or if these modules
constitute an interface with third-party software or systems. The upgrade of such modules will
subject to a separate offer, outside of this Agreement.

.. _taxes:

5.4 Taxes
---------

.. FIXME : extra section, not sure we need it?

All fees and charges are exclusive of all applicable federal, provincial, state, local or other
governmental taxes, fees or charges (collectively, "Taxes"). The Customer is responsible for paying
all Taxes associated with purchases made by the Customer under this Agreement, except when Odoo SA
is legally obliged to pay or collect Taxes for which the Customer is responsible.


.. _conditions:

6 Conditions of Services
========================

6.1 Customer Obligations
------------------------

The Customer agrees to:

- pay Odoo SA any applicable charges for the Services of the present Agreement, in accordance with
  the payment conditions specified in the corresponding invoice ;
- immediately notify Odoo SA when their actual number of Users or their installed Apps exceed the
  numbers specified at the conclusion of the Agreement, and in this event, pay the applicable
  additional fee as described in section :ref:`charges_standard`;
- take all measures necessary to guarantee the unmodified execution of the part of the Software
  that verifies the validity of the Odoo Enterprise Edition usage, as described
  in :ref:`enterprise_access` ;
- appoint 1 dedicated Customer contact person for the entire duration of the Agreement;

When the Customer chooses to use the Cloud Platform, the Customer further agrees to:

- take all reasonable measures to keep their user accounts secure, including by choosing
  a strong password and not sharing it with anyone else;
- make a reasonable use of the Hosting Services, to the exclusion of any illegal or abusive
  activities, and strictly observe the rules outlined in the Acceptable Use Policy
  published at https://www.odoo.com/acceptable-use.

When the Customer chooses the Self-Hosting option, the Customer further agrees to:

- take all reasonable measures to protect Customer’s files and databases and to ensure Customer’s
  data is safe and secure, acknowledging that Odoo SA cannot be held liable for any data loss;
- grant Odoo SA the necessary access to verify the validity of the Odoo Enterprise Edition usage
  upon request (e.g. if the automatic validation is found to be inoperant for the Customer);


.. _no_soliciting:

6.2 No Soliciting or Hiring
---------------------------

Except where the other party gives its consent in writing, each party, its affiliates and
representatives agree not to solicit or offer employment to any employee of the other party who is
involved in performing or using the Services under this Agreement, for the duration of the Agreement
and for a period of 12 months from the date of termination or expiration of this Agreement.
In case of any breach of the conditions of this section that leads to the termination of said
employee toward that end, the breaching party agrees to pay to the other party an amount of
EUR (€) 30 000.00 (thirty thousand euros).


.. _publicity:

6.3 Publicity
-------------

Except where notified otherwise in writing, each party grants the other a non-transferable,
non-exclusive, royalty free, worldwide license to reproduce and display the other party’s name,
logos and trademarks, solely for the purpose of referring to the other party as a customer or
supplier, on websites, press releases and other marketing materials.


.. _confidentiality:

6.4 Confidentiality
-------------------

Definition of "Confidential Information":
    All information disclosed by a party (the "Disclosing Party") to the other party
    (the "Receiving Party"), whether orally or in writing, that is designated as confidential or
    that reasonably should be understood to be confidential given the nature of the information and
    the circumstances of disclosure. In particular any information related to the business,
    affairs, products, developments, trade secrets, know-how, personnel, customers and suppliers of
    either party should be regarded as confidential.

For all Confidential Information received during the Term of this Agreement, the Receiving Party
will use the same degree of care that it uses to protect the confidentiality of its own similar
Confidential Information, but not less than reasonable care.

The Receiving Party may disclose Confidential Information of the Disclosing Party to the extent
compelled by law to do so, provided the Receiving Party gives the Disclosing Party prior notice of
the compelled disclosure, to the extent permitted by law.


.. _data_protection:

6.5 Data Protection
-------------------

Definitions
    "Personal Data", "Controller", "Processing" take the same meanings as in the
    Regulation (EU) 2016/679 and the Directive 2002/58/EC,
    and any regulation or legislation that amends or replaces them
    (hereafter referred to as “Data Protection Legislation”)

Processing of Personal Data
+++++++++++++++++++++++++++

The parties acknowledge that the Customer's database may contain Personal Data, for which the
Customer is the Controller. This data will be processed by Odoo SA when the Customer instructs so,
by using any of the Services that require a database (e.g. the Cloud Hosting Services or
the Database Upgrade Service), or if the Customer transfers their database or a part of
their database to Odoo SA for any reason pertaining to this Agreement.

This processing will be performed in conformance with Data Protection Legislation.
In particular, Odoo SA commits to:

- (a) only process the Personal Data when and as instructed by the Customer, and for the purpose of
  performing one of the Services under this Agreement, unless required by law to do so,
  in which case Odoo SA will provide prior notice to the Customer, unless the law
  forbids it ;
- (b) ensure that all persons within Odoo SA authorised to process the Personal Data have committed
  themselves to confidentiality ;
- (c) implement and maintain appropriate technical and organizational measures to protect
  the Personal Data against unauthorized or unlawful processing and against accidental loss,
  destruction, damage, theft, alteration or disclosure ;
- (d) forward promptly to the Customer any Data Protection request that was submitted
  to Odoo SA with regard to the Customer's database ;
- (e) notify the Customer promptly upon becoming aware of and confirming any accidental,
  unauthorized, or unlawful processing of, disclosure of, or access to the Personal Data ;
- (f) notify the Customer if the processing instructions infringe applicable Data Protection
  Legislation, in the opinion of Odoo SA;
- (g) make available to the Customer all information necessary to demonstrate compliance with the
  Data Protection Legislation, allow for and contribute reasonably to audits, including
  inspections, conducted or mandated by the Customer;
- (h) permanently delete all copies of the Customer's database in possession of Odoo SA,
  or return such data, at the Customer’s choice, upon termination of this Agreement,
  subject to the delays specified in Odoo SA's
  `Privacy Policy <https://www.odoo.com/privacy>`_ ;

With regard to points (d) to (f), the Customer agrees to provide Odoo SA with accurate contact
information at all times, as necessary to notify the Customer's Data Protection responsible.

Subprocessors
+++++++++++++

The Customer acknowledges and agrees that in order to provide the Services, Odoo SA may use
third-party service providers (Subprocessors) to process Personal Data. Odoo SA commits to only
use Subprocessors in compliance with Data Protection Legislation. This use will be covered by a
contract between Odoo SA and the Subprocessor that provides guarantees to that effect.
Odoo SA's Privacy Policy, published at https://www.odoo.com/privacy provides up-to-date information
regarding the names and purposes of Subprocessors currently in use by Odoo SA for the
execution of the Services.


.. _termination:

6.6 Termination
---------------

In the event that either Party fails to fulfill any of its obligations arising herein, and if such
breach has not been remedied within 30 calendar days from the written notice of such
breach, this Agreement may be terminated immediately by the non-breaching Party.

Further, Odoo SA may terminate the Agreement immediately in the event the Customer fails to pay
the applicable fees for the Services within the due date specified on the corresponding invoice.

Surviving Provisions:
  The sections ":ref:`confidentiality`”, “:ref:`disclaimers`”,
  “:ref:`liability`”, and “:ref:`general_provisions`” will survive any termination or expiration of
  this Agreement.


.. _warranties_disclaimers:

7 Warranties, Disclaimers, Liability
====================================

.. _warranties:

7.1 Warranties
--------------

.. industry-standard warranties regarding our Services while Agreement in effect

For the duration of this Agreement, Odoo SA commits to using commercially reasonable efforts to
execute the Services in accordance with the generally accepted industry standards provided that:

- the Customer’s computing systems are in good operational order and, for Self-Hosting, that
  the Software is installed in a suitable operating environment;
- the Customer provides adequate troubleshooting information and, for Self-Hosting, any access
  that Odoo SA may need to identify, reproduce and address problems;
- all amounts due to Odoo SA have been paid.

The Customer's sole and exclusive remedy and Odoo SA's only obligation for any breach of this warranty
is for Odoo SA to resume the execution of the Services at no additional charge.

.. _disclaimers:

7.2 Disclaimers
---------------

.. no other warranties than explicitly provided

Except as expressly provided herein, neither party makes any warranty of any kind, whether express,
implied, statutory or otherwise, and each party specifically disclaims all implied warranties,
including any implied warranty of merchantability, fitness for a particular purpose or
non-infringement, to the maximum extent permitted by applicable law.

Odoo SA does not warrant that the Software complies with any local or international law or regulations.

.. _liability:

7.3 Limitation of Liability
---------------------------

To the maximum extent permitted by law, the aggregate liability of each party together with its
affiliates arising out of or related to this Agreement will not exceed 50% of the total amount
paid by the Customer under this Agreement during the 12 months immediately preceding the date of the event
giving rise to such claim. Multiple claims shall not enlarge this limitation.

In no event will either party or its affiliates be liable for any indirect, special, exemplary,
incidental or consequential damages of any kind, including but not limited to loss of revenue,
profits, savings, loss of business or other financial loss, costs of standstill or delay, lost or
corrupted data, arising out of or in connection with this Agreement regardless of the form of
action, whether in contract, tort (including strict negligence) or any other legal or equitable
theory, even if a party or its affiliates have been advised of the possibility of such damages,
or if a party or its affiliates' remedy otherwise fails of its essential purpose.

.. _force_majeure:

7.4 Force Majeure
-----------------

Neither party shall be liable to the other party for the delay in any performance or failure to
render any performance under this Agreement when such failure or delay is caused by governmental
regulations, fire, strike, war, flood, accident, epidemic, embargo, appropriation of plant or
product in whole or in part by any government or public authority, or any other cause or causes,
whether of like or different nature, beyond the reasonable control of such party as long as such
cause or causes exist.


.. _general_provisions:

8 General Provisions
====================

.. _governing_law:

8.1 Governing Law
-----------------

Both parties agree that the laws of Belgium will apply, should any dispute arise out of or
in connection with this Agreement, without regard to choice or conflict of law principles.
To the extent that any lawsuit or court proceeding is permitted hereinabove, both
parties agree to submit to the sole jurisdiction of the Nivelles (Belgium) court for the purpose of
litigating all disputes.

.. _severability:

8.2 Severability
----------------

In case any one or more of the provisions of this Agreement or any application thereof shall be
invalid, illegal or unenforceable in any respect, the validity, legality and enforceability of the
remaining provisions of this Agreement and any application thereof shall be in no way thereby
affected or impaired. Both parties undertake to replace any invalid, illegal or
unenforceable provision of this Agreement by a valid provision having the same effects and
objectives.


.. _appendix_a:

9 Appendix A: Odoo Enterprise Edition License
=============================================

.. only:: latex

    Odoo Enterprise Edition is licensed under the Odoo Enterprise Edition License v1.0,
    defined as follows:

    .. highlight:: none

    .. literalinclude:: ../licenses/enterprise_license.txt

.. only:: html

    See :ref:`odoo_enterprise_license`.





.. FIXME: move this is to appendix or somewhere else?

.. only:: disabled

    Agreement Registration
    ======================

    Customer contact information
    ----------------------------

    Company name:
    Company address:
    VAT number (if applicable):
    Contact name:
    Email:
    Phone:

    Technical contact information (can be an Odoo partner):
    -------------------------------------------------------
    Company name:
    Contact name:
    Email:
    Phone:


    By signing this Agreement I confirm I am a legal representative of Customer as stated in the
    resent section and approve all provisions and conditions of the present Agreement:

    For and on behalf of (company name):
    Last name, first name:
    Title:
    Date:

    Signature: