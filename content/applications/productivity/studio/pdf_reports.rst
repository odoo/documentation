===========
PDF reports
===========

With Studio, you can edit existing PDF reports (e.g., orders and quotations) or create new ones.

.. _studio/pdf-reports/default-layout:

Default layout
==============

The default layout of reports is managed outside Studio. Go to :menuselection:`Settings -->
Companies: Document Layout --> Configure Document Layout`. Layout settings apply to all reports but
only to the current company.

.. tip::
   Use :guilabel:`Download PDF Preview` to view how the different settings affect the layout of a
   sample invoice.

.. _studio/pdf-reports/default-layout/layout:

Layout
------

Four layouts are available.

.. tabs::

   .. tab:: Light

      .. image:: pdf_reports/light.png
         :align: center
         :alt: Light report layout sample

   .. tab:: Boxed

      .. image:: pdf_reports/boxed.png
         :align: center
         :alt: Boxed report layout sample

   .. tab:: Bold

      .. image:: pdf_reports/bold.png
         :align: center
         :alt: Bold report layout sample

   .. tab:: Striped

      .. image:: pdf_reports/striped.png
         :align: center
         :alt: Striped report layout sample

.. _studio/pdf-reports/default-layout/font:

Font
----

Seven fonts are available. Click on the links below to preview them on `Google Fonts
<https://fonts.google.com/>`_.

- `Lato <https://fonts.google.com/specimen/Lato#type-tester>`_
- `Roboto <https://fonts.google.com/specimen/Roboto#type-tester>`_
- `Open Sans <https://fonts.google.com/specimen/Open+Sans#type-tester>`_
- `Montserrat <https://fonts.google.com/specimen/Montserrat#type-tester>`_
- `Oswald <https://fonts.google.com/specimen/Oswald#type-tester>`_
- `Raleway <https://fonts.google.com/specimen/Raleway#type-tester>`_
- `Tajawal <https://fonts.google.com/specimen/Tajawal#type-tester>`_

  .. note::
     :guilabel:`Tajawal` supports both Arabic and Latin scripts.

.. _studio/pdf-reports/default-layout/logo:

Company logo
------------

Upload an image file to add a :guilabel:`Company Logo`.

.. note::
   This adds the logo to the company’s record on the *Company* model, which you can access by going
   to :menuselection:`General Settings --> Companies --> Update Info`.

.. _studio/pdf-reports/default-layout/colors:

Colors
------

Change the primary and secondary colors used throughout reports to highlight important elements.
The default colors are automatically generated based on the colors of the logo.

.. _studio/pdf-reports/default-layout/background:

Layout background
-----------------

Change the :guilabel:`Layout Background` of the report:

- :guilabel:`Blank`: nothing is displayed.
- :guilabel:`Geometric`: an image featuring geometric shapes is displayed in the background.
- :guilabel:`Custom`: use a custom background image by uploading one.

.. _studio/pdf-reports/default-layout/tagline:

Company tagline
---------------

The :guilabel:`Company Tagline` is displayed on the header of :ref:`External reports
<studio/pdf-reports/header-footer/external>`. You can add multiple lines of text.

.. _studio/pdf-reports/default-layout/details:

Company details
---------------

The :guilabel:`Company Details` are displayed on the header of :ref:`External reports
<studio/pdf-reports/header-footer/external>`. You can add multiple lines of text.

.. _studio/pdf-reports/default-layout/footer:

Footer
------

Use the :guilabel:`Footer` field to put any text in the :ref:`External reports'
<studio/pdf-reports/header-footer/external>` footers. You can add multiple lines of text.

.. _studio/pdf-reports/default-layout/paper:

Paper format
------------

Use the :guilabel:`Paper format` field to change the paper size of reports. You can either select
:guilabel:`A4` (21 cm x 29.7 cm) or :guilabel:`US Letter` (21.59 cm x 27.54 cm).

.. tip::
   You can change the :guilabel:`Paper format` on individual reports. Open the app containing the
   report, then :menuselection:`Toggle Studio --> Reports --> Select or Create a report --> Report
   --> Select a Paper format`.

.. image:: pdf_reports/default-layout.png
   :align: center
   :alt: Configuration pop-up window for the default layout of PDF reports

.. _studio/pdf-reports/header-footer:

Header and footer
=================

When creating a new report in Studio, you must choose between one of three styles of reports first.
This is solely used to determine what is displayed on the header and footer. To do so, go to the app
on which you want to add a new report, then :menuselection:`Studio button --> Reports --> Create`
and select :ref:`studio/pdf-reports/header-footer/external`,
:ref:`studio/pdf-reports/header-footer/internal`, or :ref:`studio/pdf-reports/header-footer/blank`.

.. _studio/pdf-reports/header-footer/external:

External
--------

The header displays the company :ref:`studio/pdf-reports/default-layout/logo` and several values
set on the *Company* model: the :guilabel:`Company Name`, :guilabel:`Phone`, :guilabel:`Email`, and
:guilabel:`Website`.

.. tip::
   To change a company's information, go to :menuselection:`Settings --> Companies --> Update Info`.

.. image:: pdf_reports/external-header.png
   :align: center
   :alt: Example of an External header

The footer displays the values set on the :ref:`studio/pdf-reports/default-layout/footer`,
:ref:`studio/pdf-reports/default-layout/details`, and
:ref:`studio/pdf-reports/default-layout/tagline` fields, as well as the page number.

.. image:: pdf_reports/external-footer.png
   :align: center
   :alt: Example of an External footer

.. _studio/pdf-reports/header-footer/internal:

Internal
--------

The header displays the user's current date and time, :guilabel:`Company Name`, and page number.

There is no footer.

.. _studio/pdf-reports/header-footer/blank:

Blank
-----

There is neither a header nor a footer.

.. _studio/pdf-reports/elements:

Add tab
=======

After opening an existing report or creating a new one, go to the :guilabel:`Add` tab to add or edit
elements. The elements are organized into four categories: :ref:`studio/pdf-reports/elements/block`,
:ref:`studio/pdf-reports/elements/inline`, :ref:`studio/pdf-reports/elements/table`, and
:ref:`studio/pdf-reports/elements/column`.

.. _studio/pdf-reports/elements/block:

Block
-----

Block elements start on a new line and occupy the full width of the page.

.. tip::
   You can set an element's width by selecting it and going to the :guilabel:`Options` tab.

- :guilabel:`Text`: add any text using small font size by default.

- :guilabel:`Title Block`: add any text using larger font size by default.

- :guilabel:`Image`: add an image. You can either upload one from your device, add one from
  an URL, or select one already existing on your database.

- :guilabel:`Field`: dynamically add a field's value.

- :guilabel:`Field & Label`: to dynamically add a field's value and label.

- :guilabel:`Address Block`: to dynamically add the values, if any, of a contact's (`res.partner`
  model): *Name*, *Address*, *Phone*, *Mobile*, and *Email*.

  .. image:: pdf_reports/address-block.png
     :align: center
     :alt: Example of an Address Block

.. _studio/pdf-reports/elements/inline:

Inline
------

Inline elements are used around other elements. They do not start on a new line and the width adapts
to length of the content.

.. tip::
   You can set an element's width and margins by selecting it and going to the :guilabel:`Options`
   tab.

- :guilabel:`Text`: add any text using small font size by default.

- :guilabel:`Field`: dynamically add a field's value.

.. _studio/pdf-reports/elements/table:

Table
-----

Table elements are used together to create a data table.

- :guilabel:`Data table`: create a table and dynamically add a first column displaying the *Name*
  values of a :ref:`Many2Many <studio/fields/relational-fields/many2many>` or :ref:`One2Many
  <studio/fields/relational-fields/one2many>` field on your model.

  .. image:: pdf_reports/data-table.png
     :align: center
     :alt: Example of a Data table

- :guilabel:`Field Column`: add a new column to the table displaying the values of a :ref:`Related
  Field <studio/fields/relational-fields/related-field>` to the one used to create the
  :guilabel:`Data table`.

- :guilabel:`Text in Cell`: add any text within an existing table cell.

- :guilabel:`Field in Cell`: add, within an existing table cell, the values of a :ref:`Related
  Field <studio/fields/relational-fields/related-field>` to the one used to create the
  :guilabel:`Data table`.

- :guilabel:`Subtotal & Total`: add an existing :guilabel:`Total` field's value. If a
  :guilabel:`Taxes` field exists, the untaxed and taxes amounts are added before the total amount.

.. _studio/pdf-reports/elements/column:

Column
------

Columns are used to add multiple :ref:`blocks <studio/pdf-reports/elements/block>` elements on the
same line.

- :guilabel:`Two Columns`: add any text in two different columns.

- :guilabel:`Three Columns`: add any text in three different columns.

Report tab
==========

Several configuration options are available under the :guilabel:`Report` tab.

- :guilabel:`Name`: change the report name. The new name is applied everywhere (in Studio, under
  the :guilabel:`Print` button, and for the PDF file name).

- :guilabel:`Paper format`: change the paper size of the report.

- :guilabel:`Add in print`: add the report under the :guilabel:`🖶 Print` button available on the
  record.

- :guilabel:`Limit visibility to groups`: limit the availability of the PDF report to specific
  :doc:`user groups <../../general/users/access_rights>`.

Options tab
===========

Select an element on the report to access the element's options and edit it.

.. image:: pdf_reports/text-options-tab.png
   :align: center
   :alt: The Options tab for a text element

.. note::
   You can select and edit multiple elements at the same time by clicking on the different sections
   or divisions (e.g., `div`, `table`, etc.).

Below are presented some of the most common options:

- :guilabel:`Margins`: add spacing at the :guilabel:`top`, :guilabel:`right`, :guilabel:`bottom`,
  and :guilabel:`left` of the element.

- :guilabel:`Width`: set the element's maximum width.

- :guilabel:`Visible if`: set under which condition(s) the element should be displayed.

- :guilabel:`Visible for`: set for which :doc:`users groups <../../general/users/access_rights>`
  the element should be displayed.

- :guilabel:`Remove from View`: remove the element from the report's view.

- :guilabel:`Text decoration`: bold, italicize, and underline the font.

- :guilabel:`Alignment`: align the element to the left, center, or right of the report.

- :guilabel:`Font style`: use one of the default font styles.

- :guilabel:`Colors`: change the font's color and the background color.

.. note::
   You may need to select a section or division above the element you want to edit to see some of
   the options described above.
