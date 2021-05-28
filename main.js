jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.select-custom');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.select-options');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.select-options').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.select-options').slideToggle(200);
                    }
                }
            });



        });
    },

});


$('.search-cate').setMenu();

// 

jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-select-options');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-select-options').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-select-options').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-city').setMenu();

// 

jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-price-options');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-price-options').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-price-options').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-price').setMenu();

// 

jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-acreage-options');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-acreage-options').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-acreage-options').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-acreage').setMenu();

// 

jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-select-project');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-select-project').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-select-project').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-project').setMenu();

// 
jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-select-ward');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-select-ward').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-select-ward').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-ward').setMenu();

// 
jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-select-street');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-select-street').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-select-street').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-street').setMenu();

// 
jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-select-room');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-select-room').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-select-room').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-room').setMenu();

// 

jQuery.fn.extend({
    setMenu: function() {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.search-select-box');
            itemmenu.click(function() {
                var submenuitem = containermenu.find('.advance-select-home');
                submenuitem.slideToggle(500);

            });

            $(document).click(function(e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                    var isopened =
                        containermenu.find('.advance-select-home').css("display");

                    if (isopened == 'block') {
                        containermenu.find('.advance-select-home').slideToggle(200);
                    }
                }
            });



        });
    },

});

$('.search-home').setMenu();

$(window).scroll(function() {
    var sticky = $('header.menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


const wWidth = $(window).width();
if (wWidth <= 1301) {
    console.log("====== window width", wWidth)

} else {
    console.log("====== not window width", wWidth)
}

$(document).ready(function() {
    const owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
            },
            1302: {
                items: 4
            }
        }
    });
    // Go to the next item
    $('.customNextBtn').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    if ($(window).width() < 1302) {
        const screenWidth = $(window).width() - 16;
        console.log("🚀 ~ file: main.js ~ line 360 ~ $ ~ screenWidth", screenWidth)
        const widthPerItem = screenWidth * 3 / 4;
        $('.owl-item').width(widthPerItem);
    }
});