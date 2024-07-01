.. attribute:: banner_route
   :noindex:

   The route to fetch HTML from and prepend it to the view.

   If this attribute is set, the URL of the :ref:`controller route <reference/controllers>` is
   fetched and the returned content is displayed above the view. The JSON response from the
   controller must contain an `html` key.

   If the HTML contains a `<link>` tag for a stylesheet, it is removed from its original location
   and appended to the `<head>` section.

   To interact with the backend, use `<a type="action">` tags. For more details, refer to the
   documentation of the `_onActionClicked` method in `AbstractController
   <{GITHUB_PATH}/addons/web/static/src/js/views/abstract_controller.js>`_.

   Only views extending `AbstractView` and `AbstractController`, such as
   :ref:`reference/view_architectures/form`, :ref:`reference/view_architectures/kanban`, and
   :ref:`reference/view_architectures/list`, can use this attribute.

   .. example::
      .. code-block:: xml

         <list banner_route="/module_name/hello" />

      .. code-block:: python

         class MyController(odoo.http.Controller):
             @http.route('/module_name/hello', auth='user', type='json')
             def hello(self):
                 return {
                     'html': """
                         <div>
                             <link href="/module_name/static/src/css/banner.css"
                                 rel="stylesheet">
                             <h1>hello, world</h1>
                         </div> """
                 }

   :requirement: Optional
   :type: path_
   :default: `''`

.. _`path`: https://en.wikipedia.org/wiki/Path_(computing)
