import React from "react";
import {string} from "prop-types";

const Description = ({title}) => (
	<div id="description-container">
		<h4 className="sub-titles">¿Qué es {title}?</h4>
		<p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<style jsx>{`
			#description-container {
				overflow: hidden;
				padding-top: 15px;
				background: #f7f7f7;
			}
		`}</style>
	</div>
);

Description.propTypes = {
	title: string
};

export default Description;
