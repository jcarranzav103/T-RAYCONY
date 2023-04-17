const miFormulario = document.getElementById("miFormularioCitas");

miFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(miFormulario);

  fetch("enviarCorreo.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.log(error));
});
