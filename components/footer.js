import React from "react";
import Link from "next/link";

const Footer = () => (
	<footer>
		<ul>
			<li>Nuestra sede principal queda ubicada en: direccion Estado Sucre, Venezuela</li>
			<li>+580123456789</li>
			<br/>
			<li>
				<Link href="/">
					<a>Inicio</a>
				</Link>
			</li>
			<li></li>
			<li></li>
		</ul>
		<style jsx>{`
footer {
	width: 100%;
	background: rgb(43, 46, 59);
	height: 400px; 
}
		`}</style>
	</footer>
);

export default Footer;
