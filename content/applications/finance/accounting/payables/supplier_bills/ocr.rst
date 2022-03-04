==============================================================
Digitize Vendor Bills with Optical Character Recognition (OCR)
==============================================================

Encoding bills manually can be a time-consuming task. Having a solution that allows you to digitize
them and automatically import the data into your database reduces errors and saves you time.

.. important::
   `Try it out <https://www.odoo.com/app/invoice-automation>`_! Upload one of your Bills or try one of our samples.
   
Set up the feature
==================

Go to :menuselection:`Accounting --> Settings --> Bill Digitalization`, and choose whether the bills
should be processed automatically (with OCR) or manually (on demand).

.. image:: media/setup_ocr.png
   :align: center
   :alt: Activate the feature going to the settings application in Odoo Accounting

Start digitizing your bills
---------------------------

Scan your bills and then go to :menuselection:`Accounting --> Vendors --> Bills` and upload your
document. Based on your configuration, it either processes the documents automatically, or you
need to click on *Send for Digitalization* to do it manually.

.. tip::
   You can also create a vendor bill through the *Documents* app or by using an email alias on your
   journals.

Once the data is extracted from the PDF, you can correct it if necessary by clicking on the
respective tag (available in *Edit* mode), and selecting the right information instead.

.. image:: media/example_ocr.png
   :align: center
   :height: 580
   :alt: Example of a scanned bill in Odoo Accounting

.. note::
   The more bills you scan, the better the system gets at identifying the correct data.

Pricing
=======

| The *Bill Digitalization* is an *In-App Purchase (IAP)* service which requires prepaid credits to
  work. Digitizing one document consumes one credit.
| To buy credits, go to :menuselection:`Accounting --> Configuration --> Settings --> Bill
  Digitalization` and click on *Buy credits*, or go to :menuselection:`Settings --> Odoo IAP` and
  click on *View My Services*.

.. important::
   - If you are on Odoo Online (SAAS) and have the Enterprise version, you benefit from free trial
     credits to test the feature.
.. seealso::
   - Our `Privacy Policy <https://iap.odoo.com/privacy#header_6>`_.
