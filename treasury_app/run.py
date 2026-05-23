#!/usr/bin/env python3
"""
نظام إدارة الخزينة والعهدة
Treasury & Expense Management System

تشغيل: python run.py
"""
from app import create_app
from models import db, Treasury, Sequence
from datetime import datetime

app = create_app()

# Inject current year into templates
@app.context_processor
def inject_now():
    return {'now': datetime.now()}

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        # Create demo data if empty
        if not Treasury.query.first():
            demo = Treasury(
                name='الخزينة الرئيسية',
                code='MAIN-001',
                treasury_type='cash',
                currency='SAR',
                responsible='أمين الخزينة',
                notes='الخزينة الرئيسية للمقر'
            )
            db.session.add(demo)
            db.session.commit()
            print("✓ تم إنشاء خزينة تجريبية: الخزينة الرئيسية")

    print("\n" + "="*55)
    print("   نظام إدارة الخزينة والعهدة")
    print("   Treasury & Expense Management System v1.0")
    print("="*55)
    print("   ► افتح المتصفح على: http://localhost:5000")
    print("   ► اضغط Ctrl+C لإيقاف البرنامج")
    print("="*55 + "\n")

    app.run(debug=False, host='0.0.0.0', port=5000)
