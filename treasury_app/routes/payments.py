from datetime import datetime, date
from flask import Blueprint, render_template, redirect, url_for, flash, request
from models import db, Payment, PaymentClaim, Treasury, TreasuryTransaction, Sequence

payments_bp = Blueprint('payments', __name__)


@payments_bp.route('/')
def index():
    ptype = request.args.get('type', '')
    state = request.args.get('state', '')
    q = Payment.query
    if ptype:
        q = q.filter_by(payment_type=ptype)
    if state:
        q = q.filter_by(state=state)
    payments = q.order_by(Payment.date.desc()).all()
    return render_template('payments/index.html', payments=payments, ptype=ptype, state=state)


@payments_bp.route('/new', methods=['GET', 'POST'])
def new():
    claim_id = request.args.get('claim_id', type=int)
    claim = PaymentClaim.query.get(claim_id) if claim_id else None
    treasuries = Treasury.query.filter_by(state='open').all()

    if request.method == 'POST':
        payment_type = request.form.get('payment_type', 'outbound')
        prefix = 'PMT' if payment_type == 'outbound' else 'RCV'
        claim_id = request.form.get('claim_id', type=int)
        claim_obj = PaymentClaim.query.get(claim_id) if claim_id else None

        p = Payment(
            number=Sequence.next(prefix, prefix),
            payment_type=payment_type,
            claim_id=claim_id,
            date=datetime.strptime(request.form['date'], '%Y-%m-%d').date(),
            treasury_id=int(request.form['treasury_id']),
            beneficiary=request.form.get('beneficiary', ''),
            amount=float(request.form['amount']),
            description=request.form['description'],
            payment_method=request.form.get('payment_method', 'cash'),
            check_number=request.form.get('check_number', ''),
            check_date=datetime.strptime(request.form['check_date'], '%Y-%m-%d').date() if request.form.get('check_date') else None,
            transfer_ref=request.form.get('transfer_ref', ''),
            reference=request.form.get('reference', ''),
            notes=request.form.get('notes', ''),
        )
        db.session.add(p)
        db.session.commit()
        flash('تم إنشاء السند بنجاح', 'success')
        return redirect(url_for('payments.show', id=p.id))

    return render_template('payments/form.html', payment=None, claim=claim, treasuries=treasuries)


@payments_bp.route('/<int:id>')
def show(id):
    p = Payment.query.get_or_404(id)
    return render_template('payments/show.html', payment=p)


@payments_bp.route('/<int:id>/confirm', methods=['POST'])
def confirm(id):
    p = Payment.query.get_or_404(id)
    if p.state != 'draft':
        flash('يمكن الاعتماد من المسودة فقط', 'danger')
        return redirect(url_for('payments.show', id=id))
    treasury = Treasury.query.get(p.treasury_id)
    if p.payment_type == 'outbound' and treasury.balance < p.amount:
        flash(f'رصيد الخزينة غير كافٍ! المتاح: {treasury.balance:,.2f}', 'danger')
        return redirect(url_for('payments.show', id=id))
    p.state = 'confirmed'
    p.confirmed_by = request.form.get('confirmed_by', 'المدير')
    p.confirmed_at = datetime.now()
    db.session.commit()
    flash('تم اعتماد السند', 'success')
    return redirect(url_for('payments.show', id=id))


@payments_bp.route('/<int:id>/done', methods=['POST'])
def done(id):
    p = Payment.query.get_or_404(id)
    if p.state != 'confirmed':
        flash('يجب اعتماد السند أولاً', 'danger')
        return redirect(url_for('payments.show', id=id))

    treasury = Treasury.query.get(p.treasury_id)
    if p.payment_type == 'outbound' and treasury.balance < p.amount:
        flash(f'رصيد الخزينة غير كافٍ! المتاح: {treasury.balance:,.2f}', 'danger')
        return redirect(url_for('payments.show', id=id))

    p.state = 'done'
    p.done_by = request.form.get('done_by', 'أمين الخزينة')
    p.done_at = datetime.now()

    # Log transaction
    balance_after = treasury.balance + p.amount if p.payment_type == 'inbound' else treasury.balance - p.amount
    tx = TreasuryTransaction(
        treasury_id=p.treasury_id,
        date=p.date,
        description=p.description,
        reference=p.number,
        transaction_type='in' if p.payment_type == 'inbound' else 'out',
        amount=p.amount,
        balance_after=balance_after,
    )
    db.session.add(tx)

    # Update claim state
    if p.claim_id:
        claim = PaymentClaim.query.get(p.claim_id)
        if claim:
            paid = sum(x.amount for x in claim.payments if x.state == 'done' or x.id == p.id)
            if paid >= claim.total_amount - 0.01:
                claim.state = 'paid'
            else:
                claim.state = 'partial'

    db.session.commit()
    flash('تم تنفيذ السند بنجاح وتحديث رصيد الخزينة', 'success')
    return redirect(url_for('payments.show', id=id))


@payments_bp.route('/<int:id>/cancel', methods=['POST'])
def cancel(id):
    p = Payment.query.get_or_404(id)
    if p.state == 'done':
        flash('لا يمكن إلغاء سند منفذ', 'danger')
    else:
        p.state = 'cancelled'
        db.session.commit()
        flash('تم إلغاء السند', 'warning')
    return redirect(url_for('payments.show', id=id))


@payments_bp.route('/<int:id>/print')
def print_voucher(id):
    p = Payment.query.get_or_404(id)
    return render_template('payments/print.html', payment=p)
