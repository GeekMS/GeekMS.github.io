;
jQuery(function($) {
    var i, length, iframe, list = parent.document.getElementsByTagName('iframe');
    if (list) {
        for (i = 0, length = list.length; i < length; i++) {
            if (location.href.indexOf(list[i].src) > -1) {
                iframe = list[i];
                break;
            }
        }
    }
    if (iframe) {
        iframe.style.width = '100%';
        iframe.style.height = (document.body.offsetHeight || document.documentElement.offsetHeight) + 'px';
        $('html').css('overflow', 'hidden');
    }
});