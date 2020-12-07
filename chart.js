$(window).scroll(function() {

    $('.chartjs').each(function(i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $('.chartjs').easyPieChart({
                scaleColor: false,
                lineWidth: 15,
                size: 150,
                barColor: '#f93e0b',
                trackColor: '#b1b1b4',
                animate: 3500,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        }
    });
    $('.chartphp').each(function(i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $('.chartphp').easyPieChart({
                scaleColor: false,
                lineWidth: 15,
                size: 150,
                barColor: '#72fc17',
                trackColor: '#b1b1b4',
                animate: 3000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        }
    });
    $('.chartcss').each(function(i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $('.chartcss').easyPieChart({
                scaleColor: false,
                lineWidth: 15,
                size: 150,
                barColor: '#07f0fe',
                trackColor: '#b1b1b4',
                animate: 2500,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        }
    });
    $('.chart').each(function(i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $('.chart').easyPieChart({
                scaleColor: false,
                lineWidth: 15,
                size: 150,
                barColor: '#9d09e4',
                trackColor: '#b1b1b4',
                animate: 2000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        }
    });

});