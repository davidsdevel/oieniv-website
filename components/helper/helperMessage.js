import React from "react";
import {string} from "prop-types";

const HelperMessage = ({message, logo}) => (<div id="message-main">
	<img src={logo}/>
	<p>{message}</p>
	<style>{`
		#message-main {
			background: #3c374e;
			padding: 100px 0;
		}
		#message-main img {
			max-width: 200px;
			margin: auto;
			display: block;
		}
		#message-main p {
			font-size: 24px;
			padding: 0 5%;
			margin: 100px auto 0;
			text-align: center;
			max-width: 300px;
			color: white;
		}
		@media screen and (min-width: 760px) {
			#message-main {
				display: flex;
				padding: 100px 15%;
			}
			#message-main img, #message-main p {
				margin: auto;
				display: inline-block;
			}
		}
	`}</style>
</div>);

HelperMessage.propTypes = {
	message: string,
	logo: string
}

export default HelperMessage;
