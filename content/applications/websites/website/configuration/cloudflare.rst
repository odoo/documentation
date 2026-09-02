================================================
Using Cloudflare to secure and redirect a domain
================================================

#. `Sign up and log in to Cloudflare <https://dash.cloudflare.com/sign-up>`_.
#. Enter your domain name on `Cloudflare's dashboard <https://dash.cloudflare.com/login>`_ and
   select :guilabel:`Quick scan for DNS records`.
#. Choose a plan (the free plan is sufficient).
#. Follow Cloudflare's instructions and recommendations to complete the activation.
#. Add a CNAME record to redirect your naked domain (`yourdomain.com`) to the `www` subdomain
   (e.g., `www.yourdomain.com`) by clicking :guilabel:`DNS` in the navigation menu, then clicking
   the :guilabel:`Add record` button, and using the following configuration:

   - :guilabel:`Type`: CNAME
   - :guilabel:`Name`: `@` (or `yourdomain.com`)
   - :guilabel:`Target`: e.g., `www.yourdomain.com`
   - :guilabel:`Proxy status`: Proxied

   .. image:: cloudflare/cloudflare-cname-www.png
      :alt: Adding a CNAME DNS record to Cloudflare to redirect a naked domain to a www subdomain

#. Add a second CNAME record to redirect the `www` subdomain (e.g., `www.yourdomain.com`) to
   your database address (e.g., `mycompany.odoo.com`) using the following configuration:

   - :guilabel:`Type`: CNAME
   - :guilabel:`Name`: `www`
   - :guilabel:`Target`: e.g., `mycompany.odoo.com`
   - :guilabel:`Proxy status`: Proxied (or toggle to DNS-only to disable Cloudflare's protection services)

   .. image:: cloudflare/cloudflare-cname-db.png
      :alt: Adding a CNAME DNS record to Cloudflare to redirect a www subdomain to an Odoo database

#. Define a redirect rule to permanently redirect (301) your naked domain (e.g., `yourdomain.com`)
   to both `http://` and `https://` by going to :menuselection:`Rules --> Create rule --> Products`,
   and clicking :guilabel:`Create a Rule` under :guilabel:`Redirect Rules`:

   - Enter any :guilabel:`Rule name`.
   - Under the :guilabel:`If incoming requests match...` section, select :guilabel:`Custom filter
     expression` and use the following configuration:

     - :guilabel:`Field`: Hostname
     - :guilabel:`Operator`: equals
     - :guilabel:`Value`: e.g., `yourdomain.com`

   - Under the :guilabel:`Then...` section, use the following configuration:

     - :guilabel:`Type`: Dynamic
     - :guilabel:`Expression`: e.g., `concat("https://www.yourdomain.com", http.request.uri.path)`
     - :guilabel:`Status code`: 301
     - :guilabel:`Preserve query string`: enabled

   .. image:: cloudflare/cloudflare-redirect-rule.png
      :alt: Defining a Cloudflare redirect rule to create a permanent redirect (301)

#. By default, a new free Cloudflare account will allow the
   `HTTP-01 ACME challenge <https://letsencrypt.org/docs/challenge-types/#http-01-challenge>`_ that's required to
   generate a SSL certificate for the domain. If more restrictive settings are in use, ensure calls to
   `http://www.yourdomain.com/.well-known/acme-challenge/<TOKEN>` are allowed, for example by defining a custom security
   rule.

