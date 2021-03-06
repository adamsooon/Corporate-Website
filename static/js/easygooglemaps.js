/*globals jQuery, google, document */
(function ($) {
    "use strict";
    var pluginName  =   "easyGoogleMaps",
        defaults    =   {
            lat: 1.276816,
            lng: 103.848346,
            zoom: 13,
            zoomControl: true,
            mapTypeControl: false,
            isDraggable: false,
            randomId: true,
            markerIcon: '',
            tooltip: false,
            scrollwheel: false,
            draggable: true,
            disableDraggableFrom: false,
            styles: false,
            centerLat: null,
            centerLng: null,
            onResize: function () {}
        };
    // The actual plugin constructor
    function Plugin(element, options) {
        this.element        =   element;
        this.$element       =   $(this.element);
        this.options        =   options;
        this.metadata       =   this.$element.data('options');
        this.settings       =   $.extend({}, defaults, this.options, this.metadata);
        this.map            =   null;
        this.init();
        return this;
    }
    Plugin.prototype = {
        init: function () {
            var that = this;
            that.prepareHTML();
            if (typeof google !== 'object' || typeof google.maps !== 'object') {
                $.getScript(('https:' === document.location.protocol ? 'https:' : 'http:') + '//www.google.com/jsapi', function () {
                    google.load('maps', 3, {
                        other_params: 'sensor=false',
                        callback: function () {
                            that.render();
                        }
                    });
                });
            } else {
                that.render();
            }
        },
        prepareHTML: function () {
            if (this.settings.randomId) {
                this.$element.attr('id', this.getRandomId());
            }
            if (this.$element.height() === 0) {
                this.$element.height('100%');
            }
        },
        render: function () {
            this.renderMap();
            this.enableTooltips();
            this.addMarker();
            this.onResizeCallback();
        },
        onResizeCallback: function () {
            var that = this;
            $(window).on('resize orientationchange', function () {
                that.settings.onResize(that.map, google);
            });
        },
        renderMap: function () {
            var that = this,
                mapOptions = {
                    zoom: this.settings.zoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL
                    },
                    streetViewControl: this.settings.streetViewControl,
                    mapTypeControl: this.settings.mapTypeControl,
                    scrollwheel: this.settings.scrollwheel,
                    zoomControl: this.settings.zoomControl,
                    draggable: this.settings.draggable,
                    styles: this.settings.styles
                };
            this.mapLocation = new google.maps.LatLng(this.settings.lat, this.settings.lng);
            this.centerLocation = this.mapLocation;
            if (this.settings.centerLat && this.settings.centerLng) {
                this.centerLocation =  new google.maps.LatLng(this.settings.centerLat, this.settings.centerLng);
            }
            this.map = new google.maps.Map(document.getElementById(this.element.id), $.extend(mapOptions, { center: this.centerLocation }));
            if (this.settings.draggable && that.settings.disableDraggableFrom) {
                $(window).on('resize orientationchange', function () {
                    that.map.set('draggable', !($(window).width() < that.settings.disableDraggableFrom));
                });
            }
        },
        enableTooltips: function () {
            if (this.settings.tooltip) {
                var that = this;
                this.infowindow = new google.maps.InfoWindow({
                    content: that.settings.tooltip
                });
            }
        },
        addMarker: function () {
            this.marker = new google.maps.Marker({
                position: this.mapLocation,
                icon: this.settings.markerIcon,
                map: this.map
            });
            if (this.settings.tooltip) {
                var that = this;
                google.maps.event.addListener(this.marker, 'click', function () {
                    that.infowindow.open(that.map, that.marker);
                });
            }
        },
        getRandomId: function () {
            var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)),
                randomNumber = Date.now();
            return randomLetter + '-' + randomNumber;
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));