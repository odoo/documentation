=============
Double Opt-in
=============

A *double opt-in*, also referred to as a *confirmed opt-in*, may be required in some countries for
marketing communications to comply with anti-spam laws. Confirming consent also has other benefits,
including validating email addresses, avoiding fraudulent subscribers, and keeping mailing lists
clean.

When the *Double Opt-in* campaign template is used, a new :doc:`mailing list
<../../email_marketing/mailing_lists>` named *Confirmed contacts* is created in the **Email
Marketing** app. Any new mailing list contacts added to the default *Newsletter* mailing list are
sent a confirmation email to double opt-in to *Confirmed contacts*.

.. important::
   When using the *Double Opt-in* campaign template, only the contacts in the *Confirmed contacts
   mailing* list are considered to have confirmed their consent.

.. _marketing_automation/double_optin/using-double-optin:

Use the Double Opt-in campaign template
=======================================

Open the :menuselection:`Marketing Automation` app, click :guilabel:`New`, then select
:guilabel:`Load a Template`. On the *Create a Marketing Automation Campaign* pop-up window, select
the :guilabel:`Double Opt-in` campaign template.

Campaign configuration
----------------------

The workflow builder loads a preconfigured campaign. The :doc:`trigger <../target_audience>` is
configured as follows:

- :guilabel:`Name`: `Double Opt-in`
- :guilabel:`Target`: `Mailing Contact`
- :guilabel:`Trigger type`: `Filter`
- :guilabel:`Filter`: Match `all` of the following rules:

  - `Email` `is set`
  - `Blacklist` `is not set`
  - `Mailing Lists` `contains` `Newsletter`

.. important::
   The :guilabel:`Target` model of the campaign should **not** be modified. Changing the
   :guilabel:`Target` model invalidates the existing activities in the workflow.

After the trigger, the following activities are generated:

#. `Confirmation` email activity: Sends a *Confirmation* email including a button for the contact to
   consent.
#. `Condition Delay`: Wait for the contact to confirm consent before continuing.
#. `Update Subscription`: Add the contact to the *Confirmed contacts* mailing list.

.. important::
   The email template should only include a single call-to-action link for confirmation, other than
   an unsubscribe link.

   Any click on a link (or button) included in the confirmation email, besides the unsubscribe
   button, triggers the *Update Subscription* activity.

Once the campaign configuration is complete, consider :doc:`launching a test <../testing_running>`
to verify the campaign executes as expected. If the campaign testing is successful,
:guilabel:`Start` the campaign to begin sending double opt-in confirmation emails to contacts.

.. _marketing_automation/double_optin/usecase:

Use case
--------

.. example::
   To prepare for sending newsletter marketing emails on an Odoo database, a mailing contact list
   must be procured. One way of collecting subscribers is through a sign-up form on the website that
   adds contacts to the *Newsletter* mailing list on the form submission.

   .. image:: double_optin/newsletter-signup.png
      :alt: Newsletter sign-up form on Odoo website footer.

   Before sending any marketing emails, :ref:`use the Double Opt-in campaign template
   <marketing_automation/double_optin/using-double-optin>` in the *Marketing Automation* app to
   confirm marketing email consent from the contacts in the *Newsletter* mailing list.

   After launching the *Double Opt-in* campaign, view the contacts that have opted in to the
   *Confirmed contacts* mailing list (:menuselection:`Email Marketing app --> Mailing Lists -->
   Mailing Lists`).

   Now, the *Confirmed contacts* mailing list is ready to be used for sending newsletter marketing
   emails from an Odoo database.

.. seealso::
   - :doc:`../understanding_metrics`
   - :doc:`../../email_marketing/mailing_lists`
   - :doc:`../../email_marketing`
