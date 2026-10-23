from odoo import api, fields, models, _
from odoo.exceptions import UserError


class CustodyClearWizard(models.TransientModel):
    _name = 'treasury.custody.clear.wizard'
    _description = 'Clear Custody Wizard'

    custody_id = fields.Many2one('treasury.custody', string='العهدة', required=True)
    employee_id = fields.Many2one(related='custody_id.employee_id', string='الموظف')
    amount = fields.Monetary(related='custody_id.amount', string='مبلغ العهدة', currency_field='currency_id')
    total_expenses = fields.Monetary(related='custody_id.total_expenses', string='إجمالي المصروفات', currency_field='currency_id')
    remaining_amount = fields.Monetary(related='custody_id.remaining_amount', string='المبلغ المتبقي', currency_field='currency_id')
    currency_id = fields.Many2one(related='custody_id.currency_id')
    clearance_date = fields.Date(string='تاريخ التسوية', required=True, default=fields.Date.context_today)
    notes = fields.Text(string='ملاحظات')

    action_type = fields.Selection([
        ('return', 'إعادة المتبقي للخزينة'),
        ('additional', 'صرف فرق إضافي'),
        ('writeoff', 'إيقاف العهدة بدون استرداد'),
    ], string='إجراء التسوية', compute='_compute_action_type', store=True)

    @api.depends('remaining_amount')
    def _compute_action_type(self):
        for rec in self:
            if rec.remaining_amount > 0:
                rec.action_type = 'return'
            elif rec.remaining_amount < 0:
                rec.action_type = 'additional'
            else:
                rec.action_type = 'writeoff'

    def action_clear(self):
        self.ensure_one()
        custody = self.custody_id
        treasury = custody.treasury_id

        # Handle return of excess amount
        if custody.remaining_amount > 0:
            payment = self.env['treasury.claim.payment'].create({
                'payment_type': 'inbound',
                'custody_id': custody.id,
                'date': self.clearance_date,
                'treasury_id': treasury.id,
                'employee_id': custody.employee_id.id,
                'amount': custody.remaining_amount,
                'description': f'استرداد متبقي عهدة: {custody.name}',
                'payment_method': 'cash',
                'notes': self.notes,
            })
            payment.action_confirm()
            payment.action_done()

        # Handle additional payment needed
        elif custody.remaining_amount < 0:
            additional_amount = abs(custody.remaining_amount)
            if treasury.balance < additional_amount:
                raise UserError(_(
                    'رصيد الخزينة غير كافٍ لصرف الفرق!\nالمبلغ المطلوب: %s\nالرصيد المتاح: %s'
                ) % (additional_amount, treasury.balance))
            payment = self.env['treasury.claim.payment'].create({
                'payment_type': 'outbound',
                'custody_id': custody.id,
                'date': self.clearance_date,
                'treasury_id': treasury.id,
                'employee_id': custody.employee_id.id,
                'amount': additional_amount,
                'description': f'صرف فرق إضافي لعهدة: {custody.name}',
                'payment_method': 'cash',
                'notes': self.notes,
            })
            payment.action_confirm()
            payment.action_done()

        custody.state = 'cleared'
        custody.clearance_date = self.clearance_date
        custody.clearance_user_id = self.env.user
        return {'type': 'ir.actions.act_window_close'}
