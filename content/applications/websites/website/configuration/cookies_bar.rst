===========
Cookies bar
===========

**Cookies** are small text files sent to your device when you visit a website. They are processed
and stored by your browser and record visitor information like login details, preferences, and
browsing history. **Essential cookies** are necessary for the website to function, while
**optional cookies** are used to analyze behavior or display ads.

Data protection laws require notifying visitors about data collection methods and purposes.
**Cookies bar** fulfill this obligation by informing visitors on their first visit and allowing them
to decide whether to store all or only essential cookies on their device.

.. note::
   - Cookies bars are required to obtain visitors' consent for optional cookies only. Consent is not
     required for essential cookies.

   - Odoo is compliant with `Google consent mode v2 <https://support.google.com/tagmanager/answer/13695607>`_.

Configuration
=============

To add a cookies bar on your website, go to :menuselection:`Website --> Configuration -->
Settings` and enable :guilabel:`Cookies Bar` in the :guilabel:`Tracking & SEO` section. This
activates :guilabel:`Block tracking 3rd-party services` by default, including social media, video
hosting platforms, and Google services. Click :guilabel:`Add domains to the block list` to include
other external websites. These services remain blocked on your website until visitors accept
optional cookies.

.. note::
   Using third-party cookies without a cookies bar does not prevent them from being triggered. Only
   the presence of a cookie bar **and** the visitor’s refusal ensure that these cookies are blocked.

.. _cookies-bar/policy:

Cookies policy
==============

When you enable the cookies bar for your website, Odoo creates the **Cookie Policy** page
(`/cookie-policy`) containing a list of cookies set by default, with their purpose and examples.

.. spoiler:: Click here to preview the list of default cookies

   .. list-table::
      :header-rows: 1
      :stub-columns: 1

      * - Category
        - Role
        - Name
      * - Essential - Session & Security
        - Authenticate visitors, protect visitor data and allow the website to deliver the services
          visitors expects, such as maintaining the content of their cart, or allowing file uploads.
          The website will not work properly without these cookies.
        - session_id (Odoo)
      * - Essential - Preferences
        - Remember information about the preferred look or behavior of the website, such as the
          preferred language or region. The website will continue to function without these cookies,
          but the visitor’s experience may be affected.
        - frontend_lang (Odoo)
      * - Optional - Interaction History
        - Collect information about your interactions with the website, the pages you've seen, and
          any specific marketing campaign that brought you to the website. The website will work
          without these cookies, but some features or services may not perform optimally.
        - im_livechat_previous_operator (Odoo),
          utm_campaign (Odoo),
          utm_source (Odoo),
          utm_medium (Odoo)
      * - Optional - Advertising & Marketing
        - Make advertising more engaging to visitors and more valuable to publishers and advertisers,
          such as providing more relevant ads when you visit other websites that display ads or to
          improve reporting on ad campaign performance. Note that some third-party services may
          install additional cookies on your browser in order to identify you.
        - __gads (Google),
          __gac (Google)
      * - Optional - Analytics
        - Understand how visitors engage with the website, via Google Analytics. The website will
          still work without these cookies.
        - _ga (Google),
          _gat (Google),
          _gid (Google),
          _gac_* (Google)

.. note::
   It is not possible to let visitors customize or select which optional cookies they want to allow.

.. tip::
   You could add a link to this page in your website's footer, for example.

.. _cookies-bar/edit-policy-page:

Edit the Cookies policy page
----------------------------

To access it, click the :guilabel:`Cookie Policy` hyperlink in the cookies bar or open the page from
:menuselection:`Website --> Site --> Pages`.

To adapt the content of the page according to your needs, click the :guilabel:`Edit` button.

.. note::
   You have to list every cookie you added yourself on the `/cookie-policy` page including their
   name, role, category and duration.

.. tip::
   To check the duration of cookies, use your browser’s developer tools.

.. seealso::
   :doc:`Pages <../structure/pages>`

.. _cookies-bar/customization:

Customization
=============

To adapt the display of the cookies bar on your website, click :guilabel:`Edit` on the website
editor, go to the :guilabel:`Invisible Elements` section at the bottom of the panel, and click
:guilabel:`Cookies Bar`. You can modify the :guilabel:`Layout` and :guilabel:`Size` of the
cookies bar, and enable :guilabel:`Backdrop` to gray out the page in the background when the cookies
bar is displayed on the screen.

Click anywhere in the building block to further customize the appearance of the cookies bar using
:guilabel:`Block`, :guilabel:`Column` and/or :guilabel:`Inline Text` customization options.

To edit the contents of the cookies bar (i.e., the consent message), click directly in the building
block.
