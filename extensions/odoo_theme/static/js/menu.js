/* global _prepareAccordion */ //see utils.js
(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        const navigationMenu = document.getElementById('o_main_toctree');

        // Allow to automatically collapse and expand TOC entries
        _prepareAccordion(navigationMenu);

        // Allow to respectively highlight and expand the TOC entries and their related TOC entry
        // list whose page is displayed.
        const deepestActiveTocEntries = _flagActiveTocEntriesAndLists(navigationMenu);

        // Expand the top-level menu items.
        _expandTopMenus(navigationMenu);

        // Show hidden menu when the css classes have been properly specified
        navigationMenu.removeAttribute('hidden');

        // Scroll the menu to the deepest active TOC entry.
        _scrollToDeepestActiveTocEntry(deepestActiveTocEntries);
    });

    /**
     * Add the relevant classes on the TOC entries (and lists) whose page is displayed.
     *
     * TOC entries (<li> elements) that are on the path of the displayed page receive the
     * `o_active_toc_entry` class, and their related (parent) TOC entry list (<ul> elements) receive
     * the `show` (Bootstrap) class. Also, the deepest active TOC entries of their respective branch
     * receive the `o_deepest_active_toc_entry` class, and their child TOC entry lists receive the
     * `show` class.
     *
     * @param {HTMLElement} navigationMenu - The navigation menu.
     * @return {Array} - The deepest active TOC entries of their respective branch.
     */
    const _flagActiveTocEntriesAndLists = navigationMenu => {
        const regexLayer = /\btoctree-l(?<layer>\d+)\b/;
        let lastLayer = undefined;
        let lastTocEntry = undefined;
        const deepestActiveTocEntries = [];
        navigationMenu.querySelectorAll('.current').forEach(element => {
            if (element.tagName === 'UL') {
                element.classList.add('show'); // Expand all related <ul>
            } else if (element.tagName === 'LI') {
                element.classList.add('o_active_toc_entry'); // Highlight all active <li>
                let match = regexLayer.exec(element.className);
                let currentLayer = parseInt(match.groups.layer, 10);
                if (lastLayer && currentLayer <= lastLayer) { // Multiple lists are open.
                    // Flag the last active TOC entry as the deepest of its branch before moving to
                    // the next active branch.
                    deepestActiveTocEntries.push(lastTocEntry);
                }
                lastLayer = currentLayer;
                lastTocEntry = element;
            }
        });
        if (lastTocEntry) {
            // The last active TOC entry is the deepest of its branch.
            deepestActiveTocEntries.push(lastTocEntry);
        }
        deepestActiveTocEntries.forEach(deepestTocEntry => {
            const childTocEntryList = deepestTocEntry.querySelector('ul');
            if (childTocEntryList) {  // The TOC entry has an associated TOC entry list.
                childTocEntryList.classList.add('show');
            }
            deepestTocEntry.classList.add('o_deepest_active_toc_entry');
        });
        return deepestActiveTocEntries;
    };

    /**
     * Add the `show` class on top-level menus.
     *
     * @param {HTMLElement} navigationMenu - The navigation menu.
     */
    const _expandTopMenus = navigationMenu => {
        navigationMenu.querySelectorAll('.toctree-l1').forEach(tocEntry => {
            const childTocEntryList = tocEntry.querySelector('ul');
            if (childTocEntryList) {  // The TOC entry has an associated TOC entry list.
                childTocEntryList.classList.add('show'); // Expand the top-level menus.
            }
        });
    };

    /**
     * Scroll the active TOC entry into view.
     *
     * Note: this method must be called *after* the `_expandTopMenus` method and showing the menu.
     *
     * @param {Array} deepestActiveTocEntries - The deepest active TOC entries of their respective
     *                                          branch.
     */
    const _scrollToDeepestActiveTocEntry = deepestActiveTocEntries => {
        if (deepestActiveTocEntries.length > 0) {
            deepestActiveTocEntries[0].scrollIntoView({block: 'center'});
        }
    };

     document.addEventListener('scroll', () => {
         // Allow to hide the searchbar when the page is scrolled in mobile.
         _flagHeaderWithScrollPosition();
     });

    /**
     * Add/Remove the class `o_header_scrolled` on the header according to the scroll position.
     */
     const _flagHeaderWithScrollPosition = () => {
         const header = document.querySelector('.o_main_header');
         if (this.scrollY > 0) {
             header.classList.add('o_header_scrolled');
         } else {
             header.classList.remove('o_header_scrolled');
         }
     };

})();
