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
					<Link prefetch href={url}>
						<a>{name}</a>
					</Link>
				</li>)
			)}
		</ul>
		<div id="footer-follow-us">
			<h6>Siguenos</h6>
			<ul>
				<li>
					<Link href="https://www.facebook.com/oieniv">
						<a rel="noreferrer" target="_blank">
							<img src="/static/images/oieniv-facebook-logo.png" alt="OIENIV Facebook Logo"/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.twitter.com/oieniv">
						<a rel="noreferrer" target="_blank">
							<img src="/static/images/oieniv-twitter-logo.png" alt="OIENIV Twitter Logo"/>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.youtube.com/oieniv">
						<a rel="noreferrer" target="_blank">
							<img id="footer-youtube-logo" src="/static/images/oieniv-youtube-logo.png" alt="OIENIV Youtube Logo"/>
						</a>
					</Link>
				</li>
			</ul>
		</div>
		<ul id="footer-copyright">
			<li>Desarrollado por <Link href="https://www.facebook.com/davidsdevel"><a rel="noreferrer" target="_blank">David&apos;s Devel</a></Link></li>
			<li>
				<Link prefetch href="/terminos">
					<a>Terminos de Servicio</a>
				</Link>
			</li>
			<li>
				<Link prefetch href="/privacidad">
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
		`}</style>
	</footer>
);

export default Footer;
