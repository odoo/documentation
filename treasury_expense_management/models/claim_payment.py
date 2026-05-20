from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError


class ClaimPayment(models.Model):
    _name = 'treasury.claim.payment'
    _description = 'Claim Payment / Disbursement Voucher'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _order = 'date desc, name desc'

    name = fields.Char(
        string='رقم سند الصرف',
        required=True,
        copy=False,
        readonly=True,
        default='/',
        tracking=True,
    )
    payment_type = fields.Selection([
        ('outbound', 'سند صرف'),
        ('inbound', 'سند قبض'),
    ], string='نوع السند', required=True, default='outbound', tracking=True)

    claim_id = fields.Many2one(
        'treasury.payment.claim', string='المطالبة',
        domain="[('state', 'in', ('approved', 'partial'))]",
        tracking=True,
    )
    claim_type = fields.Selection(related='claim_id.claim_type', store=True)

    # Custody payment
    custody_id = fields.Many2one('treasury.custody', string='العهدة')

    date = fields.Date(string='تاريخ السند', required=True, default=fields.Date.context_today)
    payment_date = fields.Date(string='تاريخ الدفع الفعلي')
    value_date = fields.Date(string='تاريخ القيمة')

    treasury_id = fields.Many2one(
        'treasury.treasury', string='الخزينة',
        required=True,
        domain="[('state', '=', 'open')]",
        tracking=True,
    )
    currency_id = fields.Many2one(related='treasury_id.currency_id', store=True)
    company_id = fields.Many2one(
        'res.company', default=lambda self: self.env.company,
    )

    partner_id = fields.Many2one('res.partner', string='المورد / الجهة', tracking=True)
    employee_id = fields.Many2one('hr.employee', string='الموظف', tracking=True)

    amount = fields.Monetary(string='المبلغ', currency_field='currency_id', required=True, tracking=True)
    description = fields.Text(string='البيان', required=True)
    reference = fields.Char(string='المرجع')
    notes = fields.Text(string='ملاحظات')

    payment_method = fields.Selection([
        ('cash', 'نقدي'),
        ('check', 'شيك'),
        ('transfer', 'تحويل بنكي'),
    ], string='طريقة الدفع', default='cash', required=True)
    check_number = fields.Char(string='رقم الشيك')
    check_date = fields.Date(string='تاريخ الشيك')
    transfer_ref = fields.Char(string='رقم التحويل')

    state = fields.Selection([
        ('draft', 'مسودة'),
        ('confirmed', 'معتمد'),
        ('done', 'مُنفَّذ'),
        ('cancelled', 'ملغي'),
    ], string='الحالة', default='draft', tracking=True)

    move_id = fields.Many2one('account.move', string='القيد المحاسبي', readonly=True)
    confirmed_by = fields.Many2one('res.users', string='اعتمد بواسطة', readonly=True)
    confirmed_date = fields.Datetime(string='تاريخ الاعتماد', readonly=True)
    done_by = fields.Many2one('res.users', string='نُفِّذ بواسطة', readonly=True)
    done_date = fields.Datetime(string='تاريخ التنفيذ', readonly=True)

    attachment_ids = fields.Many2many(
        'ir.attachment', string='المستندات',
        relation='claim_payment_attachment_rel',
    )

    _sql_constraints = [
        ('positive_amount', 'CHECK(amount > 0)', 'مبلغ السند يجب أن يكون أكبر من صفر!'),
    ]

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            if vals.get('name', '/') == '/':
                ptype = vals.get('payment_type', 'outbound')
                seq_code = 'treasury.claim.payment.outbound' if ptype == 'outbound' else 'treasury.claim.payment.inbound'
                vals['name'] = self.env['ir.sequence'].next_by_code(seq_code) or '/'
        return super().create(vals_list)

    @api.onchange('claim_id')
    def _onchange_claim(self):
        if self.claim_id:
            self.partner_id = self.claim_id.partner_id
            self.employee_id = self.claim_id.employee_id
            self.description = self.claim_id.description
            self.amount = self.claim_id.residual_amount

    @api.constrains('amount', 'claim_id')
    def _check_amount(self):
        for rec in self:
            if rec.claim_id and rec.amount > rec.claim_id.residual_amount + 0.01:
                raise ValidationError(_(
                    'مبلغ السند (%s) أكبر من المبلغ المتبقي للمطالبة (%s)!'
                ) % (rec.amount, rec.claim_id.residual_amount))

    @api.constrains('amount', 'treasury_id')
    def _check_treasury_balance(self):
        for rec in self:
            if rec.payment_type == 'outbound' and rec.state == 'done':
                if rec.amount > rec.treasury_id.balance + 0.01:
                    raise ValidationError(_(
                        'رصيد الخزينة غير كافٍ!\nالرصيد: %s\nالمبلغ: %s'
                    ) % (rec.treasury_id.balance, rec.amount))

    def action_confirm(self):
        for rec in self:
            if rec.state != 'draft':
                raise UserError(_('يمكن اعتماد السند من حالة المسودة فقط!'))
            if rec.payment_type == 'outbound':
                if rec.treasury_id.balance < rec.amount:
                    raise UserError(_(
                        'رصيد الخزينة "%s" غير كافٍ!\nالرصيد المتاح: %s\nالمبلغ المطلوب: %s'
                    ) % (rec.treasury_id.name, rec.treasury_id.balance, rec.amount))
            rec.confirmed_by = self.env.user
            rec.confirmed_date = fields.Datetime.now()
            rec.state = 'confirmed'

    def action_done(self):
        for rec in self:
            if rec.state != 'confirmed':
                raise UserError(_('يجب اعتماد السند أولاً!'))
            # Create accounting entry
            move = rec._create_accounting_entry()
            rec.move_id = move
            rec.done_by = self.env.user
            rec.done_date = fields.Datetime.now()
            rec.state = 'done'
            # Log treasury transaction
            rec._log_treasury_transaction()
            # Update claim state
            if rec.claim_id:
                rec.claim_id._update_payment_state()
            # Update custody state
            if rec.custody_id:
                rec.custody_id.state = 'paid'
                rec.custody_id.payment_id = rec.id

    def action_cancel(self):
        for rec in self:
            if rec.state == 'done':
                raise UserError(_('لا يمكن إلغاء سند منفذ! يجب عكس القيد المحاسبي أولاً.'))
            if rec.move_id and rec.move_id.state == 'posted':
                raise UserError(_('يجب إلغاء القيد المحاسبي أولاً!'))
            rec.state = 'cancelled'

    def action_reset_draft(self):
        for rec in self:
            if rec.state not in ('confirmed', 'cancelled'):
                raise UserError(_('لا يمكن الرجوع للمسودة من هذه الحالة!'))
            rec.state = 'draft'

    def _create_accounting_entry(self):
        self.ensure_one()
        journal = self.treasury_id.journal_id
        treasury_account = self.treasury_id.account_id

        if self.payment_type == 'outbound':
            # Debit: expense/payable account, Credit: treasury account
            if self.partner_id:
                counterpart_account = self.partner_id.property_account_payable_id
            elif self.claim_id and self.claim_id.line_ids:
                counterpart_account = self.claim_id.line_ids[0].account_id
            else:
                counterpart_account = treasury_account
            debit_account = counterpart_account
            credit_account = treasury_account
        else:
            # Inbound: Debit treasury, Credit counterpart
            debit_account = treasury_account
            if self.partner_id:
                counterpart_account = self.partner_id.property_account_receivable_id
            else:
                counterpart_account = treasury_account
            credit_account = counterpart_account

        move_vals = {
            'journal_id': journal.id,
            'date': self.date,
            'ref': self.name,
            'narration': self.description,
            'line_ids': [
                (0, 0, {
                    'account_id': debit_account.id,
                    'name': self.description,
                    'debit': self.amount,
                    'credit': 0.0,
                    'partner_id': self.partner_id.id if self.partner_id else False,
                }),
                (0, 0, {
                    'account_id': credit_account.id,
                    'name': self.description,
                    'debit': 0.0,
                    'credit': self.amount,
                    'partner_id': self.partner_id.id if self.partner_id else False,
                }),
            ],
        }
        move = self.env['account.move'].create(move_vals)
        move.action_post()
        return move

    def _log_treasury_transaction(self):
        self.ensure_one()
        before_balance = self.treasury_id.balance
        self.env['treasury.transaction'].create({
            'treasury_id': self.treasury_id.id,
            'date': self.date,
            'name': self.description,
            'reference': self.name,
            'transaction_type': 'out' if self.payment_type == 'outbound' else 'in',
            'amount': self.amount,
            'balance_after': before_balance - self.amount if self.payment_type == 'outbound' else before_balance + self.amount,
            'payment_id': self.id,
        })

    def action_view_accounting_entry(self):
        self.ensure_one()
        if not self.move_id:
            raise UserError(_('لا يوجد قيد محاسبي مرتبط!'))
        return {
            'name': _('القيد المحاسبي'),
            'type': 'ir.actions.act_window',
            'res_model': 'account.move',
            'view_mode': 'form',
            'res_id': self.move_id.id,
        }

    def action_print_voucher(self):
        return self.env.ref('treasury_expense_management.action_report_claim_payment').report_action(self)
