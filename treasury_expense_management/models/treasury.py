from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError


class Treasury(models.Model):
    _name = 'treasury.treasury'
    _description = 'Treasury / Petty Cash Register'
    _inherit = ['mail.thread', 'mail.activity.mixin']

    name = fields.Char(string='اسم الخزينة', required=True, tracking=True)
    code = fields.Char(string='كود الخزينة', required=True, copy=False)
    treasury_type = fields.Selection([
        ('cash', 'نقدي'),
        ('bank', 'بنكي'),
    ], string='نوع الخزينة', default='cash', required=True, tracking=True)

    currency_id = fields.Many2one(
        'res.currency', string='العملة',
        default=lambda self: self.env.company.currency_id,
        required=True,
    )
    company_id = fields.Many2one(
        'res.company', string='الشركة',
        default=lambda self: self.env.company,
        required=True,
    )
    journal_id = fields.Many2one(
        'account.journal', string='دفتر اليومية',
        domain="[('type', 'in', ['cash', 'bank']), ('company_id', '=', company_id)]",
        required=True,
        tracking=True,
    )
    account_id = fields.Many2one(
        'account.account', string='حساب الخزينة',
        required=True,
        tracking=True,
    )
    responsible_id = fields.Many2one(
        'hr.employee', string='أمين الخزينة',
        tracking=True,
    )
    max_amount = fields.Monetary(string='الحد الأقصى للصرف', currency_field='currency_id')
    notes = fields.Text(string='ملاحظات')
    active = fields.Boolean(default=True, string='نشط')
    state = fields.Selection([
        ('open', 'مفتوح'),
        ('closed', 'مغلق'),
    ], string='الحالة', default='open', tracking=True)

    balance = fields.Monetary(
        string='الرصيد الحالي',
        currency_field='currency_id',
        compute='_compute_balance',
        store=True,
    )

    payment_ids = fields.One2many(
        'treasury.claim.payment', 'treasury_id',
        string='المدفوعات',
    )
    custody_ids = fields.One2many(
        'treasury.custody', 'treasury_id',
        string='العهد',
    )

    payment_count = fields.Integer(compute='_compute_counts', string='عدد المدفوعات')
    custody_count = fields.Integer(compute='_compute_counts', string='عدد العهد')

    _sql_constraints = [
        ('code_company_uniq', 'unique(code, company_id)', 'كود الخزينة يجب أن يكون فريداً لكل شركة!'),
    ]

    @api.depends('payment_ids', 'payment_ids.state', 'payment_ids.amount', 'payment_ids.payment_type')
    def _compute_balance(self):
        for treasury in self:
            inflow = sum(
                p.amount for p in treasury.payment_ids
                if p.state == 'done' and p.payment_type == 'inbound'
            )
            outflow = sum(
                p.amount for p in treasury.payment_ids
                if p.state == 'done' and p.payment_type == 'outbound'
            )
            treasury.balance = inflow - outflow

    @api.depends('payment_ids', 'custody_ids')
    def _compute_counts(self):
        for treasury in self:
            treasury.payment_count = len(treasury.payment_ids)
            treasury.custody_count = len(treasury.custody_ids)

    def action_close(self):
        self.ensure_one()
        if self.balance != 0:
            raise UserError(_('لا يمكن إغلاق الخزينة والرصيد غير صفري! الرصيد الحالي: %s') % self.balance)
        self.state = 'closed'

    def action_open(self):
        self.state = 'open'

    def action_view_payments(self):
        return {
            'name': _('مدفوعات الخزينة'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.claim.payment',
            'view_mode': 'list,form',
            'domain': [('treasury_id', '=', self.id)],
            'context': {'default_treasury_id': self.id},
        }

    def action_view_custodies(self):
        return {
            'name': _('عهد الخزينة'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.custody',
            'view_mode': 'list,form',
            'domain': [('treasury_id', '=', self.id)],
            'context': {'default_treasury_id': self.id},
        }


class TreasuryTransaction(models.Model):
    _name = 'treasury.transaction'
    _description = 'Treasury Transaction Log'
    _order = 'date desc, id desc'

    treasury_id = fields.Many2one('treasury.treasury', string='الخزينة', required=True, ondelete='cascade')
    date = fields.Date(string='التاريخ', required=True, default=fields.Date.context_today)
    name = fields.Char(string='الوصف', required=True)
    reference = fields.Char(string='المرجع')
    transaction_type = fields.Selection([
        ('in', 'وارد'),
        ('out', 'صادر'),
    ], string='نوع الحركة', required=True)
    amount = fields.Monetary(string='المبلغ', currency_field='currency_id', required=True)
    currency_id = fields.Many2one(related='treasury_id.currency_id')
    balance_after = fields.Monetary(string='الرصيد بعد', currency_field='currency_id')
    user_id = fields.Many2one('res.users', string='بواسطة', default=lambda self: self.env.user)
    payment_id = fields.Many2one('treasury.claim.payment', string='السداد المرتبط')
    custody_id = fields.Many2one('treasury.custody', string='العهدة المرتبطة')
