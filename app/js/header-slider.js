$(document).ready(function() {
    const headerSlider = $('#headerSlider');

    headerSlider.on('initialized.owl.carousel', function(event) {
        $('.slide-controls-number__active').text(event.item.index + 1);
        $('.slide-controls-number__total').text(event.item.count);
    });

    headerSlider.owlCarousel({
        items: 1,
        //loop: true,
        dots: false,
        smartSpeed: 2000
    });

    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    });
    
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel');
    });

    headerSlider.on('changed.owl.carousel', function(event) {
        $('.slide-controls-number__active').text(event.item.index + 1);
        $('.slide-controls-number__total').text(event.item.count);
    });
});