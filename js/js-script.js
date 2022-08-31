$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });
    }, 1000);

    setTimeout(function(){
        $('.banner-slider .svg-div').removeClass('svg-anim');
    }, 1000);



});


jQuery(function ($) {

    "use strict";
    /* ===================================
           Header appear
        ====================================== */

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('.inner-header').addClass('header-appear');
        } else {
            $('.inner-header').removeClass('header-appear');
        }

    });



    /* ===================================
         arrow appear and scroll to top
     ====================================== */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll-top-arrow').fadeIn('slow');
        }else {
            $('.scroll-top-arrow').fadeOut('slow');
        }
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 100);
        return false;
    });

    $(document).on('click', '.home', function () {
        $('html, body').animate({scrollTop: 0}, 100);
        return false;
    });

    /* ===================================
           Navbar smooth Scroll
       ====================================== */
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({scrollTop: $(this.hash).offset().top - 50}, 100);
    });

    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }


    /* =====================================
          Parallax
       ====================================== */

    if($(window).width() < 780) {
        $('.parallax').addClass("parallax-disable");
    } else {
        $('.parallax').removeClass("parallax-disable");

        // parallax
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }



    /* ===================================
                 Wow Effects
       ======================================*/
    var wow = new WOW(
        {
            boxClass:'wow',      // default
            animateClass:'animated', // default
            offset:0,          // default
            mobile:false,       // default
            live:true        // default
        }
    );
    wow.init();


    /* ===================================
    Mouse parallax
   ====================================== */


    $('.main-banner,home').mousemove(function(e) {
        $('[data-depth]').each(function () {
            var depth = $(this).data('depth');
            var amountMovedX = (e.pageX * -depth/4);
            var amountMovedY = (e.pageY * -depth/4);

            $(this).css({
                'transform':'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
            });
        });
    });



    /* ===================================
                Rev Slider js
    ====================================== */
    $("#rev_slider_1_1").show().revolution({
        sliderType:"standard",
        jsFileLocation:"//localhost:82/revslider/revslider/public/assets/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
            onHoverStop:"off",
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[868,768,960,720],
        lazyType:"none",
        parallax: {
            type:"mouse",
            origo:"enterpoint",
            speed:400,
            speedbg:0,
            speedls:0,
            levels:[1,2,3,4,5,6,7,8,9,10,0,0,0,0,0,55],
            disable_onmobile:"on"
        },
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });


    /* ===================================
      Animated Cursor
    ====================================== */

    /* Animated Cursor */

    function animatedCursor() {

        if ($(".aimated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a = document.getElementsByClassName("cursor"),
                i = document.getElementsByClassName("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n , TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to(".cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                TweenMax.to(".cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
            }), $(".link").mouseenter(function (e) {
                TweenMax.to(".cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(255,255,255,0.27)",
                    opacity: .15
                })
            }), $(".crumbs .link").mouseenter(function (e) {
                TweenMax.to(".cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(32,32,32,0.27)",
                    opacity: .15
                })
            }), $(".link").mouseleave(function (e) {
                TweenMax.to(".cursor", .3, {
                    borderWidth: "2px",
                    scale: 1,
                    backgroundColor: "rgba(255,255,255,0)",
                    opacity: 1
                })
            })

        }

    }

    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
        $('header .side-menu').mouseenter(function () {
            $('header ~ .aimated-cursor').addClass('magic');
        });
        $('header .side-menu').mouseleave(function () {
            $('header ~ .aimated-cursor').removeClass('magic');
        });
        $('header .user-menu-cart, header .minicart').mouseenter(function () {
            $('header ~ .aimated-cursor').addClass('magic');
        });
        $('header .user-menu-cart, header .minicart').mouseleave(function () {
            $('header ~ .aimated-cursor').removeClass('magic');
        });
    }
    else{
        $('.aimated-cursor').addClass('magic');
    }



    /* ===================================
                Feedback Carousel
    ====================================== */

    var $imagesSlider = $(".client-feedback>div"),
        $thumbnailsSlider = $(".client-thumbnails>div");

    // Images Options
    $imagesSlider.slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        fade: true,
        dots: true,
        arrows:false,
        autoplay: false,
        draggable: false,
        asNavFor: ".client-thumbnails>div",
    });
    // Thumbnails Options
    $thumbnailsSlider.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        arrows:false,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        asNavFor: ".client-feedback>div",
    });

    /* =====================================
                    Pricing Card
      ====================================== */

    $('.about-sec .features .feature-card').on('mouseover',function () {
        $('.about-sec .features>div:nth-child(2) .feature-card').removeClass('active');
    });
    $('.about-sec .features .feature-card').on('mouseleave',function () {
        $('.about-sec .features>div:nth-child(2) .feature-card').addClass('active');
    });

    /*===================================
               Price Range
     ======================================*/

    if ($("#slider-range").length) {
        var marginSlider = document.getElementById('slider-range');

        noUiSlider.create(marginSlider, {
            start: [0, 800],
            margin: 30,
            step: 1,
            connect: true,
            range: {
                'min': 0,
                'max': 1000
            },

        });

        var marginMin = document.getElementById('min-p'),
            marginMax = document.getElementById('max-p');

        marginSlider.noUiSlider.on('update', function (values, handle) {
            if (handle) {
                var str = values[handle]
                var res = str.split(".");
                marginMax.innerHTML = "$" + res[0];
            } else {
                var str = values[handle]
                var res = str.split(".");
                marginMin.innerHTML = "$" + res[0] + " - ";
            }
        });
    }
    if ($(window).width() > 991) {
        if ($('.product-filter-nav').length) {

            var x = $('.product-filter-nav').offset().top;

            $(window).on('scroll', function () {
                if ($(this).scrollTop() > x) {
                    $('.product-filter-nav').addClass('change-position');
                    $('.select2-dropdown').addClass('change-select2');
                } else {
                    $('.product-filter-nav').removeClass('change-position');
                    $('.select2-dropdown').removeClass('change-select2');
                }
            });
        }
    }

    /*===================================
             Number input counter
     ======================================*/
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });
    /*===================================
                 load more
    ======================================*/

    $(document).ready(function () {
        var size_li = $("#portfolio-area .portfolio-item").length;
        var x=6;
        $('#portfolio-area .portfolio-item').hide();
        $('#portfolio-area .portfolio-item:lt('+x+')').show();
        $('#loadMore').click(function (e) {
            e.preventDefault();

            $('#loadMore i').removeClass('d-none');
            setTimeout(function () {
                $('#loadMore i').addClass('d-none');
                x= (x+3 <= size_li) ? x+3 : size_li;
                $('.portfolio-area .portfolio-item:lt('+x+')').show(800);
                if(size_li === x){
                    $('#loadMore').text('No more items');
                    $('#loadMore').css({'disabled':'disabled'});
                    $('#loadMore').css({'opacity':'.7'});
                    $('#loadMore').css({'cursor':'not-allowed'});
                }

            },800);

        });
    });

    /*===================================
                Select To
    ====================================*/

    if ($("#set1").length) {

        if ($(window).width() < 991) {

            $("#set1").select2({

                placeholder: "",
                multiple: true,
                allowClear: true,
                closeOnSelect: false,
                width: '350px',
                data: treeData,

            });
        } else {
            $("#set1").select2();
        }

    }

    if ($("#set2").length) {

        if ($(window).width() < 991) {

            $("#set2").select2({

                placeholder: "",
                multiple: true,
                allowClear: true,
                closeOnSelect: false,
                width: '350px',
                data: treeData,

            });
        } else {
            $("#set2").select2();
        }

    }

    // button
    $('#checkout-btn').on('click',function () {
        $.notify("Checkout successful", "success");
    });
    $('.detail-page-sec .tab-content .food-list').on('click',function () {
        $.notify("Item added successfully", "success");
    });

});
