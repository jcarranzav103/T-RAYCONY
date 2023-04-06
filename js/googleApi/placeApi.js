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
    testimonialCarousel.innerHTML="";

    for (let i = 0; i < datos.length; i++) {
        const testimonio = datos[i];
      
        const testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial-item', 'text-center', 'text-white');
        testimonialCarousel.appendChild(testimonialItem);
      
        const img = document.createElement('img');
        img.classList.add('img-fluid', 'mx-auto', 'rounded', 'mb-4');
        img.src = testimonio.profile_photo_url;
        testimonialItem.appendChild(img);

        const nombre = document.createElement('h4');
        nombre.classList.add('text-white', 'mb-0');
        nombre.textContent = testimonio.author_name;
        testimonialItem.appendChild(nombre);

        const hr = document.createElement('hr');
        hr.classList.add('mx-auto', 'w-25');
        testimonialItem.appendChild(hr);
      
        const texto = document.createElement('p');
        texto.classList.add('fs-5');
        texto.textContent = testimonio.text;
        testimonialItem.appendChild(texto);
              
      }   
      
  }
  
//   function cargarResenas(){

//     let contenedor = document.getElementById("idtestimonios");
//     contenedor.innerHTML = "";

//     let itemContenedor;
//     let imgContenedor;
//     let resenaContenedor_p;
//     let itemContenedor_hr;
//     let itemContenedor_h4;
    

//     datos.forEach(review => {
//         itemContenedor=document.createElement("div");
//         itemContenedor.setAttribute("class", "testimonial-item text-center text-white");

//         imgContenedor = document.createElement("img");
//         imgContenedor.setAttribute("class","img-fluid mx-auto rounded mb-4");
//         imgContenedor.setAttribute("src",review.profile_photo_url);
       
//         resenaContenedor_p = document.createElement("p");
//         resenaContenedor_p.setAttribute("class","fs-5");
//         resenaContenedor_p.appendChild(document.createTextNode(review.text));

//         itemContenedor_hr = document.createElement("hr");
//         itemContenedor_hr.setAttribute("class","mx-auto w-25");

//         itemContenedor_h4 = document.createElement("h4");
//         itemContenedor_h4.setAttribute("class","text-white mb-0");
//         itemContenedor_h4.appendChild(document.createTextNode(review.author_name));

//         itemContenedor.appendChild(imgContenedor);
//         itemContenedor.appendChild(resenaContenedor_p);
//         itemContenedor.appendChild(itemContenedor_hr);
//         itemContenedor.appendChild(itemContenedor_h4);

//         contenedor.appendChild(itemContenedor);

//     });


//   }
  
  