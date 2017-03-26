(function hoverVid($) {
    var block = $('.portfolio-grid-block');
    var video = $('.video');

    function play () {
        $(this).find(video).get(0).play()
    }

    function pause () {
        $(this).find(video).get(0).pause()
    }

    block.on('mouseover', play)
    block.on('mouseout', pause)

})(window.jQuery);
