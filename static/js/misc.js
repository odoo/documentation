(function () {
    document.addEventListener('DOMContentLoaded', function () {
        alternatives();
        highlight();
        checks_handling();
    });

    function highlight() {
        // NOTE: used by double-entry.rst
        $('.highlighter-list').each(function () {
            var $this = $(this),
                $target = $($this.data('target'));
            $this.on('mouseout', 'li', function (e) {
                $(e.currentTarget).removeClass('secondary');
                $target.find('.related').removeClass('related');
            }).on('mouseover', 'li', function (e) {
                if (!e.currentTarget.contains(e.target)) { return; }

                var $li = $(e.currentTarget);
                // console.log($li, $li.data('highlight'), $target.find($li.data('highlight')));
                $li.addClass('secondary');
                $target.find($li.data('highlight')).addClass('related');
            });
        });
    }
    /** alternatives display:
     *  - prepend control for each <dt>
     *    - radio input with link to following dd
     *    - label is <dt> content
     *    - hide all first-level dt and dd (CSS)
     *  - on change
     *    - hide all dds
     *    - show dd corresponding to the selected radio
     *  - automatically select first control on startup
     */
    function alternatives() {
        // NOTE: used by double-entry.rst & valuation_methods pages
        $('dl.alternatives').each(function (index) {
            var $list = $(this),
                $contents = $list.children('dd');
            var $controls = $('<div class="alternatives-controls">').append(
                $list.children('dt').map(function () {
                    var label = document.createElement('label'),
                        input = document.createElement('input');
                    input.setAttribute('type', 'radio');
                    input.setAttribute('name', 'alternatives-' + index);

                    var sibling = this;
                    while ((sibling = sibling.nextSibling) && sibling.nodeType !== 1);
                    input.content = sibling;

                    label.appendChild(input);
                    label.appendChild(document.createTextNode(' '));
                    label.appendChild(document.createTextNode(this.textContent));

                    return label;
                }))
                .insertBefore($list)
                .on('change', 'input', function (e) {
                    // change event triggers only on newly selected input, not
                    // on the one being deselected
                    $contents.css('display', '');
                    var content = e.target.content;
                    content && (content.style.display = 'block');
                })
                .find('input:first').click();
        });
    }
    function checks_handling() {
        // NOTE: used by cheat_sheet.rst
        var $section = $('.checks-handling');
        if (!$section.length) { return; }

        var $ul = $section.find('ul')
            .find('li').each(function () {
                var txt = this.textContent;
                while (this.firstChild) {
                    this.removeChild(this.firstChild)
                }

                $('<label style="display: block;">')
                    .append('<input type="radio" name="checks-handling">')
                    .append(' ')
                    .append(txt)
                    .appendTo(this);
            }).end()
            .on('change', 'input', update);
        update();
        function update() {
            var $inputs = $ul.find('input');
            var idx = 0;
            $inputs.each(function (index) {
                if (this.checked) {
                    idx = index;
                }
            }).eq(idx).prop('checked', true);
            $ul.nextAll('div').hide().eq(idx).show();
        }

    }
})();
