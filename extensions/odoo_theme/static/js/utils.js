let tocEntryListId = 0; // Used to generate IDs of toc entry lists for both the menu and page TOC

/**
 * Update the provided TOC to allow collapsing its entries with Bootstrap's accordion.
 *
 * The typical structure of a TOC menu is a follows:
 * <ul><li>
 *     <a href="#"/>
 *     <ul>
 *         <li><a href="#heading_without_child"/></li>
 *         <li>
 *             <a href="#heading_with_children"/>
 *             <ul>...</ul>
 *         </li>
 *     </ul>
 * </li></ul>
 *
 * Since a <ul> is always preceded by a <a>, and since we only need to make change to <a>
 * elements followed by a <ul>, we simply loop on <ul> elements to access all parts of the DOM
 * that need to be modified.
 *
 * The final structure must look like this:
 * <ul><li>
 *     <!-- Only <a> element with empty href must expand/collapse on click -->
 *     <a href="#" data-bs-target="#o_target_{id}>" data-bs-toggle="collapse"/>
 *     <ul>
 *         <li><a href="#heading_without_child"/></li>
 *         <li>
 *             <div class="o_toc_entry_wrapper">
 *                 <i class="i-chevron-right" data-bs-target="#o_target_{id}" data-bs-toggle="collapse"/>
 *                 <a href="#heading_with_children"/>
 *             </div>
 *             <ul id="o_target_{id}" class="collapse">...</ul>
 *         </li>
 *     </ul>
 * </li></ul>
 *
 * @param {HTMLElement} tocElement - The element containing the TOC
 */
const _prepareAccordion = (tocElement) => {
    // Start at the second TOC entry list (<ul>) to avoid collapsing the entire TOC
    const tocRoot = tocElement.querySelector('ul');
    tocRoot.querySelectorAll('ul').forEach(tocEntryList => {
        // Modify the <ul> element
        tocEntryList.id = `o_target_${tocEntryListId++}`;
        tocEntryList.classList.add('collapse');
        // Create and configure an <i> element
        const arrowButton = document.createElement('I');
        arrowButton.setAttribute('data-bs-target', `#${tocEntryList.id}`);
        arrowButton.setAttribute('data-bs-toggle', 'collapse');
        arrowButton.classList.add('i-chevron-right');
        // Modify the <a> element (only if it has no href, otherwise let the redirection happen)
        const relatedHeadingRef = tocEntryList.previousSibling;
        if (relatedHeadingRef.getAttribute('href') === '#') {
            relatedHeadingRef.setAttribute('data-bs-target', `#${tocEntryList.id}`);
            relatedHeadingRef.setAttribute('data-bs-toggle', 'collapse');
        }
        // Create a <div> element
        const tocEntryWrapper = document.createElement('DIV');
        tocEntryWrapper.classList.add('o_toc_entry_wrapper');
        // Insert the <i> and <a> elements inside the <div> and prepend the <div> to the <ul>
        tocEntryWrapper.append(arrowButton, relatedHeadingRef);
        tocEntryList.parentNode.insertBefore(tocEntryWrapper, tocEntryList);
    });
};
