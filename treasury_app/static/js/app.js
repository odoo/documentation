// Treasury Management System - JavaScript

// Auto-calculate line subtotals
function calcSubtotal(row) {
    const qty = parseFloat(row.querySelector('.line-qty')?.value) || 1;
    const price = parseFloat(row.querySelector('.line-price')?.value) || 0;
    const subtotal = qty * price;
    const cell = row.querySelector('.line-subtotal');
    if (cell) cell.textContent = subtotal.toLocaleString('ar-SA', { minimumFractionDigits: 2 });
    updateTotal();
}

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.line-price').forEach((el, i) => {
        const qty = parseFloat(document.querySelectorAll('.line-qty')[i]?.value) || 1;
        total += (parseFloat(el.value) || 0) * qty;
    });
    const totalEl = document.getElementById('grand-total');
    if (totalEl) totalEl.textContent = total.toLocaleString('ar-SA', { minimumFractionDigits: 2 }) + ' ر.س';
}

// Add new line row
function addLine() {
    const tbody = document.getElementById('lines-body');
    if (!tbody) return;
    const idx = tbody.rows.length;
    const row = tbody.insertRow();
    row.innerHTML = `
        <td><input type="text" name="line_description" class="form-control form-control-sm" placeholder="البيان" required></td>
        <td><input type="text" name="line_account" class="form-control form-control-sm" placeholder="الحساب"></td>
        <td><input type="number" name="line_quantity" class="form-control form-control-sm line-qty" value="1" min="0.01" step="0.01" onchange="calcSubtotal(this.closest('tr'))"></td>
        <td><input type="number" name="line_price" class="form-control form-control-sm line-price" value="0" min="0" step="0.01" onchange="calcSubtotal(this.closest('tr'))"></td>
        <td class="line-subtotal text-end fw-bold text-primary">0.00</td>
        <td><button type="button" class="btn btn-sm btn-outline-danger" onclick="removeLine(this)"><i class="bi bi-trash"></i></button></td>
    `;
    row.querySelector('[name="line_description"]').focus();
}

function removeLine(btn) {
    const row = btn.closest('tr');
    if (document.querySelectorAll('#lines-body tr').length > 1) {
        row.remove();
        updateTotal();
    }
}

// Payment method toggle
function togglePaymentFields() {
    const method = document.getElementById('payment_method')?.value;
    document.getElementById('check-fields')?.classList.toggle('d-none', method !== 'check');
    document.getElementById('transfer-fields')?.classList.toggle('d-none', method !== 'transfer');
}

// Confirm dialogs
document.addEventListener('DOMContentLoaded', function () {
    // Auto-dismiss alerts
    setTimeout(() => {
        document.querySelectorAll('.alert').forEach(a => {
            if (!a.querySelector('[data-bs-dismiss]')) return;
            bootstrap.Alert.getOrCreateInstance(a)?.close();
        });
    }, 5000);

    // Initialize line calculations
    document.querySelectorAll('#lines-body tr').forEach(row => calcSubtotal(row));

    // Payment method fields
    togglePaymentFields();
    document.getElementById('payment_method')?.addEventListener('change', togglePaymentFields);

    // Tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el);
    });
});

// Format number as currency
function formatCurrency(val) {
    return parseFloat(val || 0).toLocaleString('ar-SA', { minimumFractionDigits: 2 }) + ' ر.س';
}
