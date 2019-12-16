import React from "react";
import {object} from "prop-types";

const HelperMessage = ({data}) => (<div id="message-main">
	<img src={data.image}/>
	<p>{data.text}</p>
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
	data: object
};

export default HelperMessage;
