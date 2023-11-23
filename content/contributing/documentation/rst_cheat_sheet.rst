:custom-css: showcase_tables.css

===============
RST cheat sheet
===============

.. _contributing/headings:

Headings
========

| For each formatting line (e.g., ``===``), write as many symbols (``=``) as there are characters in
  the header.
| The symbols used for the formatting are, in fact, not important. Only the order in which they are
  written matters, as it determines the size of the decorated heading. This means that you may
  encounter different heading formatting and in a different order, in which case you should follow
  the formatting in place in the document. In any other case, use the formatting shown below.

+--------------+----------------------+
| Heading size | Formatting           |
+==============+======================+
| H1           | .. code-block:: text |
|              |                      |
|              |    =======           |
|              |    Heading           |
|              |    =======           |
+--------------+----------------------+
| H2           | .. code-block:: text |
|              |                      |
|              |    Heading           |
|              |    =======           |
+--------------+----------------------+
| H3           | .. code-block:: text |
|              |                      |
|              |    Heading           |
|              |    -------           |
+--------------+----------------------+
| H4           | .. code-block:: text |
|              |                      |
|              |    Heading           |
|              |    ~~~~~~~           |
+--------------+----------------------+
| H5           | .. code-block:: text |
|              |                      |
|              |    Heading           |
|              |    *******           |
+--------------+----------------------+
| H6           | .. code-block:: text |
|              |                      |
|              |    Heading           |
|              |    ^^^^^^^           |
+--------------+----------------------+

.. important::
   Each document must have **exactly one H1 heading**. No less, no more.

.. _contributing/markups:

Markups
=======

.. _contributing/markups/italic:

Emphasis (italic)
-----------------

To emphasize a part of the text. The text is rendered in italic.

.. list-table::
   :class: o-showcase-table

   * - Fill out the information *before* saving the form.

   * - .. code-block:: text

          Fill out the information *before* saving the form.

.. _contributing/markups/bold:

Strong emphasis (bold)
----------------------

To emphasize a part of the text. The text is rendered in bold.

.. list-table::
   :class: o-showcase-table

   * - A **subdomain** is a domain that is a part of another domain.

   * - .. code-block:: text

          A **subdomain** is a domain that is a part of another domain.

.. _contributing/markups/code-sample:

Technical term (literal)
------------------------

To write a technical term or a specific value to insert. The text is rendered in literal.

.. list-table::
   :class: o-showcase-table

   * - Insert the IP address of your printer, for example, `192.168.1.25`.

   * - .. code-block:: text

          Insert the IP address of your printer, for example, `192.168.1.25`.

.. _contributing/markups/definitions:

Definitions
-----------

Use the `dfn` markup to define a term.

.. list-table::
   :class: o-showcase-table

   * - The documentation is written in RST and needs to be built (:dfn:`converted to HTML`) to display
       nicely.

   * - .. code-block:: text

          The documentation is written in RST and needs to be built (:dfn:`converted to HTML`) to display
          nicely.

.. _contributing/markups/abbreviations:

Abbreviations
-------------

Use the `abbr` markup to write a self-defining abbreviation that is displayed as a tooltip.

.. list-table::
   :class: o-showcase-table

   * - Odoo uses :abbr:`OCR (optical character recognition)` and artificial intelligence technologies to
       recognize the content of the documents.

   * - .. code-block:: text

          Odoo uses :abbr:`OCR (optical character recognition)` and artificial intelligence technologies to
          recognize the content of the documents.

.. _contributing/markups/guilabel:

:abbr:`GUI (graphical user interface)` element
----------------------------------------------

Use the `guilabel` markup to identify any text of the interactive user interface (e.g., button
labels, view titles, field names, lists items, ...).

.. list-table::
   :class: o-showcase-table

   * - Update your credentials, then click on :guilabel:`Save`.

   * - .. code-block:: text

          Update your credentials, then click on :guilabel:`Save`.

.. _contributing/markups/menuselection:

Menu selection
--------------

Use the `menuselection` markup to guide the user through a sequence of menus.

.. list-table::
   :class: o-showcase-table

   * -  To review your sales performance, go to :menuselection:`Sales --> Reporting --> Dashboard`.

   * - .. code-block:: text

          To review your sales performance, go to :menuselection:`Sales --> Reporting --> Dashboard`.

.. _contributing/markups/file:

File
----

Use the `file` markup to indicate a file path or name.


.. list-table::
   :class: o-showcase-table

   * - Create redirections with the :file:`redirects.txt` file at the root of the repository.

   * - .. code-block:: text

          Create redirections with the :file:`redirects.txt` file at the root of the repository.

.. _contributing/markups/command:

Command
-------

Use the `command` markup to highlight a command.

.. list-table::
   :class: o-showcase-table

   * - Run the command :command:`make clean html` to delete existing built files and build the
       documentation to HTML.

   * - .. code-block:: text

          Run the command :command:`make clean html` to delete existing built files and build the
          documentation to HTML.

.. _contributing/lists:

Lists
=====

.. _contributing/bulleted-list:

Bulleted list
-------------

.. list-table::
   :class: o-showcase-table

   * - - This is a bulleted list.
       - It has two items, the second
         item uses two lines.

   * - .. code-block:: text

          - This is a bulleted list.
          - It has two items, the second
            item uses two lines.

.. _contributing/numbered-list:

Numbered list
-------------

.. list-table::
   :class: o-showcase-table

   * - #. This is a numbered list.
       #. Numbering is automatic.

   * - .. code-block:: text

          #. This is a numbered list.
          #. Numbering is automatic.

.. list-table::
   :class: o-showcase-table

   * - 6. Use this format to start the numbering
          with a number other than one.
       #. The numbering is automatic from there.

   * - .. code-block:: text

          6. Use this format to start the numbering
             with a number other than one.
          #. The numbering is automatic from there.

.. tip::
   Prefer the use of autonumbered lists with `#.` for better code resilience.

.. _contributing/nested-list:

Nested lists
------------

.. list-table::
   :class: o-showcase-table

   * - - This is the first item of a bulleted list.

         #. It has a nested numbered list
         #. with two items.

   * - .. code-block:: text

          - This is the first item of a bulleted list.

            #. It has a nested numbered list
            #. with two items.

.. _contributing/hyperlinks:

Hyperlinks
==========

.. _contributing/external-hyperlinks:

External hyperlinks
-------------------

External hyperlinks are links to a URL with a custom label. They follow this syntax:
```label <URL>`_``

.. note::
   - The URL can be a relative path to a file within the documentation.
   - Use the :ref:`documentation pages hyperlinks <contributing/doc-pages-hyperlinks>` if you target
     another documentation page.

.. list-table::
   :class: o-showcase-table

   * - For instance, `this is an external hyperlink to Odoo's website <https://www.odoo.com>`_.

   * - .. code-block:: text

          For instance, `this is an external hyperlink to Odoo's website <https://www.odoo.com>`_.

.. _contributing/external-hyperlink-aliases:

External hyperlink aliases
--------------------------

| External hyperlink aliases allow creating shortcuts for external hyperlinks.
| The definition syntax is as follows: ``.. _target: URL``
| There are two ways to reference them, depending on the use case:

#. ``target_`` creates a hyperlink with the target name as label and the URL as reference. Note that
   the ``_`` moved after the target!
#. ```label <target_>`_`` does exactly what you expect: the label replaces the name of the target,
   and the target is replaced by the URL.

.. list-table::
   :class: o-showcase-table

   * - A `proof-of-concept <https://en.wikipedia.org/wiki/Proof_of_concept>`_ is a simplified
       version, a prototype of what is expected to agree on the main lines of expected changes. `PoC
       <https://en.wikipedia.org/wiki/Proof_of_concept>`_ is a common abbreviation.

   * - .. code-block:: text

          .. _proof-of-concept: https://en.wikipedia.org/wiki/Proof_of_concept

             A proof-of-concept_ is a simplified version, a prototype of what is expected to agree on the main
             lines of expected changes. `PoC <proof-of-concept_>`_ is a common abbreviation.

.. _contributing/custom-anchors:

Custom anchors
--------------

Custom anchors follow the same syntax as external hyperlink aliases but without any URL. Indeed,
they are internal. They allow referencing a specific part of a document by using the target as an
anchor. When the user clicks on the reference, the documentation scrolls to the part of the
page containing the anchor.

| The definition syntax is: ``.. _target:``
| There are two ways to reference them, both using the ``ref`` markup:

#. ``:ref:`target``` creates a hyperlink to the anchor with the heading defined below as label.
#. ``:ref:`label <target>``` creates a hyperlink to the anchor with the given label.

See :ref:`contributing/relative-links` to learn how to write proper relative links for internal
references.

.. note::
   - Custom anchors can be referenced from other files than the ones in which they are defined.
   - Notice that there is no ``_`` at the end, contrary to what is done with :ref:`external
     hyperlinks <contributing/external-hyperlinks>`.

.. list-table::
   :class: o-showcase-table

   * - This can easily be done by creating a new product, see `How to create a product?
       <https://example.com/product>`_ for additional help.

       **How to create a product?**

       As explained at the `start of the page <https://example.com/scroll-to-start-of-page>`_, ...

   * - .. code-block:: text

          .. _sales/quotation/start-of-page:

          This can easily be done by creating a new product, see :ref:`product` for additional help.

          .. _sales/quotation/product:

          How to create a product?
          ========================

          As explained at the :ref:`start of the page <sales/quotation/start-of-page>`, ...

.. _contributing/doc-pages-hyperlinks:

Documentation pages hyperlinks
------------------------------

| The ``doc`` markup allows referencing a documentation page wherever it is in the file tree through
  a relative file path.
| As usual, there are two ways to use the markup:


#. ``:doc:`path_to_doc_page``` creates a hyperlink to the documentation page with the title of the
   page as label.
#. ``:doc:`label <path_to_doc_page>``` creates a hyperlink to the documentation page with the given
   label.

.. list-table::
   :class: o-showcase-table

   * - Please refer to `this documentation <https://example.com/doc/accounting/invoices.html>`_ and
       to `Send a pro-forma invoice <https://example.com/doc/sales/proforma.html>`_.

   * - .. code-block:: text

          Please refer to :doc:`this documentation <customer_invoices>` and to
          :doc:`../sales/sales/invoicing/proforma`.

.. _contributing/download:

File download hyperlinks
------------------------

The ``download`` markup allows referencing files (that are not necessarily :abbr:`RST
(reStructuredText)` documents) within the source tree to be downloaded.

.. list-table::
   :class: o-showcase-table

   * - Download this `module structure template
       <https://example.com/doc/odoosh/extras/my_module.zip>`_ to start building your module in no
       time.

   * - .. code-block:: text

          Download this :download:`module structure template <extras/my_module.zip>` to start building your
          module in no time.

.. _contributing/image:

Images
======

The ``image`` markup allows inserting images in a document.

.. list-table::
   :class: o-showcase-table

   * - .. image:: rst_cheat_sheet/create-invoice.png
          :align: center
          :alt: Create an invoice.

   * - .. code-block:: text

          .. image:: rst_cheat_sheet/create-invoice.png
             :align: center
             :alt: Create an invoice.

.. tip::
   Add the :code:`:class: o-no-modal` `option
   <https://docutils.sourceforge.io/docs/ref/rst/directives.html#common-options>`_ to an image to
   prevent opening it in a modal.

.. _contributing/alert-blocks:

Alert blocks (admonitions)
==========================

.. _contributing/seealso:

See also
--------

.. list-table::
   :class: o-showcase-table

   * - .. seealso::
          - `Customer invoices <https://example.com/doc/accounting/invoices.html>`_
          - `Pro-forma invoices <https://example.com/doc/sales/proforma.html#activate-the-feature>`_

   * - .. code-block:: text

          .. seealso::
             - :doc:`customer_invoices`
             - `Pro-forma invoices <../sales/sales/invoicing/proforma.html#activate-the-feature>`_

.. _contributing/note:

Note
----

.. list-table::
   :class: o-showcase-table

   * - .. note::
          Use this alert block to grab the reader's attention about additional information.

   * - .. code-block:: text

          .. note::
             Use this alert block to grab the reader's attention about additional information.

.. _contributing/tip:

Tip
---

.. list-table::
   :class: o-showcase-table

   * - .. tip::
          Use this alert block to inform the reader about a useful trick that requires an action.

   * - .. code-block:: text

          .. tip::
             Use this alert block to inform the reader about a useful trick that requires an action.

.. _contributing/example:

Example
-------

.. list-table::
   :class: o-showcase-table

   * - .. example::
          Use this alert block to show an example.

   * - .. code-block:: text

          .. example::
             Use this alert block to show an example.

.. _contributing/exercise:

Exercise
--------

.. list-table::
   :class: o-showcase-table

   * - .. exercise::
          Use this alert block to suggest an exercise to the reader.

   * - .. code-block:: text

          .. exercise::
             Use this alert block to suggest an exercise to the reader.

.. _contributing/important:

Important
---------

.. list-table::
   :class: o-showcase-table

   * - .. important::
          Use this alert block to notify the reader about important information.

   * - .. code-block:: text

          .. important::
             Use this alert block to notify the reader about important information.

.. _contributing/warning:

Warning
-------

.. list-table::
   :class: o-showcase-table

   * - .. warning::
          Use this alert block to require the reader to proceed with caution with what is described in the
          warning.

   * - .. code-block:: text

          .. warning::
             Use this alert block to require the reader to proceed with caution with what is described in the
             warning.

.. _contributing/danger:

Danger
------

.. list-table::
   :class: o-showcase-table

   * - .. danger::
          Use this alert block to bring the reader's attention to a serious threat.

   * - .. code-block:: text

          .. danger::
             Use this alert block to bring the reader's attention to a serious threat.

.. _contributing/custom-alert-blocks:

Custom
------

.. list-table::
   :class: o-showcase-table

   * - .. admonition:: Title

          Customize this alert block with a **Title** of your choice.

   * - .. code-block:: text

          .. admonition:: Title

             Customize this alert block with a **Title** of your choice.

.. _contributing/tables:

Tables
======

List tables
-----------

List tables use two-level bulleted lists to convert data into a table. The first level represents
the rows and the second level represents the columns.

.. list-table::
   :class: o-showcase-table

   * - .. list-table::
          :header-rows: 1
          :stub-columns: 1

          * - Name
            - Country
            - Favorite color
          * - Raúl
            - Montenegro
            - Purple
          * - Mélanie
            - France
            - Red

   * - .. code-block:: text

          .. list-table::
             :header-rows: 1
             :stub-columns: 1

             * - Name
               - Country
               - Favorite colour
             * - Raúl
               - Montenegro
               - Purple
             * - Mélanie
               - France
               - Turquoise

Grid tables
-----------

Grid tables represent the rendered table and are more visual to work with.

.. list-table::
   :class: o-showcase-table

   * - +-----------------------+--------------+---------------+
       |                       | Shirts       | T-shirts      |
       +=======================+==============+===============+
       | **Available colours** | Purple       | Green         |
       |                       +--------------+---------------+
       |                       | Turquoise    | Orange        |
       +-----------------------+--------------+---------------+
       | **Sleeves length**    | Long sleeves | Short sleeves |
       +-----------------------+--------------+---------------+

   * - .. code-block:: text

          +-----------------------+--------------+---------------+
          |                       | Shirts       | T-shirts      |
          +=======================+==============+===============+
          | **Available colours** | Purple       | Green         |
          |                       +--------------+---------------+
          |                       | Turquoise    | Orange        |
          +-----------------------+--------------+---------------+
          | **Sleeves length**    | Long sleeves | Short sleeves |
          +-----------------------+--------------+---------------+

.. tip::
   - Use `=` instead of `-` to define header rows.
   - Remove `-` and `|` separators to merge cells.
   - Make use of `this convenient table generator <https://www.tablesgenerator.com/text_tables>`_ to
     build your tables. Then, copy-paste the generated formatting into your document.

.. _contributing/code-blocks:

Code blocks
===========

.. list-table::
   :class: o-showcase-table

   * - .. code-block:: python

          def main():
              print("Hello world!")

   * - .. code-block:: text

          .. code-block:: python

             def main():
                 print("Hello world!")

.. _contributing/spoilers:

Spoilers
========

.. list-table::
   :class: o-showcase-table

   * - .. spoiler:: Answer to the Ultimate Question of Life, the Universe, and Everything

          **42**

   * - .. code-block:: text

          .. spoiler:: Answer to the Ultimate Question of Life, the Universe, and Everything

             **42**

.. _contributing/tabs:

Content tabs
============

.. caution::
   The `tabs` markup may not work well in some situations. In particular:

   - The tabs' headers cannot be translated.
   - A tab cannot contain :ref:`headings <contributing/headings>`.
   - An :ref:`alert block <contributing/alert-blocks>` cannot contain tabs.
   - A tab cannot contain :ref:`custom anchors <contributing/custom-anchors>`.

.. _contributing/tabs/basic:

Basic tabs
----------

Basic tabs are useful to split the content into multiple options. The `tabs` markup is used to
define sequence of tabs. Each tab is then defined with the `tab` markup followed by a label.

.. list-table::
   :class: o-showcase-table

   * - .. tabs::

          .. tab:: Odoo Online

             Content dedicated to Odoo Online users.

          .. tab:: Odoo.sh

             Alternative for Odoo.sh users.

          .. tab:: On-premise

             Third version for On-premise users.

   * - .. code-block:: text

          .. tabs::

             .. tab:: Odoo Online

                Content dedicated to Odoo Online users.

             .. tab:: Odoo.sh

                Alternative for Odoo.sh users.

             .. tab:: On-premise

                Third version for On-premise users.

.. _contributing/tabs/nested:

Nested tabs
-----------

Tabs can be nested inside one another.

.. list-table::
   :class: o-showcase-table

   * - .. tabs::

          .. tab:: Stars

             .. tabs::

                .. tab:: The Sun

                   The closest star to us.

                .. tab:: Proxima Centauri

                   The second closest star to us.

                .. tab:: Polaris

                   The North Star.

          .. tab:: Moons

             .. tabs::

                .. tab:: The Moon

                   Orbits the Earth.

                .. tab:: Titan

                   Orbits Jupiter.

   * - .. code-block:: text

          .. tabs::

             .. tab:: Stars

                .. tabs::

                   .. tab:: The Sun

                      The closest star to us.

                   .. tab:: Proxima Centauri

                      The second closest star to us.

                   .. tab:: Polaris

                      The North Star.

             .. tab:: Moons

                .. tabs::

                   .. tab:: The Moon

                      Orbits the Earth.

                   .. tab:: Titan

                      Orbits Jupiter.

.. _contributing/tabs/group:

Group tabs
----------

Group tabs are special tabs that synchronize based on a group label. The last selected group is
remembered and automatically selected when the user returns to the page or visits another page with
the tabs group. The `group-tab` markup is used to define group tabs.

.. list-table::
   :class: o-showcase-table

   * - .. tabs::

          .. group-tab:: C++

             C++

          .. group-tab:: Python

             Python

          .. group-tab:: Java

             Java

       .. tabs::

          .. group-tab:: C++

             .. code-block:: c++

                int main(const int argc, const char **argv) {
                    return 0;
                }

          .. group-tab:: Python

             .. code-block:: python

                def main():
                    return

          .. group-tab:: Java

             .. code-block:: java

                class Main {
                    public static void main(String[] args) {}
                }

   * - .. code-block:: text

          .. tabs::

             .. group-tab:: C++

                C++

             .. group-tab:: Python

                Python

             .. group-tab:: Java

                Java

          .. tabs::

             .. group-tab:: C++

                .. code-block:: c++

                   int main(const int argc, const char **argv) {
                       return 0;
                   }

             .. group-tab:: Python

                .. code-block:: python

                   def main():
                       return

             .. group-tab:: Java

                .. code-block:: java

                   class Main {
                       public static void main(String[] args) {}
                   }

.. _contributing/tabs/code:

Code tabs
---------

Code tabs are essentially :ref:`group tabs <contributing/tabs/group>` that treat the content as a
:ref:`code block <contributing/code-blocks>`. The `code-tab` markup is used to define a code tab.
Just as for the `code-block` markup, the language defines the syntax highlighting of the tab. If
set, the label is used instead of the language for grouping tabs.

.. list-table::
   :class: o-showcase-table

   * - .. tabs::

          .. code-tab:: c++ Hello C++

             #include <iostream>

             int main() {
                 std::cout << "Hello World";
                 return 0;
             }

          .. code-tab:: python Hello Python

             print("Hello World")

          .. code-tab:: javascript Hello JavaScript

             console.log("Hello World");

   * - .. code-block:: text

          .. tabs::

             .. code-tab:: c++ Hello C++

                #include <iostream>

                int main() {
                    std::cout << "Hello World";
                    return 0;
                }

             .. code-tab:: python Hello Python

                print("Hello World")

             .. code-tab:: javascript Hello JavaScript

                console.log("Hello World");

.. _contributing/cards:

Cards
=====

.. list-table::
   :class: o-showcase-table

   * - .. cards::

          .. card:: Documentation
             :target: ../documentation
             :tag: Step-by-step guide
             :large:

             Use this guide to acquire the tools and knowledge you need to write documentation.

          .. card:: Content guidelines
             :target: content_guidelines

             List of guidelines and trips and tricks to make your content shine at its brightest!

          .. card:: RST guidelines
             :target: rst_guidelines

             List of technical guidelines to observe when writing with reStructuredText.

   * - .. code-block:: text

          .. cards::

             .. card:: Documentation
                :target: ../documentation
                :tag: Step-by-step guide
                :large:

                Use this guide to acquire the tools and knowledge you need to write documentation.

             .. card:: Content guidelines
                :target: content_guidelines

                List of guidelines and trips and tricks to make your content shine at its brightest!

             .. card:: RST guidelines
                :target: rst_guidelines

                List of technical guidelines to observe when writing with reStructuredText.

.. _contributing/document-metadata:

Document metadata
=================

| Sphinx supports document-wide metadata markups that specify a behavior for the entire page.
| They must be placed between colons (`:`) at the top of the source file.

+-----------------+--------------------------------------------------------------------------------+
| **Metadata**    | **Purpose**                                                                    |
+-----------------+--------------------------------------------------------------------------------+
| `show-content`  |  Make a toctree page accessible from the navigation menu.                      |
+-----------------+--------------------------------------------------------------------------------+
| `show-toc`      |  Show the table of content on a page that has the `show-content` metadata      |
|                 |  markup.                                                                       |
+-----------------+--------------------------------------------------------------------------------+
| `code-column`   |  | Show a dynamic side column that can be used to display interactive          |
|                 |    tutorials or code excerpts.                                                 |
|                 |  | For example, see                                                            |
|                 |    :doc:`/applications/finance/accounting/get_started/cheat_sheet`.            |
+-----------------+--------------------------------------------------------------------------------+
| `hide-page-toc` | Hide the "On this page" sidebar and use full page width for the content.       |
+-----------------+--------------------------------------------------------------------------------+
| `custom-css`    | Link CSS files (comma-separated) to the document.                              |
+-----------------+--------------------------------------------------------------------------------+
| `custom-js`     | Link JS files (comma-separated) to the document.                               |
+-----------------+--------------------------------------------------------------------------------+
| `classes`       | Assign the specified classes to the `<main/>` element of the document.         |
+-----------------+--------------------------------------------------------------------------------+
| `orphan`        | Suppress the need to include the document in a toctree.                        |
+-----------------+--------------------------------------------------------------------------------+
| `nosearch`      | Exclude the document from search results.                                      |
+-----------------+--------------------------------------------------------------------------------+

.. _contributing/formatting-tips:

Formatting tips
===============

.. _contributing/line-break:

Break the line but not the paragraph
------------------------------------

.. list-table::
   :class: o-showcase-table

   * - | A first long line that you break in two
         -> here <- is rendered as a single line.
       | A second line that follows a line break.

   * - .. code-block:: text

          | A first long line that you break in two
            -> here <- is rendered as a single line.
          | A second line that follows a line break.

.. _contributing/escaping:

Escape markup symbols (Advanced)
--------------------------------

Markup symbols escaped with backslashes (``\``) are rendered normally. For instance, ``this
\*\*line of text\*\* with \*markup\* symbols`` is rendered as “this \*\*line of text\*\* with
\*markup\* symbols”.

When it comes to backticks (`````), which are used in many cases such as :ref:`external hyperlinks
<contributing/external-hyperlinks>`, using backslashes for escaping is no longer an option because
the outer backticks interpret enclosed backslashes and thus prevent them from escaping inner
backticks. For instance, ```\`this formatting\```` produces an ``[UNKNOWN NODE title_reference]``
error. Instead, `````this formatting````` should be used to produce the following result:
```this formatting```.
