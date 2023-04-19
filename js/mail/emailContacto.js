
const generaCuerpoMail = async (tipo, nombre, codigo, descripcion, fecha, administrador, ruta, display) => {

  var cuerpo = `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
        <title> Philips IT CR - Notifica </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt}.td-articulo{font-family:Poppins,Helvetica,Arial,sans-serif;font-size:18px;font-weight:300;line-height:30px;text-align:left;color:#036}</style>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&amp;display=swap" rel="stylesheet" type="text/css" />
        <style type="text/css">@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&amp;display=swap);</style>
        <style type="text/css">@media only screen and (min-width:480px) {.mj-column-per-100 {width: 100% !important;max-width: 100%;}}</style>
        <style type="text/css">@media only screen and (max-width:480px){table.mj-full-width-mobile{width:100%!important}td.mj-full-width-mobile{width:auto!important}}</style>
        <style type="text/css">a,span,td,th{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important}</style>
      </head>
      <body style="background-color:#f3f3f5;">
        <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Philips IT CR </div>
        <div style="background-color:#f3f3f5;">
          <div style="background:#3478dd !important;margin:0px auto;border-radius:4px 4px 0 0;max-width:600px;">
            <div style="background:#3478dd;line-height:0;font-size:0;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3478dd;width:100%;border-radius:4px 4px 0 0;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td style="vertical-align:top;padding:40px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3478dd" width="100%">
                                  <tbody><tr>
                                    <td align="center" style="font-size:0px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:max-content;">
                                              <p style="margin-top: 30px; margin-bottom: 30px; color: white; font-family:Poppins, Helvetica, Arial, sans-serif; font-size: 32px"> Philips IT CR</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0 0 4px 4px;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0 0 4px 4px;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 10px;text-align:center;">
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:20px;font-weight:300;line-height:30px;text-align:left;color:#003366;">
                              <h1 style="margin: 0; font-size: 25px; line-height: 50px; font-weight: 400;"> Hola ${nombre}</h1>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div class="td-articulo">
                              Se ha asignado un artículo a su nombre, los detalles se encuentran a continuación.
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div class="td-articulo">
                              ${tipo}: <strong>${codigo}</strong>
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div class="td-articulo">
                              Descripción: <strong>${descripcion}</strong>
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div class="td-articulo">
                              Fecha de asignación: <strong>${fecha}</strong>
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div class="td-articulo">
                              Administrador: <strong>${administrador}</strong>
                          </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody></table>
          </div>`
  cuerpo += `
          <div style="background:#3478dd;background-color:#3478dd;margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#3478dd;background-color:#3478dd;width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody><tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                              <p style="margin: 0;"> Saludos, </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Poppins, Helvetica, Arial, sans-serif;font-size:16px;font-weight:500;line-height:30px;text-align:left;color:#ffffff;">
                              <p style="margin: 0;"> Philips IT CR<br /> Coyol Free Zone, building B37. Alajuela, Costa Rica</p>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </body></html>`;
  return cuerpo;

}


$(function () {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = generaCuerpoMail = async ("Contacto", name, phone, email, $("textarea#message").val());      
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/emailContacto.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function () {
          // Success message         
          Swal.fire({
            icon: 'success',
            title: 'Tu mensaje se ha enviado.',
            showConfirmButton: false,
            timer: 1500
          });
          //clear all fields
          $('#contactForm').trigger("reset");
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
          $('#contactForm').trigger("reset");
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


