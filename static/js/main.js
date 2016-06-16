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
        if($('.slider--inner').length){
            $('.slider--inner').bxSlider({
                auto: true,
                adaptiveHeight: true,
                responsive: true,
                controls: false,
            });  
        }
        

        /* changing the menu's button */
        $('.js-trigle-nav').on('click', function(e){
          e.preventDefault();
          if($('.js-trigle-nav').is('.active')){
            $('.js-trigle-nav').removeClass('active');
          }else{
            $('.js-trigle-nav').addClass('active');
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
        if(screen.width < 640){
            $('.js-trigle-nav').on('click', function(e){
            e.stopPropagation();
            $(this).removeClass('menu-active'); 
            if($('body,#btn-menu').is('.menu-block')){
                    $('body').removeClass('menu-block');
                }else{
                    $('body').addClass('menu-block');
                }
            });
            $('.header__menu').on('click', function(){
                if($('body').is('.menu-block')){
                    $('body').removeClass('menu-block');
                }else{
                    $('body').addClass('menu-block');
                }
            });
        }
        $('body').on('click', function(){
            $('.header__nav').removeClass('menu-active');
            $('.js-trigle-nav').removeClass('active');
        })


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

        
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));