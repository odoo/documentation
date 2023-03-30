=========================================
Assign leads with predictive lead scoring
=========================================

The Odoo *CRM* app can automatically assign leads/opportunities to sales teams and salespeople. A
standard practice is to assign leads based on the probability of winning each lead. Companies can
prioritize the leads that are more likely to result in successful deals by quickly assigning them
to the appropriate salespeople.

Odoo automatically calculates the probability of winning each lead using a method called *predictive
lead scoring*.

Predictive lead scoring
=======================

Predictive lead scoring is a machine-learning model that uses historical data from Odoo *CRM* to
score open leads/opportunities.

As a company processes opportunities through the CRM pipeline, Odoo collects data on which
opportunities are won and lost. Predictive lead scoring uses this data to predict the probability
of winning each new lead or opportunity.

The more opportunities that are sent through the CRM pipeline, the more data Odoo collects,
resulting in more accurate probabilities.

Specifically, Odoo's predictive lead scoring uses the *naive Bayes* probability model:

.. math::
   \begin{equation}
   P(A | B) = \frac{P(A) \times P(B | A)}{P(B)}
   \end{equation}

The probability of success of each opportunity is displayed on the opportunity form, and it updates
automatically as the opportunity progresses through the CRM pipeline.

.. image:: lead_scoring/probability-opportunity-form.png
   :align: center
   :alt: The probability of success displayed on the opportunity form.

When an opportunity moves to the next stage, its probability of success automatically increases
according to the predictive lead scoring algorithm.

Configuration
-------------

Predictive lead scoring is always active in Odoo *CRM*. However, the variables used to calculate the
probability of success can be customized in the settings.

To customize the variables used by predictive lead scoring, go to :menuselection:`CRM -->
Configuration --> Settings`. Under :guilabel:`Predictive Lead Scoring`, click on the
:guilabel:`Update Probabilities` button.

Then, click on the drop-down menu to choose which variables the predictive lead scoring feature
will take into account.

.. image:: lead_scoring/update-probabilities.png
   :align: center
   :alt: The Update Probabilities window in the Predictive Lead Scoring settings.

Any number of the following variables can be activated:

- :guilabel:`State`: the geographical state from which the opportunity originates
- :guilabel:`Country`: the geographical country from which the opportunity originates
- :guilabel:`Phone Quality`: whether or not a phone number is listed for the opportunity
- :guilabel:`Email Quality`: whether or not an email address is listed for the opportunity
- :guilabel:`Source`: the source of an opportunity (e.g. search engine, social media)
- :guilabel:`Language`: the spoken language specified on the opportunity
- :guilabel:`Tags`: the tags placed on the opportunity

.. note::
   The variables `Stage` and `Team` are always in effect. `Stage` refers to the CRM pipeline stage
   that an opportunity is in. `Team` refers to the sales team that is assigned to an opportunity.
   Predictive lead scoring *always* takes into account these two variables, regardless of which
   optional variables are selected.

Next, click on the date field next to the option :guilabel:`Consider leads created as of the:` to
select the date from which predictive lead scoring will begin its calculations.

Lastly, click :guilabel:`Confirm` to save changes.

Change the probability manually
-------------------------------

An opportunity's probability of success can be changed manually on the opportunity form. Click on
the probability number to edit it.

.. important::
   Manually changing the probability removes the automatic probability updates for that
   opportunity. The probability will no longer update automatically as the opportunity moves
   through each stage of the pipeline.

To reactivate automatic probability, click on the gear icon next to the probability percentage.

.. image:: lead_scoring/probability-gear-icon.png
   :align: center
   :alt: The gear icon used to reactivate automatic probability on an opportunity form.

Assign leads based on probability
=================================

Odoo *CRM* can assign leads/opportunities to sales teams and salespeople based on specified rules.
Create assignment rules based on the leads' probability of success to prioritize those that are
more likely to result in deals.

Configure rule-based assignment
-------------------------------

To activate *rule-based assignment*, navigate to :menuselection:`CRM --> Configuration -->
Settings`, and activate :guilabel:`Rule-Based Assignment`.

The rule-based assignment feature can be set to run :guilabel:`Manually`, meaning an Odoo user must
manually trigger the assignment, or :guilabel:`Repeatedly`, meaning Odoo will automatically trigger
the assignment according to the chosen time period.

To set up automatic lead assignment, select :guilabel:`Repeatedly` for the :guilabel:`Running`
section. Then, customize how often Odoo will trigger the automatic assignment in the
:guilabel:`Repeat every` section.

.. image:: lead_scoring/rule-based-assignment.png
   :align: center
   :alt: The Rule-Based Assignment setting in CRM settings.

If rule-based assignment is set to run :guilabel:`Repeatedly`, the assignment can still be
triggered manually using the circular arrow icon in the :guilabel:`Rule-Based Assignment` settings
(or using the :guilabel:`Assign Leads` button on the sales team configuration page).

Configure assignment rules
--------------------------

Next, configure the *assignment rules* for each sales team and/or salesperson. These rules
determine which leads Odoo assigns to which people. To get started, navigate to :menuselection:`CRM
--> Configuration --> Sales Teams`, and select a sales team.

On the sales team configuration form, under :guilabel:`Assignment Rules`, click on :guilabel:`Edit
Domain` to configure the rules that Odoo uses to determine lead assignment for this sales team. The
rules can include anything that may be relevant for this company or team, and any number of rules
can be added.

Click :guilabel:`Add Filter` to start creating assignment rules. Click on the :guilabel:`+` sign on
the right of the assignment rule to add another line. Click on the :guilabel:`x` symbol to remove
the line.

To create an assignment rule based on an opportunity's probability of success, click on the far
left drop-down menu of an assignment rule line, and select :guilabel:`Probability`.

From the middle drop-down menu, select the desired equation symbol—most likely the symbol for
*greater than*, *less than*, *greater than or equal to*, or *less than or equal to*.

In the far right space, enter the desired number value of the probability. Finally, click
:guilabel:`Save` to save changes.

.. example::
   To configure an assignment rule such that a sales team receives leads that have a probability of
   success of 20% or greater, create a :guilabel:`Domain` line that reads: `Probability >= 20`.

   .. image:: lead_scoring/probability-domain.png
      :align: center
      :alt: Sales team domain set to probability greater than or equal to twenty percent.

Separate assignment rules can also be configured for individual team members. From the sales team
configuration page, click on a team member in the :guilabel:`Members` tab, then edit the
:guilabel:`Domain` section. Click :guilabel:`Save` to save changes.

If automatic lead assignment is configured in the settings, both the sales team and individual team
members have the option to :guilabel:`Skip auto assignment`. Check this box to omit a particular
sales team or salesperson from being assigned leads automatically by Odoo's rule-based assignment
feature. If :guilabel:`Skip auto assignment` is activated, the sales team or salesperson can still
be assigned leads manually.

To manually assign leads to this sales team, click on the :guilabel:`Assign Leads` button at the
top of the sales team configuration page. This will assign any leads that are currently unassigned
and match this team's specified domain.
