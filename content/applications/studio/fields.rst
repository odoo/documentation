==================
Fields and widgets
==================

Fields structure the models of a database. If you picture a model as a table or spreadsheet, fields
are the columns where data is stored in the records (i.e., the rows). Fields also define the type of
data that is stored within them. How the data is presented and formatted on the :abbr:`UI (User
Interface)` is defined by their widget.

From a technical point of view, there are 15 field types in Odoo. However, you can choose from 20
fields in Studio, as some field types are available more than once with a different default widget.

.. tip::
   :guilabel:`New Fields` can only be added to the :ref:`studio/views/general/form` and
   :ref:`studio/views/multiple-records/list` views. On other views, you can only add
   :guilabel:`Existing Fields` :dfn:`(fields already on the model)`.

.. _studio/fields/simple-fields:

Simple fields
=============

Simple fields contain basic values, such as text, numbers, files, etc.

.. note::
   Non-default widgets, when available, are presented as bullet points below.

.. _studio/fields/simple-fields/text:

Text (`char`)
-------------

The :guilabel:`Text` field is used for short text containing any character. One text line is
displayed when filling out the field.

- :guilabel:`Badge`: displays the value inside a rounded shape, similar to a tag. The value cannot
  be edited on the UI, but a default value can be set.
- :guilabel:`Copy to Clipboard`: users can copy the value by clicking a button.
- :guilabel:`E-mail`: the value becomes a clickable *mailto* link.
- :guilabel:`Image`: displays an image using a URL. The value cannot be edited manually, but a
  default value can be set.

  .. note::
     This works differently than selecting the :ref:`Image field
     <studio/fields/simple-fields/image>` directly, as the image is not stored in Odoo when using a
     :guilabel:`Text` field with the :guilabel:`Image` widget. For example, it can be useful if you
     want to save disk space.

- :guilabel:`Phone`: the value becomes a clickable *tel* link.

  .. tip::
     Tick :guilabel:`Enable SMS` to add an option to send an SMS directly from Odoo next to the
     field.

- :guilabel:`URL`: the value becomes a clickable URL.

.. example::

   .. image:: fields/text-examples.png
      :align: center
      :alt: Examples of Text fields with different widgets

.. _studio/fields/simple-fields/multiline-text:

Multiline Text (`text`)
-----------------------

The :guilabel:`Multiline Text` field is used for longer text containing any type of character. Two
text lines are displayed on the UI when filling out the field.

- :guilabel:`Copy to Clipboard`: users can copy the value by clicking a button.

.. example::

   .. image:: fields/multiline-text-examples.png
      :align: center
      :alt: Examples of Multiline Text fields with different widgets

.. _studio/fields/simple-fields/integer:

Integer (`integer`)
-------------------

The :guilabel:`Integer` field is used for all integer numbers (:dfn:`positive, negative, or zero,
without a decimal`).

- :guilabel:`Percentage Pie`: displays the value inside a percentage circle, usually for a computed
  value. The value cannot be edited on the UI, but a default value can be set.
- :guilabel:`Progress Bar`: displays the value next to a percentage bar, usually for a computed
  value. The field cannot be edited manually, but a default value can be set.
- :guilabel:`Handle`: displays a drag handle icon to order records manually in :ref:`List view
  <studio/views/multiple-records/list>`.

.. example::

   .. image:: fields/integer-examples.png
      :align: center
      :alt: Examples of Integer fields with different widgets

.. _studio/fields/simple-fields/decimal:

Decimal (`float`)
-----------------

The :guilabel:`Decimal` field is used for all decimal numbers (:dfn:`positive, negative, or zero,
with a decimal`).

.. note::
   Decimal numbers are displayed with two decimals after the decimal point on the UI, but they are
   stored in the database with more precision.

- :guilabel:`Monetary`: it is similar to using the :ref:`Monetary field
  <studio/fields/simple-fields/monetary>`. It is recommended to use the later as it offers more
  functionalities.
- :guilabel:`Percentage`: displays a percent character `%` after the value.
- :guilabel:`Percentage Pie`: displays the value inside a percentage circle, usually for a computed
  value. The field cannot be edited manually, but a default value can be set.
- :guilabel:`Progress Bar`: displays the value next to a percentage bar, usually for a computed
  value. The field cannot be edited manually, but a default value can be set.
- :guilabel:`Time`: the value must follow the *hh:mm* format, with a maximum of 59 minutes.

.. example::

   .. image:: fields/decimal-examples.png
      :align: center
      :alt: Examples of Decimal fields with different widgets

.. _studio/fields/simple-fields/monetary:

Monetary (`monetary`)
---------------------

The :guilabel:`Monetary` field is used for all monetary values.

.. note::
   When you first add a :guilabel:`Monetary` field, you are prompted to add a :guilabel:`Currency`
   field if none exists already on the model. Odoo offers to add the :guilabel:`Currency` field for
   you. Once it is added, add the :guilabel:`Monetary` field again.

.. example::

   .. image:: fields/monetary-example.png
      :align: center
      :alt: Example of a Monetary field along with its Currency field

.. _studio/fields/simple-fields/html:

Html (`html`)
-------------

The :guilabel:`Html` field is used to add text that can be edited using the Odoo HTML editor.

- :guilabel:`Multiline Text`: disables the Odoo HTML editor to allow editing raw HTML.

.. example::

   .. image:: fields/html-example.png
      :align: center
      :alt: Examples of Html fields with different widgets

.. _studio/fields/simple-fields/date:

Date (`date`)
-------------

The :guilabel:`Date` field is used to select a date on a calendar.

- :guilabel:`Remaining Days`: the remaining number of days before the selected date is displayed
  (e.g., *In 5 days*), based on the current date.

.. example::

   .. image:: fields/date-examples.png
      :align: center
      :alt: Examples of Date fields with different widgets

.. _studio/fields/simple-fields/date-time:

Date & Time (`datetime`)
------------------------

The :guilabel:`Date & Time` field is used to select a date on a calendar and a time on a clock. The
user's current time is automatically used if no time is set.

- :guilabel:`Date`: used to record the time without displaying it on the UI.
- :guilabel:`Remaining days`: displays the remaining number of days before the selected date (e.g.,
  *In 5 days*), based on the current date and time.

.. example::

   .. image:: fields/date-time-examples.png
      :align: center
      :alt: Examples of Date & Time fields with different widgets

.. _studio/fields/simple-fields/checkbox:

Checkbox (`boolean`)
--------------------

The :guilabel:`Checkbox` field is used when a value should only be true or false, indicated by
checking or unchecking a checkbox.

- :guilabel:`Button`: displays a radio button. The widget works without switching to the edit mode.
- :guilabel:`Toggle`: displays a toggle button. The widget works without switching to the edit mode.

.. example::

   .. image:: fields/checkbox-examples.png
      :align: center
      :alt: Examples of Checkbox fields with different widgets

.. _studio/fields/simple-fields/selection:

Selection (`selection`)
-----------------------

The :guilabel:`Selection` field is used when users should select a single value from a group of
predefined values.

- :guilabel:`Badge`: displays the value inside a rounded shape, similar to a tag. The value cannot
  be edited on the UI, but a default value can be set.
- :guilabel:`Badges`: displays all selectable values simultaneously inside rectangular shapes,
  organized horizontally.
- :guilabel:`Priority`: displays star symbols instead of values, which can be used to indicate an
  importance or satisfaction level, for example. This has the same effect as selecting the
  :ref:`Priority field <studio/fields/simple-fields/priority>`, although, for the latter, four
  priority values are already predefined.
- :guilabel:`Radio`: displays all selectable values at the same time as radio buttons.

  .. tip::
     By default, radio buttons are organized vertically. Tick :guilabel:`display horizontally` to
     switch the way they are displayed.

.. example::

   .. image:: fields/selection-examples.png
      :align: center
      :alt: Examples of Selection fields with different widgets

.. _studio/fields/simple-fields/priority:

Priority (`selection`)
----------------------

The :guilabel:`Priority` field is used to display a three-star rating system, which can be used to
indicate importance or satisfaction level. This field type is a :ref:`Selection field
<studio/fields/simple-fields/selection>` with the :guilabel:`Priority` widget selected by default
and four priority values predefined. Consequently, the :guilabel:`Badge`, :guilabel:`Badges`,
:guilabel:`Radio`, and :guilabel:`Selection` widgets have the same effects as described under
:ref:`Selection <studio/fields/simple-fields/selection>`.

.. tip::
   To change the number of available stars by adding or removing values, click :guilabel:`Edit
   Values`. Note that the first value is equal to 0 stars (i.e., when no selection is made), so
   having four values results in a three-star rating system, for example.

.. example::

   .. image:: fields/priority-example.png
      :align: center
      :alt: Example of a Priority field

.. _studio/fields/simple-fields/file:

File (`binary`)
---------------

The :guilabel:`File` field is used to upload any type of file, or sign a form (:guilabel:`Sign`
widget).

- :guilabel:`Image`: users can upload an image file, which is then displayed in :ref:`Form view
  <studio/views/general/form>`. This has the same effect as using the :ref:`Image field
  <studio/fields/simple-fields/image>`.
- :guilabel:`PDF Viewer`: users can upload a PDF file, which can be then browsed from the
  :ref:`Form view <studio/views/general/form>`.
- :guilabel:`Sign`: users can electronically sign the form. This has the same effect as selecting
  the :ref:`Sign field <studio/fields/simple-fields/sign>`.

.. example::

   .. image:: fields/file-examples.png
      :align: center
      :alt: Examples of File fields with different widgets

.. _studio/fields/simple-fields/image:

Image (`binary`)
----------------

The :guilabel:`Image` field is used to upload an image and display it in :ref:`Form view
<studio/views/general/form>`. This field type is a :ref:`File field
<studio/fields/simple-fields/file>` with the :guilabel:`Image` widget selected by default.
Consequently, the :guilabel:`File`, :guilabel:`PDF Viewer`, and :guilabel:`Sign` widgets have the
same effects as described under :ref:`File <studio/fields/simple-fields/file>`.

.. tip::
   To change the display size of uploaded images, select :guilabel:`Small`, :guilabel:`Medium`, or
   :guilabel:`Large` under the :guilabel:`Size` option.

.. _studio/fields/simple-fields/sign:

Sign (`binary`)
---------------

The :guilabel:`Sign` field is used to sign the form electronically. This field type is a :ref:`File
field <studio/fields/simple-fields/file>` with the :guilabel:`Sign` widget selected by default.
Consequently, the :guilabel:`File`, :guilabel:`Image`, and :guilabel:`PDF Viewer` widgets have the
same effects as described under :ref:`File <studio/fields/simple-fields/file>`.

.. tip::
   To give users the :guilabel:`Auto` option when having to draw their signature, select one of the
   available :guilabel:`Auto-complete with` fields (:ref:`Text <studio/fields/simple-fields/text>`,
   :ref:`Many2One <studio/fields/relational-fields/many2one>`, and :ref:`Related Field
   <studio/fields/relational-fields/related-field>` on the model only). The signature is
   automatically generated using the data from the selected field.

.. _studio/fields/relational-fields:

Relational fields
=================

Relational fields are used to link and display the data from records on another model.

.. note::
   Non-default widgets, when available, are presented as bullet points below.

.. _studio/fields/relational-fields/many2one:

Many2One (`many2one`)
---------------------

The :guilabel:`Many2One` field is used to link another record (from another model) to the record
being edited. The record's name from the other model is then displayed on the record being edited.

.. example::
   On the *Sales Order* model, the :guilabel:`Customer` field is a :guilabel:`Many2One` field
   pointing at the *Contact* model. This allows **many** sales orders to be linked to **one**
   contact (customer).

   .. image:: fields/many2one-diagram.png
      :align: center
      :alt: Diagram showing a many2one relationship

.. tip::
   - To prevent users from creating a new record in the linked model, tick :guilabel:`Disable
     creation`.
   - To prevent users from opening records in a pop-up window, tick :guilabel:`Disable opening`.
   - To help users only select the right record, click on :guilabel:`Domain` to create a filter.

- :guilabel:`Badge`: displays the value inside a rounded shape, similar to a tag. The value cannot
  be edited on the UI.
- :guilabel:`Radio`: displays all selectable values at the same time as radio buttons.

.. _studio/fields/relational-fields/one2many:

One2Many (`one2many`)
---------------------

The :guilabel:`One2Many` field is used to display the existing relations between a record on the
current model and multiple records from another model.

.. example::
   You could add a :guilabel:`One2Many` field on the *Contact* model to look at **one** customer's
   **many** sales orders.

   .. image:: fields/one2many-diagram.png
      :align: center
      :alt: Diagram showing a one2many relationship

.. note::
   To use a :guilabel:`One2Many` field, the two models must have been linked already using a
   :ref:`Many2One field <studio/fields/relational-fields/many2one>`. One2Many relations do not exist
   independently: a reverse-search of existing Many2One relations is performed.

.. _studio/fields/relational-fields/lines:

Lines (`one2many`)
------------------

The :guilabel:`Lines` field is used to create a table with rows and columns (e.g., the lines of
products on a sales order).

.. tip::
   To modify the columns, click on the :guilabel:`Lines` field and then :guilabel:`Edit List View`.
   To edit the form that pops up when a user clicks on :guilabel:`Add a line`, click on
   :guilabel:`Edit Form View` instead.

.. example::

   .. image:: fields/lines-example.png
      :align: center
      :alt: Example of a Lines field

.. _studio/fields/relational-fields/many2many:

Many2Many (`many2many`)
-----------------------

The :guilabel:`Many2Many` field is used to link multiple records from another model to multiple
records on the current model. Many2Many fields can use :guilabel:`Disable creation`,
:guilabel:`Disable opening`, :guilabel:`Domain`, just like :ref:`Many2One fields
<studio/fields/relational-fields/many2one>`.

.. example::
   On the *Task* model, the :guilabel:`Assignees` field is a :guilabel:`Many2Many` field pointing at
   the *Contact* model. This allows a single user to be assigned to **many** tasks and **many**
   users to be assigned to a single task.

   .. image:: fields/many2many-diagram.png
      :align: center
      :alt: Diagram showing many2many relationships

- :guilabel:`Checkboxes`: users can select several values using checkboxes.
- :guilabel:`Tags`: users can select several values appearing in rounded shapes, also known as
  *tags*. This has the same effect as selecting the :ref:`Tags field
  <studio/fields/relational-fields/tags>`.

.. _studio/fields/relational-fields/tags:

Tags (`many2many`)
------------------

The :guilabel:`Tags` field is used to display several values from another model appearing in rounded
shapes, also known as *tags*. This field type is a :ref:`Many2Many field
<studio/fields/relational-fields/many2many>` with the :guilabel:`Tags` widget selected by default.
Consequently, the :guilabel:`Checkboxes` and :guilabel:`Many2Many` widgets have the same effects as
described under :ref:`Many2Many <studio/fields/relational-fields/many2many>`.

.. tip::
   To display tags with different background colors, tick :guilabel:`Use colors`.

.. example::

   .. image:: fields/tags-example.png
      :align: center
      :alt: Example of a Tags field

.. _studio/fields/relational-fields/related-field:

Related Field (`related`)
-------------------------

A :guilabel:`Related Field` is not a relational field per se; no relationship is created between
models. It uses an existing relationship to fetch and display information from another record.

.. example::
   To display the email address of a customer on the *Sales Order* model, use the :guilabel:`Related
   Field` `partner_id.email` by selecting :guilabel:`Customer` and then :guilabel:`Email`.

.. _studio/fields/properties:

Properties
==========

- :guilabel:`Invisible`: When it is not necessary for users to view a field on the UI, tick
  :guilabel:`Invisible`. It helps clear the UI by only showing the essential fields depending on a
  specific situation.

  .. example::
     On the *Form* view of the *Contact* model, the :guilabel:`Title` field only appears when
     :guilabel:`Individual` is selected, as that field would not be helpful for a
     :guilabel:`Company` contact.

  .. note::
     The :guilabel:`Invisible` attribute also applies to Studio. To view hidden fields inside
     Studio, click on a view's :guilabel:`View` tab and tick :guilabel:`Show Invisible
     Elements`.

- :guilabel:`Required`: If a field should always be completed by the user before being able to
  proceed, tick :guilabel:`Required`.
- :guilabel:`Read only`: If users should not be able to modify a field, tick :guilabel:`Read only`.

  .. note::
     You can choose to apply these three properties only for specific records by clicking on
     :guilabel:`Conditional` and creating a filter.

- :guilabel:`Label`: The :guilabel:`Label` is the field's name on the UI.

  .. note::
     This is not the same name as used in the PostgreSQL database. To view and change the latter,
     activate the :ref:`Developer mode <developer-mode>`, and edit the :guilabel:`Technical Name`.

- :guilabel:`Help Tooltip`: To explain the purpose of a field, write a description under
  :guilabel:`Help Tooltip`. It is displayed inside a tooltip box when hovering with your mouse over
  the field's label.
- :guilabel:`Placeholder`: To provide an example of how a field should be completed, write it under
  :guilabel:`Placeholder`. It is displayed in light gray in lieu of the field's value.
- :guilabel:`Widget`: To change the default appearance or functionality of a field, select one of
  the available widgets.
- :guilabel:`Default value`: To add a default value to a field when a record is created, use
  :guilabel:`Default value`.
- :guilabel:`Limit visibility to groups`: To limit which users can see the field, select a user
  access group.
