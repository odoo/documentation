==========
UrbanPiper
==========

Integrating UrbanPiper allows you to seamlessly connect multiple delivery platforms, streamlining
order management and improving operational efficiency. UrbanPiper is essential for businesses that
manage multiple delivery platforms, as it simplifies the entire process. Instead of handling
separate systems for each delivery provider, UrbanPiper allows you to manage all orders from a
single interface. Supported providers include `UberEats <https://www.ubereats.com>`_,
`Careem <https://www.careem.com>`_, `Talabat <https://www.talabat.com>`_,
`DoorDash <https://www.doordash.com>`_, `Grubhub <https://www.grubhub.com>`_,
`Deliveroo <https://deliveroo.co.uk/>`_, `Just Eat <https://www.just-eat.ie/>`_,
`EatEasy <https://www.eateasy.ae/dubai>`_, `Postmates <https://www.postmates.com>`_,
`NoonFood <https://www.noon.com>`_, `SkipTheDishes <https://www.skipthedishes.com/>`_,
`Jahez <https://www.jahez.net/>`_, `Rafeeq <https://www.gorafeeq.com/en>`_,
`HungryPanda <https://www.hungrypanda.co>`_, `Ninja <https://ananinja.com/>`_,
`ChowNow <https://www.chownow.com>`_, `Cari <https://getcari.com/>`_,
`HungerStation <https://hungerstation.com>`_, `Mrsool <https://mrsool.co>`_,
`Swiggy <https://www.swiggy.com>`_, `Zomato <https://www.zomato.com>`_, and
`Glovo <https://glovoapp.com>`_.

Pre Requisite
=============

.. _urban_piper/credentials:

Find your UrbanPiper credentials
--------------------------------

`Go to your Atlas account <https://atlas.urbanpiper.com>`_ and retrieve your API key and username by
navigating to :menuselection:`Settings --> API Access`

You will need the following credentials to set up the Point of Sale in Odoo:

- Username
- API key

.. image:: urban_piper/urban_piper_api.png
    :alt: Atlas API access

Configure your Point of Sale
----------------------------

#. :doc:`Activate the Point of Sale - UrbanPiper module <../../../general/apps_modules>` to enable
   UrbanPiper.

#. Go to :ref:`POS settings <configuration/settings>` and find the Food Delivery Connector.

    #. Fill in the :guilabel:`Api key and Username` fields with your
       :ref:`Credentials <urban_piper/credentials>`.

    #. Also add :guilabel:`Urban piper Delivery providers` (i.e. Zomato, UberEats).

    .. image:: urban_piper/food_delivery_connector.png
        :alt: Food Delivery Connector

Create your Location on Atlas
-----------------------------

#. Go to :ref:`POS settings <configuration/settings>` and find the Food Delivery Connector.
#. Press the :guilabel:`Create Store` button.

    .. image:: urban_piper/create_store.png
        :alt: Create store

    .. note::
      After successfully creating the store, a success notification will appear. Note that the
      create store process can take 2-3 minutes to update the locations on the UrbanPiper Atlas
      platform. Store name is same as your point of sale name.

Configure products for Online Food Delivery
-------------------------------------------

#. Go to the :guilabel:`Point of Sale` tab on the product form by navigating to
   :menuselection:`Point of Sale --> Products --> Products`, then click on any product.

#. Fill in the details under the :guilabel:`URBAN PIPER` section.

    .. image:: urban_piper/product_form.png
        :alt: Product form

#. To make multiple products available for food delivery, switch to list view, select the products,
   and Point of Sale :guilabel:`Available on Food Delivery`.

    .. image:: urban_piper/product_list.png
        :alt: Product list

Sync Menu
=========

#. Go to :ref:`POS settings <configuration/settings>` and find the Food Delivery Connector.
#. Press the :guilabel:`Sync menu` button.

    .. note::
      After successfully syncing the menu, a success notification will appear. Below the
      :guilabel:`Sync menu` button, the :guilabel:`Last Sync on` timestamp will display. Note that
      the sync menu process can take 2-3 minutes to update the menu on the UrbanPiper Atlas
      platform.

    .. image:: urban_piper/sync_menu.png
        :alt: Sync menu

Request to Go Live
==================

#. Log-in in `Go to the Locations <https://atlas.urbanpiper.com/locations>`_ tab.

    .. image:: urban_piper/atlas_location.png
        :alt: Locations menu

#. Click on the location you want to activate, then press the :guilabel:`Request to Go Live` button.

    .. image:: urban_piper/location_go_live.png
        :alt: Go live

#. Select the platform(s) you want to activate and press Next.

    .. image:: urban_piper/go_live_popup.png
        :alt: Go live popup

#. Now, configure the platform’s parameters, such as Platform ID and Platform URL, to establish the
   connection between the platform and UrbanPiper, then press the :guilabel:`Request to Go Live`
   button.

    .. image:: urban_piper/go_live_parameters.png
        :alt: Go live parameters

#. To verify that your location is live, check the list view of locations. In the
   :guilabel:`Assoc. platform(s)` column, click on any provider and review the status of that
   specific platform for this location.

    .. image:: urban_piper/platform_status.png
        :alt: Platform status

Order Flow
==========

#. When someone places an order via any food delivery platform :guilabel:`i.e. Zomato, UberEats`,
   you will be notified with sound and a notification. To view the order, simply click on
   "Review Order" and you will be redirected to the orders page.

    .. image:: urban_piper/order_notification.png
        :alt: Order notification

#. Additionally, there is a cart button in the navbar. Clicking this button will give you options
   for :guilabel:`New, Ongoing, and Done`.

    .. image:: urban_piper/cart_button.png
        :alt: Cart button

    .. note::
        The "New" button indicates placed orders, "Ongoing" is for acknowledged orders, and "Done"
        is for food-ready orders.

#. After clicking the :guilabel:`Accept` button, the order is acknowledged.

    .. image:: urban_piper/order_accept.png
        :alt: Order accepted

#. After :guilabel:`acknowledged` the order it will display on the preparation display if kichen
   display is configured.

    .. image:: urban_piper/kichen_display_order.png
        :alt: Kitchen display order

#. When the order is ready, simply click :guilabel:`Mark as ready`, and the order status changes
   to :guilabel:`Food Ready`, marking the order as paid.

    .. image:: urban_piper/order_ready.png
        :alt: Order ready

#. In some cases, the shop/restaurant may want to cancel an order. In this case, click on
   :guilabel:`Reject`, and a pop-up will appear like below.

    .. image:: urban_piper/reject_order.png
        :alt: Reject order pop-up

    .. note::
        For Swiggy orders, they cannot be directly rejected. If you attempt to reject a Swiggy
        order, Swiggy customer support will contact the restaurant. Similarly, "Deliveroo",
        "JustEat", and "HungerStation" do not support order rejection. Ensure to follow the
        respective provider's guidelines for handling such cases.
