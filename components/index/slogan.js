import React from "react";

const Slogan = () => (
	<div id="slogan-container">
		<h3>OIENIV</h3>
		<p id="slogan">Columna y Baluarte de la Verdad</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<style jsx="true">{`
			#slogan-container {
				width: 80%;
				padding: 50px 10%;
				text-align: center;
			}
			#slogan-container h3 {
				font-size: 60px;
			}
			#slogan-container #slogan {
				font-size: 35px;
				margin: 10px 0 50px 0;
			}
		`}</style>
	</div>
);

export default Slogan;
