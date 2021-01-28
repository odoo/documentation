(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        const navigationMenu = document.getElementById('o_main_toctree');

        // Add a class with the name of the file to each corresponding menu item
        _flagMenuItemsWithFileName(navigationMenu);
    });

    /**
     * Add the name of the file as class of the corresponding menu item.
     *
     * @param {HTMLElement} navigationMenu - The navigation menu containing the global TOC
     */
    const _flagMenuItemsWithFileName = (navigationMenu) => {
        navigationMenu.querySelectorAll('li').forEach(menuItem => {
            let href = menuItem.querySelector('a').href;
            if (href === '#') { // Selected nodes don't have their file name in the href
                href = window.location.href; // Get it from the current window location
            }
            const fileName = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.html'));
            menuItem.classList.add(`o_menu_${fileName}`);
        });
    };

})();
