==============================
Continuous product improvement
==============================

.. |MO| replace:: :abbr:`MO (Manufacturing Order)`
.. |MOs| replace:: :abbr:`MOs (Manufacturing Orders)`
.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`
.. |ECO| replace:: :abbr:`ECO (Engineering Change Order)`
.. |QCP| replace:: :abbr:`QCP (Quality Control Point)`
.. |PLM| replace:: :abbr:`PLM (Product Lifecycle Management)`
.. |BoMs| replace:: :abbr:`BoMs (Bills of Materials)`

*Continuous improvement* is a general philosophy intended to help individuals and organizations
constantly improve themselves and the work they produce.

There are a variety of different methodologies that fall under the umbrella of continuous
improvement. These include kaizen, six sigma, and lean, among others. While the specific steps of
each method differ, their goal remains the same: implement a process by which improvement is a
perpetual goal, rather than a one-time accomplishment.

The sections below contain details about how Odoo can be used to implement four general steps common
to many of the most popular continuous improvement strategies, with links to documentation about
configuring the necessary features. The final section details how a specific company might configure
these Odoo implementations within their organization.

#. :ref:`manufacturing/workflows/ci-identify`
#. :ref:`manufacturing/workflows/ci-suggest`
#. :ref:`manufacturing/workflows/ci-implement`
#. :ref:`manufacturing/workflows/ci-review`

.. important::
   Continuous improvement is not a one-size-fits-all methodology. While most strategies include
   between four and six steps, proper implementation requires developing a system tailored to the
   specific needs of each company.

   This is not a limitation, but rather a benefit, as it makes the methodology flexible enough to
   adapt to almost any use case. Odoo, in particular, adapts well to this flexibility, as it can be
   configured to meet the needs of almost any workflow.

   As such, it is important to remember the content below only provides *examples* of how Odoo
   *might* be used. They should be viewed as more of a starting point, rather than a concrete
   outline that every organization must follow.

.. _manufacturing/workflows/ci-identify:

Identify problems
=================

Before improvement can begin, it is necessary to determine where improvement is necessary. This is
where identifying problems comes into play. Two of the best Odoo apps for identifying problems with
products or processes are *Helpdesk* and *Quality*.

Helpdesk
--------

The *Helpdesk* app is useful for receiving feedback from outside of the organization, like from
clients or customers. This is accomplished by implementing one (or more) of the methods for
:doc:`receiving tickets <../../../services/helpdesk/overview/receiving_tickets>`, including email
aliases, live chat conversations, and website forms.

Using these methods, customers can submit feedback about problems, which is then reviewed by a
member of a :doc:`helpdesk team <../../../services/helpdesk>`. Depending on the outcome of the
review, the team member may decide to take further action to ensure the issue is addressed. This can
include creating a :doc:`quality alert <../../quality/quality_management/quality_alerts>`.

Quality
-------

The *Quality* app is useful for receiving feedback from *within* the organization, like from
employees.

One method for accomplishing this is to set up a :doc:`quality control point
<../../quality/quality_management/quality_control_points>` (QCP). A |QCP| is used to automatically
create quality checks at regular intervals, prompting employees to inspect, and confirm, the quality
of a product.

If an issue is found, an employee can then create a :doc:`quality alert
<../../quality/quality_management/quality_alerts>` to notify a quality team. Quality alerts can also
be created independent of a |QCP|, in the event that an employee discovers an issue without being
prompted to check for one. This is a great way for customer support employees to notify a quality
team of an issue brought to their attention by a customer ticket.

.. _manufacturing/workflows/ci-suggest:

Suggest improvements
====================

Once a problem is identified, the next step is to put forward ideas for how to address the problem.
As with identifying problems, the *Quality app* is also useful for suggesting improvements. In
addition, the *PLM* (*Product Lifecycle Management*) app can be used for this purpose, as well.

Quality
-------

When creating a :doc:`quality alert <../../quality/quality_management/quality_alerts>` to bring an
issue to the attention of a quality team, the :guilabel:`Corrective Actions` and
:guilabel:`Preventive Actions` tabs can be used to provide feedback about how the issue can be
addressed.

The :guilabel:`Corrective Actions` tab is used to suggest a method for fixing items affected by the
issue. For example, `Screw the bolts on tighter, so the seat stays in place`.

The :guilabel:`Preventive Actions` tab is used to suggest a method for preventing the issue from
occurring in the future. For example, `Do not tighten the screws too much, or they will be
stripped`.

The quality team that reviews the alert sees these suggested actions, and can take them into account
when deciding how to address the issue.

PLM
---

The |PLM| app is used to manage the lifecycle of a product from its introduction through each
successive version. As such, it is useful for testing ideas for product improvements.

Using :doc:`engineering change orders <../../plm/manage_changes/engineering_change_orders>`, product
management teams can create new iterations of product |BoMs|, adding or removing specific components
or operations, as needed. The products created using these |BoMs| are put through a review process
to confirm the effectiveness of the changes.

.. _manufacturing/workflows/ci-implement:

Implement strategies
====================

Implementing strategies involves putting the proposed solutions from the suggest improvements step
into action. The |PLM| app continues to be useful during this step, as it can be configured to make
|BoM| updates. The *Field Service* app can also be used by certain companies to make improvements to
products that have already been sold to customers.

PLM
---

Once |BoM| changes have gone through the proper review process, they can be approved, and the
updated |BoM| put into use. This is accomplished by configuring one of the |ECO| review stages to
:ref:`apply the changes <plm/eco/apply-changes>` made to the |BoM|, at which point the updated |BoM|
becomes available for new |MOs|.

Product |BoMs| can continue to be updated, as needed. The :doc:`version control
<../../plm/manage_changes/version_control>` features of the |PLM| app allow for easy management of
all versions of a given |BoM|.

Field Service
-------------

The |PLM| app is a great way to make changes to product |BoMs|. However, these changes only affect
products produced using the new |BoM|. If a defective product has already been sold to a customer,
it may be necessary to repair (or update) that product.

In such a case, the *Field Service* app can be used to schedule :doc:`onsite interventions
<../../../services/field_service/creating_tasks>`. These interventions allow service
technicians (or other employees) to be sent to a customer's location to address an issue with a
product.

.. _manufacturing/workflows/ci-review:

Review actions
==============

Reviewing actions is where the "continuous" part of continuous improvement comes into play, as it
allows an organization to evaluate the decisions made in the previous steps. As such, this step is,
essentially, returning to the beginning of the process, so that additional problems can be
identified and addressed.

This means that the *Helpdesk* and *Quality* apps should be used again to receive customer and
employee feedback. Another app that may be useful at this stage is the *Surveys* app.

Surveys
-------

After implementing changes to a product or process, it may be wise to solicit customers for their
feedback directly, rather than waiting to hear from them of their own volition. This may bring to
light feedback that customers may have otherwise neglected to share.

One of the best ways to accomplish this is through the :doc:`Surveys <../../../marketing/surveys>`
app. Creating a survey, and sending it to customers who receive an updated product, increases the
likelihood of receiving relevant feedback about the product.

.. admonition:: Example workflow: coat rack product improvement
   :class: alert alert-success

   *Wood Hut* is a manufacturer of fine wood products. They are committed to manufacturing products
   of the highest-possible quality, and are always looking for ways to improve the products they
   sell, along with the processes used to create them.

   Wood Hut uses the Odoo platform to manage every element of their production, fulfillment, and
   customer satisfaction processes. They have developed a custom product improvement workflow that
   incorporates the Helpdesk, Quality, PLM, and Manufacturing apps.

   One of Wood Hut's most popular products is their *coat rack*. It's made entirely of oak, and
   customers describe it as "sleek and elegant." However, recent customer feedback about the coat
   rack has brought attention to quality issues that necessitate revising the current manufacturing
   process.

   The product revision workflow begins when the customer service team receives a ticket in the
   Helpdesk app from a customer having problems with the coat rack she purchased. The customer,
   Abigail Peterson, has found that her coat rack falls over when more than five coats are hanging
   from it. This is a major issue, as the coat rack has enough dowels for six coats.

   .. image:: continuous_improvement/helpdesk-ticket.png
      :align: center
      :alt: A Helpdesk ticket about an issue with the coat rack product.

   Marc, the customer service employee assigned to the helpdesk ticket, opens the Quality app, and
   creates a new quality alert. He tags the *Production Quality Team* and assigns Julie Andreson as
   the quality employee responsible for the alert.

   Julie reviews the alert, and consults with her team about the best course of action. They decide
   that it is necessary to revise the product's |BoM| to prevent the issue from occurring in the
   future, which Julie notes in the :guilabel:`Corrective Actions` tab of the quality alert.

   .. image:: continuous_improvement/quality-alert.png
      :align: center
      :alt: A quality alert created about the issue with the coat rack product.

   Then, Julie messages product engineer, Joe Kazan in the chatter of the quality alert to bring it
   to his attention. Joe opens the |PLM| app and creates a new |ECO|, noting the problem with the
   coat rack, and suggesting that a change to the product's |BoM| may be necessary.

   .. image:: continuous_improvement/eco.png
      :align: center
      :alt: An ECO created to update the coat rack product's BoM.

   Joe clicks :guilabel:`Start Revision`, and then the :guilabel:`Revision` smart button to open
   version two of the coat rack's |BoM|. This |BoM| was created alongside the |ECO|, and remains
   archived until it is approved.

   After some testing, Joe discovers that adding a metal *support rod* to the coat rack strengthens
   it, allowing the rack to hold six or more coats without falling over. He updates the |BoM| to
   include the support rod as one of the components, and adds an extra operation to make sure it is
   installed during the manufacturing process. Finally, he leaves a message in the chatter of the
   |ECO|, letting his manager, Jose, know that it is ready for review.

   .. image:: continuous_improvement/bom.png
      :align: center
      :alt: The coat rack BoM, updated to add an extra component and operation.

   Jose reviews the changes, and confirms they are an effective method for addressing the problem
   with the coat rack. He moves the |ECO| to the *Approved* stage, which makes version two of the
   coat rack |BoM| the current version.

   Now, each time an |MO| is created to produce a coat rack, the updated |BoM| is automatically
   selected. Wood Hut begins producing the improved coat rack, and customer feedback confirms that
   the new version has addressed the problem with its predecessor.

   Using the Odoo platform, Wood Hut has implemented an end-to-end product improvement process.
   Since the essential elements of this process (customer feedback, quality control, etc.) are
   always functioning, it can be reused to continuously update products and processes.
