const initAccountsHighlights = () => {
    const triggers = document.querySelectorAll('.intro-list p');
    const elements = document.querySelectorAll(
        '.accounts-table-container [data-primary], .accounts-table-container [data-secondary]'
    );

    if (!triggers.length || !elements.length) {
        return;
    }

    const clearHighlights = () => {
        triggers.forEach(trigger => trigger.classList.remove('secondary'));
        elements.forEach(el => el.classList.remove('related', 'secondary'));
    };

    const applyHighlights = (state, trigger) => {
        trigger.classList.add('secondary');
        elements.forEach(el => {
            if (el.dataset.primary === state) {
                el.classList.add('related');
            }
            if (el.dataset.secondary === state) {
                el.classList.add('secondary');
            }
        });
    };

    triggers.forEach(trigger => {
        const stateClass = Array.from(trigger.classList).find(name => name.startsWith('intro-'));
        if (!stateClass) {
            return;
        }

        const state = stateClass.slice('intro-'.length);
        const activate = () => {
            clearHighlights();
            applyHighlights(state, trigger);
        };

        trigger.addEventListener('mouseenter', activate);
        trigger.addEventListener('focus', activate);
        trigger.addEventListener('mouseleave', clearHighlights);
        trigger.addEventListener('blur', clearHighlights);
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccountsHighlights, { once: true });
} else {
    initAccountsHighlights();
}
