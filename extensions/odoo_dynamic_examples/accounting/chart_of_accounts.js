const ACCOUNT = {
    ASSETS: 1,
    BANK: 11000,
    ACCOUNTS_RECEIVABLE: 13100,
    STOCK: 14000,
    STOCK_OUT: 14600,
    BUILDINGS: 17200,
    DEPRECIATION_ASSET: 17800,
    TAXES_PAID: 19000,
    LIABILITIES: 2,
    ACCOUNTS_PAYABLE: 21000,
    DEFERRED_REVENUE: 22300,
    STOCK_IN: 23000,
    TAXES_PAYABLE: 26200,
    EQUITY: 3,
    CAPITAL: 31000,
    REVENUE: 4,
    SALES: 41000,
    SALES_SERVICES: 42000,
    EXPENSES: 5,
    GOODS_SOLD: 51100,
    DEPRECIATION_EXPENSE: 52500,
    PRICE_DIFFERENCE: 53000,
};

const CATEGORY_CHILDREN = {
    1: [11000, 13100, 14000, 14600, 17200, 17800, 19000],
    2: [21000, 22300, 23000, 26200],
    3: [31000],
    4: [41000, 42000],
    5: [51100, 52500, 53000],
};

const sale = 100;
const cor = 50;
const corTax = cor * 0.09;
const tax = sale * 0.09;
const total = sale + tax;
const refund = sale;
const refundTax = refund * 0.09;
const purchase = 52;
const purchaseTax = 52 * 0.09;

function constant(value) {
    return function () {
        return value;
    };
}

const operations = [
    {
        id: 'incorporation',
        entries: [
            { account: ACCOUNT.BANK, debit: constant(1000) },
            { account: ACCOUNT.CAPITAL, credit: constant(1000) },
        ],
    },
    {
        id: 'customer_invoice_shipping',
        entries: [
            { account: ACCOUNT.ACCOUNTS_RECEIVABLE, debit: constant(total) },
            { account: ACCOUNT.GOODS_SOLD, debit: constant(cor) },
            { account: ACCOUNT.SALES, credit: constant(sale) },
            { account: ACCOUNT.STOCK_OUT, credit: constant(cor) },
            { account: ACCOUNT.TAXES_PAYABLE, credit: constant(tax) },
        ],
    },
    {
        id: 'goods_shipment',
        entries: [
            { account: ACCOUNT.STOCK_OUT, debit: constant(cor) },
            { account: ACCOUNT.STOCK, credit: constant(cor) },
        ],
    },
    {
        id: 'refund',
        entries: [
            { account: ACCOUNT.SALES, debit: constant(refund) },
            { account: ACCOUNT.TAXES_PAYABLE, debit: constant(refundTax) },
            { account: ACCOUNT.ACCOUNTS_RECEIVABLE, credit: constant(refund + refundTax) },
        ],
    },
    {
        id: 'customer_payment',
        entries: [
            {
                account: ACCOUNT.BANK,
                debit(ctx) {
                    return ctx.enabledOps.has('refund') ? total - (refund + refundTax) : total;
                },
            },
            {
                account: ACCOUNT.ACCOUNTS_RECEIVABLE,
                credit(ctx) {
                    return ctx.enabledOps.has('refund') ? total - (refund + refundTax) : total;
                },
            },
        ],
    },
    {
        id: 'vendor_goods_received',
        entries: [
            { account: ACCOUNT.STOCK_IN, credit: constant(cor) },
            { account: ACCOUNT.STOCK, debit: constant(cor) },
        ],
    },
    {
        id: 'vendor_bill_50',
        entries: [
            { account: ACCOUNT.STOCK_IN, debit: constant(cor) },
            { account: ACCOUNT.TAXES_PAID, debit: constant(corTax) },
            { account: ACCOUNT.ACCOUNTS_PAYABLE, credit: constant(cor + corTax) },
        ],
    },
    {
        id: 'vendor_bill_52',
        entries: [
            { account: ACCOUNT.PRICE_DIFFERENCE, debit: constant(purchase - cor) },
            { account: ACCOUNT.STOCK_IN, debit: constant(cor) },
            { account: ACCOUNT.TAXES_PAID, debit: constant(purchaseTax) },
            { account: ACCOUNT.ACCOUNTS_PAYABLE, credit: constant(purchase + purchaseTax) },
        ],
    },
    {
        id: 'vendor_bill_paid',
        entries: [
            { account: ACCOUNT.ACCOUNTS_PAYABLE, debit: constant(purchase + purchaseTax) },
            { account: ACCOUNT.BANK, credit: constant(purchase + purchaseTax) },
        ],
    },
    {
        id: 'acquire_building',
        entries: [
            { account: ACCOUNT.BUILDINGS, debit: constant(3000) },
            { account: ACCOUNT.TAXES_PAID, debit: constant(300) },
            { account: ACCOUNT.ACCOUNTS_PAYABLE, credit: constant(3300) },
        ],
    },
    {
        id: 'pay_building',
        entries: [
            { account: ACCOUNT.ACCOUNTS_PAYABLE, debit: constant(3300) },
            { account: ACCOUNT.BANK, credit: constant(3300) },
        ],
    },
    {
        id: 'asset_depreciation',
        entries: [
            { account: ACCOUNT.DEPRECIATION_EXPENSE, debit: constant(300) },
            { account: ACCOUNT.DEPRECIATION_ASSET, credit: constant(300) },
        ],
    },
    {
        id: 'service_invoice_3y',
        entries: [
            { account: ACCOUNT.ACCOUNTS_RECEIVABLE, debit: constant(total * 3) },
            { account: ACCOUNT.DEFERRED_REVENUE, credit: constant(sale * 3) },
            { account: ACCOUNT.TAXES_PAYABLE, credit: constant(tax * 3) },
        ],
    },
    {
        id: 'revenue_recognition',
        entries: [
            { account: ACCOUNT.DEFERRED_REVENUE, debit: constant(sale) },
            { account: ACCOUNT.SALES_SERVICES, credit: constant(sale) },
        ],
    },
    {
        id: 'pay_taxes',
        entries: [
            {
                account: ACCOUNT.TAXES_PAYABLE,
                debit(ctx) {
                    return computeTaxPayableBalance(ctx.enabledOps);
                },
            },
            {
                account: ACCOUNT.BANK,
                credit(ctx) {
                    return computeTaxPayableBalance(ctx.enabledOps);
                },
            },
        ],
    },
];

const operationsById = new Map(operations.map(op => [op.id, op]));

function valueOrZero(value, ctx) {
    if (typeof value === 'function') {
        return value(ctx) || 0;
    }
    return value || 0;
}

function computeTaxPayableBalance(enabledOps) {
    let result = 0;
    const ctx = { enabledOps };

    enabledOps.forEach(opId => {
        if (opId === 'pay_taxes') {
            return;
        }
        const op = operationsById.get(opId);
        if (!op) {
            return;
        }
        op.entries.forEach(entry => {
            if (entry.account !== ACCOUNT.TAXES_PAYABLE) {
                return;
            }
            result += valueOrZero(entry.credit, ctx) - valueOrZero(entry.debit, ctx);
        });
    });

    return result;
}

const emptyTotals = () => ({ debit: 0, credit: 0 });

function computeTotals(enabledOps) {
    const totals = {};
    const ctx = { enabledOps };

    enabledOps.forEach(opId => {
        const op = operationsById.get(opId);
        if (!op) {
            return;
        }
        op.entries.forEach(entry => {
            const bucket = totals[entry.account] || (totals[entry.account] = emptyTotals());
            bucket.debit += valueOrZero(entry.debit, ctx);
            bucket.credit += valueOrZero(entry.credit, ctx);
        });
    });

    return totals;
}

function accountTotals(code, totals) {
    if (CATEGORY_CHILDREN[code]) {
        return CATEGORY_CHILDREN[code].reduce((acc, childCode) => {
            const child = totals[childCode] || emptyTotals();
            acc.debit += child.debit;
            acc.credit += child.credit;
            return acc;
        }, emptyTotals());
    }
    return totals[code] || emptyTotals();
}

function format(value, defaultValue) {
    if (!value) {
        return defaultValue === undefined ? '' : defaultValue;
    }
    if (value % 1 === 0) {
        return value;
    }
    return value.toFixed(2);
}

function moveControlsToExample(root) {
    const controls = root.querySelector('.chart-controls');
    const section = root.closest('section');
    const exampleContainer = section ? section.querySelector('.example') : null;

    if (controls && exampleContainer) {
        exampleContainer.insertBefore(controls, exampleContainer.firstChild);
    }

    return section ? section.querySelector('.chart-controls') : root.querySelector('.chart-controls');
}

function initChartOfAccounts() {
    const root = document.querySelector('.chart-of-accounts');
    if (!root) {
        return;
    }

    const controlsRoot = moveControlsToExample(root);
    if (!controlsRoot) {
        return;
    }

    let activeOpId = null;
    const enabledOps = new Set();

    const controlModels = Array.from(controlsRoot.querySelectorAll('label[data-operation]'))
        .map(label => ({
            label,
            opId: label.dataset.operation,
            input: label.querySelector('input[type="checkbox"]'),
        }))
        .filter(model => model.input);

    const rowModels = Array.from(root.querySelectorAll('tr[data-account]')).map(row => ({
        code: parseInt(row.dataset.account, 10),
        debitCell: row.querySelector('[data-col="debit"]'),
        creditCell: row.querySelector('[data-col="credit"]'),
        balanceCell: row.querySelector('[data-col="balance"]'),
    })).filter(row => row.debitCell && row.creditCell && row.balanceCell);

    const update = () => {
        controlModels.forEach(control => {
            control.input.checked = enabledOps.has(control.opId);
            control.label.classList.toggle('highlight-op', activeOpId === control.opId);
        });

        const totals = computeTotals(enabledOps);
        const highlightByAccount = {};
        const activeEntries = operationsById.get(activeOpId)?.entries || [];
        activeEntries.forEach(entry => {
            highlightByAccount[entry.account] = entry.credit !== undefined ? 'credit' : 'debit';
        });

        rowModels.forEach(row => {
            const sums = accountTotals(row.code, totals);
            row.debitCell.textContent = format(sums.debit);
            row.creditCell.textContent = format(sums.credit);
            row.balanceCell.textContent = sums.debit || sums.credit ? format(sums.debit - sums.credit, 0) : '';
            row.debitCell.classList.toggle('highlight-op', highlightByAccount[row.code] === 'debit');
            row.creditCell.classList.toggle('highlight-op', highlightByAccount[row.code] === 'credit');
        });
    };

    controlModels.forEach(control => {
        control.input.addEventListener('change', event => {
            if (event.target.checked) {
                enabledOps.add(control.opId);
                activeOpId = control.opId;
            } else {
                enabledOps.delete(control.opId);
                activeOpId = null;
            }
            update();
        });
    });

    update();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChartOfAccounts, { once: true });
} else {
    initChartOfAccounts();
}
