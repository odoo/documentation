========================
SPS commerce integration
========================

.. |EDI| replace:: :abbr:`EDI (Electronic Data Exchange)`
.. |PO| replace:: :abbr:`PO (Purchase Order)`
.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |SOs| replace:: :abbr:`SOs (Sales Orders)`

Electronic data interchange (EDI) enables companies using different software systems to exchange
information in a standardized, structured format.

In Odoo, its |EDI| service provider, SPS Commerce, acts like a data translator that facilitates the
exchange of sales orders (SOs) or purchase orders (POs) between Odoo and trading partners using
other systems. This automation removes the need for manual data entry of products, quantities,
prices, and other key information.

To set up |EDI| in Odoo, the SPS Commerce module and FTP server must be installed by the
:ref:`development team <purchase/advanced/edi-install>`.

This is essential because Odoo and external software systems represent documents using different
programming languages and data formats. As a result, the |EDI| mappings that define how data is
shared with SPS Commerce must be configured individually.

Document types in Odoo
======================

The documents available to be automatically transferred in Odoo are:

- :ref:`850 inbound <purchase/advanced/850-inbound>`: external company sends |PO|, which is received
  in Odoo database as a |SO|
- :ref:`810 outbound <purchase/advanced/810-outbound>`: Send |SO| from Odoo database to become a
  bill in external database

.. _purchase/advanced/850-inbound:

850 inbound
-----------

The `850 inbound <https://www.spscommerce.com/edi-document/edi-860-purchase-order-change/>`_ |EDI|
transaction allows companies to automatically receive purchase orders from external software systems
and populate them as |SOs| in Odoo, complete with the correct products, quantities, and prices.

These external companies, integrated with SPS Commerce but not using Odoo, transmit their |PO| data
to their FTP server. SPS Commerce then forwards this data to the Odoo client's
FTP server, where |EDI| mappings translate it into an Odoo-readable |SO| format.

.. _purchase/advanced/810-outbound:

810 outbound
------------

The `810 outbound <https://www.spscommerce.com/edi-document/edi-810-electronic-invoice>`_ |EDI|
transaction allows companies to send invoices from Odoo to external systems. These external
companies, through their own SPS Commerce integration, receive the documents as bills, complete with
the correct products, quantities, and the amount owed to the Odoo user.

Odoo initiates this process through an automated action that collects new invoices and transmits
them via the FTP server. SPS Commerce delivers the data to the external company in a format
compatible with their software.

.. _purchase/advanced/edi-install:

Development process
===================

To enable Odoo's |EDI| integration, the development team must install the FTP server and configure
custom mappings for products and document types between Odoo and other business software systems.

The `cost of setup <https://www.odoo.com/pricing-packs>`_ depends on the volume of products and
external companies involved, with development hours billed upfront. The typical process includes:


#. Scoping (approximately one week)

   Odoo estimates development time and code requirements based on the Consolidated Design Matrix.

#. Development (one week per document type)

   A dedicated developer creates document connections, with a business analyst acting as liaison to
   ensure alignment. between customer and developer.

#. Testing (one month or more)

   The EDI module is deployed to a staging environment, where the customer **must** test the
   document exchanges with trading partners.

4. Deployment (one day)

   Deployment is scheduled for the end of a weekday to minimize disruption. Maintenance charges, if
   applicable, will be added to the customer's subscription.

