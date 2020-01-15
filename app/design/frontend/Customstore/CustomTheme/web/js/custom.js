require([
    'jquery',
    'sticky',
    'domReady!'
], function ($, sticky) {
    var elementSelector = ".nav-sections";
    if ($(window).width() < 767) {
        elementSelector = ".page-header";
    }
    if ($(elementSelector).length) {
        $(elementSelector).sticky({topSpacing:0,zIndex: '99'});
    }
});