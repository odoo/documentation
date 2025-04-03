=========
Approvals
=========

.. |ECO| replace:: :abbr:`ECO (Engineering Change Order)`
.. |ECOs| replace:: :abbr:`ECOs (Engineering Change Orders)`

.. _plm/approvals:

Notify stakeholders and managers automatically by assigning approvers to stages of :ref:`engineering
change orders <plm/eco>` (ECOs) under review. Changes can only be applied after the assigned
approver accepts them. Approvals ensure reviews by team members, which prevents mistakes and
premature actions.

.. seealso::
   :ref:`Stage configuration <plm/eco/stage-config>`

Add approvers
=============

To add an approver, first go to the :menuselection:`PLM app`, and click on the project card of an
|ECO| type to open the Gantt view of the |ECOs|.

On the :guilabel:`Engineering Change Orders` page, hover over the intended stage, and select the
:icon:`fa-gear` :guilabel:`(Actions)` icon. Then, click :guilabel:`Edit` to open a pop-up window.

.. note::
   Approvers can be added to any stage, but they are most essential in the *verification* stage,
   before the final *closing* stage which applies the |ECO| and updates the :abbr:`BoM (Bill of
   Materials)`. This allows stakeholders to control how and when changes are made.

   See the documentation about :ref:`stage types <plm/eco/stage-config>` for more information.

In the :guilabel:`Edit` stage pop-up window, click the :guilabel:`Add a line` button, located under
:guilabel:`Approvals`. Then, type in the position or title of the approver under :guilabel:`Role`
(e.g. `Engineering Manager`, `Quality Team`, etc.), and select the relevant :guilabel:`User` from
the drop-down menu.

.. _plm/approvals/approval-type:

Approval types
--------------

Next, set the :guilabel:`Approval Type` to :guilabel:`Is required to approve`, :guilabel:`Approves,
but the approval is optional`, or :guilabel:`Comments only`.

.. example::
   Assign the `CTO`, "Mitchell Admin," as a required approver for |ECOs| in the `Validated` stage in
   the `New Product Introduction` |ECO| type.

   Approvals from the quality and marketing teams are **not** required to apply changes to the |ECO|
   because their :guilabel:`Approval Type` is set to :guilabel:`Approves, but the approval is
   optional` and :guilabel:`Comments only`, respectively.

   .. image:: approvals/approvers.png
      :alt: Set an approver that "Is required to approve" ECOs in the "Validated" stage.

Manage approvals
================

Approvers can track their to-do approvals by navigating to the :menuselection:`PLM app`, and
selecting the card for an |ECO| type, which shows the count of open tasks assigned to them.

.. image:: approvals/validation-overview.png
   :alt: Display count of validations to-do and buttons to open filtered list of ECOs.

Here's what each button on an |ECO| project card does:

#. The :guilabel:`# Engineering Changes` button displays a count of in-progress |ECOs| of this ECO
   type. Clicking the button opens the Gantt view of the :guilabel:`Engineering Change Orders` page.
#. :guilabel:`My Validations` displays a count of |ECOs| the approver must accept or reject.
   Clicking on this button displays |ECOs| pending approval or rejected (marked with the red
   :guilabel:`Blocked` state).
#. The :guilabel:`All Validations` button shows the count of |ECOs| awaiting approval or rejected by
   any approver. Clicking it reveals these pending |ECOs|.
#. :guilabel:`To Apply` displays a count of |ECOs| to which the user needs to apply changes.
   Clicking on the button displays all the |ECOs| to approve, and apply changes to, in the
   verification stage.

|ECOs| marked with the green :guilabel:`Done` stage have already been approved, and the user needs
to click on the |ECO| to enter the form view, and click the :guilabel:`Apply Changes` button.

.. tip::
   |ECO| approvals can be accessed, managed, and follow-up actions scheduled through *Activities*.
   See the :doc:`Activities documentation <../../../essentials/activities>` to learn more about
   integrating management workflows.

Approve ECOs
------------

Navigate to an |ECO| in a verification stage, while logged in as the assigned approver, to see the
:guilabel:`Approve`, :guilabel:`Reject`, and :guilabel:`Apply Changes` buttons.

To approve the |ECO|, and apply the changes onto the production :abbr:`BoM (Bill of Materials)`,
click :guilabel:`Approve`, and then :guilabel:`Apply Changes`.

Note that the :guilabel:`Apply Changes` button will **not** work unless the :guilabel:`Approve`
button was clicked first. Additionally, the chatter logs the history of the clicked buttons.

.. warning::
   If no approver has the :guilabel:`Is required to approve` approval type, the :guilabel:`Apply
   Changes` button **will work** without requiring the :guilabel:`Approve` button to be clicked
   first.
