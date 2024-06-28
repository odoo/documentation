=====================
Google Search Console
=====================

Google Search Console is a free web service provided by Google that allows website owners to
monitor, maintain, and troubleshoot their site's presence in Google Search results. It offers
valuable insights into how Google views and interacts with your site, helping you optimize its
performance.

There are five ways to verify your site ownership:

.. _website/google-search-console:

#. :ref:`GSC-DNS-Record`
#. :ref:`GSC-HTML-File-Upload`
#. :ref:`GSC-HTML-Tag`
#. :ref:`GSC-Google-Analytics-Tracking-Code`
#. :ref:`GSC-Google-Tag-Manager-Container-Snippet`

For every option, it all starts at the same place. Go to `Google Search Console
<https://search.google.com/search-console/welcome>`_, and click on :guilabel:`+ Add property`. If it
is your first time doing it, you will see a window pop-up as soon as you open Google Search Console,
asking you what property type you want to create.

You have two options :

- Domain property
- URL prefix property

.. image:: google_search_console/add-domain-or-url-prefix.png
   :alt: Google Search Console domain or URL prefix

Domain property
===============

.. note:: Google suggests creating at least one domain property to represent your site, as it is the
   most comprehensive view of your website information. It will include all URLs in all subdomains
   and across HTTP and HTTPS. It requires you to add the DNS record in your domain name provider,
   but even if it takes some time, it is worth it.

URL prefix property
===================

This type of verification is usually simpler as you have multiple verification methods, such as
using your existing Google Analytics or Tag Manager account. It also makes sense to view a section
of your website separately. For example, if you work with a consultant on a specific part of your
website, you might want to verify this part separately to limit access to your data.

.. note:: The best method for you depends on your comfort level and technical expertise. For
   beginners, using a file upload or HTML tag might be easiest. Those options are convenient if you
   already use Google Analytics or Tag Manager. You'll need to access your domain registrar's settings
   for domain verification.


Five ways to verify your site ownership
=======================================

.. _GSC-DNS-Record:

DNS Record
----------

With this method, you add a DNS TXT record to your domain's DNS settings. Google provides you with a
unique string to add as a TXT record. Once added, Google verifies ownership by checking the DNS
settings.
Start by copying the text record from the dialog google-site-verification=123aBc… after entering
your domain.
After you change your DNS record, go back to Search Console and click Verify in the verification pane.
Once again, if the verification does not work immediately, wait a few hours or a day and try again,
as the change may take some time to take effect. Just choose the unverified property from the
:guilabel:`Properties` drop-down and it will try to verify you automatically.

.. important:: To stay verified, do not remove the DNS Record even after verification succeeds.

.. _GSC-HTML-File-Upload:

HTML File Upload
----------------

This method involves uploading an HTML file provided by Google to the root directory of your website.
Google verifies ownership by checking for this file. You will typically download the HTML verification
file from Google Search Console, and then upload it to your website using FTP or file manager provided
by your web hosting service. Odoo is the website builder that allows web hosting service on
:doc:`/administration/odoo_online` and :doc:`Odoo.sh </administration/odoo_sh/overview/introduction>`.
If you are using Odoo Online, it is a :abbr:`SaaS (Software as a service)` solution, meaning that it
is not :abbr:`FTP (File Transfert Protocol)`. Odoo Online provides private databases which are fully
managed and hosted by Odoo. Here, you just have to copy-paste the code in the appropriate field in
the Website Settings. You will need to have permission to upload the file to your website where it
can be accessed by a browser. Once you added your website URL under the URL prefix option and clicked
on :guilabel:`continue`, expand the HTML file section where you will find a file :guilabel:`Download`
button.

.. image:: google_search_console/html-file-download.png
   :alt: HTML file download

Download your HTML verification file and upload it to the root directory of the website you want to
verify.

.. image:: google_search_console/open-copy-html-file.png
   :alt: Open and copy html file

Then, access your Odoo database, go to :menuselection:`Website --> Configuration --> Settings`,
and enable :guilabel:`Google Search Console` in the :guilabel:`SEO` section. Paste the google123abc.html
code in the dedicated field.

.. image:: google_search_console/paste-html-code-settings.png
   :alt: Paste html code in Odoo

Once you complete this step, click :guilabel:`Verify` in Search Console. If you perform the steps
above correctly, verification should work immediately.

.. _GSC-HTML-Tag:

HTML Tag
--------

Another way to verify ownership is by adding a meta tag to your site's homepage HTML code. Google
provides you with a unique meta tag that you insert between your homepage's <head> and </head> tags.
To do so, you need permission to edit the source code of your website’s homepage. After you add your
website URL under the URL prefix option and click :guilabel:`Continue`, expand the HTML Tag Section
to find the meta HTML Tag with a personalized key. Copy the tag and paste it into your homepage head
tag. Make sure not to change the text. Verify that the tag is present on your live page by visiting
your homepage and checking the page source text to confirm that the tag is present.

Once you complete this step, click :guilabel:`Verify` in Search Console. If you perform the steps
above correctly, verification should work immediately.

.. _GSC-Google-Analytics-Tracking-Code:

Google Analytics Tracking Code
------------------------------

If your website already uses Google Analytics, you can verify ownership of your site in Google Search
Console through your Google Analytics account. This method requires you to be an administrator of
both Google Analytics and Google Search Console accounts.

.. important:: First, you will need an account with Google Analytics that uses the same Google account.
   You must have at least edit permission on the Google Analytics account. If you are not sure which
   permission you have, check the `Google Analytics Help Center <https://support.google.com/analytics/?hl=en#topic=14090456>`_.
   Before verifying, ensure that your homepage has the Google Analytics tracking code in the head
   section of the page. Although your Analytics tracking code might work for Analytics in the body
   section as well, for Search Console verification it must be in the head section.

.. seealso::
   :doc:`../reporting/analytics`

Open your homepage in a browser, look at the page source code and confirm that the tag is present in
the head tag of the page.

After you click :guilabel:`Add property`, add your website URL under the URL prefix option and click
:guilabel:`Continue`.
If you perform the steps above correctly, verification should work immediately.

.. note:: This works for the verification process only. No data will be collected here, configuring
   Google Analytics is an entirely separate process.

.. _GSC-Google-Tag-Manager-Container-Snippet:

Google Tag Manager Container Snippet
------------------------------------

If you use Google Tag Manager to manage tags on your website, you can verify ownership of your site
by adding a specific HTML tag through the Google Tag Manager interface.

.. important::
   To prevent Google from indexing both your custom domain name `www.example.com` and your original
   Odoo database URL `www.example.odoo.com`, :ref:`map your domain name with your Odoo website
   <domain-name/website-map>`.

.. seealso::
   :doc:`domain_names`
