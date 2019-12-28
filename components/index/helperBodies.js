import React from "react";
import HelperBody from "./helperBody";

const data = [
	{
		name: "Anjeiv",
		url: "/anjeiv",
		content: "La Asociacion Nacional de Jovenes es la encargada de realizar actividades y llevar un mensaje dirigido por y para jovenes",
		logoURL: "/images/anjeiv-logo-black.png"
	},
	{
		name: "Andeiv",
		url: "/andeiv",
		content: "Andeiv es la asociacion en las cuales las damas toman el liderazgo, demostrando que pueden ser delicadas y a su vez afrontar retos",
		logoURL: ""
	},
	{
		name: "Copaso",
		url: "/copaso",
		content: "El Concilio de Pastores de OIENIV es el encargado de ayudar a los pastores a llevar estrategias de crecimiento espiritual para las iglesias",
		logoURL: ""
	},
	{
		name: "Pronani",
		url: "/pronani",
		content: "Programa Nacional encargado de formar e instruir personas para llevar el mensaje de salvacion a los niños de manera creativa",
		logoURL: ""
	},
	{
		name: "Vemiv",
		url: "/vemiv",
		content: "",
		logoURL: "/images/vemiv-logo.png"
	},
	{
		name: "AEVO",
		url: "/aevo",
		content: "",
		logoURL: ""
	},
	{
		name: "La Voz de OIENIV",
		url: "/lavozdeoieniv",
		content: "Radio encargada de llevar el mensaje del evangelio a travez de las frecuencias radiales dentro de Venezuela y mas alla via Streaming",
		logoURL: "/images/lavozdeoieniv-logo.png"
	},
	{
		name: "Primeros Auxilios",
		url: "/primerosauxilios",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		logoURL: ""
	}
];

const childs = data.map(({url, name, content, logoURL}, i) => ( <HelperBody key={`Organos Auxiliar-${i}`} url={url} name={name} content={content} logoURL={logoURL}/>));

const HelperBodies = () => (
	<div id="helper-bodies-container">
		<h3 className="sub-titles">Organos Auxiliares de OIENIV</h3>
		<p>OIENIV cuenta con distintas entidades para implementar y planificar estrategias a un sector o a traves de un medio especifico. Dichas entidades se llaman Organos Auxiliares, entre las algunas funciones de estas estan llevar un mensaje dirigido a jovenes, damas y niños, llevar las buenas nuevas de salvacion  a travez de las frecuencias radiales, realizar voluntariados misioneros, entre otros</p>
		{childs}
		<style jsx global>{`
			#helper-bodies-container {
				width: 80%;
				max-width: 1000px;
				margin: auto;
				padding: 50px 10%;
				background: #f7f7f7;
			}
			#helper-bodies-container > p {
				text-align: center;
				font-size: 20px;
				color: gray;
			}
			#helper-bodies-container .helper-body {
				width: 45%;
				display: inline-block;
				margin: 50px 2.5%;
			}
			#helper-bodies-container .helper-body img {
				height: auto;
				width: 100%;
			}
			@media screen and (min-width: 760px) {
				#helper-bodies-container .helper-body {
					width: 20%;
				}	
			}
		`}</style>
	</div>
);

export default HelperBodies;
