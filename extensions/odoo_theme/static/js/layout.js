(function ($) {

    document.addEventListener('DOMContentLoaded', function () {
        const content = document.getElementById('o_content');

        // Enforce the presence of the `img-fluid` class on all images in the body.
        content.querySelectorAll('img').forEach(image => {
            image.classList.add('img-fluid');
        });

        // Make all external links open in a new tab by default.
        content.querySelectorAll('a.external').forEach(externalLink => {
            externalLink.setAttribute('target', '_blank');
        })
    });

})();
