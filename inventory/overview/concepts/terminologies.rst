=============
Terminologies
=============

- **Warehouse**: A warehouse in Odoo is a location where you store
  products. It is either a physical or a virtual warehouse. It
  could be a store or a repository.

- **Location**: Locations are used to structure storage zones within a
  warehouse. In addition to internal locations (your warehouse),
  Odoo has locations for suppliers, customers, inventory loss
  counter-parts, etc.

- **Lots**: Lots are a batch of products identified with a unique
  barcode or serial number. All items of a lot are from the same
  product. (e.g. a set of 24 bottle) Usually, lots come from
  manufacturing order batches or procurements.

- **Serial Number**: A serial number is a unique identifier of a
  specific product. Technically, serial numbers are similar to
  having a lot of 1 unique item.

- **Unit of Measure**: Define how the quantity of products is 
  expressed. Meters, Pounds, Pack of 24, Kilograms,… Unit of
  measure of the same category (ex: size) can be converted to each
  others (m, cm, mm) using a fixed ratio.

- **Consumable**: A product for which you do not want to manage the
  inventory level (no quantity on hand or forecasted) but that you
  can receive and deliver. When this product is needed Odoo suppose
  that you always have enough stock.

- **Stockable**: A product for which you want to manage the inventory
  level.

- **Package:** A package contains several products (identified by their
  serial number/lots or not). Example: a box containing knives and
  forks.

- **Procurement**: A procurement is a request for a specific quantity
  of products to a specific location. Procurement are automatically
  triggered by other documents: Sale orders, Minimum Stock Rules,
  and Procurement rules. You can trigger the procurement manually.
  When procurements are triggered automatically, you should always
  pay attention for the exceptions (e.g. a product should be
  purchased from a vendor, but no supplier is defined).

- **Routes**: Routes define paths the product must follow. Routes may
  be applicable or not, depending on the products, sales order
  lines, warehouse,… To fulfill a procurement, the system will
  search for rules belonging to routes that are defined in the
  related product/sale order.

- **Push Rules**: Push rules trigger when products enter a specific
  location. They automatically move the product to a new location.
  Whether a push rule can be used depends on applicable routes.

- **Procurement Rules** or **Pull Rules**: Procurement rules describe
  how procurements on specific locations should be fulfilled e.g.:
  where the product should come from (source location), whether the
  procurement is MTO or MTS,...

- **Procurement Group**: Routes and rules define inventory moves. For
  every rule, a document type is provided: Picking, Packing,
  Delivery Order, Purchase Order,… Moves are grouped within the
  same document type if their procurement group and locations are
  the same.

- **Stock Moves**: Stock moves represent the transit of goods and
  materials between locations.

- **Quantity On Hand**: The quantity of a specific product that is
  currently in a warehouse or location.

- **Forecasted Quantity**: The quantity of products you can sell for a
  specific warehouse or location. It is defined as the Quantity on
  Hand - Future Delivery Orders + Future incoming shipments +
  Future manufactured units.

- **Reordering Rules**: It defines the conditions for Odoo to
  automatically trigger a request for procurement (buying at a
  supplier or launching a manufacturing order). It is triggered
  when the forecasted quantity meets the minimum stock rule.

- **Cross-Dock**: Cross-docking is a practice in the logistics of
  unloading materials from an incoming semi-trailer truck or
  railroad car and loading these materials directly into outbound
  trucks, trailers, or rail cars, with no storage in between. (does
  not go to the stock, directly from incoming to packing zone)

- **Drop-Shipping**: move products from the vendor/manufacturer
  directly to the customer (could be retailer or consumer) without
  going through the usual distribution channels. Products are sent
  directly from the vendor to the customer, without passing through
  your own warehouse.

- **Removal Strategies**: the strategy to use to select which product
  to pick for a specific operation. Example: FIFO, LIFO, FEFO.

- **Putaway Strategies**: the strategy to use to decide in which
  location a specific product should be set when arriving
  somewhere. (example: cables goes in rack 3, storage A)

- **Scrap**: A product that is broken or outdated. Scrapping a product
  removes it from the stock.
