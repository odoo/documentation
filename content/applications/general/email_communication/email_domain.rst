.. _email_domain:

============================================
Configure DNS records to send emails in Odoo
============================================

.. _email_domain/authenticate_custom_domain_mail:

Send authenticated emails from Odoo using custom domain
=======================================================

This documentation introduces three complementary authentication methods for proving the legitimacy of an email sender. In an effort by email service providers to fight spam and phishing, not complying with protocols will greatly reduce chances of reaching inboxes.

.. _email_domain/email_odoo_default:

The **Odoo Online and Odoo.sh** databases are configured to **send authenticated emails out of the box** by sending emails from a default Odoo subdomain address (eg. `\@mycompany.odoo.com`).

.. note::
   The Odoo subdomains are pre-configured for SPF / DKIM / DMARC. No configuration is required from the customer email will be sent and received in Odoo without any required configuration.

.. _email_domain/email_custom_domain:

If **choosing to use a custom domain instead, configuring SPF and DKIM correctly is essential** to prevent emails from being quarantined as spam or not being delivered to recipients.

.. note::
   The SPF and DKIM records below must be configured if using :ref:`the default Odoo email server to send email from a custom domain <email_servers_outbound/_custom_domain_w_Odoo_MS>`. If using an outgoing email server, it will be require to use the SPF and DKIM records specific to that email service and a custom domain.

Email service providers apply different rules to incoming emails. An email may be classified as spam even if it passes SPF and DKIM, but it certainly will be if it fails these checks.


.. _email_domain/spf_compliant:

Be SPF compliant
================

The Sender Policy Framework (SPF) protocol allows the owner of a domain name to specify which servers are allowed to send emails from that domain. When a server receives an incoming email, it checks whether the IP address of the sending server is on the list of allowed IPs according to the sender's :abbr:`SPF (Sender Policy Framework)` record.

The **SPF test is performed on the bounce address** defined by the Alias Domain in the General Settings. If using a custom domain as Alias Domain, configure it to be SPF-compliant.

The SPF policy of a domain is set using a `TXT record`. The way to create or modify this record depends on the provider hosting the :abbr:`DNS (Domain Name System)` zone of the domain name.

If the domain name does not yet have an `SPF record`, create one using the following input:

.. code-block:: bash

   v=spf1 include:_spf.odoo.com ~all

If the domain name **already has an SPF record, the record must be updated** (and do not create a new one). A domain must have an single SPF record.

.. example::
   If the TXT record is `v=spf1 include:_spf.google.com ~all`, edit it to add
   `include:_spf.odoo.com`: `v=spf1 include:_spf.odoo.com include:_spf.google.com ~all`

Check the SPF record using a tool like `MXToolbox <https://mxtoolbox.com/spf.aspx>`_. Creating or modifying an SPF record depends on the provider hosting the DNS zone of the domain name. The most common providers are listed `below <email_domain/SPFDKIM_common_providers>`.


.. _email_domain/DKIM_compliant:

Enable DKIM
===========

The DomainKeys Identified Mail (DKIM) allows a user to authenticate emails with a digital
signature.

When sending an email, the Odoo email server includes a unique :abbr:`DKIM (DomainKeys Identified Mail)` signature in the headers. The recipient's server decrypts this signature using the DKIM record in the database's domain name. If the signature and the key contained in the record match, this guarantees that the message is authentic and has not been altered during transport.

**Enabling DKIM is required if sending emails from a custom domain** using the Odoo email server.

To enable DKIM, add a :abbr:`CNAME (Canonical Name)` record to the :abbr:`DNS (Domain Name System)` zone of the domain name:

.. code-block:: bash

   odoo._domainkey IN CNAME odoo._domainkey.odoo.com.

.. tip::
   If the domain name is `mycompany.com`, make sure to create a subdomain
   `odoo._domainkey.mycompany.com` whose canonical name is `odoo._domainkey.odoo.com.`.

The way to create or modify a CNAME record depends on the provider hosting
the DNS zone of the domain name. The most common providers are
:ref:`listed below <email_domain/spf_compliant>`.

Check if the DKIM record is valid using a tool like `MXToolbox <https://mxtoolbox.com/spf.aspx>`_. Enter 'example.com:odoo' in the DKIM Lookup tool, specifying that the selector being tested is 'odoo' for the custom domain 'example.com'.

.. _email_domain/DMARC_policy:

Check the DMARC policy
======================

The  :abbr:`DMARC (Domain-based Message Authentication, Reporting, & Conformance)` record is a protocol that unifies :abbr:`SPF (Sender Policy Framework)` and :abbr:`DKIM (DomainKeys Identified Mail)`. The instructions contained in the DMARC record of a domain name tell the destination server what to do with an incoming email that fails the SPF and/or DKIM check.

.. note::
   The aim of this documentation is to help **understand the impact DMARC has on the deliverability of emails** rather than giving precise instructions for creating a DMARC record. Refer to a resource like `DMARC.org <https://dmarc.org/>`_ to set the DMARC policy.

There are three DMARC policies:

- `p=none`
- `p=quarantine`
- `p=reject`

`p=quarantine` and `p=reject` instruct the server that receives an email to quarantine that email or ignore it if the :abbr:`SPF (Sender Policy Framework)` and/or :abbr:`DKIM (DomainKeys Identified Mail)` check fails.

.. note::
   **For DMARC to pass, DKIM or SPF checks need to pass** and the domains must be in alignment. If the hosting type is Odoo Online, DKIM configuration on the sending domain is required for DMARC to pass.

Passing DMARC generally means that the email will be successfully delivered. However, it's important to note that **other factors like spam filters can still reject or quarantine a message**.

`p=none` is used for the domain owner to receive reports about entities using their domain. It should not impact the deliverability.

.. example::
   :literal:`_dmarc IN TXT “v=DMARC1; p=none; rua=mailto:postmaster@example.com” ` Meaning that aggregate DMARC reports will be sent to `postmaster\@example.com`.


.. _email_domain/mail_config_common_providers:

SPF, DKIM & DMARC documentation of common providers
===================================================

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

