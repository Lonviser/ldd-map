(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

})( jQuery );

jQuery(document).ready(function ($) {
    if ($('#leaflet-map').length) {
        var map = L.map('leaflet-map').setView([53.9, 27.6], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);

        $('#generate-map').click(function () {
            $.ajax({
                type: 'POST',
                url: ajaxurl,
                data: { action: 'generate_leaflet_map_shortcode' },
                success: function (shortcode) {
                    alert('Generated shortcode: ' + shortcode);
                }
            });
        });
    }
});


jQuery(document).ready(function($) {
    var map = L.map('leaflet-map').setView([51.505, -0.09], 13); // Задайте начальные координаты и уровень масштабирования

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Добавьте плитку карты (вы можете использовать любого подходящего поставщика плитки)

    // Вы можете добавить маркеры, полигоны или другие элементы карты по мере необходимости.
});
