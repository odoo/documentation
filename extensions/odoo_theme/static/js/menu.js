(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        this.navigationMenu = document.getElementById('o_main_toctree');

        // Allow to automatically collapse and expand TOC entries
        _prepareAccordion(this.navigationMenu);

        // Add a class with the name of the file to each corresponding menu item
        _flagMenuItemsWithFileName();
    });

    /**
     * Add the name of the file as class of the corresponding menu item.
     */
    const _flagMenuItemsWithFileName = () => {
        this.navigationMenu.querySelectorAll('li').forEach(menuItem => {
            let href = menuItem.querySelector('a').href;
            if (href === '#') { // Selected nodes don't have their file name in the href
                href = window.location.href; // Get it from the current window location
            }
            const fileName = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.html'));
            menuItem.classList.add(`o_menu_${fileName}`);
        });
    };

})();
