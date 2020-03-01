
var header_height  = $('.navbar').height(),
    intro_height    = $('.banner').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar").addClass("bgc-white");

    } else {
        $(".navbar").removeClass("bgc-white");

    }
});


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});






















































$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    freeScroll: false,
    wrapAround: true
  });