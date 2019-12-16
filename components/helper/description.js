import React from "react";
import {string, object} from "prop-types";

const Description = ({title, data}) => (
	<div id="description-container">
		<h4 className="sub-titles" id="what">¿Qué es {title}?</h4>
		<p className="description">{data.text}</p>
		<img src={data.image}/>
		<style jsx>{`
			#description-container {
				overflow: hidden;
				padding-top: 15px;
				background: #f7f7f7;
			}
			p.description {
				padding: 0 5%;
				margin: 0 auto 50px;
				text-align: center;
				max-width: 600px;
			}
			img {
				display: block;
				width: 190px;
				margin: 0 auto 50px;
			}
			@media screen and (min-width: 780px) {
				#what {
					margin: 50px 0 50px;
				}
				p.description {
					margin: 100px auto 100px;
				}
				img {
					display: block;
					width: 190px;
					margin: 0 auto 100px;
				}
			}
		`}</style>
	</div>
);

Description.propTypes = {
	title: string,
	data: object
};

export default Description;
