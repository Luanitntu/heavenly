// ========================banner mobile===========================
jQuery(window).load(function() {
    banner();
});

function banner() {
    if (jQuery(this).width() < 768) {
        var img_mobile = jQuery('.banner-page').find('img').attr('src');
        jQuery('.banner-page').css({
            'background-image': 'url(' + img_mobile + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center',
            'min-height': '300px'
        });
        jQuery('.banner-page').find('img').css('display', 'none')
    }
}
// --------------button menu----------
jQuery(document).ready(function() {
    jQuery(".button-sticky").click(function() {
        jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile").toggleClass("active");
        jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile .navbar-sticky").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".button-sticky").is(e.target) && jQuery(".button-sticky").has(e.target).length === 0) {
            jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile").removeClass("active");
            jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile .navbar-sticky").removeClass("active");
            jQuery('body').removeClass('show-scroll');
        }
    });
});
// -------load more

// jQuery(function() {
//     var width = jQuery(window).width();
//     if (width > 600) {
//         jQuery(".more").slice(0, 16).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 8).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     } else {
//         jQuery(".more").slice(0, 8).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 4).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     }
// });

// jQuery('a[href=#top]').click(function() {
//     jQuery('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// jQuery(window).scroll(function() {
//     if (jQuery(this).scrollTop() > 1200) {
//         jQuery('.totop a').fadeIn();
//     } else {
//         jQuery('.totop a').fadeOut();
//     }
// });
jQuery(document).ready(function() {
    // -------------flexslider
    jQuery('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshowSpeed: 6000,
        animationSpeed: 1500,
        start: function(slider) {
            var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-slide img").attr("src");
            var prev = jQuery(".flexslider ul.slides li:last-child").find(".img-slide img").attr("src");
            jQuery("#header-page .banner-slide .img-flex-prev").css('background-image', 'url(' + prev + ')');
            jQuery("#header-page .banner-slide .img-flex-next").css('background-image', 'url(' + next + ')');
        },
        after: function(slider) {
                var temp_next = jQuery(".flexslider ul.slides li:first-child").next();;
                // var temp_prev = jQuery(".flexslider ul.slides li:last-child").prev();

                if (jQuery(".flexslider ul.slides li.flex-active-slide").is(temp_next)) {
                    var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-slide img").attr("src");
                    var prev = jQuery(".flexslider ul.slides li.flex-active-slide").prev().find(".img-slide img").attr("src");
                    jQuery("#header-page .banner-slide .img-flex-prev").css('background-image', 'url(' + prev + ')');
                    jQuery("#header-page .banner-slide .img-flex-next").css('background-image', 'url(' + next + ')');
                } else if (jQuery(".flexslider ul.slides li.flex-active-slide").is(":last-child")) {
                    var next = jQuery(".flexslider ul.slides li:first-child").find(".img-slide img").attr("src");
                    var prev = jQuery(".flexslider ul.slides li.flex-active-slide").prev().find(".img-slide img").attr("src");
                    jQuery("#header-page .banner-slide .img-flex-prev").css('background-image', 'url(' + prev + ')');
                    jQuery("#header-page .banner-slide .img-flex-next").css('background-image', 'url(' + next + ')');
                } else if (jQuery(".flexslider ul.slides li.flex-active-slide").is(":first-child")) {
                    var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-slide img").attr("src");
                    var prev = jQuery(".flexslider ul.slides li:last-child").find(".img-slide img").attr("src");
                    jQuery("#header-page .banner-slide .img-flex-prev").css('background-image', 'url(' + prev + ')');
                    jQuery("#header-page .banner-slide .img-flex-next").css('background-image', 'url(' + next + ')');
                }
            }
            // controlsContainer:jQuery(".flex-control-nav li"),
            // customDirectionNav:jQuery(".flex-control-nav li a")
    });

    //-------button flexsider
    jQuery(".flex-prev").on("click", function(event) {
        event.preventDefault();
        jQuery(".flexslider").flexslider("prev");
        return false;
    })
    jQuery(".flex-next").on("click", function(event) {
        event.preventDefault();
        jQuery(".flexslider").flexslider("next");
        return false;
    })
});
// -----------------slick----------
jQuery(document).ready(function() {

    jQuery('.feature-item__slick').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        pauseOnHover: false,
        swipe: true,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 415,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    jQuery('.testimo__slick').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        pauseOnHover: false,
        swipe: true,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 8000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true
    });

    jQuery(".btn-prev").click(function(event) {
        event.preventDefault();
        jQuery(".testimo__slick").slick("slickPrev");
    });
    jQuery(".btn-next").click(function(event) {
        event.preventDefault();
        jQuery(".testimo__slick").slick("slickNext");
    });
    // -------------page gallery
    // jQuery('.img-gallery').slick({
    //     autoplay: true,
    //     arrows: false,
    //     dots: false,
    //     slidesToShow: 1,
    //     draggable: false,
    //     infinite: true,
    //     pauseOnHover: false,
    //     swipe: false,
    //     touchMove: false,
    //     speed: 1500,
    //     autoplaySpeed: 3000,
    //     useTransform: true,
    //     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    //     adaptiveHeight: true,
    //     focusOnSelect: true
    // });

    // jQuery(".button-prev").click(function(event) {
    //     event.preventDefault();
    //     jQuery(".img-gallery").slick("slickPrev");
    // })
    // jQuery(".button-next").click(function(event) {
    //     event.preventDefault();
    //     jQuery(".img-gallery").slick("slickNext");
    // })

    // jQuery('.link-slick')
    //     .on('init', function(event, slick) {
    //         jQuery('.link-slick .slick-slide.slick-current').addClass('is-active');
    //     })
    //     .slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         dots: false,
    //         focusOnSelect: false,
    //         infinite: false,
    //     });

    // jQuery('.slick-services').on('afterChange', function(event, slick, currentSlide) {
    //     jQuery('.link-slick').slick('slickGoTo', currentSlide);
    //     var currrentNavSlideElem = '.link-slick .slick-slide[data-slick-index="' + currentSlide + '"]';
    //     jQuery('.link-slick .slick-slide.is-active').removeClass('is-active');
    //     jQuery(currrentNavSlideElem).addClass('is-active');
    // });

    // jQuery('.link-slick').on('click', '.slick-slide', function(event) {
    //     event.preventDefault();
    //     var goToSingleSlide = jQuery(this).data('slick-index');

    //     jQuery('.slick-services').slick('slickGoTo', goToSingleSlide);
    // });
});
// --------------sticky menu--------------
// jQuery(document).ready(function() {
//     jQuery(function() {
//         var width = jQuery(window).width();
//         var header = jQuery(".sticky");
//         offset = header.offset().top;
//         jQuery(window).scroll(function() {
//             if (jQuery(this).scrollTop() > offset && width > 992) {
//                 header.addClass("fixed");
//             } else {
//                 header.removeClass("fixed");
//             }
//         })
//     })
// });