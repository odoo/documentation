===================================
Switzerland Accounting Localization
===================================

ISR (In-payment Slip with Reference number)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ISRs are payment slips used in Switzerland. You can print them
directly from Odoo. On the customer invoices, there is a new button
called *Print ISR*.

.. image:: media/switzerland00.png
    :align: center

.. tip:: 
    The button *Print ISR* only appears there is well a bank account
    defined on the invoice. You can use CH6309000000250097798 as bank
    account number and 010391391 as CHF ISR reference.

.. image:: media/switzerland01.png
    :align: center

Then you open a pdf with the ISR.

.. image:: media/switzerland02.png
    :align: center

There exists two layouts for ISR: one with, and one without the bank
coordinates. To choose which one to use, there is an option to print the
bank information on the ISR. To activate it, go in
:menuselection:`Accounting --> Configuration --> Settings --> Accounting Reports`
and tick this box :

.. image:: media/switzerland03.png
    :align: center

Currency Rate Live Update
~~~~~~~~~~~~~~~~~~~~~~~~~

You can update automatically your currencies rates based on the Federal
Tax Administration from Switzerland. For this, go in
:menuselection:`Accounting --> Settings`, activate the multi-currencies setting and choose the service
you want.

.. image:: media/switzerland04.png
    :align: center
