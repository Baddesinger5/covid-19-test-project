$(function() { /*для загрузки файлов эта запись*/
    $("[data-scroll]").on("click", function(event) { /*указание условия действия по клику, при клике функция*/
        event.preventDefault(); /*отменение стандартного поведения ссылок*/
        blockId = $(this).data('scroll'); /*переменная с обращением через this, затем получаем дата атрибут и в () его название*/
        blockOffset = $(blockId).offset().top; /* смещение блока, переменная выше, метод, и откуда мерить (топ)*/
        $("html, body").animate({ /* анимация для html and body*/
            scrollTop: blockOffset - 50 /*откуда скрол и отступ сверху 50 пискелей*/
        }, 1000); /*время прокрутки*/
    });
});



var $header = $('header'),
    $headerHeight = $header.height(),
    $title = $('.head-section');

var navScroll = {

    init: function() {
        $(window).on('scroll', function() {
            navScroll.navDrop();
        })
    },

    navDrop: function() {
        var $scrollTop = $(window).scrollTop();

        if ($scrollTop > $headerHeight) {
            $header.addClass('sticky');
            $title.css('padding-top', '85px');

        } else if ($scrollTop == 0) {
            $header.removeClass('sticky');
            $title.css('padding-top', '0');

        }

    }
}

$(document).ready(function() {
    navScroll.init();
})



// preloader 
$(window).on('load', function() {
    window.setTimeout(function() {
        $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
    }, 2000);
});




