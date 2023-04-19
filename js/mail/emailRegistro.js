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
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/emailRegistro.php",
        type: "POST",
        data: {
          name: name,
          birthdate: birthdate,
          age: age,
          phone: phone,
          email: email,
          income_range: income_range,
          academic_degree: academic_degree,
          gender: gender,
          message: message
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
