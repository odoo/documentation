:show-content:

=====
Pages
=====

Odoo allows you to create pages for your website and customize their content and appearance to your
needs.

.. _website/page_type:

**Static** pages have stable content, such as the homepage. You can manually create new ones, define
their URLs, adapt their :ref:`properties <website/page_properties>`, etc. **Dynamic** pages, on the
other hand, are generated dynamically. All pages generated automatically by Odoo, for example, when
you install an app or module (e.g., `/shop` or `/blog`) or publish a new product or blog post, are
dynamic pages and are therefore managed differently.

Page creation
=============

Website pages can be created from the **frontend** and the **backend**. To create a new website
page, proceed as follows:

  #. - Either open the **Website** app, click :guilabel:`+ New` in the top-right corner, then select
       :guilabel:`Page`;
     - Or go to :menuselection:`Website --> Site --> Pages` and click :guilabel:`New`.
  #. Enter a :guilabel:`Page Title`; this title is used in the menu and the page's URL.
  #. Click :guilabel:`Create`.
  #. Customize the page's content and appearance using the website builder, then click
     :guilabel:`Save`.
  #. :ref:`Publish <website/un-publish-page>` the page.

.. note::
   Disable :guilabel:`Add to menu` if the page should not appear in the menu.

Page management
===============

.. _website/un-publish-page:

Publishing/unpublishing pages
-----------------------------

Pages need to be published to make them accessible to website visitors. To publish or unpublish a
page, access it and toggle the switch in the upper-right corner from :guilabel:`Unpublished`
to :guilabel:`Published`, or vice versa.

.. image:: pages/un-published_toggle.png
   :alt: Unpublished/Published toggle

.. note::
   It is also possible to:

    - publish/unpublish a page from the :ref:`page properties <website/page_properties>`, where you
      can define a publishing date and/or restrict the page's visibility if needed;
    - publish/unpublish several pages at once: go to :menuselection:`Website --> Site --> Pages`,
      select the pages, then click :guilabel:`Action` and select :guilabel:`Publish` or
      :guilabel:`Unpublish`.

Homepage
--------

When you create a website, Odoo creates a dedicated :guilabel:`Home` page by default, but you can
define any website page as your homepage. To do so, go to :menuselection:`Website --> Configuration
--> Settings`, then, in the :guilabel:`Website info` section, define the URL of the desired page in
the field :guilabel:`Homepage URL` (e.g., `/shop`).

Alternatively, you can define any :ref:`static page <website/page_type>` as your homepage by going
to :menuselection:`Website --> Site --> Properties`. Select the :guilabel:`Publish` tab and enable
:guilabel:`Use as Homepage`.

.. _website/page_properties:

Page properties
---------------

To modify a :ref:`static page's <website/page_type>` properties, access the page you wish to
modify, then go to :menuselection:`Site --> Properties`.

The :guilabel:`Name` tab allows you to:

- rename the page using the :guilabel:`Page Name` field;
- modify the :guilabel:`Page URL`. In this case, you can redirect the old URL to the new one if
  needed. To do so, enable :guilabel:`Redirect Old URL`, then select the :guilabel:`Type` of
  :ref:`redirection <website/URL-redirection>`:

  - :guilabel:`301 Moved permanently`: to redirect the page permanently;
  - :guilabel:`302 Moved temporarily`: to redirect the page temporarily.

  .. image:: pages/page-redirection.png
     :alt: Redirect old URL

You can further adapt the page's properties in the :guilabel:`Publish` tab:

- :guilabel:`Show in Top Menu`: Disable if you don't want the page to appear in the menu;
- :guilabel:`Use as Homepage`: Enable if you want the page to be the homepage of your website;
- :guilabel:`Indexed`: Disable if you don't want the page to be shown in search engine results;
- :guilabel:`Published`: Enable to publish the page;
- :guilabel:`Publishing Date`: To publish the page at a specific moment, select the date,
  click the clock icon to set the time, then click the green check mark to validate your selection.
- :guilabel:`Visibility`: Select who can access the page:

  - :guilabel:`All`
  - :guilabel:`Signed In`
  - :guilabel:`Restricted Group`: Select the :doc:`user access group(s)
    </applications/general/users/access_rights>` in the :guilabel:`Authorized group` field.
  - :guilabel:`With Password`: Enter the password in the :guilabel:`Password` field.

.. tip::
   *Some* of these properties can also be modified from :menuselection:`Website --> Site --> Pages`.

Duplicating pages
~~~~~~~~~~~~~~~~~

To duplicate a page, access the page, then go to :menuselection:`Site --> Properties` and click
:guilabel:`Duplicate Page`. Enter a :guilabel:`Page Name`, then click :guilabel:`OK`. By default,
the new page is added after the duplicated page in the menu, but you can remove it from the menu or
change its position using the :doc:`menu editor <pages/menus>`.

.. _website/delete-page:

Deleting pages
~~~~~~~~~~~~~~

To delete a page, proceed as follows:

#. Access the page, then go to :menuselection:`Site --> Properties` and click :guilabel:`Delete
   Page`.
#. A pop-up window appears on the screen with all links referring to the page you want to delete,
   organized by category. To ensure website visitors don't land on a 404 error page, you must update
   all the links on your website referring to the page. To do so, expand a category, then click on a
   link to open it in a new window. Alternatively, you can set up a :ref:`redirection
   <website/URL-redirection>` for the deleted page.
#. Once you have updated the links (or set up a :ref:`redirection <website/URL-redirection>`),
   select the :guilabel:`I am sure about this` check box, then click :guilabel:`OK`.

.. _website/URL-redirection:

URL redirect mapping
--------------------

URL redirect mapping consists in sending visitors and search engines to a URL different from
the one they initially requested. This technique is used, for example, to prevent broken links when
you :ref:`delete a page <website/delete-page>`, :ref:`modify its URL <website/page_properties>`, or
migrate your site from another platform to an Odoo :doc:`domain <configuration/domain_names>`. It
can also be used to improve :doc:`pages/seo`.

To access existing URL redirections and create new ones, :doc:`activate the developer mode
</applications/general/developer_mode>` and go to :menuselection:`Website --> Configuration -->
Redirects`.

.. note::
   - A redirect record is added automatically every time you :ref:`modify a page's URL
     <website/page_properties>` and enable :guilabel:`Redirect Old URL`.
   - You can set up redirections for :ref:`static and dynamic pages <website/page_type>`.

To create a new redirection, click the :guilabel:`New` button, then fill in the fields:

- :guilabel:`Name`: Enter a name to identify the redirect.
- :guilabel:`Action`: Select the type of redirection:

   - :guilabel:`404 Not found`: visitors are redirected to a 404 error page when they try to access
     an unpublished or deleted page.
   - :guilabel:`301 Moved Permanently`: for permanent redirections of unpublished or deleted
     :ref:`static pages <website/page_type>`. The new URL is shown in search engine results, and the
     redirect is cached by browsers.
   - :guilabel:`302 Moved Temporarily`: for short-term redirections, for example, if you are
     redesigning or updating a page. The new URL is neither cached by browsers nor shown in search
     engine results.
   - :guilabel:`308 Redirect/Rewrite`: for permanent redirections of existing :ref:`dynamic pages
     <website/page_type>`. The URL is renamed; the new name is shown in search engine results and is
     cached by browsers. Use this redirect type to rename a dynamic page, for example, if you wish
     to rename `/shop` into `/market`.

- :guilabel:`URL from`: Enter the URL to be redirected (e.g., `/about-the-company`) or search for
  the desired :ref:`dynamic page <website/page_type>` and select it from the list.
- :guilabel:`URL to`: For 301, 302, and 308 redirects, enter the URL to be redirected to. If you want
  to redirect to an external URL, include the protocol (e.g., `https://`).
- :guilabel:`Website`: Select a specific website.
- :guilabel:`Sequence`: To define the order in which redirections are performed, e.g., in the case
  of redirect chains (i.e., a series of redirects where one URL is redirected to another one, which
  is itself further redirected to another URL).

Toggle the :guilabel:`Activate` switch to deactivate the redirection.

.. important::
   404, 301, and 302 redirections are meant to migrate traffic from
   :ref:`unpublished <website/un-publish-page>` or :ref:`deleted <website/delete-page>` pages
   to *new* pages, while the 308 redirect is used for *permanent* redirections of *existing* pages.

.. seealso::
   - `Google documentation on redirects and search <https://developers.google.com/search/docs/crawling-indexing/301-redirects>`_
   - :doc:`pages/seo`

.. toctree::
   :titlesonly:

   pages/menus
   pages/seo
