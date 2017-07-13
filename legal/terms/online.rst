==============================
Odoo Online Terms & Conditions
==============================

.. note:: Version 1 - Last revision: July 12, 2017.

By subscribing to the Odoo Online services (the "Services") provided by Odoo SA and its
affiliates (collectively, "Odoo SA") in relation with Odoo Enterprise Edition or
Odoo Community Edition (the "Software"), you (the "Customer") are agreeing to be bound by the
following terms and conditions (the "Agreement").

.. _term:

1 Term of the Agreement
=======================

The duration of this Agreement (the “Term”) shall be minimally one month and as
specified in writing at the signature of this Agreement, beginning on the date
of the signature. It is automatically renewed for an equal Term, unless either
party provides a written notice of termination minimum 30 days before the end
of the Term by registered mail to the other party.


.. _definitions:

2 Definitions
=============

User
    Any active user account with access to the Software in creation and/or edition mode.
    Deactivated user accounts and accounts used by external people (or systems) who only have
    limited access to the Software through the portal facilities (known as "portal Users") are not
    counted as Users.

Bug
    Is considered a Bug any failure of the Software that results in a complete stop, error
    traceback or security breach, and is not directly caused by a defective installation or
    configuration. Non-compliance with specifications or requirements will be considered as Bugs at
    the discretion of Odoo SA (typically, when the Software does not produce the results or
    performance it was designed to produce, or when a country-specific feature does not meet legal
    accounting requirements anymore).

.. _enterprise_access:

3 Access to source code
=======================

For the duration of this Agreement, Odoo SA gives the Customer a non-exclusive,
non-transferable license to use (execute, modify, execute after modification)
the Odoo software, under the terms set forth in :ref:`appendix_a`.

The Customer agrees to take all necessary measures to guarantee the unmodified
execution of the part of the Software that verifies the validity of the usage
and collects statistics for that purpose, including but not limited to the
running of an instance, the applications installed and the number of Users.

Odoo SA commits not to disclose individual or named figures to third parties without the consent
of the Customer, and to deal with all collected data in compliance with its official Privacy
Policy, as published on `Odoo SA's website <https://www.odoo.com>`_.

Upon expiration or termination of this Agreement, this license is revoked immediately and the
Customer agrees to stop using the software.

Should the Customer breach the terms of this section, the Customer agrees to
pay Odoo SA an extra fee equal to 300% of the applicable list price for the
actual number of Users for one year.


.. _services:

4 Service Level
===============

4.1 Bug Fixing Service
----------------------

For the duration of this Agreement, Odoo SA commits to making all reasonable efforts to remedy any
Bug of the Software submitted by the Customer through the appropriate channel (typically, Odoo SA's
service desk email address or website form), and to start handling such Customer submissions
within 2 business days.

The Customer understands that Bugs caused by a modification or extension that is not part of the
official Software will not be covered by this service.

Both parties acknowledge that as specified in the license of the Software and in the :ref:`liability`
section of this Agreement, Odoo SA cannot be held liable for Bugs in the Software.

4.2 Support Service
-------------------

Support Scope
+++++++++++++

For the duration of this Agreement, Odoo SA offer a support service, with an
unlimited number of tickets for bugs and functional questions: how to use and
configure Odoo for your specific needs.

This support service does not include support to customize Odoo, develop new
modules, or perform specific actions on your database on your behalf. (e.g.
recording data, or configuring the system for you) Those services can be
offered in extra through our Success Pack service offer.

Support Service
+++++++++++++++

Support issues should be submited online on https://odoo.com/help In case of
emergency, you can call our support teams directly for a real time answer.

Our support teams are split across 3 continents in India (Ahmedabad), Belgium
(Brussels) and United States (San Francisco) in order to cover 20 hours per
open day. (monday to friday, excluding legal holidays in the respective
countries)

No guarantees are provided on the time to qualify or close a support ticket,
it's based on our best efforts. But 95% of the tickets are qualified within 2
open days, and 90% of the critical bugs (when a user can not work on the system
anymore) are processed within 2 hours.

The Odoo portal allows you to track you support tickets. 


4.3 Service Availability
------------------------

Customer databases are hosted in the closest Odoo data center (EMEA: France,
Americas: Canada, APAC: Hong Kong or Taiwan). Each customer instance is replicated
in real-time on a hot-standby system located in the same data center.

We work with different hosting providers worldwide (and we can switch at anytime),
but they always deliver at least 99.9% uptime guarantee. These metrics refer to
the availability of the platform itself for all customers. Individual databases
may be temporarily unavailable for specific reasons, typically related to the
customer's actions, customizations or upgrades.

Our data centers are Tier-III certified or equivalent, with N+1 redundancy for
power, network and cooling. 

4.4 Backups & Recovery
----------------------

Every database has 14 full snapshot backups for up to 3 months: 1/day for 7
days, 1/week for 4 weeks, 1/month for 3 months. Every backup is replicated on
at least 3 different machines in different data centers.

Users can download manual backups of their live data at any time. 

For a permanent disaster impacting one server only, our Disaster Recovery Plan
has the following metrics:
- RPO (Recovery Point Objective) = 5 minutes, i.e. can lose maximum 5 minutes of work
- RTO (Recovery Time Objective) = 30 minutes, i.e the service will be back online after maximum 30 minutes  (Standby promotion time + DNS propagation time included)

For data center disasters (one entire data center is completely and permanently
down), Disaster Recovery Plan has these metrics:
- RPO (Recovery Point Objective) = 24h, i.e. you can lose maximum 24h of work if the data cannot be recovered and we need to restore the last daily backup
- RTO (Recovery Time Objective) = 24h, i.e. the service will be restored from the backup within 24 hours in a different data center 

4.5 Security
------------

Database Security
+++++++++++++++++

Customer data is stored in a dedicated database - no sharing of data between
clients. Data access control rules implement complete isolation between customer
databases running on the same cluster, no access is possible from one database
to another.

Password Security
+++++++++++++++++

Customer passwords are protected with industry-standard PBKDF2+SHA512
encryption (salted + stretched for thousands of rounds).

Odoo staff does not have access to your password, and cannot retrieve it for
you, the only option if you lose it is to reset it Login credentials are always
transmitted securely over HTTPS.

System Security
+++++++++++++++

All web connections to client instances are protected with state-of-the-art
256-bit SSL encryption. All our SSL certificates use robust 2048-bit modulus
with full SHA-2 certificates chains. Our servers are kept under a strict
security watch, and always patched against the latest SSL vulnerabilities,
enjoying Grade A SSL ratings at all times.

All Odoo online servers are running hardened Linux distributions with
up-to-date security patches. Installations are ad-hoc and minimal to limit the
number of services that could contain vulnerabilities (no PHP/MySQL stack for
example)

Only a few trusted Odoo engineers have clearance to remotely manage the servers
- and access is only possible using SSH key pairs (password authentication
disallowed)

Firewalls and intrusion counter-measures help prevent unauthorized access.
Automatic Distributed Denial of Service (DDoS) mitigation is implemented in EU
and US data centers, and coming soon in Asia.

Staff Access
++++++++++++

Odoo helpdesk staff may sign into your account to access settings related to
your support issue. For this they use their own special staff credentials, not
your password (which they have no way to know).

This special staff access improves efficiency and security: they can
immediately reproduce the problem you are seeing, you never need to share your
password, and we can audit and control staff actions separately!

Our Helpdesk staff strives to respect your privacy as much as possible, and
only access files and settings needed to diagnose and resolve your issue

Physical Security
+++++++++++++++++

The Odoo Online servers are hosted in several data centers worldwide, that must
all satisfy with our minimum physical security criterions:
- Physical access to the data center area where Odoo servers are located is restricted to data center technicians only
- Security cameras are monitoring the data center locations

Credit Cards Safety
+++++++++++++++++++

When you sign up for a paid Odoo Online subscription, we do not store your
credit card information. Your credit card information is only transmitted
securely between you and our PCI-Compliant payment acquirers: Ingenico and
Paypal (even for recurring subscriptions)

Software Security
+++++++++++++++++

The codebase of Odoo is laregely distributed and, thus, is continuously under
examination by Odoo users and contributors worldwide. Community bug reports are
therefore one important source of feedback regarding security. We encourage
developers to audit the code and report security issues.

Odoo SA commits to sending a "Security Advisory" to the Customer for any
security Bug that are discovered in the Software, at least 2 weeks before
making the Security Advisory public, unless the Bug has already been disclosed
publicly by a third party.

Security Advisories include a complete description of the Bug, its cause, its
possible impacts on the Customer's systems, and the corresponding remedy for
each Covered Version.

The Customer understands that the Bug and the information in the Security
Advisory must be treated are Confidential Information as described in
:ref:`confidentiality` during the embargo period prior to the public
disclosure.

The Odoo R&D processes have code review steps that include security aspects,
for new and contributed pieces of code. Odoo is designed in a way that prevents
introducing most common security vulnerabilities:

- SQL injections are prevented by the use of a higher-level API that does not require manual SQL queries
- XSS attacks are prevented by the use of a high-level templating system that automatically escapes injected data 
- The framework prevents RPC access to private methods, making it harder to introduce exploitable vulnerabilities
- See also the OWASP Top Vulnerabilities section to see how Odoo is designed from the ground up to prevent such vulnerabilities from appearing.

Odoo is regularly audited by independent companies that are hired by our
customers and prospects to perform audits and penetration tests. The Odoo
Security Team receives the results and takes appropriate corrective measures
whenever it is necessary. We can't however disclose any of those results,
because they are confidential and belong to the commissioners.

Odoo also has a very active community of independent security researchers, who
continuously monitor the source code and work with us to improve and harden the
security of Odoo. Our Security Program is described on our Responsible
Disclosure page: https://www.odoo.com/page/responsible-disclosure.

.. _upgrade:

4.6 Upgrade Services
--------------------

.. _upgrade_odoo:

Upgrade Service for the Software
++++++++++++++++++++++++++++++++

For the duration of this Agreement, the Customer can submit upgrade requests,
in order to convert a database of the Software from one Covered Version of the
Software to a more recent Covered Version (the "Target Version").

This service provided through an automated platform in order to allow the Customer to perform
unattended upgrades once a previous version of the Customer's database has been successfully
upgraded for a Covered Version.
The Customer may submit successive upgrade requests for a database, and agrees to submit at least
1 upgrade request for testing purposes before submitting the final upgrade request.

It is the sole responsibility of the Customer to verify and validate the upgraded database in order
to detect Bugs, to analyze the impact of changes and new features implemented in the Target Version,
and to convert and adapt for the Target Version any third-party extensions of the Software that
were installed in the database before the upgrade (except where applicable as foreseen in section
:ref:`upgrade_extra`).

The Customer may submit multiple upgrade requests for a database, until an
acceptable result is achieved.

.. _upgrade_extra:

Upgrade Service for customizations
++++++++++++++++++++++++++++++++++

For the duration of this Agreement, the Customer may request optional upgrade
services for third-party extension modules of the Software, in addition to the
regular Upgrade Services.

This optional service is subject to additional fees
(as described in charges_) and includes the technical adaptation of third-party
modules installed in the Customer's database and their corresponding data in
order to be compatible with the Target Version. The Customer will receive an
upgraded version of all installed third-party modules along with the upgraded
database.

.. _charges:

5 Charges and Fees
==================

.. _charges_standard:

5.1 Standard charges
--------------------

The standard charges for the Odoo Online subscription, the Bug Fixing Service, Security Advisories
Service and the Upgrade Service are based on the number of Users and applications used by
the Customer, and specified in writing at the signature of the Agreement.

When during the Term, the Customer has more Users or applications than
specified at the time of signature of this Agreement, the Customer agrees to
pay an extra fee equivalent to the applicable list price (at the beginning of
the Term) for the additional Users and applications, for the remainder of the
Term.

.. _charges_renewal:

5.2 Renewal charges
-------------------

Upon renewal as covered in section :ref:`term`, if the per-User charges applied
during the previous Term are lower than the most current applicable per-User
list price, the per-User charges will increase by up to 7% per year.


.. _charges_thirdparty:

5.3 Charges for custom features or third-party modules
------------------------------------------------------

.. FIXME: should we really fix the price in the contract?

The additional charge for the Upgrade, Support and Bugfix Service for custom
modules developed by Odoo SA is a recurring price depending on the number of
hours done to develop these custom features:
- 4 EUR / month per hour of development in European contries
- 5 USD / month per hour of development in other countries

In case the modules are not developed by Odoo SA, Odoo SA reserves the right to
reject an upgrade request for third-party modules under the above conditions if
the quality of the source code of those modules is too low, or if these modules
constitute an interface with third-party software or systems. The upgrade of
such modules will subject to a separate offer, outside of this Agreement.

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

.. FIXME: removed the clause about

The Customer agrees to:

- pay Odoo SA any applicable charges for the Services of the present Agreement, in accordance with
  the payment conditions specified in the corresponding invoice ;
- appoint 1 dedicated Customer contact person for the entire duration of the Agreement;


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

.. _termination:

6.5 Termination
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

- the Customer’s computing systems are in good operational order and the Software is installed in a
  suitable operating environment;
- the Customer provides adequate troubleshooting information and access so that Odoo SA can
  identify, reproduce and address problems;
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

    .. include:: ../licenses/enterprise_license.txt
        :literal:

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
