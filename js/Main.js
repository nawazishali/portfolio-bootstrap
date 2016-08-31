$(document).ready(function () {

    // Add smooth scrolling to all links
    $(".nav a").on('click', function (event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1100, 'easeInQuart', function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        })
    });
    //Smooth Scroll ends here.

    //Add Reveal on Scroll Animation.

    function revealScroll(element, animation, animDuration, animDelay) {
        var ele = $(element);
        var win = $(window);
        var winTop = win.scrollTop();
        var winHeight = win.height();
        var winBottom = winTop + winHeight;
        var eleTop = ele.offset().top;
        var eleHeight = ele.height();
        var eleBottom = eleTop + eleHeight;
        var visible = (eleBottom >= winTop);

        win.trigger('scroll');
        win.on("scroll resize", function () {
            if (visible == true) {
                // Do stuff, like append a class to an element
                var animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                ele.removeClass("hid");
                ele.css("-webkit-animation-duration", animDuration)
                    .css("-webkit-animation-delay", animDelay)
                    .css("-moz-animation-duration", animDuration)
                    .css("-moz-animation-delay", animDelay)
                    .css("overflow", "hidden");
                ele.addClass(animation).one(animEnd, function () {
                    ele.removeClass(animation);
                    ele.css("-webkit-animation-duration", "")
                        .css("-webkit-animation-delay", "")
                        .css("-moz-animation-duration", "")
                        .css("-moz-animation-delay", "")
                        .css("overflow", "hidden");
                });

                visible = false;
            }
        });
    }

    //Reveal Function ends here.

    revealScroll("#portfolio", "slideInUp", "", "");
    revealScroll("#thumb1", "bounceInLeft", "2s", "0.5s");
    revealScroll("#thumb2", "bounceInUp", "2s", "0.5s");
    revealScroll("#thumb3", "bounceInRight", "2s", "0.5s");
    revealScroll("#thumb4", "bounceInLeft", "2s", "0.7s");
    revealScroll("#thumb5", "bounceInUp", "2s", "0.7s");
    revealScroll("#thumb6", "bounceInRight", "2s", "0.7s");
    revealScroll("#contact", "slideInLeft", "1s", "0.5s");
    revealScroll("#footer", "slideInRight", "1s", "0.5s");

    //Add hover effect.
    function hoverEffect(element, onEnter, onLeave, remove) {
        $(element).hover(
            function () {
                $(this).addClass(onEnter);
                $(this).removeClass(onLeave);
                $(this).removeClass(remove);
            }
            , function () {
                $(this).removeClass(onEnter);
                $(this).addClass(onLeave);
            }
        );
    };

    hoverEffect(".btn", " zoom", " zoomDown");
    hoverEffect(".thumbnail", " zoom", " zoomDown");
    hoverEffect("#pic img", " zoom", " zoomDown", "bounceInUp");


    //sticky menu Plugin.

    $("menu").sticky({
        topSpacing: 0
        , responsiveWidth: true
        , widthFromWrapper: false
        , zIndex: 2000
    });

    //Stciky menu ends here.


});




/* EXTRA REVAL FUNCTION EXPERIMENTAL.

 function revealScroll(element, animation, animDuration, animDelay) {
        var ele = $(element);
        var win = $(window);
        var winTop = win.scrollTop();
        var winHeight = win.height();
        var winBottom = winTop + winHeight;
        var eleTop = ele.offset().top;
        var eleHeight = ele.height();
        var eleBottom = eleTop + eleHeight;
        var visibleTop = winBottom <= eleTop;
        
        //win.trigger('scroll');
        win.on("scroll resize", function () {
            if (visibleTop == true) {
                // Do stuff, like append a class to an element
                var animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                ele.removeClass("hid");
                ele.css("-webkit-animation-duration", animDuration)
                    .css("-webkit-animation-delay", animDelay)
                    .css("-moz-animation-duration", animDuration)
                    .css("-moz-animation-delay", animDelay)
                    .css("overflow", "hidden");
                ele.addClass(animation).one(animEnd, function () {
                    ele.removeClass(animation);
                    ele.css("-webkit-animation-duration", "")
                        .css("-webkit-animation-delay", "")
                        .css("-moz-animation-duration", "")
                        .css("-moz-animation-delay", "")
                        .css("overflow", "hidden");
                });

                visibleTop = false;
            }
        });
    }
   
    
 */