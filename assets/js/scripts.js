/*---------------------------------------------
Template name:  Kinen Ecommerce
Version:        1.0
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

01: Main menu
02: Background image
03: Parsley form validation
04: Smooth scroll for comment reply
05: Back to top button
07: Changing svg color
08: Ajax Contact Form
09: Intro item height
10: Preloader
11: magnificPopup installation
12: Google map
13: banner carosule1
14: banner carosule2
15: insta feed carousel
16: banner slider3
17: banner slider4
18: testimonial carousel
19: product details slider
20: product details slider
21: parallax activation
22: category menu
23: offcanvas wishlist
24: shop filter menu
25: Main menu ofcanvas
26: home page 2 Main menu ofcanvas
27: Section title span width
28: offcanvas cart
29: offcanvas account
30: About image focus
31: counter up
32: Count Down
33: Packery install
34: Collection carousel
35: Common Carousel Activation
36: Catagory hover menu
37: modal window
38: modal quick view slider
39: cart list remover
40: cart list incriment
41: Search bar input text
42: Wish list and add to cart ontifaction
43: title Text animation
44: Coming soon animation home4
----------------------------------------------*/

    (function($) {
        "use strict";

        /* 01: Main menu
            ==============================================*/
            $('.header-menu a[href="#"]').on('click', function(event) {
                event.preventDefault();
            });

            $("#menu-button").append(
                '<span class="bar bar1"></span>',
                '<span class="bar bar2"></span>',
                '<span class="bar bar3"></span>'
            )

            var mainHeader = $('.main-header');
            $(window).scrollTop() > 100 && mainHeader.addClass("sticky fadeInDown");
            $(window).on('scroll', function(e){
                if($(this).scrollTop() < $('.main-header').height()){
                    $('.main-header').removeClass('sticky');
                }else
                    $('.main-header').addClass('sticky');
                    $('.relative-header').removeClass('sticky');
                    

                if($('.relative-header').length !== 0){
                 var r =  $('.relative-header').offset().top
                if($(this).scrollTop() < r ){
                    $('.relative-header.relative-header').removeClass('sticky');
                }else
                    $('.relative-header').addClass('sticky');
                }

                if( $(this).scrollTop() < 300){
                    $('.sticky-social-area').removeClass('sticky');
                }else
                    $('.sticky-social-area').addClass('sticky');
                
                
            });

            /*innear header*/
            // $(document).ready(function(){
            //     var headerheight = $('.inner-page-header').outerHeight();
            //   if($('.page-title-inner') !== 0) 
            //     $('.page-title-inner').css({
            //             marginTop : headerheight
            //         })
            // })

            /* 02: Background image
            ==============================================*/

            var bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
            });


            /* 03: Parsley form validation
            ==============================================*/

            $('.parsley-validate, .parsley-validate form').parsley();


            /* 04: Smooth scroll for comment reply
            ==============================================*/
            
            var $commentContent = $('.comment-content > a');
            
            $commentContent.on('click', function(event){
                event.preventDefault();
                var $target = $('.comment-form');
                
                if ( $target.length ) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - 120
                    }, 500);

                    $target.find('textarea').focus();
                }
            });


        /*============================================
            05: Back to top button
        ==============================================*/

        var $backToTopBtn = $('.back-to-top');

        if ($backToTopBtn.length) {
            var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }

        
        
        /* ====================================================
            06: Product carousel
        ====================================================*/
        $('.shop-product-slider').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots: false,
            center:true,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                768:{
                    items:3
                },
                991:{
                    items:4
                },
                1100:{
                    items:5
                }
            }
        });

    /*============================================
        07: Changing svg color
    ==============================================*/

        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                
                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
        
                // Replace image with new SVG
                $img.replaceWith($svg);
        
            }, 'xml');
        });

        /*=============================================
         08: Ajax Contact Form
        ==============================================*/

         $('.address-form-inner').on('submit', 'form', function(e) {
            e.preventDefault();

            var $el = $(this);

            $.post($el.attr('action'), $el.serialize(), function(res){
                res = $.parseJSON( res );
                $el.parent('.contact-page-form').find('.form-response').html('<span>' + res[1] + '</span>');
            });
        });

        /*============================================
            09: Intro item height
        ==============================================*/

        function pageItemHeight(){
            $('.page-image').height(
                function(){
                    return $(this).width();
                }
            );
        }

        pageItemHeight();
        
        $(window).resize( function(){
            pageItemHeight();
        });

      
    
    /*==============================================
        10: Preloader
    ==============================================*/

    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });



  
/*=====================================================
        11: magnificPopup installation
=====================================================*/
 var c = $('[data-popup="img"]');
        c.length && c.magnificPopup({
            type: "image"
        });
        c = $('[data-popup="video"]');
        c.length && c.magnificPopup({
            type: "iframe"
        });

/*===================================================
        12: Google map
===================================================*/
    //Google Map
        if($('#map').length !==0){
            
        var googleMapSelector = $('#map');
        var latitude = $('.google-map-wrapper').attr('data-latitude');
        var longitude = $('.google-map-wrapper').attr('data-longitude');
        var zoome = $('.google-map-wrapper').attr('data-zoom');
        var zoomtoNum = Number(zoome);
        var mapmarker = $('.google-map-wrapper').attr('data-marker');
        var myCenter = new google.maps.LatLng(latitude, longitude);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: zoomtoNum,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f7f1e0"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#d0e3b4"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.medical",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fbd3da"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#bde6ab"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffe36f"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#efd151"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "black"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#cfb2db"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a2daf2"
                                }
                            ]
                        }
                    ]
            };
            var map = new google.maps.Map( document.getElementById('map'), mapProp );
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: mapmarker,
            });
            marker.setMap(map);

           
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }   
        

  /*========================================================
        13: banner carosule1
  ========================================================*/
  var slider1 = $('.banner-carousel1');

    slider1.owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplaySpeed:50000,
            mouseDrag:false,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
/*========================================================
        14: banner carosule2
  ========================================================*/
  var slider2 = $('.banner-carousel2');

    slider2.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText:['<i class="fa fa-angle-left"></i> Previous','next <i class="fa fa-angle-right"></i>'],
            autoplaySpeed:4000,
            mouseDrag:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                },
                1200:{
                    items:1,
                    stagePadding: 200,
                }
            }
        });

/*=====================================================
    15: insta feed carousel
 =====================================================*/
$('.insta-feed-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: true,
            center:true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:5
                },
                1000:{
                    items:11
                }
            }
        });
/*=====================================================
    16: banner slider3
=====================================================*/
$('.banner-carousel3').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplaySpeed:4000,
            autoplayTimeout:5000,
            autoplay:true,
            mouseDrag:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

/*=====================================================
    17: banner slider4
=====================================================*/
var banner4 = $('.banner-carousel4');
banner4.owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                700:{
                    items:3
                },
                960:{
                    items:4
                },
                1200:{
                    items:6
                }
            }
        });


/*=====================================================
    18: testimonial carousel
=====================================================*/
$('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dots: false,
            center:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

/*==================================================
    20: product details slider
==================================================*/
     let $productGallery = $('.product-gallery'),
            $productThumbs = $('.product-thumbs');

 
            let productPreview = new Swiper($productGallery, {
                spaceBetween: 1,
                touchRatio: 0,
                effect: 'fade',
                pagination: {
                    el: '.product-gallery-pagination',
                    clickable: true,
                }
            });

            let productThumbs = new Swiper($productThumbs, {
                spaceBetween: 10,
                slidesPerView: 4,
                slideToClickedSlide: true,
            });
             $('.product-gallery .swiper-slide-active img').elevateZoom({
                    zoomType: "inner",
                    lensShape : "round",
                    lensSize    : 200,
                    zoomWindowFadeIn: 500,
                    zoomWindowFadeOut: 500
                });

            $productThumbs.on('click','.swiper-slide', function (event) {
                var $t = $(this);
                productPreview.slideTo( $t.index());
                $t.addClass('active swiper-slide-active').siblings().removeClass('active swiper-slide-active');
                 $('.product-gallery .swiper-slide-active img').elevateZoom({
                    zoomType: "inner",
                    lensShape : "round",
                    lensSize    : 200,
                    zoomWindowFadeIn: 500,
                    zoomWindowFadeOut: 500
                }); 

            });
 

       

/*================================================
    21: parallax activation
================================================*/
var $parallaxLayers = $('[data-trigger="parallax_layers"]');

        if( $parallaxLayers.length ){
            $parallaxLayers.each(function () {
                new Parallax( $(this)[0], {
                    selector: '[data-depth]'
                });
            });
        }

/*==================================================
    22: category menu
==================================================*/
var wwidth = $(window).width();
$('.search-btn').on('click', function(event){
    event.preventDefault();
    $('.search-bar').css('display','block');
    $('.catagory-menu-wrap').css('padding-top', '0px');
    $('body').delay(500).addClass('modal-window-open');
    if(wwidth > 680){
        $('.catagory-menu').addClass('active search-menu');
    }else{
        $('.catagory-menu').addClass('active');
    }
    
});
$('.menu-cancel').on('click', function(){
    $(this).parents('.catagory-menu').removeClass('active search-menu');
    $('body').delay(500).removeClass('modal-window-open');
})
$('.menu-btn').on('click', function(event){
    event.preventDefault();
    $('.search-bar').hide();
    $('.catagory-menu-wrap').css('padding-top', '100px');
    $('.catagory-menu').addClass('active');
    $('body').delay(500).addClass('modal-window-open');
});
$('.menu-cancel').on('click', function(){
    $('.catagory-menu').removeClass('active');
    $('body').delay(500).removeClass('modal-window-open');
});


$('.catagory-menu-wrap ul li').on('click', function(){
    $(this).each(function(){
        $(this).children('ul').toggleClass('open')
    })
})

/*==============================================
    23: offcanvas wishlist
==============================================*/
    $('.wishlist-btn-off, .cart-btn, .account-btn').on('click', function(event) {
        event.preventDefault();
        $('.offcanvas-overlay').css({
            'opacity' : 1,
            'visibility': "visible"
        });
    });



$('.offcanvas-overlay').on('click',function(){
    $('.offcanvas').removeClass('show');
    $(this).css({
            'opacity' : 0,
            'visibility': 'hidden'
        });
});

$('.wishlist-btn-off').on('click',function(){
    $('.offcanvas-wishlist').addClass('show')
});
$('.offcanvas-cancel').on('click',function(){
    $('.offcanvas-wishlist').removeClass('show')
    $('.offcanvas-overlay').css({
            'opacity' : 0,
            'visibility': 'hidden'
        });
});


/*====================================================
    24: shop filter menu
====================================================*/
$('.product-filter > a').on('click', function(event){
    event.preventDefault();
})
$('.product-filter-mobile a').on('click', function(event){
    event.preventDefault();
    $('.offcanvas-overlay').css({
            'opacity' : 1,
            'visibility': 'visible'
        });

    $('.offcanvas-filter').addClass('show');
})
$('.offcanvas-cancel').on('click', function(){
      $('.offcanvas-filter').removeClass('show')   
    });
if(wwidth <= 991){
    $('.shope-filter-item > ul').addClass('open');
    $('.woocommerce-products-header').appendTo('.offcanvas-filter')
}
/*======================================================
    25: Main menu ofcanvas
======================================================*/


$('#menu-button').on('click', function(){
    $('.offcanvas-overlay').css({
            'opacity' : 1,
            'visibility': 'visible'
        });

    $('.offcanvas-mainmenu').addClass('show');
    })
$('.offcanvas-cancel').on('click', function(){
      $('.offcanvas-mainmenu').removeClass('show')   
    });

if(wwidth <= 991){
    $('.header-menu > ul').addClass('open');
    $('.header-menu > ul').appendTo('.offcanvas-mainmenu')
}

$('.offcanvas-mainmenu').find('ul li').parents('.offcanvas-mainmenu ul li').addClass('has-sub-item');


$('.offcanvas-mainmenu').find(".has-sub-item").prepend('<span class="submenu-button"></span>');
$('.offcanvas-mainmenu').find('.submenu-button').on('click', function(){
    $(this).toggleClass('submenu-opened');
    if ($(this).siblings('ul').hasClass('open')) {
        $(this).siblings('ul').removeClass('open').slideUp('fast');
    } else {
        $(this).siblings('ul').addClass('open').slideDown('fast');
    }
});
/*============================================================
    26: home page 2 Main menu ofcanvas
============================================================*/
$('.main-menu-btn').on('click',function(){
    $('.header-offcanvas2').addClass('show')
});
$('.offcanvas-cancel').on('click', function(){
    $(this).parents('.header-offcanvas2').removeClass('show')
})

// home page 3 Main menu ofcanvas
$('.header-style3 .header-menu > ul').addClass('open');
$('.header-style3 .header-menu > ul').appendTo('.header-offcanvas2');

// home page 2 Main menu ofcanvas
$('.header-style2 .header-menu > ul').addClass('open');
$('.header-style2 .header-menu > ul').appendTo('.header-offcanvas2');

$('.header-offcanvas2').find('ul li').parents('.header-offcanvas2 ul li').addClass('has-sub-item');
$('.header-offcanvas2').find(".has-sub-item").prepend('<span class="submenu-button"></span>');
$('.header-offcanvas2').find('.submenu-button').on('click', function(){
    $(this).toggleClass('submenu-opened');
    if ($(this).siblings('ul').hasClass('open')) {
        $(this).siblings('ul').removeClass('open').slideUp('fast');
    } else {
        $(this).siblings('ul').addClass('open').slideDown('fast');
    }
});

$('.offcanvas-mainmenu').find('ul li').parents('.header-menu ul li').addClass('has-sub-item');
$('.header-menu').find('ul li').parents('.header-menu ul li').addClass('has-sub-item');
/*==========================================================
    27: Section title span width
==========================================================*/
if($(window).width() >= 768){
    $('.section-title-wrap').each(function(){
       var swidth =  $(this).width();
       var mainwidth = $(this).find('.section-title h2').width();
       var childwidth = swidth - mainwidth;
       $(this).find('.section-title h2 span').css({
            width : childwidth
        });
    });
}

/*==============================================
    28: offcanvas cart
==============================================*/
$('.cart-btn').on('click',function(){
    $('.offcanvas-cart-list').addClass('show')
});
$('.offcanvas-cancel').on('click',function(){
    $('.offcanvas-cart-list').removeClass('show')
});

/*==============================================
    29: offcanvas account
==============================================*/
$('.account-btn').on('click',function(){
    $('.offcanvas-account').addClass('show')
});
$('.offcanvas-cancel').on('click',function(){
    $('.offcanvas-account').removeClass('show')
});
/*=====================================================
    30: About image focus
=====================================================*/
$('.about-image1, .about-image2, .about-image3').on('mouseenter', function(){
    $(this).css({
        'z-index': '10',
    });
    $(this).siblings().css({
        'opacity':'.4',
        'z-index': '-10',
        'transition': '.3s all linear'
    });


}).on('mouseleave', function(){
    $(this).css({
        'z-index': 'inherit'
    });
    $(this).siblings().css({
        'z-index': '1',
        'opacity':'1',
        'transition': '.3s all linear'
    });
    $('.about-image2').css('z-index', '15')
});

  /*=========================================================
        31: counter up
    =========================================================*/
        $('.counter').counterUp({});


    /* ===================================================
        32: Count Down
    =================================================== */
    var $countDown = $('[data-countdown]');
    $countDown.each(function () {
        var $t = $(this);
        
        $t.countdown($t.data('countdown'), function(e) {
            $(this).html( '<ul class="list-unstyled">' + e.strftime('<li><strong>%D</strong><span>Days</span></li><li><strong>%H</strong><span>Hours</span></li><li><strong>%M</strong><span>Min</span></li><li><strong>%S</strong><span>Sec</span></li>') + '</ul>' );
        });
    });
   
/*====================================================
    33: Packery install
====================================================*/

$(window).on('load', function(){
    if($('.isotope').length != 0){
        $('.isotope').packery({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        });
    }
})

$('.product-grid-view ul li a').on('click, load', function(){
    $('.isotope2').packery()
})

/*======================================================
    34: Collection carousel
======================================================*/
    let $productGallery2 = $('.gallery-top'),
    $productThumbs2 = $('.gallery-thumbs');

    if($productGallery2.length !==0 ){
        let productThumbs = new Swiper($productThumbs2, {
        spaceBetween: 10,
        slidesPerView: 7,
        autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        },
        breakpoints: {
            // when window width is <= 1199px
            1199: {
                slidesPerView: 7
            },
            // when window width is <= 991px
            991: {
                slidesPerView: 5
            },
            // when window width is <= 767px
            767: {
                slidesPerView: 4
            },
            // when window width is <= 575px
            575: {
                slidesPerView: 3
            }
        }
    });
    let productPreview = new Swiper($productGallery2, {
        spaceBetween: 1,
        autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        }
        
    }); 
    
    $productThumbs2.on('click', '.swiper-slide', function (e) {
        let $t = $(this);
        productPreview.slideTo( $t.index() );
        $t.addClass('active, swiper-slide-active').siblings().removeClass('active, swiper-slide-active');
        $t.find('.collection-image').css('border, 10px solid #fff');
    });
}

/*====================================================
   35: Common Carousel Activation
====================================================*/

    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };

    var $owlCarousel = $('.owl-carousel');
    $owlCarousel.each(function () {
        var $t = $(this);

        $t.owlCarousel({
            items: checkData( $t.data('owl-items'), 1 ),
            margin: checkData( $t.data('owl-margin'), 0 ),
            loop: checkData( $t.data('owl-loop'), true ),
            smartSpeed: 450,
            autoplay: checkData( $t.data('owl-autoplay'), true ),
            autoplayTimeout: checkData( $t.data('owl-speed'), 8000 ),
            center: checkData( $t.data('owl-center'), false ),
            animateOut: checkData( $t.data('owl-animate'), false ),
            nav: checkData( $t.data('owl-nav'), false ),
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: checkData( $t.data('owl-dots'), false ),
            responsive: checkData( $t.data('owl-responsive'), {} )
        });
    });
/*===================================================
    36: Catagory hover menu
===================================================*/

$('.catagory-button .up-arro').on('click', function(){
    $('.hover-catagory-menu').slideUp(400);
    $('.down-arro').css('display','inline-block');
    $('.up-arro').css('display','none');
})

$('.catagory-button .down-arro').on('click', function(){
    $('.hover-catagory-menu').slideDown(400);
    $('.down-arro').css('display','none');
    $('.up-arro').css('display','inline-block');
})

$('.catagory-button .up-arro , .catagory-button .down-arro ').on('click', function(event){
    event.stopPropagation()&&event.preventDefault()
})

/*=============================================================
    37: modal window
=============================================================*/
$(window).on('load', function(){
    if($('.modal-window-container').length !==0){
        setTimeout(function(){ 
        $('.modal-window-container').addClass('window-show');
        $('body').delay(500).addClass('modal-window-open');
         }, 2000);
    }
})

function modalfunction(){
    $('.modal-window-close').on('click', function(){
        $('.modal-window-container').removeClass('window-show');
        $('body').removeClass('modal-window-open');
    })
    $('.modal-window-overlay').on('click', function(){
        $(this).fadeTo(1000, 0);
        $('.modal-window-content').delay(500).parent().removeClass('window-show');
        $('body').removeClass('modal-window-open');
    })

}
modalfunction()


/*=======================================================
    38: modal quick view slider
=======================================================*/
        let $productGallery3 = $('.quick-product-gallery'),
            $productThumbs3 = $('.quick-product-thumbs');

        if ( $productGallery3.length ) {
            let productPreview = new Swiper($productGallery3, {
                spaceBetween: 1,
                touchRatio: 0,
                effect: 'fade',
                pagination: {
                    el: '.product-gallery-pagination',
                    clickable: true,
                }
            });

            let productThumbs = new Swiper($productThumbs3, {
                spaceBetween: 10,
                slidesPerView: 4,
                slideToClickedSlide: true
            });

            $productThumbs3.on('click','.swiper-slide', function (event) {
                let $t = $(this);
                productPreview.slideTo( $t.index());
                $t.addClass('active swiper-slide-active').siblings().removeClass('active swiper-slide-active'); 
            });
 
        };


$('.quick_view').on('click', function(event){
    event.preventDefault();
    $('.modal-quickview-container').addClass('show');
    $('.modal-window-overlay').css('opacity',1);
    $('body').delay(500).addClass('modal-window-open');
})

$('.modal-window-close').on('click', function(){
    $('.modal-quickview-container').removeClass('show');
    $('body').delay(500).removeClass('modal-window-open');
})
$('.modal-window-overlay').on('click', function(){
        $(this).delay(500).parents('.modal-quickview-container').removeClass('show');
        $('body').delay(500).removeClass('modal-window-open');
    })

/*======================================================================
    39: cart list remover
======================================================================*/
$('.product-remove .remover-field').on('click', function(){
        $(this).parents('.cart_item').fadeOut(300)
    })
/*======================================================================
    40: cart list incriment/ product increment
======================================================================*/
 $('.product-quantity .plus').on('click',function(){
    var $qty=$(this).parent().find('input');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
    }
}); 
$('.product-quantity .minus').on('click',function(){
    var $qty=$(this).parent().find('input');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
    }
});

 /* ============================================
        41: Search bar input text
    ============================================ */
    $('.search-page .theme-input-style').on('keyup', function(){
        $('#search-key').text($(this).val())
     });
/*==================================================
     42: Wish list and add to cart ontifaction
==================================================*/
    $( '.add-to-bag, .addto-icon-btn a, .wishlist-icon-btn a, wish-list, .main-menu-btn a'  ).on('click', function(e){
        e.preventDefault();
    });

     $('.add-to-bag, .addto-icon-btn a').on('click', function(e){
        $('.modal-add-notifacition').fadeTo(300, 1);
         e.preventDefault();
         $('.modal-add-notifacition').css({'opacity': "1", "visibility":"visible"}).delay(2000).fadeTo(300, 0);
     });



     $('.wish-list, .wishlist-icon-btn a').on('click', function(e){
        $('.modal-wish-notifacition').fadeTo(300, 1);
         e.preventDefault();
         $('.modal-wish-notifacition').css({'opacity': "1", "visibility":"visible"}).delay(2000).fadeTo(300, 0);
     })

    /*===========================================
     43: title Text animation
     ===========================================*/
     $(window).on('load', function(){
         if( $(window).width() >= 991  ){
            var $animateEl = $('.section-title span');
            $animateEl.each(function () {
                var $el = $(this);
                $el.waypoint(function () {
                    TweenMax.to($el, 2, {left:"68%", ease:Linear.easeOut, delay:0});
                }, {offset: '1000'});
            });
        }
    })

/*==================================================
    44: Coming soon animation home4
==================================================*/
$('.coming-animation').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  $('.collection-animation').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.coming-animation .letter',
      opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function(el, i) {
      return 150 * (i+1)
      }
    }).add({
      targets: '.coming-animation',
      targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });

    // collection text animation
    $('.caregoris-animation').on('mouseenter', function(){
        anime.timeline({loop: true})
        .add({
          targets: '.collection-animation .letter',
          opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: function(el, i) {
          return 150 * (i+1)
          }
        }).add({
          targets: '.collection-animation',
          targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
        });
    })



})(jQuery);