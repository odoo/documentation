.. _reference/user_interface/ui_icons:

========
UI icons
========

Odoo's UI relies on two icon systems:

- **Material Symbols** (`Google Fonts <https://fonts.google.com/icons>`_) is the primary icon
  library. It covers the vast majority of interface needs.
- **Odoo UI Icons (OI)** is a supplementary library for icons not available in Material Symbols —
  custom view icons, brand logos (e.g. Facebook, GitHub), and other Odoo-specific glyphs.

Both systems share the same ``.oi`` base class and use a ``data-icon`` attribute to specify the
icon to render.

.. _ui/material-symbols:

Material Symbols
================

`Material Symbols Rounded <https://fonts.google.com/icons>`_ is loaded in the Odoo webclient. Use
it for any standard icon: actions, navigation, status indicators, and so on.

Pass the icon's ligature name (as listed on `fonts.google.com/icons <https://fonts.google.com/icons>`_)
to the ``data-icon`` attribute:

.. code-block:: html

   <i class="oi" data-icon="check"/>
   <i class="oi" data-icon="settings"/>
   <i class="oi" data-icon="arrow_forward"/>


Use the `Material Symbols library <https://fonts.google.com/icons>`_ or the Odoo
media library (see below) to browse and search available icons.

.. note::
   Odoo bundles only a subset of Material Symbols rather than the full library. The list of
   supported icons is maintained in
   `odoo/addons/web/tooling/icons/icons_wishlist.txt <{GITHUB_PATH}/addons/web/tooling/icons/icons_wishlist.txt>`_.


.. image:: icons/media_lib.jpg
   :alt: Odoo Media Library
   :width: 630


.. _ui/odoo-ui-icons:

Odoo UI icons
=============

The OI library covers icons not available in Material Symbols: brand logos, custom kanban-view
icons, and other Odoo-specific glyphs. OI icons use the ``oi_`` prefix in the ``data-icon``
attribute:

.. code-block:: html

   <i class="oi" data-icon="oi_odoo"/>
   <i class="oi" data-icon="oi_view-kanban"/>
   <i class="oi" data-icon="oi_facebook"/>

Like `Material Symbols library <https://fonts.google.com/icons>`_ , Odoo custom
icons are available via Odoo media library.

.. rubric:: Odoo

.. raw:: html

   <section class="row">
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_odoo"></i>
              <code class="pb-3">oi_odoo</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_studio"></i>
              <code class="pb-3">oi_studio</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_view-kanban"></i>
              <code class="pb-3">oi_view-kanban</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_view-pivot"></i>
              <code class="pb-3">oi_view-pivot</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_view-cohort"></i>
              <code class="pb-3">oi_view-cohort</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_app_documents"></i>
              <code class="pb-3">oi_app_documents</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_threads"></i>
              <code class="pb-3">oi_threads</code>
          </div>
      </div>

   </section>

.. rubric:: Social

.. raw:: html

   <section class="row">
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_bandcamp"></i>
              <code class="pb-3">oi_bandcamp</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_behance"></i>
              <code class="pb-3">oi_behance</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_behance-square"></i>
              <code class="pb-3">oi_behance-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_bluesky"></i>
              <code class="pb-3">oi_bluesky</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_deviantart"></i>
              <code class="pb-3">oi_deviantart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_digg"></i>
              <code class="pb-3">oi_digg</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_discord"></i>
              <code class="pb-3">oi_discord</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_dribbble"></i>
              <code class="pb-3">oi_dribbble</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_facebook"></i>
              <code class="pb-3">oi_facebook</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_facebook-square"></i>
              <code class="pb-3">oi_facebook-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_flickr"></i>
              <code class="pb-3">oi_flickr</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_foursquare"></i>
              <code class="pb-3">oi_foursquare</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_google-plus"></i>
              <code class="pb-3">oi_google-plus</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_imdb"></i>
              <code class="pb-3">oi_imdb</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_instagram"></i>
              <code class="pb-3">oi_instagram</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_kickstarter"></i>
              <code class="pb-3">oi_kickstarter</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_lastfm"></i>
              <code class="pb-3">oi_lastfm</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_linkedin"></i>
              <code class="pb-3">oi_linkedin</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_linkedin-square"></i>
              <code class="pb-3">oi_linkedin-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_medium"></i>
              <code class="pb-3">oi_medium</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_meetup"></i>
              <code class="pb-3">oi_meetup</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_mixcloud"></i>
              <code class="pb-3">oi_mixcloud</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_odnoklassniki"></i>
              <code class="pb-3">oi_odnoklassniki</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_pinterest"></i>
              <code class="pb-3">oi_pinterest</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_pinterest-square"></i>
              <code class="pb-3">oi_pinterest-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_product-hunt"></i>
              <code class="pb-3">oi_product-hunt</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_qq"></i>
              <code class="pb-3">oi_qq</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_quora"></i>
              <code class="pb-3">oi_quora</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_reddit"></i>
              <code class="pb-3">oi_reddit</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_reddit-square"></i>
              <code class="pb-3">oi_reddit-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_skype"></i>
              <code class="pb-3">oi_skype</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_slack"></i>
              <code class="pb-3">oi_slack</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_snapchat"></i>
              <code class="pb-3">oi_snapchat</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_soundcloud"></i>
              <code class="pb-3">oi_soundcloud</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_spotify"></i>
              <code class="pb-3">oi_spotify</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_steam"></i>
              <code class="pb-3">oi_steam</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_strava"></i>
              <code class="pb-3">oi_strava</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_telegram"></i>
              <code class="pb-3">oi_telegram</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_tiktok"></i>
              <code class="pb-3">oi_tiktok</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_tumblr"></i>
              <code class="pb-3">oi_tumblr</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_twitch"></i>
              <code class="pb-3">oi_twitch</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_vimeo"></i>
              <code class="pb-3">oi_vimeo</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_vk"></i>
              <code class="pb-3">oi_vk</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_weibo"></i>
              <code class="pb-3">oi_weibo</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_whatsapp"></i>
              <code class="pb-3">oi_whatsapp</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_x"></i>
              <code class="pb-3">oi_x</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_x-square"></i>
              <code class="pb-3">oi_x-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_xing"></i>
              <code class="pb-3">oi_xing</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_yelp"></i>
              <code class="pb-3">oi_yelp</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_youtube"></i>
              <code class="pb-3">oi_youtube</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_youtube-play"></i>
              <code class="pb-3">oi_youtube-play</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_youtube-square"></i>
              <code class="pb-3">oi_youtube-square</code>
          </div>
      </div>

   </section>

.. rubric:: Technologies

.. raw:: html

   <section class="row">
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_amazon"></i>
              <code class="pb-3">oi_amazon</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_android"></i>
              <code class="pb-3">oi_android</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_angellist"></i>
              <code class="pb-3">oi_angellist</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_apple"></i>
              <code class="pb-3">oi_apple</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_bitbucket"></i>
              <code class="pb-3">oi_bitbucket</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_bitbucket-square"></i>
              <code class="pb-3">oi_bitbucket-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_chrome"></i>
              <code class="pb-3">oi_chrome</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_codepen"></i>
              <code class="pb-3">oi_codepen</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_creative-commons"></i>
              <code class="pb-3">oi_creative-commons</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_css3"></i>
              <code class="pb-3">oi_css3</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_dropbox"></i>
              <code class="pb-3">oi_dropbox</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_drupal"></i>
              <code class="pb-3">oi_drupal</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_edge"></i>
              <code class="pb-3">oi_edge</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_git"></i>
              <code class="pb-3">oi_git</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_github"></i>
              <code class="pb-3">oi_github</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_github-square"></i>
              <code class="pb-3">oi_github-square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_gitlab"></i>
              <code class="pb-3">oi_gitlab</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_google"></i>
              <code class="pb-3">oi_google</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_google-play"></i>
              <code class="pb-3">oi_google-play</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_hacker-news"></i>
              <code class="pb-3">oi_hacker-news</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_html5"></i>
              <code class="pb-3">oi_html5</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_joomla"></i>
              <code class="pb-3">oi_joomla</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_linux"></i>
              <code class="pb-3">oi_linux</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_opera"></i>
              <code class="pb-3">oi_opera</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_safari"></i>
              <code class="pb-3">oi_safari</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_stack-overflow"></i>
              <code class="pb-3">oi_stack-overflow</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_trello"></i>
              <code class="pb-3">oi_trello</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_windows"></i>
              <code class="pb-3">oi_windows</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_wordpress"></i>
              <code class="pb-3">oi_wordpress</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_yahoo"></i>
              <code class="pb-3">oi_yahoo</code>
          </div>
      </div>

   </section>

.. rubric:: Payment methods

.. raw:: html

   <section class="row">
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_paypal"></i>
              <code class="pb-3">oi_paypal</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-paypal"></i>
              <code class="pb-3">oi_cc-paypal</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-amex"></i>
              <code class="pb-3">oi_cc-amex</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-diners-club"></i>
              <code class="pb-3">oi_cc-diners-club</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-discover"></i>
              <code class="pb-3">oi_cc-discover</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-jcb"></i>
              <code class="pb-3">oi_cc-jcb</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-mastercard"></i>
              <code class="pb-3">oi_cc-mastercard</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-stripe"></i>
              <code class="pb-3">oi_cc-stripe</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <i class="oi fs-1 p-3" data-icon="oi_cc-visa"></i>
              <code class="pb-3">oi_cc-visa</code>
          </div>
      </div>

   </section>

RTL adaptations
---------------

Some OI view icons have :abbr:`RTL (right-to-left)` adaptations that flip the glyph 180° when an
RTL language is active. Material Symbols directional icons (arrows, chevrons, etc.) also include RTL adaptations; refer to
the ``$ms-rtl-icons`` list in ``icons.scss`` for the full set.

.. _ui/odoo-ui-icons/utility-classes:

Utility classes
===============

The following utility classes can be combined with ``.oi``:

``oi-fw``
   Fixed width — useful for aligning icons in lists or menus.

   .. code-block:: html

      <i class="oi oi-fw" data-icon="check"></i>

``oi-spin``
   Continuous 360° rotation (2s, linear). Useful for loading indicators.

   .. code-block:: html

      <i class="oi oi-spin" data-icon="progress_activity"></i>

``oi-pulse``
   8-step pulsing rotation (1s). Alternative to ``oi-spin`` for a stepped animation.

   .. code-block:: html

      <i class="oi oi-pulse" data-icon="progress_activity"></i>

``oi-filled``
   By default, Material Symbols are rendered in their outline style. Add ``oi-filled`` to render
   the filled variant of the icon.

   .. code-block:: html

      <i class="oi oi-filled" data-icon="favorite"></i>

Size classes
   ``oi-lg``, ``oi-2x`` … ``oi-10x`` scale the icon relative to the current font size.

   .. code-block:: html

      <i class="oi oi-2x" data-icon="check"></i>

CSS variables
   The icon rendering can be adjusted via CSS custom properties:

   - ``--oi-font-size`` — overrides the icon's font size.

Setting an icon from CSS
   To set the icon's glyph directly from CSS (rather than the ``data-icon`` attribute), use the
   icon's ligature name as the ``content`` value. To use the filled variant, append ``_f`` to the
   name.

   .. code-block:: css

      /* Outline variant */
      .my-element::before { content: "favorite"; }

      /* Filled variant */
      .my-element::before { content: "favorite_f"; }

.. _ui/migration-font-awesome:

Migration from Font Awesome
===========================

Font Awesome has been replaced by Material Symbols as the primary icon system. Temporary
compatibility mappings translate legacy ``fa-*`` class names to their Material
Symbols or OI equivalents, so existing code continues to render without immediate changes. See the
`fa_to_ms.scss <https://github.com/odoo/odoo/blob/3e15a7be69/addons/web/static/src/webclient/icons_mappings/fa_to_ms.scss>`_
and `oi_to_ms.scss <https://github.com/odoo/odoo/blob/3e15a7be69/addons/web/static/src/webclient/icons_mappings/oi_to_ms.scss>`_
mapping files for the full set of equivalences.

.. example::

   The following are equivalent after the compatibility mapping is applied:

   .. code-block:: html

      <!-- Legacy (Font Awesome) -->
      <i class="fa fa-check"></i>

      <!-- New system -->
      <i class="oi" data-icon="check"></i>

.. important::

   The compatibility mapping is temporary and will be removed once the migration is complete.
   Update usages to the new system as soon as possible.

**Migration steps:**

1. Replace ``class="fa fa-<name>"`` with ``class="oi" data-icon="<ms-name>"`` where ``<ms-name>``
   is the corresponding `Material Symbols ligature name <https://fonts.google.com/icons>`_.
2. For icons not available in Material Symbols (brands, custom Odoo glyphs), use the OI library:
   ``class="oi" data-icon="oi_<name>"``.
3. Remove any ``fa-*`` size classes (``fa-2x``, etc.) and replace them with the equivalent
   ``oi-*`` size classes.

.. _ui/odoo-spreadsheet-icons:

Odoo Spreadsheet icons
======================

The `Odoo Spreadsheet <{GITHUB_PATH}/addons/spreadsheet/static/src/o_spreadsheet>`_ icons are
defined as `<svg>` elements and rendered using QWeb `templates
<{OWL_PATH}/doc/v2/reference/templates.md>`_.

.. example::

   .. code-block:: html

      <t t-name="o-spreadsheet-Icon.GLOBAL_FILTERS">
          <svg width="20" height="20" viewbox="0 0 20 20">
              <path fill="currentColor" d="M1 3h12L7 9M5.5 6h3v11l-3-3M14 4h4v2h-4m-3 3h7v2h-7m0 3h7v2h-7"/>
          </svg>
      </t>

.. raw:: html

   <section class="row">

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#see-records"/>
                    </svg>
                </div>
                <code>SEE_RECORDS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#global-filters"/>
                    </svg>
                </div>
                <code>GLOBAL_FILTERS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#new"/>
                    </svg>
                </div>
                <code>NEW</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#copy-file"/>
                    </svg>
                </div>
                <code>COPY_FILE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#save"/>
                    </svg>
                </div>
                <code>SAVE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#version-history"/>
                    </svg>
                </div>
                <code>VERSION_HISTORY</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#camera"/>
                    </svg>
                </div>
                <code>CAMERA</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#download-as-json"/>
                    </svg>
                </div>
                <code>DOWNLOAD_AS_JSON</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#add-to-dashboard"/>
                    </svg>
                </div>
                <code>ADD_TO_DASHBOARD</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#odoo-list"/>
                    </svg>
                </div>
                <code>ODOO_LIST</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-list"/>
                    </svg>
                </div>
                <code>INSERT_LIST</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#refresh-data"/>
                    </svg>
                </div>
                <code>REFRESH_DATA</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#comments"/>
                    </svg>
                </div>
                <code>COMMENTS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#line-chart"/>
                    </svg>
                </div>
                <code>LINE_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#stacked-line-chart"/>
                    </svg>
                </div>
                <code>STACKED_LINE_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#area-chart"/>
                    </svg>
                </div>
                <code>AREA_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#stacked-area-chart"/>
                    </svg>
                </div>
                <code>STACKED_AREA_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#column-chart"/>
                    </svg>
                </div>
                <code>COLUMN_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#stacked-column-chart"/>
                    </svg>
                </div>
                <code>STACKED_COLUMN_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#bar-chart"/>
                    </svg>
                </div>
                <code>BAR_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#stacked-bar-chart"/>
                    </svg>
                </div>
                <code>STACKED_BAR_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#combo-chart"/>
                    </svg>
                </div>
                <code>COMBO_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#pie-chart"/>
                    </svg>
                </div>
                <code>PIE_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#doughnut-chart"/>
                    </svg>
                </div>
                <code>DOUGHNUT_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#scatter-chart"/>
                    </svg>
                </div>
                <code>SCATTER_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#gauge-chart"/>
                    </svg>
                </div>
                <code>GAUGE_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#scorecard-chart"/>
                    </svg>
                </div>
                <code>SCORECARD_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#waterfall-chart"/>
                    </svg>
                </div>
                <code>WATERFALL_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#population-pyramid-chart"/>
                    </svg>
                </div>
                <code>POPULATION_PYRAMID_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#radar-chart"/>
                    </svg>
                </div>
                <code>RADAR_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#filled-radar-chart"/>
                    </svg>
                </div>
                <code>FILLED_RADAR_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#geo-chart"/>
                    </svg>
                </div>
                <code>GEO_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#funnel-chart"/>
                    </svg>
                </div>
                <code>FUNNEL_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#sunburst-chart"/>
                    </svg>
                </div>
                <code>SUNBURST_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#tree-map-chart"/>
                    </svg>
                </div>
                <code>TREE_MAP_CHART</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#clear-and-reload"/>
                    </svg>
                </div>
                <code>CLEAR_AND_RELOAD</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#export-xlsx"/>
                    </svg>
                </div>
                <code>EXPORT_XLSX</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#open-read-only"/>
                    </svg>
                </div>
                <code>OPEN_READ_ONLY</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#open-dashboard"/>
                    </svg>
                </div>
                <code>OPEN_DASHBOARD</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#open-read-write"/>
                    </svg>
                </div>
                <code>OPEN_READ_WRITE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#import-xlsx"/>
                    </svg>
                </div>
                <code>IMPORT_XLSX</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#undo"/>
                    </svg>
                </div>
                <code>UNDO</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#redo"/>
                    </svg>
                </div>
                <code>REDO</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#cut"/>
                    </svg>
                </div>
                <code>CUT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#copy-as-image"/>
                    </svg>
                </div>
                <code>COPY_AS_IMAGE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#paste"/>
                    </svg>
                </div>
                <code>PASTE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#clear"/>
                    </svg>
                </div>
                <code>CLEAR</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#freeze"/>
                    </svg>
                </div>
                <code>FREEZE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#unfreeze"/>
                    </svg>
                </div>
                <code>UNFREEZE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#formula"/>
                    </svg>
                </div>
                <code>FORMULA</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#hide-row"/>
                    </svg>
                </div>
                <code>HIDE_ROW</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#unhide-row"/>
                    </svg>
                </div>
                <code>UNHIDE_ROW</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#hide-col"/>
                    </svg>
                </div>
                <code>HIDE_COL</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#unhide-col"/>
                    </svg>
                </div>
                <code>UNHIDE_COL</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-row"/>
                    </svg>
                </div>
                <code>INSERT_ROW</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-row-before"/>
                    </svg>
                </div>
                <code>INSERT_ROW_BEFORE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-row-after"/>
                    </svg>
                </div>
                <code>INSERT_ROW_AFTER</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-col"/>
                    </svg>
                </div>
                <code>INSERT_COL</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-col-after"/>
                    </svg>
                </div>
                <code>INSERT_COL_AFTER</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-col-before"/>
                    </svg>
                </div>
                <code>INSERT_COL_BEFORE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-cell"/>
                    </svg>
                </div>
                <code>INSERT_CELL</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-cell-shift-down"/>
                    </svg>
                </div>
                <code>INSERT_CELL_SHIFT_DOWN</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-cell-shift-right"/>
                    </svg>
                </div>
                <code>INSERT_CELL_SHIFT_RIGHT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#delete-cell-shift-up"/>
                    </svg>
                </div>
                <code>DELETE_CELL_SHIFT_UP</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#delete-cell-shift-left"/>
                    </svg>
                </div>
                <code>DELETE_CELL_SHIFT_LEFT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-dropdown"/>
                    </svg>
                </div>
                <code>INSERT_DROPDOWN</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-sheet"/>
                    </svg>
                </div>
                <code>INSERT_SHEET</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#paint-format"/>
                    </svg>
                </div>
                <code>PAINT_FORMAT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#conditional-format"/>
                    </svg>
                </div>
                <code>CONDITIONAL_FORMAT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#clear-format"/>
                    </svg>
                </div>
                <code>CLEAR_FORMAT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#bold"/>
                    </svg>
                </div>
                <code>BOLD</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#italic"/>
                    </svg>
                </div>
                <code>ITALIC</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#underline"/>
                    </svg>
                </div>
                <code>UNDERLINE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#strike"/>
                    </svg>
                </div>
                <code>STRIKE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#text-color"/>
                    </svg>
                </div>
                <code>TEXT_COLOR</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#fill-color"/>
                    </svg>
                </div>
                <code>FILL_COLOR</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#merge-cell"/>
                    </svg>
                </div>
                <code>MERGE_CELL</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#align-left"/>
                    </svg>
                </div>
                <code>ALIGN_LEFT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#align-center"/>
                    </svg>
                </div>
                <code>ALIGN_CENTER</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#align-right"/>
                    </svg>
                </div>
                <code>ALIGN_RIGHT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#align-top"/>
                    </svg>
                </div>
                <code>ALIGN_TOP</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#align-middle"/>
                    </svg>
                </div>
                <code>ALIGN_MIDDLE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#align-bottom"/>
                    </svg>
                </div>
                <code>ALIGN_BOTTOM</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#wrapping-overflow"/>
                    </svg>
                </div>
                <code>WRAPPING_OVERFLOW</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#wrapping-wrap"/>
                    </svg>
                </div>
                <code>WRAPPING_WRAP</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#wrapping-clip"/>
                    </svg>
                </div>
                <code>WRAPPING_CLIP</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#borders"/>
                    </svg>
                </div>
                <code>BORDERS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-hv"/>
                    </svg>
                </div>
                <code>BORDER_HV</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-h"/>
                    </svg>
                </div>
                <code>BORDER_H</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-v"/>
                    </svg>
                </div>
                <code>BORDER_V</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-external"/>
                    </svg>
                </div>
                <code>BORDER_EXTERNAL</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-left"/>
                    </svg>
                </div>
                <code>BORDER_LEFT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-top"/>
                    </svg>
                </div>
                <code>BORDER_TOP</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-right"/>
                    </svg>
                </div>
                <code>BORDER_RIGHT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-bottom"/>
                    </svg>
                </div>
                <code>BORDER_BOTTOM</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-clear"/>
                    </svg>
                </div>
                <code>BORDER_CLEAR</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-type"/>
                    </svg>
                </div>
                <code>BORDER_TYPE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-color"/>
                    </svg>
                </div>
                <code>BORDER_COLOR</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#border-no-color"/>
                    </svg>
                </div>
                <code>BORDER_NO_COLOR</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#plus"/>
                    </svg>
                </div>
                <code>PLUS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#minus"/>
                    </svg>
                </div>
                <code>MINUS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#list"/>
                    </svg>
                </div>
                <code>LIST</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#arrow-down"/>
                    </svg>
                </div>
                <code>ARROW_DOWN</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#arrow-up"/>
                    </svg>
                </div>
                <code>ARROW_UP</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#arrow-right"/>
                    </svg>
                </div>
                <code>ARROW_RIGHT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#smile"/>
                    </svg>
                </div>
                <code>SMILE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#meh"/>
                    </svg>
                </div>
                <code>MEH</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#frown"/>
                    </svg>
                </div>
                <code>FROWN</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#green-dot"/>
                    </svg>
                </div>
                <code>GREEN_DOT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#yellow-dot"/>
                    </svg>
                </div>
                <code>YELLOW_DOT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#red-dot"/>
                    </svg>
                </div>
                <code>RED_DOT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#small-dot-right-align"/>
                    </svg>
                </div>
                <code>SMALL_DOT_RIGHT_ALIGN</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#sort-range"/>
                    </svg>
                </div>
                <code>SORT_RANGE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#filter-icon"/>
                    </svg>
                </div>
                <code>FILTER_ICON</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#check"/>
                    </svg>
                </div>
                <code>CHECK</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#number-formats"/>
                    </svg>
                </div>
                <code>NUMBER_FORMATS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#font-size"/>
                    </svg>
                </div>
                <code>FONT_SIZE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#split-text"/>
                    </svg>
                </div>
                <code>SPLIT_TEXT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#display-header"/>
                    </svg>
                </div>
                <code>DISPLAY_HEADER</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#cog"/>
                    </svg>
                </div>
                <code>COG</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#plus-in-box"/>
                    </svg>
                </div>
                <code>PLUS_IN_BOX</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#minus-in-box"/>
                    </svg>
                </div>
                <code>MINUS_IN_BOX</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#group-rows"/>
                    </svg>
                </div>
                <code>GROUP_ROWS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#ungroup-rows"/>
                    </svg>
                </div>
                <code>UNGROUP_ROWS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#group-columns"/>
                    </svg>
                </div>
                <code>GROUP_COLUMNS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#ungroup-columns"/>
                    </svg>
                </div>
                <code>UNGROUP_COLUMNS</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#data-validation"/>
                    </svg>
                </div>
                <code>DATA_VALIDATION</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#thin-drag-handle"/>
                    </svg>
                </div>
                <code>THIN_DRAG_HANDLE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#short-thin-drag-handle"/>
                    </svg>
                </div>
                <code>SHORT_THIN_DRAG_HANDLE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#edit-table"/>
                    </svg>
                </div>
                <code>EDIT_TABLE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#delete-table"/>
                    </svg>
                </div>
                <code>DELETE_TABLE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#paint-table"/>
                    </svg>
                </div>
                <code>PAINT_TABLE</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#circle-info"/>
                    </svg>
                </div>
                <code>CIRCLE_INFO</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#pivot"/>
                    </svg>
                </div>
                <code>PIVOT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#insert-pivot"/>
                    </svg>
                </div>
                <code>INSERT_PIVOT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#move-sheet-left"/>
                    </svg>
                </div>
                <code>MOVE_SHEET_LEFT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#move-sheet-right"/>
                    </svg>
                </div>
                <code>MOVE_SHEET_RIGHT</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#rename-sheet"/>
                    </svg>
                </div>
                <code>RENAME_SHEET</code>
            </div>
        </div>

        <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
            <div class="card text-center">
                <div class="p-2 mx-auto">
                    <svg class="os-icon" aria-hidden="true" role="img">
                        <use href="#carousel"/>
                    </svg>
                </div>
                <code>CAROUSEL</code>
            </div>
        </div>

   </section>
