from flask import Blueprint, render_template, redirect, url_for, flash, request
from models import db, Treasury, TreasuryTransaction

treasury_bp = Blueprint('treasury', __name__)


@treasury_bp.route('/')
def index():
    treasuries = Treasury.query.all()
    return render_template('treasury/index.html', treasuries=treasuries)


@treasury_bp.route('/new', methods=['GET', 'POST'])
def new():
    if request.method == 'POST':
        code = request.form.get('code', '').strip()
        if Treasury.query.filter_by(code=code).first():
            flash('كود الخزينة مستخدم مسبقاً!', 'danger')
            return render_template('treasury/form.html', treasury=None)
        t = Treasury(
            name=request.form['name'],
            code=code,
            treasury_type=request.form.get('treasury_type', 'cash'),
            currency=request.form.get('currency', 'SAR'),
            responsible=request.form.get('responsible', ''),
            max_amount=float(request.form.get('max_amount') or 0),
            notes=request.form.get('notes', ''),
        )
        db.session.add(t)
        db.session.commit()
        flash('تم إنشاء الخزينة بنجاح', 'success')
        return redirect(url_for('treasury.show', id=t.id))
    return render_template('treasury/form.html', treasury=None)


@treasury_bp.route('/<int:id>')
def show(id):
    t = Treasury.query.get_or_404(id)
    transactions = TreasuryTransaction.query.filter_by(treasury_id=id).order_by(
        TreasuryTransaction.date.desc()).limit(50).all()
    return render_template('treasury/show.html', treasury=t, transactions=transactions)


@treasury_bp.route('/<int:id>/edit', methods=['GET', 'POST'])
def edit(id):
    t = Treasury.query.get_or_404(id)
    if request.method == 'POST':
        t.name = request.form['name']
        t.treasury_type = request.form.get('treasury_type', 'cash')
        t.currency = request.form.get('currency', 'SAR')
        t.responsible = request.form.get('responsible', '')
        t.max_amount = float(request.form.get('max_amount') or 0)
        t.notes = request.form.get('notes', '')
        db.session.commit()
        flash('تم تحديث الخزينة', 'success')
        return redirect(url_for('treasury.show', id=t.id))
    return render_template('treasury/form.html', treasury=t)


@treasury_bp.route('/<int:id>/close', methods=['POST'])
def close(id):
    t = Treasury.query.get_or_404(id)
    if t.balance != 0:
        flash(f'لا يمكن إغلاق الخزينة! الرصيد الحالي: {t.balance:,.2f}', 'danger')
    else:
        t.state = 'closed'
        db.session.commit()
        flash('تم إغلاق الخزينة', 'warning')
    return redirect(url_for('treasury.show', id=id))


@treasury_bp.route('/<int:id>/open', methods=['POST'])
def open_treasury(id):
    t = Treasury.query.get_or_404(id)
    t.state = 'open'
    db.session.commit()
    flash('تم فتح الخزينة', 'success')
    return redirect(url_for('treasury.show', id=id))


@treasury_bp.route('/<int:id>/deposit', methods=['GET', 'POST'])
def deposit(id):
    t = Treasury.query.get_or_404(id)
    if request.method == 'POST':
        from models import Payment, Sequence
        from datetime import datetime
        amount = float(request.form['amount'])
        p = Payment(
            number=Sequence.next('RCV', 'RCV'),
            payment_type='inbound',
            treasury_id=t.id,
            date=datetime.strptime(request.form['date'], '%Y-%m-%d').date(),
            beneficiary=request.form.get('beneficiary', ''),
            amount=amount,
            description=request.form.get('description', 'إيداع في الخزينة'),
            payment_method=request.form.get('payment_method', 'cash'),
            state='done',
            done_by='النظام',
        )
        db.session.add(p)
        TreasuryTransaction(
            treasury_id=t.id,
            date=p.date,
            description=p.description,
            reference=p.number,
            transaction_type='in',
            amount=amount,
            balance_after=t.balance + amount,
        )
        db.session.commit()
        flash(f'تم الإيداع بمبلغ {amount:,.2f}', 'success')
        return redirect(url_for('treasury.show', id=id))
    return render_template('treasury/deposit.html', treasury=t)
