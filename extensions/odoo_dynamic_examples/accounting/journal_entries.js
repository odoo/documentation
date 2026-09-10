const initJournalEntries = () => {
    const root = document.querySelector('.journal-entries-cheat-sheet');
    if (!root) {
        return;
    }

    const controlsRoot = root.querySelector('.entries-control');
    if (!controlsRoot) {
        return;
    }

    const section = root.closest('section');
    const journalAside = root.closest('.journal-entries');
    if (section && journalAside) {
        section.insertBefore(controlsRoot, journalAside);
    }

    const controls = Array.from(controlsRoot.querySelectorAll('input[type="radio"][data-entry-id]'));
    const panels = Array.from(root.querySelectorAll('.entries-panel[data-entry-id]'));
    const panelsById = new Map(panels.map(panel => [panel.dataset.entryId, panel]));

    if (!controls.length || !panels.length) {
        return;
    }

    const setActive = (entryId) => {
        controls.forEach(input => {
            input.checked = input.dataset.entryId === entryId;
        });
        panels.forEach(panel => {
            panel.hidden = panel.dataset.entryId !== entryId;
        });
    };

    controls.forEach(input => {
        input.addEventListener('change', () => {
            if (!input.checked) {
                return;
            }
            if (!panelsById.has(input.dataset.entryId)) {
                return;
            }
            setActive(input.dataset.entryId);
        });
    });

    const initial = controls.find(input => input.checked && panelsById.has(input.dataset.entryId)) || controls.find(input => panelsById.has(input.dataset.entryId));
    if (initial) {
        setActive(initial.dataset.entryId);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJournalEntries, { once: true });
} else {
    initJournalEntries();
}
