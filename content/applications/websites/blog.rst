====
Blog
====

**Odoo Blog** enables the creation and management of blog posts on a website to engage an audience
and build a community. Blog pages and blog posts can be customized using the website builder.

.. tip::
   If the Blog module is not yet installed, click :guilabel:`+New` on the website builder, select
   :guilabel:`Blog Post`, and click :guilabel:`Install`.

Blog pages
==========

Create a blog page
------------------

To create or edit a blog, go to :menuselection:`Website --> Configuration --> Blogs`. Click
:guilabel:`New`, and enter the :guilabel:`Blog Name` and the :guilabel:`Blog Subtitle`.

The :guilabel:`Blog` menu item is added to the website's menu the first time a blog is created and
gathers all the blogs.

Customize blog pages
--------------------

To customize the content of a blog homepage, open a blog homepage and click :menuselection:`Edit
--> Style`. There are multiple options available to edit the blog homepages in the website editor:

- :guilabel:`Top Banner`: displays the title of the page.
- :ref:`Layout <website/building_blocks/grid>`.
- :guilabel:`Cards`: adds a *card* effect.
- :guilabel:`Increase Readability`.
- :guilabel:`Sidebar`: displays archives, social media links and :ref:`tags <blog/tags>`.
- :guilabel:`Archives`: enables filtering posts by selected month.
- :guilabel:`Follow Us`: displays links to the social media networks.
- :guilabel:`Tags List`: displays all :ref:`tags <blog/tags>` related to a blog.
- :guilabel:`Posts List`: to display the posts' images or hide them.
- :guilabel:`Author`: displays the posts' authors.
- :guilabel:`Comments/Views Stats`: displays the posts' number of comments and views.
- :guilabel:`Teaser & Tags`: displays the posts' first sentences and tags.

After applying the desired changes, click :guilabel:`Save`

.. note::
   Settings apply to **all** blogs pages.

.. _blog/tags:

Tags
~~~~

Tags let visitors filter all posts sharing the same tag. By default, they are displayed at the
bottom of posts, but can also be displayed on the blog's main page. To do so, click
:menuselection:`Edit --> Style` and enable the :guilabel:`Sidebar`. By default, the sidebar's
:guilabel:`Tags List` is enabled.

Create tags
***********

To create a tag, go to :menuselection:`Website --> Configuration --> Tags` and click
:guilabel:`New`. Fill in the: (e.g., example.com/fr_BE)

- :guilabel:`Name`
- :guilabel:`Category`: tag categories let the group tags displayed on the sidebar by theme.
- :guilabel:`Used in`: to apply the tag to existing blog posts, click :guilabel:`Add a line`,
  select the posts, and click :guilabel:`Select`.

Add and create tags directly from posts by clicking :menuselection:`Edit --> Style` and
select the post's cover. Under :guilabel:`Tags`, click :guilabel:`Choose a record...`, and select
or create a tag. You can create a tag by writing something in the search bar and clicking on
:guilabel:`Create "..."`.

Create tag category
*******************

To create tag categories, go to :menuselection:`Website --> Configuration --> Tag
Categories --> New`.

Blog posts
==========

Create a blog post
------------------

Go to the website, click :guilabel:`New` in the top-right corner, and select
:guilabel:`Blog Post`. In the pop-up, **select the blog** where the post should appear, write the
post's :guilabel:`Title`, and :guilabel:`Save`. Write the post's content and customize it using the
website builder.

.. tip::
   - Illustrate your articles with copyright-free images from :doc:`Unsplash
     </applications/general/integrations/unsplash>`.
   - Type `/` in the text editor to format and add elements to your text.

.. important::
   To publish a post, toggle the :guilabel:`Unpublished` switch in the top-right corner of the page.

Customize blog posts
--------------------

To customize the content of a blog post, open a blog post and click
:menuselection:`Edit --> Style`. In addition to layout, readability, sidebar options and tags,
different available options can be used to customize the posts:

- :guilabel:`Blog List`: displays links to all the blogs.
- :guilabel:`Share Links`: displays share buttons to several social networks.
- :guilabel:`Breadcrumb`: displays the path to the post.
- :guilabel:`Bottom`: :guilabel:`Next Article` displays the next post at the bottom, and
  :guilabel:`Comments` enable visitors to add comments

After applying the desired changes, click :guilabel:`Save`

.. note::
   Settings apply to **all** posts.

.. tip::
   Use :ref:`Plausible <analytics/plausible>` to keep track of the traffic on your blog.

.. seealso::
   `Odoo Tutorials: Blogs [video] <https://www.odoo.com/slides/slide/blogs-6935>`_

Use the `/` to activate some functions that helps generate some content by adding bullet
lists, tables, quotes, columns, links, images, videos etc.
Amongst the available options, there is an AI tool to helps generate the content as desired.

Also, the customization tool to configure the text format appears when hovering the mouse over the
selected text.

Choose the type of heading for a text, decide the format, the size, the color, the highlight,
the alignment, add bullets or numbers, add links, and add effects and animation to the
text. Translate, generate, or transform a text with AI. When clicking on the AI option,
a chat box appears, allowing a specific text feature to be requested.

These options help structure the content effectively.

.. Note::
   - Never have more than one :ref:`Heading 1 <website/elements/titles>` per page so the
     :doc:`SEO <../../../applications/websites/website/structure/seo>` can easily identify the main
     topic of the page.

   - To improve visibility of the recent content and encourage visitors to explore more content,
     the 'Blog' :ref:`building block <website/building_blocks/add>` can be added anywhere on any
     pages by dragging and dropping it on the desired pages of the website.

   - Customize blog building blocks through the website editor. For e.g., filter by the
     :guilabel:`Latest blog posts` or :guilabel:`Most viewed blog posts` and determine which blog(s)
     to display in the building block, so they can be accessible to visitors.

.. seealso::
   :doc:`Building block documentation <../../../applications/websites/website/web_design/building_blocks>`

.. tip::
   Improve the :doc:`SEO <../../../applications/websites/website/structure/seo>` by updating the
   content of the website regularly. This increases blogs' visibility in search engines, attracts
   more visitors more clicks, and ensure that readers can easily fin relevant content.
   Also, use meta tags and ensure both the website content and its metadata are translated.
