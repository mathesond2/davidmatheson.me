window.onload = function() {

    //intro h1 background text
    $('#whats-up').hover(function () {
        $('html').addClass('whats-up');
        }, function () {
        $('html').removeClass('whats-up');    
    });
    $('#designer').hover(function () {
        $('html').addClass('designer');
        }, function () {
        $('html').removeClass('designer');    
    });
    $('#front-end-developer').hover(function () {
        $('html').addClass('front-end-developer');
        }, function () {
        $('html').removeClass('front-end-developer');    
    });
    $('#living').hover(function () {
        $('html').addClass('living');
        }, function () {
        $('html').removeClass('living');    
    });
    $('#charlotte').hover(function () {
        $('html').addClass('charlotte');
        }, function () {
        $('html').removeClass('charlotte');    
    });
    $('#find').hover(function () {
        $('html').addClass('find');
        }, function () {
        $('html').removeClass('find');    
    });
    $('#jokes').hover(function () {
        $('html').addClass('jokes');
        }, function () {
        $('html').removeClass('jokes');    
    });
    $('#working').hover(function () {
        $('html').addClass('working');
        }, function () {
        $('html').removeClass('working');    
    });

    // Open Twitter/share in a Pop-Up
    var $popup = document.getElementsByClassName('popup')[0];
    if (!$popup) {
        return;
    }
    $popup.addEventListener('click', function(e) {
        e.preventDefault()
        var width  = 575,
            height = 400,
            left   = (document.documentElement.clientWidth  - width)  / 2,
            top    = (document.documentElement.clientHeight - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
    });
}