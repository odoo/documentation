from datetime import datetime, date
from flask import Blueprint, render_template, redirect, url_for, flash, request
from models import db, Custody, CustodyExpense, Payment, TreasuryTransaction, Treasury, Sequence

custody_bp = Blueprint('custody', __name__)


@custody_bp.route('/')
def index():
    state = request.args.get('state', '')
    q = Custody.query
    if state:
        q = q.filter_by(state=state)
    custodies = q.order_by(Custody.date.desc()).all()
    return render_template('custody/index.html', custodies=custodies, state=state)


@custody_bp.route('/new', methods=['GET', 'POST'])
def new():
    treasuries = Treasury.query.filter_by(state='open').all()
    if request.method == 'POST':
        c = Custody(
            number=Sequence.next('CUS', 'CUS'),
            employee=request.form['employee'],
            department=request.form.get('department', ''),
            treasury_id=int(request.form['treasury_id']),
            date=datetime.strptime(request.form['date'], '%Y-%m-%d').date(),
            due_date=datetime.strptime(request.form['due_date'], '%Y-%m-%d').date() if request.form.get('due_date') else None,
            amount=float(request.form['amount']),
            purpose=request.form['purpose'],
            notes=request.form.get('notes', ''),
        )
        db.session.add(c)
        db.session.commit()
        flash('تم إنشاء العهدة بنجاح', 'success')
        return redirect(url_for('custody.show', id=c.id))
    return render_template('custody/form.html', custody=None, treasuries=treasuries)


@custody_bp.route('/<int:id>')
def show(id):
    c = Custody.query.get_or_404(id)
    return render_template('custody/show.html', custody=c)


@custody_bp.route('/<int:id>/edit', methods=['GET', 'POST'])
def edit(id):
    c = Custody.query.get_or_404(id)
    treasuries = Treasury.query.filter_by(state='open').all()
    if c.state != 'draft':
        flash('لا يمكن تعديل عهدة معتمدة', 'danger')
        return redirect(url_for('custody.show', id=id))
    if request.method == 'POST':
        c.employee = request.form['employee']
        c.department = request.form.get('department', '')
        c.treasury_id = int(request.form['treasury_id'])
        c.date = datetime.strptime(request.form['date'], '%Y-%m-%d').date()
        c.due_date = datetime.strptime(request.form['due_date'], '%Y-%m-%d').date() if request.form.get('due_date') else None
        c.amount = float(request.form['amount'])
        c.purpose = request.form['purpose']
        c.notes = request.form.get('notes', '')
        db.session.commit()
        flash('تم تحديث العهدة', 'success')
        return redirect(url_for('custody.show', id=c.id))
    return render_template('custody/form.html', custody=c, treasuries=treasuries)


@custody_bp.route('/<int:id>/confirm', methods=['POST'])
def confirm(id):
    c = Custody.query.get_or_404(id)
    if c.state != 'draft':
        flash('يمكن الاعتماد من المسودة فقط', 'danger')
    elif c.amount <= 0:
        flash('مبلغ العهدة يجب أن يكون أكبر من صفر', 'danger')
    else:
        c.state = 'confirmed'
        db.session.commit()
        flash('تم اعتماد العهدة', 'success')
    return redirect(url_for('custody.show', id=id))


@custody_bp.route('/<int:id>/pay', methods=['POST'])
def pay(id):
    c = Custody.query.get_or_404(id)
    if c.state != 'confirmed':
        flash('يجب اعتماد العهدة أولاً', 'danger')
        return redirect(url_for('custody.show', id=id))
    treasury = Treasury.query.get(c.treasury_id)
    if treasury.balance < c.amount:
        flash(f'رصيد الخزينة غير كافٍ! المتاح: {treasury.balance:,.2f}', 'danger')
        return redirect(url_for('custody.show', id=id))

    p = Payment(
        number=Sequence.next('PMT', 'PMT'),
        payment_type='outbound',
        custody_id=c.id,
        date=date.today(),
        treasury_id=c.treasury_id,
        beneficiary=c.employee,
        amount=c.amount,
        description=f'صرف عهدة: {c.purpose}',
        payment_method='cash',
        state='done',
        done_by='النظام',
        done_at=datetime.now(),
    )
    db.session.add(p)
    db.session.flush()

    TreasuryTransaction(
        treasury_id=c.treasury_id,
        date=date.today(),
        description=f'صرف عهدة: {c.number}',
        reference=p.number,
        transaction_type='out',
        amount=c.amount,
        balance_after=treasury.balance - c.amount,
    )
    c.state = 'paid'
    c.payment_id = p.id
    db.session.commit()
    flash('تم صرف العهدة بنجاح', 'success')
    return redirect(url_for('custody.show', id=id))


@custody_bp.route('/<int:id>/add_expense', methods=['POST'])
def add_expense(id):
    c = Custody.query.get_or_404(id)
    if c.state != 'paid':
        flash('يمكن إضافة مصروفات للعهدة المصروفة فقط', 'danger')
        return redirect(url_for('custody.show', id=id))
    exp = CustodyExpense(
        custody_id=c.id,
        date=datetime.strptime(request.form['date'], '%Y-%m-%d').date(),
        description=request.form['description'],
        account=request.form.get('account', ''),
        amount=float(request.form['amount']),
        notes=request.form.get('notes', ''),
    )
    db.session.add(exp)
    db.session.commit()
    flash('تم إضافة المصروف', 'success')
    return redirect(url_for('custody.show', id=id))


@custody_bp.route('/<int:id>/delete_expense/<int:exp_id>', methods=['POST'])
def delete_expense(id, exp_id):
    exp = CustodyExpense.query.get_or_404(exp_id)
    db.session.delete(exp)
    db.session.commit()
    flash('تم حذف المصروف', 'warning')
    return redirect(url_for('custody.show', id=id))


@custody_bp.route('/<int:id>/clear', methods=['POST'])
def clear(id):
    c = Custody.query.get_or_404(id)
    if c.state != 'paid':
        flash('يجب صرف العهدة أولاً', 'danger')
        return redirect(url_for('custody.show', id=id))
    treasury = Treasury.query.get(c.treasury_id)

    if c.remaining > 0:
        # Return excess to treasury
        p = Payment(
            number=Sequence.next('RCV', 'RCV'),
            payment_type='inbound',
            custody_id=c.id,
            date=date.today(),
            treasury_id=c.treasury_id,
            beneficiary=c.employee,
            amount=c.remaining,
            description=f'استرداد متبقي عهدة: {c.number}',
            payment_method='cash',
            state='done',
            done_by='النظام',
            done_at=datetime.now(),
        )
        db.session.add(p)
        TreasuryTransaction(
            treasury_id=c.treasury_id,
            date=date.today(),
            description=f'استرداد متبقي عهدة: {c.number}',
            reference=p.number,
            transaction_type='in',
            amount=c.remaining,
            balance_after=treasury.balance + c.remaining,
        )
        flash(f'تم استرداد {c.remaining:,.2f} للخزينة', 'info')

    elif c.remaining < 0:
        additional = abs(c.remaining)
        if treasury.balance < additional:
            flash(f'رصيد الخزينة غير كافٍ لصرف الفرق! المتاح: {treasury.balance:,.2f}', 'danger')
            return redirect(url_for('custody.show', id=id))
        p = Payment(
            number=Sequence.next('PMT', 'PMT'),
            payment_type='outbound',
            custody_id=c.id,
            date=date.today(),
            treasury_id=c.treasury_id,
            beneficiary=c.employee,
            amount=additional,
            description=f'صرف فرق إضافي عهدة: {c.number}',
            payment_method='cash',
            state='done',
            done_by='النظام',
            done_at=datetime.now(),
        )
        db.session.add(p)
        TreasuryTransaction(
            treasury_id=c.treasury_id,
            date=date.today(),
            description=f'صرف فرق إضافي عهدة: {c.number}',
            reference=p.number,
            transaction_type='out',
            amount=additional,
            balance_after=treasury.balance - additional,
        )
        flash(f'تم صرف فرق إضافي {additional:,.2f}', 'info')

    c.state = 'cleared'
    c.clearance_date = date.today()
    c.cleared_by = 'النظام'
    db.session.commit()
    flash('تمت تسوية العهدة بنجاح', 'success')
    return redirect(url_for('custody.show', id=id))


@custody_bp.route('/<int:id>/cancel', methods=['POST'])
def cancel(id):
    c = Custody.query.get_or_404(id)
    if c.state == 'paid':
        flash('لا يمكن إلغاء عهدة مصروفة', 'danger')
    else:
        c.state = 'cancelled'
        db.session.commit()
        flash('تم إلغاء العهدة', 'warning')
    return redirect(url_for('custody.show', id=id))
