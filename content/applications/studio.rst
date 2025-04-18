:show-content:
:hide-page-toc:

======
Studio
======

.. toctree::
   :titlesonly:

   studio/fields
   studio/views
   studio/models_modules_apps
   studio/automated_actions
   studio/pdf_reports
   studio/approval_rules

**Odoo Studio** is a toolbox used to customize Odoo without coding knowledge. For example, in any
app, add or modify:

- :doc:`Fields <studio/fields>`
- :doc:`Views <studio/views>`
- :doc:`Models <studio/models_modules_apps>`
- :doc:`Automation rules <studio/automated_actions>`
- :doc:`Webhooks <studio/automated_actions/webhooks>`
- :doc:`PDF reports <studio/pdf_reports>`
- :doc:`Approval rules <studio/approval_rules>`
- Security rules

Learn how to :doc:`build an app from scratch <studio/models_modules_apps>`.

.. _studio/access:

To access **Studio**, navigate to the app and model you want to modify, then click the
:icon:`oi-studio` (:guilabel:`Toggle Studio`) icon. Alternatively, with any app open, click the
:icon:`oi-studio` (:guilabel:`Toggle Studio`) icon and navigate to the relevant app and model.

To close **Studio**, click :guilabel:`Close` in the upper-right corner.

.. warning::
   Installing **Studio** in an Odoo database on the *Standard* pricing plan automatically triggers
   an upsell to the *Custom* pricing plan.

   - **For yearly or multi-year contracts**: An upsell order is created with a 30-day limit.
   - **For monthly contracts**: The subscription automatically switches to the *Custom* plan and
     the new rate is applied when the next bill is generated.

   For more information, refer to `Odoo's pricing page <https://www.odoo.com/pricing-plan>`_ or
   contact your account manager.

.. seealso::
   `Odoo Tutorials: Studio <https://www.odoo.com/slides/studio-31>`_
