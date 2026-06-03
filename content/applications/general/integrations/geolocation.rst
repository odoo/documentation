===========
Geolocation
===========

Odoo provides geolocation integrations that allow you to locate contacts or places and generate
routes on a map.

.. note::
   The :ref:`Map <studio/views/multiple-records/map>` view is available by default. No configuration
   is required to access it.

.. _general/integrations/geolocation-contacts:

Geolocate contacts and places
=============================

The :guilabel:`Geolocation` feature generates latitude and longitude coordinates to pinpoint
locations. It can be used to:

- Check employees' :ref:`check-in/out locations <attendances/check-in-out-details>` in the
  **Attendances** app;
- Display the pickup location when using the :ref:`pickup on-site delivery method
  <ecommerce/shipping/instore-pickup>`;
- :ref:`Assign partners <contacts/partner-assignment>` in the **Contacts** app;
- Validate addresses with the :ref:`Avatax address validation
  <accounting/avatax/address-validation>` feature.

To enable the :guilabel:`Geolocation` feature, navigate to :menuselection:`Settings --> General
Settings`, scroll down to the :guilabel:`Integrations` section, and activate
:guilabel:`Geolocation`. Then, in the :guilabel:`API` field, select either :guilabel:`Open Street
Map` or :guilabel:`Google Place Map`.

.. _geolocation/google-places-api:

.. tabs::

   .. tab:: OpenStreetMap

      OpenStreetMap is a free, open geographic database updated and maintained by volunteers. No
      additional configuration is required to use :guilabel:`Open Street Map`.

      .. important::
         OpenStreetMap data may not always be accurate. You can `join the OpenStreetMap community
         <https://www.openstreetmap.org/fixthemap>`_ to report and correct any issues you encounter.

   .. tab:: Google Places API

      The Google Places API provides detailed information about places, businesses, and points of
      interest. It supports location-based features like search, navigation, and recommendations.

      .. important::
         Using the Google Places API could require `payment to Google
         <https://mapsplatform.google.com/pricing/>`_.

      To use it, select :guilabel:`Google Place Map` and enter your :ref:`API Key
      <address_autocomplete/generate_api_key>`.

.. note::
   The :guilabel:`Geolocation` setting is automatically enabled when the :ref:`Click & Collect
   <ecommerce/shipping/instore-pickup>` setting is enabled.

.. seealso::
   :doc:`address_autocomplete`

.. _general/integrations/geolocation-routes:

Map routes
==========

Map routes are useful for providing itineraries and locations to :doc:`field service
technicians </applications/services/field_service/planning_itinerary>` and delivery routes to
drivers in a :doc:`dispatch management system
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dispatch>`.

To create routes, follow these steps:

#. Create or sign in to a `MapBox account <https://www.mapbox.com/>`_.
#. `Create an access token <https://docs.mapbox.com/help/dive-deeper/access-tokens/>`_.
#. Go to the `Access tokens page on Mapbox <https://account.mapbox.com/access-tokens/>`_ and copy
   your token to the clipboard.

   .. important::
      Mapbox displays secret tokens only once upon creation and hides them permanently after
      leaving the :guilabel:`Access Token` page. Make sure to save the token.

#. In Odoo, go to :menuselection:`Settings --> General Settings`, scroll down to the
   :guilabel:`Integrations` section.
#. Under :guilabel:`Map Routes`, paste the Mapbox access token into the :guilabel:`Token` field.
#. Click :guilabel:`Save`.

.. seealso::
   - `How to use Mapbox securely: Access tokens
     <https://docs.mapbox.com/help/dive-deeper/how-to-use-mapbox-securely/#access-tokens>`_
   - `URL restrictions <https://docs.mapbox.com/accounts/guides/tokens/#url-restrictions>`_
