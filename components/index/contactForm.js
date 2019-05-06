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
				<div>
					<input onChange={this.handleInputChanges} type="text" name="name"/>
					<input onChange={this.handleInputChanges} type="email" name="email"/>
					<input onChange={this.handleInputChanges} type="number" name="phoneNumber"/>
					<textarea onChange={this.handleInputChanges} name="comment"></textarea>
					<button onClick={this.send}>Enviar</button>
				</div>
			</div>
		);
	}
}

export default ContactForm;
