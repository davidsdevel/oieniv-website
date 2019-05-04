import React from "react";

const MissionVisionObjectiveChild = ({iconURL, title, content}) => (
	<div>
		<img url={iconURL} alt={`OIENIV ${title}`}/>
		<h2>{title}</h2>
		<p>{content}</p>
	</div>
);

export default MissionVisionObjectiveChild;
