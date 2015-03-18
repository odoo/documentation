(function () {
    document.addEventListener('DOMContentLoaded', function () {
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
    });
})();
