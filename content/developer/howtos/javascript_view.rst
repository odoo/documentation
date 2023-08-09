=====================
Customize a view type
=====================

Subclass an existing view
=========================

Assume we need to create a custom version of a generic view. For example, a kanban view with some
extra ribbon-like widget on top (to display some specific custom information). In that case, this
can be done in a few steps:

#. Extend the kanban controller/renderer/model and register it in the view registry.

   .. code-block:: js
      :caption: :file:`custom_kanban_controller.js`

      /** @odoo-module */

      import { KanbanController } from "@web/views/kanban/kanban_controller";
      import { kanbanView } from "@web/views/kanban/kanban_view";
      import { registry } from "@web/core/registry";

      // the controller usually contains the Layout and the renderer.
      class CustomKanbanController extends KanbanController {
          // Your logic here, override or insert new methods...
          // if you override setup(), don't forget to call super.setup()
      }

      CustomKanbanController.template = "my_module.CustomKanbanView";

      export const customKanbanView = {
          ...kanbanView, // contains the default Renderer/Controller/Model
          Controller: CustomKanbanController,
      };

      // Register it to the views registry
      registry.category("views").add("custom_kanban", customeKanbanView);

   In our custom kanban, we defined a new template. We can either inherit the kanban controller
   template and add our template pieces or we can define a completely new template.

   .. code-block:: xml
      :caption: :file:`custom_kanban_controller.xml`

      <?xml version="1.0" encoding="UTF-8" ?>
      <templates>
          <t t-name="my_module.CustomKanbanView" t-inherit="web.KanbanView" owl="1">
              <xpath expr="//Layout" position="before">
                  <div>
                      Hello world !
                  </div>
              </xpath>
          </t>
      </templates>

#. Use the view with the `js_class` attribute in arch.

   .. code-block:: xml

      <kanban js_class="custom_kanban">
          <templates>
              <t t-name="kanban-box">
                  <!--Your comment-->
              </t>
          </templates>
      </kanban>

The possibilities for extending views are endless. While we have only extended the controller
here, you can also extend the renderer to add new buttons, modify how records are presented, or
customize the dropdown, as well as extend other components such as the model and `buttonTemplate`.

Create a new view from scratch
==============================

Creating a new view is an advanced topic. This guide highlight only the essential steps.

#. Create the controller.

    The primary role of a controller is to facilitate the coordination between various components
    of a view, such as the Renderer, Model, and Layout.

   .. code-block:: js
      :caption: :file:`beautiful_controller.js`

      /** @odoo-module */

      import { Layout } from "@web/search/layout";
      import { useService } from "@web/core/utils/hooks";
      import { Component, onWillStart, useState} from "@odoo/owl";

      export class BeautifulController extends Component {
          setup() {
              this.orm = useService("orm");

              // The controller create the model and make it reactive so whenever this.model is
              // accessed and edited then it'll cause a rerendering
              this.model = useState(
                  new this.props.Model(
                      this.orm,
                      this.props.resModel,
                      this.props.fields,
                      this.props.archInfo,
                      this.props.domain
                  )
              );

              onWillStart(async () => {
                  await this.model.load();
              });
          }
      }

      BeautifulController.template = "my_module.View";
      BeautifulController.components = { Layout };

   The template of the Controller displays the control panel with Layout and also the
   renderer.

   .. code-block:: xml
      :caption: :file:`beautiful_controller.xml`

      <?xml version="1.0" encoding="UTF-8"?>
      <templates xml:space="preserve">
          <t t-name="my_module.View" owl="1">
              <Layout display="props.display" className="'h-100 overflow-auto'">
                  <t t-component="props.Renderer" records="model.records" propsYouWant="'Hello world'"/>
              </Layout>
          </t>
      </templates>

#. Create the renderer.

    The primary function of a renderer is to generate a visual representation of data by rendering
    the view that includes records.

   .. code-block:: js
      :caption: :file:`beautiful_renderer.js`

      import { Component } from "@odoo/owl";
      export class BeautifulRenderer extends Component {}

      BeautifulRenderer.template = "my_module.Renderer";

   .. code-block:: xml
      :caption: :file:`beautiful_renderer.xml`

      <?xml version="1.0" encoding="UTF-8"?>
      <templates xml:space="preserve">
          <t t-name="my_module.Renderer" owl="1">
              <t t-esc="props.propsYouWant"/>
              <t t-foreach="props.records" t-as="record" t-key="record.id">
                  // Show records
              </t>
          </t>
      </templates>

#. Create the model.

   The role of the model is to retrieve and manage all the necessary data in the view.

   .. code-block:: js
      :caption: :file:`beautiful_model.js`

      /** @odoo-module */

      import { KeepLast } from "@web/core/utils/concurrency";

      export class BeautifulModel {
          constructor(orm, resModel, fields, archInfo, domain) {
              this.orm = orm;
              this.resModel = resModel;
              // We can access arch information parsed by the beautiful arch parser
              const { fieldFromTheArch } = archInfo;
              this.fieldFromTheArch = fieldFromTheArch;
              this.fields = fields;
              this.domain = domain;
              this.keepLast = new KeepLast();
          }

          async load() {
              // The keeplast protect against concurrency call
              const { length, records } = await this.keepLast.add(
                  this.orm.webSearchRead(this.resModel, this.domain, [this.fieldFromTheArch], {})
              );
              this.records = records;
              this.recordsLength = length;
          }
      }

   .. note::

      For advanced cases, instead of creating a model from scratch, it is also possible to use
      `RelationalModel`, which is used by other views.

#. Create the arch parser.

   The role of the arch parser is to parse the arch view so the view has access to the information.

   .. code-block:: js
      :caption: :file:`beautiful_arch_parser.js`

      /** @odoo-module */

      import { XMLParser } from "@web/core/utils/xml";

      export class BeautifulArchParser extends XMLParser {
          parse(arch) {
              const xmlDoc = this.parseXML(arch);
              const fieldFromTheArch = xmlDoc.getAttribute("fieldFromTheArch");
              return {
                  fieldFromTheArch,
              };
          }
      }

#. Create the view and combine all the pieces together, then register the view in the views
   registry.

   .. code-block:: js
      :caption: :file:`beautiful_view.js`

      /** @odoo-module */

      import { registry } from "@web/core/registry";
      import { BeautifulController } from "./beautiful_controller";
      import { BeautifulArchParser } from "./beautiful_arch_parser";
      import { BeautifulModel } from "./beautiful_model";
      import { BeautifulRenderer } from "./beautiful_renderer";

      export const beautifulView = {
          type: "beautiful",
          display_name: "Beautiful",
          icon: "fa fa-picture-o", // the icon that will be displayed in the Layout panel
          multiRecord: true,
          Controller: BeautifulController,
          ArchParser: BeautifulArchParser,
          Model: BeautifulModel,
          Renderer: BeautifulRenderer,

          props(genericProps, view) {
              const { ArchParser } = view;
              const { arch } = genericProps;
              const archInfo = new ArchParser().parse(arch);

              return {
                  ...genericProps,
                  Model: view.Model,
                  Renderer: view.Renderer,
                  archInfo,
              };
          },
      };

      registry.category("views").add("beautiful", beautifulView);

#. Use the view in an arch.

   .. code-block:: xml

      ...
      <beautiful fieldFromTheArch="name"/>
      ...
