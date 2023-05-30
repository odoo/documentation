=====================
Collaborate using git
=====================

Introduction
============

*What are git and github, what are there for*

Setup git and github
====================

Follow the same steps as in :ref:`contributing/development/setup`. 

Explore the history
===================

We begin this tutorial by exploring the git history of Odoo. This section should help you get a first gasp of what git, commits and branches are for. Remember that whatever you do on your own computer stayes on your computer, git is not like dropbox in that regard. You are free to move around, open and read files and even modify them, it doesn't disturb anybody.

Status
------

Before doing anything complicated, we'll start with the command that show "what's going on": ``git status``. Open a terminal and move to the community path, then type ``git status``.

.. code-block:: console
   :caption: status just after a clone

   $ git status
   On branch 16.0
   Your branch is up to date with 'origin/16.0'.

   nothing to commit, working tree clean

If you haven't done anything (beside changing the configuration), this is what the status should looks like. 

.. warning::

   Depending on your system configuration, the message may have been printed in French or in another language than English. We suggest you `configure <https://stackoverflow.com/a/10872202>`_ git to always print the messages in English, at least for this tutorial.

The first line reads "On branch 16.0" (it is ok if it reports another version), it means that you are looking at the state of the Odoo source code as it is for the version 16. The second line reads "Your branch is up to date with 'origin/16.0'.", it means that your local copy of Odoo 16.0 is up to date with the remote copy of Odoo 16.0 on Github, in this context ``origin`` refers to https://github.com/odoo/odoo. The third line reads "nothing to commit, working tree clean", it means that you haven't modified any file.

Log
---

You can open the file at ``odoo/release.py`` in a text editor (Windows users can use Notepad), it is a Python source code file with some informations about the software, among them there is the current version (again, it is fine if you have another version):

.. code-block:: python
   :caption: version inside of odoo/release.py

   version_info = (16, 0, 0, FINAL, 0, '')   

In the introduction, we said git was also used to keep an history of all the changes done, you can consult this history using the ``git log`` command:

.. code-block:: console
   :caption: all commits (revisions) in the history of the 16.0 version for the ``odoo/release.py`` file, one per line

   $ git log --oneline odoo/release.py
   fa58938b3e24 [REL] 16.0 FINAL
   1c0d46b68b1e [FIX] release: change version level to beta
   2636bea44775 [REL] 16.0
   00d36ec92971 [FIX] core: decrement master release version
   e5361e93be3e [IMP] core: bump master release to 16.1 alpha
   c336dddab8bc [IMP] release: correct typo in code comment
   082aa4d35289 [IMP] core: bump master release to 15.4 alpha
   8cc0a225a541 [IMP] core: bump master release to 15.3 alpha
   c6600d1ea493 [IMP] core: bump master release version to 15.2
   ...
   a84070f3ba49 [REL] 9.saas~13
   9e64f9f95141 [REF] openerp: move `openerp` to `odoo`

.. tip::
   In case there are more lines than your terminal can show at a same time, git shows the result inside of a *pager*. You can move inside the pager using the arrow keys and you can quit it by pressing ``q``.

Each line reports a different revision of the file, each revision is called a "commit" in git jargon. The first column is the commit hash, a unique identifier created by git to identify the commit. The second column is a tag that describe the type of change beeing done inside of the commit, REL for a release, FIX for a bug fix, IMP for an improvement, there are a few others not listed here. Finally, the rest of the line is the commit message title, a short description of what beeing done inside of the commit.

Using ``-p`` instead of ``--oneline``, we can show each commit with all its details: complete hash, date, author, full message and the lines that changed.

.. code-block:: console
   :caption: meta informations of the commit fa58938b3e24…

   $ git log -p odoo/release.py
   commit fa58938b3e2477f0db22cc31d4f5e6b5024f478b
   Author: Christophe Monniez <moc@odoo.com>
   Date:   Tue Oct 11 14:01:40 2022 +0000

.. code-block:: text
   :caption: free description (message) of the commit fa58938b3e24…

       [REL] 16.0 FINAL
       
       closes odoo/odoo#103147
       
       Signed-off-by: Xavier Morel (xmo) <xmo@odoo.com>

.. code-block:: udiff
   :caption: lines changed (diff) by the commit fa58938b3e24…

   diff --git a/odoo/release.py b/odoo/release.py
   index c7e8e067a231..2a8ad3d36b86 100644
   --- a/odoo/release.py
   +++ b/odoo/release.py
   @@ -12,7 +12,7 @@ RELEASE_LEVELS_DISPLAY = {ALPHA: ALPHA,
    # properly comparable using normal operators, for example:
    #  (6,1,0,'beta',0) < (6,1,0,'candidate',1) < (6,1,0,'candidate',2)
    #  (6,1,0,'candidate',2) < (6,1,0,'final',0) < (6,1,2,'final',0)
   -version_info = (16, 0, 0, BETA, 0, '')
   +version_info = (16, 0, 0, FINAL, 0, '')
    version = '.'.join(str(s) for s in version_info[:2]) + RELEASE_LEVELS_DISPLAY[version_info[3]] + str(version_info[4] or '') + version_info[5]
    series = serie = major_version = '.'.join(str(s) for s in version_info[:2])

We only show here the first (most recent) commit that changed of file ``odoo/release.py`` in the history of the 16.0 branche. In your own terminal there is a pager that shows you all the commits that modified this file, you can quit it by pressing ``q``.

Each commit is separated in three sections, some meta informations, the commit message and the commit *diff*:

1. The meta part lists the unique full 40-chararacter longs :abbr:`commit hash (fa58938b3e2477f0db22cc31d4f5e6b5024f478b)`, the :abbr:`author (Christophe Monniez)` of the commit and the :abbr:`date (11 Oct. 2022)`.
#. The commit message is a free text written by Christophe, it contains a :abbr:`title/subject ([REL] 16.0 FINAL)`, an empty body and some trailers (:abbr:`Closes (closes odoo/odoo#103147)`, :abbr:`Signed-off-by (Signed-off-by: Xavier Morel (xmo) <xmo@odoo.com>)`). In this example, the two trailers were automatically added, the first is a `reference <https://github.com/odoo/odoo/pull/103147>`_ to a pull-request on Github, the second means that Xavier reviewed the changes and validated them.
#. The *diff* (difference) shows what lines changed during this revision. It is quite complicated, what matters are the two lines ``-version_info = (16, 0, 0, BETA, 0, '')`` and ``+version_info = (16, 0, 0, FINAL, 0, '')``. The lines beginning with a single ``-`` means that they were removed, wheras the ones beginning with a single ``+`` means they were added. It reads that the line ``version_info = (16, 0, 0, BETA, 0, '')`` was replaced by ``version_info = (16, 0, 0, FINAL, 0, '')``, i.e. ``BETA`` was replaced by ``FINAL``.

Reading all those informations we learn that this commit was the one at released Odoo 16.0, from a beta version, to the final release.

We can also study the history of other versions, like to list all commits that modified this ``odoo/release.py`` but this time inside of the 15.0 version

.. code-block:: test
   :caption: all commits (revisions) in the history of the 15.0 version for the ``odoo/release.py`` file, one per line

   $ git log --oneline 15.0 odoo/release.py
   b50796d51607 [REL] 15.0
   15b4cc97f302 [REL] saas-14.5
   c2179731372d [IMP] core: bump master release version to 14.5 alpha
   6f9aa96c16a2 [IMP] core: bump master version to 14.4 alpha1
   55986ffa21da [IMP] core: bump master version to 14.3 alpha1
   8fd7232a0e7c [IMP] core: bump master version to 14.2 alpha1
   ...
   a84070f3ba49 [REL] 9.saas~13
   9e64f9f95141 [REF] openerp: move `openerp` to `odoo`

Again, using ``-p`` instead of ``--oneline`` to show all details:

.. code-block:: console
   :caption: meta informations of the commit b50796d51607…

   $ git log -p 15.0 odoo/release.py
   commit b50796d5160745d9f85992467d632d9ce2476697
   Author: Christophe Monniez <moc@odoo.com>
   Date:   Tue Oct 5 09:28:30 2021 +0200

.. code-block:: text
   :caption: free description (message) of the commit b50796d51607…

       [REL] 15.0

.. code-block:: udiff
   :caption: lines changed (diff) by the commit b50796d51607…

   diff --git a/odoo/release.py b/odoo/release.py
   index 7c114b120700..546d1c49a12f 100644
   --- a/odoo/release.py
   +++ b/odoo/release.py
   @@ -12,7 +12,7 @@ RELEASE_LEVELS_DISPLAY = {ALPHA: ALPHA,
    # properly comparable using normal operarors, for example:
    #  (6,1,0,'beta',0) < (6,1,0,'candidate',1) < (6,1,0,'candidate',2)
    #  (6,1,0,'candidate',2) < (6,1,0,'final',0) < (6,1,2,'final',0)
   -version_info = ('saas~14', 5, 0, FINAL, 0, '')
   +version_info = (15, 0, 0, FINAL, 0, '')
    version = '.'.join(str(s) for s in version_info[:2]) + RELEASE_LEVELS_DISPLAY[version_info[3]] + str(version_info[4] or '') + version_info[5]
    series = serie = major_version = '.'.join(str(s) for s in version_info[:2])

Reading all those informations, we learn the version saas-14.5 became known as 15.0. Please note that usually new saas releases are forked from master. The full release (e.g. 14.0, 15.0) are an exception as they are generally based on the lastest saas-x.5 release (itself forked from master).

Show
----

A second way to study the history is to look at a precise commit. Say you are reading the *oneline* history and that one of the commit titles get your attention, that you want to print all the details of that specific commit. That's what ``show`` is for. Let's say you wonder how long your session is going to last, like how often <odoo.com> is going to ask you to type your password again because your session would had expired. Technically this is known as the "session lifetime" so you can search the history looking for those two words:

.. code-block:: console
   :caption: all commits in 16.0 mentionning session lifetime, one per line

   $ git log --oneline --grep 'session lifetime'
   02cbb81afbc4 [FIX] http: make session lifetime consistent and configurable
   f61aa39ff119 [REF] core: HTTPocalypse (9) ORM initialization
   17e6a69b9189 [IMP] core: use Savepoint object in TestCursor
   1fbafa4e69ee [MERGE][IMP] im_livechat: random assignation of conversation

The commit ``[FIX] http: make session lifetime consistent and configurable`` gets your attention, using ``show`` you can reveal all its secrets:

.. code-block:: console
   :caption: meta informations of the commit 02cbb81afbc4…

   commit 02cbb81afbc4178f73c1a8d4efb063bb1599cece
   Author: Olivier Dony <odo@odoo.com>
   Date:   Tue May 30 12:59:42 2023 +0200

.. code-block:: text
   :caption: free description (message) of the commit 02cbb81afbc4…

       [FIX] http: make session lifetime consistent and configurable
       
       Before 16.0 and https://github.com/odoo/odoo/pull/78857 the session
       cookie duration was set to 3 months, but the server-side garbage
       collection of inactive session was reaping them after 7 days of
       inactivity. The cookie lifetime was essentially superseded by the
       server-side GC.
       
       After https://github.com/odoo/odoo/pull/78857 these limits were made
       consistent with each other, but the lifetime value was kept at 3 months,
       which is a bit too long as a default.
       
       This commit changes the default SESSION_LIFETIME back to 7 days for both
       limits.
       
       In addition, since the server-side GC is now implemented by a
       database-specific cron job, this commit introduces an optional system
       parameter `sessions.max_inactivity_seconds` that can be set to override
       the default server-side GC threshold, to make it shorter.
       
       Note 1: the ICP does not modify the cookie lifetime which will remain set
       to the default 7 days. This means normal browser sessions won't stay
       alive for longer than 7 days of inactivity. So `sessions.max_inactivity_seconds`
       can't be effectively set to a longer expiration time.
       This seems like a reasonably safe default.
       
       Note 2: the session GC happens during the execution of the autovacuum
       cron job ("Base: Auto-vacuum internal data") which is scheduled once per
       day by default. When setting a small `sessions.max_inactivity_seconds`
       value, it may be necessary to increase the frequency of that cron job
       accordingly.

.. code-block:: udiff
   :caption: lines changed (diff) by the commit 02cbb81afbc4…

   diff --git a/odoo/addons/base/models/ir_http.py b/odoo/addons/base/models/ir_http.py
   index 951459bbc4be..a35e0b5afa7c 100644
   --- a/odoo/addons/base/models/ir_http.py
   +++ b/odoo/addons/base/models/ir_http.py
   @@ -216,7 +216,9 @@ class IrHttp(models.AbstractModel):
    
        @api.autovacuum
        def _gc_sessions(self):
   -        http.root.session_store.vacuum()
   +        ICP = self.env["ir.config_parameter"]
   +        max_lifetime = int(ICP.get_param('sessions.max_inactivity_seconds', http.SESSION_LIFETIME))
   +        http.root.session_store.vacuum(max_lifetime=max_lifetime)
    
        @api.model
        def get_translations_for_webclient(self, modules, lang):
   diff --git a/odoo/http.py b/odoo/http.py
   index aa7369e9a5f2..6b3f3fb1ce2d 100644
   --- a/odoo/http.py
   +++ b/odoo/http.py
   @@ -261,9 +261,10 @@ if parse_version(werkzeug.__version__) >= parse_version('2.0.2'):
        # let's add the websocket key only when appropriate.
        ROUTING_KEYS.add('websocket')
    
   -# The duration of a user session before it is considered expired,
   -# three months.
   -SESSION_LIFETIME = 60 * 60 * 24 * 90
   +# The default duration of a user session cookie. Inactive sessions are reaped
   +# server-side as well with a threshold that can be set via an optional
   +# config parameter `sessions.max_inactivity_seconds` (default: SESSION_LIFETIME)
   +SESSION_LIFETIME = 60 * 60 * 24 * 7
    
    # The cache duration for static content from the filesystem, one week.
    STATIC_CACHE = 60 * 60 * 24 * 7
   @@ -858,8 +859,8 @@ class FilesystemSessionStore(sessions.FilesystemSessionStore):
            session.should_rotate = False
            self.save(session)
    
   -    def vacuum(self):
   -        threshold = time.time() - SESSION_LIFETIME
   +    def vacuum(self, max_lifetime=SESSION_LIFETIME):
   +        threshold = time.time() - max_lifetime
            for fname in glob.iglob(os.path.join(root.session_store.path, '*', '*')):
                path = os.path.join(root.session_store.path, fname)
                with contextlib.suppress(OSError):


Modify files
============

*Make them create a branch named "master-sandbox-<trigram>" based on the latest master, simply say that it is to isolate their changes from the ones of the others, don't explain branches yet*
*Deep dive the few status/diff/add/rm/restore/commit commands*
*Basically do stuff on the working directory, type status/diff to understand what changed, then add or rm or restore or commit, again status/diff/log to understand what happened*

Backup changes on Github
========================

*Make them push their branch so they can see it on github*
*Visit the various logs/diffs/blames/files this time using the github interface*
*Make them remove their branch so they can fetch it back from github*

Gather feedback
===============

*Basically pull requests, reviews, runbot*
*The ci/style will be red because we made them push commits with bad titles*

Cleanup the mess
================

*Explanation about keeping the history clean and writing good commit messages with hands on example in the history*
*Make them clean their branch basically using commit --amend, interactive rebase, and push --force-with-lease*

*Give a formal explaination of what branches are, with nice graphs*
*Make them fetch the latest master branch, show the difference git log master vs git log origin/master*
*Make them fast-forward their local master branch*
*Make them rebase their sandbox branch and push it back*

*Runbot should be green*
