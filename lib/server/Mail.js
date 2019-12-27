const {createTransport} = require("nodemailer");

class Mail {
	costructor() {
		this.transport = createTransport({
			service: "gmail"
		})
	}
	sendContactMessage(name, email, phone, msg) {
		return new Promise((resolve, reject) => {
			this.transport.sendEmail({
  				from: 'djgm1206@gmail.com',
  				to: 'davidsdevel@gmail.com',
				subject: 'Mensaje de usuario del sitio web - OIENIV',
				html: `<div>
					<span>Nombre: ${name}</span>
					<br/>
					<span>Correo: ${email}</span>
					<br/>
					<span>Telefono: ${phone}</span>
					<br/>
					<span>Mensaje: ${msg}</span>
				</div>`
			}, (err, res) => {
				if (err) reject(err);
				else resolve({
					status: "OK",
					message: "Mensaje Enviado Exitosamente",
					res
				});
			});
		})
	}
}

module.exports = Mail;
