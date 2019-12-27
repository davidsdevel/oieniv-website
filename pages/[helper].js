import React, {Component} from "react";
import Head from "../components/head";
import {number, boolean, string, object} from "prop-types";
import LandingPage from "../components/helper/landingPage";
import President from "../components/helper/president";
import Description from "../components/helper/description";
import Photos from "../components/helper/photos";
import Message from "../components/helper/helperMessage";
import fetch from "isomorphic-fetch";
import NextError from "./_error";

class Helper extends Component {
	static async getInitialProps({query, asPath}) {
		try {
			const fetchRes = await fetch(`${process.env.ORIGIN}/data/${query.helper}`);

			if (fetchRes.status >= 200 && fetchRes.status < 400) {

				const data = await fetchRes.json();
				const newLogo = data.logo ? data.logo : "/images/test-logo.png";
				
				return {
					...data,
					logo: newLogo,
					error: false
				};
			} else {
				return {
					error: true,
					status: fetchRes.status,
					url: asPath
				};
			}
		} catch(err) {
			console.error(err);
		}
	}
	render() {
		const {error, status, url, title, landing, description, message, president} = this.props;

		if (error)
			return <NextError statusCode={status} url={url}/>;

		return (
			<div>
				<Head title={title} />
				<LandingPage title={title} data={landing}/>
				<President title={title} data={president}/>
				<Description title={title} data={description}/>
				<Photos/>
				<Message data={message}/>
			</div>
		);
	}
}

Helper.propTypes = {
	status: number,
	error: boolean,
	url: string,
	title: string,
	landing: object,
	description: object,
	message: object,
	president: object
};

export default Helper;
