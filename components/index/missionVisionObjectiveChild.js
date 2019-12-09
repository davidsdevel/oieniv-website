import React from "react";
import {string} from "prop-types";

const MissionVisionObjectiveChild = ({iconURL, title, content}) => (
	<div className="mission-container">
		<div className="image-circle">
			<img src={iconURL} alt={`OIENIV ${title}`}/>
		</div>
		<h3>{title}</h3>
		<p>{content}</p>
	</div>
);
MissionVisionObjectiveChild.propTypes = {
	iconURL: string,
	title: string,
	content: string
};

export default MissionVisionObjectiveChild;
