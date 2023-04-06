var datos;

function getPlaceDetails(placeId) {
    // Hacer una solicitud a la API Place de Google
    const request = {
      placeId: placeId,
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

  function cargarDatos(){
  
    const testimonialCarousel = document.getElementById('idtestimonios');
    testimonialCarousel.innerHTML = '';

for (let i = 0; i < datos.length; i++) {
    const testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial-item', 'text-center', 'text-white');

    const img = document.createElement('img');
    img.classList.add('img-fluid', 'mx-auto', 'rounded', 'mb-4');
    img.src = datos[i].profile_photo_url;

    
    const nombre = document.createElement('h4');
    nombre.classList.add('text-white', 'mb-0');
    nombre.textContent = datos[i].author_name;

    const hr = document.createElement('hr');
    hr.classList.add('mx-auto', 'w-25');

    const texto = document.createElement('p');
    texto.classList.add('fs-5');
    texto.textContent = datos[i].texto;


    testimonialItem.appendChild(img);
    testimonialItem.appendChild(texto);
    testimonialItem.appendChild(hr);
    testimonialItem.appendChild(nombre);

    testimonialCarousel.appendChild(testimonialItem);
}

$(testimonialCarousel).owlCarousel('refresh');

      
  }

  $(document).ready(function(){
    $('#idtestimonios').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});


  

  
  