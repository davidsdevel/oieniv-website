import React, {Component} from "react";
import Head from "../components/head";
import {number, boolean, string} from "prop-types";
import LandingPage from "../components/helper/landingPage";
import President from "../components/helper/president";
import Description from "../components/helper/description";
import Photos from "../components/helper/photos";
import Message from "../components/helper/helperMessage";
import fetch from "isomorphic-fetch";
import NextError from "./_error";

class Helper extends Component {
	static async getInitialProps({req, query, asPath}) {
		try {
			let origin;

			if (req)
				origin = req.headers["host"];
			else
				origin = location.host;

			const fetchRes = await fetch(`${origin.match(/localhost|127\.0\.0\.1|::1/) !== null ? "http:" : "https:"}//${origin}/data/${query.helper}`);

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
		const {error, status, url, title, extendedTitle, description, logo, background, message} = this.props;

		if (error)
			return <NextError statusCode={status} url={url}/>;

		return (
			<div>
				<Head title={title} />
				<LandingPage
					title={title}
					extendedTitle={extendedTitle}
					description={description}
					backgroundURL={background}
					logoURL={logo}
				/>
				<President/>
				<Description title={title}/>
				<Photos/>
				<Message message={message} logo={logo}/>
				<style jsx global>{`
					p.description {
						padding: 0 5%;
						margin: 0 0 50px 0;
						text-align: center;
					}
				`}</style>
			</div>
		);
	}
}

Helper.propTypes = {
	title: string,
	description: string,
	logo: string,
	extendedTitle: string,
	background: string,
	url: string,
	status: number,
	error: boolean
};

export default Helper;
