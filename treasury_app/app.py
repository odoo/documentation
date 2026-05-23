import os
from flask import Flask, render_template, redirect, url_for, flash, request, jsonify
from models import db, Treasury, Custody, PaymentClaim, Payment, Sequence
from routes.treasury import treasury_bp
from routes.custody import custody_bp
from routes.claims import claims_bp
from routes.payments import payments_bp
from routes.reports import reports_bp


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'treasury-secret-key-2024'
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'treasury.db')}"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    app.register_blueprint(treasury_bp, url_prefix='/treasury')
    app.register_blueprint(custody_bp, url_prefix='/custody')
    app.register_blueprint(claims_bp, url_prefix='/claims')
    app.register_blueprint(payments_bp, url_prefix='/payments')
    app.register_blueprint(reports_bp, url_prefix='/reports')

    with app.app_context():
        db.create_all()

    @app.route('/')
    def dashboard():
        treasuries = Treasury.query.filter_by(state='open').all()
        pending_claims = PaymentClaim.query.filter(
            PaymentClaim.state.in_(['submitted', 'approved', 'partial'])
        ).count()
        pending_custodies = Custody.query.filter(
            Custody.state.in_(['confirmed', 'paid'])
        ).count()
        recent_payments = Payment.query.filter_by(state='done').order_by(Payment.date.desc()).limit(10).all()
        total_balance = sum(t.balance for t in treasuries)
        stats = {
            'total_balance': total_balance,
            'pending_claims': pending_claims,
            'pending_custodies': pending_custodies,
            'treasuries_count': len(treasuries),
        }
        return render_template('dashboard.html',
                               stats=stats,
                               treasuries=treasuries,
                               recent_payments=recent_payments)

    @app.template_filter('currency')
    def currency_filter(value, symbol='ر.س'):
        if value is None:
            return f'0.00 {symbol}'
        return f'{value:,.2f} {symbol}'

    @app.template_filter('ar_date')
    def ar_date_filter(value):
        if not value:
            return ''
        if hasattr(value, 'strftime'):
            return value.strftime('%Y/%m/%d')
        return str(value)

    return app


if __name__ == '__main__':
    app = create_app()
    print("=" * 50)
    print("  نظام إدارة الخزينة والعهدة")
    print("  Treasury & Expense Management System")
    print("=" * 50)
    print("  افتح المتصفح على: http://localhost:5000")
    print("=" * 50)
    app.run(debug=True, host='0.0.0.0', port=5000)
