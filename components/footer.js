import React from "react";
import Link from "next/link";

const links = [
	{
		name: "Inicio",
		url: "/"
	},
	{
		name: "Anjeiv",
		url: "/anjeiv"
	},
	{
		name: "Andeiv",
		url: "/andeiv"
	},
	{
		name: "Copaso",
		url: "/copaso"
	},
	{
		name: "Pronani",
		url: "/pronani"
	},
	{
		name: "Vemiv",
		url: "/vemiv"
	},
	{
		name: "AEVO",
		url: "/aevo"
	},
	{
		name: "La Voz de OIENIV",
		url: "/lavozdeoieniv"
	}
];


const Footer = () => (
	<footer>
		<ul>
			<li>Nuestra sede principal queda ubicada en: direccion Estado Sucre, Venezuela</li>
			<li>+580123456789</li>
			<li>Si tienes dudas o preguntas, escribenos a: user@mail.com</li>
		</ul>
		<ul id="footer-links">
			{links.map(({name, url}) => (
				<li key={`footer-link-${name}`}>
					<Link href={url !== "/" ? "/[helper]" : "/"} as={url !== "/" ? url : undefined}>
						<a>{name}</a>
					</Link>
				</li>)
			)}
		</ul>
		<div id="footer-follow-us">
			<h6>Siguenos</h6>
			<ul>
				<li>
					<a href="https://www.facebook.com/oieniv" rel="noopener noreferrer" target="_blank">
						<img src="/images/oieniv-facebook-logo.png" alt="OIENIV Facebook Logo"/>
					</a>
				</li>
				<li>
					<a href="https://www.twitter.com/oieniv" rel="noopener noreferrer" target="_blank">
						<img src="/images/oieniv-twitter-logo.png" alt="OIENIV Twitter Logo"/>
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/oieniv" rel="noopener noreferrer" target="_blank">
						<img id="footer-youtube-logo" src="/images/oieniv-youtube-logo.png" alt="OIENIV Youtube Logo"/>
					</a>
				</li>
			</ul>
		</div>
		<ul id="footer-copyright">
			<li>Desarrollado por <a href="https://www.facebook.com/davidsdevel" rel="noreferrer" target="_blank">David&apos;s Devel</a></li>
			<li>
				<Link href="/terminos">
					<a>Terminos de Servicio</a>
				</Link>
			</li>
			<li>
				<Link href="/privacidad">
					<a>Politica de Privacidad</a>
				</Link>
			</li>
			<li>
				Todos los derechos reservados OIENIV © 2019
			</li>
		</ul>
		<style jsx>{`
			footer {
				width: 80%;
				background: rgb(43, 46, 59);
				height: 400px; 
				color: #ccc;
				padding: 80px 10%;
				position: relative;
				transition: ease .2s;
			}
			a {
				color: #ccc; 
				text-decoration: none;
			}
			a:hover {
				color: white;
			}
			li {
				list-style: none;
			}
			footer h6 {
				color: white;
				font-size: 18px;
				margin: 10px 0;
			}
			footer #footer-follow-us {
				position: absolute;
				left: 10%;
				bottom: 150px;
				width: 15%;
			}
			footer #footer-follow-us ul {
				display: flex;
				justify-content: space-between;
			}
			footer #footer-follow-us li img {
				width: 24px;
			}
			footer #footer-follow-us li img#footer-youtube-logo {
				height: 24px;
				width: auto;
			}
			footer #footer-copyright {
				position: absolute;
				bottom: 70px;
				left: 0;
				width: 80%;
				padding: 0 10%;
				justify-content: space-between;
				display: flex;
			}
			footer #footer-copyright li {
				font-size: 12px;
			}
			@media screen and (max-width: 480px) {
				footer {
					height: 500px;
				}
				footer #footer-links {
					margin: 20px 0;
				}
				footer #footer-links li {
					margin: 2.5px 0;
				}
				footer #footer-copyright {
					display: block;
				}
				footer #footer-copyright li {
					margin: 10px;
				}
				footer #footer-follow-us {
					bottom: 200px;
				}
				footer #footer-follow-us ul {
					width: 150px;
				}
			}
		`}</style>
	</footer>
);

export default Footer;
