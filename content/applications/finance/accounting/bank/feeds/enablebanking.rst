==========================================
Enable Banking as a bank synchronization provider
==========================================

**Enable Banking** is a third-party provider that aggregates banking information
from your bank accounts with currently 2500+ APIs integrated in 20+
countries.

.. image:: enablebanking/enablebanking.png
   :align: center
   :alt: Enable Banking logo

Enable Banking offers non-intrusive connectivity to ASPSPs` official APIs across Europe, without storing your data.

Odoo can synchronize directly with your bank to get all bank statements imported
automatically into your database.

Configuration
=============

Link your bank accounts with Odoo
---------------------------------

#. Start synchronization by clicking on :menuselection:`Accounting --> Configuration
   --> Add a Bank Account`.
#. Select the institution you want to synchronize. You can see if Enable Banking is the
   third party provider of the institution by selecting it.
#. After giving and confirming your phone number, you are redirected to Enable Banking to finalize
   the synchronization process.

#. Make sure you give your consent to share your account information with Odoo by clicking Continue authentication.

   .. image:: enablebanking/enablebankingauth.png
      :align: center
      :width: 50%
      :alt: Enable Banking authentication page
     
#. After giving consent for sharing data with Odoo, you may be prompted with your bank credentials, or redirected to your bank for authorization.

#. Post authorization, you should be redirected to Odoo

FAQ
===

I have an error with authorization.
-------------------------------------------------------------------
If it's your first attempt at authorization, try again later in case of maintenance.

If this issues is still occuring, please contact Odoo support.
When contacting support please include time of authorization attempt and whether you are using a business or personal account.

Additional authorization guidance currently available for
Finnish banks:
https://tilisy.enablebanking.com/guides/FI/
Swedish banks:
https://tilisy.enablebanking.com/guides/SE/

Im seeing duplicate transactions.
-------------------------------------------------------------------
This is commonly caused by lack of entry_reference.





If your question isn't answered, please contact Odoo support.
