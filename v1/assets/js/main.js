(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        /*wow js init*/
        new WOW().init();

        /*---- portfolio filter activation -----*/
        var Container = $('#portfolio-wrapper');
        if (Container.length > 0) {
            Container.imagesLoaded(function() {
                var portfolio = $('#portfolio-wrapper').isotope({
                    itemSelector: '.single-portfolio-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter: 0
                    }
                });
                $(document).on('click', '.portfolio-menu-wrapper ul li', function() {
                    var filterValue = $(this).attr('data-filter');
                    portfolio.isotope({
                        filter: filterValue
                    });
                });
            });
        }
        /*---- portfolio menu active  ------*/
        var portfolioMenu = '.portfolio-menu-wrapper ul li';
        $(document).on('click', portfolioMenu, function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        //magnific popup activation 
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        //back to top 
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        //brand logo carousel
        var $instagramCarousel = $('#intagram-carousel-wrapper');
        if ($instagramCarousel.length > 0) {
            $instagramCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 10,
                dots: false,
                nav: false,
                stagePadding:50,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    599:{
                        items:2,
                        stagePadding: 0,
                    },
                    767:{
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        $(document).on('click', '#kickz ul li a', function (e) {
            e.preventDefault();
            var anchor = $(this).attr('href');
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1000);
        });


    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function() {
        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        /*--sticky menu activation--*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;

    });

    $(window).on('load', function() {
        //preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));