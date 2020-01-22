define([
    "jquery",
    'slick',
    'domReady!'
], function ($, slick) {
    "use strict";

    $.widget('home.slider', {
        options: {  // прописуємо опції
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        },
        init: function () {
            console.log('3333')
            $(this.element).slick(this.options);
        },
        /**
         * Widget initialization
         */

        _create: function () {
            console.log($(this.element))
            $(this.element).slick(this.options);
        }
    });

    return $.home.slider;
});