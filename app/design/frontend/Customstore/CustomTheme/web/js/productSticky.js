define([
    "jquery"
], function ($) {
    "use strict";

    window.customSticky = {
        params: {
            imgSource: ".gallery-placeholder img",
            imgDestination: "#sticky_product_img",
            titleSource: ".page-title .base",
            titleDestination: ".sticky-product-info .title",
            priceSource: ".product-info-price .price-box",
            priceDestination: ".sticky-product-info .price",
        },
        /**
         * initialization of sticky elements
         */
        init: function() {
            this.productImgSticky(this.params.imgSource, this.params.imgDestination);
            this.productTextSticky(this.params.titleSource, this.params.titleDestination);
            this.productTextSticky(this.params.priceSource, this.params.priceDestination);
            this.productCartSticky();
            this.productBlockStickyShow();
        },
        /**
         *
         * @param source
         * @param destination
         */
        productImgSticky: function(source, destination) {
            if ($(source).length && $(destination).length) {
                var imageUrl = $(source).attr('src');
                $(destination).attr('src', imageUrl);
            }
        },
        /**
         *
         * @param source
         * @param destination
         */
        productTextSticky: function(source, destination) {
            if ($(source).length && $(destination).length) {
                var text = $(source).clone();
                $(text).appendTo(destination);
            }
        },
        /**
         * add click event
         */
        productCartSticky: function() {
            $(document).on("click", ".sticky-product-info .tocart", function() {
                $("#product-addtocart-button").click();
            });
        },
        /**
         * change sticky element visibility on scroll
         */
        productBlockStickyShow: function() {
            $(window).on("scroll", function() {
                var navHeight = $('.nav-sections-items'),
                    productBlockFixed = $('.sticky-product-info-wrapper'),
                    scrollTop = $(window).scrollTop(),
                    elementOffset = $('#product-addtocart-button');

                if (navHeight.length
                    && productBlockFixed.length
                    && elementOffset.length
                ) {
                    productBlockFixed.css({ top: navHeight.height() });
                    var distance = (elementOffset.offset().top - scrollTop);
                    if (distance < 0) {
                        productBlockFixed.addClass('show');
                    } else {
                        productBlockFixed.removeClass('show');
                    }
                }
            });
        },

    }
});