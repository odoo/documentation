=======================
Lead mining
=======================
In any business, getting quality leads is essential to keep the business growing. Lead mining
allows you to generate leads from scratch directly within your database. Leads can be targeted based
upon a set of criteria, such as the country, the company size, and the industry, to ensure the
leads are relevant to your business.

Configuration
==============

For this feature to work, go to :menuselection:`CRM --> Configuration --> Settings` and activate
the **Lead Mining** feature.
 
.. image:: lead_mining/LM1.png
   :align: center
   :alt: Activating Lead Mining

Start generating leads
==========================
You will now have a new button **Generate Leads** available in your pipeline. Lead mining
requests are also available from :menuselection:`Configuration --> Lead Mining Requests` or through
:menuselection:`Leads --> Leads` where you have the **Generate Leads** button.

.. image:: lead_mining/generate-leads-button.png
   :align: center
   :alt: Generate Leads Buttons

From there, click on the **Generate Leads** button, a window where you will be able to pick your
criteria will pop up.

.. image:: lead_mining/generate-leads-popup.png
   :align: center
   :alt: Generating Leads Pop-Up

When choosing to target Companies and their contacts you can choose the contacts you are getting
based on Role or Seniority. Make sure to be aware of the latest EU regulation when getting
contact information. Get more information about General Data Protection Regulation on `Odoo GDPR
<http://odoo.com/gdpr>`__,

Additional options you can choose from are:
* **Size**: filter leads depending on the number of employees in the companies.
* **Country**: pick the countries leads are coming from. Pick multiple countries, if applicable.
* **Industry**: pick the industries leads are coming from. Pick multiple industries, if applicable.
* **Salesperson**: choose who on the Sales Team will be assigned these leads.
* **Sales Team**: choose which Sales Team will be assigned to these leads
* **Tags**: choose what tags are added directly to the leads once found.

.. tip::
    The generated leads will have the name of the company.

Pricing
==================
This is an In-App Purchase feature, each generated lead will cost one credit.
If you choose to get contact information each contact will also cost us one additional credit.
Here is the pricing for this `feature <https://iap.odoo.com/iap/in-app-services/167?>`__, 
To buy credits you can either go to :menuselection:`CRM --> Configuration --> Settings --> Buy
Credits`; or go to :menuselection:`Settings --> In-App Purchases --> View my Services`.

.. image:: lead_mining/LM6.png
   :align: center
   :alt: Buy Credits from Lead Mining Setting

.. image:: lead_mining/LM7.png
   :align: center
   :alt: Buying Credits via In-App Purchase Setting


.. tip::
    * Consumed credits dynamically display in real-time how many credits the current settings need.
    * If you are on Odoo Online (SAAS) and have the Enterprise version, you benefit from free trial
      credits to test the feature.

.. seealso::
   * :doc:`In-App Purchases (IAP) </applications/general/in_app_purchase/in_app_purchase>`
 
