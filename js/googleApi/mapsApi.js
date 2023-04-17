var map;
var latitud;
var longitud;

var latitud_destino = 9.978320287652318;
var longitud_destino = -84.18886546154637;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 14
  });

  //Obtiene la ubicación actual del usuario
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitud = position.coords.latitude;
      longitud = position.coords.longitude;
      var pos = {
        lat: latitud,
        lng: longitud
      };

      //Agrega un marcador en el mapa para la ubicación actual del usuario
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Tu ubicación actual'
      });

      map.setCenter(pos);
    }, function() {
      //Si la ubicación no está disponible, muestra un mensaje de error
      alert('No se pudo obtener tu ubicación actual');
    });
  } else {
    //Si la geolocalización no es compatible con el navegador, muestra un mensaje de error
    alert('La geolocalización no es compatible con este navegador');
  }

 
}

function calculateAndDisplayRoute() {
    initMap();
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsService.route({
      origin: {lat: latitud, lng: longitud},
      destination: {lat: latitud_destino, lng: longitud_destino},
      travelMode: 'DRIVING',
    }, function(response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('No se pudo trazar la ruta. Error: ' + status);
      }
    });
    
  }

  window.onload=calculateAndDisplayRoute;