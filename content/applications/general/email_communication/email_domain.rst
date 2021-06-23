================================================
Sending emails with Odoo using your email domain
================================================

Records in Odoo (a CRM opportunity, a sales order, an invoice ...) have a discussion thread, called chatter.

When you post a message in the chatter, this message is sent by email to the followers of the document. If a follower replies to the message, the reply is displayed in the chatter, and Odoo relays the reply to the followers.

Emails from your users to partners (customers, vendors) are sent from the email address of your users doing the action. Similarly, emails from partners to users are sent from the email address of the partners. This allows you to recognize at a glance who sent an email relayed by Odoo.

.. note:: Odoo is subject to a daily email limit to prevent abuse. See our FAQ<linkALA>

In case your are using your own domain name, it is recommended that you configure your domain name to ensure that emails from your users reach your partners, rather than being considered spam or being completly rejected.

For the same reason, we recommend that you always give your users an email address from a domain you manage, rather than a generic email address (gmail.com, outlook.com, etc.).

.. _email_domain/spf-compliant:

Be SPF-compliant
================

The Sender Policy Framework (SPF) protocol allows the owner of a domain name to specify which servers are allowed to send email from that domain.

When a server receives an incoming email, it checks whether the IP address of the sending server is on the list of allowed IPs according to the SPF record of the sender.

.. note:: The SPF verification is performed on the domain mentioned in the Return-Path field of the email. In the case of an email sent by Odoo, this domain corresponds to the value of the ``mail.catchall.domain`` key in the database system parameters. See the following documentation :ref:`inbound_messages`

The SPF policy of a domain is set using a TXT record.

How to create or modify a TXT record depends on the provider hosting the DNS zone of your domain name.

Your new SPF record can take up to 48 hours to go into effect, 
but this usually happens more quickly.

.. note:: Adding more than one SPF record for a domain can cause problems 
   with mail delivery and spam classification. Instead, we recommend using 
   only one SPF record by modifying it to authorize Odoo.

.. seealso:: Here is a link to the documentation for some common providers: 

   - `OVH <https://docs.ovh.com/fr/domains/editer-ma-zone-dns/>`_
   - `GoDaddy <https://www.godaddy.com/help/add-a-txt-record-19232>`_
   - `NameCheap <https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/>`_
   - `CloudFlare <https://support.cloudflare.com/hc/en-us/articles/360019093151>`_
   - `Google Domains <https://support.google.com/domains/answer/3290350?hl=en>`_
   - `Azure DNS <https://docs.microsoft.com/en-us/azure/dns/dns-getstarted-portal>`_
   - `Others <https://www.mail-tester.com/spf/>`_

In order for the verification to work properly, each domain can only have one SPF record.

If your domain name does not yet have an SPF record, the content of the record to create is as follows:

``v=spf1 include:_spf.odoo.com ~all``

If your domain name already has an SPF record, you need to update this record (and do not create a new one).

For example, if your TXT record is :

``v=spf1 include:_spf.google.com ~all``

You need to edit it to add ``include:_spf.odoo.com`` :

``v=spf1 include:_spf.odoo.com include:_spf.google.com ~all``

You can check if your SPF record is valid with a free tool like `MXToolbox <https://mxtoolbox.com/spf.aspx>`_.

Enable DKIM
===========

DKIM (DomainKeys Identified Mail) allows you to authenticate your emails with a digital signature.

When sending an email, the Odoo server includes a unique DKIM signature in the headers. The recipient's server decrypts this signature using the DKIM record in your domain name. If the signature and the key contained in the record match, this guarantees that your message is authentic and has not been altered during transport.

To enable DKIM, you must add a CNAME record to the DNS zone of your domain name:

``odoo._domainkey IN CNAME odoo._domainkey.odoo.com.``

For example, if your domain name is mycompany.com, you need to create a subdomain odoo._domainkey.mycompany.com whose canonical name is odoo._domainkey.odoo.com.

How to create or modify a CNAME record depends on the provider hosting the DNS zone of your domain name.

.. seealso:: Here is a link to the documentation for some common providers:

   - `OVH <https://docs.ovh.com/fr/domains/editer-ma-zone-dns/>`_
   - `GoDaddy <https://www.godaddy.com/help/add-a-cname-record-19236>`_
   - `NameCheap <https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/>`_
   - `CloudFlare <https://support.cloudflare.com/hc/en-us/articles/360019093151>`_
   - `Google Domains <https://support.google.com/domains/answer/3290350?hl=en>`_
   - `Azure DNS <https://docs.microsoft.com/en-us/azure/dns/dns-getstarted-portal>`_

You can check if your DKIM record is valid with a free tool like `DKIM Core <https://dkimcore.org/tools/>`_. If a selector is asked, enter 'Odoo'.

Check your DMARC policy
=======================

DMARC (Domain-based Message Authentication, Reporting & Conformance) is a protocol that unifies SPF and DKIM. The instructions contained in the DMARC record of a domain name tell the destination server what to do with an incoming email that fails the SPF and/or DKIM check.

There are three DMARC policies:

#. ``p=none``
#. ``p=quarantine``
#. ``p=reject``

``p=quarantine`` and ``p=reject`` instruct the server that receives an email to quarantine that email or ignore it if the SPF and/or DKIM check fails.

You can check the DMARC record of a domain name with a tool like `MXToolbox <https://mxtoolbox.com/DMARC.aspx>`_.

If your domain name uses DMARC and has defined one of these policies, it is therefore imperative to be SPF compliant or to enable DKIM.

.. danger:: Yahoo or AOL are examples of email providers with a DMARC policy set to ``p=reject``. We strongly advise against using an @yahoo.com or @aol.com address for your users. Using such emails can lead to missing notification of not receiving emails at all.

If one of your partners, customer or vendor, uses DMARC and has defined one of these policies, the Odoo server cannot relay emails from this partner to your users. 

You need to `handle user notifications in Odoo <https://www.odoo.com/documentation/14.0/applications/productivity/discuss/overview/get_started.html?highlight=notification#choose-your-notifications-preference>`_, or replace the email address of the partner with a default email address.
