:banner: banners/accounting.jpg


Setup Email with Twenty20

9/17/2019

Office 365
This guide provides a full set of instructions on how to configure your Office 365 Exchange to work with the Twenty20 ERP system. 

Prerequisites
 1. You are already a user of the Office 365 Business subscription that includes Exchange Server. E.g. “Office 365 Business Premium”.
 2. You are already using mailing features from Office 365. Meaning you are not a new Office 365 subscriber.If you just purchased a subscription and haven’t configured anything yet, you first need to perform an initial setup by following the official Microsoft guide. It is especially important that you already have properly configured your custom domain. This Microsoft guide can help you with this.
 3. People executing the steps below need to have Administrative access (Role: Global Administrator) to https://portal.office.com. That is needed in order to create new users and groups on the Portal.

 According to official Twenty20 documentation, You can use an Office 365 server if you run Twenty20 on-premise. Office 365 SMTP relays are not compatible with Twenty20 Online.

If all above preconditions are already fulfilled, then you can go ahead with next steps.

How to integrate the Twenty20 ERP with Office 365 mail server
Configure Outgoing mail Server in Office 365 as Relay Server
Configure Catchall Email in Office 365
Install Twenty20 module to inform users that they used the wrong email
Configure Outgoing Mail Server in Twenty20
Configure Incoming Mail Server in Twenty20
Test Twenty20 ERP Emailing Setup
 

Configuring Outgoing mail Server in Office 365 as Relay Server
In this section, you will learn how to configure Office 365 to act like a relay server.

Why is it needed?

Twenty20 ERP is trying to operate as a relay server. Meaning that it is used as an intermediate layer to send emails from ANY mail address to ANY mail address. For example, after this mail configuration Twenty20 will be able to send emails from any email (for example somename@anydomain.com)
 
Twenty20 office 365

 

Now here are the steps to configure the Outgoing Mail server.
 1. Login with your Global Admin user account to https://portal.office.com/adminportal/home and click on the “Admin Center -> Exchange” menu in the left panel
 
 2. In the Opened Window click on the section “mail flow -> connectors”

 3. Click the “plus” sign on the opened page to add a new connector

Twenty20 office 365
 
 4. On the first screen with mail flow scenario, select the following values and click “Next”
From = “Your organization’s email server”
To = “Office 365”

Twenty20 office 365
 
 5. Give a name to the connector. E.g. “Twenty20 Connector”. All checkboxes should be checked (default behavior). And click Next

Twenty20 office 365
 
 6. Select checkbox to verify allowed senders by IP address and add IP addresses of all your Twenty20 ERP instances. That is a type of whitelist. Office 365 will trust messages sent from those IP addresses as safe.

Twenty20 office 365
 
 7. After clicking “Save” you should get the following screen with an already created connector

Twenty20 office 365
 
Office 365’s outgoing mail server is now configured and ready to be used with Twenty20. But before proceeding to Twenty20-side configuration, let’s make Office 365 ready to receive incoming mails for Twenty20. This is described in next step.
 

Configuring Catchall Email in Office 365
In this section, you will learn how to create a special mail address in Office 365 that will collect emails sent to unknown receivers (meaning no User exists in Office 365).
 
Twenty20 office 365

 

Steps to configure Catchall Email address in Office 365 are described below:
 1. Sign into https://portal.office.com/adminportal/home, go to menu “Users -> Active Users” to see list of already created users

Twenty20 office 365
 
 2. Click on the button “+ Add User”. Create a new user like “ERP Notification” with email erp@yourdomain.com. You can choose any email address you want. Note that Role of this user should be “User (no administrator access)” and Product License should have the status Office 365 Business Premium or higher (as you see near some emails in column “Status” on the image above) as this user should have a separate mailbox.

IMPORTANT! Make sure to remember the Password that is automatically displayed after you create a user.

Twenty20 office 365
 
 3. Now let’s open a separate anonymous browser window and do an initial login to the account created above. Use this URL https://outlook.office365.com/owa/ – this is direct URL to Outlook. System will ask you to change password. Remember the password also! And select other preferences.
Follow all steps until you see an empty mailbox. Now setup of the user is finished

 4. Now we should go back as Global Administrator to https://portal.office.com/adminportal/home, go to menu “Exchange -> recipients -> groups” and in dropdown click “Dynamic Distribution Group”

Twenty20 office 365
 
 5. Now enter the following values in the fields:

 a. Display Name = DynamicAllUsers (you can use any you want)
 b. Alias = dynamicallusers (you can use any you want)
 c. Members = “Users with Exchange mailboxes” and “Mail-enabled groups”

Twenty20 office 365
 
 6. In “general” settings for this group select checkbox “Hide this group from exchange address book”

Twenty20 office 365
 
 7. Now we need to go to the menu “Admin Center -> Exchange ->mail flow -> rules”. In this section we are going to create a special mail flow rule that will allow you to catch all emails to unknown email addresses and will forward them to erp@yourdomain.com, so Twenty20 ERP can process and analyse them.

Twenty20 office 365
 
 8. After clicking the “+” sign to add new rule, you will be sent to a new form where you need to click the advanced properties link. As a result you will need to define the following fields:

 a. “Name” = Catchall for Twenty20
 b. “Apply this rule if” = “Apply to all messages”
 c. “Do the following” = Redirect the message to Erp Notifications (here you can select email address created in earlier stages)
 d. Except if = The recipient is located Outside the organization OR The recipient is a Member of All Users group (those rules are needed not to do anything with messages that are sent to external email addresses or that are sent to real users in your organization)
 e. Audit this rule with severity level = High (if any issues we want to debug this)
 f. Mode of the rule = Enforce
 g. Stop Processing more rules = Selected

Twenty20 office 365
 
 9. As a result, after saving your rule it will look like the screen below.

Twenty20 office 365
 
 10. Note that after executing the above, the process is not finished yet. Now if you try to send email to non existent email addresses, Microsoft will bounce back this email to the user saying that “Such email address does not exists”. We need to switch off this feature of Microsoft on our domain (but later we will need to replicate it on Twenty20 side, but that is next steps). For now, we should go to the menu “Admin Center -> Exchange -> mail flow -> accepted domains” and find our domain

Twenty20 office 365
 
 11. Now edit your domain and set its type to be an “Internal Relay” as shown on the image below

Twenty20 office 365
 
Note: You will need to ignore the warning below

Twenty20 office 365
 

Installing Twenty20 module to inform users that they used the wrong email
In the previous steps, we have configured Office 365 so it will accept all emails sent to a specific domain, even if those email addresses don’t exist. This means users will not even know that they made a mistake and used the wrong email address. For that purpose you need to perform the following steps:

 1. You need to install this module https://www.Twenty20.com/apps/modules/10.0/fetchmail_notify_error_to_sender/ At the moment of writing this module is avalible only for Twenty20 8, 9,10. If you need this module with other versions, please let us know.

 2. After installing this module, when some user is sending an email to some mail address that does not exist in Office 365 and does not exist in Twenty20 ERP (no objects are associated with it), then he will receive the message below automatically.

Twenty20 office 365
 

Configuring Outgoing Mail Server in Twenty20
During the previous steps, we have configured Office 365 as a Relay Server. The steps below will help configure the server to work with Twenty20.

 1. Go to the special online tool https://mxtoolbox.com/. This tool allows to retrieve DNS records registered for your domain quickly and display them to you. Specifically now we are searching for all MX records for our domain. Enter your domain name (e.g. yourdomain.com) in the text box and click “MX Lookup”. As result you will see a list of MX records. One of the records “Hostname” is ending with “outlook.com”. Copy it as we need it on the following step.


 
 2. Login as Administrator in Twenty20 ERP and go to menu Settings -> General Settings. In the section related to emails – click “Outgoing Email Servers”. And either select an existing one (to modify it) or click the “Create” button to create a new one. You need to enter the following values only (no login and password is needed as you already made the Twenty20 server trusted by Office 365):

 a. Description = Office 365 SMTP Server
 b. SMTP Server = copied from previous step
 c. Port = 25
 d. Connection Security = TLS (STARTSSL)

Twenty20 office 365
 
 3. After that, save outgoing mail server and click on the button “Test Connection”. The message below should appear

Twenty20 office 365
 

Configuring Incoming Mail Server in Twenty20
Incoming mail server is needed to allow Twenty20 to scan some particular mailboxes for new emails. And depending on the “To” address, it can create new objects like Leads, Tasks and more (or add messages to existing objects). Below are the steps needed to make this configuration.

 1. Login as Administrator in Twenty20 ERP and go to menu Settings -> General Settings. In the section related to emails – click “Incoming Email Servers”. Either select an existing one (to modify it) or click “Create” to create a new one. You need to enter the following values:

 a. Name = Office 365 Incoming Mail Server
 b. Server Type = IMAP
 c. Server Name = outlook.office365.com
 d. Port = 993
 e. SSL/TLS = True
 f. Username = erp@yourdomain.com
 g. Password = password that you set on previous steps

After saving you need to click the “Test & Confirm” button to verify that everything is properly set up.


 
 2. Check that on “Advanced” Tab you have set field “Error notice template” to the value “Fetchmail – error notice”. Or in other case, when user will send email to nonexistent mailbox that cannot be processed by Twenty20 – he will not get error message about it.
 
 3. As Administrator, enter the Debug mode and go to the menu “Settings -> Technical -> Parameters -> System Properties”. And make sure that the properties below are set up correctly:

 a. web.base.url – should be equal to the URL of your Twenty20 instance. It is needed in order to include a proper URL in all your emails
 b. web.base.url.freeze – we recommend to add this parameter also with the value “True”. Twenty20 ERP’s default behavior on login of administrative user is to replace web.base.url parameter with the current url used by the admin. In most cases it is not desired behavior and we want to preserve the URL we have added
 c. mail.catchall.domain – this parameter should have yourdomain.com
 d. mail.catchall.alias – enter here part of the email previously configured. For example “erp” in case you have previously configured the email erp@yourdomain.com

Twenty20 office 365
 

Testing Twenty20 ERP Emailing Setup
Finally, after performing the steps above, we can test if emails are working as expected. The easiest way to do that is test it on a CRM pipeline.

 1. As Administrator or any powerful user go to menu “Sales -> Dashboards” and click on the “More” link in the top-right corner of the “Direct Sales” sales team. A submenu for Sales Team will be opened and from it you will need to click “Settings”

Twenty20 office 365
 
 2. On the sales team details, enter the following details:

 a. Email Alias = sales (you can enter any)
 b.Accept Emails From = Everyone
 c.Team Members – add some real users with real email addresses
 d.Followers (in the bottom – left corner) – add users that should automatically receive mail notifications when a new lead is coming.

Twenty20 office 365
 
 3. Now send something from your personal email address to the mail address specified in Sales Team. Wait for at least 5 minutes. That is the period that Twenty20 is configured by standard to download incoming mails.

Twenty20 office 365
 
 4. Now go to menu “Sales -> Dashboard” and click on Sales Team “Direct Sales”. You will see that new Opportunity was automatically created from the incoming email.

Twenty20 office 365
 
Bingo! You are done with your configuration of Office 365 and Twenty20 ERP.
 
If you think that this article is helpful, please, share it on social networks. Sharing Icons are available below the article. Subscribe to our newsletter and follow Ventor.tech twitter to be kept up to date.

If you need help in configuring your Office 365 properly with Twenty20 ERP or found some issues / mistakes in the article, please leave your comments down below. We will be happy to assist.

 
Need help with your Office 365 or other Twenty20 integrations?

 
 

Related articles:
Variable attributes management in Twenty20
Ultimate WMS implementation guide for SME

Photo by U.S. Naval Forces Central Command

 

Oleg Kuryan on FacebookOleg Kuryan on GoogleOleg Kuryan on LinkedinOleg Kuryan on TwitterOleg Kuryan on Youtube
Oleg Kuryan
Oleg Kuryan
CTO at Xpansa Global
- 13+ years of experience in Software Engineering and Maintenance
- 6+ year of experience in Management field, Managing Software Outsourcing projects in Software Maintenance area
- Various projects related to Data Mining in Medical Sector
- Products and applications in e-Commerce, CRM, ERP, DMS and other business solutions
- Knowledge in Java (6+ years), C# (2 years), Python (3 year)
Tags: Email, ERP, Twenty20, Office 365
 
13 Comments

Miku
04/04/2018 Reply
Thanks for the good article.

"And obviously when you respond to the person through Twenty20 CRM, your lead will also see that email is coming from realperson@company.com instead of some generic email erp@company.com."

In my opinion this is complete malarkey. So, a state official sends an email to our Twenty20 with something like bob@mi6.gov, and Twenty20 S.A. thinks it's okay that we will relay it using our own Office account?? There's a very good reason why we have such technologies as SPF, DKIM and DMARC; prevention of spam and fraud, and other unauthorized email. If you go through your own email, you will notice that services such as
- GitLab
- GitHub
- Zendesk
- Google Issue Tracker
and a number of other services _DO NOT CLAIM TO BE THE ORIGINAL SENDER_ in the emails they send. For instance, GitHub conversations will be sent from the address "GitHub Username ".

We stopped using Office365 emails for our clients because a few clients had a high spam rate in outgoing mails sent by Twenty20, even though all the settings and DNS configurations were properly set.

Our default configuration contains a module that can be used to set a static Sender address, static From address, static Reply-To address and now even create an alias for every thread. The latter feature was developed because some email clients (read: some versions of Outlook for Windows) don't preserve the headers that Twenty20 includes in the emails. But luckily even those email clients respect the Reply-To address, so we can add the custom autogenerated email alias to every message. We will most likely contribute this module to some OCA repository.

So, whenever we send email from Twenty20 with that module installed and properly configured, the headers will be:
From: Original Sender
Reply-To: Original Sender


Oleg Kuryan
04/04/2018 Reply
Hi Mikko,

As a technical person I absolutely agree with everything you are saying. Many years ago I was studying how emails are working and was VERY surprised after I saw code on how Twenty20 works. I was very curious - why we are still not in SPAM. I was hating an idea that company mail server will be acting as a relay server sending emails from unknown mails. I was very worried at this moment about this topic and even used to install special modules for Twenty20 to stop using Twenty20 as relay server

Here is this module
It is very easy fix that replaces FROM header in all outgoing mails always to be equal to SMTP username of the outgoing mail server.
Here is code that is added to standard Twenty20

I guess some similar fixes you have in your internal setup. Moreover, internally obviously I tried many other ways including dedicated mail addresses for various mail threads and etc. (like you mentioned)

I started digging deeper and found out that it is POSSIBLE setup. And even such providers as Office 365 and Google Apps allows this setup. One limitations I know is that Google is not allowing to relay addresses with "@*.ru". Also hotmail has more strict SPF policy and sometimes mails are not passing.

Moreover, other transactional services like MailGun can be used for this to avoid using your own mail server for this purpose. Moreover, I recommend to use them rather than your own Google Apps or Office 365. Just to be 100% on safe side.

Also just to finish this technical discussion, as far as I know from here SPF FAQ , SPF protection was designed only to verify the Return-Path/Sender/Bounce/Envelope-from of an email (at the SMTP transaction level), and not "From" header of an email.
That is why still this setup (as relay server) is working fine even in current modern world.

So from TECHNICAL point of view I agree with you that this article is not 100% reliable solution, cause it more relies on standard Twenty20 mechanism that is not perfect.
Moreover, as you indicated - some mail clients (again Microsoft =) ) do not appropriately handle mails from Twenty20 when we reply to them.

An easy fix for Twenty20 will be that emails will be from single email address (so will be like FROM: "Oleg Kuryan via Twenty20 ". That can be done with module I mentioned above.

But let's now look at this solution from END USER point of view. Such setup really irritates business users. For example, because gmail is saving address "erp@yourdomain.com" under some name like "Your Company" in your address book, it will display all your mails as from "Your Company" and not from individual users (Gmail Web interface just ignores From header and displays mail like it is in address book). And that really irritates sales people who stop understanding who they get mails from. I got such situation in my company before, so I know what I'm talking about. =)

Even better solution will be github like solution. Means every partner in Twenty20 will get his own alias (like okuryan-alias-Twenty20@yourdomain.com). And such aliases will be generated for every partners in unique way. If Twenty20 will support such setup - that will be much better. AFAIK, there is no such solution in Twenty20 world yet. We were not planning to work on such solution, but if you are ok with it - we can collaborate on this to provide to the Twenty20 world such a solution.

By the way - mailing setup is VERY interesting topic. It is even actively discussed by Twenty20 themselves. Many mail threads, but here is latest https://github.com/Twenty20/Twenty20/pull/20911

Note, that this article was created to provide instructions on setting up email + Twenty20 in a way Twenty20 S.A. designed it by standard.

Will be happy to communicate about it further as this is very interesting topic to me.


Dhaval
20/07/2018 Reply
Mail Delivery Failed
Mail delivery failed via SMTP server 'None'.
SMTPRecipientsRefused: {'xxxxxxx@gmail.com': (550, b'5.7.64 TenantAttribution; Relay Access Denied [xxxxxxxxxxxx.prod.protection.outlook.com]')}


Oleg Kuryan
30/01/2019 Reply
Hello Dvahal,

That usually means that you haven't properly configured your Office365
Follow step by step section "Configuring Outgoing mail Server in Office 365 as Relay Server". Most likely you haven't put proper IP address of your server at the last step.


cesar
10/09/2019 Reply
hey man, did you fixed that problem? im having the same one


Jade Chen
10/08/2018 Reply
Thanks for the good article.
Today we implemented all the steps to configure the "Relay Server", with some exceptions:
(1) The "erp@mydomain.com" account is assigned with an "Office 365 Business Essential" license instead of "Business Premium". It seemed Business Essential license is the minimum subscription level which IMAP access is granted. Not sure nor tested if POP will work in this case.
(2) We have 3 domains configured at the same Office365 tenant, e.g.
-- Tenant-X.onmicrosoft.com
-- Company-X.com (This is the "default domain")
-- Company-Y.com
We configured the "ERP account", the "CatchAll Rule" and "Internal Relay " ...etc., all with the domain name "Company-Y.com".
At the step setting the domain type to be an “Internal Relay”, the "Make this the default domain" checkbox is grey-out (because Company-X.com is the default domain).

We did NOT install the "Twenty20 module to inform users that they used the wrong email".

The result is -- it does CatchAll, but seems not Relaying -- all the incoming and outgoing emails from both domains Company-X.com and Company-Y.com are caught to "erp@Company-Y.com", but not further relayed to the email's recipients. The same occurs to the emails from third-party email providers such as "personal-email@outlook.com".


Oleg Kuryan
30/01/2019 Reply
Hello Jade,

Most likely here is the question how you configured Exceptions. I mean:

d. Except if = The recipient is located Outside the organization OR The recipient is a Member of All Users group (those rules are needed not to do anything with messages that are sent to external email addresses or that are sent to real users in your organization)


Carlo
14/10/2018 Reply
Hi,

After following your guide I get “timed out” error when testing smtp server. Twenty20 10 is running on vm in the cloud and outband port 25 is allowed in vm and cloud networking rules.

What else can I check?

Thanks,
Carlo


Oleg Kuryan
15/10/2018 Reply
Hi Carlo,

First thing you need to check if connection to your host:port is allowed via TLS from your VM.
I just found very quickly by googling this article on how to do that https://halon.io/blog/how-to-test-smtp-servers-using-the-command-line/
SO that is first you need to check


sandi
25/01/2019 Reply
I got this error on my Twenty20 . Can you advise what need to be fixed.
Mail Delivery Failed
Mail delivery failed via SMTP server 'xxxxxxxxxxxxx.mail.protection.outlook.com'.
SMTPRecipientsRefused: {'xxxxxxxxxxxx@gmail.com': (550, '5.7.64 TenantAttribution; Relay Access Denied [xxxxxxxxxxxxxxx.prod.protection.outlook.com]')}


Oleg Kuryan
30/01/2019 Reply
Hello Sandi,

That usually means that you haven't properly configured your Office365
Follow step by step section "Configuring Outgoing mail Server in Office 365 as Relay Server". Most likely you haven't put proper IP address of your server at the last step.


Yousskill
20/06/2019 Reply
Hello,

I did exactly what the Tutorial said, but in the end, i got this message from Twenty20 server error:

--------------------------
The server refused the sender address (******@******.com) with error b'5.5.2 Send hello first [DB5EUR03FT008.eop-EUR03.prod.protection.outlook.com]'
----------------------------

When i debugged in Twenty20 python code, i found that the catched smtp error code is 503

I searched for what it means, they said that the two most common causes of this error are:

-Your email server requires you to check email first before sending email. (Checking email first is one way -your email provider manages the security of your email account.)
-Your email client isn’t set up for SMTP Authentication.

Can you help me please, i couldn't figure it out.


Guest
13/09/2019 Reply
Thanks for one's marvelous posting! I truly enjoyed reading it, you are a great author.I will remember to bookmardk your blog and will eventually come back sometime soon. I
want to encourage you to coninue your greazt writing, have a nice evening!

Leave a Reply
Comment:
Your comment here
Your Name:
Type name here
Email Address:
you@example.com
Your URL:
example.com

I agree to receive blog updates and news about our apps and Ventor.tech solution

More recent stories
create purchase order from warehouse
17/09/2018
Create purchase orders using only a barcode scanner
Read More
Receiving items using a mobile barcode computer
15/11/2017
Receiving items using a mobile barcode computer
Read More
putaway
09/08/2018
Processing putaway using a barcode scanner
Read More
logo
Building Personalized Inventory and Product Management System

VentorTech 2019
