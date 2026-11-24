from odoo import api, fields, models, _
from odoo.exceptions import UserError


class ClaimRejectWizard(models.TransientModel):
    _name = 'treasury.claim.reject.wizard'
    _description = 'Reject Payment Claim Wizard'

    claim_ids = fields.Many2many('treasury.payment.claim', string='المطالبات')
    reason = fields.Text(string='سبب الرفض', required=True)

    def action_reject(self):
        self.ensure_one()
        for claim in self.claim_ids:
            if claim.state != 'submitted':
                raise UserError(_('يمكن رفض المطالبات في حالة "مقدمة للاعتماد" فقط!'))
            claim.state = 'rejected'
            claim.rejected_reason = self.reason
            claim.message_post(body=_('تم رفض المطالبة. السبب: %s') % self.reason)
        return {'type': 'ir.actions.act_window_close'}
