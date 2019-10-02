import React from "react";
import {string} from "prop-types";

function GenerateExtendedTitleWithCamelCase({extendedTitle}) {
	const splittedInLetters = extendedTitle.split("");

	return splittedInLetters.map((e, i) => {
		if (e === e.toUpperCase())
			return <b key={e+i}>{e}</b>;

		return e;
	});
}

const LandingPage = ({title, extendedTitle, description, logoURL, backgroundURL}) => (
	<div id="main">
		<img id="logo" src={logoURL} alt={`${title} Logo`}/>
		<div id="layer"></div>
		<h1>{title}</h1>
		<p>
			<GenerateExtendedTitleWithCamelCase extendedTitle={extendedTitle}/>
		</p>
		<p>{description}</p>
		<style jsx>{`
			h1 {
				font-size: 70px;
				margin: 50px 0;
			}
			#main {
				color: white;
				padding: 50px 5% 100px;
				text-align: center;
				background-image: url(${backgroundURL});
    			background-position: center;
    			background-size: cover;
    			position: relative;
    			z-index: -2;
			}
			#logo {
				width: 200px;
				margin: 50px 0 0;
			}
			#layer {
				top: 0;
    			left: 0;
    			width: 100%;
    			height: 100%;
    			position: absolute;
    			background: black;
    			z-index: -1;
    			opacity: .4;
			}
		`}</style>
	</div>
);

LandingPage.propTypes = {
	title: string,
	extendedTitle: string,
	description: string,
	logoURL: string,
	backgroundURL: string
};

export default LandingPage;
