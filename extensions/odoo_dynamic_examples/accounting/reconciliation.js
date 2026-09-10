const initReconciliation = () => {
    const reconciliationRoot = document.querySelector('#reconciliation .reconciliation-example');
    if (!reconciliationRoot) {
        return;
    }

    const table = reconciliationRoot.querySelector('table');
    if (!table) {
        return;
    }

    const bodyRows = Array.from(table.querySelectorAll('tbody tr'));
    if (bodyRows.length < 5) {
        return;
    }

    const invoice1Rows = [bodyRows[0], bodyRows[1], bodyRows[3]].filter(Boolean);
    const invoice2Rows = [bodyRows[2], bodyRows[4]].filter(Boolean);

    invoice1Rows.forEach(row => row.classList.add('invoice1'));
    invoice2Rows.forEach(row => row.classList.add('invoice2'));

    const buttons = reconciliationRoot.querySelector('.reconciliation-controls');
    if (!buttons) {
        return;
    }

    const nextButton = buttons.querySelector('button[data-action="next"]');
    const unreconcileButton = buttons.querySelector('button[data-action="unreconcile"]');
    if (!nextButton || !unreconcileButton) {
        return;
    }

    let state = 0;

    const setButtons = () => {
        const initialLabel = nextButton.dataset.labelInitial;
        const nextLabel = nextButton.dataset.labelNext;

        nextButton.textContent = state === 0 ? initialLabel : nextLabel;
        nextButton.disabled = state === 2;
        unreconcileButton.hidden = state !== 2;
    };

    const goNext = () => {
        if (state === 0) {
            reconciliationRoot.classList.add('reconcile2');
            state = 1;
            return;
        }
        if (state === 1) {
            reconciliationRoot.classList.add('reconcile1');
            state = 2;
            return;
        }
        throw new Error(`Unknown reconciliation state ${state}`);
    };

    const unreconcile = () => {
        reconciliationRoot.classList.remove('reconcile1', 'reconcile2');
        [...invoice1Rows, ...invoice2Rows].forEach(row => row.classList.remove('reconciled'));
        state = 0;
        requestAnimationFrame(setButtons);
    };

    buttons.addEventListener('click', event => {
        const button = event.target.closest('button[data-action]');
        if (!button) {
            return;
        }

        if (button.dataset.action === 'next') {
            button.disabled = true;
            goNext();
            return;
        }
        if (button.dataset.action === 'unreconcile') {
            unreconcile();
        }
    });

    reconciliationRoot.addEventListener('animationend', event => {
        const row = event.target.closest('tr');
        if (!row) {
            return;
        }
        if (invoice1Rows.includes(row)) {
            row.classList.add('reconciled');
        }
        if (invoice2Rows.includes(row)) {
            row.classList.add('reconciled');
        }
        setButtons();
    });

    setButtons();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReconciliation, { once: true });
} else {
    initReconciliation();
}
