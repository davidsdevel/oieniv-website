import React, {Component} from "react";

class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			request: "",
			phoneNumber: "",
			comment: "" 
		};

		this.handleInputChanges = this.handleInputChanges.bind(this);
		this.send = this.send.bind(this);
	}
	send() {

	}
	handleInputChanges({target}) {
		const {name, type} = target;

		const value = type === "checkbox" ? target.checked : target.value;

		this.setState({
			[name]: value
		});
	}
	render() {
		return (
			<div>
				<div id="contact-container">
					<h3 className="sub-titles">Contactanos</h3>
					<input placeholder="Nombre" onChange={this.handleInputChanges} type="text" name="name"/>
					<input placeholder="Correo" onChange={this.handleInputChanges} type="email" name="email"/>
					<input placeholder="Numero de Telefono" onChange={this.handleInputChanges} type="number" name="phoneNumber"/>
					<textarea placeholder="Comentario" onChange={this.handleInputChanges} name="comment"></textarea>
					<button onClick={this.send}>Enviar</button>
				</div>
				<style jsx="true">{`
					#contact-container {
						width: 100%;
					}
					#contact-container input,
					#contact-container textarea,
					#contact-container button
					{
						display: block;
						margin: 20px auto;
						width: 30%;
						height: 30px;
					}
				`}</style>
			</div>
		);
	}
}

export default ContactForm;
