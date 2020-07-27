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