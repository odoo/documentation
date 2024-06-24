:show-content:

==============================
Communication in Odoo by email
==============================

Communication in Odoo related to records such as CRM opportunities, sales orders, invoices, ...
have a discussion thread called **chatter**, often displayed on the right side of the record.

On the chatter, you can send direct emails or Odoo notifications to the followers of a document
(depending on their notification preferences), log internal notes, send WhatsApp messages or SMSes,
and schedule activities.

If a follower replies to a message, the reply updates the chatter, and Odoo relays it to the
followers as a notification. All emails - outgoing and incoming - appear in the same chatter.

.. _email-online-sh:

Odoo Online and Odoo.sh users
=============================

On Odoo Online and Odoo.sh, outgoing and incoming emails work out of the box, **nothing needs to be
done**. Everything is already configured on your subdomain.

By default, outgoing emails use the following :ref:`notification email address
<email-outbound-notifications>` `notifications@company-name.odoo.com`.

.. _email-online-sh-domain:

Using another domain
--------------------

If you prefer not to have outgoing emails sent from Odoo's subdomain `@company-name.odoo.com` but
instead :ref:`from your own domain <email-outbound-custom-domain>`, **additional configuration will
be necessary** on the domain and within Odoo. This introduces an extra layer of complexity and
necessitates technical knowledge (mainly regarding DNS and mail protocols).

By adding a domain and configuring the administration access rights, you can also access the
:ref:`new domain alias <email-outbound-alias-domain>` page to configure the alias of your companies.
If only one domain is configured, this domain will be shared by all companies on the database.

If you want to keep using Odoo's mail server, you will have to :ref:`configure the SPF and DKIM
<email-domain-spf>`.

If :ref:`you want to use your own mail server <email-outbound-custom-domain-smtp-server>`, you will
have to follow the mail server provider's specific documentation.

For incoming emails, after adding your own domain, :ref:`replies from customers will come back to
your domain <email-inbound-custom-domain>`, and you will need to use one of the three possible ways
to get the emails back into Odoo (using either :ref:`incoming mail server
<email-inbound-custom-domain-incoming-server>`, :ref:`redirection/forwarding
<email-inbound-custom-domain-redirections>` or :ref:`DNS MX record
<email-inbound-custom-domain-mx>`). Everything is covered in the :doc:`Manage inbound messages
documentation <email_communication/email_servers_inbound>`.

.. _email-on-premise:

On-premise users
================

If you are on-premise, you will have to completely configure your outgoing and incoming emails:

- For outgoing emails, you will need :ref:`to use an SMTP server and a custom domain
  <email-outbound-custom-domain-odoo-server>`.
- For incoming emails, set the frequency at which you fetch new emails low enough for responsiveness
  but high enough in order not to stress your system or provider. Due to this reason and the
  simplicity of this configuration, we usually advise on using incoming mail servers. To use an SMTP
  server, check out the :ref:`"Use a custom domain for inbound messages" documentation
  <email-inbound-custom-domain>`.

.. _email-third-party-server:

Using a third-party provider's mail server
==========================================

Odoo's documentation also covers several popular mail servers. As they require specific
authorizations and configuration, they add a layer of complexity. For this reason, using Odoo's
outgoing mail server is recommended.

- :doc:`Outlook documentation <email_communication/azure_oauth>`
- :doc:`Gmail documentation <email_communication/google_oauth>`
- :doc:`Mailjet documentation <email_communication/mailjet_api>`

.. note::
   Every provider has its own limitations. Research the desired provider *before* configuring it.
   For example, Outlook and Gmail might not be suitable for large marketing campaigns.

.. seealso::
   - :doc:`Activities <../essentials/activities>`
   - :doc:`Discuss app <../productivity/discuss>`
   - :doc:`Digest emails <companies/digest_emails>`
   - :doc:`Email Marketing app <../marketing/email_marketing>`
   - :doc:`Email templates <companies/email_template>`
   - :ref:`Expense creation using an email alias <expenses/email_expense>`
   - :ref:`Helpdesk ticket creation using an email alias <helpdesk/receiving_tickets/email-alias>`
   - :ref:`Lead creation using an email alias <crm/configure_email_alias>`
   - :ref:`Project task creation using an email alias <task_creation/email_alias>`
   - :doc:`Technical mail getaway for on-premise users
     <../../administration/on_premise/email_gateway>`
   - :ref:`Technical start of Odoo database with an outgoing mail server configured from the
     command-line interface <reference/cmdline/server/emails>`

.. toctree::
   :titlesonly:

   email_communication/email_servers_inbound
   email_communication/email_servers_outbound
   email_communication/email_domain
   email_communication/azure_oauth
   email_communication/google_oauth
   email_communication/mailjet_api
   email_communication/faq
