from flask import Blueprint, render_template, request
from models import Treasury, PaymentClaim, Payment, Custody
from datetime import datetime, date

reports_bp = Blueprint('reports', __name__)


@reports_bp.route('/treasury')
def treasury_report():
    treasuries = Treasury.query.all()
    return render_template('reports/treasury.html', treasuries=treasuries)


@reports_bp.route('/claims')
def claims_report():
    date_from = request.args.get('date_from')
    date_to = request.args.get('date_to')
    claim_type = request.args.get('claim_type', '')
    state = request.args.get('state', '')

    q = PaymentClaim.query
    if date_from:
        q = q.filter(PaymentClaim.date >= datetime.strptime(date_from, '%Y-%m-%d').date())
    if date_to:
        q = q.filter(PaymentClaim.date <= datetime.strptime(date_to, '%Y-%m-%d').date())
    if claim_type:
        q = q.filter_by(claim_type=claim_type)
    if state:
        q = q.filter_by(state=state)

    claims = q.order_by(PaymentClaim.date.desc()).all()
    total = sum(c.total_amount for c in claims)
    paid = sum(c.paid_amount for c in claims)
    return render_template('reports/claims.html', claims=claims, total=total, paid=paid,
                           date_from=date_from, date_to=date_to, claim_type=claim_type, state=state)


@reports_bp.route('/payments')
def payments_report():
    date_from = request.args.get('date_from')
    date_to = request.args.get('date_to')
    treasury_id = request.args.get('treasury_id', type=int)
    ptype = request.args.get('type', '')

    q = Payment.query.filter_by(state='done')
    if date_from:
        q = q.filter(Payment.date >= datetime.strptime(date_from, '%Y-%m-%d').date())
    if date_to:
        q = q.filter(Payment.date <= datetime.strptime(date_to, '%Y-%m-%d').date())
    if treasury_id:
        q = q.filter_by(treasury_id=treasury_id)
    if ptype:
        q = q.filter_by(payment_type=ptype)

    payments = q.order_by(Payment.date.desc()).all()
    total_out = sum(p.amount for p in payments if p.payment_type == 'outbound')
    total_in = sum(p.amount for p in payments if p.payment_type == 'inbound')
    treasuries = Treasury.query.all()
    return render_template('reports/payments.html', payments=payments,
                           total_out=total_out, total_in=total_in, treasuries=treasuries,
                           date_from=date_from, date_to=date_to, treasury_id=treasury_id, ptype=ptype)


@reports_bp.route('/custodies')
def custodies_report():
    state = request.args.get('state', '')
    q = Custody.query
    if state:
        q = q.filter_by(state=state)
    custodies = q.order_by(Custody.date.desc()).all()
    return render_template('reports/custodies.html', custodies=custodies, state=state)
