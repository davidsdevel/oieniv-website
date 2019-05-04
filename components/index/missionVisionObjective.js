import React, {Component} from "react";
import {MissionVisionObjectiveChild} from "Components/index";

class MissionVisionObjective extends Component {
	render() {
		const Data = [{
			title:"Misión",
			content: "",
			iconURL: ""
		},
		{
			title:"Misión",
			content: "",
			iconURL: ""
		},
		{
			title:"Misión",
			content: "",
			iconURL: ""
		}];
		const Child = Data.map(({title, content, iconURL}) => (
			<MissionVisionObjectiveChild key={title.toLowerCase()} title={title} content={content} iconURL={iconURL} />
		));

		return (
			<div>
				{Child}
			</div>
		);
	}
}

export default MissionVisionObjective;
