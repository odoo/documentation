Social Marketing
================

One of the biggest challenges of a company is to engage efficiently with
their community. Odoo Social helps you to meet your audience with the
help of several supports: social media, push notifications, or live chat
request.

Add your social media and create your feed
------------------------------------------

You first need to add your social media accounts. To do that, add a
Stream and choose your social media account. You’ll need to grant
permissions to Odoo Social Marketing application.

.. image:: media/social_marketing01.png
  :align: center

Once it’s done, you’ll be redirected to your Feed and a column will be
automatically added with the publications of your freshly added
account. You can then add new streams to your Feed and customize your
Kanban view as you like.

.. image:: media/social_marketing02.png
  :align: center

| Adding social media accounts to your Feed will also add some KPIs on
  it:

-  Audience: Number of followers of your channel

-  Engagement: Number of times people have engaged with your posts

-  Stories: Number of times people who have engaged with your channel
   have created stories on their friend’s or follower’s feed (Shares, Retweet,..)

You can access more information by clicking on the “Insights” link: this
will lead you to statistics of the selected social medium.

Publish content
---------------

To publish content on your social media accounts or send a push
notification to your subscribed users, either go to your Feed and click
on New Post, or use the “Posts” menu and create it from there. Select
all the accounts where you want to post your content, write your post
and get an instant preview of how it will look when published.

If you select the push notifications, you’ll get some additional fields
on the form that will allow you to complete the push notifications
configuration and choose your segment between all your subscribed users.
You can also send push notifications via the Visitors menu, as explained
in the previous paragraph.

Enable push notifications on your website
-----------------------------------------

The push notifications system uses a Firebase account, configured by
default. This feature allows you to send push notifications to your
website’s visitors after they subscribed to it. To enable push
notifications on your website, go to the Website application Settings,
and configure the notifications permission request.

.. image:: media/social_marketing03.png
  :align: center

Once it’s done, a popup will appear to your website’s visitors, asking
them to allow push notifications. As soon as they subscribe to it, you
can start sending them push notifications through the Visitors menu. You
can either send it individually or target a bigger segment by selecting
multiple visitors in the list view (e.g. all the visitors that visited
your Homepage).

Interact with your online visitors 
-----------------------------------

You can monitor your online visits via the Visitors menu. You’ll see
every visitors that landed on one of your tracked pages (you can
configure your tracked pages in the Website application), online or
offline. Your online visitors will be authenticated if they’re linked to
a lead or an existing partner. You will be able to contact them with an
email, a message sms, a push notification (if they have subscribed to
it), or even send them a live chat request that they will receive on
their next move on one of your tracked pages (if you installed the Live
Chat application).

.. image:: media/social_marketing04.png
  :align: center

Configure your own Facebook and Twitter developer accounts
----------------------------------------------------------

By default, the Social application is already configured with a Facebook
and Twitter developer accounts but you can use your own if necessary.
Activate the developer mode, go to :menuselection:`Configuration --> Settings` and enter
your own API keys.

.. image:: media/social_marketing05.png
  :align: center

Configure your own Firebase API 
-------------------------------

By default, a Firebase project is running on your database so there’s no
need to configure it. If you have multiple websites, every website will
be linked to a different Firebase project. If you need to configure your
own Firebase project, please go to :menuselection:`Website --> Configuration --> Settings` Web Push Notifications section.



