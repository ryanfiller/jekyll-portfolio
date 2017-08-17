(function mobileNav($) {
    var site = $('.site-wrap');
    var navicon = $('.js-navicon');

    function naviconTap () {
        $(this).closest(site).toggleClass('open')
        $(this).toggleClass('open')
    }

    navicon.on('click', naviconTap)

})(window.jQuery);


// this is the generic one that should work with siblings in one wrappper
(function expander($) {
    var button = $('.js-expander');

    function dropdownExpand () {
        $(this).toggleClass('open')
    }

    button.on('click', dropdownExpand)

})(window.jQuery);
