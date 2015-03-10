(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var $rec = $('#reconciliation #example');
        var $btn = $('<button class="btn btn-success" type="button">')
            .text("Reconcile")
            .appendTo($rec);

        var $1 = $rec.find('td:contains("Invoice 1"), td:contains("Payment 1")')
            .parent()
            .addClass('invoice1');
        var $2 = $rec.find('td:contains("Invoice 2"), td:contains("Payment 2")')
            .parent()
            .addClass('invoice2');

        // will be called multiple times (each tr + each td), doesn't matter
        // since the behavior is constant
        $rec.on('animationend webkitAnimationEnd MSAnimationEnd', function (e) {
            switch (e.originalEvent.animationName) {
            case 'invoice1':
                $1.hide();
                break;
            case 'invoice2':
                $2.hide();
                break;
            }
        });

        $btn.click(function () {
            $rec.addClass('reconcile-accounts');
            $btn.prop('disabled', true);
        });
    });
})();

