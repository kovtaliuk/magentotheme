var config = {
    map: {
        '*': {
            'custom': 'js/custom',
            'sticky': 'js/jquery.sticky',
            'slick': 'js/slick', // Назва підключеної бібліотеки
            'customSticky': 'js/productSticky',
            'productHeight': 'js/productheight',
            'homeSlider': 'js/homeSlider',  // Назва підключеного файла/бібліотеки

        }
    },
    shim: {
        sticky: ['jquery'],
        slick: ['jquery'],
    }
};

