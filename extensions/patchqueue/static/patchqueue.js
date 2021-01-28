function makeRadios(code) {
    var fragment = document.createDocumentFragment();
    ['section', 'diff', 'file'].forEach(function (section, _, a) {
        var radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'pq-radio-' + code);
        radio.setAttribute('data-section', section);
        if (section === 'section') {
            radio.checked = true;
        }

        var label = document.createElement('label');
        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + section));

        fragment.appendChild(label);
        fragment.appendChild(document.createTextNode(' '));
    });
    return fragment;
}
document.addEventListener('DOMContentLoaded', function () {
    var patches = document.querySelectorAll('.pq-needs-toggle');
    for (var i = 0; i < patches.length; ++i) {
        var block = document.createElement('div');
        block.appendChild(makeRadios(i));
        var patch = patches[i];
        patch.insertBefore(block, patch.childNodes[0]);
        patch.addEventListener('click', function (event) {
            var el = event.target;
            if (el.nodeName.toUpperCase() !== 'INPUT'
                || !el.hasAttribute('data-section')) {
                return;
            }
            // input < label < div[block] < div.pq-patch
            var patch = el.parentNode.parentNode.parentNode;
            var classes = patch.className.split(/\s+/)
                .filter(function (cls, index, names) {
                    return !/^pq-show-\w+/.test(cls);
                });
            classes.push('pq-show-' + el.getAttribute('data-section'));
            patch.className = classes.join(' ');
        });
    }
}, false);

