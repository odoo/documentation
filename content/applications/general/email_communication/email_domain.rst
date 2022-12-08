============================================
Configure DNS records to send emails in Odoo
============================================

SPAM labels overview
====================

Sometimes, emails from Odoo are misclassified by the different email providers and end up in spam
folders. At the moment, some settings are out of Odoo's control, notably the way the different email
providers classify Odoo's emails according to their own restriction policy and/or limitations.

It is standard in Odoo that emails are received from ``"name of the author"
<notifications@mycompany.odoo.com>``. In other words this can be translated to: ``"name of the
author" <{ICP.mail.from.filter}@{mail.catchall.domain}>``. In this case ICP stands for
`ir.config.parameters`, which are the System Parameters. Deliverability is greatly improved with the
:ref:`notifications configuration <email_servers/notifications>`.

In order for servers to accept emails from Odoo on a more regular basis, one of the solutions is
for customers to create rules within their own mailbox. A filter can be added to the email inbox so
that when email is received from Odoo (`notifications@mycompany.odoo.com`) it is moved to the
inbox. It is also possible to add the Odoo database domain onto a safe senders list or whitelist
on the receiving domain.

If an Odoo email server appears on a blacklist, notify Odoo via a `new help ticket
<https://www.odoo.com/help>`_ and the support team will work to get the servers removed from the
blacklist.

Should the Odoo database be using a custom domain for sending emails from Odoo there are three
records that should be implemented on the custom domain's DNS to ensure deliverability of email.
This includes setting records for :abbr:`SPF (Sender Policy Framework)`,
:abbr:`DKIM (DomainKeys Identified Mail)` and
:abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)`. Ultimately though,
it is up to the discretion of the final receiving mailbox.

.. _email_communication/spf_compliant:

Be SPF compliant
================

The Sender Policy Framework (SPF) protocol allows the owner of a domain name to specify which
servers are allowed to send emails from that domain. When a server receives an incoming email,
it checks whether the IP address of the sending server is on the list of allowed IPs according to
the sender's :abbr:`SPF (Sender Policy Framework)` record.

.. note::
   The :abbr:`SPF (Sender Policy Framework)` verification is performed on the domain mentioned in
   the `Return-Path` field of the email. In the case of an email sent by Odoo, this domain
   corresponds to the value of the `mail.catchall.domain` key in the database system parameters.

The :abbr:`SPF (Sender Policy Framework)` policy of a domain is set using a TXT record. The way to
create or modify a TXT record depends on the provider hosting the :abbr:`DNS (Domain Name System)`
zone of the domain name. In order for the verification to work properly, each domain can only have
one :abbr:`SPF (Sender Policy Framework)` record.

If the domain name does not yet have a :abbr:`SPF (Sender Policy Framework)` record, create one
using the following input: `v=spf1 include:_spf.odoo.com ~all`

If the domain name already has a :abbr:`SPF (Sender Policy Framework)` record, the record must be
updated (and do not create a new one).

.. example::

   If the TXT record is `v=spf1 include:_spf.google.com ~all`, edit it to add
   `include:_spf.odoo.com`: `v=spf1 include:_spf.odoo.com include:_spf.google.com ~all`

Check if the :abbr:`SPF (Sender Policy Framework)` record is valid with a free tool like `MXToolbox
SPF <https://mxtoolbox.com/spf.aspx>`_.

.. _email_communication/DKIM_compliant:

Enable DKIM
===========

The DomainKeys Identified Mail (DKIM) allows a user to authenticate emails with a digital
signature.

When sending an email, the Odoo server includes a unique :abbr:`DKIM (DomainKeys Identified Mail)`
signature in the headers. The recipient's server decrypts this signature using the :abbr:`DKIM
(DomainKeys Identified Mail)` record in the database's domain name. If the signature and the key
contained in the record match, this guarantees that the message is authentic and has not been
altered during transport.

To enable :abbr:`DKIM (DomainKeys Identified Mail)`, add a :abbr:`CNAME (Canonical Name)` record to
the :abbr:`DNS (Domain Name System)` zone of the domain name:

`odoo._domainkey IN CNAME odoo._domainkey.odoo.com.`

.. tip::
   If the domain name is `mycompany.com`, make sure to create a subdomain
   `odoo._domainkey.mycompany.com` whose canonical name is `odoo._domainkey.odoo.com.`.

The way to create or modify a :abbr:`CNAME (Canonical Name)` record depends on the provider hosting
the :abbr:`DNS (Domain Name System)` zone of the domain name. The most common providers are
:ref:`listed below <email_communication/SPFDKIM_common_providers>`.

Check if the :abbr:`DKIM (DomainKeys Identified Mail)` record is valid with a free tool like `DKIM
Core <https://dkimcore.org/tools/>`_. If a selector is asked, enter `odoo`.

Check the DMARC policy
======================

The Domain-based Message Authentication, Reporting, & Conformance (DMARC) record is a protocol that
unifies :abbr:`SPF (Sender Policy Framework)` and :abbr:`DKIM (DomainKeys Identified Mail)`. The
instructions contained in the :abbr:`DMARC (Domain-based Message Authentication, Reporting, &
Conformance)` record of a domain name tell the destination server what to do with an incoming email
that fails the :abbr:`SPF (Sender Policy Framework)` and/or :abbr:`DKIM (DomainKeys Identified
Mail)` check.

.. example::
   DMARC: TXT record

   `v=DMARC1; p=none;`

There are three :abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)`
policies:

- `p=none`
- `p=quarantine`
- `p=reject`

`p=quarantine` and `p=reject` instruct the server that receives an email to quarantine that email or
ignore it if the :abbr:`SPF (Sender Policy Framework)` and/or :abbr:`DKIM (DomainKeys Identified
Mail)` check fails.

If the domain name uses :abbr:`DMARC (Domain-based Message Authentication, Reporting, &
Conformance)` and has defined one of these policies, the domain must be :abbr:`SPF (Sender Policy
Framework)` compliant or enable :abbr:`DKIM (DomainKeys Identified Mail)`.

.. warning::
   Yahoo or AOL are examples of email providers with a :abbr:`DMARC (Domain-based Message
   Authentication, Reporting, & Conformance)` policy set to `p=reject`. Odoo strongly advises
   against using an *@yahoo.com* or *@aol.com* address for the database users. These emails will
   never reach their recipient.

`p=none` is used for the domain owner to receive reports about entities using their domain. It
should not impact the deliverability if the :abbr:`DMARC (Domain-based Message Authentication,
Reporting, & Conformance)` check fails.

:abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)` records are comprised
of tags in the form of :abbr:`DNS (Domain Name System)` records. These tags/parameters allow for
reporting, such as :abbr:`RUA (Reporting URI of aggregate reports)` and :abbr:`RUF (Reporting URI
for forensic reports)`, along with more precise specification like :abbr:`PCT (Percentage of
messages subjected to filtering)`, :abbr:`P (Policy for organizational domain)`, :abbr:`SP (Policy
for subdomains of the OD)` :abbr:`ADKIM (Alignment mode for DKIM)` & :abbr:`ASPF (Alignment mode for
SPF)`. For best practice, the the :abbr:`DMARC (Domain-based Message Authentication, Reporting, &
Conformance)` policy should not start out being too restrictive.

The following chart displays available tags:

.. list-table::
   :header-rows: 1
   :widths: 15 50 35

   * - Tag Name
     - Purpose
     - Example
   * - v
     - Protocol version
     - `v=DMARC1`
   * - pct
     - Percentage of messages subjected to filtering
     - `pct=20`
   * - ruf
     - Reporting URI for forensic reports
     - `ruf=mailto:authfail@example.com`
   * - rua
     - Reporting URI of aggregate reports
     - `rua=mailto:aggrep@example.com`
   * - p
     - Policy for organizational domain
     - `p=quarantine`
   * - sp
     - Policy for subdomains of the OD
     - `sp=reject`
   * - adkim
     - Alignment mode for DKIM
     - `adkim=s`
   * - aspf
     - Alignment mode for SPF
     - `aspf=r`

Check the :abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)` record of a
domain name with a tool like `MXToolbox DMARC <https://mxtoolbox.com/DMARC.aspx>`_.

.. seealso::
   `DMARC.org is another great resource to learn about DMARC records.
   <https://dmarc.org/overview/>`_

.. _email_communication/SPFDKIM_common_providers:

SPF, DKIM & DMARC documentation of common providers
===================================================

- `OVH DNS <https://docs.ovh.com/us/en/domains/web_hosting_how_to_edit_my_dns_zone/>`_
- `OVH SPF <https://docs.ovh.com/us/en/domains/web_hosting_the_spf_record/>`_
- `GoDaddy TXT record <https://www.godaddy.com/help/add-a-txt-record-19232>`_
- `GoDaddy SPF <https://www.godaddy.com/help/add-an-spf-record-19218>`_
- `GoDaddy DKIM <https://www.godaddy.com/help/add-a-cname-record-19236>`_
- `NameCheap <https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-
  txtspfdkimdmarc-records-for-my-domain/>`_
- `CloudFlare DNS <https://support.cloudflare.com/hc/en-us/articles/360019093151>`_
- `Google Domains <https://support.google.com/domains/answer/3290350?hl=en>`_
- `Azure DNS <https://docs.microsoft.com/en-us/azure/dns/dns-getstarted-portal>`_

To fully test the configuration, use the `Mail-Tester <https://www.mail-tester.com/>`_ tool, which
gives a full overview of the content and configuration in one sent email. Mail-Tester can also be
used to configure records for other, lesser-known providers.

.. seealso::
   `Using Mail-Tester to set SPF Records for specific carriers <https://www.mail-tester.com/spf/>`_
