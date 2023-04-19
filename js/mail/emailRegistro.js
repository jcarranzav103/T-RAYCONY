$(function () {
  $("#registerForm input,#registerForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var birthdate = $("input#birthdate").val();
      var age = calcularEdad();
      var phone = $("input#phone").val();
      var email = $("input#email").val();
      var income_range = $("select#income_range").val();
      var academic_degree = $("select#academic_degree").val();
      var gender = $("input[name=gender]:checked").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      // Crear la tabla y almacenar el código HTML en una variable
      var tablaHTML = '<table class="table">';
      tablaHTML += '<tr><td>Nombre:</td><td>' + name + "</td></tr>";
      tablaHTML += '<tr><td>Fecha de nacimiento:</td><td>' + birthdate + '</td></tr>';
      tablaHTML += '<tr><td>Edad:</td><td>' + age + '</td></tr>';
      tablaHTML += '<tr><td>Teléfono:</td><td>' + phone + '</td></tr>';
      tablaHTML += '<tr><td>Email:</td><td>' + email + '</td></tr>';
      tablaHTML += '<tr><td>Rango de ingresos:</td><td>' + income_range + '</td></tr>';
      tablaHTML += '<tr><td>Nivel académico:</td><td>' + academic_degree + '</td></tr>';
      tablaHTML += '<tr><td>Género:</td><td>' + gender + '</td></tr>';
      tablaHTML += '<tr><td>Mensaje:</td><td>' + message + '</td></tr>';
      tablaHTML += '</table>';


      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/emailRegistro.php",
        type: "POST",
        data: {
          email: email,        
          message: tablaHTML
        },
        cache: false,
        success: function () {
          // Success message           
          Swal.fire({
            icon: 'success',
            title: 'Tu registro se ha enviado. Pronto estaremos en contacto',
            showConfirmButton: false,
            timer: 1500
          });
          //clear all fields
          $('#registerForm').trigger("reset");
        },
        error: function () {
          // Fail message           
          Swal.fire({
            icon: 'error',
            title: 'Disculpa ' + firstName + ', En este momento el servidor no responde. Por favor intenta luego!',
            showConfirmButton: false,
            timer: 5500
          });
          //clear all fields
          $('#registerForm').trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});

function calcularEdad() {

  const fechaNacimiento = new Date(document.getElementById("birthdate").value);
  const edadEnMilisegundos = Date.now() - fechaNacimiento.getTime();
  const edad = new Date(edadEnMilisegundos).getFullYear() - 1970;

  return edad;
}

