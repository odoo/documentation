:show-content:
:hide-page-toc:
:show-toc:

.. _emails_servers:

============================== 
Communication in Odoo by email
==============================

Communication in Odoo related to records such as a CRM opportunity, a sales
order, an invoice,... have a discussion thread, called **chatter**, often
displayed on the right side of the record.

On an Odoo chatter, you can send direct email or a notification to the followers
of a document (depending on the notification preference defined on his user
profile), log an internal note, send a whatsapp messenger or an SMS, schedule
activities (To-Do, call reminder, meetings, …). The sender of the email will
not notify himself upon sending something, emails and sms are only addressed to the followers.

If a follower replies to the message, the reply updates the chatter, and Odoo
relays it to the followers as a notification. All emails (outgoing and
incoming) appear in the same chatter. More information about the notifications system can be found :ref:`here 
<email_servers_inbound/custom_domain_inbound_emails>`.

By default in our SaaS & SH environment, those notifications are sent using a
:ref:`default from address <email_servers_outbound/notification_system>`.


Odoo Online or Odoo.sh users 
============================

On our platforms SaaS & SH, outgoing and incoming emails already work
out-of-the-box. So for Odoo Online and Odoo.sh customers, **nothing needs to be done!** :ref:`Everything is fully configured on your subdomain <email_domain/email_odoo_default>`.

By default, the email that goes out in our platforms will use the :ref:`notifications email <email_servers_outbound/notification_system>`: `notifications\@mycompany.odoo.com`.

If the preference is :ref:`not to have outgoing emails sent from Odoo's subdomain <email_servers_outbound/custom_domain_email>`
`@mycompany.odoo.com` but rather from your own domain, **additional
configuration will be necessary** on the domain and within Odoo. This
introduces an extra layer of complexity and will necessitate technical
knowledge (mainly concerning DNS and mail protocols).

By adding a domain and configuring access rights through administration, one can
also access the :ref:`new domain alias <email_servers_outbound/alias_domain>` page. If only one domain is configured, this
domain will be shared by all the companies on the database.

By default, visibility is limited to the domain name and its associated
company/-ies. Upon entering debug mode, additional configuration options for
technical local-parts(such as catchall & bounce) become available, although
it's generally not recommended unless specific needs dictate; this will affect
the replies to previously sent emails. As for the Odoo side, the configuration
is now deemed correct.

The next step is to configure the outgoing part: if you want to keep using
Odoo's mail server, you will have to do a SPF & DKIM configuration, as
explained in this :ref:`SPF & DKIM documentation <email_domain/email_custom_domain>`. Our documentation also provide :ref:`some external providers documentation pages <email_domain/mail_config_common_providers>`.

If :ref:`you want to use your own mail server <email_servers_outbound/_external_smtp>`, you will have to follow their specific documentation.

For the incoming part, now that you added your own domain, :ref:`the reply from your customer will come back to your domain <email_servers_inbound/custom_domain_inbound_emails>`, and you will need to use one of the three possible ways to get the email back in Odoo(using either :ref:`incoming mail server <email_servers_inbound/incoming_mail_servers>`, :ref:`redirection/forwarding <email_servers_inbound/redirections>` or the :ref:`DNS MX record <email_servers_inbound/mx_record>`). This part is covered in our :doc:`inbound documentation <email_servers/email_servers_inbound>`.


For On-premises
===============

In this case, you will have to completely configure your outgoing and incoming
emails:
- For outgoing, you will need :ref:`the usage of an SMTP server and a custom domain <email_servers_outbound/_custom_domain_w_Odoo_MS>`.
- For incoming, on a on-premise server, as system administrator handle the cron and Odoo cron system, it's adviced to see with them on the minimum interval between every fetch (this will usually be lower than on our servers). Due to this reason, we usually advice on using incoming mail servers. To use an SMTP
server, the topic is covered :ref:`here <email_servers_inbound/_mail_gateway_script>`.


Usage of mail servers
=====================

Our documentation is also talking about configuration of famous mail servers
that require some specific authorization and configuration.

Please be aware that these are not recommendations for usage. Whenever feasible,
prioritize the use of Odoo's Outgoing Mail Server due to the additional layer
of complexity it will add to configure them.

- :doc:`Outlook documentation <azure_oauth>`
- :doc:`Gmail documentation <google_oauth>`
- :doc:`Mailjet documentation <mailjet_api>`

.. note:: Every provider has their own restriction. Outlook and Gmail might not be suitable for big marketing campaigns. It's adviced to search on the limitation of the desired provider before setting it up on the Odoo instance.

.. _emails_servers/other_documentation:

Other Odoo mailing documentation page 
=====================================

- :doc:`Mail activities <../../../applications/essentials/activities>`
- :doc:`Digest emails <../companies/digest_emails>`
- :doc:`Customization of mailing templates <../companies/email_template>`
- :ref:`Expenses creation by email using alias <expenses/new_from_email>`
- :ref:`Lead creation by email using alias <crm/configure_email_alias>`
- :ref:`Email Marketing apps <email_marketing>`
- :ref:`Helpdesk ticket creation using alias <helpdesk/receiving_tickets/email-alias>`
- :ref:`Project Task creation using alias <project/email_alias>`
- :ref:`Internal communication with Discuss app <discuss_app>`
- :ref:`Technical mail getaway for on-premise users <email_gateway>`
- :ref:`Technical start of Odoo database with Outgoing mail server configured in command line <reference/cmdline/server/emails>`


Mailing table of content
========================

.. toctree::

   email_servers/email_servers_inbound 
   email_servers/email_servers_outbound