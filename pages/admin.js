import React, {Component} from "react";
import Head from "next/head";
import Login from "../components/admin/login";
import Dashboard from "../components/admin/dashboard";
import {boolean} from "prop-types";
import store from "../store/reducer";

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...props
		};

		this.handleLogin = this.handleLogin.bind(this);

		store.subscribe(this.handleLogin);
	}
	static async getInitialProps() {
		/*let origin;

		if (req)
			origin = req.headers["host"];
		else
			origin = location.host;

		const res = await fetch(`${origin.match(/localhost|127\.0\.0\.1|::1/) !== null ? "http:" : "https:"}//${origin}/api/admin/session`, {
			headers: {
				authorization: process.env.AUTH_TOKEN
			}
		});
		const data = await res.json();*/

		return {
			logged: false,
			hideLayout: true
		};
	}
	handleLogin() {
		const {logged} = store.getState().adminLogin;

		this.setState({
			logged
		});
	}
	render() {
		const {logged} = this.state;

		let UI;

		if (logged)
			UI = <Dashboard/>;
		else
			UI = <Login/>;


		return <div>
			<Head>
				<title>Pagina de Administracion - OIENIV</title>
			</Head>
			{UI}
		</div>;
	}
}

Admin.propType = {
	logged: boolean
};

export default Admin;
