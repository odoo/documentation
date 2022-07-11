(function ($) {

    document.addEventListener('DOMContentLoaded', function () {
        const content = document.getElementById('o_content');

        let imageModalId = 0;
        content.querySelectorAll('img').forEach(image => {
            // Enforce the presence of the `img-fluid` class on all images.
            image.classList.add('img-fluid');

            // Add a modal to each image that does not explicitly block it and has no target.
            if (!image.classList.contains('o-no-modal') && image.parentElement.tagName !== 'A') {
                const modalContainer = document.createElement('div');
                modalContainer.classList.add('o_image_modal');
                modalContainer.innerHTML = `<div class="modal fade" id="modal-${imageModalId}">
                       <div class="modal-dialog modal-dialog-centered">
                         <div class="modal-content">
                           <div class="modal-body">
                             <img src="${image.src}" alt="${image.alt}" class="o-no-modal img-fluid"/>
                             <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
        })
    });

})();
