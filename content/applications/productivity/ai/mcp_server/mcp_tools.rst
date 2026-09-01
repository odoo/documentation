===================
Available MCP tools
===================

The following AI tools are supported by the :doc:`Odoo MCP server <../mcp_server>`. Each tool is
listed below with its name, description, and suggested *Readonly* status.

Setup/context retrieval
=======================

.. list-table::
   :header-rows: 1

   * - Tool
     - Description
     - Readonly
   * - `AI Tool: MCP Retrieve initial context`
     - Returns context about the currently authenticated user's database, including the user,
       timezone, active company, and available companies.
     - True

.. note::
   `AI Tool: MCP Retrieve initial context` runs automatically at the beginning of a user's session
   and is **only** invoked by the client.

Data querying
=============

.. list-table::
   :header-rows: 1

   * - Tool
     - Description
     - Readonly
   * - `AI Tool: Get Models`
     - Lists every Odoo model the current user can access, including their technical names and
       descriptions.
     - True
   * - `AI Tool: Get Fields`
     - Lists the searchable and usable fields on a given model, including type and relations.
     - True
   * - `AI Tool: Get Menus`
     - Lists every menu the current user can access, with its linked action, model, and available
       view types.
     - True
   * - `AI Tool: Get Menu Details`
     - Returns detailed information for specific menu IDs, such as action, domain, default filters
       and groupings, and searchable fields.
     - True
   * - `AI Tool: Search`
     - Searches records on a model using a domain and returns the requested fields.
     - True
   * - `AI Tool: Read group`
     - Groups records by one or more fields and computes aggregates (sums, counts, averages, etc.)
       over them.
     - True
   * - `AI Tool: Update Records`
     - Updates one or more existing records matching a domain with new field values.
     - False
   * - `AI Tool: Create Records`
     - Creates new records on a model with specified fields, optionally linking a preview menu to
       show the result.
     - False

Navigation
==========

.. list-table::
   :header-rows: 1

   * - Tool
     - Description
     - Readonly
   * - `AI Tool: Open Menu List`
     - Redirects the UI to a menu's List view, optionally filtered and grouped.
     - True
   * - `AI Tool: Open Menu Kanban`
     - Redirects the UI to a menu's Kanban view, optionally filtered and grouped.
     - True
   * - `AI Tool: Open Menu Graph`
     - Redirects the UI to a menu's Graph view with a chosen measure, chart mode, grouping, and
       sorting options.
     - True
   * - `AI Tool: Open Menu Pivot`
     - Redirects the UI to a menu's Pivot view with row and column groupings and measures.
     - True
   * - `AI Tool: Run view action`
     - Opens client or report actions (e.g., Discuss, printed reports) tied to a menu.
     - True
   * - `AI Tool: Compute Report Measures`
     - Returns the measures available for aggregation on a given model or action. This tool is meant
       to be called before opening a pivot or graph view.
     - True
   * - `AI Tool: Prepare Record Previews`
     - Prepares metadata so that specific records render as rich preview cards in the Odoo Chat.
     - True
   * - `AI Tool: Adjust Search`
     - Adjusts the search filters, groupings, active measures, or view type of the current view.
     - True
   * - `AI Tool: Compute Date`
     - Computes an exact date or datetime from a relative expression (e.g., "start of last week").
     - True

Website styling
===============

.. list-table::
   :header-rows: 1

   * - Tool
     - Description
     - Readonly
   * - `AI Tool: Get Snippets`
     - Fetches the HTML markup for named website-builder snippets so they can be edited and inserted
       into a page.
     - True
   * - `AI Tool: Read Custom CSS`
     - Reads the current contents of the website's custom SCSS rules.
     - True
   * - `AI Tool: Write Custom CSS`
     - Overwrites the website's custom SCSS rules with new styling.
     - False
   * - `AI Tool: Apply HTML to Page`
     - Applies HTML edits (e.g., replace, insert) to a specific website page.
     - False

Media generation
================

.. list-table::
   :header-rows: 1

   * - Tool
     - Description
     - Readonly
   * - `AI Tool: Generate an Image`
     - Generates a new image from a text prompt. This tool is **only** invoked on explicit user
       request.
     - False
   * - `AI Tool: Search Images`
     - Searches *Unsplash* for stock photos matching a query.
     - True
   * - `AI Tool: Get user image URLs`
     - Converts uploaded chat attachment IDs into permanent Odoo image URLs for use in content.
     - True

Additional tools
================

.. list-table::
   :header-rows: 1

   * - Tool
     - Description
     - Readonly
   * - `AI Tool: Web Search`
     - Delegates a factual question or research task to a web search agent.
     - True
   * - `AI Tool: Load Skills`
     - Loads detailed instructions and tools for specific registered AI skills by ID.
     - True

.. seealso::
   - :doc:`../mcp_server`
