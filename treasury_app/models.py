from datetime import datetime, date
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Treasury(db.Model):
    __tablename__ = 'treasuries'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    code = db.Column(db.String(50), nullable=False, unique=True)
    treasury_type = db.Column(db.String(20), default='cash')  # cash / bank
    currency = db.Column(db.String(10), default='SAR')
    responsible = db.Column(db.String(200))
    max_amount = db.Column(db.Float, default=0)
    notes = db.Column(db.Text)
    state = db.Column(db.String(20), default='open')  # open / closed
    created_at = db.Column(db.DateTime, default=datetime.now)

    payments = db.relationship('Payment', backref='treasury', lazy=True)
    custodies = db.relationship('Custody', backref='treasury', lazy=True)
    transactions = db.relationship('TreasuryTransaction', backref='treasury', lazy=True, order_by='TreasuryTransaction.date.desc()')

    @property
    def balance(self):
        inflow = sum(p.amount for p in self.payments if p.state == 'done' and p.payment_type == 'inbound')
        outflow = sum(p.amount for p in self.payments if p.state == 'done' and p.payment_type == 'outbound')
        return inflow - outflow

    @property
    def type_label(self):
        return 'نقدي' if self.treasury_type == 'cash' else 'بنكي'

    @property
    def state_label(self):
        return 'مفتوح' if self.state == 'open' else 'مغلق'


class TreasuryTransaction(db.Model):
    __tablename__ = 'treasury_transactions'
    id = db.Column(db.Integer, primary_key=True)
    treasury_id = db.Column(db.Integer, db.ForeignKey('treasuries.id'), nullable=False)
    date = db.Column(db.Date, default=date.today)
    description = db.Column(db.String(500), nullable=False)
    reference = db.Column(db.String(100))
    transaction_type = db.Column(db.String(10))  # in / out
    amount = db.Column(db.Float, nullable=False)
    balance_after = db.Column(db.Float)
    created_at = db.Column(db.DateTime, default=datetime.now)


class Custody(db.Model):
    __tablename__ = 'custodies'
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.String(50), unique=True)
    employee = db.Column(db.String(200), nullable=False)
    department = db.Column(db.String(200))
    treasury_id = db.Column(db.Integer, db.ForeignKey('treasuries.id'), nullable=False)
    date = db.Column(db.Date, default=date.today)
    due_date = db.Column(db.Date)
    amount = db.Column(db.Float, nullable=False)
    purpose = db.Column(db.String(500), nullable=False)
    notes = db.Column(db.Text)
    state = db.Column(db.String(20), default='draft')  # draft/confirmed/paid/cleared/cancelled
    payment_id = db.Column(db.Integer, db.ForeignKey('payments.id'), nullable=True)
    clearance_date = db.Column(db.Date)
    cleared_by = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.now)

    expenses = db.relationship('CustodyExpense', backref='custody', lazy=True, cascade='all,delete-orphan')

    @property
    def total_expenses(self):
        return sum(e.amount for e in self.expenses)

    @property
    def remaining(self):
        return self.amount - self.total_expenses

    @property
    def state_label(self):
        labels = {'draft': 'مسودة', 'confirmed': 'معتمد', 'paid': 'مصروف', 'cleared': 'مسوّى', 'cancelled': 'ملغي'}
        return labels.get(self.state, self.state)

    @property
    def state_color(self):
        colors = {'draft': 'secondary', 'confirmed': 'primary', 'paid': 'warning', 'cleared': 'success', 'cancelled': 'danger'}
        return colors.get(self.state, 'secondary')


class CustodyExpense(db.Model):
    __tablename__ = 'custody_expenses'
    id = db.Column(db.Integer, primary_key=True)
    custody_id = db.Column(db.Integer, db.ForeignKey('custodies.id'), nullable=False)
    date = db.Column(db.Date, default=date.today)
    description = db.Column(db.String(500), nullable=False)
    account = db.Column(db.String(200))
    amount = db.Column(db.Float, nullable=False)
    notes = db.Column(db.String(500))


class PaymentClaim(db.Model):
    __tablename__ = 'payment_claims'
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.String(50), unique=True)
    claim_type = db.Column(db.String(20), nullable=False)  # vendor / expense
    date = db.Column(db.Date, default=date.today)
    due_date = db.Column(db.Date)
    vendor = db.Column(db.String(300))
    vendor_ref = db.Column(db.String(200))
    employee = db.Column(db.String(200))
    department = db.Column(db.String(200))
    description = db.Column(db.Text, nullable=False)
    notes = db.Column(db.Text)
    priority = db.Column(db.String(10), default='normal')  # normal/high/urgent
    state = db.Column(db.String(20), default='draft')  # draft/submitted/approved/partial/paid/rejected/cancelled
    approved_by = db.Column(db.String(200))
    approved_date = db.Column(db.Date)
    rejected_reason = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.now)

    lines = db.relationship('PaymentClaimLine', backref='claim', lazy=True, cascade='all,delete-orphan')
    payments = db.relationship('Payment', backref='claim', lazy=True)

    @property
    def subtotal(self):
        return sum(l.subtotal for l in self.lines)

    @property
    def total_amount(self):
        return sum(l.subtotal for l in self.lines)

    @property
    def paid_amount(self):
        return sum(p.amount for p in self.payments if p.state == 'done')

    @property
    def residual(self):
        return self.total_amount - self.paid_amount

    @property
    def state_label(self):
        labels = {
            'draft': 'مسودة', 'submitted': 'مقدمة للاعتماد',
            'approved': 'معتمدة', 'partial': 'مدفوعة جزئياً',
            'paid': 'مدفوعة', 'rejected': 'مرفوضة', 'cancelled': 'ملغية'
        }
        return labels.get(self.state, self.state)

    @property
    def state_color(self):
        colors = {
            'draft': 'secondary', 'submitted': 'info', 'approved': 'primary',
            'partial': 'warning', 'paid': 'success', 'rejected': 'danger', 'cancelled': 'dark'
        }
        return colors.get(self.state, 'secondary')

    @property
    def type_label(self):
        return 'مطالبة مورد' if self.claim_type == 'vendor' else 'مطالبة مصاريف'

    @property
    def priority_label(self):
        labels = {'normal': 'عادي', 'high': 'مهم', 'urgent': 'عاجل'}
        return labels.get(self.priority, 'عادي')

    @property
    def priority_color(self):
        colors = {'normal': 'secondary', 'high': 'warning', 'urgent': 'danger'}
        return colors.get(self.priority, 'secondary')


class PaymentClaimLine(db.Model):
    __tablename__ = 'payment_claim_lines'
    id = db.Column(db.Integer, primary_key=True)
    claim_id = db.Column(db.Integer, db.ForeignKey('payment_claims.id'), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    account = db.Column(db.String(200))
    quantity = db.Column(db.Float, default=1.0)
    unit_price = db.Column(db.Float, nullable=False)
    notes = db.Column(db.String(500))

    @property
    def subtotal(self):
        return self.quantity * self.unit_price


class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.String(50), unique=True)
    payment_type = db.Column(db.String(20), nullable=False)  # outbound / inbound
    claim_id = db.Column(db.Integer, db.ForeignKey('payment_claims.id'), nullable=True)
    custody_id = db.Column(db.Integer, db.ForeignKey('custodies.id'), nullable=True)
    date = db.Column(db.Date, default=date.today)
    treasury_id = db.Column(db.Integer, db.ForeignKey('treasuries.id'), nullable=False)
    beneficiary = db.Column(db.String(300))
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    payment_method = db.Column(db.String(20), default='cash')  # cash/check/transfer
    check_number = db.Column(db.String(100))
    check_date = db.Column(db.Date)
    transfer_ref = db.Column(db.String(200))
    reference = db.Column(db.String(200))
    notes = db.Column(db.Text)
    state = db.Column(db.String(20), default='draft')  # draft/confirmed/done/cancelled
    confirmed_by = db.Column(db.String(200))
    confirmed_at = db.Column(db.DateTime)
    done_by = db.Column(db.String(200))
    done_at = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.now)

    custody_ref = db.relationship('Custody', foreign_keys=[custody_id], backref='payment_voucher', lazy=True)

    @property
    def state_label(self):
        labels = {'draft': 'مسودة', 'confirmed': 'معتمد', 'done': 'منفذ', 'cancelled': 'ملغي'}
        return labels.get(self.state, self.state)

    @property
    def state_color(self):
        colors = {'draft': 'secondary', 'confirmed': 'warning', 'done': 'success', 'cancelled': 'danger'}
        return colors.get(self.state, 'secondary')

    @property
    def type_label(self):
        return 'سند صرف' if self.payment_type == 'outbound' else 'سند قبض'

    @property
    def method_label(self):
        labels = {'cash': 'نقدي', 'check': 'شيك', 'transfer': 'تحويل بنكي'}
        return labels.get(self.payment_method, self.payment_method)


# Sequence helper
class Sequence(db.Model):
    __tablename__ = 'sequences'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    prefix = db.Column(db.String(20))
    next_number = db.Column(db.Integer, default=1)

    @classmethod
    def next(cls, name, prefix=''):
        seq = cls.query.filter_by(name=name).first()
        if not seq:
            seq = cls(name=name, prefix=prefix, next_number=1)
            db.session.add(seq)
        year = datetime.now().year
        number = f"{prefix}/{year}/{seq.next_number:04d}"
        seq.next_number += 1
        db.session.commit()
        return number
