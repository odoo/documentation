======================
Conditional formatting
======================

Conditional formatting applies specific formatting, such as a background color or font color, to
a range of cells that meet one or more defined criteria, or rules. This allows you to visually
highlight important data, patterns, trends, or anomalies.

.. note::
   When a spreadsheet containing dynamic Odoo data is reopened or refreshed, any conditional
   formatting that has been defined is updated to reflect any changes to the data.

Different types of conditional formatting are possible:

- :ref:`Single color <spreadsheet/conditional-formatting/single-color>`: changes the color of the
  cell’s background or font, or changes the font formatting if cell values meet the defined
  conditions, e.g., changes a cell to red if an invoice is overdue.
- :ref:`Color scale <spreadsheet/conditional-formatting/color-scale>`: uses color intensity to
  represent smaller and larger values on a two- or three-color scale, e.g., shows sales performance
  using increasingly dark tones of the same color.
- :ref:`Icon set <spreadsheet/conditional-formatting/icon-set>`: uses sets of arrows, smileys, or
  dots in green, orange, and red to visually show how cell values in a range compare to certain
  defined values, e.g., a green smiley to represent sales performance above a certain amount.
- :ref:`Data bar <spreadsheet/conditional-formatting/data-bar>`: inserts colored bars inside a cell
  to show how a value compares to the value of other cells in the defined range, e.g., the customer
  generating the highest sales has the longest bar, with bars of decreasing length for customers
  generating lower sales.

To add conditional formatting to a range of cells:

#. Select the cells the formatting rule should apply to.
#. Click :menuselection:`Format --> Conditional formatting` from the menu bar.
#. In the :guilabel:`Conditional formatting` panel that opens to the right of the spreadsheet, click
   :guilabel:`+ Add another rule`.

   .. tip::
      Click :guilabel:`Add range` to select additional ranges of cells if needed.

#. Select the type of :guilabel:`Format rules`, then enter the information required depending on the
   rule selected.

.. _spreadsheet/conditional-formatting/single-color:

Single color
============

With the range selected and :guilabel:`Single color` selected as the rule type:

#. Define the conditions to be met for the formatting to be applied by choosing the desired value
   from the :guilabel:`Format cells if …` dropdown.
#. Define the :guilabel:`Formatting style` to be applied by selecting the appropriate font
   formatting, font color, and/or background color.
#. Click :guilabel:`Save`.

.. example::
   In the example, single-color conditional formatting changes the background color of cells
   containing the value `FALSE` to red, showing at a glance which eLearning courses are not yet
   published.

   .. image:: conditional_formatting/single-color.png
      :alt: Single-color conditional formatting showing cells containing 'False' colored red

.. _spreadsheet/conditional-formatting/color-scale:

Color scale
===========

With the range selected and :guilabel:`Color scale` selected as the rule type:

#. Define what is used as the :guilabel:`Minpoint`, i.e., the lowest value, and the
   :guilabel:`MaxPoint`, i.e., the highest value, by selecting the appropriate category from the
   dropdown.
#. Optionally, to create a three-color scale, add a :guilabel:`MidPoint`, i.e., the middle value.
#. Define the color range by choosing a color for the lowest value, i.e., the :guilabel:`Minpoint`,
   and the highest value, i.e., the :guilabel:`MaxPoint`. For a three-color scale, also choose a
   color for the :guilabel:`MidPoint`.
#. Click :guilabel:`Save`.

.. example::
   In the example, sales performance by salesperson is shown using a two-color scale, with white
   representing the lowest value, and increasing amounts intensifying in color towards the selected
   green color.

   .. image:: conditional_formatting/color-scale.png
      :alt: Color scale conditional formatting showing sales performance by salesperson

   Adding a :guilabel:`Midpoint`, with a corresponding color, allows you to highlight performance in
   relation to a defined target or neutral value, e.g., below or above a target %, or to distinguish
   between positive or negative values.

.. _spreadsheet/conditional-formatting/icon-set:

Icon set
========

With the range selected and :guilabel:`Icon set` selected as the rule type:

#. Click on the set of :guilabel:`Icons` to use.
#. For the first and second icons:

   - enter the value that represents the *lower* threshold for the icon
   - indicate whether the cell value must be `>` :guilabel:`(greater than)` or
     `≥` :guilabel:`(greater than or equal to)` the threshold value
   - define whether the threshold value is a :guilabel:`Number`, :guilabel:`Percentage`,
     :guilabel:`Percentile` or :guilabel:`Formula`

   The third icon is added to all cells whose values are below the threshold for the second icon.

   .. tip::
      Click :guilabel:`Reverse icons` to reverse the order of the icons.

#. Click :guilabel:`Save`.

.. example::
   In the example, sales performance by salesperson is shown using a three-scale set of colored
   dots:

   - A **green** dot represents high performance, and is added to total sales amounts *greater than
     or equal to* $50,000.
   - An **orange** dot represents average performance, and is added to total sales amounts *greater
     than* $25,000 (but less than $50,000 as this is the lower threshold for the green dot).
   - A **red** dot represents low performance, and is added to all other amounts (i.e., amounts
     below below $25,000 as this is the lower threshold for the orange dot).

   .. image:: conditional_formatting/icon-set.png
      :alt: Icon set conditional formatting applied to sales amounts

.. _spreadsheet/conditional-formatting/data-bar:

Data bar
========

.. note::
   Unlike other conditional formatting rules in Odoo Spreadsheet, this rule allows for the
   formatting to be applied either on the cells containing the values the rule is based on, or on a
   corresponding range of cells, e.g., on a column containing text. The :guilabel:`Apply to range`
   determines *where the formatting is shown*, while the :guilabel:`Range of values` determines
   which cells the rule is based on.

With :guilabel:`Data bar` selected as the rule type:

#. Click below :guilabel:`Apply to range`, then, in the spreadsheet, select the range of cells
   *where the data bars should appear*. Click :guilabel:`Confirm`.
#. Click on the :guilabel:`Color` dot to select the color of the data bars.
#. Click below :guilabel:`Range of values`, then, in the spreadsheet, select the range of cells
   *containing the values the rule should be based on*. Click :guilabel:`Confirm`.
#. Click :guilabel:`Save`.

.. example::
   In the example, the rule is based on the `Total sales` amounts in column B (with the
   :guilabel:`Range of values` being `B2:B14`), while the formatting is applied on the
   `Salesperson` names in column A (with the :guilabel:`Apply to range` being `A2:A14`).

   .. image:: conditional_formatting/data-bar.png
      :alt: Data bar conditional formatting
