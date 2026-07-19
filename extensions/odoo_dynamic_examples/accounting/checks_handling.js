const initChecksHandling = () => {
    const section = document.querySelector('.checks-handling');
    if (!section) {
        return;
    }

    const list = section.querySelector('ul');
    if (!list) {
        return;
    }

    const items = Array.from(list.querySelectorAll(':scope > li'));
    if (!items.length) {
        return;
    }

    items.forEach((item, index) => {
        const text = item.textContent.trim();
        item.textContent = '';

        const label = document.createElement('label');
        label.style.display = 'block';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'checks-handling';
        input.dataset.index = String(index);

        label.appendChild(input);
        label.appendChild(document.createTextNode(' '));
        label.appendChild(document.createTextNode(text));
        item.appendChild(label);
    });

    const panels = [];
    let sibling = list.nextElementSibling;
    while (sibling) {
        if (sibling.matches('div')) {
            panels.push(sibling);
        }
        sibling = sibling.nextElementSibling;
    }

    if (!panels.length) {
        return;
    }

    const inputs = Array.from(list.querySelectorAll('input[name="checks-handling"]'));
    const update = (activeIndex) => {
        inputs.forEach((input, index) => {
            input.checked = index === activeIndex;
        });
        panels.forEach((panel, index) => {
            panel.style.display = index === activeIndex ? '' : 'none';
        });
    };

    list.addEventListener('change', event => {
        const input = event.target;
        if (!(input instanceof HTMLInputElement) || input.name !== 'checks-handling') {
            return;
        }
        const index = Number(input.dataset.index);
        update(Number.isFinite(index) ? index : 0);
    });

    update(0);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChecksHandling, { once: true });
} else {
    initChecksHandling();
}
