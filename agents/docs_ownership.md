# Documentation ownership

This file defines which documentation paths belong to the US team. `AGENTS.md` uses it to decide
which style rules apply to a file:

- **US scope:** apply [style_rules.md](style_rules.md).
- **Not US:** apply the published guidelines in
  `content/contributing/documentation/content_guidelines.rst` and `rst_guidelines.rst`.
- **Undecided:** ask which rules apply before editing.

Source: the *Odoo modules - US vs not US* module list, matched to each folder's main Odoo module.
Pages follow their owner's rules even when the US team edits them.

Paths are relative to `content/applications/` unless stated otherwise. A folder covers every file
and subfolder under it, and a `.rst` file next to a folder (for example, `hr/payroll.rst` next to
`hr/payroll/`) belongs to the same scope as that folder.

## US scope

- `finance/expenses/`
- `hr/` (all): appraisals, approvals, attendances, employees, fleet, frontdesk, lunch, payroll
  (including payroll localizations), recruitment, referrals, time_off
- `inventory_and_mrp/` (all): barcode, inventory, maintenance, manufacturing, plm, purchase,
  quality, repairs
- `marketing/` (all): email_marketing, events, marketing_automation, marketing_card,
  sms_marketing, social_marketing, surveys
- `productivity/`: ai, appointments, calendar, data_cleaning, discuss, phone, whatsapp,
  `knowledge.rst`
- `sales/`: crm, rental, sales, subscriptions
- `services/helpdesk/`
- `websites/livechat/`

## Not US

- `finance/`: accounting, esg, fiscal_localizations, payment_providers
- `productivity/`: dashboards, documents, sign, spreadsheet, to_do
- `sales/point_of_sale/`
- `services/`: planning, project, timesheets
- `websites/`: blog, ecommerce, elearning, forum, website
- `studio/`
- Outside `content/applications/`: `content/administration/`, `content/developer/`,
  `content/contributing/`, `content/legal/`

## Undecided

Ask before applying either set of rules.

- `essentials/`, including `essentials/property_fields.rst`
- `general/`
- Category index pages that span both scopes, such as `content/applications/finance.rst` or
  `content/applications/productivity.rst`
