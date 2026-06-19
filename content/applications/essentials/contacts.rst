:show-content:

========
Contacts
========

Contacts are created in the **Contacts** application for all entities that are part of a company's
business, whether as a customer, a vendor, or in some other capacity. A contact record is a
repository of vital information for both individuals and companies, facilitating communication and
business transactions.

.. _contacts/contact-form:

Contact form and basic fields
=============================

To create a new contact, navigate to the :menuselection:`Contacts app`, and click the
:guilabel:`New` button. A new form appears where various contact information can be added.

Beginning in 19.1, Odoo no longer draws a distinction between contacts for individuals and contacts
for companies. There's now a single unified Contacts form that can be customized based on business
needs. The name of the contact in the :guilabel:`Name (company or person)` field remains
**mandatory**.

.. image:: contacts/unified-contact-form.png
   :alt: The new contact form released with Odoo 19.1.

.. tip::
   Contacts for people can be linked to contacts for companies by entering the associated company in
   the :icon:`fa-building` :guilabel:`Company Employer` field.

In the :icon:`fa-envelope` :guilabel:`Email` field, enter the email address with the domain. In the
:icon:`fa-phone` :guilabel:`Phone` field, enter the contact's phone number. Enter the
:guilabel:`Address` of the contact. Finally, enter the :guilabel:`Tax Identification Number (TIN)`
the contact uses for tax and accounting purposes. If the contact is not subject to taxation, a `/`
may be entered in this field.

Additional fields
-----------------

The following fields are also available on the contact form to help create a more complete entry for
this individual or company in your database:

- :guilabel:`Job Position`: The position or title of the contact, if relevant.
- :guilabel:`Website`: A relevant website address for the contact, starting with `http` or `https`.
- :guilabel:`Partner Level`: A drop-down menu where you can select the designated :ref:`partner
  <contacts/partner-assignment>` level for this contact.
- :guilabel:`Language`: The language used by the contact. All of the emails and documents generated
  by the database that are sent to this contact are translated into the selected language.
- :guilabel:`Tags`: Preconfigured and custom tags may be entered in this field to make it easier to
  search for and identify the contact within the database. Type the tags into the field or click the
  drop-down menu and select one. To create a new one, type the new tag in the field, and click
  :guilabel:`Create` or :guilabel:`Create and edit...` from the resulting drop-down menu.

Contacts tab
------------

On the :guilabel:`Contacts` tab, additional contacts can be added that are associated with the
current contact form and any related addresses. For example, if the current Contact form is meant to
cover a vendor company, contacts added through the :guilabel:`Contacts` tab can be easily identified
as employees of that company.

This can also be used to associate multiple addresses with the current contact form. To do so, click
:guilabel:`Add Contact` in the :guilabel:`Contacts` tab. Doing so brings up the :guilabel:`Create
Contact` form, in which additional addresses can be configured as regular contacts, addressess for
invoices and deliveries, and other needs.

On the :guilabel:`Create Contact` pop-up form, select one of the following options:

- :guilabel:`Contact`: Adds another contact to the existing contact form.
- :guilabel:`Invoice`: Adds a specific invoice address to the existing contact form.
- :guilabel:`Delivery`: Adds a specific delivery address to the existing contact form.
- :guilabel:`Other`: Adds an alternate address to the existing contact form.

.. image:: contacts/create-contact-window.png
   :alt: Create a new contact or address on a contact form.

Once an option is selected, enter the corresponding contact information that should be used for the
specified address type. Odoo will reference invoice and delivery addresses during relevant parts of
the sales process.

Sales & Purchase tab
--------------------

The :guilabel:`Sales & Purchase` tab only appears when the **Sales**, **Purchase**, or **Point of
Sale** applications are installed. Each of these apps will add another section to this tab when they
are installed.

The :guilabel:`Fiscal Position` can be set on the :guilabel:`Sales & Purchases` tab. Select a
:guilabel:`Fiscal Position` from the drop-down menu.

.. _essentials/contacts/sales-section:

Sales section
~~~~~~~~~~~~~

Under the :guilabel:`Sales` heading, a specific :guilabel:`Salesperson` can be assigned to a work
with the contact. To do that, click the :guilabel:`Salesperson` drop-down field, and select one.
Create a new :guilabel:`Salesperson` by typing the user's name and making the appropriate selection.

A :guilabel:`Pricelist` or :guilabel:`Payment Terms` can also be set, if needed. Select the
:guilabel:`Pricelist` drop-down menu to choose the appropriate :guilabel:`Pricelist`. Click the
drop-down menu next to :guilabel:`Payment Terms` and change it to one of the preselected
:guilabel:`Payment Terms` or :guilabel:`Create` a new one.

Click into the :guilabel:`Payment Method` field to select an option from the drop-down menu.

Click into the :guilabel:`Delivery Method` field to select an option from the drop-down menu.

Other options may be appear in this section as well depending on what apps are installed in the
database and what configurations have been enabled.

Point of Sale section
~~~~~~~~~~~~~~~~~~~~~

Under the :guilabel:`Point Of Sale` heading, enter a :guilabel:`Barcode` that can be used to
identify this contact.

Purchase section
~~~~~~~~~~~~~~~~

Under the :guilabel:`Purchase` heading, select how Group :abbr:`RFQs (requests for quotations)` for
this contact should be grouped together:

- :guilabel:`On Order`: Replenishment needs are grouped together except for :abbr:`MTO (made to
  order)` replenishments.
- :guilabel:`Daily`: Replenishment needs are grouped together if their expected arrival is on the
  same day.
- :guilabel:`Weekly`: Replenishment needs are grouped together if the expected arrival is the same
  week or week day.
- :guilabel:`Always`: Replenishment needs are always grouped together.

Select a default :guilabel:`Buyer` if the :abbr:`RFQs (requests for quotation)` should always be
assigned to the same user.

Specify :guilabel:`Payment Terms`, a preferred :guilabel:`Payment Method`, and :guilabel:`1099 Box`
information here. A :guilabel:`Receipt Reminder` can be set here, as well. Select a
:guilabel:`Supplier Currency` to be used for purchases from the contact.

Fiscal information
~~~~~~~~~~~~~~~~~~

To assign a :guilabel:`Fiscal Position` to this contact, select it from the drop-down menu.

Miscellaneous section
~~~~~~~~~~~~~~~~~~~~~

Under the :guilabel:`Misc.` heading, enter a :guilabel:`Company ID` if applicable. Use the
:guilabel:`Reference` field to add any additional information or notes for this contact.

If this contact should only be accessible for one company in a multi-company database, select it
from the :guilabel:`Company` field drop-down list. Use the :guilabel:`Website` drop-down menu to
restrict the publishing of this contact to one website if working on a database with multiple
websites.

Select one or more :guilabel:`Website Tags` to assist in filtering published customers on the
`/customers` website page. Select an :guilabel:`Industry` for this contact from the drop-down menu.
Use the :guilabel:`SLA Policies` field to assign a *Helpdesk* SLA policy to this contact.

.. _contacts/accounting-tab:

Accounting tab
--------------

The :guilabel:`Accounting` tab appears when the *Accounting* application is installed. Here, a user
can add any related :guilabel:`Bank accounts` or set default accounting journals. Trusted business
partners may have :guilabel:`Auto-post bills` enabled, allowing for bills to post automatically,
never, or after 3 validations without edits.

Under the :ref:`Invoice Follow-Ups <accounting/follow_up/follow-ups-for-one-customer>` heading, the
:guilabel:`Follow-up Status` indicates if the contact currently has any overdue payments. To
configure :guilabel:`Reminders` for this contact, use the radio buttons to select either
:guilabel:`Automatic` or :guilabel:`Manual` reminders, as well as schedule the :guilabel:`Next
reminder`. A user can be set to be :guilabel:`Responsible` for manual follow-ups here as well.

.. _contacts/partner-assignment:

Partner Assignment tab
----------------------

Next is the :guilabel:`Partner Assignment` tab, which by default includes a :guilabel:`Geolocation`
section and other partner options, including :guilabel:`Partner Activation` and :guilabel:`Partner
Review` configurations. These are **only** present when the *Resellers* module is installed.

.. seealso::
   Follow the :doc:`Resellers documentation <../sales/crm/track_leads/resellers>` for more
   information on publishing partners on the website.

Notes tab
---------

The :guilabel:`Notes` tab is a field where notes for other users can be left on the contact form.
There are no settings that can be configured within this tab.

UBO tab
-------

The UBO (Ultimate Beneficial Owner) tab contains a snapshot of the *Holdings* information from the
:guilabel:`Equity` app, as well as information for the individual contact. The fields visible here
may change depending on the other apps installed in the Odoo database, as well. The :guilabel:`UBO`
tab is **only** present when the **Equity** app is installed.

To request the information required for the :abbr:`UBO (Ultimate Beneficial Owner)` tab, click the
:icon:`fa-cog` :guilabel:`Action` icon, then select :guilabel:`Request UBO Form` to send an email to
the contact.

Smart buttons
=============

At the top of the contact form, some additional *smart buttons* may be available.

Here, Odoo displays a variety of records related to this contact that were created within other
apps. Odoo integrates information from every single one of its apps, so there may be multiple smart
buttons that appear automatically in this section.

.. example::
   For example, there is a :guilabel:`Sales` smart button, where all the sales orders and quotations
   related to this customer from the *Sales* app are accessible.

Deliveries, documents, loyalty cards, and direct debits are *also* linked to smart buttons, should
there be any outstanding/on-file for this contact.

If the contact is a partner, the user can visit their partner page on the Odoo-built website by
clicking the :guilabel:`Go to Website` smart button.

Archive contacts
================

If a user decides they no longer want to have this contact active, the record can be archived. To do
that, go to the :icon:`fa-cog` :guilabel:`Actions` menu at the top of the contact form, and click
:icon:`fa-inbox` :guilabel:`Archive`.

Then, click :guilabel:`Archive` from the resulting :guilabel:`Confirmation` pop-up window.

With this contact successfully archived, as indicated by a banner at the top of the contact form,
they do not show up in the main contacts page, but they can still be searched for with the
:guilabel:`Archived` filter.

.. tip::
   To unarchive contacts, just click the :icon:`fa-cog` :guilabel:`Actions` menu again at the top of
   the archived contact form, and click :guilabel:`Unarchive`. Upon doing so, the
   :guilabel:`Archived` banner is removed and the contact is restored.

.. seealso::
   - :doc:`Add different addresses in CRM <../sales/sales/sales_quotations/different_addresses>`
   - `Odoo's eLearning Contacts tutorial
     <https://www.odoo.com/slides/slide/contacts-2527?fullscreen=1>`_

.. toctree::
   :titlesonly:

   contacts/merge
