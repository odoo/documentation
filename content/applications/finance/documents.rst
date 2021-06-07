=========
Documents
=========

**Odoo Documents** allows you to store, view and manage files within Odoo.

You can upload any type of file (max 64MB per file on Odoo Online/SaaS), and organize them in
various workspaces.

.. seealso::
   - `Odoo Documents: product page <https://www.odoo.com/app/documents>`_

Workflow actions
================

Workflow actions are automated actions you can create and customize at the level of each
workspace. They appear next to a file whenever it meets the criteria you set. That way you can,
for example, add tags to a file or move it to another workspace with a single click. Workflow
actions help you streamline the management of your documents and your overall business operations.

Create workflow actions
-----------------------

To create workflow actions, go to :menuselection:`Documents --> Configuration --> Workspaces` and
select the workspace where the action should apply. Click on the *Actions* smart button, and then
on *Create*.

.. image:: documents/access-workflow-actions.png
   :align: center
   :alt: Workflow actions smart button in Odoo Documents

.. note::
   An action applies to all *Child Workspaces* under the *Parent Workspace* you selected.

.. tip::
   If you use the :ref:`developer mode <developer-mode>`, you can directly access all your actions
   by going to :menuselection:`Documents --> Configuration --> Actions`.

Set the conditions
------------------

After naming your workflow action, you can set the conditions that trigger the appearance of the
action button on the right-side panel when selecting a file.

There are three basic types of conditions you can set:

#. **Tags**: you can both use the *Contains* and *Does not contain* conditions, meaning the files
   *must have* or *mustn't have* the tags set here.

#. **Contact**: the files must be associated with the contact set here.

#. **Owner**: the files must be associated with the owner set here.

.. image:: documents/basic-condition-example.png
   :align: center
   :alt: Example of a workflow action's basic condition in Odoo Documents

.. tip::
   If you don't set any conditions, the action button appears for all files located inside the
   selected workspace.

Advanced condition type: domain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. important::
   It is recommended to have some knowledge of Odoo development to properly configure *Domain*
   filters.

To access the *Domain* condition, the :ref:`developer mode <developer-mode>` needs to be activated.
Once that's done, select the *Domain* condition type, and click on *Add Filter*.

.. image:: documents/activate-domain-condition.png
   :align: center
   :alt: Activating the domain condition type in Odoo Documents

To create a rule, you typically select a field, an operator, and a value. For example, if you want
to add a workflow action to all the PDF files inside a workspace, set the field to *Mime Type*, the
operator to *contains*, and the value to *pdf*.

.. image:: documents/domain-condition-example.png
   :align: center
   :alt: Example of a workflow action's domain condition in Odoo Documents

Click on *Add node* (plus-circle icon) and *Add branch* (ellipsis icon) to add conditions and
sub-conditions. You can then specify if your rule should match *ALL* or *ANY* conditions. You can
also edit the rule directly using the *Code editor*.

.. image:: documents/use-domain-condition.png
   :align: center
   :alt: Add a node or a branch to a workflow action's condition in Odoo Documents

Configure the actions
---------------------

Select the *Actions* tab to set up your action. You can simultaneously:

- **Set Contact**: add a contact to the file, or replace an existing contact with a new one.
- **Set Owner**: add an owner to the file, or replace an existing owner with a new one.
- **Move to Workspace**: move the file to any workspace.
- **Create**: create one of the following items attached to the file in your database:

   - **Product template**: create a product you can edit directly.
   - **Task**: create a Project task you can edit directly.
   - **Signature request**: create a new Sign template to send out.
   - **Sign directly**: create a Sign template to sign directly.
   - **Vendor bill**: create a vendor bill using OCR and AI to scrape information from the file
     content.
   - **Customer invoice**: create a customer invoice using OCR and AI to scrape information from
     the file.
   - **Vendor credit note**: create a vendor credit note using OCR and AI to scrape information
     from the file.
   - **Credit note**: create a customer credit note using OCR and AI to scrape information from
     the file.
   - **Applicant**: create a new HR application you can edit directly.

- **Set Tags**: add, remove, and replace any number of tags.
- **Activities - Mark all as Done**: mark all activities linked to the file as done.
- **Activities - Schedule Activity**: create a new activity linked to the file as configured in
  the action. You can choose to set the activity on the document owner.

.. image:: documents/workflow-action-example.png
   :align: center
   :alt: Example of a workflow action Odoo Documents