// create a map in the "map" div, set the view to a given place and zoom
$(document).ready(function() {

	var map = L.map('map');
	map.locate({setView: true, maxZoom: 17});


	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	function localizacion(posicion) {
		// add a marker in the given location, attach some popup content to it and open the popup
    	var radius = posicion.accuracy / 2;

		L.marker(posicion.latlng).addTo(map)
			.bindPopup("Estas " + radius + " metros alrededor de esta zona").
			openPopup();

		L.circle(posicion.latlng, radius).addTo(map);		
	}

	function onLocationError(e) {
			alert(e.message);
	}

	map.on('locationfound', localizacion);
	map.on('locationerror', onLocationError);

});
