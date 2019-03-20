$(document).ready(function() {

    const shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        items: 3,
        loop: true,
        margin: 2,
        dots: false,
        smartSpeed: 1000
    });

    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    });

    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    });
});