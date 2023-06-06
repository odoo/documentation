(function ($) {

    document.addEventListener('DOMContentLoaded', function () {
        const content = document.getElementById('o_content');

        let imageModalId = 0;
        content.querySelectorAll('img').forEach(image => {
            // Enforce the presence of the `img-fluid` class on all images.
            image.classList.add('img-fluid', 'img-thumbnail');

            // Add a modal to each image that does not explicitly block it and has no target.
            if (!image.classList.contains('o-no-modal') && image.parentElement.tagName !== 'A') {
                const modalContainer = document.createElement('div');
                modalContainer.innerHTML = `<div class="modal fade" id="modal-${imageModalId}">
                       <div class="modal-dialog modal-dialog-centered">
                         <div class="modal-content">
                           <div class="modal-header">
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div class="modal-body">
                              <img src="${image.src}" alt="${image.alt}" class="o-no-modal img-fluid img-thumbnail"/>
                           </div>
                         </div>
                       </div>
                     </div>
                `;
                image.parentNode.append(modalContainer);
                image.setAttribute('data-bs-toggle', 'modal');
                image.setAttribute('data-bs-target', `#modal-${imageModalId}`);
                imageModalId++;
            }
        });

        // Make all external links open in a new tab by default.
        content.querySelectorAll('a.external').forEach(externalLink => {
            externalLink.setAttribute('target', '_blank');
        });

        let canAccessAllL1Toctrees = true; // Whether all direct children have a ref.
        const toctreeWrapper = document.querySelector('.toctree-wrapper');
        toctreeWrapper?.querySelectorAll('.toctree-l1').forEach(l1Toctree => {
            // Flag L2 toctrees that have L3 children.
            if (l1Toctree.querySelector('.toctree-l3')) {
                l1Toctree.querySelectorAll('.toctree-l2').forEach (l2Toctree => {
                    l2Toctree.classList.add('o_toc_contains_l3');
                });
            }
            if (l1Toctree.querySelector('a').getAttribute('href') === '#') {
                canAccessAllL1Toctrees = false;
            }
        });
        if (canAccessAllL1Toctrees) {
            // Use the style of L2 toctrees on L1 toctrees.
            toctreeWrapper?.classList.add('o_toc_l1_to_l2');
        }
    });

})();
