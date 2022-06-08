/* global _prepareAccordion */ //see utils.js
(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        const navigationMenu = document.getElementById('o_main_toctree');

        // Allow to automatically collapse and expand TOC entries
        _prepareAccordion(navigationMenu);

        // Allow to respectively highlight and expand the TOC entries and their related TOC
        // entry list whose page is displayed.
        _flagActiveTocEntriesAndLists(navigationMenu);

        // Show hidden menu when the css classes have been properly specified
        navigationMenu.removeAttribute('hidden');
    });

    /**
     * Add the relevant classes on the TOC entries (and lists) whose page is displayed.
     *
     * TOC entries (<li> elements) that are on the path of the displayed page receive the
     * `o_active_toc_entry` class, and their related (parent) TOC entry list (<ul> elements) receive
     * the `show` (Bootstrap) class.
     * Also, the deepest TOC entries of their respective branch receive the
     * `o_deepest_active_toc_entry` class, and their child TOC entry lists receive the `show` class.
     *
     * @param {HTMLElement} navigationMenu - The navigation menu.
     */
    const _flagActiveTocEntriesAndLists = navigationMenu => {
        const regexLayer = /\btoctree-l(?<layer>\d+)\b/;
        let lastLayer = undefined;
        let lastTocEntry = undefined;
        const deepestTocEntries = [];
        navigationMenu.querySelectorAll('.current').forEach(element => {
            if (element.tagName === 'UL') {
                element.classList.add('show'); // Expand all related <ul>
            } else if (element.tagName === 'LI') {
                element.classList.add('o_active_toc_entry'); // Highlight all active <li>
                let match = regexLayer.exec(element.className);
                let currentLayer = parseInt(match.groups.layer, 10);
                if (lastLayer && currentLayer <= lastLayer) { // We just moved to another branch
                    deepestTocEntries.push(lastTocEntry);
                }
                lastLayer = currentLayer;
                lastTocEntry = element;
            }
        })
        if (lastTocEntry) {
            deepestTocEntries.push(lastTocEntry); // The last TOC entry is the deepest of its branch
        }
        deepestTocEntries.forEach(deepestTocEntry => {
            const childTocEntryList = deepestTocEntry.querySelector('ul');
            if (childTocEntryList) {
                childTocEntryList.classList.add('show');
            } else { // If the toc entry is not a TOC, add the class to its closest ancestor entry
                deepestTocEntry = deepestTocEntry.parentElement.parentElement;
            }
            deepestTocEntry.classList.add('o_deepest_active_toc_entry');
        });
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
