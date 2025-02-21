:show-content:

=============
Documentation
=============

.. toctree::
   :titlesonly:

   documentation/content_guidelines
   documentation/rst_guidelines

This introductory guide will help you acquire the tools and knowledge needed to contribute to the
documentation.

Read the :ref:`introduction to the reStructuredText language <contributing/documentation/rst-intro>`
if you are not familiar with it. Then, there are two courses of action to start contributing to the
documentation:

- **For minor changes**, such as adding a paragraph or fixing a typo, we recommend **using the
  GitHub interface**. This is the easiest and fastest way to submit changes, and it is suitable for
  non-technical people. Jump directly to the :ref:`contributing/documentation/first-contribution`
  section to get started.
- **For more complex changes**, such as adding a new page, it is necessary to **use Git** and work
  from a local copy of the documentation. Follow the instructions in the
  :ref:`contributing/documentation/setup` section first to prepare your environment.

.. seealso::
   :doc:`Discover other ways to contribute to Odoo <../contributing>`

.. _contributing/documentation/rst-intro:

reStructuredText (RST)
======================

The documentation is written in **reStructuredText** (RST), a `lightweight markup language
<https://en.wikipedia.org/wiki/Lightweight_markup_language>`_ consisting of regular text augmented
with markup, which allows including headings, images, notes, and so on. :abbr:`RST
(reStructuredText)` is easy to use, even if you are not familiar with it.

.. important::
   Be mindful of our :doc:`content <documentation/content_guidelines>` and
   :doc:`RST <documentation/rst_guidelines>` guidelines as you write documentation. This ensures
   that the documentation stays consistent and facilitates the approval of changes by the Odoo team.

.. _contributing/documentation/setup:

Environment setup
=================

The instructions below help you prepare your environment for making local changes to the
documentation and then push them to GitHub. Skip this section and go to
:ref:`contributing/documentation/first-contribution` if you have already completed this step or want
to make changes from the GitHub interface.

#. First, `create a GitHub account <https://github.com/join>`_. Odoo uses GitHub to manage the
   source code of its products, and this is where you will submit your changes.
#. `Generate a new SSH key and register it on your GitHub account
   <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>`_.
#. Go to `github.com/odoo/documentation <https://github.com/odoo/documentation>`_ and click on the
   :guilabel:`Fork` button in the top right corner to create a fork (:dfn:`your own copy`) of the
   repository on your account. This creates a copy of the codebase to which you can make changes
   without affecting the main codebase. Skip this step if you work at Odoo.
#. .. include:: install_git.rst
#. Configure Git to identify yourself as the author of your future contributions. Enter the same
   email address you used to register on GitHub.

   .. code-block:: console

      $ git config --global user.name "Your Name"
      $ git config --global user.email "youremail@example.com"

#. Clone the sources with Git and navigate into the local repository.

   .. code-block:: console

      $ git clone git@github.com:odoo/documentation.git
      $ cd documentation

#. Configure Git to push changes to your fork rather than to the main codebase. In the commands
   below, replace `<your_github_account>` with the name of the GitHub account on which you created
   the fork. Skip this step if you work at Odoo.

   .. code-block:: console

      $ git remote add dev git@github.com:<your_github_account>/documentation.git

#. Configure Git to ease the collaboration between writers coming from different systems.

   .. tabs::

      .. group-tab:: Linux and macOS

         .. code-block:: console

            $ git config --global core.autocrlf input
            $ git config commit.template `pwd`/commit_template.txt

      .. group-tab:: Windows

         .. code-block:: console

            $ git config --global core.autocrlf true
            $ git config commit.template %CD%\commit_template.txt

#. Install the latest release of `Python <https://wiki.python.org/moin/BeginnersGuide/Download>`_
   and `pip <https://pip.pypa.io/en/stable/installation/>`_.
#. Install the Python dependencies of the documentation with pip.

   .. code-block:: console

      $ pip install -r requirements.txt

   Verify that the installation directory of the Python dependencies is included in your system's
   `PATH` variable.

   .. tabs::

      .. group-tab:: Linux and macOS

         Follow the `guide to update the PATH variable on Linux and macOS
         <https://unix.stackexchange.com/a/26059>`_ with the installation path of the Python
         dependencies (by default :file:`~/.local/bin`).

      .. group-tab:: Windows

         Follow the `guide to update the PATH variable on Windows
         <https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/>`_
         with the installation path of the Python dependencies.

#. Install Make.

   .. tabs::

      .. group-tab:: Linux

         .. code-block:: console

            $ sudo apt install make -y

      .. group-tab:: macOS

         Follow the `guide to install Make on macOS <https://formulae.brew.sh/formula/make>`_

      .. group-tab:: Windows

         Follow the `guide to install Make on Windows
         <https://www.technewstoday.com/install-and-use-make-in-windows>`_.

#. `Install pngquant <https://pngquant.org/>`_.
#. You are now ready to :ref:`make your first contribution
   <contributing/documentation/first-contribution>` with Git.

.. _contributing/documentation/first-contribution:

Contributing to the documentation
=================================

.. tabs::

   .. tab:: Contribute from the GitHub interface

      #. First, `create a GitHub account <https://github.com/join>`_. Odoo uses GitHub to manage the
         source code of its products, and this is where you will submit your changes.
      #. Verify that you are browsing the documentation in the version that you intend to change.
         The version can be selected from the dropdown in the top menu.
      #. Head to the page that you want to change and click on the :guilabel:`Edit on GitHub` button
         in the top right corner of the page.
      #. Click on the :guilabel:`Fork this repository` button to create a fork (:dfn:`your own
         copy`) of the repository on your account. This creates a copy of the codebase to which you
         can make changes without affecting the main codebase. Skip this step if you work at Odoo.

         .. image:: documentation/fork-repository.png
            :scale: 60%

      #. Make the desired changes while taking care of following the :doc:`content
         <documentation/content_guidelines>` and :doc:`RST <documentation/rst_guidelines>`
         guidelines.

         .. tip::
            Click on the :guilabel:`Preview changes` button to review your contribution in a more
            human-readable format. Be aware that the preview is not able to handle all markups
            correctly. Notes and tips, for instance, are shown as plain text.

      #. Scroll to the bottom of the page and fill out the small form to propose your changes. In
         the first text box, write a very short summary of your changes. For instance, "Fix a typo"
         or "Add documentation for invoicing of sales orders." In the second text box, explain *why*
         you are proposing these changes. Then, click on the :guilabel:`Propose changes` button.

         .. image:: documentation/propose-changes.png
            :scale: 60%

      #. Review your changes and click on the :guilabel:`Create pull request` button.
      #. Tick the :guilabel:`Allow edits from maintainer` checkbox. Skip this step if you work at
         Odoo.
      #. Review the summary that you wrote about your changes and click on the :guilabel:`Create
         pull request` button again.
      #. At the bottom of the page, check the mergeability status and address any issues.
      #. As soon as your :abbr:`PR (Pull Request)` is ready for merging, a member of the Odoo team
         is automatically assigned for review. If the reviewer has questions or remarks, they will
         post them as comments and you will be notified by email. Those comments must be resolved
         for the contribution to go forward.

      #. Once your changes are approved, the reviewer merges them and they appear online the next
         day.

   .. tab:: Contribute with Git

      .. important::
         Some steps of this guide require to be comfortable with Git. Here are some `tutorials
         <https://www.atlassian.com/git/tutorials>`_ and an `interactive training
         <https://learngitbranching.js.org/>`_ if you are stuck at some point.

      Now that your environment is set up, you can start contributing to the documentation. In a
      terminal, navigate to the directory where you cloned the sources and follow the guide below.

      #. Choose the version of the documentation to which you want to make changes. Keep in mind
         that contributions targeting an :doc:`unsupported version of Odoo
         </administration/supported_versions>` are not accepted. This guide assumes that the changes
         target the documentation of Odoo {CURRENT_VERSION}, which corresponds to branch
         `{CURRENT_BRANCH}`.
      #. Create a new branch starting from branch {CURRENT_BRANCH}. Prefix the branch name with the
         base branch: `{CURRENT_BRANCH}-...`. If you work at Odoo, suffix the branch name with your
         Odoo handle: `{CURRENT_BRANCH}-...-xyz`.

         .. example::

            .. code-block:: console

               $ git switch -c {CURRENT_BRANCH}-explain-pricelists

            .. code-block:: console

               $ git switch -c {CURRENT_BRANCH}-explain-pricelists-xyz

      #. Make the desired changes while taking care of following the :doc:`content
         <documentation/content_guidelines>` and :doc:`RST <documentation/rst_guidelines>`
         guidelines.
      #. Compress all PNG images that were added or modified.

         .. code-block:: console

            $ pngquant path/to/image.png
            $ mv path/to/image-fs8.png path/to/image.png

      #. Write a `redirect rule
         <https://github.com/odoo/documentation/tree/{BRANCH}/redirects/MANUAL.md>`_ for every RST
         file that were renamed.
      #. Build the documentation with :command:`make`. Then, open :file:`_build/index.html` in a web
         browser to browse the documentation with your changes.

         .. tip::
            Use :command:`make help` to learn about other useful commands.

      #. Commit your changes. Write a clear commit message as instructed in the :doc:`Git guidelines
         <development/git_guidelines>`.

         .. code-block:: console

            $ git add .
            $ git commit

      #. Push your changes to your fork, for which we added the remote alias `dev`.

         .. example::

            .. code-block:: console

               $ git push -u dev {CURRENT_BRANCH}-explain-pricelists

         If you work at Odoo, push your changes directly to the main codebase whose remote alias is
         `origin`.

         .. example::

            .. code-block:: console

               $ git push -u origin {CURRENT_BRANCH}-explain-pricelists-xyz

      #. Open a :abbr:`PR (Pull Request)` on GitHub to submit your changes for review.

         #. Go to the `compare page of the odoo/documentation codebase
            <https://github.com/odoo/documentation/compare>`_.
         #. Select **{CURRENT_BRANCH}** for the base.
         #. Click on :guilabel:`compare across forks`.
         #. Select **<your_github_account>/odoo** for the head repository. Replace
            `<your_github_account>` with the name of the GitHub account on which you created the
            fork. Skip this step if you work at Odoo.
         #. Review your changes and click on the :guilabel:`Create pull request` button.
         #. Tick the :guilabel:`Allow edits from maintainer` checkbox. Skip this step if you work at
            Odoo.
         #. Complete the description and click on the :guilabel:`Create pull request` button again.

      #. At the bottom of the page, check the mergeability status and address any issues.
      #. As soon as your :abbr:`PR (Pull Request)` is ready for merging, a member of the Odoo team
         is automatically assigned for review. If the reviewer has questions or remarks, they will
         post them as comments and you will be notified by email. Those comments must be resolved
         for the contribution to go forward.
      #. Once your changes are approved, the reviewer merges them and they appear online the next
         day.
