import React from "react";
import {string, object} from "prop-types";

const President = ({title, data}) => (
	<div id="president-main">
		<div id="president-container">
			<h3 className="sub-titles" id="president-mobile">Presidente</h3>
			<div id="photo-name">
				<img src={data.image} alt={`Presidente de ${title} - ${data.name}`} id="president-photo"/>
				<h4 className="sub-titles">{data.name}</h4>
			</div>
			<div>
				<h3 className="sub-titles" id="president-desktop">Presidente</h3>
				<p className="description">{data.text}</p>
			</div>
		</div>
		<hr/>
		<style jsx>{`
			#president-desktop {
				display: none;
			}
			#president-main {
				padding: 25px 0 0 0;
			}
			hr {
				width: 80%;
				margin: 25px auto 0;
				border: solid gray .5px;
			}
			#president-photo {
				width: 200px;
    			margin: 50px auto;
    			display: block;
    			border-radius: 50%;
			}
			p {
				text-align: center;
				max-width: 600px;
				padding: 0 5%;
			}
			@media screen and (min-width: 780px) {
				#president-mobile {
					display: none;
				}
				#president-desktop {
					display: block;
				}
				#president-container {
					display: flex;
    				width: 80%;
    				flex-direction: row-reverse;
    				margin: auto;
    				max-width: 1000px;
    				align-items: center;
    				justify-content: space-between;
				}
				#photo-name {
					background: #3c374e;
					width: 350px;
					border-radius 10px;
				}
				#photo-name h4 {
					color: white;
					font-size: 32px;
				}
				#photo-name, p {
					float: right;
				}
			}
		`}</style>
	</div>
);

President.propTypes = {
	title: string,
	data: object
};

export default President;
