===================================================
Setting up the Fiscal Data Module with the Odoo POS
===================================================

Introduction
============

The Belgian government requires certain businesses to use a
government-certified device called a **Fiscal Data Module** (also
known as a **blackbox**). This device works together with the POS
application and logs certain transactions. On top of that, the used
POS application must also be certified by the government and must
adhere to strict standards specified by them. `Odoo 9 (Enterprise Edition) is a
certified application
<http://www.systemedecaisseenregistreuse.be/systemes-certifies>`_. More
information concerning the Fiscal Data Module can be found on `the
official website <http://www.systemedecaisseenregistreuse.be/>`_.

Required hardware
=================

* A government certified `Fiscal Data Module
  <http://www.systemedecaisseenregistreuse.be/systemes-certifies#FDM%20certifiés>`_
  per POS, all of them should work, but the Cleancash SC-B is
  recommended, you will also need:

  * Serial null modem cable per FDM (`example
    <http://www.startech.com/Cables/Serial-Parallel-PS-2/DB9-DB25/10-ft-Cross-Wired-Serial-Null-Modem-Cable-DB9-FM~SCNM9FM>`__)
  * Serial-to-USB adapter per FDM (`example
    <http://trendnet.com/products/proddetail.asp?prod=265_TU-S9>`__)

* A registered IoT Box per POS configuration

Setup
=====

IoT Box
-------

In order to use a Fiscal Data Module, you will need a registered
IoT Box. These IoT Boxes are similar to the regular IoT Boxes we sell,
but they are registered with the Belgian government. This is required
by law. Attempting to use a Fiscal Data Module on a non-registered
IoT Box will not work. You can verify that the Fiscal Data Module is
recognized by the IoT Box by going to the *Hardware status page* via
the IoT Box homepage.

.. image:: setup/posbox_fdm_hardware_status.png
    :align: center

Odoo
----

An Odoo POS app can be given certified POS capabilities by installing
the **Belgian Registered Cash Register** app (technical name:
``pos_blackbox_be``). Because of government restrictions imposed on
us, this installation cannot be undone. After this, you will have to
ensure that each POS configuration has a unique registered IoT Box
associated with it (:menuselection:`Point of Sale --> Configuration
--> Point of Sale` and ensure Hardware Proxy / IoT Box and the serial
number of your IoT Box is set). The first time you open the Point of
Sale and attempt to do a transaction, you will be asked to input the
PIN that you received with your VAT signing card.

.. image:: setup/vat_signing_card_pin.png
    :align: center

Certification & On-premise
==========================

The certification granted by the government is restricted to the use on odoo.com
SaaS instance. The usage of the module from the source or a modified version
will **not** be certified. For on-premise users, we also support the Fiscal Data
Module in such installations. The main restriction is that this requires an
obfuscated version of the ``pos_blackbox_be`` module we will provide on request
for Enterprise customers.

Restrictions
============

As mentioned before, in order to get certified the POS application
must adhere to strict government guidelines. Because of this, a
certified Odoo POS has some limitations not present in the
non-certified Odoo POS.

* Refunding is disabled
* Modifying orderline prices
* Creating/modifying/deleting POS orders
* Selling products without a valid tax
* Multiple Odoo POS configurations per IoT Box are not allowed
* Using the POS without a connection to the IoT Box (and thus FDM)
* Blacklisted modules: pos_discount, pos_reprint, pos_loyalty
