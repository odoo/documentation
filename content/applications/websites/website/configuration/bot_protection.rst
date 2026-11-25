==============
Bot protection
==============

Bots and crawlers, such as search engine indexers, AI crawlers, and scrapers, can generate a large
share of a website's traffic. Each of their requests uses server resources and can slow down the
website and the database for visitors and internal users.

Cloudflare's free plan can filter this traffic before it reaches the Odoo database. It also includes
unmetered DDoS protection, which is always enabled.

.. seealso::
   - `Cloudflare's bots documentation <https://developers.cloudflare.com/bots/>`_
   - :doc:`spam_protection`
   - :doc:`Search engine optimization (robots.txt) <../structure/seo>`

.. note::
   The Cloudflare dashboard paths below use Cloudflare's new security dashboard. If it is not
   enabled yet, click :guilabel:`Try new dashboard` on any :guilabel:`Security` page.

.. _website/bot_protection/proxy:

Route traffic through Cloudflare
================================

#. `Sign up and log in to Cloudflare <https://dash.cloudflare.com/sign-up>`_, then add your domain
   name to Cloudflare as described in :ref:`domain-name/naked/cloudflare`. On the free plan, your
   domain name must use Cloudflare's nameservers.
#. Go to :guilabel:`DNS` and edit the CNAME record pointing to your Odoo database (e.g.,
   `www.yourdomain.com` targeting `mycompany.odoo.com`). Set the :guilabel:`Proxy status` to
   :guilabel:`Proxied`. If the naked domain is redirected to the `www` subdomain, its CNAME record
   must also be proxied.

   .. note::
      Cloudflare can only filter traffic for proxied records. To stop using Cloudflare's
      protection, set the :guilabel:`Proxy status` back to :guilabel:`DNS only`.

#. Go to :menuselection:`SSL/TLS --> Overview` and keep the default :guilabel:`Automatic SSL/TLS`
   encryption mode, or select :guilabel:`Full (strict)`.

   .. warning::
      Never use the :guilabel:`Flexible` encryption mode. Odoo redirects all HTTP requests to HTTPS,
      which causes an infinite redirect loop when Cloudflare connects to the database over HTTP.

.. tip::
   Bots can bypass Cloudflare by accessing the database through its `.odoo.com` address. On
   Odoo.sh, once everything else is configured, direct access to the `.odoo.com` address can be
   blocked from the Odoo.sh settings.

.. _website/bot_protection/paths:

Paths that must remain reachable
================================

Some services must reach the Odoo database directly without being challenged or blocked. Exclude
the following paths from any restriction added on top of Cloudflare's default settings (e.g.,
custom rules, :guilabel:`Under Attack mode`, :guilabel:`Always Use HTTPS`, or configuration rules):

- `/.well-known/acme-challenge/`: used by Let's Encrypt to issue and renew the :ref:`SSL
  certificate <domain-name/ssl>` of your domain name. If these requests are blocked, the
  certificate cannot be renewed and visitors receive a security warning once it expires.
- `/payment/`: used by payment providers to confirm transactions.
- `/web/hook/`: used by automation rules triggered by webhooks.
- `/xmlrpc`, `/jsonrpc`, and `/json/`: used by external applications connecting to Odoo's API.
- `/iot/`: used by IoT boxes to communicate with the database.
- `/websocket`: used for real-time updates (e.g., Point of Sale, Discuss, and Live Chat). Make sure
  :guilabel:`WebSockets` is enabled in Cloudflare's :guilabel:`Network` settings.

.. note::
   This list is not exhaustive. Other integrations (e.g., shipping connectors or messaging apps) may
   also send requests to the database.

.. _website/bot_protection/settings:

Recommended settings
====================

.. _website/bot_protection/ai-crawlers:

AI crawlers
-----------

#. Go to :menuselection:`Security --> Settings` and select the :guilabel:`Bot traffic` filter.
#. Under :guilabel:`AI Crawler and Agent access policies`, review the current values, as defaults
   vary between domains:

   - :guilabel:`Search`: keep :guilabel:`Allow` to remain visible in search engines.
   - :guilabel:`Training`: select :guilabel:`Disallow` and enable :guilabel:`Bot Preference Sync`.
     Cloudflare adds the corresponding directives to the website's `robots.txt` and blocks AI
     training crawlers.
   - :guilabel:`Agent`: select :guilabel:`Block` if AI agents should not browse the website.

     .. note::
        AI agents visit websites on behalf of their users, for example, when someone asks an AI
        assistant a question about your products or services. Blocking them prevents these agents
        from gathering information from your website to answer such queries.

#. Click :guilabel:`Save`.
#. Enable :guilabel:`AI Labyrinth` to trap AI crawlers that ignore the `robots.txt` instructions.

.. _website/bot_protection/custom-rules:

Custom rules
------------

The free plan includes five custom rules, which are evaluated in order. The first rule lets known
bots (e.g., search engines) and the :ref:`required paths <website/bot_protection/paths>` through,
and the second challenges resource-intensive requests.

#. Go to :menuselection:`Security --> Security rules` and click :menuselection:`Create rule -->
   Custom rules`.
#. Enter a :guilabel:`Rule name` (e.g., `Allow known bots and Odoo services`), click
   :guilabel:`Edit expression`, and enter the following expression:

   .. code-block:: text

      (cf.client.bot)
      or starts_with(http.request.uri.path, "/.well-known/acme-challenge/")
      or starts_with(http.request.uri.path, "/payment/")
      or starts_with(http.request.uri.path, "/web/hook/")
      or starts_with(http.request.uri.path, "/xmlrpc")
      or starts_with(http.request.uri.path, "/jsonrpc")
      or starts_with(http.request.uri.path, "/json/")
      or starts_with(http.request.uri.path, "/iot/")
      or starts_with(http.request.uri.path, "/websocket")
      or ip.src in {<your.ip.address/range>}

   Replace `<your.ip.address/range>` with the IP addresses or ranges of your stores and offices
   (e.g., where Point of Sale or IoT devices are used), separated by spaces, or remove the line if
   not needed.

#. Under :guilabel:`Then take action...`, select :guilabel:`Skip`, then select :guilabel:`All
   remaining custom rules`. Under :guilabel:`More components to skip`, select :guilabel:`All rate
   limiting rules` and :guilabel:`Browser Integrity Check`.
#. Click :guilabel:`Deploy`.
#. Create a second custom rule (e.g., `Challenge shop filters`) with the following expression:

   .. code-block:: text

      starts_with(http.request.uri.path, "/shop")
      and (http.request.uri.query contains "attrib" or http.request.uri.query contains "order=")

#. Under :guilabel:`Then take action...`, select :guilabel:`Managed Challenge`, then click
   :guilabel:`Deploy`.

.. important::
   - Make sure the :guilabel:`Skip` rule stays first in the list.
   - The second rule is an example. Crawlers following every product filter and sorting combination
     of the eCommerce are a common cause of high load. Adapt the expression to the pages receiving
     the most bot traffic. Managed challenges are usually solved automatically for human visitors.

.. _website/bot_protection/rate-limiting:

Rate limiting rule
------------------

The free plan includes one rate limiting rule. It limits the number of requests a single IP address
can send within 10 seconds.

#. Go to :menuselection:`Security --> Security rules` and click :menuselection:`Create rule -->
   Rate limiting rules`.
#. Enter a :guilabel:`Rule name` and the following expression:

   .. code-block:: text

      starts_with(http.request.uri.path, "/shop") and not cf.bot_management.verified_bot

#. Set the number of :guilabel:`Requests` (e.g., `50`) per :guilabel:`10 seconds`.
#. Select the :guilabel:`Managed Challenge` action, then click :guilabel:`Deploy`.

.. tip::
   Start with a high limit and lower it progressively while :ref:`monitoring
   <website/bot_protection/monitoring>` the challenged requests.

.. _website/bot_protection/bot-fight-mode:

Bot Fight Mode
--------------

.. warning::
   Enabling :guilabel:`Bot Fight Mode` is **not recommended**. It challenges all requests that look
   automated, including API calls, and cannot be skipped for specific paths on the free plan. It
   may therefore block payment confirmations, integrations, and SSL certificate renewals. Only
   enable it if none of the :ref:`paths that must remain reachable <website/bot_protection/paths>`
   are used.

.. _website/bot_protection/under-attack:

Under Attack mode
-----------------

:guilabel:`Under Attack mode` challenges every visitor before they can access the website. Only
enable it temporarily during an attack from the :guilabel:`Quick Actions` of the domain's overview
page, then disable it once the attack is over, as it also blocks the :ref:`paths that must remain
reachable <website/bot_protection/paths>`.

.. _website/bot_protection/monitoring:

Monitor the results
===================

Go to :menuselection:`Security --> Analytics --> Events` to see which requests were challenged or
blocked, and by which rule.

If payments, webhooks, integrations, or the SSL certificate stop working after a change, check the
events for the related paths and adjust or disable the most recent rule.
