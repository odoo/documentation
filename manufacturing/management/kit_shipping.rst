================================================
Cómo vender un conjunto de productos como un kit
================================================

Un *kit* es un conjunto de componentes que se entregan sin ser ensamblados o mezclados previamente. Los kits se describen en Odoo usando *lista de materiales*. Hay dos formas básicas de configurar kits, dependiendo de cómo se gestionará el stock del kit. En cualquier caso, las aplicaciones de inventario y fabricación deben ser instaladas.

Gestión del Stock de los Componentes
====================================

Si quiere ensamblar los kits a medida que se lo solicitan, gestionando el stok de los *componentes* solamente, debe utilizar una lista de materiales sin ningún paso de fabricación.

Un producto que use una lista de materiales tipo Kit, aparecerá como una sola línea en una oferta y pedido de venta, pero generará una orden de entrega con una línea de pedido para cada uno de los componentes del kit. Como puede observar en el ejemplo siguiente, la imagen de la izquierda muestra un pedido de venta para el kit "Custom Computer Kit", mientras que la imagen de la derecha muestra el pedido de entrega correspondiente.

|image0|\ |image1|

Configuración
-------------

Desde el menú **Productos** de la aplicación de Inventario o Fabricación, cree cada producto componente como lo haría con cualquier otro producto, luego cree el producto de nivel superior, o kit. El producto kit debe tener al menos la ruta **Fabricación**. Dado que no puedes rastrear el stock de en los productos de kit, el tipo de producto debe establecerse como **Consumible**. Además, ya que un producto de kit no se puede comprar, el check **se puede comprar** debe estar sin marcar.

Todos los demás parámetros del producto del kit pueden modificarse como desee. Los componentes no requieren ninguna configuración especial.

.. image:: media/kit_shipping03.png
    :align: center

Una vez que los productos estén configurados, cree una lista de materiales para el producto kit. Añada cada componente y su cantidad. Seleccione el tipo de lista de materiales **Kit**. Todas las demás opciones pueden quedarse con sus valores por defecto.

.. image:: media/kit_shipping04.png
    :align: center

Gestión del Stock del producto Kit y sus Componentes
====================================================

Si desea gestionar el stock del producto de kit de nivel superior, deberá usar una lista de materiales estándar con un paso de fabricación en lugar de una lista de materiales del producto kit. Cuando utilice una lista de materiales estándar para ensamblar kits, se creará una orden de fabricación. La orden de fabricación debe marcarse como completada antes de que el producto kit aparezca en su stock.

Configuración
-------------

On the kit product, select the route **Manufacture**. You may also
select **Make to Order**, which will create a manufacturing order
whenever a sales order is confirmed. Select the product type
**Stockable Product** to enable stock management.

.. image:: media/kit_shipping05.png
    :align: center

En el producto kit, seleccione la ruta **Fabricación**. Puede marcar la ruta **Bajo pedido**, si lo que desea es crear una órden de producción al confirmar un pedido de venta. Seleccione el tipo de producto **Producto almacenable** para habilitar la gestión de stock.

.. image:: media/kit_shipping06.png
    :align: center

.. |image0| image:: ./media/kit_shipping01.png
.. |image1| image:: ./media/kit_shipping02.png
