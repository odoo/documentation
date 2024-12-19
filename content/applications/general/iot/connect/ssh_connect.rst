==========================
IoT box connection via SSH
==========================

.. note::
   SSH connections are only available for :doc:`IoT boxes <../iot_box>`, not the :doc:`Windows
   virtual IoT <../windows_iot>`.

.. warning::
   - This feature should **only** be used with trusted parties, as it provides administrative
     access to the IoT box, which can create security issues.
   - Managing an SSH connection is **not** covered under the standard Odoo support scope. Visit
     the `Odoo Support <https://www.odoo.com/help>`_ page for additional information about what is
     covered.

To provide an :abbr:`SSH (secure shell protocol)` connection to an IoT box, a password must be
generated:

#. Access the IoT system's homepage by opening the IoT app and clicking the IP address displayed
   on the IoT box's card.

   .. note::
      If the desired IoT box is not listed, refer to :ref:`iot/connect/troubleshooting`.

#. Click the :icon:`fa-cogs` (:guilabel:`cogs`) button at the top-right, then click :guilabel:`Remote
   Debug`.
#. In the :guilabel:`Remote Debugging` popup that opens, click :guilabel:`Generate password`.

   .. image:: ssh_connect/ssh-generate-password.png
      :alt: The Remote Debugging password generation window.

   .. warning::
      Once the password is generated, it must be recorded immediately, as it will be lost when the
      window is closed.

#. Enter the :guilabel:`Authentication Token` provided by the user attempting to connect to the IoT
   box.

#. Click :guilabel:`Enable Remote Debugging`.

.. seealso::
   - :doc:`../iot_box`
   - :doc:`../connect`
   - :doc:`../updating_iot`
