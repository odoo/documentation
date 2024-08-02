:custom-css: showcase_tables.css

==============================
RST guidelines and cheat sheet
==============================

.. important::
   We strongly recommend reading the :doc:`content_guidelines` and main :doc:`../documentation`
   pages before contributing.

Follow the RST guidelines below when contributing to the documentation to help maintain consistency
with the rest of the documentation and facilitate the review process for the team:

- :ref:`Use formatting. <contributing/rst/formatting>`
- :ref:`Be consistent with indentation. <contributing/rst/indentation>`
- :ref:`Start a new line before the 100th character. <contributing/rst/character-limit>`

For hyperlinks:

- :ref:`Use relative links for internal URLs. <contributing/rst/relative-links>`
- :ref:`Do not break hyperlink targets when refactoring. <contributing/rst/update-targets>`
- :ref:`Do not use non-descriptive hyperlink labels. <contributing/rst/descriptive-labels>`

.. _contributing/rst/formatting:

Formatting
==========

Use specific formatting to improve clarity and readability. For example, apply
:ref:`contributing/rst/menuselection` for menu paths, :ref:`contributing/rst/guilabel`
for other user interface elements, such as fields, buttons, and options, :ref:`contributing/rst/note`
for notes, :ref:`contributing/rst/example` for examples, etc.

.. note::
   Add a blank line between different block elements, such as paragraphs, lists, and directives to
   ensure proper rendering and formatting.

.. _contributing/rst/hyperlinks-guidelines:

Hyperlinks
==========

.. _contributing/rst/relative-links:

Internal URLs: relative links
-----------------------------

If you need to reference an :ref:`internal documentation page <contributing/rst/doc-hyperlinks>`
or a :ref:`file <contributing/rst/file>` that is not located in the same directory as the current
page, always use *relative file paths* instead of *absolute file paths*. This ensures that links
remain valid even with version updates, folder name changes, and directory structure
reorganizations.

An absolute file path indicates the target's location from the root directory. A relative file path
uses smart notations (such as `../` that redirects to the parent folder) to indicate the target's
location *relative* to that of the source document.

.. example::

   .. note::
      The purpose of the following example is to illustrate the difference between absolute and
      relative links. Always use :ref:`contributing/rst/doc-hyperlinks` when referencing
      documentation pages.

   Given the following source file tree:
   ::

     documentation
     ├── content
     │   └── applications
     │   │   └── sales
     │   │   │   └── sales
     │   │   │   │   └── products_prices
     │   │   │   │   │   └── products
     │   │   │   │   │   │   └── import.rst
     │   │   │   │   │   │   └── variants.rst
     │   │   │   │   │   └── prices.rst

   A reference to :file:`prices.rst` and :file:`variants.rst` could be made from :file:`import.rst`
   as follows:

   #. Absolute:

         - `documentation/content/applications/sales/sales/products_prices/prices.rst`
         - `documentation/content/applications/sales/sales/products_prices/products/variants.rst`

   #. Relative:

         - `../prices.rst`
         - `variants.rst`

.. _contributing/rst/update-targets:

Refactoring: hyperlink targets
------------------------------

When refactoring (improving without adding new content) section headings or hyperlink targets, take
care not to break any hyperlink reference to these targets or update them accordingly.

.. _contributing/rst/descriptive-labels:

Hyperlink labels
----------------

Do not use non-descriptive labels for :ref:`hyperlinks <contributing/rst/hyperlinks>`.

.. example::

  | **Good example (descriptive label):**
  | Please refer to the :doc:`Accounting documentation <../../../applications/finance/accounting>`.

  | **Bad example (non-descriptive label):**
  | Please refer to :doc:`this page <../../../applications/finance/accounting>`.

.. _contributing/rst/indentation:

Indentation
===========

Use only spaces (never tabs).

Use as many spaces at the beginning of an indented line as needed to align it with the first
character of the markup in the line above. This usually implies three spaces, but you only need two
for bulleted lists, for example.

.. example::
   The first `:` is below the `i` (three spaces):

   .. code-block:: rst

      .. image:: media/example.png
         :alt: example

   The `:titlesonly:` and page references start below the `t` (three spaces):

   .. code-block:: rst

      .. toctree::
         :titlesonly:

         payables/supplier_bills
         payables/pay

   Continuation lines resume below the `I`’s of "Invoice" (two spaces):

   .. code-block:: rst

      - Invoice on ordered quantity: invoice the full order as soon as the sales order is confirmed.
      - Invoice on delivered quantity: invoice on what was delivered even if it is a partial
        delivery.

.. _contributing/rst/character-limit:

100th-character limit
=====================

In RST, it is possible to break a line without forcing a line break on the rendered HTML. Make use
of this feature to write **lines of maximum 100 characters**. It is not necessary to leave a
trailing whitespace at the end of a line to separate words.

.. tip::
   - You can safely break a line on any space, even inside markups such as `menuselection` and
     `doc`.
   - Some external hyperlinks may exceed 100 characters, but leaving them on a single line is
     acceptable.

.. example::

   .. code-block:: rst

      To register your seller account in Odoo, go to :menuselection:`Sales --> Configuration -->
      Settings --> Amazon Connector --> Amazon Accounts` and click :guilabel:`Create`. You can find
      the **Seller ID** under the link :guilabel:`Your Merchant Token`.

.. _contributing/rst/headings:

Headings
========

For each formatting line (e.g., `===`), write as many symbols (`=`) as there are characters in the
header.

The symbols used for the formatting are, in fact, not important. Only the order in which they are
written matters, as it determines the size of the decorated heading. This means that you may
encounter different heading formatting and in a different order, in which case you should follow the
formatting in place in the document. In any other case, use the formatting shown below.

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
   Each document must have **exactly one H1 heading**.

.. _contributing/rst/markups:

Markups
=======

.. _contributing/rst/italic:

Emphasis (italic)
-----------------

To emphasize a part of the text. The text is rendered in italic.

.. list-table::
   :class: o-showcase-table

   * - Fill out the information *before* saving the form.

   * - .. code-block:: text

          Fill out the information *before* saving the form.

.. _contributing/rst/bold:

Strong emphasis (bold)
----------------------

To emphasize a part of the text. The text is rendered in bold.

.. list-table::
   :class: o-showcase-table

   * - A **subdomain** is a domain that is a part of another domain.

   * - .. code-block:: text

          A **subdomain** is a domain that is a part of another domain.

.. _contributing/rst/code-sample:

Technical term (literal)
------------------------

To write a technical term or a specific value to insert. The text is rendered in literal.

.. list-table::
   :class: o-showcase-table

   * - Insert the IP address of your printer, for example, `192.168.1.25`.

   * - .. code-block:: text

          Insert the IP address of your printer, for example, `192.168.1.25`.

.. _contributing/rst/definitions:

Definitions
-----------

Use the `dfn` markup to define a term.

.. list-table::
   :class: o-showcase-table

   * - The documentation is written in RST and needs to be built (:dfn:`converted to HTML`) to
       display nicely.

   * - .. code-block:: text

          The documentation is written in RST and needs to be built (:dfn:`converted to HTML`) to
          display nicely.

.. _contributing/rst/abbreviations:

Abbreviations
-------------

Use the `abbr` markup to write a self-defining abbreviation that is displayed as a tooltip.

.. list-table::
   :class: o-showcase-table

   * - Odoo uses :abbr:`OCR (optical character recognition)` and artificial intelligence
       technologies to recognize the content of the documents.

   * - .. code-block:: text

          Odoo uses :abbr:`OCR (optical character recognition)` and artificial intelligence
          technologies to recognize the content of the documents.

.. _contributing/rst/guilabel:

:abbr:`GUI (graphical user interface)` element
----------------------------------------------

Use the `guilabel` markup to identify any text of the interactive user interface (e.g., labels).

.. list-table::
   :class: o-showcase-table

   * - Update your credentials, then click on :guilabel:`Save`.

   * - .. code-block:: text

          Update your credentials, then click on :guilabel:`Save`.

.. note::
   Avoid using the `guilabel` markup when referring to a concept or general term.

   .. example::
      - | **Good example:**
        | To create a credit note, go to :menuselection:`Accounting --> Customers --> Invoices`,
          open the invoice, and click :guilabel:`Credit Note`.
      - | **Bad example:**
        | To create a :guilabel:`Credit Note`, go to :menuselection:`Accounting --> Customers -->
          Invoices`, open the :guilabel:`Invoice`, and click :guilabel:`Credit Note`.

.. _contributing/rst/menuselection:

Menu selection
--------------

Use the `menuselection` markup to guide users through a sequence of menus, starting with the app's
name.

.. list-table::
   :class: o-showcase-table

   * -  To review sales performance, go to :menuselection:`Sales --> Reporting --> Dashboard`.

   * - .. code-block:: text

          To review sales performance, go to :menuselection:`Sales --> Reporting --> Dashboard`.

.. note::
   Only include actual menu items in the `menuselection` markup:

   - Use the :ref:`contributing/rst/guilabel` markup for other user interface elements, such as
     buttons and section titles:

     .. code-block:: text

        To configure the bill control policy, navigate to :menuselection:`Purchase --> Configuration
        --> Settings`, and scroll down to the :guilabel:`Invoicing` section. Under :guilabel:`Bill
        Control`, select either :guilabel:`Ordered quantities` or :guilabel:`Received quantities`.

   - Do not include menu section names. For example, in the screenshot below, `Journals` should not
     be included in the menu path :menuselection:`Accounting --> Accounting --> Journal Entries`:

     .. image:: rst_guidelines/accounting-menu.png
        :alt: Accounting menu showing the Journals menu section.

.. _contributing/rst/file:

File
----

Use the `file` markup to indicate a file path or name.


.. list-table::
   :class: o-showcase-table

   * - Create redirections using the :file:`redirects.txt` file found at the root of the repository.

   * - .. code-block:: text

          Create redirections using the :file:`redirects.txt` file found at the root of the
          repository.

.. _contributing/rst/command:

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

.. _contributing/rst/icons:

Icons
-----

Use the `icon` markup to add the class name of an icon. The icon set used is *Font Awesome*.
Accompany the icon with a :ref:`contributing/rst/guilabel` in brackets as a descriptor.

.. list-table::
   :class: o-showcase-table

   * - The graph view is represented by the :icon:`fa-bar-chart` (:guilabel:`bar chart`) icon.

   * - .. code-block:: text

          The graph view is represented by the :icon:`fa-bar-chart` (:guilabel:`bar chart`) icon.

.. _contributing/rst/lists:

Lists
=====

.. _contributing/rst/bulleted-list:

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

.. _contributing/rst/numbered-list:

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
   Prefer the use of autonumbered lists with `#.` instead of `1.`, `2.`, etc. for better code
   resilience.

.. _contributing/rst/nested-list:

Nested lists
------------

.. tip::
   - Add a blank line before the nested elements in lists.
   - :ref:`Indent <contributing/rst/indentation>` nested lists properly, with sub-items aligned
     under their parent item.

.. list-table::
   :class: o-showcase-table

   * - - This is the first item of a bulleted list.

         #. It has a nested numbered list
         #. with two items.

   * - .. code-block:: text

          - This is the first item of a bulleted list.

            #. It has a nested numbered list
            #. with two items.

.. _contributing/rst/hyperlinks:

Hyperlinks
==========

.. _contributing/rst/external-hyperlinks:

External hyperlinks
-------------------

External hyperlinks are links to a URL with a custom label. They follow the syntax:
```label <URL>`_``.

.. note::
   - Use :ref:`documentation page hyperlinks <contributing/rst/doc-hyperlinks>` when targeting
     another documentation page.
   - Do not use :ref:`non-descriptive hyperlink labels <contributing/rst/descriptive-labels>`.

.. list-table::
   :class: o-showcase-table

   * - For instance, `this is an external hyperlink to Odoo's website <https://www.odoo.com>`_.

   * - .. code-block:: text

          For instance, `this is an external hyperlink to Odoo's website <https://www.odoo.com>`_.

.. _contributing/rst/external-hyperlink-aliases:

External hyperlink aliases
--------------------------

External hyperlink aliases allow creating shortcuts for external hyperlinks. The definition syntax
is as follows: `.. _target: URL`. There are two ways to reference them, depending on the use case:

#. `target_` creates a hyperlink with the target name as label and the URL as reference. Note that
   the `_` moved after the target.
#. ```label <target_>`_`` the label replaces the name of the target, and the target is replaced by
   the URL.

.. list-table::
   :class: o-showcase-table

   * - A `proof-of-concept <https://en.wikipedia.org/wiki/Proof_of_concept>`_ is a simplified
       version, a prototype of what is expected to agree on the main lines of expected changes. `PoC
       <https://en.wikipedia.org/wiki/Proof_of_concept>`_ is a common abbreviation.

   * - .. code-block:: text

          .. _proof-of-concept: https://en.wikipedia.org/wiki/Proof_of_concept

             A proof-of-concept_ is a simplified version, a prototype of what is expected to agree on
             the main lines of expected changes. `PoC <proof-of-concept_>`_ is a common abbreviation.

.. _contributing/rst/custom-anchors:

Custom anchors
--------------

Custom anchors follow the same syntax as external hyperlink aliases but without any URL. They allow
referencing a specific part of a RST file by using the target as an anchor. When users click the
reference, they are taken to the part of the documentation page where the target is defined.

The definition syntax is: `.. _target:`. There are two ways to reference them, both using the `ref`
markup:

#. ``:ref:`target``` creates a hyperlink to the anchor with the heading defined below as label.
#. ``:ref:`label <target>``` creates a hyperlink to the anchor with the given label.

.. important::
   As targets are visible from the entire documentation when referenced with the `ref` markup,
   prefix the target name with the **app/section name** and the **file name**, separated by slashes,
   e.g., `accounting/taxes/configuration`.

.. note::
   - Add custom anchors for all headings so they can be referenced from any documentation file or
     within Odoo using documentation links.
   - Notice that there is no `_` at the end, contrary to what is done with :ref:`external hyperlinks
     <contributing/rst/external-hyperlinks>`.

.. list-table::
   :class: o-showcase-table

   * - Please refer to the :ref:`contributing/rst/hyperlinks-guidelines` section to learn more
       about :ref:`relative links <contributing/rst/relative-links>`.

   * - .. code-block:: text

          .. _contributing/rst/hyperlinks-guidelines:

          Hyperlinks
          ==========

         .. _contributing/rst/relative-links:

         Use relative links for internal URLs
         ------------------------------------

         Please refer to the :ref:`<contributing/rst/hyperlinks-guidelines>` section to learn more
         about :ref:`relative links <contributing/rst/relative-links>`.

.. _contributing/rst/doc-hyperlinks:

Documentation page hyperlinks
-----------------------------

The `doc` markup allows referencing a documentation page wherever it is in the file tree through a
relative file path. There are two ways to use the markup, both using the `doc` markup:


#. ``:doc:`path_to_doc_page``` creates a hyperlink to the documentation page with the title of the
   page as label.
#. ``:doc:`label <path_to_doc_page>``` creates a hyperlink to the documentation page with the given
   label.

.. list-table::
   :class: o-showcase-table

   * - Please refer to the :doc:`Accounting documentation
       <../../../applications/finance/accounting>` to learn more about
       :doc:`../../../applications/finance/accounting/customer_invoices`.

   * - .. code-block:: text

          Please refer to the :doc:`Accounting documentation <../../../applications/finance/accounting>`
          to learn more about :doc:`../../../applications/finance/accounting/customer_invoices`.

.. important::
   :ref:`Use relative links <contributing/rst/relative-links>` for documentation page hyperlinks.

.. _contributing/rst/download:

File download hyperlinks
------------------------

The `download` markup allows referencing files (that are not necessarily :abbr:`RST
(reStructuredText)` documents) within the source tree to be downloaded.

.. list-table::
   :class: o-showcase-table

   * - Download this :download:`module structure template <rst_guidelines/my_module.zip>` to start
       building your module.

   * - .. code-block:: text

          Download this :download:`module structure template <rst_guidelines/my_module.zip>` to start building your module.

.. note::
   Store the file alongside other :ref:`media files <contributing/content/media-files>` and
   reference it using a :ref:`relative link <contributing/rst/relative-links>`.

.. _contributing/rst/images:

Images
======

The `image` markup allows inserting images in a document.

.. list-table::
   :class: o-showcase-table

   * - .. image:: rst_guidelines/create-invoice.png
          :alt: Create an invoice.

   * - .. code-block:: text

          .. image:: rst_guidelines/create-invoice.png
             :alt: Create an invoice.

.. tip::
   - Images should generally be aligned to the left, which is the default behavior. Use the `align`
     parameter to change the alignment, e.g., `:align: center`.
   - Use the `alt` parameter to add :ref:`contributing/content/alt-tags`, e.g., `:alt: Activating
     the developer mode in the Settings app`.
   - Use the `scale` parameter to scale the image, e.g., `:scale: 75%`.

.. seealso::
   :ref:`Content guidelines for images <contributing/content/images>`

.. _contributing/rst/alert-blocks:

Alert blocks (admonitions)
==========================

.. _contributing/rst/seealso:

See also
--------

.. list-table::
   :class: o-showcase-table

   * - .. seealso::
          - :doc:`Accounting documentation <../../../applications/finance/accounting>`
          - :doc:`../../../applications/sales/sales/invoicing/proforma`
          - `Google documentation on setting up Analytics for a website
            <https://support.google.com/analytics/answer/1008015?hl=en/>`_

   * - .. code-block:: text

          .. seealso::
          - :doc:`Accounting documentation <../../../applications/finance/accounting>`
          - :doc:`../../../applications/sales/sales/invoicing/proforma`
          - `Google documentation on setting up Analytics for a website <https://support.google.com/analytics/answer/1008015?hl=en/>`_

.. _contributing/rst/note:

Note
----

.. list-table::
   :class: o-showcase-table

   * - .. note::
          Use this alert block to draw the reader's attention and highlight important additional
          information.

   * - .. code-block:: text

          .. note::
             Use this alert block to draw the reader's attention and highlight important additional information.

.. _contributing/rst/tip:

Tip
---

.. list-table::
   :class: o-showcase-table

   * - .. tip::
          Use this alert block to inform the reader about a useful trick that requires an action.

   * - .. code-block:: text

          .. tip::
             Use this alert block to inform the reader about a useful trick that requires an action.

.. _contributing/rst/example:

Example
-------

.. list-table::
   :class: o-showcase-table

   * - .. example::
          Use this alert block to show an example.

   * - .. code-block:: text

          .. example::
             Use this alert block to show an example.

.. _contributing/rst/exercise:

Exercise
--------

.. list-table::
   :class: o-showcase-table

   * - .. exercise::
          Use this alert block to suggest an exercise to the reader.

   * - .. code-block:: text

          .. exercise::
             Use this alert block to suggest an exercise to the reader.

.. _contributing/rst/important:

Important
---------

.. list-table::
   :class: o-showcase-table

   * - .. important::
          Use this alert block to notify the reader about important information.

   * - .. code-block:: text

          .. important::
             Use this alert block to notify the reader about important information.

.. _contributing/rst/warning:

Warning
-------

.. list-table::
   :class: o-showcase-table

   * - .. warning::
          Use this alert block to require the reader to proceed with caution with what is described
          in the warning.

   * - .. code-block:: text

          .. warning::
             Use this alert block to require the reader to proceed with caution with what is described in the warning.

.. _contributing/rst/danger:

Danger
------

.. list-table::
   :class: o-showcase-table

   * - .. danger::
          Use this alert block to bring the reader's attention to a serious threat.

   * - .. code-block:: text

          .. danger::
             Use this alert block to bring the reader's attention to a serious threat.

.. _contributing/rst/custom-alert-blocks:

Custom
------

.. list-table::
   :class: o-showcase-table

   * - .. admonition:: Title

          Customize this alert block with a **Title** of your choice.

   * - .. code-block:: text

          .. admonition:: Title

             Customize this alert block with a **Title** of your choice.

.. _contributing/rst/tables:

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
     build tables. Then, copy-paste the generated formatting into your document.

.. _contributing/rst/code-blocks:

Code blocks
===========

Use the `code-block` directive to show example code. Specify the language (e.g., python, xml, etc.)
to format the code according to the language's syntax rules.

.. list-table::
   :class: o-showcase-table

   * - .. code-block:: python

          def main():
              print("Hello world!")

   * - .. code-block:: text

          .. code-block:: python

             def main():
                 print("Hello world!")

.. _contributing/rst/spoilers:

Spoilers
========

.. list-table::
   :class: o-showcase-table

   * - .. spoiler:: Answer to the Ultimate Question of Life, the Universe, and Everything

          **42**

   * - .. code-block:: text

          .. spoiler:: Answer to the Ultimate Question of Life, the Universe, and Everything

             **42**

.. _contributing/rst/tabs:

Content tabs
============

.. warning::
   The `tabs` markup may not work well in some situations. In particular:

   - The tabs' headers cannot be translated.
   - A tab cannot contain :ref:`headings <contributing/rst/headings>`.
   - An :ref:`alert block <contributing/rst/alert-blocks>` cannot contain tabs.
   - A tab cannot contain :ref:`custom anchors <contributing/rst/custom-anchors>`.

.. _contributing/rst/basic-tabs:

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

.. _contributing/rst/nested-tabs:

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

.. _contributing/rst/group-tabs:

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

.. _contributing/rst/code:

Code tabs
---------

Use the `code-tab` markup to create code tabs, which are essentially :ref:`group tabs
<contributing/rst/group-tabs>` that treat the tabs' content as a :ref:`code block
<contributing/rst/code-blocks>`. Specify the language to format the code according to the language's
syntax rules. If a label is set, it is used for grouping tabs instead of the language name.

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

.. _contributing/rst/cards:

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

             List of guidelines, tips, and tricks to help you create clear and effective content.

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

                List of guidelines, tips, and tricks to help you create clear and effective content.

             .. card:: RST guidelines
                :target: rst_guidelines

                List of technical guidelines to observe when writing with reStructuredText.

.. _contributing/rst/document-metadata:

Document metadata
=================

`Sphinx <https://en.wikipedia.org/wiki/Sphinx_(documentation_generator)>`_ supports document-wide
metadata markups that specify a behavior for the entire page. They must be placed between colons
(`:`) at the top of the source file.

+-----------------+--------------------------------------------------------------------------------+
| **Metadata**    | **Purpose**                                                                    |
+-----------------+--------------------------------------------------------------------------------+
| `show-content`  |  Make a toctree page accessible from the navigation menu.                      |
+-----------------+--------------------------------------------------------------------------------+
| `show-toc`      |  Show the table of content on a page that has the `show-content` metadata      |
|                 |  markup.                                                                       |
+-----------------+--------------------------------------------------------------------------------+
| `hide-page-toc` | Hide the "On this page" sidebar and use full page width for the content.       |
+-----------------+--------------------------------------------------------------------------------+
| `nosearch`      | Exclude the document from search results.                                      |
+-----------------+--------------------------------------------------------------------------------+
| `orphan`        | Suppress the need to include the document in a toctree.                        |
+-----------------+--------------------------------------------------------------------------------+
| `code-column`   |  | Show a dynamic side column that can be used to display interactive          |
|                 |    tutorials or code excerpts.                                                 |
|                 |  | For example, see                                                            |
|                 |    :doc:`/applications/finance/accounting/get_started/cheat_sheet`.            |
+-----------------+--------------------------------------------------------------------------------+
| `custom-css`    | Link CSS files (comma-separated) to the file.                                  |
+-----------------+--------------------------------------------------------------------------------+
| `custom-js`     | Link JS files (comma-separated) to the document.                               |
+-----------------+--------------------------------------------------------------------------------+
| `classes`       | Assign the specified classes to the `<main/>` element of the file.             |
+-----------------+--------------------------------------------------------------------------------+

.. _contributing/rst/formatting-tips:

Formatting tips
===============

.. _contributing/rst/line-break:

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

.. _contributing/rst/escaping:

Escape markup symbols
---------------------

Markup symbols escaped with backslashes (``\``) are rendered normally. For instance, ``this
\*\*line of text\*\* with \*markup\* symbols`` is rendered as “this \*\*line of text\*\* with
\*markup\* symbols”.

When it comes to backticks (`````), which are used in many cases such as :ref:`external hyperlinks
<contributing/rst/external-hyperlinks>`, using backslashes for escaping is no longer
an option because the outer backticks interpret enclosed backslashes and thus prevent them from
escaping inner backticks. For instance, ```\`this formatting\```` produces an
``[UNKNOWN NODE title_reference]`` error. Instead, `````this formatting````` should be used to
produce the following result: ```this formatting```.

.. seealso::
   `Docutils documentation on reStructuredText directives and roles
   <https://docutils.sourceforge.io/docs/ref/rst/directives.html>`_
