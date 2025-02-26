import React from "react";

const LandingPage = () => (
	<div id="landing-page-container">
		<h1 id="title">OIENIV</h1>
		<p id="slogan">Columna y Baluarte de la Verdad</p>
		<p id="full-name"><b>O</b>rganizacion de <b>I</b>glesias <b>E</b>vangelicas <b>N</b>acionales <b>I</b>ndependientes de <b>V</b>enezuela</p>
		<p id="mini-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<style jsx>{`
#landing-page-container {
	background-image: url(/images/OIENIV-columna-y-baluarte-de-la-verdad.jpg);
	height: 600px;
	color: white;
	background-size: cover;
	text-align: center;
	padding: 50px 5%;
}
#title {
	font-size: 70px;
}
#slogan {
	font-size: 40px;
}
#mini-history {
	width: 40%;
	font-size: 20px;
	margin: 100px 0 0 0;
}
#full-name {
	font-size: 21px;
	color: #f7f7f7
}
b {
	color: white;
	font-size: 28px;
}
@media screen and (max-width: 480px) {
	#title {
		margin: 40px auto;
	}
	#slogan {
		margin: 40px auto 120px auto;
	}
	#landing-page-container {
		width: 90%;
		padding: 50px 5%;
	}
	#mini-history {
		display: none;
	}
	#full-name {
		font-size: 18px;
	}
}
		`}</style>
	</div>
);

export default LandingPage;
