====
KPay
====

Connecting a payment terminal allows you to offer a fluid payment flow to your customers and ease
the work of your cashiers.

.. important::
   - KPay payment terminals do not require an :doc:`IoT Box </applications/general/iot>`.
   - KPay is only supported for Hong Kong and in HKD for now.
   - The terminal model supported is **N950**. Users with the A8 model should contact KPay for
     replacement.

.. seealso::
   - `KPay Payment Terminal Solutions <https://www.kpay-group.com/en-hk/pay-in>`_
   - `KPay Tutorials and Resources <https://www.kpay-group.com/en-hk/blog/more/KPay>`_

.. _pos/kpay/configuration:

Configuration
=============

.. _pos/kpay/configuration/method:

Configure the payment method
----------------------------

Activate **KPay** in the settings by going to :menuselection:`Point of Sale --> Configuration -->
Settings --> Payment Terminals` and enabling :guilabel:`KPay`.

Then, create the payment method:

- Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods`, click
  :guilabel:`Create`, and complete the :guilabel:`Method` field with your payment method's name;
- Set the :guilabel:`Journal` field as :guilabel:`Bank`;
- Ensure the :guilabel:`Integrate with` field is set to :guilabel:`KPay`;
- Enter the :guilabel:`KPay Terminal IP Address`. This can be obtained by swiping down on the
  terminal to find its IP address.
- Enter the :guilabel:`KPay App ID` and :guilabel:`KPay App Secret`. These credentials can be
  obtained by contacting KPay.
- The :guilabel:`KPay Payment Type` field can be left empty to allow selecting the specific
  payment method (e.g., Visa, Mastercard, Alipay) directly on the terminal when processing a
  payment.

.. note::
   - Depending on the network settings, the KPay Terminal IP address may change from time to time.
     It is recommended to configure your network settings to assign a fixed IP address to
     the terminal used to avoid continued changes.
   - For the :guilabel:`KPay Payment Type` field, it is recommended to create one Odoo payment
     method per each KPay Payment Type used (e.g., one for Card payment, one for Octopus). This
     helps in differentiating the amounts upon settlement and for reporting purposes.

.. _pos/kpay/configuration/terminal:

Configure the payment terminal
------------------------------

To ensure proper operation, the KPay payment terminal needs to be configured correctly:

- The user’s Odoo device (e.g., computer, tablet) and the KPay terminal must share the same
  network.
- Ensure that the KPay modules and applications on the terminal are up to date. Updates can
  typically be found and installed via the KPay app store on the terminal itself.
- The KPay application on the terminal must be logged in using the merchant account registered
  and provided by KPay. This is required to enable payment processing.

.. _pos/kpay/configuration/browser:

Configure the web-browser
-------------------------

KPay terminals return data to Odoo using HTTP. Some web browsers, by default, block mixed content (HTTP content on an HTTPS page) for security reasons. While Odoo checks the authenticity of the data upon receipt, you might need to adjust your browser settings to allow insecure content for the Odoo POS page to ensure seamless communication with the KPay terminal.

.. tabs::

   .. tab:: Google Chrome

      1. While on the Odoo POS screen, click the site information icon (often a lock icon or
         sliders icon :guilabel:`Tune`) in Chrome's address bar.
      2. Click on :guilabel:`Site settings`.
      3. Scroll down to :guilabel:`Insecure content`.
      4. Change the setting from :guilabel:`Block (default)` to :guilabel:`Allow`.

   .. tab:: Mozilla Firefox

      1. Enter `about:config` in the Firefox address bar and press Enter.
      2. Accept any warning message that may appear.
      3. In the search bar, type `security.mixed_content.block_active_content`.
      4. Double-click on the preference name to change its value from `true` to `false`.

.. _pos/kpay/voidrefund:

Void/Refund of payment
======================

KPay terminal allows void and refund of payments made. A **void** typically cancels a transaction
before it has been fully processed or settled with the bank, effectively erasing it as if it never
happened. A **refund**, on the other hand, reverses a transaction that has already been completed
and settled, returning the funds to the customer from the merchant's account.

In Odoo with KPay:

- Voiding **card payments** (e.g., Visa, Mastercard) made through KPay will automatically
  trigger the creation of a corresponding refund record (credit note) in Odoo. Therefore,
  manually creating a separate refund order in Odoo is not necessary for voided card payments.
- For voiding **other payment types** (non-card payments) or for processing **any refund**
  (for transactions already settled), you must create a refund order manually in Odoo.

.. note::
   Voiding and refunding Octopus payments via the KPay terminal integration is **not supported**.
   Octopus payments must be refunded using an alternative method, as per KPay's specific
   procedures.
