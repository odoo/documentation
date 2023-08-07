============
Domain names
============

A **domain name** works as an address for your website. It makes the Internet much more accessible
as it allows users to type a meaningful web address, such as ``www.odoo.com``, rather than its
server's IP address with a series of numbers.

You can use a custom domain name to access your Odoo database and websites:

- By :ref:`registering a free domain name with Odoo <domain-name/odoo-register>` (for Odoo Online
  databases)
- By :ref:`configuring a custom domain that you already own <domain-name/existing>`.

.. note::
   Odoo Online and Odoo.sh databases, including their websites, use by default a subdomain of
   ``odoo.com`` for both the URL and the emails (e.g., ``https://example.odoo.com``).

.. important::
   Odoo offers a :ref:`free custom domain name <domain-name/odoo-register>` to all Odoo Online
   databases for one year. Visitors can then access your website with an address such as
   ``www.example.com`` rather than the default ``example.odoo.com``.

.. seealso::
   - `Odoo Tutorials: Register a Free Domain Name
     <https://www.odoo.com/slides/slide/register-a-free-domain-name-1663>`_
   - `Odoo Quick Tips: Get a free domain name! <https://www.youtube.com/watch?v=eAfgeNOHLP4>`_

.. _domain-name/about:

About domain names
==================

Having a **good domain name** is as important to your branding as the name of your business or
organization as it is the first thing your visitors will notice. We recommend you keep them *simple,
short, easy to remember and spell*.

A **subdomain** is a domain that is a part of another domain. It often refers to the additional part
that comes before the main domain name. Traditionally, most websites use the ``www.`` subdomain,
but any string of letters can be used as well. You can use subdomains to direct your visitors to
other websites than your main website or to specific pages (e.g., ``experience.odoo.com`` points to
a specific page.)

All domain names are referenced in the **Domain Name System**, or **DNS**, which works as a giant
directory for the Internet. There are many DNS servers, so any modification to the DNS can take up
to 72 hours to propagate worldwide on all servers.

.. _domain-name/indexing:

Indexing of domain names by search engines
------------------------------------------

Search engines, such as Google and Bing, rely on web crawlers (:dfn:`robots that explore and analyze
the web`) to index all websites and their related domain names. These crawlers discover new URLs
thanks to links on known web pages. As a result, search engines should index domain names
automatically after a while, as long as their URLs are mentioned elsewhere on the Internet.

Improving the appearance and positioning of web pages on search engines is a practice named "Search
Engine Optimization" (SEO).

.. tip::
   Adding relevant content, optimizing metadata, and building high-quality backlinks can all help
   improve a website's search engine visibility.

Some search engines provide tools for web admins, such as
`Google Search Console <https://search.google.com/search-console>`_ and
`Bing Webmaster Tools <https://www.bing.com/webmasters>`_, to help you analyze and improve your
page ranking. To use these services, you must prove that you are the owner of your domain name. One
way to verify the ownership of your domain name is by adding a DNS record. You can do this for
:ref:`domain names registered with Odoo <domain-name/odoo-manage>` and for domain names managed by
other providers.

.. seealso::
   - :doc:`/applications/websites/website/pages/seo`
   - `Google Search Console Help - Verify your site ownership <https://support.google.com/webmasters/answer/9008080>`_
   - `Bing Webmaster Tools - Add and Verify site <https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b>`_

.. _domain-name/odoo-register:

Register a free domain name with Odoo
=====================================

You can register a domain name for your Odoo Online database directly from Odoo Website or your
database manager.

.. important::
   - Your domain name is **free for one year** if you register it with Odoo!
   - The domain name is registered with `Gandi <https://www.gandi.net/>`_, the domain name
     registrar.
   - You are the owner of the domain name and can use it for other purposes.
   - Odoo manages payment and technical support for you.
   - This offer doesn't include any mailbox. However, you can :ref:`configure your MX records
     <domain-name/odoo-manage>` to use your own email server or solution such as Google Workspace.

To do so, go to :menuselection:`Website --> Domain Name`. Alternatively, open your `database manager
<https://www.odoo.com/my/databases>`_, click on the :guilabel:`settings` button next to your
database, then on :guilabel:`Domain names`.

.. image:: domain_names/register-menu.png
   :align: center
   :alt: Clicking on Domain Names from an Odoo website

Search for the domain name of your choice to check its availability, then select the one you want to
register for your website.

.. image:: domain_names/register-search.png
   :align: center
   :alt: The search of the domain name example.com shows which associated domains are available.

Next, fill in the form with your information to become the domain name owner.

Your domain name is directly linked to your database, but you still have to :ref:`map your domain
name with your website <domain-name/website-map>`.

.. note::
   - Free domain names are also available for free Odoo Online databases (if you installed one app
     only, for example). In this case, Odoo reviews your request and your website to avoid abuse.
     This process can take several days due to the success of the offer.
   - This is not available for Odoo.sh databases yet.

.. _domain-name/odoo-manage:

Manage your domain name registered with Odoo
--------------------------------------------

To manage the DNS records of your domain name registered with Odoo or to visualize the contacts
associated with it, open your `database manager <https://www.odoo.com/my/databases>`_, click on the
:guilabel:`settings` button next to your database, on :guilabel:`Domain names`, and then on
:guilabel:`Contacts` or :guilabel:`DNS`.

.. image:: domain_names/manage.png
   :align: center
   :alt: Management of the domain names linked to an Odoo database

.. note::
   Please `submit a support ticket <https://www.odoo.com/help>`_ if you need further assistance to
   manage your domain name.

.. _domain-name/existing:

Configure your existing domain name
===================================

If you already own a domain name, you can use it to point to your website.

To avoid any issue with the :ref:`SSL certificate validation <domain-name/ssl>`, we highly recommend
that you proceed with the following actions in this order:

#. :ref:`Add a CNAME record <domain-name/cname>` on your domain name's DNS zone.
#. :ref:`Map your domain name with your Odoo database <domain-name/db-map>`.
#. :ref:`Map your domain name with your Odoo website <domain-name/website-map>`.

.. _domain-name/cname:

Add a CNAME record
------------------

A **CNAME record** is a type of DNS record that points to the domain of another website rather than
directly to an IP address.

You need a CNAME record that points to your Odoo database. The requirements are detailed in your
database manager.

.. tabs::

   .. group-tab:: Odoo Online

      The target address is the current address of your database, as defined at its creation (e.g.,
      ``example.odoo.com``)

   .. group-tab:: Odoo.sh

      Your project's main address is defined in :menuselection:`Settings --> Project Name`.

      If you want to target a specific branch (production, staging or development), go to
      :menuselection:`Branches --> select your branch --> Settings --> Custom domains`, and click on
      :guilabel:`How to set up my domain?`. A message indicates which address your CNAME record
      should target.

#. Open your domain name's manager dashboard.
#. Open the **DNS zone** management page for the domain name you want to configure.
#. Create a **CNAME record** pointing to the address of your database.

While Odoo suggests creating a CNAME record for your ``www.`` subdomain (``www.example.com``), you
can of course use any domain name of your choice, with any subdomain (e.g.,
``anything.example.com``).

.. example::
   You own the domain name ``example.com``, and you have an Odoo Online database at the address
   ``example.odoo.com``. You want to access your Odoo database primarily with the domain
   ``www.example.com`` but also with the :ref:`naked domain <domain-name/naked-domain>`
   ``example.com``.

   To do so, you create a CNAME record for the ``www`` subdomain, with ``example.odoo.com`` as the
   target. The DNS zone manager generates the following rule and adds it to your DNS zone: ``www IN
   CNAME example.odoo.com.``

   You also create a redirection from ``example.com`` to ``wwww.example.com``.

   Your new DNS records are propagated to all DNS servers.

.. note::
   Here are some specific guidelines to create a CNAME record:

   - `GoDaddy <https://www.godaddy.com/help/add-a-cname-record-19236>`_
   - `Namecheap <https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain>`_
   - `OVH <https://docs.ovh.com/us/en/domains/web_hosting_how_to_edit_my_dns_zone/#add-a-new-dns-record>`_
   - `CloudFlare <https://support.cloudflare.com/hc/en-us/articles/360019093151>`_
   - `Google Domains <https://support.google.com/domains/answer/3290350?hl=en>`_

.. _domain-name/naked-domain:

Naked domain
~~~~~~~~~~~~

A **naked domain** is a domain name that doesn't have any subdomain at the beginning of the address
(e.g., ``odoo.com`` instead of ``www.odoo.com``).

You may want your naked domain to redirect to your website as some visitors may not type the full
domain name to access your website.

#. Open your domain name's manager dashboard.
#. Create a **redirection** from the naked domain (``example.com``) to your main domain name
   (``www.example.com``).

.. note::
   Depending on your domain name registrar, this redirection may be already pre-configured.

.. _domain-name/db-map:

Map your domain name with your Odoo database
--------------------------------------------

.. tabs::

   .. group-tab:: Odoo Online

      Open your `database manager <https://www.odoo.com/my/databases>`_, click on the
      :guilabel:`settings` button next to your database, on :guilabel:`Domain names`, and then on
      :guilabel:`Use my own domain` at the bottom of the right column.

      Type the domain name you want to add to this database, then click on :guilabel:`Verify` to
      check if the CNAME record is correctly configured. Once done, click on :guilabel:`I confirm,
      it's done`.

      .. image:: domain_names/online-map.png
         :align: center
         :alt: Verification of the CNAME records of a domain name before mapping it with a database

   .. group-tab:: Odoo.sh

      Go to :menuselection:`Branches --> select your branch --> Settings --> Custom domains`, type
      the domain name you want to add to this database, then click on :guilabel:`Add domain`.

      .. image:: domain_names/odoo-sh-map.png
         :align: center
         :alt: Mapping a domain name with an Odoo.sh branch

      .. seealso::
         - :ref:`Odoo.sh branches: settings tab <odoosh-gettingstarted-branches-tabs-settings>`

.. warning::
   Make sure to :ref:`add a CNAME record <domain-name/cname>` to your domain name's DNS **before**
   mapping your domain name with your Odoo database.

   Failing to do so may impede the validation of the :ref:`SSL certificate <domain-name/ssl>` and
   would result in a *certificate name mismatch* error. This is often displayed by web browsers as a
   warning such as *"Your connection is not private"*.

   If this is the case and you have added the domain name to your database's settings less than five
   days ago, wait 24 hours as the validation may still happen. Otherwise, please `submit a support
   ticket <https://www.odoo.com/help>`_ including screenshots of your CNAME records.

.. _domain-name/ssl:

SSL encryption (HTTPS protocol)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**SSL encryption** is an encryption-based Internet security protocol. It allows your visitors to
navigate your website through a secure connection, which appears as an ``https://`` protocol at the
beginning of your web address, rather than a non-secure ``http://`` protocol.

Odoo generates a separate SSL certificate for each domain :ref:`mapped in the database manager
<domain-name/db-map>`, using integration with `Let's Encrypt Certificate Authority and ACME protocol
<https://letsencrypt.org/how-it-works/>`_.

.. note::
   - The certificate generation may take up to 24h.
   - Several attempts to validate your certificate are made during the five days following the
     moment you add your domain name in your database's settings.
   - If you already use another service, you can keep using it or simply change for Odoo.

.. _domain-name/web-base-url:

Web base URL of a database
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::
   If you have Odoo Website, you can disregard this part and directly :ref:`map your domain name
   with your website <domain-name/website-map>`.

The **web base URL** of a database, or **root URL** affects your main website address and all the
links sent to your customers (e.g., quotations, portal links, etc.).

To configure it, access your Odoo database with your custom address, then log in as an administrator
of your database (any user in the *Settings* group) from the login screen.

.. warning::
   Connecting to your database with the original Odoo subdomain address (e.g., ``example.odoo.com``
   also updates the web base URL of your database. See below to prevent these automatic updates.

Alternatively, you can do it manually. To do so, activate the :ref:`developer mode
<developer-mode>`, then go to :menuselection:`Settings --> Technical --> System Parameters`.

Find the key called ``web.base.url`` (or create it if it does not exist) and enter the full address
of your website as value, such as ``https://www.example.com``.

.. note::
   The URL must include the protocol ``https://`` (or ``http://``) and must not end with a slash
   (``/``).

To prevent the automatic update of the web base URL when an administrator logs in the database, you
can create the following System Parameter:

- key: ``web.base.url.freeze``
- value: ``True``

.. _domain-name/website-map:

Map your domain name with your website
======================================

Mapping your domain name to your website isn't the same as mapping it with your database:

- It defines your domain name as the main one for your website, helping search engines to index your
  website properly.
- It defines your domain name as the base URL for your database, including the portal links sent by
  email to your customers.
- If you have multiple websites, it maps your domain name with the appropriate website.

Go to :menuselection:`Website --> Configuration --> Settings --> Website Info`. If you have multiple
websites, select the one you want to configure.

In the :guilabel:`Domain` field, fill in the web address of your website (e.g.,
``https://www.example.com``) and click on :guilabel:`Save`.

.. image:: domain_names/website-settings.png
   :align: center
   :alt: Configuring https://www.example.com as the Domain of the website

.. warning::
   Mapping your domain name with your Odoo website prevents Google from indexing both your custom
   domain name ``www.example.com`` and your original odoo database address ``example.odoo.com``.

   If both addresses are already indexed, it may take some time before Google removes the indexation
   of the second address. You may also try using the `Google Search Console
   <https://search.google.com/search-console>`_ to fix this.

.. note::
   If you have multiple websites and companies on your database, make sure that you select the
   right :guilabel:`Company` in the website settings, next to the :guilabel:`Domain` settings. Doing
   so indicates Odoo which URL to use as the :ref:`base URL <domain-name/web-base-url>` according to
   the company in use.

.. seealso::
  - :doc:`/applications/general/email_communication/email_servers`
