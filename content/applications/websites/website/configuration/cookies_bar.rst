===========
Cookies bar
===========

**Cookies** are small text files sent to your device when you visit a website. They are processed
and stored by your browser and track user information like login details, preferences, and browsing
history. **Essential cookies** are necessary for the website to function, while **optional cookies**
are used to analyze behavior or display ads.

Data protection laws require notifying users about data collection methods and purposes.
**Cookies bar** fulfill this obligation by informing users on their first visit and allowing them to
decide whether to store all or only essential cookies on their device.

.. note::
   Cookie bars have been imposed to obtain visitors' consent for optional cookies only, as their
   consent is not required for essential cookies.

Configuration
=============

To add a cookies bar on your website, go to :menuselection:`Website --> Configuration -->
Settings` and enable :guilabel:`Cookies Bar` in the :guilabel:`Privacy` section. This activates
:guilabel:`Block tracking 3rd-party services` (e.g. YouTube, Google Maps, Facebook...) by default.
You can also :guilabel:`Add domains to the block list`. These services will be blocked on your
website for users until they accept optional cookies.

.. note::
   Using third-party cookies without a cookie bar will not prevent them from being triggered. It is
   the cookie bar and the visitor's refusal that will ensure that they are not triggered.

The :ref:`Cookies Policy <cookies-bar/policy>` page (/cookie-policy) is automatically created when
you enable the cookies bar.

.. _cookies-bar/google_consent_mode_V2:

Google Consent Mode V2
======================

Odoo is compliant with Google Consent Mode V2, which is a mandatory update to how Google services
manage user consent for data collection. This framework is required for all websites that use Google
Ads, Google Analytics, and other Google services to target users within the European Economic Area
(EEA).

.. _cookies-bar/policy:

Cookies policy
==============

When you enable the cookies bar for your website, Odoo creates the **Cookie Policy** page
(`/cookie-policy`) containing a list of cookies set by default, with their purpose and examples.

.. spoiler:: Click here to preview the list of cookies by default

   .. list-table::
      :header-rows: 1
      :stub-columns: 1

      * - Category
        - Role
        - Name
      * - Essential - Session & Security
        - Authenticate users, protect user data and allow the website to deliver the services users
          expects, such as maintaining the content of their cart, or allowing file uploads. The
          website will not work properly if you reject or discard those cookies.
        - session_id (Odoo)
      * - Essential - Preferences
        - Remember information about the preferred look or behavior of the website, such as your
          preferred language or region. Your experience may be degraded if you discard those
          cookies, but the website will still work.
        - frontend_lang (Odoo)
      * - Optional - Interaction History
        - Used to collect information about your interactions with the website, the pages you've
          seen, and any specific marketing campaign that brought you to the website. We may not be
          able to provide the best service to you if you reject those cookies, but the website will
          work.
        - im_livechat_previous_operator (Odoo),
          utm_campaign (Odoo),
          utm_source (Odoo),
          utm_medium (Odoo)
      * - Optional - Advertising & Marketing
        - Used to make advertising more engaging to users and more valuable to publishers and
          advertisers, such as providing more relevant ads when you visit other websites that
          display ads or to improve reporting on ad campaign performance. Note that some third-party
          services may install additional cookies on your browser in order to identify you.
        - __gads (Google),
          __gac (Google)
      * - Optional - Analytics
        - Understand how visitors engage with our website, via Google Analytics. The website will still
          work if you reject or discard those cookies.
        - _ga (Google),
          _gat (Google),
          _gid (Google),
          _gac_* (Google)

.. note::
   You cannot offer visitors the possibility to refine their choice among optional cookies.

.. tip::
   You could add a link to this page in your website's footer, for example.

.. _cookies-bar/edit-policy-page:

Edit the Cookies policy page
----------------------------

To access it, click the :guilabel:`Cookie Policy` hyperlink in the cookies bar or open the page from
:menuselection:`Website --> Site --> Pages`.

To adapt the content of the page according to your needs, click the :guilabel:`Edit` button.

.. important::
   You have to list every cookie you added yourself on the /cookie-policy page including their name,
   role, category and duration.

.. tip::
   To check the duration of cookies, use your browser’s developer tools. In Chrome, right-click on
   the website, open the inspector, go to the :guilabel:`Application tab`, and open the
   :guilabel:`Cookies submenu`. This view displays detailed information for each cookie, including
   its expiration time.

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
