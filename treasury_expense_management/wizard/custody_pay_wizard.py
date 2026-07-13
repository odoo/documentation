from odoo import api, fields, models, _
from odoo.exceptions import UserError


class CustodyPayWizard(models.TransientModel):
    _name = 'treasury.custody.pay.wizard'
    _description = 'Pay Custody Wizard'

    custody_id = fields.Many2one('treasury.custody', string='العهدة', required=True)
    treasury_id = fields.Many2one(
        related='custody_id.treasury_id',
        string='الخزينة',
    )
    amount = fields.Monetary(
        related='custody_id.amount',
        string='مبلغ العهدة',
        currency_field='currency_id',
    )
    currency_id = fields.Many2one(related='custody_id.currency_id')
    date = fields.Date(string='تاريخ الصرف', required=True, default=fields.Date.context_today)
    description = fields.Char(string='البيان', required=True)
    payment_method = fields.Selection([
        ('cash', 'نقدي'),
        ('check', 'شيك'),
        ('transfer', 'تحويل بنكي'),
    ], string='طريقة الدفع', default='cash', required=True)
    notes = fields.Text(string='ملاحظات')

    @api.onchange('custody_id')
    def _onchange_custody(self):
        if self.custody_id:
            self.description = f'صرف عهدة: {self.custody_id.purpose} - {self.custody_id.employee_id.name}'

    def action_pay(self):
        self.ensure_one()
        custody = self.custody_id
        payment = self.env['treasury.claim.payment'].create({
            'payment_type': 'outbound',
            'custody_id': custody.id,
            'date': self.date,
            'treasury_id': custody.treasury_id.id,
            'employee_id': custody.employee_id.id,
            'amount': custody.amount,
            'description': self.description,
            'payment_method': self.payment_method,
            'notes': self.notes,
        })
        payment.action_confirm()
        payment.action_done()
        return {
            'name': _('سند صرف العهدة'),
            'type': 'ir.actions.act_window',
            'res_model': 'treasury.claim.payment',
            'view_mode': 'form',
            'res_id': payment.id,
        }
