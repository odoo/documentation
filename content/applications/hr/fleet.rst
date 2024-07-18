:show-content:

=====
Fleet
=====

This document outlines the configurations and settings for the *Fleet* application, for both
:ref:`settings <fleet/settings>` and :ref:`manufacturers <fleet/manufacturers>`.

.. _fleet/settings:

Settings
========

To access the settings menu, go to :menuselection:`Fleet app --> Configuration --> Settings`. Only
two settings need configuration: :guilabel:`End Date Contract Alert` and :guilabel:`New Vehicle
Request`.

.. image:: fleet/fleet-settings.png
   :align: center
   :alt: Settings available for the Fleet application.

End Date Contract Alert
-----------------------

The :guilabel:`End Date Contract Alert` field how many days before the end of a vehicle contract an
alert should be sent. The responsible people receive an email informing them a vehicle contract is
about to expire in the number of days defined in this field.

.. note::
   To determine who the responsible person is for a contract, open an individual contract. The
   person listed as :guilabel:`Responsible` under the :guilabel:`Contract Information` section of
   the contract is the person who will receive the alert.

   To access all contracts, navigate to :menuselection:`Fleet app --> Fleet --> Contracts` and all
   contracts appear in the list. Click on a :guilabel:`Contract` to view it.

   An individual contract can also be found by navigating to :menuselection:`Fleet app --> Fleet -->
   Fleet` and clicking on an individual vehicle. On the vehicle form, click the
   :guilabel:`Contracts` smart button at the top of the page. The contract(s) associated with this
   vehicle only appears in the list. Click on an individual contract to open it. The
   :guilabel:`Responsible` person is listed on the contract.

New Vehicle Request
-------------------

The :guilabel:`New Vehicle Request` field sets a limit on how many new vehicles are requested based
on fleet availability. An employee filling out the salary configurator form (after being offered a
position), will *not* be able to request a new car if the number of existing cars is greater than
the number specified in the :guilabel:`New Vehicle Request` field. Enter the specific number limit
for existing available cars in this field.

.. example::
   If the :guilabel:`New Vehicle Request` limit is set to 20 vehicles, and there are 25 vehicles
   available, an employee would not be able to request a new vehicle. If there are only 10 cars
   available, then the employee would be able to request a new vehicle.

.. _fleet/manufacturers:

Manufacturers
=============

Odoo *Fleet* comes pre-configured with sixty-six commonly used car and bicycle manufacturers in the
database, along with their logos. To view the pre-loaded manufacturers, go to :menuselection:`Fleet
app --> Configuration --> Manufacturers`.

The manufacturers appear in an alphabetical list. Each manufacturer's card lists how many specific
models are configured for each particular manufacturer. Odoo comes with forty-six preconfigured
:doc:`models <fleet/models>` from four major auto manufacturers, and one major bicycle manufacturer:
Audi, BMW, Mercedes, Opel (cars), and Eddy Merckx (bicycle).

.. image:: fleet/manufacturer.png
   :align: center
   :alt: Manufacturer card with the amount of models listed.

Add a manufacturer
------------------

To add a new manufacturer to the database, click :guilabel:`Create`. A manufacturer form will load.
Only two pieces of information are needed, the :guilabel:`Name` of the manufacturer, and the logo.
Type the name of the manufacturer in the name field, and select an image to upload for the logo.
When the information is entered, click :guilabel:`Save`.

.. seealso::
   - :doc:`fleet/models`
   - :doc:`fleet/new_vehicle`
   - :doc:`fleet/service`
   - :doc:`fleet/accidents`

.. toctree::
   :titlesonly:

   fleet/models
   fleet/new_vehicle
   fleet/service
   fleet/accidents
