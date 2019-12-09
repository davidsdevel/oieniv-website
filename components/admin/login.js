import React, {Component} from "react";

export default class extends Component {
	constructor() {
		super();

		this.state = {
			username: "",
			password: "",
			saveSession: false,
			isFetching: false
		};

		this.handleInput = this.handleInput.bind(this);
		this.login = this.login.bind(this);
	}
	handleInput({target}) {
		const {name, type} = target;

		const value = type === "checkbox" ? target.checked : target.value;

		this.setState({
			[name]: value
		});
	}
	async login() {
		try {
			this.setState({
				isFetching: true
			});

			const {username, password, saveSession} = this.state;

			const res = await fetch("/api/admin/login", {
				method: "POST",
				headers: {
					"authorization": process.env.AUTH_TOKEN,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username,
					password,
					saveSession
				})
			});

			const data = await res.json();

			if (data.success)
				this.props.onLogin();
			else
				this.loginError(data.message);

			this.setState({
				isFetching: false
			});
		} catch(err) {
			throw new Error(err);
		}
	}
	loginError(msg) {
		console.error(msg);
	}
	render() {
		return <div>
			<div>
				<input type="text" placeholder="Nombre de Usuario" name="username" value={this.state.username} onChange={this.handleInput}/>
				<input type="password" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.handleInput}/>
				<label htmlFor="saveSession">Recordar</label>
				<input type="checkbox" name="saveSession" value={this.state.saveSession} onChange={this.handleInput}/>
				<button onClick={this.login}>Enviar</button>
			</div>
		</div>;
	}
}
