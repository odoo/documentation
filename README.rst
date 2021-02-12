===========================
ওডু ব্যবহারকারীদের ডকুমেন্টেশন - বাংলা
===========================

ওডু ব্যবহারকারীদের ডকুমেন্টেশন - বাংলা অনুবাদ করার জন্য অবদান রাখতে যোগাযোগ করুন [Media Jockey]<https://mediajockey.org>, [Abu Zafar]<https://github.com/mjabuz>


ডকুমেন্টেশন তৈরি করুন
=======================

প্রস্তুতি / প্রয়োজনীয়তা
------------

- `Git <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#install-git>`_

- | `Python 3 <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#python>`_
  | If you don't know which subversion to choose, pick the last one.
  | Python dependencies are listed in the file ``requirements.txt`` located in the root
    directory.

  - Sphinx 2.4.0 or above.
  - Werkzeug 0.14.1

- `Make <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#make>`_

নির্দেশনা
------------

একটি টার্মিনালে, রুট ডিরেক্টরিতে নেভিগেট করুন এবং নিম্নলিখিত কমান্ডটি প্রয়োগ করুন:

.. code-block:: console

   $ make html

এটি এইচটিএমএল এ ডকুমেন্টেশন সংকলন করে।
রেন্ডারটি প্রদর্শনের জন্য আপনার ওয়েব ব্রাউজারে `` ডকুমেন্টেশন-ব্যবহারকারী / _ বিল্ড / এইচটিএমএল / সূচক html`` খুলুন।

দেখুন `এই গাইড
<https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#prepare-your-version>`_
আরও বিস্তারিত নির্দেশাবলীর জন্য।

ডকুমেন্টেশন অবদান
===============================

ডকুমেন্টেশনের সামগ্রীতে অবদানের জন্য, দয়া করে `ভূমিকা গাইড দেখুন
<https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html>`_.

** কোনও সামগ্রী সম্পর্কিত প্রতিবেদন ** করতে, ** নতুন সামগ্রীর অনুরোধ করুন ** বা ** একটি প্রশ্ন জিজ্ঞাসা করুন **, os সংগ্রহস্থলটি ব্যবহার করুন
ইস্যু ট্র্যাকার <https://github.com/odoo/docamentation-user/issues> `_ যথারীতি। _ 

আরও জানুন
==========

ওডু সম্পর্কে আরও জানার জন্য ডকুমেন্টেশন ছাড়াও দেখুন অফিসিয়াল e-ইলিয়ারিং
<https://odoo.com/slides>`_ and `Scale-up, The Business Game
<https://www.odoo.com/page/scale-up-business-game>`_



===========================
End-user Odoo documentation
===========================

Build the documentation
=======================

Requirements
------------

- `Git <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#install-git>`_

- | `Python 3 <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#python>`_
  | If you don't know which subversion to choose, pick the last one.
  | Python dependencies are listed in the file ``requirements.txt`` located in the root
    directory.

  - Sphinx 2.4.0 or above.
  - Werkzeug 0.14.1

- `Make <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#make>`_

Instructions
------------

In a terminal, navigate to the root directory and execute the following command:

.. code-block:: console

   $ make html

This compiles the documentation to HTML.

Open ``documentation-user/_build/html/index.html`` in your web browser to display the render.

See `this guide
<https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#prepare-your-version>`_
for more detailed instructions.

Contribute to the documentation
===============================

For contributions to the content of the documentation, please refer to the `Introduction Guide
<https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html>`_.

To **report a content issue**, **request new content** or **ask a question**, use the `repository's
issue tracker <https://github.com/odoo/documentation-user/issues>`_ as usual.

Learn More
==========

To learn more about Odoo, in addition to the documentation, have a look at `the official eLearning
<https://odoo.com/slides>`_ and `Scale-up, The Business Game
<https://www.odoo.com/page/scale-up-business-game>`_
