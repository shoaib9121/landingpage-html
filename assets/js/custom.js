$(document).ready(function(){

    // Testimonial Owl Carousel
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        rewind: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            }
        }
    });

    // Toggle Scroll-to-top

    var stickyScrollTop = $('.scroll-top');
    var currentScroll = $(window).scrollTop(); 
    if(currentScroll > 100){
        stickyScrollTop.addClass('show')
    }
    $(window).scroll(function() {              
        var currentScroll = $(window).scrollTop(); 
        if(currentScroll > 100){
            stickyScrollTop.addClass('show')
        }else{
            stickyScrollTop.removeClass('show')
        }
    });

    // Scroll to section from navigation
    $(".main-nav .nav-link, .contact-btn").click(function(){
        var pageId = $(this).attr("data-page");
        $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
    });

    // Animate section elements
    $(window).scroll(function(event) {
  
        $(".section").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("come-in"); 
          } 
        });
    });

    var win = $(window);
    var allMods = $(".section");

    // Already visible modules
    allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
    });

    win.scroll(function(event) {
    
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
            el.addClass("come-in"); 
            } 
        });
    });
});// end of document ready

 // Scroll to top
 function scrollToTop() { 
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    }); 
}