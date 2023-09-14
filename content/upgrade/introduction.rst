:nosearch:
:show-content:
:hide-page-toc:
:show-toc:

====================
What is an Upgrade ?
====================

TODO : Merge/remove slowly all the info from administration/upgrade into this page

What is an upgrade? : TODO put the rest of this page https://www.odoo.com/slides/slide/introduction-2705

Let's say you are digging into the files on your very old computer and you stumble onto a personal Microsoft Word document from years ago. You feel very nostalgic and try to open the file when suddenly **ERROR**, the file cannot be read ! Indeed, this file was written with the program Microsoft Word 2007 and we are now years later trying to open with Microsoft Word 2022, a lot of things changed between those 2 versions and,therefore, files written with the old version are not accessible with the newer version of the program, what a shame for your nostalgia !

Since there are also version changes in Odoo, databases developed and used in Odoo 12 might not be compatible when running them on a Odoo 16 server. However, thanks to our incredible framework, version changes comes with their additional lines of code specifically written to translate the data from the previous version to the next one. This means that for a huge proportion of our users, changing version is as simple as the click of a button, because all the changes between versions are known, and therefore are taking into consideration during the Upgrade process.

.. note::

   **An Upgrade is the process that takes place to allow your Odoo database from an older version to be ran on a newer version of Odoo**

Let's view an example by comparing screenshots from different two different versions of Odoo : Odoo 14 and Odoo 16.

.. image:: introduction/so_odoo_14.png
   :width: 49%
   :alt: Odoo 14

.. image:: introduction/so_odoo_16.png
   :width: 49%
   :alt: Odoo 16

Apart from the fonts used and the spacing between fields, we notice a few things :

- Field 'Referrer' moved from below 'Quotation template' to below 'Customer'
- A new field named 'Recurrence' appears on the right, below 'Order Date'


Those changes might not be important to end user but for programmers developing a module, the code written is often based on the current layout of the pages, and on the current fields present. Therefore if a new field was created and placed under the field 'Referrer', since 'Referrer' changed position, our new field would followed it.

.. important::
   Changes between version of the standard code of Odoo might impact your custom instance of Odoo

Now, this example highlight a very minor change, as nothing is deleted, but this is not always the case between 2 versions. Sometimes, fields are removed entirely from the database, whole modules are changed, models are renamed, etc ... 

In those situations, running the newest version of Odoo on an older database will probably result in issues when navigating your database, such as error messages, data not showing or showing incorrectly, values wrongly computed, and many more.

At this point, the intervention of a developer is required for your upgrade to be successful.

Upgrade in a nutshell
=============

TODO add the summary of AVG from knowledge
