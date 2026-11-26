(function () {

    document.addEventListener('DOMContentLoaded', () => {
        const navigationMenu = document.getElementById('o_main_toctree');
        const sideNav = document.getElementById('o_menu');

        // Entries without a page of their own expand and collapse their list when clicked.
        // The groups and the entries on the path of the current page are always expanded.
        const selector = 'li:not(.o_menu_group, .current) > a[href="#"] + ul';
        navigationMenu.querySelectorAll(selector).forEach(list => {
            const entry = list.previousElementSibling;
            entry.setAttribute('role', 'button');
            entry.setAttribute('aria-expanded', false);
            entry.addEventListener('click', event => {
                event.preventDefault();
                const isExpanded = entry.parentElement.classList.toggle('o_expanded');
                entry.setAttribute('aria-expanded', isExpanded);
            });
        });

        // Scroll the side navigation (not the page) to the entry of the current page.
        const currentEntry = navigationMenu.querySelector('a.current');
        if (currentEntry) {
            sideNav.scrollTop = currentEntry.offsetTop - sideNav.clientHeight / 2;
        }
    });

})();
