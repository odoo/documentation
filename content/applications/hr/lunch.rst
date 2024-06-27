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
   :alt: An alert form with all of the information filled out for a chat alert sent at 10:30 AM,
         asking employees to submit orders by 11:30 AM.

.. seealso::
   - :doc:`lunch/vendors`
   - :doc:`lunch/products`
   - :doc:`lunch/orders`
   - :doc:`lunch/user-accounts`
   - :doc:`lunch/management`

.. toctree::
   :titlesonly:

   lunch/vendors
   lunch/products
   lunch/orders
   lunch/user-accounts
   lunch/management
