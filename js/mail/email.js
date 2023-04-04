function sendEmail() {
    // Obtener los valores de los campos del formulario
    const to = 'info@rayconycr.com';
    const from = document.getElementById("email").value;
    const subject = document.getElementById("nameUser").value;
    const body = document.getElementById("message").value;
  
    // Configurar el servidor SMTP y las credenciales
    const transporter = nodemailer.createTransport({
      host: 'p3plzcpnl489493.prod.phx3.secureserver.net',
      port: 465,
      secure: false,
      auth: {
        user: 'info@rayconycr.com',
        pass: 'JOse260684*'
      }
    });
  
    // Definir el contenido del correo electrónico
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: body
    };
  
    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  }
  