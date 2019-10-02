import React from "react";

const mobileDescription = () => (
	<div id="mobile-description">
		<h2 className="sub-titles">Nuestra Historia</h2>
		<p id="mobile-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<hr/>
		<style jsx>{`
			#mobile-description {
				display: none;
			}
			@media screen and (max-width: 480px) {
				#mobile-description {
					display: block;
					background: #f7f7f7;
					padding: 20px 0 0 0;
				}
				#mobile-history {
					text-align: center;
					margin-bottom: 20px;
					padding: 0 5%;
				}
				h2 {
					font-size: 40px;
					font-weight: bold;
					margin: auto;
					text-align: center;
					margin-bottom: 20px;
				}
				hr {
					border: .5px solid rgba(0 ,0 ,0, .1)
				}
			}
		`}</style>
	</div>
);

export default mobileDescription;
