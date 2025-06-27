========
Hardware
========

Scale
=====

.. important::
   In EU member states, `certification is legally required
   <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.096.01.0107.01.ENG>`_
   to use a scale as an integrated device.

Prerequisite
------------

Connecting a scale requires the use of an IoT System.

.. seealso::
   :doc:`../../general/iot/devices/scale`

Configuration
-------------

Scale connection
~~~~~~~~~~~~~~~~

#. :ref:`Access the POS settings <configuration/settings>` and select your POS, or click the
   :icon:`fa fa-ellipsis-v` icon (:guilabel:`vertical ellipsis`) on a POS card and click
   :guilabel:`Edit`.
#. Scroll down to the :guilabel:`Connected Devices` section and enable :guilabel:`IoT Box`.
#. Select the scale in the :guilabel:`Electronic Scale` field.
#. Click :guilabel:`Save`.

Product configuration
~~~~~~~~~~~~~~~~~~~~~

#. Go to the settings and activate :guilabel:`Units of measure`.
#. Go to :menuselection:`Point of Sale --> Products --> Products`.
#. Select a product to weigh.
#. Ensure the :guilabel:`Point of Sale` checkbox is activated for the product to be available in
   POS.
#. Go to the :guilabel:`Point of Sale` tab and activate :guilabel:`To Weigh With Scale`.
#. Return to the :guilabel:`General Information` tab and set a :guilabel:`Sales Price` per
   :guilabel:`kg`.

.. important::
   The selected unit of measure must be :guilabel:`kg` to comply with the European regulation.

Odoo setup
~~~~~~~~~~

As scales are certified, Odoo must comply with specific requirements. If the database does not comply
with the European regulation, a :icon:`fa-balance-scale` icon is displayed
in red. Clicking it opens a modal window stating the reason why the database isn't compliant. Click
:guilabel:`Apply changes` to force the necessary changes onto the Odoo settings.

.. image:: pos_hardware/legal-requirements.png
   :scale: 75 %

.. note::
   .. raw:: html

      Once the database complies with the European regulation, the scale icon changes its color
      <i class="fa fa-balance-scale" style="color:#d9555c;"></i> <i class="fa fa-arrow-right"></i>
      <i class="fa fa-balance-scale" style="color:#008818;"></i>



- Customer and Point of Sale display must be minimum 8 inches
- The weigh unit precision must be set to three decimal points
- The code used with scales must be of the certified version. Any change in the code will invalidate the certification.


Usage guidelines
~~~~~~~~~~~~~~~~

- When weighing a product remove it from the scale before weighing another one
- The scale weight must change before weighing another product
