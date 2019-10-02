import React, {Component} from "react";
import Link from "next/link";
import NextHead from "next/head";

export default class extends Component {
	static async getInitialProps({req, res}) {
		const {statusCode} = res;
		const {url} = req;
		var message;

		switch(statusCode) {
			case 404:
				message = <span>La url <b>{url}</b> no se encuentra en este sitio.</span>
				break;
			case 500:
				message = "Error Interno del Servidor"
				break;
		}
		return {
			status:statusCode,
			message
		}
	}
	render() {
		return (<div id="main">
			<NextHead>
				<meta charSet="UTF-8" />
				<title>Ups. Ha pasado un error</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/static/favicon.ico" />
			</NextHead>
			<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#DBE1EC" viewBox="0 0 48 48">
				<path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
			</svg>
			<span id="status">
				<b>{this.props.status}</b>
			</span>
			<h3>Ups. Lo Sentimos</h3>
			<p>{this.props.message}<br/>Regrese mas tarde.<br/><br/>
				<Link href="/" prefetch>
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
		</div>)
	}
}