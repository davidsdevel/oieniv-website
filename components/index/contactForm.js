import React, {Component} from "react";
import store from "../../store/reducer";
import {showAlert} from "../../store/actionCreators";

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
	async send() {
		try {
			const {name, email, comment: message, phoneNumber: phone} = this.state;
			if (name && email && message && phone) {

				const res = await fetch(`${process.env.ORIGIN}/send-comment`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body:JSON.stringify({
						name,
						email,
						phone,
						message
					})
				});

				if (res.status >= 400)
					store.dispatch(showAlert("Error al enviar mensaje, intentelo mas tarde"));
				else {
					let data = await res.json();

					if (data.status === "OK") {
						store.dispatch(showAlert(data.message));

						this.setState({
							name: "",
							email: "",
							comment: "",
							phoneNumber: ""
						});

					}

				}
			}
		} catch(err) {
			store.dispatch(showAlert("Error al enviar mensaje, intentelo mas tarde"));
		}
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
					<div id="textarea-container">
						<textarea
							placeholder="Comentario"
							maxLength="250"
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
						background: url(/images/OIENIV-contactanos.jpg);
						padding: 50px 0 100px 0;
						background-position: center;
						background-size: cover;
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
					#textarea-container {
						width: calc(30% + 60px);
						margin: auto;
						position: relative;
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
					@media screen and (max-width: 480px) {
						#contact-image {
							padding: 25px 0 50px 0;
						}
						#contact-container input,
						#contact-container textarea,
						#contact-container button {
							width: 75%;
						}
						#textarea-container {
							width: auto;
						}
						#contact-container button {
							margin-top: 80px;
						}
						#contact-container #letters-count {
							right: 30px
						}
					}
				`}</style>
			</div>
		);
	}
}

export default ContactForm;
