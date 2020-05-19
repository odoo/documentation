:banner: banners/contributing.png

==================
Introduction guide
==================

**First of all, thank you for landing here and helping us improve the user documentation of Odoo!**

This introductory guide will help you acquire the tools and knowledge you need to write
documentation, whether you plan to make a minor content change or document an application from
scratch.

.. note::
   This tutorial only concerns the `user documentation
   <https://www.odoo.com/documentation/user/index.html>`_ of Odoo. The documentation for `developing
   in Odoo <https://www.odoo.com/documentation/master/index.html>`_ in maintained alongside the
   source code of Odoo at `github.com/odoo/odoo <https://github.com/odoo/odoo/tree/master/doc>`_.

.. _contributing/rst-intro:

reStructuredText
================

Our documentation is written in **reStructuredText** (RST), a `lightweight markup language
<https://en.wikipedia.org/wiki/Lightweight_markup_language>`_ consisting of normal text augmented
with markup which allows including headings, images, notes, and so on. This might seem a bit
abstract but there is no need to worry. :abbr:`RST (reStructuredText)` is not hard to learn,
especially if you intend to make only small changes to the content.

If you need to learn about a specific markup, head over to :doc:`our cheat sheet for RST
<rst_cheat_sheet>` which contains all the information that you should ever need for the user
documentation of Odoo.

.. important::
   We kindly ask you to observe a set of :doc:`content <content_guidelines>` and :doc:`RST
   <rst_guidelines>` guidelines as you write documentation. This ensures that you stay consistent
   with the rest of the documentation and facilitates the approval of your content changes as they
   are reviewed by a redactor at Odoo.

.. seealso::
   - :doc:`rst_cheat_sheet`
   - :doc:`rst_guidelines`
   - :doc:`content_guidelines`

.. _contributing/getting-started:

Getting started
===============

As our documentation is maintained on GitHub, you will need a free GitHub account. Click `here
<https://github.com/join>`_ to create one.

Now, depending on whether you want to update existing content, or rather work on new content and
make file changes, you have two courses of action:

#. **For small changes** in ``.rst`` files only, i.e. addition/edition of paragraphs or typos, **we
   suggest that you use the GitHub interface**. This is the easiest and fasted way to submit your
   request for changes for the documentation and is suitable for non-technical people. Read
   :ref:`contributing/github-interface` to learn how to use this method.
#. **For more complex cases**, it is necessary to **use Git and work from a local copy of the
   documentation**. This method seems intimidating but only requires basic knowledge of Git. See
   :ref:`contributing/canonical-git-workflow` for more information on this method.

.. _contributing/github-interface:

Use the GitHub interface
========================

#. Verify that you are browsing the documentation in the version that you intend to change. The
   version can be selected from the dropdown in the top menu.

   .. image:: media/version-selector.png

#. Head over to the page that you want to change and click on the **Edit on GitHub** button in the
   bottom of the left menu.

   .. image:: media/edit-on-github.png

#. If you do not have edit rights on the repository (`odoo/documentation-user
   <https://github.com/odoo/documentation-user>`_), you need to fork it by clicking on the
   appropriate button. In other terms, you create a copy of the entire repository on your own
   account. If you do have the edit rights, skip this step.

   .. image:: media/fork-repository.png

#. Make the appropriate changes while taking care of following the :doc:`guidelines
   <rst_guidelines>`.

#. Click on the **Preview changes** button to review your contribution in a more human-readable
   format. Be aware that the preview is not able to handle all markups correctly. Notes and tips,
   for instance, are not correctly rendered. The version of your content published to the website
   will be, however.

#. Go to the bottom of the page to create a commit (:dfn:`what packs your changes together and
   labels them with a commit message`) of your changes.

   #. | In first text box, describe your changes. For instance, "Fix a typo" and "Add documentation
        for invoicing of sales orders" are two clear commit messages.
      | In the second text box, justify *why* you made these changes, if you feel that it is not
        obvious.
   #. Select the option "Create a new branch for this commit and start a pull request." if you have
      the choice (if you have partial or full edit writes on the repository). If not, skip this
      step.
   #. Click on the green button. It is either labelled "Commit changes" or "Propose file change".

   .. image:: media/commit-changes.png

#. In the dropdown for the selection of the base branch (i.e., the version of the documentation that
   your changes concern), make sure to select the same version as in the first step of this guide
   and click on the **Create pull request** button.

   .. image:: media/select-branches-base.png

#. Double-check your :abbr:`PR (Pull Request)` and, when ready, click again on the **Create pull
   request** button to submit your changes for review by a redactor at Odoo.

   .. image:: media/create-pull-request.png

#. You're done! If your changes are approved straight away they will appear in the documentation the
   very next day. It may also be the case that the reviewer has a question or a remark, so make sure
   to check your notifications or your emails, depending on your account settings.

.. _contributing/canonical-git-workflow:

Use the canonical Git workflow
==============================

.. _contributing/prepare-machine:

Prepare your machine
--------------------

.. _contributing/install-git:

Install Git
~~~~~~~~~~~

We use `Git <https://en.wikipedia.org/wiki/Git>`_ to manage the files of the user documentation.
It is a tool that allows to track the history of changes made to a file and, more importantly, to
work on different versions of those files at the same time. It means that you do not need to worry
about overwriting someone else’s pending work when you start editing the documentation.

You must then configure Git to identify yourself as the author of your future contribution. Enter
the same email address as the one you used to register on GitHub.

#. Download and install **Git** on your machine.
#. Verify that `the installation folder of Git is included in your system's PATH variable
   <win-add-to-path_>`_.
#. Execute the following commands in a terminal:

   .. code-block:: console

      $ git config --global user.name “Your Name”
      $ git config --global user.email “youremail@example.com”

.. _contributing/fetch-sources:

Fetch the sources
~~~~~~~~~~~~~~~~~

As stated earlier, our documentation (in all its versions) is maintained on GitHub at
`github.com/odoo/documentation-user <https://github.com/odoo/documentation-user>`_. A modification
is made by the mean of a :abbr:`PR (Pull Request)` (:dfn:`proposal of content changes`) to allow for
a review of the changes before updating the sources of the documentation.

Prior to submitting a modification, you need to make a copy of the sources and download that copy on
your machine.

#. Go to `github.com/odoo/documentation-user <https://github.com/odoo/documentation-user>`_ and
   click on the **Fork** button in the top right corner.

   .. image:: media/fork-button.png

#. Execute the following commands in a terminal:

   .. code-block:: console

      $ git clone https://github.com/odoo/documentation-user
      $ cd documentation-user/

   .. important::
      If you do not have edit rights on the repository owned by Odoo, replace "odoo" with your
      Github username in the URL of the command above. If you do have edit rights, it is not
      necessary to fork the repository.

#. In order to ease the collaboration between writers coming from many different systems and teams,
   execute the following group of commands that correspond to your :abbr:`OS (Operating System)` in
   a terminal.

   - Windows:

     .. code-block:: doscon

        $ cd documentation-user/
        $ git config --global core.autocrlf true
        $ git config commit.template %CD%\commit_template.txt

   - Linux or Mac OS:

     .. code-block:: console

        $ cd documentation-user/
        $ git config --global core.autocrlf input
        $ git config commit.template `pwd`/commit_template.txt

.. _contributing/python:

Python
~~~~~~

Because the documentation is written in :abbr:`RST (reStructuredText)`, it needs to be built
(:dfn:`converted to HTML`) in order to display nicely. This is done by the documentation generator
which takes the original :abbr:`RST (reStructuredText)` files as input, transforms the markups
in a human-readable format, and outputs HTML files to be read in your web browser.

The documentation generator that we use is called `Sphinx <http://www.sphinx-doc.org/en/master/>`_.
and is written in `Python <https://en.wikipedia.org/wiki/Python_(programming_language)>`_. You have
to install Python in order to use Sphinx. For the record, Sphinx is the program and Python the
programming language, but you do not need to know much more about them so don't panic!

Python comes with its own package manager: `pip
<https://en.wikipedia.org/wiki/Pip_(package_manager)>`_. It allows installing Python dependencies in
a single command.

#. Download and install the latest release of **Python 3** on your machine.
#. Make sure to have **pip** installed on your machine (on Windows, you can install pip alongside
   Python).
#. Execute the following commands in a terminal to verify that both installations finished
   successfully:

   .. code-block:: console

      $ python3 --version
      $ pip3 --version

#. Execute the following commands in a terminal to install the Python dependencies of the
   documentation:

   .. code-block:: console

      $ cd documentation-user/
      $ pip3 install -r requirements.txt

.. note::
   Depending on your :abbr:`OS (Operating System)`, you may need to run the commands ``python`` and
   ``pip`` instead of ``python3`` and ``pip3``

.. _contributing/make:

Make
~~~~

`Make <https://en.wikipedia.org/wiki/Make_(software)>`_ is a tool that packs a bunch of
command-lines into one to be easier to remember and to type. In our case, it is used to execute
complex Sphinx build commands by using a single and simpler one instead.

#. Download and install **Make** on your machine.
#. Verify that `the installation folder of Make is included in your system's PATH variable
   <win-add-to-path_>`_.

.. _contributing/pngquant:

pngquant
~~~~~~~~

`pngquant <https://pngquant.org/>`_ is a tool that we use to compress PNG images so that the
documentation does not end up weighting several Gigabytes in a few year span.

#. Download and install **pngquant** on your machine.
#. Verify that `the installation folder of pngquant is included in your system's PATH variable
   <win-add-to-path_>`_.

.. _contributing/prepare-version:

Prepare your version
--------------------

Now that your machine is all set up, it is time to do the same for your version of the documentation
files. As it would not be convenient to have several people working on the version 13.0 in parallel
(conflicts of content would occur all the time), and in order to be able to create a :abbr:`PR
(Pull Request)`, you must `create a new branch
<https://www.atlassian.com/git/tutorials/using-branches>`_ starting from the branch 13.0. In other
words, you copy the entirety of this version’s files and give it another name. For this example, we
will go with ``13.0-my_contribution``.

Execute the following commands in a terminal to...

#. Navigate to the documentation folder:

   .. code-block:: console

      $ cd documentation-user/

#. Switch to the version 13.0:

   .. code-block:: console

      $ git checkout 13.0

#. Create your own branch which will be a copy of 13.0:

   .. code-block:: console

      $ git checkout -b 13.0-my_contribution

.. _contributing/perform-changes:

Perform your changes
--------------------

You can now perform any change you want to the documentation files. These changes must be compliant
with :abbr:`RST (reStructuredText)` syntax (see :doc:`rst_cheat_sheet`) and with our
:doc:`guidelines <rst_guidelines>`.

.. important::
   If your changes include the addition of a new image, for instance :file:`my_image.png`, proceed
   as follows:

   #. Make sure that the image is in ``.png`` format.
   #. Execute the following commands in a terminal:

      .. code-block:: console

         $ cd path-to-the-directory-of-the-image/
         $ pngquant my_image.png

   #. Delete :file:`my_image.png`.
   #. Rename :file:`my_image-fs8.png` to :file:`my_image.png`.

.. _contributing/preview-changes:

Preview your changes
--------------------

To preview your changes in a generated documentation, proceed as follows:

#. Execute the following commands in a terminal:

   .. code-block:: console

      $ cd documentation-user/
      $ make clean
      $ make html

   .. tip::
      You can omit the :command:`make clean` command when no recent change has been made to the
      hierarchy of documentation files.

#. Fix any error or warning shown in the logs of the build.
#. Open the file :file:`documentation-user/_build/html/index.html` with your default web browser.

.. note::
   These steps have for only purpose to show you the final results of your changes. They have no
   impact on the documentation source files.

.. _contributing/submit-changes:

Submit your changes
-------------------

.. important::
   We expect you to have basic knowledge of Git, which should be enough to cover the basic flow of a
   one-time contribution. If you plan on submitting several contributions, work on older versions of
   the documentation or perform any other advanced action, we recommend you to be confident with
   Git. Help yourself with `this manual of Git <https://www.atlassian.com/git>`_ and `this
   interactive tutorial <https://learngitbranching.js.org/>`_.

#. Execute the following commands in a terminal:

   .. code-block:: console

      $ git add *
      $ git commit
      $ git push -u origin 13.0-my_contribution

#. Go to `github.com/odoo/documentation-user/pulls
   <https://github.com/odoo/documentation-user/pulls>`_ and click on the **New pull request**
   button.

   .. image:: media/new-pull-request.png

#. If you forked the base repository in the section :ref:`contributing/fetch-sources`, click on the
   link **compare across forks** If not, skip this step.

   .. image:: media/compare-across-forks.png

#. In the dropdown for the selection of the base branch (i.e., the version of the documentation that
   your changes concern), make sure to select the version that your changes target (here **13.0**).

   .. image:: media/select-branches-fork.png

#. Double-check your :abbr:`PR (Pull Request)` and, when ready, click again on the **Create pull
   request** button to submit your changes for review by a redactor at Odoo.

   .. image:: media/create-pull-request.png

#. You're done! If your changes are approved straight away they will appear in the documentation the
   very next day. It may also be the case that the reviewer has a question or a remark, so make sure
   to check your notifications or your emails, depending on your account settings.


.. _win-add-to-path: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
