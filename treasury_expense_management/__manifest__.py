{
    'name': 'Treasury & Expense Management',
    'name_arabic': 'إدارة الخزينة والعهدة',
    'version': '17.0.1.0.0',
    'category': 'Accounting/Finance',
    'summary': 'Manage treasury, custodies, payment claims and disbursements',
    'description': """
        إدارة الخزينة والعهدة ومطالبات السداد
        ==========================================
        * إدارة الخزائن (Treasury Management)
        * إدارة العهد (Custody Management)
        * مطالبات سداد الموردين (Vendor Payment Claims)
        * مطالبات المصاريف (Expense Claims)
        * سداد المطالبات (Claim Payments)
    """,
    'author': 'Custom Development',
    'website': '',
    'depends': ['base', 'account', 'hr'],
    'data': [
        'security/treasury_security.xml',
        'security/ir.model.access.csv',
        'data/sequence_data.xml',
        'views/treasury_views.xml',
        'views/custody_views.xml',
        'views/payment_claim_views.xml',
        'views/claim_payment_views.xml',
        'views/menu_views.xml',
        'report/payment_claim_report.xml',
        'report/claim_payment_report.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
