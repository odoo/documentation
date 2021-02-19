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
 * For a given <a> and <ul> pair, the final structure must look like this:
 * <div class="o_toc_entry_wrapper">
 *     <i data-bs-target="#o_target_heading_with_children" data-bs-toggle="collapse"
 *        class="i-chevron-right"/>
 *     <a href="#heading_with_children"/>
 * </div>
 * <ul id="o_target_heading_with_children" class="collapse">...</ul>
 *
 * @param {HTMLElement} tocElement - The element containing the TOC
 */
const _prepareAccordion = (tocElement) => {
    // Start at the second TOC entry list (<ul>) to avoid collapsing the entire TOC
    const tocRoot = tocElement.querySelector('ul');
    tocRoot.querySelectorAll('ul').forEach(tocEntryList => {
        const relatedHeadingRef = tocEntryList.previousSibling; // The preceding <a> element
        const temp = relatedHeadingRef.getAttribute('href').replace('#', '').replaceAll('.', '_dot_').replaceAll('/', '_slash_')
        // Modify the <ul> element
        // tocEntryList.id = `o_target_${relatedHeadingRef.getAttribute('href').replace('#', '')}` TODO ANV
        tocEntryList.id = `o_target_${temp}`
        tocEntryList.classList.add('collapse');
        // Create and configure an <li> element
        const arrowButton = document.createElement('I');
        arrowButton.setAttribute('data-bs-target', `#${tocEntryList.id}`);
        arrowButton.setAttribute('data-bs-toggle', 'collapse');
        arrowButton.classList.add('i-chevron-right');
        // Create a <div> element
        const tocEntryWrapper = document.createElement('DIV');
        tocEntryWrapper.classList.add('o_toc_entry_wrapper');
        // Insert the <i> and <a> elements inside the <div> and prepend the <div> to the <ul>
        tocEntryWrapper.append(arrowButton, relatedHeadingRef);
        tocEntryList.parentNode.insertBefore(tocEntryWrapper, tocEntryList);
    });
};