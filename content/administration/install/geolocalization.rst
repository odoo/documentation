:show-content:

===============
Geolocalization
===============

The geolocalization feature in :menuselection:`General Settings > Integration > Geolocalization` allows you to locate
contacts, places, and routes on a map in Odoo directly.

For instance, the routes in the Field Service App.

  .. image:: geolocalization/field-service.png
     :alt: Field Service App

You can also locate all your contacts on a map.

  .. image:: geolocalization/contacts.png
     :alt: Contacts on a map

Odoo provides two third-party providers to do so.

Open Street Map
===============
Open Street Map (OSM) is a collaborative project that creates a free, editable world map. It provides a platform
for individuals and organizations to share, view, and use map data to create a detailed and up-to-date map that can be
used for various purposes.

If you wish to continue using the free Open Street Map on your database, it is possible to fix the location accuracy by
fixing it in Open Street Map. Please see the following `link <https://www.openstreetmap.org/fixthemap>`_ for more info on
mapping a location.

Google Places Map
================
Google Maps allows users to explore and navigate the world through detailed maps, satellite imagery, and street view.It
provides information about businesses, landmarks, and other points of interest. Users can search for specific places,
get directions, find nearby businesses, and explore locations virtually.


.. note::
   Using Google Places API requires potential payment to Google.


If you choose Google Maps, **you must create an API key with Google**. Once you have your API Key, add it to your
database in :menuselection:`General Settings → Geolocalization → API Google Places Map` and paste the key in the field.

  .. image:: geolocalization/google-places-api-key.png
     :alt: Contacts on a map


If you don’t have an API Key yet, create yours on the :ref:`Google Cloud Console <address_autocomplete/generate_api_key>`.

  .. seealso::
     - :doc:`../../applications/websites/website/configuration/address_autocomplete`
     - `Google Maps Platform <https://mapsplatform.google.com/maps-products/>`_
