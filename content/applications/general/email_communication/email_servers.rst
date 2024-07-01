:show-content:
:hide-page-toc:
:show-toc:

==============================
Communication in Odoo by email
==============================

Communication in Odoo related to a records such as CRM opportunities, sales orders, invoices, ...
have a discussion thread, called **chatter**, often displayed on the right side of the record.

On the chatter, you can send direct emails or Odoo notifications to the followers of a document
(depending on their notification preferences), log internal notes, send WhatsApp messages or
SMSes, and schedule activities.

If a follower replies to a message, the reply updates the chatter, and Odoo relays it to the
followers as a notification. All emails - outgoing and incoming - appear in the same chatter. For
more information about the notification system, check out the :ref:`Manage inbound messages
documentation <email_servers_inbound/custom_domain_inbound_emails>`.

Odoo Online and Odoo.sh users
=============================

On Odoo Online and Odoo.sh, outgoing and incoming emails work out of the box, **nothing needs to be
done**. Everything is already :ref:`configured on your subdomain <email_domain/email_odoo_default>`.

By default, outgoing emails use the following :ref:`notification email address
<email_servers_outbound/notification_system>` `notifications\@mycompany.odoo.com`.

Using another domain
--------------------

If you prefer not to have outgoing emails sent from Odoo's subdomain `@mycompany.odoo.com` but
instead :ref:`from your own domain <email_servers_outbound/custom_domain_email>`, **additional
configuration will be necessary** on the domain and within Odoo. This introduces an extra layer of
complexity and necessitates technical knowledge (mainly regarding DNS and mail protocols).

By adding a domain and configuring the administration access rights, you can also access the
:ref:`new domain alias <email_servers_outbound/alias_domain>` page. If only one domain is
configured, this domain will be shared by all companies on the database.

.. note::
   Upon entering debug mode on a company profile, additional configuration options (such as catchall
   and bounce) become available. It is generally not recommended to use these options unless
   specific needs dictate, as using them will affect all replies to previously sent emails.

If you want to keep using Odoo's mail server, you will have to :ref:`configure the SPF and DKIM
<email_domain/email_custom_domain>`.

If :ref:`you want to use your own mail server <email_servers_outbound/_external_smtp>`, you will
have to follow the mail server provider's specific documentation.

For incoming emails, after adding your own domain, :ref:`replies from customers will come back to
your domain <email_servers_inbound/custom_domain_inbound_emails>`, and you will need to use one of
the three possible ways to get the emails back into Odoo (using either :ref:`incoming mail server
<email_servers_inbound/incoming_mail_servers>`, :ref:`redirection/forwarding
<email_servers_inbound/redirections>` or :ref:`DNS MX record <email_servers_inbound/mx_record>`).
Everything is covered in the :doc:`Manage inbound messages documentation
<email_servers/email_servers_inbound>`.

On-premise users
================

If you are on-premise, you will have to completely configure your outgoing and incoming emails:

- For outgoing emails, you will need :ref:`to use an SMTP server and a custom domain
  <email_servers_outbound/_custom_domain_w_Odoo_MS>`.
- For incoming emails, check what is the minimum interval between every cron fetch. As the interval
  is usually lower than on Odoo's servers, using your own incoming mail server is recommended. To
  use an SMTP server, check out the :ref:`Manage inbound messages documentation
  <email_servers_inbound/_mail_gateway_script>`.

Using a third-party provider's mail server
==========================================

Odoo's documentation also covers several popular mail servers. As they require specific
authorizations and configuration, they add a layer of complexity. For this reason, using Odoo's
outgoing mail server is recommended.

- :doc:`Outlook documentation <azure_oauth>`
- :doc:`Gmail documentation <google_oauth>`
- :doc:`Mailjet documentation <mailjet_api>`

.. note::
   Every provider has its own limitations. Research the desired provider *before* configuring it.
   For example, Outlook and Gmail might not be suitable for large marketing campaigns.

.. _emails_servers/other_documentation:

Mailing-related documentation
=============================

- :doc:`Activities <../../../applications/essentials/activities>`
- :doc:`Discuss app <../../productivity/discuss>`
- :doc:`Digest emails <../companies/digest_emails>`
- :doc:`Email Marketing app <../../marketing/email_marketing>`
- :doc:`Email templates <../companies/email_template>`
- :ref:`Expense creation using an email alias <expenses/new_from_email>`
- :ref:`Helpdesk ticket creation an email alias <helpdesk/receiving_tickets/email-alias>`
- :ref:`Lead creation using an email alias <crm/configure_email_alias>`
- :doc:`Project task creation using an email alias <../../services/project/tasks/email_alias>`
- :doc:`Technical mail getaway for on-premise users
  <../../../administration/on_premise_email_gateway>`
- :ref:`Technical start of Odoo database with an outgoing mail server configured from the
  command-line interface <reference/cmdline/server/emails>`

Mailing table of content
========================

.. toctree::

   email_servers/email_servers_inbound
   email_servers/email_servers_outbound
