==============
Global filters
==============

Global filters, accessed via the :icon:`os-global-filters` :guilabel:`Filters` icon at the top
right of an Odoo spreadsheet or via the search bar of an :ref:`Odoo dashboard
<dashboards/use-dashboards/global-filters>`, allow the simultaneous filtering of all the Odoo data
connected to the spreadsheet or dashboard. This feature enables individual users to dynamically
personalize their view to draw specific insights, without altering the base report or dashboard for
others.

Unlike standard spreadsheet filters, which only act on visible data, global filters act on a
spreadsheet's underlying :ref:`data source(s) <spreadsheet/insert/data-sources>`. They control which
data is retrieved from the data source, essentially filtering the data *before* it is loaded. By
using filter operators such as :guilabel:`contains`, :guilabel:`is equal to`, :guilabel:`starts
with`, etc., users can refine the filtering for more precise results; the available operators
depend on the :ref:`type of filter <spreadsheet/global-filters/create-types>`.

During the configuration of a global filter, a :ref:`field matching
<spreadsheet/global-filters/field-matching>` process ensures that the filter acts on, or matches
against, the appropriate database :doc:`fields </applications/studio/fields>`.

.. example::
   The example shows a list of the top ten sales orders across all salespeople. Applying a global
   filter on the :guilabel:`Salesperson` field allows the user to see only records where the
   salesperson :guilabel:`is in` the defined set of values, i.e., is `Mitchell Admin` or `Marc
   Demo`.

   .. image:: global_filters/global_filters.gif
      :alt: Global filters in action

.. tip::
   - Global filters work by temporarily adding extra conditions to the domains of the connected data
     sources. Therefore, if you intend to use global filters, do not use the same conditions when
     preparing the initial list, pivot table, or chart for insertion into a :doc:`spreadsheet
     <../insert>` or :ref:`dashboard
     <dashboards/customize-dashboard/edit-spreadsheet-new-odoo-data>`.
   - Setting default filter values, where relevant, ensures that the spreadsheet or dashboard loads
     quickly and provides a useful initial view that can be further customized if needed. For
     example, a :guilabel:`Date` filter could be set to show data from the last 30 days by default,
     rather than  showing all historical data.

.. important::
   Only users with :doc:`Editor rights to an Odoo spreadsheet <../share_collaborate>` can configure,
   manage, and apply global filters in that spreadsheet. Any user with :ref:`access to
   an Odoo dashboard <dashboards/access-and-sharing>` can apply global filters configured for that
   dashboard.

.. _spreadsheet/global-filters/configure:

Configure global filters
========================

To configure global filters in a spreadsheet:

#. Open the relevant spreadsheet from the **Odoo Documents** app or :ref:`via the Odoo Dashboards
   app <build_and_customize_dashboards/customize/open-spreadsheet>` if you are configuring global
   filters for a dashboard.
#. Click :icon:`os-global-filters` :guilabel:`Filters` at the top right of the spreadsheet to open
   the :guilabel:`Filters` panel.

   .. tip::
      If at least one global filter has already been created for the spreadsheet, a
      :guilabel:`Global Filters` pop-up appears in the middle of the screen; click :guilabel:`Edit`
      to add or edit global filters.

#. In the :guilabel:`Create filter` section, select the relevant :ref:`type of global filter
   <spreadsheet/global-filters/create-types>`.
#. In the :guilabel:`Filter properties` panel that opens, complete the relevant fields based on the
   :ref:`type of global filter <spreadsheet/global-filters/create-types>` and ensure the :ref:`Field
   matching <spreadsheet/global-filters/field-matching>` section is correctly configured.

.. note::
   - Depending on the data source(s) connected to the spreadsheet, suggested global filters may be
     automatically proposed in the :guilabel:`Suggestions` section of the :guilabel:`Filters` panel.
     While these filters are pre-configured for immediate use, it is still possible to add a default
     value or restrict values using a domain.
   - If a default value is defined during configuration, the spreadsheet data updates immediately
     when the filter is saved.

.. tip::
   Click :icon:`fa-thumb-tack` :guilabel:`(pin)` at the top right of the :guilabel:`Filters` panel
   to allow another panel, such as the :guilabel:`Filter properties` panel, to open beside it.

.. _spreadsheet/global-filters/create-types:

Types of global filter
----------------------

Six types of global filter are available:

- :ref:`Date <spreadsheet/global-filters/create-date>`: filters based on a specific or relative
  time range, e.g., `January 2026` or `Last 7 Days`.
- :ref:`Relation <spreadsheet/global-filters/create-relation>`: filters using a relational field in
  a related model, e.g., by :guilabel:`Salesperson` with the *User* model set as the related model.
- :ref:`Text <spreadsheet/global-filters/create-text>`: filters on a string of characters or a range
  of predefined values, e.g., a product reference or barcode.
- :ref:`Yes/No <spreadsheet/global-filters/create-checkbox>`: filters based on whether or not a
  checkbox (boolean) field is checked, e.g., leads where the :guilabel:`Active` field is checked.
- :ref:`Selection <spreadsheet/global-filters/create-selection>`: filters using the predefined
  options of a selection field, e.g., tasks where the priority level is set to `Urgent`.
- :ref:`Numeric <spreadsheet/global-filters/create-numeric>`: filters based on numerical values and
  ranges, e.g., purchase orders where the :guilabel:`Untaxed Amount` is above `$1,000`.

.. _spreadsheet/global-filters/create-date:

Date
~~~~

.. note::
   A :guilabel:`Date` filter can only match against a :ref:`Date <studio/fields/simple-fields-date>`
   or :ref:`Date & Time <studio/fields/simple-fields-date-time>` field.

With the :guilabel:`Filter properties` panel open:

#. Enter a name for the new filter in the :guilabel:`Label` field.
#. To set a :guilabel:`Default value`, select one of the available values.
#. In the :ref:`Field matching <spreadsheet/global-filters/field-matching>` section, for each
   relevant data source, click beside :guilabel:`Field`, then select the field the filter should
   match against.

   The :guilabel:`Period offset` option, which appears when a date field is chosen, enables
   comparisons to be made by shifting the time range by one or more periods in the past or future.
   By default, no period offset is defined. To define a period offset, select :guilabel:`Previous`
   or :guilabel:`Next`, then select the desired number of periods in the past or future.

   .. tip::

      To compare data effectively using the :guilabel:`Period offset` feature, :ref:`duplicate the
      relevant inserted list <spreadsheet/insert-list/duplicate>` or :ref:`pivot table
      <spreadsheet/pivot-tables/duplicate>`, then, when setting up field matching, set a period
      offset for the second data source but not the first.

      When applying the filter, the original list or pivot table shows data for the time range
      selected, while the second shows data for a period before or after that time range, as
      defined.

#. Click :guilabel:`Save`.

.. example::
   In the example, a :guilabel:`Date` global filter has been configured to filter data from the
   *Journal Entry* model, with the Date field :guilabel:`Invoice/Bill Date` set as the matching
   field. The user is opting to see all data for which the invoice/bill date falls within the `Last
   30 Days`.

   .. image:: global_filters/example-date.png
      :alt: Global filter on a Date field
      :scale: 80%

.. _spreadsheet/global-filters/create-relation:

Relation
~~~~~~~~

.. note::
   A :guilabel:`Relation` filter can only match against a :ref:`Many2One
   <studio/fields/relational-fields-many2one>`, :ref:`One2Many
   <studio/fields/relational-fields-one2many>`, or :ref:`Many2Many
   <studio/fields/relational-fields-many2many>` field.

With the :guilabel:`Filter properties` panel open:

#. Enter a name for the new filter in the :guilabel:`Label` field.

#. In the :guilabel:`Related model` field, start typing the model name to reveal a list of all
   models, then select the appropriate one. Once a model is selected, the
   :guilabel:`Default value` and :guilabel:`Possible values` fields appear, as well as the
   :guilabel:`Field matching` section.

#. To set a :guilabel:`Default value`, select one of the available values; these are records from
   the model. If the related model is the *User* model, the option :guilabel:`Automatically filter
   on the current user` can be enabled.

#. To limit the :guilabel:`Possible values` that can be shown, enable :guilabel:`Restrict values
   with a domain`, then click :ref:`Edit domain <search/custom-filters>` to add or edit rules.

#. In the :ref:`Field matching <spreadsheet/global-filters/field-matching>`  section, check if the
   correct matching field has been assigned for each relevant data source. If this is not the case,
   select the appropriate field.

#. Click :guilabel:`Save`.

.. example::
   In the example, a :guilabel:`Relation` global filter has been configured to filter data from the
   *Helpdesk Ticket* model, with the Many2One field :guilabel:`Assigned to` set as the matching
   field. The user is opting to see all records where the assignee :guilabel:`is not in` the defined
   set of users, i.e., is *not* `Joel Willis`.

   .. image:: global_filters/example-relation.png
      :alt: Global filter on a Many2One field
      :scale: 80%

.. _spreadsheet/global-filters/create-text:

Text
~~~~

.. note::
   A :guilabel:`Text` filter can only match against a :ref:`Text <studio/fields/simple-fields-text>`
   (char), :ref:`Integer <studio/fields/simple-fields-integer>`, or :ref:`Decimal
   <studio/fields/simple-fields-decimal>` (float) field.

With the :guilabel:`Filter properties` panel open:

#. Enter a name for the new filter in the :guilabel:`Label` field.
#. To set a :guilabel:`Default value`, type the value.
#. To limit the :guilabel:`Possible values` that can be shown, enable :guilabel:`Restrict values to
   ranges`, type or select a range from any sheet in the current spreadsheet, then click
   :guilabel:`Confirm`. Click :guilabel:`Add range` to define an additional range if needed.
#. In the :ref:`Field matching <spreadsheet/global-filters/field-matching>` section, for each
   relevant data source, click beside :guilabel:`Field`, then select the field the filter should
   match against.

#. Click :guilabel:`Save`.

.. note::
   If :guilabel:`Restrict values to range` is:

   - enabled, and one or more ranges defined, a user can select the value of the text field from
     a dropdown when applying the filter.
   - not enabled, a user can enter multiple values when applying the filter.

.. example::
   In the example, a :guilabel:`Text` global filter has been configured to filter data from the
   *Product Template* model, with the Text field :guilabel:`Barcode` set as the matching field. The
   user is opting to see all data where the product's barcode :guilabel:`starts with` `601` or
   `230`.

   .. image:: global_filters/example-text.png
      :alt: Global filter on a Text field
      :scale: 80%

.. _spreadsheet/global-filters/create-checkbox:

Yes/No
~~~~~~

.. note::
   A :guilabel:`Yes/No` filter can only match against a :ref:`Checkbox
   <studio/fields/simple-fields-checkbox>` (boolean) field.

With the :guilabel:`Filter properties` panel open:

#. Enter a name for the new filter in the :guilabel:`Label` field.
#. To set a :guilabel:`Default value`, select :guilabel:`Is set` or :guilabel:`Is not set`.
#. In the :ref:`Field matching <spreadsheet/global-filters/field-matching>` section, for each
   relevant data source, click beside :guilabel:`Field`, then select the field the filter should
   match against.

#. Click :guilabel:`Save`.

.. example::
   In the example, a :guilabel:`Yes/No` global filter has been configured to filter data from the
   *Lead* model, with the Checkbox field :guilabel:`Active` set as the matching field. The user
   wants to see all active opportunities, i.e., for which the :guilabel:`Active` checkbox
   :guilabel:`is set`, or enabled, on the record.

   .. image:: global_filters/example-boolean.png
      :alt: Global filter on a Checkbox field
      :scale: 80%

.. _spreadsheet/global-filters/create-selection:

Selection
~~~~~~~~~

.. note::
   A :guilabel:`Selection` filter can only match against a :ref:`Selection
   <studio/fields/simple-fields-selection>` field.

With the :guilabel:`Filter properties` panel open:

#. Enter a name for the new filter in the :guilabel:`Label` field.
#. In the :guilabel:`Model` field, start typing the model name to reveal a list of all
   models. Select the appropriate one, then, in :guilabel:`Field`, select the field the filter
   should match against.
#. To set a :guilabel:`Default value`, select a value from the dropdown.
#. In the :ref:`Field matching <spreadsheet/global-filters/field-matching>` section, for each
   relevant data source, click beside :guilabel:`Field`, then select the field the filter should
   match against.
#. Click :guilabel:`Save`.

.. example::
   In this example, a :guilabel:`Selection` global filter has been configured to filter data from
   the *Task* model, with the Selection field :guilabel:`Priority` set as the matching field. The
   user is opting to see all data where the priority of the task :guilabel:`is in` the set of
   defined values, i.e., has the priority `Urgent`.

   .. image:: global_filters/example-selection.png
      :alt: Global filter on a Selection field
      :scale: 80%

.. _spreadsheet/global-filters/create-numeric:

Numeric
~~~~~~~

.. note::
   A :guilabel:`Numeric` filter can only match against an
   :ref:`Integer <studio/fields/simple-fields-integer>`,
   :ref:`Decimal <studio/fields/simple-fields-decimal>` (float), or :ref:`Monetary
   <studio/fields/simple-fields-monetary>` field.

With the :guilabel:`Filter properties` panel open:

#. Enter a name for the new filter in the :guilabel:`Label` field.
#. In the :ref:`Field matching <spreadsheet/global-filters/field-matching>` section, for each
   relevant data source, click beside :guilabel:`Field`, then select the field the filter should
   match against.
#. Click :guilabel:`Save`.

.. example::
   In the example, a :guilabel:`Numeric` global filter has been configured to filter data from the
   *Sales order* model, with the Monetary field :guilabel:`Untaxed Amount` set as the matching
   field. The user is opting to see all data where the untaxed amount is :guilabel:`greater than`
   `1000`.

   .. image:: global_filters/example-numeric.png
      :alt: Global filter on a Monetary field
      :scale: 80%

.. _spreadsheet/global-filters/field-matching:

Field matching
--------------

.. important::
   The field matching process is crucial, as matching the wrong fields or not setting matching
   fields at all, results in global filters that do not show the desired results.

To function as intended, a global filter needs to act on, or match against, the correct database
fields. Consider a :guilabel:`Date` filter applied to sales data. As the *Sales Order* model
contains several date fields, it is crucial to determine which field is relevant for the filter,
e.g., the order date, the delivery date, the expected date, or the expiration date.

When :ref:`configuring a global filter <spreadsheet/global-filters/configure>`, the :guilabel:`Field
matching` section of the :guilabel:`Filter properties` allows you to determine, for each
:ref:`data source <spreadsheet/insert/data-sources>` in the spreadsheet, which database field the
filter should match against.

.. note::
   If a selected matching field is not one of the allowed field types for the :ref:`type of global
   filter <spreadsheet/global-filters/create-types>`, the field name is shown in red on a red
   background to indicate an error. A global filter cannot be saved if a disallowed matching field
   is selected.

   .. image:: global_filters/field-matching-error.png
      :alt: Incorrect matching field shown in red on red background
      :scale: 80%

.. _spreadsheet/global-filters/manage:

Manage global filters
=====================

To manage a spreadsheet's global filters:

#. Open the relevant spreadsheet from the **Odoo Documents** app or :ref:`via the Odoo Dashboards
   app <build_and_customize_dashboards/customize/open-spreadsheet>` if you are managing the global
   filters for a dashboard.
#. Click the :icon:`os-global-filters` :guilabel:`Filters` icon at the top right of the spreadsheet.
#. In the :guilabel:`Global Filters` pop-up window, click :guilabel:`Edit`.

Global filters that have been configured are presented as horizontal cards at the top of the
panel. The icon before the filter name indicates the :ref:`type of filter
<spreadsheet/global-filters/create-types>`: :icon:`fa-calendar` (Date), :icon:`fa-chain` (Relation),
:icon:`fa-font` (Text), :icon:`fa-toggle-off` (Yes/No), :icon:`fa-caret-down` (Selection),
:icon:`fa-hashtag` (Numeric).

The following actions are possible:

- **Change the order** in which the global filters are displayed by clicking on a card and dragging
  it to the desired position.

  .. note::
    This order also determines how the filters appear in the :guilabel:`Global Filters` pop-up
    window in a spreadsheet or in the search bar in a dashboard when filters are being applied.
- **Edit a global filter** by clicking on its card to open the filter's :guilabel:`Filter
  properties`, then :ref:`editing as needed <spreadsheet/global-filters/create-types>`.
- **Delete a global filter** by clicking the :icon:`fa-trash` icon on the relevant card.
  Alternatively, with a filter's :guilabel:`Filter properties` panel open, click :guilabel:`Remove`
  to delete the global filter.

.. _spreadsheet/global-filters/use:

Apply global filters
====================

To apply global filters in a spreadsheet:

#. Click the :icon:`os-global-filters` :guilabel:`Filters` icon at the top right of the spreadsheet.
   The :guilabel:`Global Filters` pop-up window displays the available global filters.

   .. note::
      If no global filters have been configured for the spreadsheet, the :guilabel:`Filters` panel
      opens on the right of the spreadsheet. It is then possible to :ref:`create new global filters
      from scratch or add suggested global filters <spreadsheet/global-filters/configure>`.

#. For the relevant global filter, select a conditional operator from the first dropdown, e.g.,
   :guilabel:`is equal to`, then, as relevant, enter or select the appropriate value.
#. Click :guilabel:`Filter`.

When one or more filters have been applied to a spreadsheet, the number of active filters is
displayed beside the :icon:`os-global-filters` :guilabel:`Filters` icon at the top right of the
spreadsheet. Hovering over this area reveals a list of the active filters with information about the
filter values used.

   .. image:: global_filters/filters-applied.png
      :alt: Global filter active in a spreadsheet

.. tip::
   Refreshing the browser causes any global filters to reset to their initial state or default
   value, as relevant. To refresh Odoo data in a spreadsheet without losing global filters that
   have been applied, click :menuselection:`Data -->` :icon:`os-refresh-data`
   :menuselection:`Refresh all data` from the menu bar.

.. seealso::
   :ref:`Apply global filters in a dashboard <dashboards/use-dashboards/global-filters>`
