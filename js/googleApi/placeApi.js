var datos;
let allReviews = [];
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
        const reviews = place.reviews.slice(0, 5);
        allReviews = allReviews.concat(reviews);
        datos=reviews;
        // Hacer algo con las reseñas, por ejemplo, imprimir en la consola
        console.log(reviews);
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

window.onload= getPlaceDetails;

  

  
  