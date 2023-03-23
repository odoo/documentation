======================
Performance monitoring
======================

Odoo integrates a variety of tools to analyze and improve the performance of your eCommerce
website.

Performance analysis tools
==========================

Data monitoring
---------------

**Website** allows monitoring and analysis of the sales performance of your eCommerce. To access the
**reporting view**, go to :menuselection:`Website --> Reporting`. This dashboard helps you monitor
everything related to sales, such as sales performance per product, category, day, etc.

.. image:: reporting/reporting.png
   :align: center
   :alt: Performance reporting of eCommerce

By clicking :guilabel:`Measures`, you can select the type of measurement used, such as:

- :guilabel:`Margin`;
- :guilabel:`Qty Invoiced`;
- :guilabel:`Untaxed Total`;
- :guilabel:`Volume`;
- ...

Other options include **multiple views (Pivot, etc.), comparison** by periods or years, and directly
:guilabel:`insert in spreadsheet`, etc.

Analytics
---------

It is possible to link your Odoo website with Google Analytics. To do so, go to
:menuselection:`Website --> Configuration --> Settings` and scroll to the :guilabel:`SEO` section.
Then, enter your **ID** in the :guilabel:`Measurement ID` field.

If you are still using **Universal Analytics**, it can directly be added by injecting the code in
the HTML header and body using the website builder. All metrics from Google Analytics and Universal
Analytics can be seen directly within Odoo.

Alternatively, Odoo offers the possibility to use another service, **Plausible.io**. Plausible.io is
a simple and privacy-friendly alternative to Google Analytics. Everything can be managed directly in
Odoo, there is no need to visit Plausible.io's website to access your metrics.

.. seealso::
   - :doc:`/applications/websites/website/optimize/google_analytics`
   - :doc:`/applications/websites/website/optimize/plausible`
