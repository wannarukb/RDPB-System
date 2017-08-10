
// Misc-Gmaps.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(document).ready(function() {


	// GMAPS
	// =================================================================
	// Require gmaps
	// -----------------------------------------------------------------
	// http://hpneo.github.io/gmaps/
	// =================================================================

    // Marker
	// =================================================================
	var markerMap = new GMaps({
		el: '#demo-marker-map',
		lat: 37.336095,
		lng: -121.8885431,
        disableDefaultUI: true,
	});
	markerMap.addMarker({
		lat: 37.336095,
		lng: -121.8885431,
		title: 'Location',
		click: function(e) {
			$.niftyNoty({
				type: "info",
				icon: "fa fa-info",
				message: "You clicked in the marker",
				container: 'floating',
				timer: 3500
			});
		},
		infoWindow: {
			 content: '<div>HTML Content</div>'
		}
	});



	

	// Geocoding
	// =================================================================
	var geomap = new GMaps({
		div: '#demo-geocoding-map',
		lat:  0,
		lng:  0
       
	});
    
     $('#sumbitGeoCoding').click(function() {
          GMaps.geocode({
			address: $('#demo-geocoding-address').val().trim(),
			callback: function(results, status){
				if(status=='OK'){
					var latlng = results[0].geometry.location;
					geomap.setCenter(latlng.lat(), latlng.lng());
					geomap.addMarker({
						lat: latlng.lat(),
						lng: latlng.lng()
					})
                    
                    $('#longitude').val(latlng.lng());
                    $('#latitute').val(latlng.lat());
				}
			}
		})
    });
  

});
