from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError


class PaymentClaim(models.Model):
    _name = 'treasury.payment.claim'
    _description = 'Payment Claim'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _order = 'date desc, name desc'

    name = fields.Char(
        string='رقم المطالبة',
        required=True,
        copy=False,
        readonly=True,
        default='/',
        tracking=True,
    )
    claim_type = fields.Selection([
        ('vendor', 'مطالبة مورد'),
        ('expense', 'مطالبة مصاريف'),
    ], string='نوع المطالبة', required=True, default='vendor', tracking=True)

    date = fields.Date(string='تاريخ المطالبة', required=True, default=fields.Date.context_today)
    due_date = fields.Date(string='تاريخ الاستحقاق', tracking=True)

    # Vendor fields
    partner_id = fields.Many2one(
        'res.partner', string='المورد',
        domain="[('supplier_rank', '>', 0)]",
        tracking=True,
    )
    vendor_bill_id = fields.Many2one(
        'account.move', string='فاتورة المورد',
        domain="[('move_type', '=', 'in_invoice'), ('payment_state', '!=', 'paid')]",
    )
    vendor_ref = fields.Char(string='رقم فاتورة المورد')

    # Employee expense fields
    employee_id = fields.Many2one(
        'hr.employee', string='الموظف',
        tracking=True,
    )
    department_id = fields.Many2one(
        related='employee_id.department_id',
        string='القسم',
        store=True,
    )

    currency_id = fields.Many2one(
        'res.currency',
        default=lambda self: self.env.company.currency_id,
        required=True,
    )
    company_id = fields.Many2one(
        'res.company', default=lambda self: self.env.company,
    )

    description = fields.Text(string='الوصف / البيان', required=True)
    notes = fields.Text(string='ملاحظات داخلية')

    line_ids = fields.One2many(
        'treasury.payment.claim.line', 'claim_id',
        string='بنود المطالبة',
    )

    subtotal = fields.Monetary(
        string='المجموع الفرعي',
        currency_field='currency_id',
        compute='_compute_amounts',
        store=True,
    )
    tax_amount = fields.Monetary(
        string='الضريبة',
        currency_field='currency_id',
        compute='_compute_amounts',
        store=True,
    )
    total_amount = fields.Monetary(
        string='الإجمالي',
        currency_field='currency_id',
        compute='_compute_amounts',
        store=True,
        tracking=True,
    )
    paid_amount = fields.Monetary(
        string='المبلغ المسدد',
        currency_field='currency_id',
        compute='_compute_paid_amount',
        store=True,
    )
    residual_amount = fields.Monetary(
        string='المبلغ المتبقي',
        currency_field='currency_id',
        compute='_compute_paid_amount',
        store=True,
    )

    state = fields.Selection([
        ('draft', 'مسودة'),
        ('submitted', 'مقدمة للاعتماد'),
        ('approved', 'معتمدة'),
        ('partial', 'مدفوعة جزئياً'),
        ('paid', 'مدفوعة بالكامل'),
        ('rejected', 'مرفوضة'),
        ('cancelled', 'ملغية'),
    ], string='الحالة', default='draft', tracking=True)

    approved_by = fields.Many2one('res.users', string='اعتمد بواسطة', readonly=True)
    approved_date = fields.Date(string='تاريخ الاعتماد', readonly=True)
    rejected_reason = fields.Text(string='سبب الرفض', readonly=True)

    payment_ids = fields.One2many(
        'treasury.claim.payment', 'claim_id',
        string='سندات الصرف',
    )
    payment_count = fields.Integer(compute='_compute_payment_count', string='عدد سندات الصرف')

    attachment_ids = fields.Many2many(
        'ir.attachment', string='المستندات',
        relation='payment_claim_attachment_rel',
    )
    priority = fields.Selection([
        ('0', 'عادي'),
        ('1', 'مهم'),
        ('2', 'عاجل'),
        ('3', 'حرج'),
    ], string='الأولوية', default='0')

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            if vals.get('name', '/') == '/':
                claim_type = vals.get('claim_type', 'vendor')
                seq_code = 'treasury.payment.claim.vendor' if claim_type == 'vendor' else 'treasury.payment.claim.expense'
                vals['name'] = self.env['ir.sequence'].next_by_code(seq_code) or '/'
        return super().create(vals_list)

    @api.depends('line_ids.subtotal', 'line_ids.tax_amount')
    def _compute_amounts(self):
        for claim in self:
            claim.subtotal = sum(claim.line_ids.mapped('subtotal'))
            claim.tax_amount = sum(claim.line_ids.mapped('tax_amount'))
            claim.total_amount = claim.subtotal + claim.tax_amount

    @api.depends('payment_ids', 'payment_ids.state', 'payment_ids.amount', 'total_amount')
    def _compute_paid_amount(self):
        for claim in self:
            paid = sum(
                p.amount for p in claim.payment_ids
                if p.state == 'done'
            )
            claim.paid_amount = paid
            claim.residual_amount = claim.total_amount - paid

    @api.depends('payment_ids')
    def _compute_payment_count(self):
        for claim in self:
            claim.payment_count = len(claim.payment_ids)

    @api.onchange('claim_type')
    def _onchange_claim_type(self):
        if self.claim_type == 'vendor':
            self.employee_id = False
        else:
            self.partner_id = False
            self.vendor_bill_id = False
            self.vendor_ref = False

    @api.onchange('vendor_bill_id')
    def _onchange_vendor_bill(self):
        if self.vendor_bill_id:
            self.partner_id = self.vendor_bill_id.partner_id
            self.vendor_ref = self.vendor_bill_id.ref
            self.description = self.vendor_bill_id.name
            self.total_amount_manual = self.vendor_bill_id.amount_residual

    def action_submit(self):
        for rec in self:
            if rec.state != 'draft':
                raise UserError(_('يمكن تقديم المطالبة من حالة المسودة فقط!'))
            if not rec.line_ids:
                raise UserError(_('يجب إضافة بند واحد على الأقل!'))
            if rec.total_amount <= 0:
                raise UserError(_('يجب أن يكون إجمالي المطالبة أكبر من صفر!'))
            if rec.claim_type == 'vendor' and not rec.partner_id:
                raise UserError(_('يجب تحديد المورد!'))
            if rec.claim_type == 'expense' and not rec.employee_id:
                raise UserError(_('يجب تحديد الموظف!'))
            rec.state = 'submitted'

    def action_approve(self):
        for rec in self:
            if rec.state != 'submitted':
                raise UserError(_('يمكن اعتماد المطالبة من حالة "مقدمة للاعتماد" فقط!'))
            rec.state = 'approved'
            rec.approved_by = self.env.user
            rec.approved_date = fields.Date.today()

    def action_reject(self):
        return {
            'name': _('رفض المطالبة'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.claim.reject.wizard',
            'view_mode': 'form',
            'target': 'new',
            'context': {'default_claim_ids': self.ids},
        }

    def action_create_payment(self):
        """Open payment creation form"""
        self.ensure_one()
        if self.state not in ('approved', 'partial'):
            raise UserError(_('يجب اعتماد المطالبة أولاً!'))
        if self.residual_amount <= 0:
            raise UserError(_('تم سداد هذه المطالبة بالكامل!'))
        return {
            'name': _('إنشاء سند صرف'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.claim.payment',
            'view_mode': 'form',
            'target': 'current',
            'context': {
                'default_claim_id': self.id,
                'default_amount': self.residual_amount,
                'default_partner_id': self.partner_id.id if self.partner_id else False,
                'default_employee_id': self.employee_id.id if self.employee_id else False,
                'default_payment_type': 'outbound',
            },
        }

    def action_cancel(self):
        for rec in self:
            if rec.state == 'paid':
                raise UserError(_('لا يمكن إلغاء مطالبة مدفوعة بالكامل!'))
            if any(p.state == 'done' for p in rec.payment_ids):
                raise UserError(_('لا يمكن إلغاء مطالبة بها مدفوعات مؤكدة!'))
            rec.state = 'cancelled'

    def action_reset_draft(self):
        for rec in self:
            if rec.state not in ('submitted', 'rejected', 'cancelled'):
                raise UserError(_('لا يمكن إعادة للمسودة!'))
            rec.state = 'draft'

    def action_view_payments(self):
        return {
            'name': _('سندات الصرف'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.claim.payment',
            'view_mode': 'list,form',
            'domain': [('claim_id', '=', self.id)],
            'context': {'default_claim_id': self.id},
        }

    def _update_payment_state(self):
        """Called after payment to update state"""
        for rec in self:
            if rec.residual_amount <= 0:
                rec.state = 'paid'
            elif rec.paid_amount > 0:
                rec.state = 'partial'


class PaymentClaimLine(models.Model):
    _name = 'treasury.payment.claim.line'
    _description = 'Payment Claim Line'

    claim_id = fields.Many2one('treasury.payment.claim', string='المطالبة', required=True, ondelete='cascade')
    sequence = fields.Integer(string='ت', default=10)
    description = fields.Char(string='البيان', required=True)
    account_id = fields.Many2one('account.account', string='الحساب', required=True)
    analytic_account_id = fields.Many2one('account.analytic.account', string='الحساب التحليلي')
    quantity = fields.Float(string='الكمية', default=1.0)
    unit_price = fields.Monetary(string='سعر الوحدة', currency_field='currency_id', required=True)
    discount = fields.Float(string='الخصم %', default=0.0)
    tax_ids = fields.Many2many('account.tax', string='الضرائب', domain="[('type_tax_use', '=', 'purchase')]")
    subtotal = fields.Monetary(string='المجموع', currency_field='currency_id', compute='_compute_subtotal', store=True)
    tax_amount = fields.Monetary(string='الضريبة', currency_field='currency_id', compute='_compute_subtotal', store=True)
    currency_id = fields.Many2one(related='claim_id.currency_id')
    notes = fields.Char(string='ملاحظات')

    @api.depends('quantity', 'unit_price', 'discount', 'tax_ids')
    def _compute_subtotal(self):
        for line in self:
            price = line.unit_price * line.quantity
            if line.discount:
                price = price * (1 - line.discount / 100)
            line.subtotal = price
            tax_res = line.tax_ids.compute_all(price, line.currency_id, 1.0)
            line.tax_amount = tax_res['total_included'] - tax_res['total_excluded'] if line.tax_ids else 0.0
