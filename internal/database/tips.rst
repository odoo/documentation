===========================
Manage Postgres
===========================


Access postgres
====================

Log in to the console

Access postgress database on a specific customer deployment

1. Log into the console

2. Change to postgres user **sudo su postgres**

3. **psql**

4. list all databases... **\l**


SQl Scripts to clean Databases for testing
=======================================

Clean Db for local demo and testing
--------------------------------------------------

update res_partner set email='brant.wadsworth@gmail.com’;
update hr_employee set work_email='brant.wadsworth@gmail.com’;
update submittal_distributor set email='brant.wadsworth@gmail.com’;
update rfi_distributor set email='brant.wadsworth@gmail.com’;
update hr_employee set ssnid='123-45-5678’;
update ir_attachment set thumbnail=null where thumbnail is not null;
update ir_attachment set thumbnail=null where thumbnail is not null;

Delete all accounting transactions
---------------------------------------------------

Connect to the appropriate Database
su postures
sql abc_db_name

delete from stock_pack_operation;
delete from stock_picking;
delete from stock_move;
delete from account_invoice;
delete from account_partial_reconcile;
delete from account_move;
delete from progress_bill;
delete from account_payment;
delete from sale_order;
delete from ir_attachment;
delete from creditcard_account_invoice;
delete from account_bank_statement;

ESTIMATING & BID MANAGEMENT
delete from bid_rfq_response;
delete from bid_rfq_response_line;
delete from estimate_line;
delete from estimate_estimate;

delete from hr_timecard_line;

PROJECT MANAGEMENT
delete from rfi_doc;
delete from submittal_doc;
delete from calendar_event;
delete from purchase_order;
delete from punchlist_doc;
delete from pmi_doc;
delete from portal_users;
delete from subcontractor_log;
delete from equipment_log;
delete from activity_log;
delete from weather_log;
delete from visitor_log;
delete from log_details;
delete from material_log;
delete from event_log;
delete from issue_log;
delete from daily_log_issue;
delete from mail_mail;
delete from mail_messages;

delete from res_partner where id>10;

