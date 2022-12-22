(function () {
    // NOTE: cheat_sheet.rst
    document.addEventListener('DOMContentLoaded', function () {
        var $rec = $('#reconciliation .reconciliation-example');
        if (!$rec.length) { return; }

        var state = 0;
        var operations = [
            function reconcile2() {
                $rec.addClass('reconcile2');
                return 1;
            },
            function reconcile1() {
                $rec.addClass('reconcile1');
                return 2;
            },
            function unreconcile() {
                $rec.removeClass('reconcile1 reconcile2');
                $1.add($2).removeClass('reconciled');
                setTimeout(update_btn, 0);
                return 0;
            }
        ];
        var $buttons = $('<div class="buttons">').on('click', 'button', function () {
            this.disabled = true;
            state = operations[state]();
        }).appendTo($rec);

        var $1 = $rec.find('td:contains("Invoice 1"), td:contains("Payment 1")')
            .parent()
            .addClass('invoice1');
        var $2 = $rec.find('td:contains("Invoice 2"), td:contains("Payment 2")')
            .parent()
            .addClass('invoice2');

        // will be called multiple times (each tr + each td), only take trs in
        // account
        $rec.on('animationend webkitAnimationEnd MSAnimationEnd', function (e) {
            switch (e.originalEvent.target) {
                case $1[0]:
                    $1.addClass('reconciled');
                    break;
                case $2[0]:
                    $2.addClass('reconciled');
                    break;
            }
            update_btn();
        });
        update_btn();

        function update_btn() {
            var $reconcile = $('<button class="btn btn-success" type="button">')
                .text("Next Reconcile")
                .appendTo($buttons.empty())
            switch (state) {
                case 0:
                    $reconcile.text("Reconcile");
                    break;
                case 1:
                    break;
                case 2:
                    $reconcile.prop('disabled', true);
                    $('<button class="btn btn-primary" type="button">')
                        .text("Unreconcile")
                        .appendTo($buttons);
                    break;
                default:
                    throw new Error("Unknown button state " + state);
            }
        }
    });
})();
