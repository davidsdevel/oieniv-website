import React from "react";
import Link from "next/link";
import NextHead from "next/head";
import {string, number} from "prop-types";

const ErrorPage = ({ statusCode, url }) => {

	let message;
	switch (statusCode) {
	case 404:
		message = <span>La pagina <b>{url}</b> no se encuentra en este sitio.</span>;
		break;
	case 500:
		message = "Error Interno del Servidor";
		break;
	}

	return <div id="main">
		<NextHead>
			<meta charSet="UTF-8" />
			<title>Ups. Ha pasado un error</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
		<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#DBE1EC" viewBox="0 0 48 48">
			<path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
		</svg>
		<span id="status">
			<b>{statusCode}</b>
		</span>
		<h3>Ups. Lo Sentimos</h3>
		<p>{message}<br/>Regrese mas tarde.<br/><br/>
			<Link href="/">
				<a>
					Inicio
				</a>
			</Link>
		</p>
		<style jsx>{`
			a {
				font-size: 30px;
			}
			div#main {
				text-align: center;
				margin: 100px auto;
				font-family: Roboto;
			}
			#main h3 {
				font-size: 30px;
				margin:20px auto;
				color: gray;
			}
			#main p {
				font-size: 20px;
				color: rgba(0,0,0,.8)
			}
			@media screen and (min-width:767px){
				#main h3 {
					font-size: 60px;
				}
				#main p {
					font-size: 25px;
				}
			}
			#status {
				color: rgba(0,0,0,.8);
				font-size: 80px;
				margin: 20px auto;
				display: block;
			}
		`}</style>
	</div>;
};

ErrorPage.getInitialProps = ({ req, res, err }) => {

	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	const {url} = req;

	return {
		statusCode,
		url
	};
};

ErrorPage.propTypes = {
	statusCode: number,
	url: string
};

export default ErrorPage;
