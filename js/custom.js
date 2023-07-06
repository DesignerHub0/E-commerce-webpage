$(document).ready(function() {

    $('.goToNext').on('click', function() {

        var cls = $(this).offset().top;
        $("html, body").animate({ scrollTop: cls }, "slow");

    });
    $('#product-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 1,
        responsive : {
            // breakpoint from 768 up
            768 : {
                items: 1,
            }
        }
    });

});