.. attribute:: banner_route
   :noindex:

   The route to fetch HTML from and prepend it to the view.

   If this attribute is set, the URL of the :ref:`controller route <reference/controllers>` is
   fetched and the returned content is displayed above the view. The JSON response from the
   controller must contain an `html` key.

   If the HTML contains a `<link>` tag for a stylesheet, it is removed from its original location
   and appended to the `<head>` section.

   Use `<a type="action">` tags to interact with the backend, like with :ref:`action buttons
   <reference/view_architectures/form/button>`.

   .. example::
      .. code-block:: xml

         <tree banner_route="/module_name/hello" />

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
