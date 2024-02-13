===============
Geolocation
===============

You can geolocate contacts and places, and generate routes on a map in Odoo.

For instance, the routes in the Field Service App.

  .. image:: geolocation/field-service.png
     :alt: Field Service App

You can also locate all your contacts on a map.

  .. image:: geolocation/contacts.png
     :alt: Contacts on a map

Open the :guilabel:`Settings` app, and, under the :guilabel:`Integrations section`, activate
:guilabel:`Geo Localization`. Then, you have to choose between using the OpenStreetMap or Google
Maps Platform API.

**OpenStreetMap**

OpenStreetMap is a free, open geographic database updated and maintained by volunteers. To use it,
select :guilabel:`Open Street Map`.

  .. important::
     OpenStreetMap might not always be accurate. You can `join the OpenStreetMap community <https://www.openstreetmap.org/fixthemap>`_
     to fix any issue encountered.

**Google Places API map**

The Google Places API map provides detailed info on places, businesses, and points of interest. It
supports location-based features like search, navigation, and recommendations.

.. important::
   Using Google Places API requires potential payment to Google. More info `here: https://mapsplatform.google.com/pricing/`_.

If you choose Google Places Map, you must :ref:`create an API key <address_autocomplete/generate_api_key>`
 and enter it in the :guilabel:`API` field.

  .. image:: geolocation/google-places-api-key.png
     :alt: Google Places API key

  .. seealso::
     - :doc:`../../applications/websites/website/configuration/address_autocomplete`
     - `Google Maps Platform <https://mapsplatform.google.com/maps-products/>`_
