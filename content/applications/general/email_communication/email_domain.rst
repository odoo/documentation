=======================
Send an email with Odoo
=======================

Use an email domain in Odoo
===========================

Documents in Odoo (such as a CRM opportunity, a sales order, an invoice, etc.) have a discussion
thread, called *chatter*.

When a database user posts a message in the chatter, this message is sent by email to the followers
of the document. If a follower replies to the message, the reply updates the chatter, and Odoo
relays the reply to the followers as a notification.

Messages sent in the chatter from internal database users to external users (such as partners,
customers, or vendors) are relayed on behalf of the database users. Messages sent back to the
chatter from external users will appear in the chatter from their respective email addresses, or as
they are listed in their Contacts record.

If the Odoo database is hosted on the cloud (Odoo Online or Odoo.sh), it is not necessary to add an
outgoing email server to send emails from a custom domain.

.. important::
   The Odoo server is subject to a daily email limit to prevent abuse. The default limit is 200
   emails sent per day for databases with an **Enterprise** subscription. This limit can be
   increased under certain conditions. See the :doc:`FAQ <faq>` or contact support for more
   information.

To ensure that emails sent to and from the chatter reach their intended contacts, instead of being
considered spam, Odoo recommends configuring the domain name.

For the same reason, Odoo also recommends giving each database user an email address from the
configured domain, rather than a generic email address domain (such as gmail.com, outlook.com,
etc.).

.. _email_communication/spf_compliant:

Be SPF compliant
================

The Sender Policy Framework (SPF) protocol allows the owner of a domain name to specify which
servers are allowed to send emails from that domain. When a server receives an incoming email,
it checks if the IP address of the sending server is on the list of allowed IPs according to the
sender's :abbr:`SPF (Sender Policy Framework)` record.

.. note::
   The :abbr:`SPF (Sender Policy Framework)` verification is performed on the domain mentioned in
   the `Return-Path` field of the email. In the case of an email sent by Odoo, this domain
   corresponds to the value of the `mail.catchall.domain` key in the database system parameters.

   See the :ref:`documentation on incoming emails <email_communication/inbound_messages>`.

The :abbr:`SPF (Sender Policy Framework)` policy of a domain is set using a TXT record. The way to
create or modify a TXT record depends on the provider hosting the :abbr:`DNS (Domain Name System)`
zone of the domain name. In order for the verification to work properly, each domain can only have
one :abbr:`SPF (Sender Policy Framework)` record.

If the domain name does not yet have an :abbr:`SPF (Sender Policy Framework)` record, the content
of the record to create it is as follows:

`v=spf1 include:_spf.odoo.com ~all`

If the domain name already has an :abbr:`SPF (Sender Policy Framework)` record, the record must be
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

There are three :abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)`
policies:

- `p=none`
- `p=quarantine`
- `p=reject`

`p=quarantine` and `p=reject` instruct the server that receives an email to quarantine that email
or ignore it if the :abbr:`SPF (Sender Policy Framework)` and/or :abbr:`DKIM (DomainKeys Identified
Mail)` check fails.

If the domain name uses :abbr:`DMARC (Domain-based Message Authentication, Reporting, &
Conformance)` and has defined one of these policies, the domain must be :abbr:`SPF (Sender Policy
Framework)` compliant or enable :abbr:`DKIM (DomainKeys Identified Mail)`.

.. danger::
   Yahoo or AOL are examples of email providers with a :abbr:`DMARC (Domain-based Message
   Authentication, Reporting, & Conformance)` policy set to `p=reject`. Odoo strongly advises
   against using an *@yahoo.com* or *@aol.com* address for the database users. These emails will
   never reach their recipient.

`p=none` is used for the domain owner to receive reports about entities using their domain. It
should not impact the deliverability if the :abbr:`DMARC (Domain-based Message Authentication,
Reporting, & Conformance)` check fails.

Check the :abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)` record of a
domain name with a tool like `MXToolbox DMARC <https://mxtoolbox.com/DMARC.aspx>`_.

If a partner, customer, or vendor, uses :abbr:`DMARC (Domain-based Message Authentication,
Reporting, & Conformance)` and has defined one of these policies, the Odoo server cannot relay
emails from this partner to the database users.

To solve this issue, :ref:`handle user notifications in Odoo
<discuss_app/notification_preferences>`, or replace the email address of the partner with a default
email address.

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
used for other, lesser-known providers.

.. _email_communication/default:

Use a default email address
===========================

Access the :guilabel:`System Parameters` by activating :ref:`developer mode <developer-mode>` and
going to :menuselection:`Settings --> Technical --> Parameters --> System Parameters` menu.

To force the email address from which emails are sent, a combination of the following keys needs to
be set in the system parameters of the database:

- `mail.default.from`: accepts the local part or a complete email address as value
- `mail.default.from_filter`: accepts a domain name or a full email address as value

.. note::
   The `mail.default.from_filter` works only for `odoo-bin` configurations, otherwise this
   parameter can be set using the `from_filter` field on `ir.mail_server`.

If the email address of the author does not match `mail.default.from_filter`, the email address is
replaced by `mail.default.from` (if it contains a full email address) or a combination of
`mail.default.from` and `mail.catchall.domain`.

If the `from_filter` contains a full email address, and if the `mail.default.from` is the same as
this address, then all of the email addresses that are different from `mail.default.from` will be
encapsulated in `mail.default.from`.
