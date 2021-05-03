===================
Customizing Reports
===================

| Odoo uses HTML and CSS technologies to create reports. HTML is a markup language that uses tags,
  also called elements. It is the core of any webpage because it provides its basic structure.
  CSS interacts with HTML elements to add style to the page, establishing how the HTML is shown to
  the user. Odoo’s reports also use Bootstrap’s grid layout, which is the containers, rows, and
  columns to align content, and support Odoo's website themes.
| When creating a new report, choose the purpose of it and if you would like the report to include
  header and footer (company logo, name, address, phone, email address, etc.).

.. image:: media/reports/report_typing.png
   :align: center
   :alt: View of the types of new reports in Odoo Studio

Under the tab **Add**, you find the fields to be dragged and dropped to the view. *Fields*, *Data
tables*, *Subtotal & Total*, and *Address Book* are dynamic elements (meaning that they need a
:doc:`one2many or a many2many <../concepts/understanding_general>` related object). *Text*, *Title
Block*, *Image*, and *Text in Cell* are static elements.

.. image:: media/reports/add_tab.png
   :align: center
   :alt: View of a report and the tab add in Odoo Studio

Once the element is added to the view, select it to see its **Options**. The first section shows the
hierarchy of the selected object and its properties, allowing you to individually edit
them. Fields with related objects have their directives shown on *Field Expression*.

.. image:: media/reports/options_tab.png
   :align: center
   :alt: View of a report and the tab options in Odoo Studio

| Under **Visible if**, define the rule(s) to set visibility conditions to fields.
| Example: if choosing to display a product image, you could set a visibility rule to only display
  the ones that are *set* in the product form, avoiding having a plain icon when they are not set.
| **Visible for** is used to set which :doc:`groups <../../../general/odoo_basics/users>`
  can have access to specific elements in the report. **Limit visibility to groups**, under
  *Report*, sets the visibility of the report to specifics groups, meaning that users belonging to
  other groups do not see the same final document.

.. image:: media/reports/limit_visibility.png
   :align: center
   :alt: View of a report’s settings emphasizing the field limit visibility to groups in Odoo Studio

Under the **Report** tab, name your report, choose the paper format, and if the report should be
added to the *Print* menu list on its respective document form.

.. image:: media/reports/print_menu.png
   :align: center
   :alt: View of an invoice form emphasizing the menu print for Odoo Studio

If activating the :doc:`Developer mode <../../../general/developer_mode/activate>`, additional fields
such as *Class* under *Options*, and *Reload from attachment* under *Report*, become visible.

- *Class*: add custom CSS classes to the selected element (e.g. Bootstrap classes such as
  *text-danger*).

- *Reload from attachment*: saves the report as an attachment of the document when printed. When the
  report is reprinted, it re-downloads that attachment instead of re-printing it.
  This means that if the underlying record (e.g. Invoice) changes when compared to the first
  impression, the report does not reflect the changes because they were done after the attachment was
  created. This is typically useful for reports linked to documents that should not change, such as
  Invoices.

.. tip::
   Actions in Odoo Studio can be undone until you *Close* the toolbox. Once you have closed Studio,
   changes can not be undone anymore.

   .. image:: media/reports/undo_redo.png
      :align: center
      :alt: View of a report being built and emphasizing the undo and redo buttons in Odoo Studio
