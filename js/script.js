$(function() {
    var link = $('.hamburger');
    var close = $('.menu-close');
    var menu = $('.mobile-menu');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('mobile-menu-active');
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('mobile-menu-active'); 
    });
});