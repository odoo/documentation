================================
Convert leads into opportunities
================================

*Leads* act as a qualifying step before an opportunity is created. This provides additional time to
review its potential, and gauge its viability, before the opportunity is assigned to a salesperson.

Configuration
=============

To activate the *Leads* setting, navigate to :menuselection:`CRM app --> Configuration --> Settings`
and check the box labeled, :guilabel:`Leads`. Then, click :guilabel:`Save`.

.. image:: convert/convert-leads-leads-setting.png
   :align: center
   :alt: Leads setting on CRM configuration page.

Activating this feature adds a new menu option, :guilabel:`Leads`, to the header bar, located along
the top of the screen.

.. image:: convert/convert-leads-leads-menu.png
   :align: center
   :alt: Leads menu on CRM application.

Once the *Leads* setting has been activated, it applies to all sales teams by default. To turn off
leads for a specific team, navigate to :menuselection:`CRM app --> Configuration --> Sales Teams`.
Then, select a team from the list to open that team's configuration page. Clear the
:guilabel:`Leads` checkbox, located beneath the :guilabel:`Sales Team` field, then click
:guilabel:`Save`.

.. image:: convert/convert-leads-leads-button.png
   :align: center
   :alt: Leads menu on CRM application.

Convert a lead into an opportunity
==================================

To convert a lead into an *opportunity*, navigate to :menuselection:`CRM app --> Leads`, and click
on a lead from the list to open it.

.. warning::
   If a :guilabel:`Similar Leads` smart button appears at the top of the page for the lead, it
   indicates a similar lead or opportunity already exists in the database. Before converting this
   lead, click the smart button to confirm if the lead should be merged.

   .. image:: convert/similar-leads-smart-button.png
      :align: center
      :alt: Close up of a lead with emphasis on the Similar Leads smart button.

Click the :guilabel:`Convert to Opportunity` button, located at the top-left of the page.

.. image:: convert/convert-leads-convert-opp-button.png
   :align: center
   :alt: Create opportunity button on a lead record.

This opens a :guilabel:`Convert to opportunity` pop-up modal. Here, in the :guilabel:`Conversion
Action` field, select the :guilabel:`Convert to opportunity` option.

.. note::
   To merge this lead with an existing similar lead or opportunity, select :guilabel:`Merge with
   existing opportunities` in the :guilabel:`Conversion Action` field. This generates a list of the
   similar leads/opportunities to be merged.

   When merging, Odoo gives priority to whichever lead/opportunity was created in the system first,
   merging the information into the first created lead/opportunity. However, if a lead and an
   opportunity are being merged, the resulting record is referred to as an opportunity, regardless
   of which record was created first.

Then, select a :guilabel:`Salesperson` and a :guilabel:`Sales Team` to which the opportunity should
be assigned. Neither field is required, though if a selection is made in the :guilabel:`Salesperson`
field, the :guilabel:`Sales Team` field is populated automatically, based on the salesperson's team
assignments.

If the lead has already been assigned to a salesperson or a team, these fields automatically
populate with that information.

.. image:: convert/convert-leads-conversion-action.png
   :align: center
   :alt: Create opportunity pop-up.

Under the :guilabel:`Customer` heading, choose from the following options:

- :guilabel:`Create a new customer`: choose this option to use the information in the lead to create
  a new customer record.
- :guilabel:`Link to an existing customer`: choose this option, then select a customer from the
  resulting drop-down menu, to link this opportunity to an existing customer record.
- :guilabel:`Do not link to a customer`: choose this option to convert the lead, but not link it to
  a new or existing customer.

Lastly, when all configurations are complete, click :guilabel:`Create Opportunity`.

To view the newly created opportunity, navigate to :menuselection:`CRM app --> My Pipeline`.

.. note::
   Some filters may need to be removed from the :guilabel:`Search...` bar on the top
   :guilabel:`Pipeline` page to view all opportunities.

