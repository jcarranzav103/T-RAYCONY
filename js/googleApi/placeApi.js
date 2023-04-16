var datos;

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
        datos=reviews;
        // Hacer algo con las reseñas, por ejemplo, imprimir en la consola
        console.log(reviews);
        cargarDatos();
      }
    });

  }

//   function cargarDatos(){
  
//     const testimonialCarousel = document.getElementById('idtestimonios');
//     testimonialCarousel.innerHTML = '';

// for (let i = 0; i < datos.length; i++) {
//     const testimonialItem = document.createElement('div');
//     testimonialItem.classList.add('testimonial-item', 'text-center', 'text-white');

//     const img = document.createElement('img');
//     img.classList.add('img-fluid', 'mx-auto', 'rounded', 'mb-4');
//     img.src = datos[i].profile_photo_url;

    
//     const nombre = document.createElement('h4');
//     nombre.classList.add('text-white', 'mb-0');
//     nombre.textContent = datos[i].author_name;

//     const hr = document.createElement('hr');
//     hr.classList.add('mx-auto', 'w-25');

//     const texto = document.createElement('p');
//     texto.classList.add('fs-5');
//     texto.textContent = datos[i].texto;


//     testimonialItem.appendChild(img);
//     testimonialItem.appendChild(texto);
//     testimonialItem.appendChild(hr);
//     testimonialItem.appendChild(nombre);

//     testimonialCarousel.appendChild(testimonialItem);
// }

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

window.onload= getPlaceDetails('ChIJ-9QqT3z5oI8RY_FsBnGbBhs');

  

  
  