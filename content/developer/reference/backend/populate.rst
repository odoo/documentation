.. _reference/populate:

========
Populate
========

The Populate module is a synthetic data generation framework for Odoo databases. It follows a
declarative **Blueprint** pattern: you describe *what data to create* in XML or JSON, and the
system generates records at scale, with support for parallel execution, statistical distributions,
and inter-field dependencies.

Typical use cases:

- **Performance testing** -- generate thousands of records to stress-test queries, views, and
  reports.
- **Demo environments** -- ship a module with a realistic-looking dataset out of the box.
- **Development** -- quickly populate a local database so you can work on features that need
  existing data.

.. seealso::
   :ref:`reference/cmdline/duplicate` for a simpler tool that duplicates *existing* records in
   bulk.

.. _reference/populate/installation:

Installation
============

#. Install the ``populate`` Odoo module on your database.
#. (Optional) Install the `Faker <https://faker.readthedocs.io/>`_ library to unlock the
   ``fake.*`` generators:

   .. code-block:: console

      $ pip install -r odoo/addons/populate/requirements.txt

.. important::
   After installing a new module that ships blueprints, you must **upgrade the** ``populate``
   **module** so that its blueprints are discovered and loaded into the database:

   .. code-block:: console

      $ odoo-bin -d <database> -u populate

.. _reference/populate/cli:

CLI command
===========

.. program:: odoo-bin populate

.. code-block:: console

   $ odoo-bin populate -d <database> -b <blueprint>

.. option:: -d <database>, --database <database>

   Target database (required).

.. option:: -b <blueprint>, --blueprint <blueprint>

   Blueprint name or full xmlid (required, unless ``--resume`` is used).

.. option:: --seed <seed>

   Seed for the random number generator. If omitted, a random seed is chosen. Providing the
   same seed guarantees reproducible results (deterministic generation).

.. option:: --scale <factor>

   Multiply all record counts in the blueprint by this factor. Default: ``1``.

.. option:: -j <workers>, --jobs <workers>

   Number of parallel worker processes. Use ``auto`` to use all available CPU threads.
   Default: ``1``.

.. option:: --resume [session_id]

   Resume an interrupted session. Without an argument, resumes the most recent unfinished
   session. With a session ID, resumes that specific session.

.. example::

   .. code-block:: console

      # Run a blueprint at 10x scale using all CPU cores
      $ odoo-bin populate -d mydb -b project.fake_project_demo --scale 10 -j auto

      # Run with a fixed seed for reproducibility
      $ odoo-bin populate -d mydb -b my_module.my_blueprint --seed 42

      # Resume the last interrupted session
      $ odoo-bin populate -d mydb --resume

      # Resume a specific session by ID
      $ odoo-bin populate -d mydb --resume 7

.. _reference/populate/blueprints:

Blueprints
==========

A **Blueprint** is a record of ``populate.blueprint`` that declaratively describes what data to
create. Blueprints are typically shipped inside a module's ``populate/`` data folder and loaded
automatically when the ``populate`` module is upgraded.

If a module's ``populate/`` folder is a valid Python package (contains an ``__init__.py``), its
code is imported, allowing the module to register custom generators.

Blueprints can be defined in XML, JSON, or both. If both ``definition_xml`` and
``definition_json`` are set on the same record, the XML definition takes precedence.

.. _reference/populate/blueprints/model:

Model blocks
------------

A blueprint definition is an ordered list of ``<model/>`` blocks, each representing a batch of
records to create (or update).

.. example::

   .. code-block:: xml

      <model name="res.partner" count="500" id="my_partners">
          <field name="name" generator="fake.company"/>
          <field name="email" generator="fake.company_email"/>
          <field name="active" eval="True"/>
      </model>

``name`` (required)
    Odoo model technical name, e.g. ``res.partner``.

``count`` (required for ``create``)
    Number of records to create.

``id``
    Reference tag. Later blocks can target these records using ``ref``.

``type``
    ``create`` (default) or ``write``. See :ref:`reference/populate/advanced/write`.

``ref``
    For ``write`` blocks: reference to a previously created batch (its ``id``).

``scale``
    ``True`` (default) or ``False``. Whether the :option:`--scale` factor applies to this
    block's ``count``.

``parallel``
    ``True`` (default) or ``False``. Whether this job can be split across parallel workers.
    Set to ``False`` when the model's constraints require sequential writes.

``context``
    A Python dict literal merged into the ORM context for the ``create`` / ``write`` calls.

.. important::
   Model blocks are executed in document order. A block that references another via ``ref`` can
   only target a block that was defined *earlier* in the blueprint. Define master data first,
   then the records that depend on it:

   .. example::

      .. code-block:: xml

         <!-- 1. Stage definitions (master data) -->
         <model name="project.task.type" count="8" id="task_types" scale="False">
             <field name="name" generator="fake.bs"/>
         </model>

         <!-- 2. Projects (reference stages) -->
         <model name="project.project" count="120" id="projects">
             <field name="type_ids" ref="task_types" count="8"/>
         </model>

         <!-- 3. Tasks (reference projects and stages) -->
         <model name="project.task" count="10000" id="tasks">
             <field name="project_id" ref="projects"/>
             <field name="stage_id"   ref="task_types"/>
         </model>

.. _reference/populate/blueprints/json:

JSON format
~~~~~~~~~~~

The JSON format mirrors the XML structure. The top-level array maps to the ordered list of model
blocks:

.. example::

   .. code-block:: json

      [
          {
              "name": "res.partner",
              "count": 500,
              "ref": "my_partners",
              "fields": {
                  "name":   { "generator": "fake.company", "null_ratio": "0" },
                  "email":  { "generator": "fake.company_email" },
                  "active": { "eval": "True" }
              }
          }
      ]

Each object's ``"fields"`` key maps field names to their attribute dictionaries -- the same keys
you would write as XML attributes.

.. _reference/populate/blueprints/fields:

Field definitions
-----------------

Each ``<field/>`` inside a ``<model/>`` block describes how to generate values for that field.

.. example::

   .. code-block:: xml

      <field name="age" generator="scalar.integer" start="18" end="65"
             distribution="normal(mean=35, std=12)"/>

``name`` (required)
    Field name on the model.

``generator``
    The generator to use (see :ref:`reference/populate/generators`). Mutually exclusive with
    ``eval``. If neither is provided, a
    :ref:`default generator <reference/populate/blueprints/defaults>` is selected based on the
    field type.

``eval``
    A Python expression. Can reference other fields by name to produce computed values. Mutually
    exclusive with ``generator``.

``null_ratio``
    Probability (0--1) of generating ``False`` instead of a real value. Default: ``0``.
    Cannot be combined with required fields or weighted ``values``.

``unique``
    ``True`` to enforce uniqueness. Generated values are checked against both existing database
    records and previously generated values within the same job.

``values``
    An explicit value list or weighted dict. Examples: ``"['a', 'b', 'c']"`` (equal weights) or
    ``"{'a': 3, 'b': 1}"`` (``a`` is 3x more likely than ``b``).

``distribution``
    A statistical distribution specification, e.g. ``"normal(mean=50, std=10)"``. See
    :ref:`reference/populate/distributions`. Cannot be combined with weighted ``values``.

``domain``
    An ORM domain to filter related records. Only applies to relational and reference generators.
    Can contain field references resolved at generation time -- see
    :ref:`reference/populate/generators/relational/domains`.

``ref``
    Restrict relational picks to records created under this reference tag. Supports dot-path
    traversal -- see :ref:`reference/populate/generators/relational/ref`.

``virtual``
    ``True`` to mark as a virtual (non-persisted) intermediate field. See
    :ref:`reference/populate/advanced/virtual`.

``comodel_name``
    Required for virtual relational fields (where the comodel cannot be inferred from the ORM).

``partition``
    ``True`` to partition comodel IDs across parallel workers. See
    :ref:`reference/populate/generators/relational/partition`.

.. _reference/populate/blueprints/defaults:

Default generators
------------------

When neither ``generator`` nor ``eval`` is specified for a field, a default generator is
automatically selected based on the field type:

.. list-table::
   :header-rows: 1
   :widths: 30 30

   * - Field type
     - Default generator
   * - ``boolean``
     - ``scalar.boolean``
   * - ``integer``
     - ``scalar.integer``
   * - ``float``
     - ``scalar.float``
   * - ``monetary``
     - ``scalar.monetary``
   * - ``char``
     - ``textual.char``
   * - ``text``
     - ``textual.text``
   * - ``html``
     - ``textual.text``
   * - ``date``
     - ``temporal.date``
   * - ``datetime``
     - ``temporal.datetime``
   * - ``selection``
     - ``choice.selection``
   * - ``binary``
     - ``binary.binary``
   * - ``many2one``
     - ``relation.one``
   * - ``one2many``
     - ``relation.many``
   * - ``many2many``
     - ``relation.many``
   * - ``many2one_reference``
     - ``reference.one``
   * - ``reference``
     - ``reference.raw``
   * - ``properties``
     - ``properties.value``
   * - ``properties_definition``
     - ``properties.definition``

If a field type is not listed above and no ``generator`` or ``eval`` is provided, an error is
raised.

.. _reference/populate/generators:

Generators
==========

Generators are the building blocks that produce values for each field. Every generator has a
``name`` (used to reference it in blueprints) and a set of compatible field types.

.. _reference/populate/generators/scalar:

Scalar generators
-----------------

Generate numeric and boolean values.

``scalar.boolean``
    Generates ``True`` or ``False``. With ``values``, you can weight the probability:
    ``values="{'True': 9, 'False': 1}"`` produces ``True`` ~90% of the time.

    Compatible types: ``boolean``, ``virtual``.

``scalar.integer``
    Generates random integers in a range.

    Compatible types: ``integer``, ``float``, ``virtual``.

    ``start``
        Lower bound (inclusive). Default: ``1``.

    ``end``
        Upper bound (inclusive). Default: ``1000000``.

    .. example::

       .. code-block:: xml

          <field name="quantity" generator="scalar.integer" start="1" end="100"/>

``scalar.float``
    Generates random floating-point numbers in a range.

    Compatible types: ``float``, ``virtual``.

    ``start``
        Lower bound. Default: ``1.0``.

    ``end``
        Upper bound. Default: ``1000000.0``.

``scalar.monetary``
    Generates random monetary values in a range. Depends on the model's currency field -- a
    value for said field must be generated (or eval'd) in the same blueprint block.

    Compatible types: ``monetary``, ``virtual``.

    ``start``
        Lower bound. Default: ``1.0``.

    ``end``
        Upper bound. Default: ``1000000.0``.

.. _reference/populate/generators/textual:

Textual generators
------------------

Generate random strings.

``textual.char``
    Generates a random string of fixed length from a character set.

    Compatible types: ``char``, ``html``, ``virtual``.

    ``char_set``
        Characters to pick from. Default: ASCII letters and digits.

    ``length``
        Length of the generated string. Default: ``12``.

``textual.text``
    Generates a random text block of fixed length.

    Compatible types: ``text``, ``html``, ``virtual``.

    ``char_set``
        Characters to pick from. Default: ASCII letters, digits, spaces, and newlines.

    ``length``
        Length of the generated text. Default: ``50``.

.. tip::
   For realistic-looking text (names, emails, addresses), use the ``fake.*`` generators instead.

.. _reference/populate/generators/temporal:

Temporal generators
-------------------

Generate dates and datetimes within a range, using a relative date syntax.

``temporal.date``
    Generates random dates.

    Compatible types: ``date``, ``datetime``, ``virtual``.

    ``start``
        Start of the range. Default: ``None`` (beginning of time).

    ``end``
        End of the range. Default: ``None`` (end of time).

``temporal.datetime``
    Generates random datetimes.

    Compatible types: ``datetime``, ``virtual``.

    ``start``
        Start of the range. Default: ``None`` (beginning of time).

    ``end``
        End of the range. Default: ``None`` (end of time).

Both generators accept a **relative date syntax** for ``start`` and ``end``:

- ``temporal.date`` uses ``today`` as the anchor: ``"today -6m"``, ``"today +1y"``
- ``temporal.datetime`` uses ``now`` as the anchor: ``"now -30d"``, ``"now +2h"``

Supported suffixes: ``y`` (years), ``m`` (months), ``w`` (weeks), ``d`` (days), ``h`` (hours),
``M`` (minutes), ``s`` (seconds).

.. example::

   .. code-block:: xml

      <field name="date_order" generator="temporal.date" start="today -6m" end="today"/>
      <field name="create_date" generator="temporal.datetime" start="now -30d" end="now"/>

.. _reference/populate/generators/choice:

Choice generators
-----------------

Pick values from a set.

``choice.sample``
    Picks from an explicit ``values`` list (required). Supports weighted values.

    Compatible types: ``integer``, ``float``, ``char``, ``text``, ``html``, ``date``,
    ``datetime``, ``boolean``, ``selection``, ``virtual``.

    .. example::

       .. code-block:: xml

          <field name="priority" generator="choice.sample"
                 values="{'high': 1, 'medium': 5, 'low': 4}"/>

``choice.selection``
    Picks from the field's own selection keys. If ``values`` is provided, only those keys are
    used (with optional weights). Otherwise, all valid selection keys are equally likely.

    Compatible types: ``selection``.

    .. example::

       .. code-block:: xml

          <!-- All selection values equally likely -->
          <field name="state" generator="choice.selection"/>

          <!-- Only these values, with weights -->
          <field name="state" generator="choice.selection"
                 values="{'draft': 1, 'confirmed': 5, 'done': 3}"/>

.. _reference/populate/generators/binary:

Binary generators
-----------------

Generate binary data.

``binary.binary``
    Generates random binary data.

    Compatible types: ``binary``, ``virtual``.

    ``size``
        Size in bytes. Default: ``1024``.

``binary.image``
    Generates a random solid-color image (PNG).

    Compatible types: ``binary``, ``virtual``.

    ``width``
        Image width in pixels. Default: ``64``.

    ``height``
        Image height in pixels. Default: ``64``.

.. _reference/populate/generators/relational:

Relational generators
---------------------

Generate values for relational fields by picking from existing records.

``relation.one``
    Picks a single related record.

    Compatible types: ``many2one``, ``virtual``.

    ``domain``
        ORM domain to filter candidates. See
        :ref:`reference/populate/generators/relational/domains`.

    ``ref``
        Restrict to records created under this reference tag. See
        :ref:`reference/populate/generators/relational/ref`.

    ``comodel_name``
        Required only for ``virtual`` fields, where the comodel cannot be inferred from the
        ORM.

    ``partition``
        Partition comodel IDs across parallel workers. See
        :ref:`reference/populate/generators/relational/partition`.

``relation.many``
    Picks multiple related records (for ``one2many`` and ``many2many`` fields).

    Compatible types: ``one2many``, ``many2many``, ``virtual``.

    ``count``
        Average number of related records to link.

    ``std``
        Standard deviation for the count. Default: ``0`` (always exactly ``count``).

    ``groupby``
        Group linked records by a field on the comodel.

    ``domain``, ``ref``, ``comodel_name``, ``partition``
        Same as ``relation.one``.

    .. example::

       .. code-block:: xml

          <field name="tag_ids" generator="relation.many" count="3" std="2"/>

.. _reference/populate/generators/relational/domains:

Dynamic domains
~~~~~~~~~~~~~~~

The ``domain`` parameter on relational generators can contain **field references** that are
resolved at generation time against the current record's already-generated values:

.. example::

   .. code-block:: xml

      <field name="project_id" generator="relation.one"/>
      <field name="task_id" generator="relation.one"
             domain="[('project_id', '=', project_id)]"/>

``project_id`` in the domain expression is automatically detected as a dependency. At
generation time the expression is evaluated with the actual value produced for ``project_id``,
so every ``task_id`` is guaranteed to belong to its sibling ``project_id``.

.. _reference/populate/generators/relational/ref:

Ref dot-path navigation
~~~~~~~~~~~~~~~~~~~~~~~

The ``ref`` attribute supports **dot-path traversal** to scope picks to *related* records of a
previously created batch:

.. example::

   .. code-block:: xml

      <!-- Create projects and their tasks -->
      <model name="project.project" count="10" id="my_projects">
          <field name="name" generator="fake.bs"/>
      </model>
      <model name="project.task" count="100">
          <field name="project_id" generator="relation.one" ref="my_projects"/>
      </model>

      <!-- Assign timesheets only to tasks that belong to our projects -->
      <model name="account.analytic.line" count="200">
          <field name="task_id" generator="relation.one" ref="my_projects.task_ids"/>
      </model>

``ref="my_projects.task_ids"`` resolves by fetching the records created under ``my_projects``,
traversing the ``task_ids`` relation, and restricting the pick to those IDs. Any valid ORM
dot-path works.

This is mainly useful for corecords that are not explicitly created in the blueprint, such as
``product.product`` records that are automatically created alongside ``product.template``.

.. _reference/populate/generators/relational/partition:

Partitioning for parallel execution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Generators that pick from a comodel (``relation.one``, ``relation.many``, ``reference.one``,
``reference.raw``) support a ``partition`` parameter. When enabled in parallel jobs, comodel
IDs are distributed across workers using round-robin partitioning:

.. example::

   .. code-block:: xml

      <field name="user_id" generator="relation.one" partition="True"/>

This avoids conflicts when creating related records in parallel.

.. note::
   - Partitioning only takes effect when the job has sibling sub-jobs (i.e., it was split for
     parallel execution). In single-worker mode, the parameter has no effect.
   - Partitioning may introduce slight biases when used with non-uniform distributions. The
     general shape of the distribution is preserved, but the parameters won't be followed as
     precisely. For most cases this can be ignored.

.. _reference/populate/generators/reference:

Reference generators
--------------------

Generate values for reference-type fields.

``reference.one``
    Picks a record for a ``many2one_reference`` field. Implicitly depends on the field that
    stores the model name.

    Compatible types: ``many2one_reference``.

    ``partition``
        Partition IDs across parallel workers.

``reference.raw``
    Picks a record for a ``reference`` field (stores ``"model_name,id"`` string).

    Compatible types: ``reference``.

    ``res_model``
        Restrict to a specific model.

    ``res_id``
        Restrict to a specific record ID.

    ``ref``
        Restrict to records under this reference tag.

    ``partition``
        Partition IDs across parallel workers.

.. _reference/populate/generators/faker:

Faker generators (``fake.*``)
-----------------------------

Wraps the `Faker <https://faker.readthedocs.io/en/stable/providers.html>`__ library. Any method
from an allowed provider can be used directly as ``fake.<method_name>``:

.. example::

   .. code-block:: xml

      <field name="name"  generator="fake.name"/>
      <field name="email" generator="fake.email" locale="fr_FR"/>
      <field name="phone" generator="fake.phone_number"/>
      <field name="bio"   generator="fake.paragraph" nb_sentences="5"/>

Method-specific keyword arguments (e.g. ``nb_sentences``) are forwarded as-is to the Faker
method.

``locale``
    Locale for localized data. Default: ``en_US``.

**Allowed providers:** ``address``, ``automotive``, ``bank``, ``barcode``, ``color``,
``company``, ``credit_card``, ``currency``, ``emoji``, ``file``, ``geo``, ``internet``,
``isbn``, ``job``, ``lorem``, ``misc``, ``passport``, ``person``, ``phone_number``,
``profile``, ``sbn``, ``ssn``, ``user_agent``.

.. important::
   Faker must be installed separately. See :ref:`reference/populate/installation`.

.. _reference/populate/generators/misc:

Miscellaneous generators
------------------------

``misc.counter``
    Generates an arithmetic sequence. Wraps around to ``start`` if ``end`` is reached.

    Compatible types: ``integer``, ``float``, ``virtual``.

    ``start``
        Initial value. Default: ``0``.

    ``step``
        Increment per record. Default: ``1``.

    ``end``
        Upper bound (wraps around). Default: ``None`` (no wrap).

    .. example::

       .. code-block:: xml

          <field name="sequence" generator="misc.counter" start="1" step="1"/>

``misc.cycle``
    Cycles through a ``values`` list in order, deterministically. Unlike ``choice.sample``,
    this is not random -- it repeats the sequence exactly.

    Compatible types: ``integer``, ``float``, ``char``, ``text``, ``html``, ``date``,
    ``datetime``, ``virtual``.

    .. note::
       Weighted values are not allowed with ``misc.cycle`` -- values are always cycled in order.

    .. example::

       .. code-block:: xml

          <field name="day" generator="misc.cycle"
                 values="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']"/>

``misc.eval``
    Evaluates a Python expression. Can reference other field names to produce computed values.

    Compatible types: any.

    The evaluation context contains:

    - ``env`` -- the Odoo environment
    - ``model`` -- the model being populated
    - ``Command`` -- ``odoo.fields.Command`` for building relation commands

    .. example::

       .. code-block:: xml

          <field name="display_name" generator="misc.eval"
                 eval="name + ' (' + str(email) + ')'"/>

.. _reference/populate/generators/properties:

Properties generators
---------------------

Generate values for the ``properties`` / ``properties_definition`` field system.

``properties.definition``
    Generates a property schema (list of property definitions).

    Compatible types: ``properties_definition``.

    ``props``
        Explicit list of property names.

    ``count``
        Number of properties to generate (used if ``props`` is not set).

    ``allowed_types``
        Restrict generated property types to this set.

    ``possible_values``
        For selection-type properties: dict mapping property names to their possible values.

``properties.prop``
    Helper for defining a single property entry. Used inside ``properties.definition``.

    Compatible types: ``virtual``.

    ``prop_type``
        The property type (e.g. ``char``, ``integer``, ``selection``).

    ``string``
        The display label for the property.

    ``possible_values``
        For selection-type: list of possible values.

``properties.value``
    Generates values for a ``properties`` field, matching the schema defined by its parent's
    ``properties_definition`` field.

    Compatible types: ``properties``.

.. _reference/populate/distributions:

Distributions
=============

By default, generators produce values uniformly at random within their range. Adding a
``distribution`` parameter changes **how likely** certain parts of the range are sampled.

.. example::

   .. code-block:: xml

      <field name="age"   generator="scalar.integer" start="18" end="90"
             distribution="normal(mean=35, std=12)"/>
      <field name="delay" generator="scalar.float"   start="0"  end="100"
             distribution="exponential(rate=0.05)"/>

.. _reference/populate/distributions/normal:

``normal(mean, std)`` -- Most values near the center
----------------------------------------------------

Produces a classic bell curve. Most values land close to ``mean``; the further from it, the
rarer. ``std`` (standard deviation) controls the spread -- a smaller ``std`` packs values
tighter around the mean.

**Use when** you want a realistic "average with natural variation" pattern.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Employee age
     - ``normal(mean=35, std=12)``
     - Most employees are around 35, fewer very young or very old
   * - Product price
     - ``normal(mean=50, std=15)``
     - Prices cluster around 50, with some cheaper/expensive outliers
   * - Task duration (hours)
     - ``normal(mean=8, std=3)``
     - Most tasks take about a day, some shorter or longer

.. _reference/populate/distributions/uniform:

``uniform()`` -- Any value is equally likely
--------------------------------------------

A flat distribution -- every value in the range has the exact same chance. This is the default
behavior when you omit ``distribution`` entirely, so you rarely need to write it out.

.. _reference/populate/distributions/exponential:

``exponential(rate)`` -- Lots of small values, rare large ones
--------------------------------------------------------------

A steep curve that starts high and drops off. Most generated values are small; large values are
increasingly rare. A higher ``rate`` makes it drop off faster.

**Use when** the data should be skewed toward the low end, with occasional spikes.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Days until deadline
     - ``exponential(rate=0.03)``
     - Most deadlines are soon, a few are months away
   * - Allocated hours
     - ``exponential(rate=0.1)``
     - Most tasks are quick, a few are very long
   * - Time between events
     - ``exponential(rate=0.05)``
     - Short gaps are common, long gaps are rare

.. _reference/populate/distributions/beta:

``beta(alpha, beta)`` -- Values between 0 and 1, shaped how you want
--------------------------------------------------------------------

Always produces values in [0, 1]. The generator maps this onto your ``start``/``end`` range
automatically. The two parameters shape the curve:

- ``alpha=2, beta=2`` -- bell-shaped, centered at 0.5 (like a bounded normal)
- ``alpha=1, beta=3`` -- skewed toward 0 (most values are low)
- ``alpha=3, beta=1`` -- skewed toward 1 (most values are high)
- ``alpha=0.5, beta=0.5`` -- U-shaped, values cluster near 0 and 1

**Use when** you are modeling percentages, progress, ratings, or any bounded proportion.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Project progress (%)
     - ``beta(alpha=2, beta=2)``
     - Most projects are roughly mid-way, few at 0% or 100%
   * - Discount rate
     - ``beta(alpha=1, beta=3)``
     - Most discounts are small, large discounts are rare
   * - Satisfaction score
     - ``beta(alpha=3, beta=1)``
     - Most scores are high

.. _reference/populate/distributions/poisson:

``poisson(lam)`` -- How many times something happens
----------------------------------------------------

Produces whole numbers representing a **count of occurrences**. ``lam`` (lambda) is the average
number of occurrences you expect. Values near ``lam`` are most likely; values far from it are
rare.

**Use when** you are generating "how many" -- e.g., number of items, events, or attempts.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Number of order lines
     - ``poisson(lam=5)``
     - Orders average 5 lines, some have 1, rarely 15+
   * - Support tickets per day
     - ``poisson(lam=3)``
     - About 3 per day on average
   * - Login attempts
     - ``poisson(lam=2)``
     - Usually 1--3 attempts, occasionally more

.. _reference/populate/distributions/triangular:

``triangular(min, max, mode)`` -- Three-point estimate
------------------------------------------------------

A simple triangle shape. ``mode`` is the peak (most likely value), ``min`` and ``max`` are the
absolute bounds. Values near ``mode`` are most common; probability falls off linearly to the
edges.

**Use when** you can estimate three points -- minimum, maximum, and most likely -- but don't
have more detailed data.

.. list-table::
   :header-rows: 1
   :widths: 25 35 40

   * - Example field
     - Parameters
     - Reason
   * - Task estimate (days)
     - ``triangular(min=1, max=30, mode=5)``
     - Most tasks take ~5 days, never less than 1 or more than 30
   * - Shipping cost
     - ``triangular(min=5, max=200, mode=25)``
     - Typically around 25, bounded by 5 and 200

.. _reference/populate/distributions/guide:

Quick decision guide
--------------------

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - You want...
     - Use
   * - Realistic clustering around an average
     - ``normal``
   * - Everything equally likely
     - ``uniform`` (or omit ``distribution``)
   * - Mostly small values, rare big ones
     - ``exponential``
   * - A percentage / bounded ratio
     - ``beta``
   * - A count of "how many times"
     - ``poisson``
   * - Three-point estimate (min / likely / max)
     - ``triangular``

.. _reference/populate/advanced:

Advanced topics
===============

.. _reference/populate/advanced/virtual:

Virtual fields
--------------

Virtual fields are intermediate computation steps that are **not persisted** to the database.
They let you build values that multiple real fields depend on, avoiding duplication:

.. example::

   .. code-block:: xml

      <model name="account.move.line" count="1000">
          <field name="quantity"    generator="scalar.integer" start="1" end="100"/>
          <field name="price_unit"  generator="scalar.float"   start="5" end="500"/>
          <field name="v_subtotal"  virtual="True" eval="quantity * price_unit"/>
          <field name="discount"    eval="v_subtotal * 0.1 if v_subtotal > 200 else 0"/>
          <field name="price_total" eval="v_subtotal - discount"/>
      </model>

   Here ``v_subtotal`` is computed but never written to the database. Both ``discount`` and
   ``price_total`` reference it, so the ``quantity * price_unit`` logic lives in one place.

Virtual fields are also useful for **correlating** persisted fields:

.. example::

   .. code-block:: xml

      <model name="res.partner" count="200">
          <field name="v_first" virtual="True" generator="fake.first_name"/>
          <field name="v_last"  virtual="True" generator="fake.last_name"/>
          <field name="name"    eval="v_first + ' ' + v_last"/>
          <field name="email"   eval="v_first.lower() + '.' + v_last.lower() + '@example.com'"/>
      </model>

   Every record's ``name`` and ``email`` stay consistent with each other, without either
   intermediate value being stored on its own.

.. note::
   The ``v_`` prefix is a naming convention, not a requirement. A virtual field can have any
   valid Python identifier as name, as long as it does not conflict with another field name in
   the same model block.

.. _reference/populate/advanced/write:

Write jobs
----------

Use ``type="write"`` to update records that were created earlier in the same blueprint,
referenced by their ``id`` / ``ref``:

.. example::

   .. code-block:: xml

      <!-- Create partners -->
      <model name="res.partner" count="500" id="customers">
          <field name="name" generator="fake.company"/>
      </model>

      <!-- Update those same partners -->
      <model name="res.partner" type="write" ref="customers">
          <field name="phone" generator="fake.phone_number"/>
      </model>

A ``write`` block without ``ref`` updates **all** existing records of that model.

.. _reference/populate/advanced/inheritance:

Blueprint inheritance
---------------------

Blueprints support Odoo-style view inheritance via ``inherit_id``. A child blueprint applies
XPath or positional specs to its parent's XML definition:

.. example::

   .. code-block:: xml

      <record id="custom_blueprint" model="populate.blueprint">
          <field name="name">Custom Blueprint</field>
          <field name="inherit_id" ref="base_module.parent_blueprint"/>
          <field name="definition_xml" type="xml">
              <!-- Change record count -->
              <model name="res.partner" position="attributes">
                  <attribute name="count">2000</attribute>
              </model>
              <!-- Add a new field to an existing model block -->
              <model name="res.partner" position="inside">
                  <field name="website" generator="fake.url"/>
              </model>
              <!-- Add a new model after an existing one -->
              <model name="res.partner" position="after">
                  <model name="res.users" count="50" id="new_users">
                      <field name="name" generator="fake.name"/>
                      <field name="login" generator="fake.user_name" unique="True"/>
                  </model>
              </model>
          </field>
      </record>

Supported positions: ``attributes``, ``inside``, ``before``, ``after``, ``replace``. XPath
expressions (``<xpath expr="..." position="...">``) work as well. Chained inheritance
(grandchild blueprints) is supported; circular inheritance is detected and rejected.

.. _reference/populate/advanced/sessions:

Sessions and resuming
---------------------

Each run creates a **Session** (``populate.session``) that tracks every job and the records it
produced. If execution is interrupted (``Ctrl+C``, crash, etc.), you can resume where you left
off:

.. example::

   .. code-block:: console

      # Resume the most recent unfinished session
      $ odoo-bin populate -d mydb --resume

      # Resume a specific session by ID
      $ odoo-bin populate -d mydb --resume 42

Sessions also guarantee **deterministic generation**: providing the same ``--seed`` with the
same blueprint produces the same data every time.

.. _reference/populate/advanced/parallel:

Parallel execution
------------------

Pass :option:`-j` (or ``-j auto``) to split large jobs across multiple worker processes. Each
job that exceeds the internal batch size is automatically divided into sub-jobs distributed to
the pool.

.. example::

   .. code-block:: console

      $ odoo-bin populate -d mydb -b my_blueprint --scale 50 -j auto

Parallelism can be disabled per model block with ``parallel="False"`` when the model's
constraints require sequential writes. The multiprocessing backend is controlled by the
environment variable ``ODOO_POPULATE_MULTIPROCESS_ENABLE`` (defaults to ``True``).

.. _reference/populate/advanced/retry:

Automatic retry on constraint violations
----------------------------------------

The session executor includes a retry mechanism for transient database constraint failures.
When a job triggers one of the following PostgreSQL violations, the job's seed is re-rolled and
the entire job is re-executed with a fresh set of random values (up to 5 attempts):

.. list-table::
   :header-rows: 1
   :widths: 25 35 40

   * - Violation
     - Common cause
     - Hint
   * - ``UniqueViolation``
     - Two generated records collide on a unique index
     - Use a generator that produces more varied values, or add ``unique="True"``
   * - ``NotNullViolation``
     - A required column received ``NULL``
     - Add ``null_ratio="0"`` on the offending field
   * - ``CheckViolation``
     - A generated value fails a ``CHECK`` constraint
     - Adjust generator parameters to stay within the constraint
   * - ``ExclusionViolation``
     - Generated values violate an exclusion constraint
     - Adjust generator parameters to stay within the constraint

This means blueprints don't need to be perfectly tuned upfront -- occasional constraint
failures due to randomness are handled transparently. Only violations that persist across all
retry attempts surface as errors.

.. _reference/populate/custom-generators:

Writing custom generators
=========================

You can create custom generators by subclassing
``odoo.addons.populate.generators.Generator`` and placing the code in your module's
``populate/`` package (with an ``__init__.py``). The generator is automatically registered when
the module is loaded.

.. example::

   .. code-block:: python

      from odoo.addons.populate.generators import Generator


      class SequentialEmail(Generator):
          """Generates email addresses like user_0001@example.com, user_0002@example.com, ..."""

          name = 'my_module.sequential_email'
          allowed_field_types = ['char', 'virtual']

          def __init__(self, domain_name='example.com', **kwargs):
              super().__init__(**kwargs)
              self.domain_name = domain_name
              self._counter = 0

          def _next(self, known_vals):
              self._counter += 1
              return f'user_{self._counter:04d}@{self.domain_name}'

          @classmethod
          def get_kwargs(cls, attrs):
              kwargs = super().get_kwargs(attrs)
              if 'domain_name' in attrs:
                  kwargs['domain_name'] = attrs['domain_name']
              return kwargs

Key requirements:

``name`` (class attribute, required)
    A unique string identifier for the generator. Convention: ``<module_name>.<generator_name>``.

``allowed_field_types`` (class attribute, optional)
    List of compatible :ref:`field types <reference/orm/fields>`. Set to ``None`` to allow any
    field type.

``_next(self, known_vals)`` (method, required)
    Generate and return the next value. ``known_vals`` is a dict of field names to their
    already-generated values for the current record (only fields listed in ``depends`` are
    guaranteed to be present).

``get_kwargs(cls, attrs)`` (classmethod, optional)
    Override to convert XML/JSON attributes into ``__init__`` keyword arguments. Always call
    ``super().get_kwargs(attrs)`` first to handle the standard attributes (``values``,
    ``null_ratio``, ``distribution``, ``unique``).

Once registered, the generator can be used in any blueprint:

.. example::

   .. code-block:: xml

      <field name="email" generator="my_module.sequential_email"
             domain_name="mycompany.com"/>

.. _reference/populate/guidelines:

Guidelines
==========

The following guidelines are not hard rules, but they will help you write blueprints,
and handle some edge-cases.

Choose counts that scale cleanly across tiers
---------------------------------------------

A blueprint's ``count`` values should produce a useful, browsable dataset at ``--scale 1`` and
remain coherent at higher scales. A practical approach is to target three tiers:

- **1x (base)** -- a standalone demo or development dataset. Large enough to exercise pagination,
  search, and filters, but small enough to populate in seconds. Around **10 000** records for
  the main transactional model is a reasonable baseline.
- **10x** -- load-testing size (~100 000 records). Reveals UI slowdowns and unindexed query
  bottlenecks.
- **100x** -- stress-test size (~1 000 000 records). Surfaces ORM or PostgreSQL scalability
  limits.

.. example::

   .. code-block:: console

      $ odoo-bin populate -d mydb -b my_module.demo              # 1x  — 10 000 tasks
      $ odoo-bin populate -d mydb -b my_module.demo --scale 10   # 10x — 100 000 tasks
      $ odoo-bin populate -d mydb -b my_module.demo --scale 100  # 100x — 1 000 000 tasks

**Keep ratios realistic.** Absolute counts matter less than the ratio between related models.
If you create 120 projects and 10 000 tasks, that is roughly 80 tasks per project -- a
plausible average. At 100x, that becomes 12 000 projects and 1 000 000 tasks, which keeps the
same ratio.

**Master data ignores scale.** Stage definitions, attribute sets, and similar configuration
records should always use ``scale="False"`` so they stay at their fixed count across all tiers.
Eight task stages at 1x is still eight task stages at 100x.

Use ``context`` to disable side effects
---------------------------------------

Bulk population is significantly faster when mail notifications, field tracking, and automatic
record creation are disabled.

.. example::

   .. code-block:: xml

      <model name="account.move" count="15000" id="invoices"
             context="{'mail_auto_subscribe_no_notify': True}">
          ...
      </model>

Use ``partition="True"`` to avoid serialization errors in multi-worker mode
---------------------------------------------------------------------------

When creating child records in parallel (e.g. order lines for orders), you
should add ``partition="True"`` on the parent field whenever the parent model
has a **stored computed field that depends on the children**.

.. example::

   .. code-block:: xml

      <model name="sale.order.line" count="20000" id="order_lines">
          <field name="order_id" ref="sale_orders" partition="True"/>
      </model>

Without partitioning, workers pick parent IDs at random. Two workers can end
up creating lines for the same order simultaneously. Because ``sale.order``
has stored computed fields that recompute when ``order_line`` changes,
both workers will try to write to the same order row at the same time.
PostgreSQL detects this conflict and raises a **serialization error**.

With ``partition="True"``, each worker is assigned a distinct, non-overlapping
subset of parent IDs. No two workers ever touch the same parent, so the
concurrent writes never collide and the serialization error cannot occur.

Use virtual fields for intermediate logic
-----------------------------------------

Virtual fields cost nothing (they are never written to the database) but make blueprints clearer
and more maintainable. Use them for:

**Correlated fields** -- generate a value once, reuse it in several persisted fields:

.. example::

   .. code-block:: xml

      <field name="v_first" virtual="True" generator="fake.first_name"/>
      <field name="v_last"  virtual="True" generator="fake.last_name"/>
      <field name="name"    eval="v_first + ' ' + v_last"/>
      <field name="email"   eval="v_first.lower() + '.' + v_last.lower() + '@example.com'"/>

**Multi-field uniqueness** -- pack multiple fields into a tuple and mark it unique, then
unpack:

.. example::

   .. code-block:: xml

      <field name="v_product_id" virtual="True" generator="relation.one"
             comodel_name="product.product" ref="products"/>
      <field name="v_partner_id" virtual="True" generator="relation.one"
             comodel_name="res.partner" ref="customers"/>
      <field name="v_unique_pair" virtual="True"
             eval="(v_product_id, v_partner_id)" unique="True"/>
      <field name="product_id" eval="v_unique_pair[0]"/>
      <field name="partner_id" eval="v_unique_pair[1]"/>

Necessary when there is a composite unique constraint on two fields, but adding ``unique=True``
on only one of the fields will restrain the possible combinations too much.

**Computed quantities** -- derive a ratio, then apply it:

.. example::

   .. code-block:: xml

      <field name="v_ratio" virtual="True" generator="scalar.float"
             start="0" end="1" distribution="beta(alpha=2, beta=2)"/>
      <field name="qty_delivered" eval="product_uom_qty * v_ratio"/>

Use ``eval`` to derive values from parent records
-------------------------------------------------

When a child record needs a value that matches its parent (e.g. a subtask inherits its parent's
project), use ``eval`` with ``model.browse()`` or ``env[...]``:

.. example::

   .. code-block:: xml

      <!-- Subtasks inherit the project from their parent task -->
      <field name="parent_id" ref="parent_tasks"/>
      <field name="project_id" eval="model.browse(parent_id).project_id.id"/>

      <!-- Invoice currency matches the journal's currency -->
      <field name="currency_id"
             eval="(journal := env['account.journal'].browse(journal_id)).currency_id.id
                   or journal.company_id.currency_id.id"/>

Use write blocks for two-phase creation
---------------------------------------

Some models require fields to be set in a specific order, or need a second pass to simulate
realistic state transitions. Use ``type="write"`` to update records that were created earlier:

.. example::

   .. code-block:: xml

      <!-- Phase 1: create product templates without variants -->
      <model name="product.template" count="5000" id="templates"
             context="{'create_product_product': False}">
          <field name="name" generator="fake.catch_phrase"/>
      </model>

      <!-- Phase 2: add attribute lines (triggers variant creation) -->
      <model name="product.template.attribute.line" count="8000" id="attr_lines">
          <field name="product_tmpl_id" ref="templates"/>
          ...
      </model>

      <!-- Phase 3: update the generated variants -->
      <model name="product.product" type="write" ref="templates.product_variant_ids">
          <field name="default_code" generator="fake.ean13" unique="True"/>
      </model>
