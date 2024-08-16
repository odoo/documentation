=====================================================
How to get DHL credentials for integration with Odoo?
=====================================================

In order to use the Odoo DHL API, you will need:

- A DHL.com SiteID

- A DHL Password

- A DHL Account Number


Getting SiteID and password for countries other than United States (UK and Rest of the world)
=============================================================================================

You should contact DHL account manager and request integration for XML Express API. The presales should provide you live credentials.

Getting SiteID and Password for  United States
==============================================

You need to write to xmlrequests@dhl.com along with your full Account details like account number, region, address, etc. to get API Access.

Configuring for exports 
==============================================
For every shipment that contains goods that crosses borders shipping documents are required from customs for proper handling. The DHL integration is generating these documents together with the shipping labels and the sender have to include the physically in the shipment.

DHL Product
----------------------------------------------

There are two DHL products for international shipping "D" and "P" referring to Document and Parcel. Only Parcels are going through customs (import/export) process so in order to properly export goods the product "P" should be selected under the field DHL Product

``P - DHL Express Worldwide``

Description of shipment's content
----------------------------------------------

For proper handling of the shipment a description of the goods being shipped is required by DHL. To do that the CUSTOM DATA field have to be filled accordingly

``"ship": {"ShipmentDetails": {"Contents": "Guns and roses"}}``

After enabling this feature the descrioption of the goods should appear above the barcode on the shipping labels.

Enabling Paperless shipping
----------------------------------------------

To avoid paper waste, minimize effort and mistakes the export documents can be digitally transmitted to customs through the DHL API. To enable this a special service should be enabled. To accomplish that the following line has to be added in the field CUSTOM DATA.
Note that below the Content is also included as it is required for exports and Paperless Shipment is only supported for international shipping

``"ship": {"ShipmentDetails": {"Contents": "Guns and roses"}, "SpecialService": {"SpecialServiceType": "WY"}}``

After enabling this feature the letters PLT should appear on the shipping labels with black background aboce the description (content). This indicates the courrier that no additional documents are required.

Paperless order requires only a sticker with the shipping label on the box,  the commercial invoices has been digitally transfered through DHL.

Note that there some receipient countries that do not support this and others that only support it under a certain Value. Ask your DHL representative for a list.
