===========================
Manufacturing Terminologies
===========================

.. glossary::

    Bill of Materials

        A bill of materials (BoM) is a document that describes the materials,
        the quantity of each material, and the steps required to manufacture a
        product. Depending on the industry and the nature of the finished
        product, a different name may be used to describe the same document. For
        example, in the pharmaceutical industry, the term “recipe” may be used.

    Cycle

        A production cycle is a frame of time during which an entire
        manufacturing process can be fulfilled.

    Downtime or Leave

        Time during which a resource is unavailable. If the resource is a
        machine, the unavailability is downtime, while if the resource is human,
        unavailable time is called a Leave.

    Finished products

        Finished products are the final output of a manufacturing process. They
        are normally not intended to be used as input into another manufacturing
        order of the company.

    Kit

        A kit is a set of components that are described by a bill of materials,
        but which are delivered separately rather than assembled or mixed.

    Multi-level Bill of Materials

        A bill of material can quickly grow very complex. To keep it manageable,
        it can be broken down into several smaller manufactured parts, each
        having its own BOM. These parts are typically referred to as
        sub-assembly of intermediate products.

        Defining a BOM in multiple levels reduces the complexity of the
        top-level document and allows components to be reused in other BoMs.

    Phantom Bill of Material

        A phantom bill of material is always used in the context of multi-level
        BOMs. It allows to add a sub-assembly as part of a bigger end-product
        while avoiding to trigger a separate manufacturing order for the
        sub-assembly.

        As such, when a manufacturing order for the final product is launched,
        the components of the sub-assembly are reflected in the parent BOM as if
        they were direct components of the parent BOM.

        Phantom BOM are thus used for grouping a set of components with the aim
        of reusing them in many other BOM without the need to launch separate
        manufacturing orders for the sub-assemblies.

    Raw Materials

        Raw materials and components constitute the input that are transformed
        to produce semi-finished or finished goods.

        The transformation here can take many aspects according to the industry.
        It can be simple assembly, welding, mixing, etc.

    Routing

        A routing is a document that describes a series of Work Orders and the
        Work Centers at which they will be carried out

    Semi-finished products and sub-assemblies

        These are products which are manufactured with the purpose to be
        consumed in another manufacturing order.

    Work Order Operations

        Work Order Operations specify the set of activities necessary to fully
        process a manufacturing order. Each activity or operation takes some
        time to be completed and is performed into a determined production unit
        (also called work center).

    Work Order

        A work order is a single manufacturing operation that is scheduled for
        execution on a given date and a given duration.

    Work Center

        Work centers identify production units and their resources. They are
        used to represent the plant capacity as well as costing information. The
        capacity is a combination of resources and their availability time.

    Resources

        In manufacturing a resource can be a human being (employee) or machine
        available in a work center.

    Working Time

        Each resource has its normal working time. For instance, machines can be
        set up to operate 7 days a week 20 hours out of 24.

