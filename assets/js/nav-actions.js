(function mobileNav($) {
    var site = $('.site-wrap');
    var navicon = $('.js-navicon');
    var mobileNavSelector = $('.js-mobile-nav-selector');
    var mobileSubnav = $('.js-mobile-subnav');
    var subnavActive = $('.js-sub-active');

    function naviconTap () {
        $(this).closest(site).toggleClass('open')
        $(this).toggleClass('open')
    }

    function mobileSubnavOpen () {
        $(this).toggleClass('open')
        $(this).siblings(mobileSubnav).toggleClass('open');
    }

    navicon.on('click', naviconTap)
    mobileNavSelector.on('click', mobileSubnavOpen)

    if ($(subnavActive).length > 0) {
        $(subnavActive).closest(mobileSubnav).addClass('open');
        $(subnavActive).parent().siblings(mobileNavSelector).addClass('open');
    }

})(window.jQuery);


(function mobileDropdown($) {
    var button = $('.js-subnav-mobile-button');

    function onButtonClick () {
        $(this).closest('.js-subnav-mobile').toggleClass('open')
    }

    button.on('click', onButtonClick)

})(window.jQuery);


// this is the generic one that should work with siblings in one wrappper
(function expander($) {
    var button = $('.js-expander');

    function dropdownExpand () {
        $(this).toggleClass('open')
    }

    button.on('click', dropdownExpand)

})(window.jQuery);
