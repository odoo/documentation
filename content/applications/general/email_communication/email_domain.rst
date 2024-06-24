============================================
Configure DNS records to send emails in Odoo
============================================

This documentation presents three complementary authentication protocols (SPF, DKIM, and DMARC) used
to prove the legitimacy of an email sender. Not complying with these protocols will greatly reduce
chances of your emails to reach their destination.

**Odoo Online** and **Odoo.sh** databases using the **default Odoo subdomain address** (e.g.,
`\@company-name.odoo.com`) are pre-configured to **send authenticated emails** compliant with the
SPF, DKIM, and DMARC protocols.

If choosing to use a **custom domain** instead, **configuring SPF and DKIM records correctly is
essential** to prevent emails from being quarantined as spam or not being delivered to recipients.

If using :ref:`the default Odoo email server to send emails from a custom domain
<email-outbound-custom-domain-odoo-server>`, the SPF and DKIM records must be configured as
presented below. If using an outgoing email server, it is required to use the SPF and DKIM records
specific to that email service and a custom domain.

.. note::
   Email service providers apply different rules to incoming emails. An email may be classified as
   spam even if it passes the SPF and DKIM checks.

.. _email-domain-spf:

SPF (Sender Policy Framework)
=============================

The Sender Policy Framework (SPF) protocol allows the owner of a domain name to specify which
servers are allowed to send emails from that domain. When a server receives an incoming email, it
checks whether the IP address of the sending server is on the list of allowed IPs according to the
sender's :abbr:`SPF (Sender Policy Framework)` record.

In Odoo, the **SPF test is performed on the bounce address** defined under the :guilabel:`Alias
Domain` field found under the database's :guilabel:`General Settings`. If using a custom domain as
:guilabel:`Alias Domain`, it is necessary to configure it to be SPF-compliant.

The SPF policy of a domain is set using a TXT record. The way to create or modify this record
depends on the provider hosting the :abbr:`DNS (Domain Name System)` zone of the domain name.

If the domain name does not yet have an SPF record, create one using the following input:

.. code-block:: bash

   v=spf1 include:_spf.odoo.com ~all

If the domain name **already has an SPF record, the record must be updated**. Do not create a new
one, as a domain must have only one SPF record.

.. example::
   If the TXT record is `v=spf1 include:_spf.google.com ~all`, edit it to add
   `include:_spf.odoo.com`: `v=spf1 include:_spf.odoo.com include:_spf.google.com ~all`

Check the SPF record using a tool like `MXToolbox SPF Record Check
<https://mxtoolbox.com/spf.aspx>`_. The process to create or modify an SPF record depends on the
provider hosting the DNS zone of the domain name. The :ref:`most common providers
<email-domain-providers-documentation>` and their documentation are listed below.

.. _email-domain-dkim:

DKIM (DomainKeys Identified Mail)
=================================

The DomainKeys Identified Mail (DKIM) allows a user to authenticate emails with a digital signature.

When sending an email, the Odoo email server includes a unique :abbr:`DKIM (DomainKeys Identified
Mail)` signature in the headers. The recipient's server decrypts this signature using the DKIM
record in the database's domain name. If the signature and the key contained in the record match, it
proves the message is authentic and has not been altered during transport.

Enabling DKIM is **required** when sending emails **from a custom domain** using the Odoo email
server.

To enable DKIM, add a :abbr:`CNAME (Canonical Name)` record to the :abbr:`DNS (Domain Name System)`
zone of the domain name:

.. code-block:: bash

   odoo._domainkey IN CNAME odoo._domainkey.odoo.com.

.. tip::
   If the domain name is `company-name.com`, make sure to create a subdomain
   `odoo._domainkey.company-name.com` whose canonical name is `odoo._domainkey.odoo.com.`.

The way to create or modify a CNAME record depends on the provider hosting the DNS zone of the
domain name. The :ref:`most common providers <email-domain-providers-documentation>` and their
documentation are listed below.

Check if the DKIM record is valid using a tool like `MXToolbox DKIM Record Lookup
<https://mxtoolbox.com/dkim.aspx>`_. Enter `example.com:odoo` in the DKIM lookup tool, specifying
that the selector being tested is `odoo` for the custom domain `example.com`.

.. _email-domain-dmarc:

DMARC (Domain-based Message Authentication, Reporting and Conformance)
======================================================================

The :abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)` record is a
protocol that unifies :abbr:`SPF (Sender Policy Framework)` and :abbr:`DKIM (DomainKeys Identified
Mail)`. The instructions contained in the DMARC record of a domain name tell the destination server
what to do with an incoming email that fails the SPF and/or DKIM check.

.. note::
   The aim of this documentation is to help **understand the impact DMARC has on the deliverability
   of emails**, rather than give precise instructions for creating a DMARC record. Refer to a
   resource like `DMARC.org <https://dmarc.org/>`_ to set the DMARC record.

There are three DMARC policies:

- `p=none`
- `p=quarantine`
- `p=reject`

`p=quarantine` and `p=reject` instruct the server that receives an email to quarantine that email or
ignore it if the SPF or DKIM check fails.

.. note::
   **For the DMARC to pass, the DKIM or SPF check needs to pass** and the domains must be in
   alignment. If the hosting type is Odoo Online, DKIM configuration on the sending domain is
   required to pass the DMARC.

Passing DMARC generally means that the email will be successfully delivered. However, it's important
to note that **other factors like spam filters can still reject or quarantine a message**.

`p=none` is used for the domain owner to receive reports about entities using their domain. It
should not impact the deliverability.

.. example::
   :literal:`_dmarc IN TXT “v=DMARC1; p=none; rua=mailto:postmaster@example.com”` means that
   aggregate DMARC reports will be sent to `postmaster\@example.com`.

.. _email_domain/mail_config_common_providers:
.. _email-domain-providers-documentation:

SPF, DKIM and DMARC documentation of common providers
=====================================================

- `OVH DNS <https://docs.ovh.com/us/en/domains/web_hosting_how_to_edit_my_dns_zone/>`_
- `GoDaddy TXT record <https://www.godaddy.com/help/add-a-txt-record-19232>`_
- `GoDaddy CNAME record <https://www.godaddy.com/help/add-a-cname-record-19236>`_
- `NameCheap <https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/>`_
- `CloudFlare DNS <https://support.cloudflare.com/hc/en-us/articles/360019093151>`_
- `Google Domains <https://support.google.com/domains/answer/3290350?hl=en>`_
- `Azure DNS <https://docs.microsoft.com/en-us/azure/dns/dns-getstarted-portal>`_

To fully test the configuration, use the `Mail-Tester <https://www.mail-tester.com/>`_ tool, which
gives a full overview of the content and configuration in one sent email. Mail-Tester can also be
used to configure records for other, lesser-known providers.

.. seealso::
   `Using Mail-Tester to set SPF Records for specific carriers <https://www.mail-tester.com/spf/>`_
