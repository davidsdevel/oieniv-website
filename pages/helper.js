import React, {Component} from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {string} from "prop-types";
import LandingPage from "../components/helper/landingPage";
import President from "../components/helper/president";
import Description from "../components/helper/description";
import Photos from "../components/helper/photos";

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
			background,
			logo: newLogo
		};
	}
	render() {
		const {title, extendedTitle, description, logo, background} = this.props;

		return (
			<div>
				<Head title={title} />
				<Nav/>
				<LandingPage
					title={title}
					extendedTitle={extendedTitle}
					description={description}
					backgroundURL={background}
					logoURL={logo}
				/>
				<President/>
				<Description/>
				<Photos/>
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
