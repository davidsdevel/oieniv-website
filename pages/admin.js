import React, {Component} from "react";
import Head from "next/head";
import Login from "../components/admin/login";
import Dashboard from "../components/admin/dashboard";
import fetch from "isomorphic-fetch";
import {boolean} from "prop-types";

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...props
		};

		this.onLogin = this.onLogin.bind(this);
	}
	static async getInitialProps({req}) {
		try {
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

		} catch(err) {
			console.error(err);
		}
	}
	onLogin() {
		this.setState({
			logged: true
		});
	}
	render() {
		const {logged} = this.state;

		let UI;

		if (logged)
			UI = <Dashboard/>;
		else
			UI = <Login onLogin={this.onLogin}/>;


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
