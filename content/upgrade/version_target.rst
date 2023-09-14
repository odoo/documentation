=================================
Which version should you target ?
=================================

The answer is pretty simple : it depends 🧐

First, let's give a few general indications that apply to everyone. As you may know, Odoo will provide support and bug fixes only to the 3 latest version released (see :ref:`supported_versions`). This means that if you are running any older version of the software, our support might not be able to help you  ! 😰

This is the reason why we invite our user to stay up-to-date with the latest versions, so that their database is protected from any new bug or security issue that might be discovered.

Now, since there are 3 supported version, which one you should chose ? Depending on which type of hosting you are using, the optimal target version will vary a lot, so let's dive in !
As you may know, we offer three types of hosting for the ERP developed by Odoo : 

- Odoo Online, the hosting you get by default when creating your database via our website (Also known as saas)
- Odoo SH, the cloud platform specifically designed to host and customize Odoo databases
- On-premise : this refers to all databases that are fully administered by the user, whether it is hosted on another cloud platform, on a server on-site, on your own computer, etc ...

To make it simple, we would always recommend that you chose to upgrade to the latest major version of Odoo, when upgrading.This is the version we release every year around the Odoo experience. We are still going to explore the decision process for the three types of hosting anyway, so that you can know why we have that recommendation.

.. tabs::

   .. group-tab:: Odoo Online

      TODO rewrite to new context

      Let's start with Odoo Online ! A big proportion of users operate on an Odoo Online database since it is perfect for small businesses for which the standard package of Odoo is sufficient. This means they do not need a lot of customization to make the best use of our wonderful software 💜

      As a consequence of that, it is very easy for our upgrade process to change the version of such database ! If you are running a small Odoo online database with no customization at all, you should not encounter any issue when upgrading. Another great news is that thanks to our rolling-release process, the upgrade process is automatically tested and if the test is positive, your database can be automatically upgraded to the latest minor version of Odoo without any intervention on your part, just like any other software ! How great is that ? 🤩

      With Odoo Online, thanks to the rolling-release process, you will be upgraded through all of the minor and major version of Odoo once they get released, given that the upgrade can be done automatically. Otherwise, if you are still on an older version, we recommend that you upgrade to the latest major version available.

   .. group-tab:: Odoo SH

      TODO rewrite to new context

      For Odoo SH, it gets a little bit more complicated, but we'll make it simple ! There are 3 possibilities with Odoo SH : 

      - You are in charge of your own code and you use Odoo SH to manage and run it.
      - You delegated the responsibility of developing and maintaining the code of your customisation to the Service department of Odoo. 
      - The development and maintenance of your code hosted on Odoo SH is handled by a third party (such as an Odoo partner)

      In those cases, we recommend jumping to the latest major Odoo version since Odoo SH does not support intermediary versionsif you are currently running a version that is not supported anymore. Unlike on premise where you are in charge of the hardware and operating system, with Odoo SH it is always Odoo that takes care of that, regardless of the situation that you are in. 
      
      Therefore only the 3 latest versions of Odoo are supported on Odoo SH. If you are running an unsupported version of Odoo, you will be invited to upgrade as soon as possible to avoid being locked out of your database once the support for that version is dropped. You can find more information about the versions we support on the supported version page.

   .. group-tab:: On Premise

      TODO rewrite to new context

      And finally, what about On-premise ? With that type of hosting, the only limit is your imagination (or more likely, what is available on GitHub). Since you are in charge of the code that you run, you can decide to run any version of Odoo, regardless of our recommendation. However, by running an old version of Odoo, you expose yourself to potential bugs and vulnerabilities that might not get patched, since those versions are not supported anymore.

      This is why we recommend that you upgrade your database as soon as possible to one of the 3 latest version. Obviously this is no easy feat, and to avoid doing the process more times than necessary, our best suggestion is therefore to upgrade to the latest version possible. You also get the added bonus of receiving as many of the new features as possible, making your database even faster and more user-friendly ⭐
