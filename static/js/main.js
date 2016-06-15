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
        /*Sliders */
        $('.slider--inner').bxSlider({
            auto: true,
            adaptiveHeight: true,
            responsive: true,
            controls: false,
        });

        /* changing the label in contact-form */
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

        function burger(){
            $('.js-trigle-nav').removeClass('active');
            $('.b1').removeClass('b1a');
            $('.b2').removeClass('b2a');
            $('.b3').removeClass('b3a');
        }
        function cross(){
            $('.js-trigle-nav').addClass('active');
            $('.b1').addClass('b1a');
            $('.b2').addClass('b2a');
            $('.b3').addClass('b3a');
        }

        /* changing the menu's button */
        $('.js-trigle-nav').on('click', function(e){
          e.preventDefault();
          if($('.js-trigle-nav').is('.active')){
            burger();
          }else{
            cross();
          }
        });

        /* mobile menu */
        $('.js-trigle-nav').on('click', function(e){
            e.stopPropagation();
            e.preventDefault();
            if($('.header__nav').is('.menu-active')){
                $('.header__nav').removeClass('menu-active');    
            }else{
                $('.header__nav').addClass('menu-active');
            }
        });
        /*if(screen.width < 620){
            $('.header__nav').on('click', function(e){
            e.stopPropagation();
            $(this).removeClass('menu-active'); 
            if($('body,#btn-menu').is('.menu-block')){
                    $('body').removeClass('menu-block');
                }else{
                    $('body').addClass('menu-block');
                }
            });
            $('#btn-menu').on('click', function(){
                if($('body').is('.menu-block')){
                    $('body').removeClass('menu-block');
                }else{
                    $('body').addClass('menu-block');
                }
            });
        }*/
        $('body').on('click', function(){
            $('.header__nav').removeClass('menu-active');
            burger();
        })
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));