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
        });


        /* Career website - triggers*/

        $('.js-triger-position').on('click', function(){
            $(this).parent().parent().toggleClass('active');
        });

        /*Labels should disappear after click and if there is more 
        than 0 letters it will not appear */

         $('.js-label-hide').blur(function () {
            var a = $(this).val();
            if (a.length > 0) {
                $(this).siblings().addClass('valid');
            } else {
                $(this).siblings().removeClass('valid');
            }
        });

        /*
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
        });*/
         //Google maps
        if ($('.address__content__map').length) {
            $('.address__content__map').easyGoogleMaps({
                lat: 40.752016
                , lng: -73.992989
                , zoom: 14
                //, markerIcon: ''
                , styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            });
        }

        
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));