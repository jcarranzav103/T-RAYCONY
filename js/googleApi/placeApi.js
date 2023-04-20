var datos;
var allReviews = [];


function getPlaceDetails(placeId) {
    // Hacer una solicitud a la API Place de Google
   
    const request = {
      placeId: "ChIJ-9QqT3z5oI8RY_FsBnGbBhs",
      fields: ['name', 'rating', 'reviews']
    };
  
    const service = new google.maps.places.PlacesService(map);
  
    // Obtener los detalles del lugar
    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Obtener las reseñas del lugar
        const reviews = place.reviews;
        allReviews = allReviews.concat(reviews);
        datos=allReviews;
        // Hacer algo con las reseñas, por ejemplo, imprimir en la consola
        console.log(reviews);
        cargarDatos();

        if (place.hasOwnProperty('next_page_token')) {
          const request2 = {
            placeId: placeId,
            fields: ['reviews'],
            nextPageToken: place.next_page_token
          };
          service.getDetails(request2, (place2, status2) => {
            if (status2 === google.maps.places.PlacesServiceStatus.OK) {
              const reviews2 = place2.reviews;
              allReviews = allReviews.concat(reviews2);
              cargarDatos();            
      }
    });

  }

function cargarDatos(){
  
   const img='';
   const nombre ='';
   const texto ='';

for (let i = 0; i < 5; i++) {
 
  const img=document.getElementById("img"+(i+1));
  const nombre =document.getElementById("h4"+(i+1));;
  const texto =document.getElementById("p"+(i+1));;

  img.src = "";
  texto.textContent = "";
  nombre.textContent = "";

  img.src = datos[i].profile_photo_url;
  texto.textContent = datos[i].text;
  nombre.textContent = datos[i].author_name;
}
$('#idtestimonios').carousel('cycle');
}

function APIGoogle(){
  // Hace una solicitud HTTP GET a la API de Google Places
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ-9QqT3z5oI8RY_FsBnGbBhs&fields=name,rating,review&key=AIzaSyCFOKzHxB4NUnAJrsk3X3X6DCRlfESVvZ0');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Procesa la respuesta JSON y muestra los reviews en la página
      var data = JSON.parse(xhr.responseText);
      var reviews = data.result.reviews;
      for (var i = 0; i < reviews.length; i++) {
        var review = reviews[i];
        var item = '<li><h3>' + review.author_name + '</h3><p>' + review.text + '</p></li>';
        document.getElementById('reviews').innerHTML += item;
      }
    }
    else {
      console.log('Error al cargar los reviews.');
    }
  };
  xhr.send();
}

window.onload= getPlaceDetails;
