==========================
Connect an IoT box via SSH
==========================

.. |iot| replace:: :abbr:`IoT (Internet of Things)`
.. |SSH| replace:: :abbr:`SSH (secure shell protocol)`

To provide an |SSH| connection to an Internet of Things (IoT) box, a password needs to be generated.

.. warning::
   This feature should **only** be utilized with trusted parties, as it provides administrative
   access to the |iot| box, which can create security issues.

   Managing an |SSH| connection is **not** covered under the standard scope of Odoo support. Visit
   the `Odoo Support <https://www.odoo.com/help>`_ page for additional information about what is
   covered.

First, navigate to the :menuselection:`IoT app --> IoT Boxes`. Click on the IP address of the
appropriate |iot| box.

.. note::
   If the desired |iot| box does not appear, see :doc:`troubleshooting` for additional steps.

At the bottom of the |iot| box pop-up window, click :guilabel:`Remote Debug`. This opens the
:guilabel:`Remote Debugging` pop-up window.

.. image:: ssh_connect/ssh-generate-password.png
   :align: center
   :alt: The Remote Debugging password generation window.

Click :guilabel:`Generate password`.

.. warning::
   After the password has been generated from the :guilabel:`Remote Debugging` pop-up window, the
   information **must** be recorded immediately. Once this window is closed, there is no current
   method for looking up this information.

Enter the :guilabel:`Authentication Token` provided by the user attempting to connect to the |iot|
box.

Click :guilabel:`Enable Remote Debugging`.

.. seealso::
   - :doc:`connect`
   - :doc:`troubleshooting`
   - :doc:`updating_iot`
