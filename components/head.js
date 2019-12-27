import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const defaultOGURL = "https://oieniv-website.firebaseapp.com/";
const defaultOGImage = "https://oieniv-website.firebaseapp.com/image.jpg";

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ""}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta property="og:locale" content="es_LA" />
		<meta property="og:site_name" content={props.title} />
		<meta property="og:type" content="website" />
		<meta property="fb:app_id" content="433918784089260" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" sizes="192x192" href="/touch-icon.png" />
		<link rel="apple-touch-icon" href="/touch-icon.png" />
		<link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
		<link rel="icon" href="/favicon.ico" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ""} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1280" />
		<meta property="og:image:height" content="853" />
		<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
};

export default Head;
