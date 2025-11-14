.. _customer_invoices/snailmail:

=========
Snailmail
=========

Sending direct mail can be an effective strategy for grabbing people's attention, especially when
their email inboxes are overflowing. With Odoo, you have the ability to send invoices and follow-up
reports through postal mail worldwide, all from within your database.

Configuration
=============

Go to :menuselection:`Accounting --> Configuration --> Settings` and scroll down to the
:guilabel:`Customer Invoices` section to activate :guilabel:`Snailmail`.

.. tip::
   Set a preferred :ref:`invoice sending <accounting/invoice/sending>` method in the
   :guilabel:`Accounting` tab of a contact to use it by default.

Sending invoices by post
========================

In the invoice form view, ensure the :guilabel:`Customer` address is correct and has the country
set. Click :guilabel:`Send`, select :guilabel:`by Post`, then :guilabel:`Send` the letter.

.. important::
   Documents sent via snailmail must respect the following rules:

   - The paper format must be **A4**.
   - Margins must be at least **5 mm** on all sides. To configure margins, activate the
     :ref:`developer mode <developer-mode>` and go to :menuselection:`Settings --> Technical -->
     Paper Format`.
   - A square of **15mm by 15mm** on the bottom left corner must remain clear.
   - Odoo fills these areas with white before sending the letter; any overflowing content will be
     cut.
   - The **postage area** must remain clear (download the :download:`snailmail PDF template
     <snailmail/snailmail-template.pdf>` for details).
   - Pingen (Odoo's snailmail service provider) scans the **address area** to obtain the address.
     Any text outside the address area is not considered part of the address.

Pricing
=======

Snailmail is an :doc:`/applications/essentials/in_app_purchase` service that requires prepaid stamps
(credits) to work. Sending one document consumes one stamp.

To buy stamps, go to :menuselection:`Accounting --> Configuration --> Settings`, scroll down to the
:guilabel:`Snailmail` section, and click :guilabel:`Buy credits`.

.. seealso::
   - :ref:`accounting/invoice/sending`
   - `Odoo's IAP Privacy Policy <https://iap.odoo.com/privacy#header_4>`_
   - `Pingen's layout requirements <https://help.pingen.com/en/templates-and-postal-requirements/
     letter-standards>`_
