:show-content:

===========
Development
===========

.. toctree::
   :titlesonly:

   development/coding_guidelines
   development/git_guidelines

If you are reading this, chances are that you are interested in learning how to contribute to the
codebase of Odoo. Whether that's the case or you landed here by accident, we've got you covered!

.. seealso::
   :doc:`Discover other ways to contribute to Odoo <../contributing>`

When you feel ready, jump to the :ref:`contributing/development/setup` section to begin your journey
in contributing to the development of Odoo.

.. _contributing/development/setup:

Environment setup
=================

The instructions below help you prepare your environment for making local changes to the codebase
and then push them to GitHub. Skip this section and go to
:ref:`contributing/development/first-contribution` if you have already completed this step.

#. .. include:: create_github_account.rst
#. .. include:: configure_github_account.rst
#. Go to `github.com/odoo/odoo <https://github.com/odoo/odoo>`_ and click on the :guilabel:`Fork`
   button in the top right corner to create a fork (:dfn:`your own copy`) of the repository on your
   account. Do the same with `github.com/odoo/enterprise <https://github.com/odoo/enterprise>`_ if
   you have access to it. This creates a copy of the codebase to which you can make changes without
   affecting the main codebase. Skip this step if you work at Odoo.
#. .. include:: install_git.rst
#. .. include:: configure_git_authorship.rst
#. :doc:`Install Odoo from the sources <../administration/on_premise/source>`. Make sure to fetch
   the sources through Git with SSH.
#. Configure Git to push changes to your fork(s) rather than to the main codebase. If you work at
   Odoo, configure Git to push changes to the shared forks created on the account **odoo-dev**.

   .. tabs::

      .. tab:: Link Git with your fork(s)

         In the command below, replace `<your_github_account>` with the name of the GitHub account
         on which you created the fork(s).

         .. code-block:: console

            $ cd /CommunityPath
            $ git remote add dev git@github.com:<your_github_account>/odoo.git

         If you have access to `odoo/enterprise`, configure the related remote too.

         .. code-block:: console

            $ cd /EnterprisePath
            $ git remote add dev git@github.com:<your_github_account>/enterprise.git

      .. tab:: Link Git with odoo-dev

         .. code-block:: console

            $ cd /CommunityPath
            $ git remote add dev git@github.com:odoo-dev/odoo.git
            $ git remote set-url --push origin you_should_not_push_on_this_repository

            $ cd /EnterprisePath
            $ git remote add dev git@github.com:odoo-dev/enterprise.git
            $ git remote set-url --push origin you_should_not_push_on_this_repository

#. That's it! You are ready to :ref:`make your first contribution
   <contributing/development/first-contribution>`.

.. _contributing/development/first-contribution:

Make your first contribution
============================

.. important::
   - Odoo development can be challenging for beginners. We recommend you to be knowledgeable enough
     to code a small module before contributing. If that is not the case, take some time to go
     through the :doc:`developer tutorials </developer/howtos>` to fill in the gaps.
   - Some steps of this guide require to be comfortable with Git. Here are some `tutorials
     <https://www.atlassian.com/git/tutorials>`_ and an `interactive training
     <https://learngitbranching.js.org/>`_ if you are stuck at some point.

Now that your environment is set up, you can start contributing to the codebase. In a terminal,
navigate to the directory where you installed Odoo from sources and follow the guide below.

#. Choose the version of Odoo to which you want to make changes. Keep in mind that contributions
   targeting an :doc:`unsupported version of Odoo </administration/supported_versions>` are not
   accepted. This guide assumes that the changes target Odoo {CURRENT_VERSION}, which corresponds to
   branch `{CURRENT_BRANCH}`.
#. Create a new branch starting from branch {CURRENT_BRANCH}. Prefix the branch name with the base
   branch: `{CURRENT_BRANCH}-...`. If you work at Odoo, suffix the branch name with your Odoo
   handle: `{CURRENT_BRANCH}-...-xyz`.

   .. example::

      .. code-block:: console

         $ git switch -c {CURRENT_BRANCH}-fix-invoices

      .. code-block:: console

         $ git switch -c {CURRENT_BRANCH}-fix-invoices-xyz

#. `Sign the Odoo CLA <{GITHUB_PATH}/doc/cla/sign-cla.md>`_ if not already done. Skip this step if
   you work at Odoo.
#. Make the desired changes to the codebase. When working on the codebase, follow these rules:

   - Keep your changes focused and specific. It is best to work on one particular feature or bug fix
     at a time rather than tackle multiple unrelated changes simultaneously.
   - Respect the `stable policy
     <https://github.com/odoo/odoo/wiki/Contributing#what-does-stable-mean>`_ when working in
     another branch than `master`.
   - Follow the :doc:`coding guidelines <development/coding_guidelines>`.
   - Test your changes thoroughly and :doc:`write tests </developer/reference/backend/testing>` to
     ensure that everything is working as expected and that there are no regressions or unintended
     consequences.

#. Commit your changes. Write a clear commit message as instructed in the :doc:`Git guidelines
   <development/git_guidelines>`.

   .. code-block:: console

      $ git add .
      $ git commit

#. Push your change to your fork, for which we added the remote alias `dev`.

   .. example::

      .. code-block:: console

         $ git push -u dev {CURRENT_BRANCH}-fix-invoices-xyz

#. Open a :abbr:`PR (Pull Request)` on GitHub to submit your changes for review.

   #. Go to the `compare page of the odoo/odoo codebase <https://github.com/odoo/odoo/compare>`_, or
      the `compare page of the odoo/enterprise codebase
      <https://github.com/odoo/enterprise/compare>`_, depending on which codebase your changes
      target.
   #. Select **{CURRENT_BRANCH}** for the base.
   #. Click on :guilabel:`compare across forks`.
   #. Select **<your_github_account>/odoo** or **<your_github_account>/enterprise** for the head
      repository. Replace `<your_github_account>` with the name of the GitHub account on which you
      created the fork or by **odoo-dev** if you work at Odoo.
   #. Click on :guilabel:`Create pull request` to create the :abbr:`PR (Pull Request)` and
      automatically request a review from the code maintainers. If you wish to double-check your
      changes first, or if you work at Odoo and follow an internal process for reviews, click on
      :guilabel:`Create draft pull request`.
   #. Tick the :guilabel:`Allow edits from maintainer` checkbox. Skip this step if you work at Odoo.
   #. Complete the description and click on the :guilabel:`Create pull request` button again.

#. .. include:: check_mergeability_status.rst
#. .. include:: handle_reviews.rst
#. Once your changes are approved, the review merges them and they become available for all Odoo
   users after the next code update!
