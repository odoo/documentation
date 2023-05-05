=====================
Collaborate using git
=====================

Introduction
============

*What are git and github, what are there for*

Setup git and github
====================

*Basically a link to the "Environment setup" section of the contributing/develoment*

There are a few things on that page that I don't like

* the windows installation wizard is super long and complicated (14 setup screens), especially to newcomers, there is no guide in the git book nor on the official https://gitforwindows.org/ website to help newcomers install git, which are the two documents referenced by our tutorial at the moment
* ssh keys are PITA on windows as there is no agent (you need to install pageant)
* the http protocol can be used via GCM https://github.com/git-ecosystem/git-credential-manager which is very well integrated to github
* the passage about the PATH is weird, it should be right from the start on linux/mac. On Windows they should open Git Bash instead
	* I suggest to have it inside a warning box "in case git doesn't work, lookup this page <link>"
* "install Odoo from the sources" we should invite all odoo employees to install it in a specific folder, so there is a "standard" place share among us

Explore the history
===================

*Basically explaining what a "commit" is, using the commands log/show, explain those commands too*
*Give an early idea of what branches are (without naming them yet) by using ``git log --oneline (master,16.0,15.0) odoo/release.py``*

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