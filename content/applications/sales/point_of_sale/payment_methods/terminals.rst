:show-content:

=================
Payment terminals
=================

Connect and integrate a payment terminal with a :ref:`POS system <pos/use/create-pos>` to accept
multiple payment options, including credit and debit cards.

.. _pos/terminals/configuration:

Configuration
=============

To activate a payment terminal and allow payments to be processed through it, follow these steps:

#. Go to the :ref:`POS settings <pos/use/settings>`.
#. Scroll down to the :guilabel:`Payment Terminals` section.
#. Activate the relevant payment terminal.
#. Click :guilabel:`Save`.
#. Click :icon:`fa-arrow-right` :guilabel:`Payment method` below the selected terminal to
   :doc:`configure the related payment method <../payment_methods>`.
#. On the payment method form:

   #. Ensure the :guilabel:`Journal` type is set to :guilabel:`Bank`.
   #. In the :guilabel:`Integration` field, select :guilabel:`Terminal` from the
      :icon:`fa-caret-down` dropdown menu.
   #. In the :guilabel:`Integrate with` field, select one of the activated terminals from the
      :icon:`fa-caret-down` dropdown menu, or click :guilabel:`Setup` on the terminal's card.

      .. tip::
         It is also possible to :guilabel:`Activate` a new terminal directly from the terminal card.

   #. Complete the terminal-specific configuration for one of the following providers:

      - :doc:`Adyen <terminals/adyen>`
      - :doc:`Dpopay <terminals/dpo>`
      - :doc:`Ingenico <terminals/ingenico>`
      - :doc:`Mercado Pago <terminals/mercado_pago>`
      - :doc:`Mollie <terminals/mollie>`
      - :doc:`Pine Labs <terminals/pine_labs>`
      - :doc:`QFPay <terminals/qfpay>`
      - :doc:`Razorpay <terminals/razorpay>`
      - :doc:`SIX <terminals/six>`
      - :doc:`Stripe <terminals/stripe>`
      - :doc:`Tyro <terminals/tyro>`
      - :doc:`Viva.com <terminals/viva_com>`
      - :doc:`Worldline <terminals/worldline>`

.. _pos/terminals/terminal-use:

Terminal use
============

To process an order :ref:`payment <pos/use/sell>` using a :ref:`configured terminal
<pos/terminals/configuration>` in the :ref:`POS register <pos/use/open-register>`, select the
terminal's :doc:`payment method <../payment_methods>` on the :guilabel:`Payment` screen, then follow
the instructions displayed on the terminal screen.

Once the transaction is successful, the payment is automatically validated in the POS register.

.. note::
   - If a connection issue occurs between Odoo and the payment terminal, the transaction is
     automatically canceled.
   - You can also manually abort and validate the order by clicking :guilabel:`Force done` in the
     POS register.
   - To cancel the payment request, click :guilabel:`Cancel` in the POS register.

.. toctree::
   :titlesonly:

   terminals/adyen
   terminals/dpo
   terminals/ingenico
   terminals/mercado_pago
   terminals/mollie
   terminals/pine_labs
   terminals/qfpay
   terminals/razorpay
   terminals/six
   terminals/stripe
   terminals/tyro
   terminals/viva_com
   terminals/worldline
