$(document).ready(function() {

    $('.goToNext').on('click', function() {

        var cls = $(this).offset().top;
        $("html, body").animate({ scrollTop: cls }, "slow");

    });

});