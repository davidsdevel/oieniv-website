import React, {Component} from "react";

class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			request: "",
			phoneNumber: "",
			comment: "",
			textareaIsfocused: false,
			readyToSend: false
		};

		this.handleInputChanges = this.handleInputChanges.bind(this);
		this.send = this.send.bind(this);
		this.showLettersCounter = this.showLettersCounter.bind(this);
		this.hideLettersCounter = this.hideLettersCounter.bind(this);
	}
	send() {
		if (this.state.readyToSend)
			console.log("Sending");
	}
	showLettersCounter() {
		this.setState({
			textareaIsfocused: true
		});
	}
	hideLettersCounter() {
		this.setState({
			textareaIsfocused: false
		});
	}
	handleInputChanges({target}) {
		const {name, type} = target;

		const value = type === "checkbox" ? target.checked : target.value;

		if (name === "comment") {
			if (this.state.comment.length < 250) {
				this.setState({
					comment: value
				});
			}
		}
		else
			this.setState({[name]: value });
	}
	render() {
		return (
			<div id="contact-image">
				<div id="contact-container">
					<h3 className="sub-titles">Contactanos</h3>
					<input placeholder="Nombre" onChange={this.handleInputChanges} value={this.state.name} type="text" name="name"/>
					<input placeholder="Correo" onChange={this.handleInputChanges} value={this.state.email} type="email" name="email"/>
					<input placeholder="Numero de Telefono" onChange={this.handleInputChanges} value={this.state.phone} type="phone" name="phoneNumber"/>
					<div style={{width: "calc(30% + 60px)", margin: "auto", position: "relative"}}>
						<textarea
							placeholder="Comentario"
							onChange={this.handleInputChanges}
							name="comment"
							onFocus={this.showLettersCounter}
							onBlur={this.hideLettersCounter}
							value={this.state.comment}
						></textarea>
						<span id="letters-count" style={{opacity: this.state.textareaIsfocused ? 1 : 0}}>{this.state.comment.length}/250</span>
					</div>
					<button onClick={this.send}>Enviar</button>
				</div>
				<style jsx>{`
					#contact-image {
						background: url(/static/images/OIENIV%20-%20contactanos.jpg);
						padding: 50px 0 100px 0;
						background-position: center;
					}
					#contact-container {
						width: 100%;
					}
					#contact-container .sub-titles {
						color: white;
					}
					#contact-container input,
					#contact-container textarea,
					#contact-container button
					{
						display: block;
						margin: 20px auto;
						width: 30%;
						color: #b9b9b9;
						border: white solid 1px;
						background: rgba(0, 0, 0, .3);
						padding: 15px 30px;
						border-radius: 50px;
						transition: ease .5s;
					}
					#contact-container input:focus,
					#contact-container textarea:focus
					{
						color: white;
						outline: none;
					}
					#contact-container textarea {
						height: 200px;
						border-radius: 15px;
						font-size: 18px;
						resize: none;
						width: calc(100% - 60px);
					}
					#contact-container input::placeholder,
					#contact-container textarea::placeholder {
						color: #b9b9b9;
					}
					#contact-container button {
						color: white;
						cursor: pointer;
					}
					#contact-container button:focus {
						outline: none;
					}
					#contact-container button:hover {
						background: #f7f7f7;
						color: black;
					}
					#contact-container #letters-count {
						color: white;
						position: absolute;
						bottom: 15px;
						right: 15px;
						font-size: 15px;

						transition: ease .6s;
					}
				`}</style>
			</div>
		);
	}
}

export default ContactForm;
