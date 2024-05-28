=============
Double Opt-in
=============

A *double opt-in*, also referred to as a *confirmed opt-in*, may be required in some countries
for marketing communications, due to anti-SPAM laws. Confirming consent has several other benefits,
as well: it validates email addresses, avoids spam/robo subscribers, keeps mailing lists clean, and
only includes engaged contacts in the mailing list.

When the *Double Opt-in* campaign template is used, a new mailing list titled, *Confirmed contacts*
is created in the *Email Marketing* app, and any new mailing list contacts that are added to the
default *Newsletter* mailing list are sent a confirmation email to double opt-in. The contacts that
click on the confirmation link in the email are automatically added to the *Confirmed contacts*
mailing list in Odoo.

.. important::
   When using the *Double Opt-in* campaign template, only the contacts in the *Confirmed contacts
   mailing* list are considered to have confirmed their consent.

.. _marketing_automation/template/using-double-optin:

Use the Double Opt-in campaign template
=======================================

Open the :menuselection:`Marketing Automation` app, and select the :guilabel:`Double Opt-in`
campaign template to create a new campaign for confirming consent.

.. tip::
   The campaign templates do **not** display, by default, when there are existing *Marketing
   Automation* campaigns. To display the campaign templates, type the name of a campaign (that does
   not exist in the database) into the :guilabel:`Search...` bar, then press :kbd:`Enter`.

   For example, searching for `empty` displays the campaign template cards again, as long as there
   is not a campaign with the name "empty" in the database.

Campaign configuration
----------------------

Upon creation of the campaign, the campaign form loads with a new preconfigured campaign.

The :guilabel:`Target` and :guilabel:`Filter` configurations of the campaign are as follows:

- :guilabel:`Name`: `Double Opt-in`
- :guilabel:`Responsible`\*: The user who created the campaign.
- :guilabel:`Target`: :guilabel:`Mailing Contact`
- :guilabel:`Unicity based on`: :guilabel:`Email (Mailing Contact)`
- :guilabel:`Filter`:

  - :guilabel:`Email` :guilabel:`is set`
  - :guilabel:`Blacklist` :guilabel:`is not` :guilabel:`set`
  - :guilabel:`Mailing lists` :guilabel:`contains` `Newsletter`

\* The :guilabel:`Responsible` field is only visible with :ref:`developer-mode` activated.

.. important::
   The :guilabel:`Target` model of the campaign should **not** be modified. Changing the
   :guilabel:`Target` model with activities in the :guilabel:`Workflow` invalidates the existing
   activities in the :guilabel:`Workflow`.

   The *Double Opt-in* campaign template is intended to **only** use the :guilabel:`Mailing Contact`
   model.

The campaign loads two activities in the :guilabel:`Workflow` section of the campaign: an email
activity, with a child server action activity that triggers *on click*.

By default, the `Confirmation` email activity is set to trigger :guilabel:`1 Hours` after the
beginning of the workflow. In other words, the email is sent 1 hour after a new contact is added to
the *Newsletter* mailing list.

The email activity uses the preconfigured *Confirmation* email template, which contains a button for
the contact to click to confirm their consent.

To modify the email template, select the :icon:`fa-envelope-o` :guilabel:`Templates` smart button at
the top of the campaign form. Then, in the list of templates, select the `Confirmation` email
template.

Be sure to personalize the contents of the email template; however, it is recommended to keep the
contents of double opt-in confirmation emails short and to-the-point.

The default confirmation button, in the body of the template, links directly to the database's
website homepage. Click on the button to edit the button text and URL.

.. tip::
   To provide a streamlined experience for the contact, consider :doc:`creating a page on the
   website <../../../websites/website/pages>` that expresses gratitude to the contact for
   confirming their subscription to the mailing list. Add the link to that page in the URL of the
   confirmation button.

.. important::
   The email template should only include a single call-to-action link for confirmation, other than
   an unsubscribe link.

   Any click on a link (or button) included in the confirmation email, besides the unsubscribe
   button, triggers the *Add to list* server action.

   The child activity *Add to list* server action's *On click* trigger cannot differentiate between
   multiple URLs in an email, besides the `/unsubscribe_from_list` unsubscribe button that is
   included in any one of the footer blocks.

The `Add to list` server action activity triggers immediately after a click in the parent
`Confirmation` email activity is detected.

When triggered, the `Add to list` activity executes the *Add To Confirmed List* server action,
automatically adding the contact to the *Confirmed contacts* mailing list, if they are not already
in the mailing list.

To modify the server action, select the title of the activity to open the :guilabel:`Open:
Activities` pop-up window and edit the server action activities configuration.

.. tip::
   Consider setting an :guilabel:`Expiry Duration` to prevent executing the activity after a
   specific amount of time.

.. important::
   It is not recommended to modify the preconfigured Python code in the :guilabel:`Add To Confirmed
   List` server action, as doing so may trigger a change in the database's pricing plan.

Once the campaign configuration is complete, consider :doc:`launching a test <../testing_running>`
to verify the campaign executes as expected. If the campaign testing is successful,
:guilabel:`Start` the campaign to begin sending double opt-in confirmation emails to *Newsletter*
mailing list contacts, and fill the *Confirmed contacts* mailing list with engaged contacts.

.. _marketing_automation/template/double-optin-usecase:

Double Opt-in use-case
======================

.. example::
   To prepare for sending newsletter marketing emails on an Odoo database, a mailing contact list
   must be procured. One way of collecting subscribers is through a sign-up form on the website that
   adds contacts to the *Newsletter* mailing list on the form submission.

   .. image:: double_optin/newsletter-signup.png
      :align: center
      :alt: Newsletter sign-up form on Odoo website footer.

   Before sending any marketing emails, :ref:`use the Double Opt-in campaign template
   <marketing_automation/template/using-double-optin>` in the *Marketing Automation* app to confirm
   marketing email consent from the contacts in the *Newsletter* mailing list.

   After launching the *Double Opt-in* campaign, view the contacts that have double opt-in in the
   *Confirmed contacts* mailing list (:menuselection:`Email Marketing app --> Mailing Lists -->
   Mailing Lists`).

   .. image:: double_optin/double-optin-metrics.png
      :align: center
      :alt: Activity metrics on the campaign form.

   Now, the *Confirmed contacts* mailing list is ready to be used for sending newsletter marketing
   emails from an Odoo database.

.. seealso::
   - :doc:`../understanding_metrics`
   - :doc:`../../email_marketing/mailing_lists`
   - :doc:`../../email_marketing`
