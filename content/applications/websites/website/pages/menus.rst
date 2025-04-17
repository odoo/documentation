===================
Headers and Footers
===================

Header design
=============

Headers are used to display elements such as logos, text, search bars, sign-ins, social media links,
logos, buttons, etc., at the top of every website page.

To modify a header, click on :guilabel:`Edit` and then click on the header. To customize it the
following options are available in the :guilabel:`Header` section of the website editor:

- Choose a :guilabel:`Template` from one of the options from the drop-down selection.
- Select :guilabel:`Background` settings to change the color palette through different
  :guilabel:`Theme` styles, :guilabel:`Custom` color options, and :guilabel:`Gradient` ones.
- When adding a :guilabel:`Border` to the header, its size, style and color can be defined.
- :guilabel:`Round corners` can be adapted to fit the design.
- :guilabel:`Shadow`, its :guilabel:`Color`, :guilabel:`Offset`, :guilabel:`Blur`, and
  :guilabel:`Spread` can be adjusted.
- Add a :guilabel:`Scroll Effect`. To preview the effect, hover on it.
- Choose the :guilabel:`Header Position` between :guilabel:`Regular`,  :guilabel:`Hidden` and
  :guilabel:`Over The Content` for this last one the :guilabel:`Background` and
  :guilabel:`Text Color` can be customized.
- Add additional :guilabel:`Elements` like text, search bar, sign-in, social media links, buttons
  and logo.
- :guilabel:`Show Empty` allows to display the cart and the wishlist when empty.

To finalize changes, click on :guilabel:`Save`.

Menu items design
-----------------

To modify the menu items, go to the :guilabel:`Navbar` section of the website editor to:

- Adapt the :guilabel:`Mobile Alignment`
- Choose the :guilabel:`Font` for the menu items.
- Pick the font size, color and alignment in the :guilabel:`Format` field.
- Select a :guilabel:`Links Style` to show which page is currently being viewed.
- To change the sign-in button, language button and the contact-us button colors, select the option
  you need in the :guilabel:`Additional colors` field among :guilabel:`Primary`,
  :guilabel:`Secondary` or :guilabel:`Default`.

.. note::

   The elements in the :guilabel:`Navbar` section can vary depending on the templates chosen.

To finalize changes, click on :guilabel:`Save`.

How to hide header?
-------------------------

Menu
====
Menus are used to organize your website’s content and help visitors navigate through your web pages
effectively. User-friendly and well-structured website menus also play a crucial role in improving
:doc:`search engine rankings <seo>`.

Odoo allows you to customize the content and appearance of your website's menu to your needs.

Menu editor
===========

The menu editor allows you to edit your website's menu and add :ref:`regular menu items
<website/regular-menus>` and :ref:`mega menus <website/mega-menus>`.

To edit your website's menu, go to :menuselection:`Website --> Site --> Menu Editor`. From there,
you can:

- **rename** a menu item or change its URL using the :guilabel:`Edit Menu Item` icon;
- **delete** a menu item using the :guilabel:`Delete Menu Item` icon;
- **move** a menu item by dragging and dropping it to the desired place in the menu;
- **create a regular drop-down menu** by dragging and dropping the sub-menu items to the right,
  underneath their parent menu.

.. image:: menus/menu-editor.png
   :alt: Menu editor with sub-menus

.. note::

  You can also access the menu editor by clicking :guilabel:`Edit`, selecting any menu item and
  clicking the :guilabel:`Edit Menu` icon.

  .. image:: menus/edit-menu-icon.png
     :alt: Access the Menu editor while in Edit mode.

.. _website/regular-menus:

Adding regular menu items
-------------------------

By default, pages are added to the menu as regular menu items when :doc:`they are created
<../pages>`. You can also add regular menu items from the menu editor by clicking :guilabel:`Add
Menu Item`. Enter the :guilabel:`Name` and URL of the related page in the pop-up window that appears
on the screen and click :guilabel:`OK`.

.. tip::
   In the :guilabel:`URL or Email` field, you can type `/` to search for a page on your website or
   `#` to search for an existing custom anchor.

.. _website/mega-menus:

Adding mega menus
-----------------

Mega menus are similar to drop-down menus, but instead of a simple list of sub-menus, they display a
panel divided into groups of navigation options. This makes them suitable for websites with large
amounts of content, as they can help include all of your web pages in the menu while still making
all menu items visible at once. Mega menus can also be structured more visually than regular
drop-down menus, for example, through layout, typography, and icons.

.. image:: menus/mega-menu.png
   :alt: Mega menu in the navigation bar.

To create a mega menu, go to :menuselection:`Website --> Site --> Menu Editor` and click
:guilabel:`Add Mega Menu Item`. Enter the :guilabel:`Name` of the mega menu in the pop-up, click
:guilabel:`OK`, then :guilabel:`Save`.

To adapt the options and layout of the mega menu, click it in the navigation bar, then click
:guilabel:`Edit`. Mega menus are composed of building blocks, which means you can customize each
component individually using inline formatting, as well as the options available in the
:guilabel:`Customize` tab in the website builder. For example, you can:

- edit the text directly in the building block;
- edit a menu item's URL by selecting the menu item, then clicking the :guilabel:`Edit link` button
  in the small preview pop-up. Type `/` to search for a page on your website, or `#` to search for
  an existing custom anchor.

  .. image:: menus/mega-menu-option.png
     :alt: Edit a mega menu option.

- move a menu item by dragging and dropping the related block to the desired position in the mega
  menu;
- delete a menu item by deleting the related block.

.. tip::
   You can adapt the general layout of the mega menu by selecting the desired :guilabel:`Template`
   and :guilabel:`Size` in the :guilabel:`Mega menu` section in the :guilabel:`Customize` tab in the
   website builder.

Header and navigation bar appearance
====================================

To customize the appearance of your website's menu, click :guilabel:`Edit`, then select the
navigation bar or any menu item. You can then adapt the fields in the :guilabel:`Header` and
:guilabel:`Navbar` sections in the :guilabel:`Customize` tab in the website builder.
