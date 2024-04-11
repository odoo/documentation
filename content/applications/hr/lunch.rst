:show-content:

=====
Lunch
=====

The *Lunch* application in Odoo allows users a convenient way to order food and pay for their meal
directly from the database.

Before employees can use the *Lunch* application, there are a number of configurations to consider:
settings, vendors, locations, products, product categories, and alerts. Once these are created,
employees can view offerings and order food.

Settings
========

Only two settings are needed to configure in the *Lunch* app: overdraft settings and notifications.
To access the settings, navigate to :menuselection:`Lunch app --> Configuration: Settings`.

Configure the following:

- :guilabel:`Lunch Overdraft`: enter the maximum overdraft amount for employees. The currency
  format is determined by the localization setting of the company.
- :guilabel:`Reception notification`: set the message users receive via the *Discuss* app when their
  food has been delivered. The default message `Your lunch has been delivered. Enjoy your meal!`
  populates this field, but can be modified, if desired.

.. tip::
   If in a database with multiple languages installed, many forms in the *Lunch* application have
   the option of entering translations for various fields.

   If translations are available to be configured, a language code appears next to a translatable
   field on a form. To add translations for that field, click the two letter language code (for
   example, :guilabel:`EN` for English) and a translation pop-up window appears.

   The following is an example for the :guilabel:`Reception notification` field in the settings
   menu:

   Navigate to :menuselection:`Lunch app --> Configuration: Settings`. Click the :guilabel:`EN` In
   the top-right of the text box beneath the :guilabel:`Reception notification` section. A
   :guilabel:`Translate: company_lunch_notify_message` pop-up window loads with the option to enter
   a translation for the other languages used by the database.

   The first column lists the different languages in alphabetical order, with the currently selected
   language in bold. The second column has the currently configured message in each column. The last
   column in the far-right provides a text box to type in a translation for each language.

   Enter the text that should appear for each language, then click :guilabel:`Save`.

  .. image:: lunch/translation.png
     :align: center
     :alt: The translation text box, with the current language highlighted, and the Arabic
           translation field highlighted.

Vendors
=======

Before food can be ordered, the restaurants that make the food, referred to as *vendors* in Odoo,
**must** be configured.

First navigate to :menuselection:`Lunch app --> Configuration: Vendors`, and all currently
configured vendors for the *Lunch* app appear in a default Kanban view. To change to a list view,
click the :guilabel:`≣ (four horizontal lines)` icon in the top-right corner.

To add a new vendor, click the :guilabel:`New` button in the top-left corner, and a new lunch
supplier form loads.

Fill out the following fields on the form.

Vendor information
------------------

- :guilabel:`Vendor`: enter a name for the vendor.
- :guilabel:`Vendor`: select the vendor from the drop-down menu. If the vendor has not already been
  entered in the system, type in the vendor name and click either :guilabel:`Create "vendor"` to add
  them, or :guilabel:`Create and edit...` to create the vendor and edit the vendor form. The vendor
  form allows for more detail, aside from the name, to be entered, such as contact information.

  .. note::
     If a selection is made to the drop-down :guilabel:`Vendor` field, the text :guilabel:`Vendor`
     field (above the drop-down :guilabel:`Vendor` field) updates with the name of the vendor chosen
     from the drop-down menu.

     The list of vendors that is presented in the drop-down menu is pulled from the *Contacts*
     application.

- :guilabel:`Address`: enter the vendor's address in the various fields in this section.
- :guilabel:`Email`: enter the vendor's email in this field.
- :guilabel:`Phone`: enter the vendor's phone number in this field.
- :guilabel:`Company`: if this vendor is only available to a specific company, select the company
  from the drop-down menu. If this field is left blank, the vendor's items are available to **all**
  companies.

.. image:: lunch/vendor-info.png
   :align: center
   :alt: The top portion of the vendor form filled out.

Availability
------------

The :guilabel:`AVAILABILITY` section presents a table with two rows. The days of the week populate
the top row, and the bottom row has checkboxes. Check the corresponding box for each day of the week
the vendor is available.

By default, Monday through Friday have checkmarks.

.. image:: lunch/availability.png
   :align: center
   :alt: The default view of the availability section, with Mon-Fri enabled.

Orders
------

- :guilabel:`Delivery`: using the drop-down menu, select either :guilabel:`Delivery` if the vendor
  delivers food to the office, or :guilabel:`No Delivery` if ordered food must be picked up.
- :guilabel:`Location`: select which locations are able to order from this vendor. Multiple
  locations can be selected. If this field is left blank, **all** locations can order from the
  vendor.

  .. note::
     By default, an `HQ Office` location is created by default when creating a database, and is
     available to select from the list.

- :guilabel:`Send Order By`: click the radio button to select how orders are sent to the vendor. The
  available options are :guilabel:`Phone` or :guilabel:`Email`.
- :guilabel:`Order Time`: this field appears if :guilabel:`Email` is selected for :guilabel:`Send
  Order By`. Enter the time that an order must be emailed for the order to be accepted. Enter the
  time in a `HH:MM` format, then select either :guilabel:`AM` or :guilabel:`PM` from the drop-down
  next to the time field.

.. image:: lunch/orders.png
   :align: center
   :alt: The orders section of a vendor form, with all fields filled out.

Extras
------

When ordering an item in the *Lunch* app, it is possible to show extra items that can be added to an
order, sometimes referred to as *add-ons*. These can be configured in any manner that suits the
products being offered.

By default, Odoo allows for three types of extra items, which can be thought of as *categories*. By
default, the first type or *category* of add-ons is labeled `Extras`, the second is labeled
`Beverages`, and the third is labeled `Extra Label 3`.

.. important::
   When configuring the extras, it is important to keep in mind that all the extras configured will
   appear for **every item** offered by the vendor. That means that only items which apply to
   **all** products from the vendor should be added.

Configure extras
~~~~~~~~~~~~~~~~

Enter the following information for each of the three available extra sections:

- :guilabel:`Extra (#) Label`: enter a name for the type of extra, such as `Toppings` or
  `Beverages`. This can be thought of as a *category*.
- :guilabel:`Extra (#) Quantity`: select how the extras are allowed to be selected. The options are:

  - :guilabel:`None or More`: select this if the user is not required to select anything.
  - :guilabel:`One or More`: select this to **require** the user to make at least one selection.
  - :guilabel:`Only One`: select this to **require** the user to make only one selection.

Add extras
~~~~~~~~~~

After the labels and quantities have been configured for an extra category, the individual extra
items must be added for each category.

Click :guilabel:`Add a line` at the bottom of the list that appears on the right-hand side of the
extra category. Enter the :guilabel:`Name` and :guilabel:`Price` for each item being added. The
price can remain at `$0.00` if there is no cost. This is common for items like disposable silverware
or condiments.

.. example::
   For a pizzeria that only offers personal pies, see their extras configured as follows:

   The first extra is configured for the various toppings they offer. The :guilabel:`Extra 1 Label`
   is set to `Toppings`, and the :guilabel:`Extra 1 Quantity` is set to :guilabel:`None or More`.
   The various toppings are then added, with their corresponding costs.

   .. image:: lunch/extras.png
      :align: center
      :alt: The first of the extras configured for pizza toppings.

   The pizzeria also offers a free beverage with any purchase. To set this up, the :guilabel:`Extra
   2 Label` is set to `Beverages`, and the :guilabel:`Extra 1 Quantity` is set to :guilabel:`Only
   One`. The various beverage choices are added, and the cost for each remains zero.

   .. image:: lunch/beverages.png
      :align: center
      :alt: The second of the extras configured for a free beverage with purchase.

Locations
=========

By default, Odoo creates an `HQ Office` location when the *Lunch* application is installed. If a
company has more than one location, they must be configured.

To add a location, navigate to :menuselection:`Lunch app --> Configuration: Locations`. The
currently configured locations appear in a list view. Click the :guilabel:`New` button in the
top-left corner and a blank line appears beneath the last location in the list.

Enter the name of the location in the field. Next, click into the :guilabel:`Address` field to the
right of the name, and enter the location's address. It is possible to enter multiple lines in the
address field.

Repeat this for all locations that need to be added.

.. image:: lunch/locations.png
   :align: center
   :alt: A list view of the locations with the new button highlighted.

Products
========

Before any orders can be placed, the individual products that are being offered must be configured,
as no products are pre-configured in Odoo, by default.

First, navigate to the products page by going to :menuselection:`Lunch app --> Configuration:
Products`. Next click the :guilabel:`New` button in the top-left corner and a blank product form
loads.

Enter the following information on the form:

- :guilabel:`Product Name*`: enter the name for the product.
- :guilabel:`Product Category*`: using the drop-down menu, select the category this product falls
  under.
- :guilabel:`Vendor*`: using the drop-down menu, select the vendor that supplies this product.
- :guilabel:`Price`: enter the price for the product. The currency is determined by the localization
  of the company.
- :guilabel:`Description`: enter a description of the product in this field. This description
  appears beneath the product photo when users are viewing the options for the day.
- :guilabel:`New Until`: using the calendar popover, select the date that the product will no
  longer be labeled as new. Until this date, a green `New` tag appears on the product.
- :guilabel:`Company`: if the product should only be available to a specific company, select it from
  the drop-down menu. If this field is left blank, this product is available for all companies in
  the database.
- Image: hover over the image box in the top-right corner of the form, and click the :guilabel:`✏️
  (pencil)` edit icon that appears. A file explorer pop-up window appears. Navigate to the image,
  then click :guilabel:`Open`.

  (*) indicates required field.

.. image:: lunch/product.png
   :align: center
   :alt: A product form filled out for a nine inch pizza.

Product categories
==================

Product categories are a way to organize the offerings in the *Lunch* app, and allows for users to
quickly filter the offerings when reviewing the menu for the day.

To add or modify categories, navigate to :menuselection:`Lunch app --> Configuration: Product
Categories`. The available categories appear in a list view. In the *Lunch* app, there are four
default categories : :guilabel:`Sandwich`, :guilabel:`Pizza`, :guilabel:`Burger`, and
:guilabel:`Drinks`.

To add a new category, click the :guilabel:`New` button in the top-left corner, and a blank category
form loads. Enter a name in the :guilabel:`Product Category` field. If the category is
company-specific and should only appear for a certain company, select the :guilabel:`Company` from
the drop-down menu.

If desired, add a photo for the category. Hover over the image box in the top-right, and click the
:guilabel:`✏️ (pencil)` edit icon that appears. A file explorer pop-up window appears. Navigate to
the image, then click :guilabel:`Open`.

.. image:: lunch/category.png
   :align: center
   :alt: The category form, with the fields filled out for a Soup category.

Alerts
======

It is possible to set up alerts that can either be displayed in the *Lunch* app, or be sent to
specific employees via the *Discuss* app.

No alerts are pre-configured by default. To set up an alert, navigate to :menuselection:`Lunch app
--> Configuration: Alerts`. Click the :guilabel:`New` button in the top-left corner and a blank
lunch alert form loads. Enter the following information on the form:

- :guilabel:`Alert Name`: enter a name for the alert. This should be short and descriptive, such as
  `New Lunch Vendor` or `Order by 11`. This field is **required**.
- :guilabel:`Display`: select whether the alert is visible in the *Lunch* app (:guilabel:`Alert in
  app)` or sent to employees via the *Discuss* app in a chat window (:guilabel:`Chat notification`).

  - :guilabel:`Recipients`: this field only appears if :guilabel:`Chat notification` is selected for
    the :guilabel:`Display` option. Select who receives the chat alert. The options are:
    :guilabel:`Everyone`, :guilabel:`Employee who ordered last week`, :guilabel:`Employee who
    ordered last month`, or :guilabel:`Employee who ordered last year`.

- :guilabel:`Location`: select the locations the alert should appear for from the drop-down menu.
  Multiple locations can be selected. This field is **required**, therefore, if the alert applies
  to all locations, select all the locations from the drop-down menu.
- :guilabel:`Show Until`: if the alert should expire on a specific date, select the date from the
  calendar picker.
- :guilabel:`Active`: this option is on (appears green) by default. To turn off the alert, click the
  toggle so that it no longer appears green.
- :guilabel:`Message`: Enter the alert message in this field. This field is **required**.
- :guilabel:`Notification Time`: select the days of the week the alert should be sent. By default,
  all seven days are active. Click on a checkbox to change the setting from active to inactive.

  If :guilabel:`Chat notification` was selected for the :guilabel:`Display` option, a
  :guilabel:`Time` field also appears. Enter the time the chat message should be sent. Next, select
  if the time is either :guilabel:`AM` or :guilabel:`PM` using the drop-down menu to the right of
  the :guilabel:`Time` field.

.. image:: lunch/alert.png
   :align: center
   :alt: An alert form with al the information filled out for a chat alert sent at 10:30 AM, asking
         employees to submit orders by 11:30 AM.

.. seealso::
   - :doc:`lunch/user-accounts`

.. toctree::
   :titlesonly:

   lunch/user-accounts
