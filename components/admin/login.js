import React, {Component} from "react";
import store from "../../store/reducer";
import {showAlert, login} from "../../store/actionCreators";

export default class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: "",
			password: "",
			isFetching: false
		};

		this.handleInput = this.handleInput.bind(this);
		this.login = this.login.bind(this);
	}
	handleInput({target}) {
		const {name, value} = target;

		this.setState({
			[name]: value
		});
	}
	async login(e) {
		try {
			e.preventDefault();

			this.setState({
				isFetching: true
			});

			const {username, password} = this.state;

			const res = await fetch("/api/admin/login", {
				method: "POST",
				headers: {
					"authorization": process.env.AUTH_TOKEN,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username,
					password
				})
			});


			if (res.status >= 500) {
				store.dispatch(showAlert("Error en el servidor, intente mas tarde"));

			} else {
				let data = await res.json();

				if (data.success)
					store.dispatch(login());
				else
					store.dispatch(showAlert("Usuario o contraseña incorrectos"));
			}

			this.setState({
				isFetching: false
			});
		} catch(err) {
			throw new Error(err);
		}
	}
	render() {
		return <div id="main">
			<div id="container">
				<form onSubmit={this.login}>
					<input type="text" placeholder="Nombre de Usuario" name="username" value={this.state.username} onChange={this.handleInput}/>
					<input type="password" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.handleInput}/>
					<button onClick={this.login}>Enviar</button>
				</form>
			</div>
			<style jsx>{`
				#main {
					display: flex;
					background: #f7f7f7;
					position: absolute;
					height: 100%;
					width: 100%;
				}
				#container {
					margin: auto;
					width: fit-content;
				}
				#container input, #container button {
				    padding: 10px 20px;
				    border: none;
				    display: block;
				    margin: 15px auto;
				    box-shadow: grey 1px 1px 2px;
				    border-radius: 10px;
				}
				#container input {
					background: white;
				}
				#container input:focus {
					outline: none;
				}
				#container button {
					background: black;
				    color: white;
				    cursor: pointer;
				    margin: 30px auto;
				    width: 150px;
				}
			`}</style>
		</div>;
	}
}
