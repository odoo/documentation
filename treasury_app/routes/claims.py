from datetime import datetime, date
from flask import Blueprint, render_template, redirect, url_for, flash, request
from models import db, PaymentClaim, PaymentClaimLine, Sequence

claims_bp = Blueprint('claims', __name__)


@claims_bp.route('/')
def index():
    claim_type = request.args.get('type', '')
    state = request.args.get('state', '')
    q = PaymentClaim.query
    if claim_type:
        q = q.filter_by(claim_type=claim_type)
    if state:
        q = q.filter_by(state=state)
    claims = q.order_by(PaymentClaim.date.desc()).all()
    return render_template('claims/index.html', claims=claims, claim_type=claim_type, state=state)


@claims_bp.route('/new', methods=['GET', 'POST'])
def new():
    claim_type = request.args.get('type', 'vendor')
    if request.method == 'POST':
        claim_type = request.form.get('claim_type', 'vendor')
        prefix = 'VPC' if claim_type == 'vendor' else 'EXP'
        c = PaymentClaim(
            number=Sequence.next(prefix, prefix),
            claim_type=claim_type,
            date=datetime.strptime(request.form['date'], '%Y-%m-%d').date(),
            due_date=datetime.strptime(request.form['due_date'], '%Y-%m-%d').date() if request.form.get('due_date') else None,
            vendor=request.form.get('vendor', ''),
            vendor_ref=request.form.get('vendor_ref', ''),
            employee=request.form.get('employee', ''),
            department=request.form.get('department', ''),
            description=request.form['description'],
            notes=request.form.get('notes', ''),
            priority=request.form.get('priority', 'normal'),
        )
        db.session.add(c)
        db.session.flush()

        # Add lines
        descriptions = request.form.getlist('line_description')
        accounts = request.form.getlist('line_account')
        quantities = request.form.getlist('line_quantity')
        prices = request.form.getlist('line_price')

        for i, desc in enumerate(descriptions):
            if desc.strip():
                line = PaymentClaimLine(
                    claim_id=c.id,
                    description=desc,
                    account=accounts[i] if i < len(accounts) else '',
                    quantity=float(quantities[i]) if i < len(quantities) and quantities[i] else 1.0,
                    unit_price=float(prices[i]) if i < len(prices) and prices[i] else 0.0,
                )
                db.session.add(line)

        db.session.commit()
        flash('تم إنشاء المطالبة بنجاح', 'success')
        return redirect(url_for('claims.show', id=c.id))
    return render_template('claims/form.html', claim=None, claim_type=claim_type)


@claims_bp.route('/<int:id>')
def show(id):
    c = PaymentClaim.query.get_or_404(id)
    return render_template('claims/show.html', claim=c)


@claims_bp.route('/<int:id>/edit', methods=['GET', 'POST'])
def edit(id):
    c = PaymentClaim.query.get_or_404(id)
    if c.state != 'draft':
        flash('لا يمكن تعديل مطالبة معتمدة', 'danger')
        return redirect(url_for('claims.show', id=id))
    if request.method == 'POST':
        c.date = datetime.strptime(request.form['date'], '%Y-%m-%d').date()
        c.due_date = datetime.strptime(request.form['due_date'], '%Y-%m-%d').date() if request.form.get('due_date') else None
        c.vendor = request.form.get('vendor', '')
        c.vendor_ref = request.form.get('vendor_ref', '')
        c.employee = request.form.get('employee', '')
        c.department = request.form.get('department', '')
        c.description = request.form['description']
        c.notes = request.form.get('notes', '')
        c.priority = request.form.get('priority', 'normal')

        # Delete old lines and re-add
        for line in c.lines:
            db.session.delete(line)
        db.session.flush()

        descriptions = request.form.getlist('line_description')
        accounts = request.form.getlist('line_account')
        quantities = request.form.getlist('line_quantity')
        prices = request.form.getlist('line_price')

        for i, desc in enumerate(descriptions):
            if desc.strip():
                line = PaymentClaimLine(
                    claim_id=c.id,
                    description=desc,
                    account=accounts[i] if i < len(accounts) else '',
                    quantity=float(quantities[i]) if i < len(quantities) and quantities[i] else 1.0,
                    unit_price=float(prices[i]) if i < len(prices) and prices[i] else 0.0,
                )
                db.session.add(line)

        db.session.commit()
        flash('تم تحديث المطالبة', 'success')
        return redirect(url_for('claims.show', id=c.id))
    return render_template('claims/form.html', claim=c, claim_type=c.claim_type)


@claims_bp.route('/<int:id>/submit', methods=['POST'])
def submit(id):
    c = PaymentClaim.query.get_or_404(id)
    if c.state != 'draft':
        flash('يمكن التقديم من المسودة فقط', 'danger')
    elif not c.lines:
        flash('يجب إضافة بند واحد على الأقل', 'danger')
    elif c.total_amount <= 0:
        flash('الإجمالي يجب أن يكون أكبر من صفر', 'danger')
    elif c.claim_type == 'vendor' and not c.vendor:
        flash('يجب تحديد المورد', 'danger')
    elif c.claim_type == 'expense' and not c.employee:
        flash('يجب تحديد الموظف', 'danger')
    else:
        c.state = 'submitted'
        db.session.commit()
        flash('تم تقديم المطالبة للاعتماد', 'info')
    return redirect(url_for('claims.show', id=id))


@claims_bp.route('/<int:id>/approve', methods=['POST'])
def approve(id):
    c = PaymentClaim.query.get_or_404(id)
    if c.state != 'submitted':
        flash('يمكن الاعتماد من حالة مقدمة فقط', 'danger')
    else:
        c.state = 'approved'
        c.approved_by = request.form.get('approved_by', 'المدير')
        c.approved_date = date.today()
        db.session.commit()
        flash('تم اعتماد المطالبة', 'success')
    return redirect(url_for('claims.show', id=id))


@claims_bp.route('/<int:id>/reject', methods=['POST'])
def reject(id):
    c = PaymentClaim.query.get_or_404(id)
    if c.state != 'submitted':
        flash('يمكن الرفض من حالة مقدمة فقط', 'danger')
    else:
        c.state = 'rejected'
        c.rejected_reason = request.form.get('reason', '')
        db.session.commit()
        flash('تم رفض المطالبة', 'warning')
    return redirect(url_for('claims.show', id=id))


@claims_bp.route('/<int:id>/cancel', methods=['POST'])
def cancel(id):
    c = PaymentClaim.query.get_or_404(id)
    if c.state == 'paid':
        flash('لا يمكن إلغاء مطالبة مدفوعة', 'danger')
    else:
        c.state = 'cancelled'
        db.session.commit()
        flash('تم إلغاء المطالبة', 'warning')
    return redirect(url_for('claims.show', id=id))


@claims_bp.route('/<int:id>/reset', methods=['POST'])
def reset(id):
    c = PaymentClaim.query.get_or_404(id)
    if c.state in ('submitted', 'rejected', 'cancelled'):
        c.state = 'draft'
        db.session.commit()
        flash('تمت إعادة المطالبة للمسودة', 'info')
    return redirect(url_for('claims.show', id=id))
