import React from "react";
import {string} from "prop-types";

const HelperBody = ({logoURL, name, content}) => (
	<div className="helper-body">
		<h4>{name}</h4>
		<img src={logoURL} alt={`Organos Auxiliares - ${name} - OIENIV`}/>
		<p>{content}</p>
	</div>
);

HelperBody.propTypes = {
	logoURL: string,
	name: string,
	content: string
};

export default HelperBody;
