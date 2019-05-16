import React, {Component} from "react";
import MissionVisionObjectiveChild from "./missionVisionObjectiveChild";
import Link from "next/link";

const data = [{
	title:"Misión",
	content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
	iconURL: "/static/images/flag1.svg"
},
{
	title:"Visión",
	content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
	iconURL: "/static/images/rocket.svg"
},
{
	title:"Objetivo",
	content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
	iconURL: "/static/images/eye.svg"
}];


const Child = data.map(({title, content, iconURL}) => (<MissionVisionObjectiveChild key={title.toLowerCase()} title={title} content={content} iconURL={iconURL}/>));

class MissionVisionObjective extends Component {
	render() {
		return (
			<div id="mission-main">
				{Child}
				<Link href="/nosotros" prefetch>
					<a>Conoce más acerca de nosotros</a>
				</Link>
				<style jsx global>{`
#mission-main {
	padding: 50px 0;
}
.mission-container h2 {
	color: #4c4c4c;
	font-size: 35px;
	margin: 10px auto 30px auto;
}
.mission-container p {
	color: gray;
}
.mission-container img {
	width: 80px;
}
.mission-container {
	width: 23.3%;
	text-align: center;
	display: inline-block;
	margin: 0 5%
}
.image-circle {
	width: 80px;
	heigth: 80px;
	border: solid 1px gray;
	padding: 30px;
	margin: auto;
	border-radius: 50%;
}
				`}</style>
			</div>
		);
	}
}

export default MissionVisionObjective;
