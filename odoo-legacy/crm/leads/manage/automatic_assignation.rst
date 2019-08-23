================================================================
Automate lead assignation to specific sales teams or salespeople
================================================================

Depending on your business workflow and needs, you may need to dispatch
your incoming leads to different sales team or even to specific
salespeople. Here are a few example:

- Your company has several offices based on different geographical
  regions. You will want to assign leads based on the region;

- One of your sales teams is dedicated to treat opportunities from
  large companies while another one is specialized for SMEs. You
  will want to assign leads based on the company size;

- One of your sales representatives is the only one to speak foreign
  languages while the rest of the team speaks English only.
  Therefore you will want to assign to that person all the leads
  from non-native English-speaking countries.

As you can imagine, manually assigning new leads to specific individuals
can be tedious and time consuming - especially if your company generates
a high volume of leads every day. Fortunately, Twenty20 CRM allows you to
automate the process of lead assignation based on specific criteria such
as location, interests, company size, etc. With specific workflows and
precise rules, you will be able to distribute all your opportunities
automatically to the right sales teams and/or salesman.

Configuration
=============

If you have just started with Twenty20 CRM and haven't set up your sales
team nor registered your salespeople, :doc:`read this documentation first <../../overview/started/setup>`.

.. note::
    You have to install the module **Lead Scoring**. Go to 
    :menuselection:`Apps` and install it if it's not the case already.

Define rules for a sales team
=============================

From the sales module, go to your dashboard and click on the **More**
button of the desired sales team, then on **Settings**. If you don't
have any sales team yet, :doc:`you need to create one first <../../salesteam/setup/create_team>`.

.. image:: ./media/automatic01.jpg
   :align: center


On your sales team menu, use in the **Domain** field a specific domain
rule (for technical details on the domain refer on the
`Building a Module tutorial <https://www.odoo.com/documentation/9.0/howtos/backend.html#domains>`__
or `Syntax reference guide <https://www.odoo.com/documentation/9.0/reference/orm.html#reference-orm-domains>`__)
which will allow only the leads matching the team domain.

For example, if you want your *Direct Sales* team to only receive leads
coming from United States and Canada, your domain will be as following :

``[[country_id, 'in', ['United States', 'Canada']]]``

.. image:: ./media/automatic02.jpg
   :align: center

.. note::

	you can also base your automatic assignment on the score attributed to your
	leads. For example, we can imagine that you want all the leads with a score
	under 100 to be assigned to a sales team trained for lighter projects and
	the leads over 100 to a more experienced sales team. Read more on :doc:`how to score leads here <lead_scoring>`.

Define rules for a salesperson
==============================

You can go one step further in your assignment rules and decide to
assign leads within a sales team to a specific salesperson. For example,
if I want Toni Buchanan from the *Direct Sales* team to receive only
leads coming from Canada, I can create a rule that will automatically
assign him leads from that country.

Still from the sales team menu (see here above), click on the
salesperson of your choice under the assignment submenu. Then, enter
your rule in the *Domain* field.

.. image:: ./media/automatic03.jpg
   :align: center

.. note::

	In Twenty20, a lead is always assigned to a sales team before to be assigned to
	a salesperson. Therefore, you need to make sure that the assignment rule of
	your salesperson is a child of the assignment rule of the sales team.

.. seealso::

	* :doc:`../../overview/started/setup`

	.. todo:: * How to assign sales activities into multiple sales teams?

	.. todo:: * How to make sure my salespeople work on the most promising leads?

