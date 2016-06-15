(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        init: function () {
            this.$body = $('body');
        },
        breakpoint: function () {
            return window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
        }
    };
    $(document).on('ready', function () {
        $('.slider--inner').bxSlider({
            auto: true,
            adaptiveHeight: true,
            responsive: true,
            controls: false,
        });
        $('.form-contact--name').blur(function () {
        var a = $('.form-contact--name').val();
            if (a.length > 0) {
                $('.form-contact--name + label').addClass('valid');
            } else {
                $('.form-contact--name + label').removeClass('valid');
            }
        });
        $('.form-contact--email').blur(function () {
        var a = $('.form-contact--email').val();
            if (a.length > 0) {
                $('.form-contact--email + label').addClass('valid');
            } else {
                $('.form-contact--email + label').removeClass('valid');
            }
        });
        $('.form-contact--message').blur(function () {
        var a = $('.form-contact--message').val();
            if (a.length > 0) {
                $('.form-contact--message + label').addClass('valid');
            } else {
                $('.form-contact--message + label').removeClass('valid');
            }
        });

        window.CHANGE_ME.init();
    });
}(jQuery, window, document));