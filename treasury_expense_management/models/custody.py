from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError


class Custody(models.Model):
    _name = 'treasury.custody'
    _description = 'Employee Custody'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _order = 'date desc, id desc'

    name = fields.Char(
        string='رقم العهدة',
        required=True,
        copy=False,
        readonly=True,
        default='/',
    )
    employee_id = fields.Many2one(
        'hr.employee', string='الموظف',
        required=True,
        tracking=True,
    )
    department_id = fields.Many2one(
        related='employee_id.department_id',
        string='القسم',
        store=True,
    )
    treasury_id = fields.Many2one(
        'treasury.treasury', string='الخزينة',
        required=True,
        domain="[('state', '=', 'open')]",
        tracking=True,
    )
    currency_id = fields.Many2one(related='treasury_id.currency_id', store=True)
    date = fields.Date(string='تاريخ العهدة', required=True, default=fields.Date.context_today)
    due_date = fields.Date(string='تاريخ الاستحقاق', tracking=True)
    amount = fields.Monetary(string='مبلغ العهدة', currency_field='currency_id', required=True, tracking=True)
    purpose = fields.Char(string='الغرض', required=True, tracking=True)
    notes = fields.Text(string='ملاحظات')
    company_id = fields.Many2one(
        'res.company', default=lambda self: self.env.company,
    )

    state = fields.Selection([
        ('draft', 'مسودة'),
        ('confirmed', 'معتمد'),
        ('paid', 'مصروف'),
        ('cleared', 'تم التسوية'),
        ('cancelled', 'ملغي'),
    ], string='الحالة', default='draft', tracking=True)

    expense_ids = fields.One2many(
        'treasury.custody.expense', 'custody_id',
        string='المصروفات',
    )
    total_expenses = fields.Monetary(
        string='إجمالي المصروفات',
        currency_field='currency_id',
        compute='_compute_expense_totals',
        store=True,
    )
    remaining_amount = fields.Monetary(
        string='المبلغ المتبقي',
        currency_field='currency_id',
        compute='_compute_expense_totals',
        store=True,
    )
    refund_amount = fields.Monetary(
        string='مبلغ الاسترداد / الزيادة',
        currency_field='currency_id',
        compute='_compute_expense_totals',
        store=True,
    )

    payment_id = fields.Many2one('treasury.claim.payment', string='سند الصرف', readonly=True)
    clearance_date = fields.Date(string='تاريخ التسوية', readonly=True)
    clearance_user_id = fields.Many2one('res.users', string='تمت التسوية بواسطة', readonly=True)

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            if vals.get('name', '/') == '/':
                vals['name'] = self.env['ir.sequence'].next_by_code('treasury.custody') or '/'
        return super().create(vals_list)

    @api.depends('expense_ids.amount', 'amount')
    def _compute_expense_totals(self):
        for custody in self:
            total_exp = sum(custody.expense_ids.mapped('amount'))
            custody.total_expenses = total_exp
            custody.remaining_amount = custody.amount - total_exp
            custody.refund_amount = max(0, total_exp - custody.amount)

    def action_confirm(self):
        for rec in self:
            if rec.state != 'draft':
                raise UserError(_('يمكن اعتماد العهدة من حالة المسودة فقط!'))
            if rec.amount <= 0:
                raise UserError(_('مبلغ العهدة يجب أن يكون أكبر من صفر!'))
            rec.state = 'confirmed'

    def action_pay(self):
        """Trigger payment creation wizard"""
        self.ensure_one()
        if self.state != 'confirmed':
            raise UserError(_('يجب اعتماد العهدة أولاً!'))
        if self.treasury_id.balance < self.amount:
            raise UserError(_(
                'رصيد الخزينة غير كافٍ!\nالرصيد المتاح: %s\nمبلغ العهدة: %s'
            ) % (self.treasury_id.balance, self.amount))
        return {
            'name': _('صرف العهدة'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.custody.pay.wizard',
            'view_mode': 'form',
            'target': 'new',
            'context': {'default_custody_id': self.id},
        }

    def action_clear(self):
        """Clear/settle the custody"""
        self.ensure_one()
        if self.state != 'paid':
            raise UserError(_('يجب صرف العهدة أولاً قبل التسوية!'))
        return {
            'name': _('تسوية العهدة'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.custody.clear.wizard',
            'view_mode': 'form',
            'target': 'new',
            'context': {'default_custody_id': self.id},
        }

    def action_cancel(self):
        for rec in self:
            if rec.state == 'paid':
                raise UserError(_('لا يمكن إلغاء عهدة تم صرفها!'))
            rec.state = 'cancelled'

    def action_reset_draft(self):
        for rec in self:
            if rec.state not in ('confirmed', 'cancelled'):
                raise UserError(_('يمكن إعادة للمسودة من حالة المعتمد أو الملغي فقط!'))
            rec.state = 'draft'


class CustodyExpense(models.Model):
    _name = 'treasury.custody.expense'
    _description = 'Custody Expense Line'

    custody_id = fields.Many2one('treasury.custody', string='العهدة', required=True, ondelete='cascade')
    date = fields.Date(string='التاريخ', required=True, default=fields.Date.context_today)
    description = fields.Char(string='البيان', required=True)
    account_id = fields.Many2one('account.account', string='الحساب')
    amount = fields.Monetary(string='المبلغ', currency_field='currency_id', required=True)
    currency_id = fields.Many2one(related='custody_id.currency_id')
    attachment_ids = fields.Many2many(
        'ir.attachment', string='المستندات',
        relation='custody_expense_attachment_rel',
    )
    notes = fields.Char(string='ملاحظات')
