import React, {Component} from "react";
import MissionVisionObjectiveChild from "./missionVisionObjectiveChild";

const data = [{
	title:"Misión",
	content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	iconURL: "/static/images/flag1.svg"
},
{
	title:"Visión",
	content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	iconURL: "/static/images/rocket.svg"
},
{
	title:"Objetivo",
	content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	iconURL: "/static/images/eye.svg"
}];


const Child = () => (
	<div>{
		data.map(({title, content, iconURL}) => (
			<MissionVisionObjectiveChild key={title.toLowerCase()} title={title} content={content} iconURL={iconURL}/>
		))
	}</div>
);

class MissionVisionObjective extends Component {
	render() {
		return (
			<div id="mission-main">
				<Child/>
				<style jsx="true">{`
					#mission-main {
						padding: 50px 0;
					}
					.mission-container {
						width: 23.3%;
						background: red;
						display: inline-block;
						margin: 0 5%
					}
				`}</style>
			</div>
		);
	}
}

export default MissionVisionObjective;
