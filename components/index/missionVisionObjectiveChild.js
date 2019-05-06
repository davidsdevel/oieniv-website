import React from "react";
import {string} from "prop-types";

const MissionVisionObjectiveChild = ({iconURL, title, content}) => (
	<div className="mission-container">
		<img src={iconURL} alt={`OIENIV ${title}`}/>
		<h2>{title}</h2>
		<p>{content}</p>
	</div>
);
MissionVisionObjectiveChild.propTypes = {
	iconURL: string,
	title: string,
	content: string
};

export default MissionVisionObjectiveChild;
