(function ($) {

    document.addEventListener('DOMContentLoaded', function () {
        const content = document.getElementById('o_content');

        // Enforce the presence of the `img-fluid` class on all images in the body
        content.querySelectorAll('img').forEach(image => {
            image.classList.add('img-fluid');
        });

        // Add permalink anchors next to body sections
        content.querySelectorAll('section').forEach(section => {
            const heading = section.querySelector('h1,h2,h3,h4,h5,h6');
            if (heading) {
                const permalinkMarker = document.createElement('a');
                permalinkMarker.href = `#${section.id}`;
                permalinkMarker.classList.add('o_permalink_marker');
                permalinkMarker.innerText = "O_REMOVE_ME"
                heading.classList.add('o_has_permalink_marker');  // TODO EDI do we need this class?
                heading.append(permalinkMarker);
            }
        });
    });

})();
