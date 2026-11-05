
.. _reference/security:

================
Security in Odoo
================

Aside from manually managing access using custom code, Odoo provides one main
data-driven mechanism to manage or restrict access to data.

This mechanism is linked to specific users through *groups*: a user belongs
to any number of groups, and security rules are associated to groups,
thus applying security rules to users.

.. class:: res.groups

    .. attribute:: name

        serves as user-readable identification for the group (spells out the
        role / purpose of the group)

    .. attribute:: privilege_id

        The *scope*, serves to associate groups with an Odoo App
        (~a set of related business models) and convert them into an exclusive
        selection in the user form.

        .. todo:: clarify & document special cases & relationship between
                  groups & scopes better

    .. attribute:: implied_ids

        Other groups the user should be considered to belong to.
        A user *explicitly* belongs to its assigned groups, and *implicitly*
        belongs to all the groups directly or indirectly implied by its assigned groups.

    .. attribute:: comment

        Additional notes on the group, mostly for documentation purpose.

.. _reference/security/access:

Access Rights
=============

*Grants* access to records in a model for a given set of operations. If no access
rights matches an operation on a model for a user (through their group), the
user doesn't have access.

Access rights are additive, a user's accesses are the union of the accesses
they get through all their groups, e.g., given a user who is part of group A
granting read and create access and a group B granting update access, the user
will have all three of create, read, and update.

.. class:: ir.access

    .. attribute:: name

        The purpose or role of the group.

    .. attribute:: model_id

        The model to which the access applies.

    .. attribute:: group_id

        The :class:`res.groups` to which the accesses are granted.
        An empty :attr:`group_id` means the access is actually a *restriction*
        applied to *every user*.

    .. attribute:: operation

        Which operation(s) the access applies to, a subset of create, read,
        update, delete given as a subsequence of the string ``"crud"``. For
        instance, ``"r"`` stands for "read", and ``"cd"`` stands for "create,
        delete".

    .. attribute:: domain

        A predicate specified as a :ref:`domain <reference/orm/domains>`.

        The domain is a *python expression* which can use the following
        variables:

        ``time``
            Python's :mod:`python:time` module.
        ``user``
            The current user, as a singleton recordset.
        ``company_id``
            The current user's currently selected company as a single company id
            (not a recordset).
        ``company_ids``
            All the companies to which the current user has access as a list of
            company ids (not a recordset), see
            :ref:`howto/company/security` for more details.

.. _reference/security/rules:

Domain
------

The ``domain`` of access rights are *conditions* which must be satisfied in
order for an operation to be allowed. When its ``domain`` is not set, an access
right actually applies to *all records* of the model, just like if the domain
was ``[]`` (which is always true).

A user can perform some operation on a given record if the user has an access
right in one of its (explicit and implicit) groups for the record's model and
operation, such that the record satisfies the access right's domain.

.. _reference/security/rules/global:

Global rules versus group rules
-------------------------------

The access rights were ``group_id`` is not set behave as *restrictions*, and
apply to *all users*. That's why they are called *global rules*.

In order to perform some operation on a given record, the record must satisfy
the domains of *all* the global rules for that model and operation.

As a consequence, there is a large difference between global and group access
rights in how they compose and combine:

* Global rules *intersect*, if two global rules apply then *both* must be
  satisfied for the access to be granted, this means adding global rules always
  restricts access further.
* Group rules *unify*, if two group rules apply then *any of them* must be
  satisfied for the access to be granted. This means adding group rules can
  expand access, but not beyond the bounds defined by global rules.
* The global and group rulesets *intersect*, which means that a global rule can
  prevent some access which would be otherwise granted by a group rule.

.. danger::

    Creating multiple global rules is risky as it's possible to create
    non-overlapping rulesets, which will remove all access.

.. _reference/security/fields:

Field Access
============

An ORM :class:`~odoo.fields.Field` can have a ``groups`` attribute
providing a list of groups (as a comma-separated string of
:term:`external identifiers`).

If the current user is not in one of the listed groups, he will not have
access to the field:

* restricted fields are automatically removed from requested views
* restricted fields are removed from :meth:`~odoo.models.Model.fields_get`
  responses
* attempts to (explicitly) read from or write to restricted fields results in
  an access error

.. todo::

    field access groups apply to the Superuser in fields_get but not in
    read/write...

.. _time module: https://docs.python.org/3/library/time.html


.. _reference/security/pitfalls:

Security Pitfalls
=================

As a developer, it is important to understand the security mechanisms and avoid
common mistakes leading to insecure code.

Unsafe Public Methods
---------------------

Any public method can be executed via a :ref:`RPC call
<api/external_api/calling_methods>` with the chosen parameters. The methods
starting with a ``_`` are not callable from an action button or external API.

On public methods, the record on which a method is executed and the parameters
can not be trusted, ACL being only verified during CRUD operations.

.. code-block:: python

    # this method is public and its arguments can not be trusted
    def action_done(self):
        if self.state == "draft" and self.env.user.has_group('base.manager'):
            self._set_state("done")

    # this method is private and can only be called from other python methods
    def _set_state(self, new_state):
        self.sudo().write({"state": new_state})

Making a method private is obviously not enough and care must be taken to use it
properly.

Bypassing the ORM
-----------------

You should never use the database cursor directly when the ORM can do the same
thing! By doing so you are bypassing all the ORM features, possibly the
automated behaviours like translations, invalidation of fields, ``active``,
access rights and so on.

And chances are that you are also making the code harder to read and probably
less secure.

.. code-block:: python

    # very very wrong
    self.env.cr.execute('SELECT id FROM auction_lots WHERE auction_id in (' + ','.join(map(str, ids))+') AND state=%s AND obj_price > 0', ('draft',))
    auction_lots_ids = [x[0] for x in self.env.cr.fetchall()]

    # no injection, but still wrong
    self.env.cr.execute('SELECT id FROM auction_lots WHERE auction_id in %s '\
               'AND state=%s AND obj_price > 0', (tuple(ids), 'draft',))
    auction_lots_ids = [x[0] for x in self.env.cr.fetchall()]

    # nearly there
    auction_lots_ids = [x[x] for x in self.env.execute_query(SQL("""
        SELECT id FROM auction_lots
        WHERE auction_id IN %s AND state = %s AND obj_price > 0
    """, tuple(ids), 'draft'))

    # better
    auction_lots_ids = self.search([('auction_id','in',ids), ('state','=','draft'), ('obj_price','>',0)])


SQL injections
~~~~~~~~~~~~~~

Care must be taken not to introduce SQL injections vulnerabilities when using
manual SQL queries. The vulnerability is present when user input is either
incorrectly filtered or badly quoted, allowing an attacker to introduce
undesirable clauses to a SQL query (such as circumventing filters or
executing ``UPDATE`` or ``DELETE`` commands).

The best way to be safe is to never, NEVER use Python string concatenation (+)
or string parameters interpolation (%) to pass variables to a SQL query string.

The second reason, which is almost as important, is that it is the job of the
database abstraction layer (psycopg2) to decide how to format query parameters,
not your job! For example psycopg2 knows that when you pass a list of values
it needs to format them as a comma-separated list, enclosed in parentheses !

Even better, there exists a :class:`~odoo.tools.SQL` wrapper to build queries
using templates that handles the formatting of inputs.
Check :ref:`SQL execution <reference/orm/sql>` for detailed usage.

.. code-block:: python

    # the following is very bad:
    #   - it's a SQL injection vulnerability
    #   - it's unreadable
    #   - it's not your job to format the list of ids
    self.env.cr.execute('SELECT distinct child_id FROM account_account_consol_rel ' +
               'WHERE parent_id IN ('+','.join(map(str, ids))+')')

    # better
    self.env.cr.execute('SELECT DISTINCT child_id '\
               'FROM account_account_consol_rel '\
               'WHERE parent_id IN %s',
               (tuple(ids),))

    # more readable
    self.env.cr.execute(SQL("""
        SELECT DISTINCT child_id
        FROM account_account_consol_rel
        WHERE parent_id IN %s
    """, tuple(ids)))

This is very important, so please be careful also when refactoring, and most
importantly do not copy these patterns!

Here is a memorable example to help you remember what the issue is about (but
do not copy the code there). Before continuing, please be sure to read the
online documentation of pyscopg2 to learn of to use it properly:

- `The problem with query parameters <http://initd.org/psycopg/docs/usage.html#the-problem-with-the-query-parameters>`_
- `How to pass parameters with psycopg2 <http://initd.org/psycopg/docs/usage.html#passing-parameters-to-sql-queries>`_
- `Advanced parameter types <http://initd.org/psycopg/docs/usage.html#adaptation-of-python-values-to-sql-types>`_
- `Psycopg documentation <https://www.psycopg.org/docs/sql.html>`_

Building the domains
--------------------

Domains are represented as lists and are serializable.
You would be tented to manipulate these lists directly, however it can
introduce subtle issues where the user could inject a domain if the input is
not normalized.
Use :class:`~odoo.fields.Domain` to handle safely the manipulation
of domains.

.. code-block:: python

    # bad
    # the user can just pass ['|', ('id', '>', 0)] to access all
    domain = ...  # passed by the user
    security_domain = [('user_id', '=', self.env.uid)]
    domain += security_domain  # can have a side-effect if this is a function argument
    self.search(domain)

    # better
    domain = Domain(...)
    domain &= Domain('user_id', '=', self.env.uid)
    self.search(domain)

Unescaped field content
-----------------------

When rendering content using JavaScript and XML, one may be tempted to use
a ``t-raw`` to display rich-text content. This should be avoided as a frequent
`XSS <https://en.wikipedia.org/wiki/Cross-site_scripting>`_ vector.

It is very hard to control the integrity of the data from the computation until
the final integration in the browser DOM. A ``t-raw`` that is correctly escaped
at the time of introduction may no longer be safe at the next bugfix or
refactoring.

.. code-block:: javascript

    QWeb.render('insecure_template', {
        info_message: "You have an <strong>important</strong> notification",
    })

.. code-block:: xml

    <div t-name="insecure_template">
        <div id="information-bar"><t t-raw="info_message" /></div>
    </div>

The above code may feel safe as the message content is controlled but is a bad
practice that may lead to unexpected security vulnerabilities once this code
evolves in the future.

.. code-block:: javascript

    // XSS possible with unescaped user provided content !
    QWeb.render('insecure_template', {
        info_message: "You have an <strong>important</strong> notification on " \
            + "the product <strong>" + product.name + "</strong>",
    })

While formatting the template differently would prevent such vulnerabilities.

.. code-block:: javascript

    QWeb.render('secure_template', {
        message: "You have an important notification on the product:",
        subject: product.name
    })

.. code-block:: xml

    <div t-name="secure_template">
        <div id="information-bar">
            <div class="info"><t t-out="message" /></div>
            <div class="subject"><t t-out="subject" /></div>
        </div>
    </div>

.. code-block:: css

    .subject {
        font-weight: bold;
    }

Creating safe content using :class:`~markupsafe.Markup`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

See the `official documentation <https://markupsafe.palletsprojects.com/>`_ for
explanations, but the big advantage of
:class:`~markupsafe.Markup` is that it's a very rich type overrinding
:class:`str` operations to *automatically escape parameters*.

This means that it's easy to create *safe* html snippets by using
:class:`~markupsafe.Markup` on a string literal and "formatting in"
user-provided (and thus potentially unsafe) content:

.. code-block:: pycon

    >>> Markup('<em>Hello</em> ') + '<foo>'
    Markup('<em>Hello</em> &lt;foo&gt;')
    >>> Markup('<em>Hello</em> %s') % '<foo>'
    Markup('<em>Hello</em> &lt;foo&gt;')

though it is a very good thing, note that the effects can be odd at times:

.. code-block:: pycon

    >>> Markup('<a>').replace('>', 'x')
    Markup('<a>')
    >>> Markup('<a>').replace(Markup('>'), 'x')
    Markup('<ax')
    >>> Markup('<a&gt;').replace('>', 'x')
    Markup('<ax')
    >>> Markup('<a&gt;').replace('>', '&')
    Markup('<a&amp;')

.. tip:: Most of the content-safe APIs actually return a
         :class:`~markupsafe.Markup` with all that implies.

The :class:`~markupsafe.escape` method (and its
alias :class:`~odoo.tools.misc.html_escape`) turns a `str` into
a :class:`~markupsafe.Markup` and escapes its content. It will not escape the
content of a :class:`~markupsafe.Markup` object.

.. code-block:: python

    def get_name(self, to_html=False):
        if to_html:
            return Markup("<strong>%s</strong>") % self.name  # escape the name
        else:
            return self.name

    >>> record.name = "<R&D>"
    >>> escape(record.get_name())
    Markup("&lt;R&amp;D&gt;")
    >>> escape(record.get_name(True))
    Markup("<strong>&lt;R&amp;D&gt;</strong>")  # HTML is kept

When generating HTML code, it is important to separate the structure (tags) from
the content (text).

.. code-block:: pycon

    >>> Markup("<p>") + "Hello <R&D>" + Markup("</p>")
    Markup('<p>Hello &lt;R&amp;D&gt;</p>')
    >>> Markup("%s <br/> %s") % ("<R&D>", Markup("<p>Hello</p>"))
    Markup('&lt;R&amp;D&gt; <br/> <p>Hello</p>')
    >>> escape("<R&D>")
    Markup('&lt;R&amp;D&gt;')
    >>> _("List of Tasks on project %s: %s",
    ...     project.name,
    ...     Markup("<ul>%s</ul>") % Markup().join(Markup("<li>%s</li>") % t.name for t in project.task_ids)
    ... )
    Markup('Liste de tâches pour le projet &lt;R&amp;D&gt;: <ul><li>First &lt;R&amp;D&gt; task</li></ul>')

    >>> Markup("<p>Foo %</p>" % bar)  # bad, bar is not escaped
    >>> Markup("<p>Foo %</p>") % bar  # good, bar is escaped if text and kept if markup

    >>> link = Markup("<a>%s</a>") % self.name
    >>> message = "Click %s" % link  # bad, message is text and Markup did nothing
    >>> message = escape("Click %s") % link  # good, format two markup objects together

    >>> Markup(f"<p>Foo {self.bar}</p>")  # bad, bar is inserted before escaping
    >>> Markup("<p>Foo {bar}</p>").format(bar=self.bar)  # good, sorry no fstring

When working with translations, it is especially important to separate the HTML
from the text. The translation methods accepts a :class:`~markupsafe.Markup`
parameters and will escape the translation if it gets receives at least one.

.. code-block:: pycon

    >>> Markup("<p>%s</p>") % _("Hello <R&D>")
    Markup('<p>Bonjour &lt;R&amp;D&gt;</p>')
    >>> _("Order %s has been confirmed", Markup("<a>%s</a>") % order.name)
    Markup('Order <a>SO42</a> has been confirmed')
    >>> _("Message received from %(name)s <%(email)s>",
    ...   name=self.name,
    ...   email=Markup("<a href='mailto:%s'>%s</a>") % (self.email, self.email)
    Markup('Message received from Georges &lt;<a href=mailto:george@abitbol.example>george@abitbol.example</a>&gt;')


Escaping vs Sanitizing
----------------------

.. important::

    Escaping is always 100% mandatory when you mix data and code, no matter how
    safe the data

**Escaping** converts *TEXT* to *CODE*. It is absolutely mandatory to do it
every time you mix *DATA/TEXT* with *CODE* (e.g. generating HTML or python code
to be evaluated inside a `safe_eval`), because *CODE* always requires *TEXT* to
be encoded. It is critical for security, but it's also a question of
correctness. Even when there is no security risk (because the text is 100%
guarantee to be safe or trusted), it is still required (e.g. to avoid breaking
the layout in generated HTML).

Escaping will never break any feature, as long as the developer identifies which
variable contains *TEXT* and which contains *CODE*.

.. code-block:: python

    >>> from odoo.tools import html_escape, html_sanitize
    >>> data = "<R&D>" # `data` is some TEXT coming from somewhere

    # Escaping turns it into CODE, good!
    >>> code = html_escape(data)
    >>> code
    Markup('&lt;R&amp;D&gt;')

    # Now you can mix it with other code...
    >>> self.website_description = Markup("<strong>%s</strong>") % code

**Sanitizing** converts *CODE* to *SAFER CODE* (but not necessary *safe* code).
It does not work on *TEXT*. Sanitizing is only necessary when *CODE* is
untrusted, because it comes in full or in part from some user-provided data. If
the user-provided data is in the form of *TEXT* (e.g. the content from a form
filled by a user), and if that data was correctly escaped before putting it in
*CODE*, then sanitizing is useless (but can still be done). If however, the
user-provided data was **not escaped**, then sanitizing will **not** work as
expected.

.. code-block:: python

    # Sanitizing without escaping is BROKEN: data is corrupted!
    >>> html_sanitize(data)
    Markup('')

    # Sanitizing *after* escaping is OK!
    >>> html_sanitize(code)
    Markup('<p>&lt;R&amp;D&gt;</p>')

Sanitizing can break features, depending on whether the *CODE* is expected to
contain patterns that are not safe. That's why `fields.Html` and
`tools.html_sanitize()` have options to fine-tune the level of sanitization for
styles, etc. Those options have to be carefully considered depending on where
the data comes from, and the desired features. The sanitization safety is
balanced against sanitization breakages: the safer the sanitisation the more
likely it is to break things.

.. code-block:: python

    >>> code = "<p class='text-warning'>Important Information</p>"
    # this will remove the style, which may break features
    # but is necessary if the source is untrusted
    >>> html_sanitize(code, strip_classes=True)
    Markup('<p>Important Information</p>')

Evaluating content
------------------

Some may want to ``eval`` to parse user provided content. Using ``eval`` should
be avoided at all cost. A safer, sandboxed, method :class:`~odoo.tools.safe_eval`
can be used instead but still gives tremendous capabilities to the user running
it and must be reserved for trusted privileged users only as it breaks the
barrier between code and data.

.. code-block:: python

    # very bad
    domain = eval(self.filter_domain)
    return self.search(domain)

    # better but still not recommended
    from odoo.tools import safe_eval
    domain = safe_eval(self.filter_domain)
    return self.search(domain)

    # good
    from ast import literal_eval
    domain = literal_eval(self.filter_domain)
    return self.search(domain)

Parsing content does not need ``eval``

==========  ==================  ================================
Language    Data type           Suitable parser
==========  ==================  ================================
Python      int, float, etc.    int(), float()
Javascript  int, float, etc.    parseInt(), parseFloat()
Python      dict                json.loads(), ast.literal_eval()
Javascript  object, list, etc.  JSON.parse()
==========  ==================  ================================

Accessing object attributes
---------------------------

If the values of a record needs to be retrieved or modified dynamically, one may
want to use the ``getattr`` and ``setattr`` methods.

.. code-block:: python

    # unsafe retrieval of a field value
    def _get_state_value(self, res_id, state_field):
        record = self.sudo().browse(res_id)
        return getattr(record, state_field, False)

This code is however not safe as it allows to access any property of the record,
including private attributes or methods.

The ``__getitem__`` of a recordset has been defined and accessing a dynamic
field value can be easily achieved safely:

.. code-block:: python

    # better retrieval of a field value
    def _get_state_value(self, res_id, state_field):
        record = self.sudo().browse(res_id)
        return record[state_field]

The above method is obviously still too optimistic and additional verifications
on the record id and field value must be done.
