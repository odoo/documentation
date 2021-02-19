(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        this.navigationMenu = document.getElementById('o_main_toctree');

        // Allow to automatically collapse and expand TOC entries
        _prepareAccordion(this.navigationMenu);

        // Allow to respectively highlight and expand the TOC entries and their related TOC
        // entry list whose page is displayed.
        _flagActiveTocEntriesAndLists();

        // Add a class with the name of the file to each corresponding menu item
        _flagMenuItemsWithFileName();
    });

    /**
     * Add the relevant classes on the TOC entries (and lists) whose page is displayed.
     *
     * TOC entries (<li> elements) that are on the path of the displayed page receive the
     * `o_active_toc_entry` class, and their related (parent) TOC entry list (<ul> elements) receive
     * the `show` (Bootstrap) class. The child TOC entry list of the deepest TOC entry also
     * receives the `show` class.
     */
    const _flagActiveTocEntriesAndLists = () => {
        let deepestTocEntry = undefined;
        this.navigationMenu.querySelectorAll('.current').forEach(element => {
            if (element.tagName === 'UL') {
                // Expand all related <ul>
                element.classList.add('show');
            } else if (element.tagName === 'LI') {
                // Highlight all <li> in the active hierarchy
                element.classList.add('o_active_toc_entry');
                deepestTocEntry = element;
            }
        })
        if (deepestTocEntry) {
            const childTocEntryList = deepestTocEntry.querySelector('ul');
            if (childTocEntryList) {
                childTocEntryList.classList.add('show');
            }
        }
    };

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
