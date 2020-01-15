define([
    "jquery"
], function ($) {
    "use strict";

    $.widget('products.height', {

        /**
         * Widget initialization
         */
        _create: function () {
            var maxHeight = 0;
            var productItem = $(".products-grid .product-item");
            if(productItem.length ) {
                productItem.each(function() {
                    if ($(this).innerHeight() > maxHeight) {
                        maxHeight = $(this).innerHeight();
                    }
                });
                productItem.innerHeight(maxHeight);
            }
        }
    });

    return $.products.height;
});