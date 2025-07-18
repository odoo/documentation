============================
Visibility and collaboration
============================

Odoo allows you to set custom visibility settings for each project, enabling you to make your
project available to everyone in your organization or restrict access to certain internal or
external users.

.. _project/visibility_collaboration/visibility-settings:

Visibility settings
===================

Open the :guilabel:`Project` app, click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis-v)`
icon on a project’s card, and click on :guilabel:`Settings` in the drop-down menu. Then click on the
:guilabel:`Settings` tab and choose among the three :guilabel:`Visibility` options:

- :guilabel:`Invited internal users (private)`: When following a project, internal users will have
  access to all of its tasks without distinction. Otherwise, they will only have access to the
  specific tasks they are following. A user with the Project app administrator access rights level
  can still access the project and its tasks, even if they are not listed as followers.
- :guilabel:`All internal users`: All internal users can access the project and all of its tasks
  without distinction.
- :guilabel:`Invited portal users and all internal users (public)`: All internal users can access
  the project and all of its tasks without distinction. When following a project, portal users only
  have access to the specific tasks they are following. This option is selected by default.

.. _project/visibility_collaboration/external-users:

Inviting external users
=======================

When selecting :guilabel:`Invited portal users and all internal users (public)`, a
:guilabel:`Share Project` button appears on top of the project’s settings page. Click on it to open
a pop-up window that offers two options to give external users access to the project:

#. Copy and share the :guilabel:`Public Link` displayed on top of the pop-up window. Anyone with
   this link can access the project in read mode.
#. Or select a :guilabel:`Collaborator`, choose the :guilabel:`Access Mode`, and check the box to
   send an invitation to their email address.

   There are three types of :guilabel:`Access Mode` for your collaborators:

   - :guilabel:`Read`: collaborators can view tasks but cannot edit them.
   - :guilabel:`Edit with limited access`: Collaborators can view and edit tasks they follow in the
     Kanban view.
   - :guilabel:`Edit`: Collaborators can view and edit all tasks in the Kanban view and choose which
     tasks they want to follow.

To revoke an invited collaborator's access, click the :icon:`fa-trash-o` :guilabel:`(fa-trash-o)`
icon next to their name, and click :guilabel:`Save`: to confirm.

.. note::
   In any case, an internal user with no project access rights can still access a task, provided
   that they are given the corresponding URL (and that they are part of the followers if the project
   is private).
