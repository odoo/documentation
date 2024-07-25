============
Event booths
============

The Odoo *Events* application provides users with the ability to create event booths, sell their
availability, and manage their reservations.

Configuration
=============

In order to create, sell, and manage booths for events, the *Booth Management* feature must be
activated.

To do that, navigate to :menuselection:`Events app --> Configuration --> Settings`, and tick the
:guilabel:`Booth Management` checkbox. Then, click :guilabel:`Save`.

.. image:: event_booths/booth-management-setting.png
   :align: center
   :alt: The Booth Management setting in the Odoo Events application.

.. important::
   When the :guilabel:`Booth Management` setting is activated, a new :doc:`Product Type
   <../../inventory_and_mrp/inventory/product_management/configure/type>` becomes available on all
   product forms: *Event Booth*.

   This is important because every created booth **must** be assigned a *Booth Category* on their
   respective booth form, and every booth category **must** have an *Event Booth* product assigned
   to it.

Booth categories
================

With the *Booth Management* setting activated in the *Events* app, the *Booth Categories* option
appears in the :guilabel:`Configuration` menu.

To access the :guilabel:`Booth Category` dashboard, go to :menuselection:`Events app -->
Configuration --> Booth Categories`, which reveals a list of all created booth categories.

.. image:: event_booths/booth-category-page.png
   :align: center
   :alt: The Booth Category page in the Odoo Events application.

On the :guilabel:`Booth Category` page, the following information for each booth category is listed:

- :guilabel:`Name`: the name of the booth category.
- :guilabel:`Create Sponsor`: if checked, booking this booth category creates a sponsor for the
  user.
- :guilabel:`Product`: the *Event Booth* product associated with that specific booth category.
- :guilabel:`Price`: the price of a booth in that booth category.

When the :icon:`oi-settings-adjust` :guilabel:`(settings)` icon, located to the far-right of the
column titles, is clicked, a drop-down menu of additional column options appears. From the resulting
drop-down menu, tick the checkbox beside :guilabel:`Sponsor Level` and/or :guilabel:`Sponsor Type`
to reveal those columns on the :guilabel:`Booth Category` page.

To edit an existing booth category, select it from the list, and proceed to make any desired
modifications from the event category form.

Create booth category
---------------------

To create a booth category from the :guilabel:`Booth Category` page, click the :guilabel:`New`
button in the upper-left corner to reveal a blank booth category form.

.. image:: event_booths/booth-category-form.png
   :align: center
   :alt: A typical booth category form in the Odoo Events application.

Start by entering a name for the booth category in the top :guilabel:`Booth Category` field. This is
a **requried** field.

To add a corresponding image to the booth category (e.g. a sample photo of how the booth looks),
click the :icon:`fa-pencil` :guilabel:`(pencil)` icon that appears when the cursor hovers over the
camera placeholder in the upper-right corner of the booth category form. When clicked, proceed to
upload the desired image to the booth category form, if needed.

In the :guilabel:`Booth Details` section, users **must** assign a :guilabel:`Product` to the
category, and it **must** have *Event Booth* set as the *Product Type* on the product form.

And, regardless of the listed price on the *Event Booth* product chosen, the user can input a custom
:guilabel:`Price` to be applied for this booth category in the field below.

In the :guilabel:`Sponsorship` section, there is a :guilabel:`Create Sponsor` checkbox option. With
that checkbox ticked, whenever a booth belonging to this category is booked, the user is created as
an official *Sponsor* of the event.

When the :guilabel:`Create Sponsor` checkbox is ticked, two additional fields appear beneath it:
:guilabel:`Sponsor Level` and :guilabel:`Sponsor Type`.

.. note::
   :guilabel:`Sponsor Level` and :guilabel:`Sponsor Type` are purely to distinguish different
   distinctions of sponsors. For example, if a sponsor has been attached to a company for multiple
   years, they would be granted a higher level (e.g. *Gold* level), which provides them with
   immediate credability and status. Whereas, conversely, a relatively new sponsor would be granted
   a lower level (e.g. *Bronze* level), which coincides with its own credability and status.

Select a desired level of sponsorship from the :guilabel:`Sponsor Level` drop-down field.

.. tip::
   To modify any existing :guilabel:`Sponsor Level`, select it from the drop-down field, then click
   the :icon:`fa-arrow-right` :guilabel:`(right arrow)` that appears at the end of the line. Doing
   so opens a separate page, wherein the :guilabel:`Sponsor Level` name and :guilabel:`Ribbon Style`
   can be changed, if necessary.

Users can also create a new :guilabel:`Sponsor Level`, by typing in the name of the new level, and
clicking :guilabel:`Create and edit...` from the resulting drop-down menu.

.. note::
   Clicking :guilabel:`Create` from the resulting drop-down menu in this instance creates the
   sponsor level, but doesn't immediately prompt the user to further configure it, via a
   :guilabel:`Create Sponsor Level` pop-up window.

Doing so reveals a :guilabel:`Create Sponsor Level` pop-up window.

.. image:: event_booths/create-sponsor-level-popup.png
   :align: center
   :alt: The Create Sponsor Level pop-up window that appears in the Odoo Events application.

From this pop-up window, confirm the newly-created :guilabel:`Sponsor Level`, and decide what kind
of :guilabel:`Ribbon Style` should be applied, if any. The :guilabel:`Ribbon Style` options
available in that drop-down field are: :guilabel:`No Ribbon`, :guilabel:`Gold`, :guilabel:`Silver`,
and :guilabel:`Bronze`.

If one is selected, that :guilabel:`Ribbon Style` appears with the sponsor's name on the event
website.

On the booth category form, beneath those sections (:guilabel:`Booth Details` and
:guilabel:`Sponsorship`), there is the :guilabel:`Description` tab. In this tab, proceed to enter
any vital information related to the booth category that would be important for any potential
booth-buyer to know about (e.g., the square footage, any amenities, size of display screen, etc.).

Add booth to an event
=====================

In order to add a booth to an event, navigate to an existing event form, via :menuselection:`Events
app --> Events`, and select the desired event from the :guilabel:`Events` dashboard. Or, click
:guilabel:`New` to open a blank event form.

From the event form, to access the *Booths* for that specific event, click the :guilabel:`Booths`
smart button at the top of the page.

The :guilabel:`Booths` page is displayed in a Kanban view, by default, with two different stages:
:guilabel:`Available` and :guilabel:`Unavailable`.

.. note::
   The :guilabel:`Booths` page of an event is also viewable in a :icon:`oi-view-list`
   :guilabel:`List` view, :icon:`fa-area-chart` :guilabel:`Graph` view, and :icon:`oi-view-pivot`
   :guilabel:`Pivot` view. All of which are accessible, via their icons, in the upper-right corner
   of the :guilabel:`Booths` page.

The booths present in the :guilabel:`Available` stage are still available for people to purchase for
the event. The booths present in the :guilabel:`Unavailable` stage have already been purchased, and
are no longer available.

To modify any existing booth, simply click the desired booth from the :guilabel:`Booths` page, and
proceed to make any necessary changes from the booth form. Or, create a new one, by clicking the
:guilabel:`New` button in the upper-left corner to reveal a blank booth form.

Booth form
----------

The booth form in Odoo *Events* lets users customize and configure event booths in a number of
different ways.

.. image:: event_booths/booth-form.png
   :align: center
   :alt: Typical booth form in the Odoo Events application.

Start by typing in a :guilabel:`Name` for the booth. This is a **required** field.

Then, apply a :guilabel:`Booth Category` to the booth. This is a **required** field.

.. tip::
   A new :guilabel:`Booth Category` can be created from this field, by typing in the name of the
   new category, and clicking :guilabel:`Create and edit...` from the resulting drop-down menu.
   Doing so reveals a :guilabel:`Create Booth Category` pop-up window, with all the standard fields
   found on a common booth category form.

   Simply clicking :guilabel:`Create` from the resulting drop-down menu creates the category, but
   does not reveal the :guilabel:`Create Booth Category` pop-up window. The category would have to
   be modified later, via the *Booth Categories* page (:menuselection:`Events app --> Configuration
   --> Booth Categories`).

Upon selecting a pre-existing :guilabel:`Booth Category`, two additional, non-modifiable fields
appear: :guilabel:`Product` and :guilabel:`Price`. Both fields represent their respective selections
for that specific booth category.

When a person purchases a booth rental through the event website, the subsequent renter-related
fields on the form auto-populate, based on the information provided by the purchaser during the
online transaction. The booth also automatically changes its status from *Available* to
*Unavailable*.

However, if the rental of a booth is conducted in any other way (e.g., in person, via sales order,
etc.), the :guilabel:`Renter`, :guilabel:`Renter Name`, :guilabel:`Renter Email`, and
:guilabel:`Renter Phone` fields can be entered in manually.

The status of the booth (:guilabel:`Available` or :guilabel:`Unavailable`) can also be changed
manually, either by clicking the appropriate status from the status bar present on the booth form,
or by dragging-and-dropping the desired booth into the appropriate stage, via the *Booths* page
Kanban view.

Sell event booths
=================

With event booths configured on the event form, via the event-specific *Booths* pages, Odoo presents
them on the event website, via the *Get A Booth* event subheader link.

To access the *Get A Booth* page on the event website, open the :menuselection:`Events app`, and
select the desired event from the :guilabel:`Events` dashboard. From the event form, click the
:guilabel:`Go to Website` smart button to be taken to the Odoo-built event website.

If the event subheader menu (with the :guilabel:`Get A Booth` option) is *not* showing up on the
event website, there are two ways to make it appear.

While on the event website, enter the edit mode by clicking the :guilabel:`Edit` button in the
upper-right corner. Then, click into the :guilabel:`Customize` tab of the resulting sidebar of web
design tools.

In the :guilabel:`Customize` tab, click the toggle switch for :guilabel:`Sub-Menu (Specific)`, and
click :guilabel:`Save`. Doing so reveals the event subheader menu with various options.

Alternatively, enter :doc:`Debug mode <../../general/developer_mode>`, and open the specific event
form in the the *Events* application.

On the event form, with *Debug mode* on, an array of subheader menu options appears. Tick the
checkbox for :guilabel:`Website Submenu`, in order for the submenu to appear on the event website.
Doing so also ticks every other submenu-related checkbox automatically.

At this point, proceed to choose which options to keep on the event subheader menu. In this case,
make sure the :guilabel:`Booth Register` checkbox is ticked.

From there, click the :guilabel:`Get A Booth` event subheader menu option. Doing so reveals the
:guilabel:`Get A Booth` page, showcasing all the configured event booths that were created on the
event form.

.. image:: event_booths/get-a-booth-page.png
   :align: center
   :alt: Typical Get A Booth page on the event website via the Odoo Events app.

From here, the visitor can select their desired booth option, then :guilabel:`Location`. Next, they
would click the :guilabel:`Book my Booth(s)` button, located at the bottom of the :guilabel:`Get A
Booth` page.

Doing so reveals a :guilabel:`Contact Details` page, wherein they fill out either *Contact Details*
or *Sponsor Details*, depending on how the booth was configured on the event form. The fields
present on this form vary, depending on whether its meant for a basic contact or an event sponsor.

.. note::
   If the selected booth has the *Create Sponsor* checkbox ticked, this page reads as *Sponsor
   Details*.

The information provided on this details page is used to auto-populate the renter-related
information on the booth form on the event form in the *Events* application.

Once the necessary information has been entered, the visitor then clicks the :guilabel:`Go to
Payment` at the bottom of the page, and proceeds to complete the typical checkout process.

Upon a successful payment confirmation, that selected booth automatically moves to the *Unavailable*
stage on the event-specific *Booths* page in the *Events* application (accessible via the *Booths*
smart button on the event form).

Also, the provided *Sponsor* information (if applicable) and *Sales Order* information are
accessible from the specific event form, via their respective smart buttons that appear at the top
of the form.

.. note::
   Click the *Sponsors* smart button to modify any information about the sponsor, if necessary.

.. seealso::
   - :doc:`create_events`
   - :doc:`sell_tickets`
