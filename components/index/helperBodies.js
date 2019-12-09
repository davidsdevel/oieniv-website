import React from "react";
import HelperBody from "./helperBody";

const data = [
	{
		name: "Anjeiv",
		url: "/anjeiv",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/anjeiv-logo.jpg"
	},
	{
		name: "Andeiv",
		url: "/andeiv",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/test-logo.png"
	},
	{
		name: "Copaso",
		url: "/copaso",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/test-logo.png"
	},
	{
		name: "Pronani",
		url: "/pronani",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/test-logo.png"
	},
	{
		name: "Vemiv",
		url: "/vemiv",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/vemiv-logo.jpg"
	},
	{
		name: "AEVO",
		url: "/aevo",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/test-logo.png"
	},
	{
		name: "La Voz de OIENIV",
		url: "/lavozdeoieniv",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/lavozdeoieniv-logo.png"
	},
	{
		name: "Primeros Auxilios",
		url: "/primerosauxilios",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: "/images/test-logo.png"
	}
];

const childs = data.map(({url, name, content, logoURL}, i) => ( <HelperBody key={`Organos Auxiliar-${i}`} url={url} name={name} content={content} logoURL={logoURL}/>));

const HelperBodies = () => (
	<div id="helper-bodies-container">
		<h3 className="sub-titles">Organos Auxiliares de OIENIV</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		{childs}
		<style jsx global>{`
			#helper-bodies-container {
				width: 80%;
				padding: 50px 10%;
				background: #f7f7f7;
			}
			#helper-bodies-container > p {
				text-align: center;
				font-size: 20px;
				color: gray;
			}
			#helper-bodies-container .helper-body {
				width: 20%;
				display: inline-block;
				margin: 50px 2.5%;
			}
			#helper-bodies-container .helper-body img {
				width: 100%;
			}
			@media screen and (max-width: 480px) {
				#helper-bodies-container .helper-body {
					width: 45%;
				}	
			}
		`}</style>
	</div>
);

export default HelperBodies;
