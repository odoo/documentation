:nosearch:
:show-toc:

=====================
Planning your upgrade
=====================

Which version should you target ?
---------------------------------

As you may know, Odoo :doc:`supports only certain versions </administration/maintain/supported_versions>`. This means that running any unsupported version of Odoo exposes your database to potential security issues, bugs and performance issues that will not be fixed by Odoo. This is the reason why we invite our user to stay up-to-date with the latest versions.

.. - Odoo Online, the hosting you get by default when creating your database via our website (Also known as Saas)
.. - Odoo SH, the cloud platform specifically designed to host and customize Odoo databases
.. - On-premise : this refers to all databases that are fully administered by the user, whether it is hosted on another cloud platform, on a server on-site, on a computer, etc ...

To make it simple, our recommendation is to upgrade to the latest major version of Odoo, that is the version released every year around the Odoo experience. Depending on you hosting, the reason for this recommendation might be different.

.. tabs::

    .. group-tab:: Odoo Online

        Odoo Online databases are usually automatically upgraded through all of the minor and major versions of Odoo at each new release thanks to the :ref:`upgrade_faq/rolling_release` mechanism. If the rolling release is unable to upgrade your database, it is recommended to upgrade it to the latest major version of Odoo.

    .. group-tab:: Odoo SH

        There are 3 possible situations with Odoo hosted on Odoo SH : 

        - You are in charge of your own code and you use Odoo SH to manage and run it.
        - You delegated the responsibility of developing and maintaining the code of your customizations to the Service department of Odoo. 
        - The development and maintenance of your code hosted on Odoo SH is handled by a third party (such as an Odoo partner)

        Since upgrading can be a time consuming process, it is recommended to upgrade to the latest version of Odoo to minimize the amount of upgrades you will have to go through in the lifetime of your database. Unlike on premise where you are in charge of the hardware and operating system, with Odoo SH it is always Odoo that takes care of that, regardless of the situation that you are in. This is why it is not possible to run :doc:`Unsupported versions </administration/maintain/supported_versions>` on Odoo SH.

        .. note::
            Minor versions of Odoo (for example Odoo 16.4) that are released multiple times a year are only available to Odoo Online databases.


    .. group-tab:: On-Premise

        On-Premise database administrators are in charge of their own hardware and operating system, which means that they can run any version of Odoo they want. However, since Odoo only provides support for the 3 latest versions, it is recommended to upgrade to one of those versions to ensure that you will be able to get support from Odoo if you ever need it.

        To minimize the amount of upgrades you will have to go through in the lifetime of your database, it is recommended to upgrade to the latest version of Odoo.

        .. note::
            Minor versions of Odoo (for example Odoo 16.4) that are released multiple times a year are only available to Odoo Online databases.


.. important::
    Running an :doc:`unsupported version </administration/maintain/supported_versions>` of Odoo is discouraged as it will prevent you from getting new security updates, performance improvements and bug fixes. Odoo support will also not be able to help you with any issue you encounter in that version.


Are your customizations still necessary ?
-----------------------------------------

During an upgrade, especially given the fact that you might skip multiple versions of Odoo, it is very likely that, in the plethora of new features added in the years of development between 2 versions, what you added in your database as a customization might be part of the standard of Odoo now.

This is why we recommend every database manager to take the time to explore the new features of Odoo and to compare them with the current customizations implemented. With a little bit of luck, you might be able to delete some chunks of your customization, leading to less time and money spent on its maintenance.
