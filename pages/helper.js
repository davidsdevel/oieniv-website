import React, {Component} from "react";
import Head from "../components/head";
import Menu from "../components/nav";
import Footer from "../components/footer";
import {string} from "prop-types";
import LandingPage from "../components/helper/landingPage";

class Helper extends Component {
	static async getInitialProps({query}) {
		const { 
			title,
			extendedTitle,
			description,
			logo,
			background
		} = query;

		const newLogo = logo ? logo : "/static/images/test-logo.png";

		return { 
			title,
			extendedTitle,
			description,
			logo: newLogo
		};
	}
	render() {
		const {title, extendedTitle, description, logo, background} = this.props;

		return (
			<div>
				<Head title={title} />
				<Menu/>
				<LandingPage title={title} extendedTitle={extendedTitle} description={description} backgroundURL={background} logoURL={logo}/>
				<Footer/>
			</div>
		);
	}
}

Helper.propTypes = {
	title: string,
	description: string,
	logo: string,
	extendedTitle: string,
	background: string
};

export default Helper;
