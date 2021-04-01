=============================
Assign leads based on scoring
=============================

With *Lead Scoring* you can automatically rank your leads based on
selected criteria.

For example, you could score customers higher when they come from the same country higher as your
company or from visiting specific pages on your website.


Configuration
=============

To use scoring, install the free module *Lead Scoring* under your *Apps* page (only available in
Odoo Enterprise).

.. image:: lead_scoring/lead-scoring-module.png
   :align: center
   :alt: Lead Scoring Module Installation

Create scoring rules
====================

You now have a new tab in your *CRM* app called *Leads* where you can manage your scoring rules.

Here's an example of a Canadian lead. You can modify your rules for whatever criteria you want to
score leads on. You can add as many criteria as you would like.

.. image:: lead_scoring/scoring-example.png
   :align: center
   :alt: Score Ruling Example

Every lead without a score is automatically be scanned every hour and is assigned the correct
score according to your configured scoring rules.

.. image:: lead_scoring/scoring-section-on-lead.png
   :align: center
   :alt: Scoring Section on a Lead

Assign leads
============

Once the score is computed, leads can be assigned to specific teams using the same domain
mechanism. To do so, head to :menuselection:`CRM --> Leads --> Team Assignment` and apply a
specific domain to each team. This domain can include scores.

.. image:: lead_scoring/team-assignation.png
   :align: center
   :alt: Team Assignments using Domains

If you want more granularity, you can assign leads to a specific salesperson on the team using
further refined domains.

To do so go to :menuselection:`CRM --> Leads --> Leads Assignment`.

.. image:: lead_scoring/lead-assignment-filters.png
   :align: center
   :alt: Lead Assignments

.. note::
   The team & leads assignments are assigned to unassigned leads once per day.

Evaluate & use the unassigned leads
===================================

Once your scoring rules are in place, you likely will still have some unassigned leads. Some of
these leads could still transition into an opportunity, so ensuring they are handled is both
useful and important.

On your leads overview page, you filter for your unassigned leads.

.. image:: lead_scoring/unassigned-filter.png
   :align: center
   :alt: Filtering for Unassigned Leads

.. note::
    You can also easily find unassigned leads by using the :menuselection:`Email Marketing` or
    :menuselection:`Marketing Automation` apps to create a re-engagement campaign.
