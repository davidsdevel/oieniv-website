import React, {Component} from "react";
import MissionVisionObjectiveChild from "./missionVisionObjectiveChild";

const data = [{
	title:"Misión",
	content: "Nuestra misión como Organización Cristiana es la encomendada por nuestro señor Jesucristo en el libro de Mateo 28: 19-20: Instruirlos en los caminos del Evangelio, enseñarles a seguir el ejemplo de nuestro señor Jesucristo e instarles a guardar todo lo que Él nos enseñó",
	iconURL: "/images/flag1.svg"
},
{
	title:"Visión",
	content: "Nuestra Visión es Salvar al mayor número de personas posible, utilizando y proveyendo las herramientas necesarias para alcanzar a esas personas, a su vez posicionarnos como una organización representativa del verdadero evangelio de Jesucristo",
	iconURL: "/images/rocket.svg"
},
{
	title:"Objetivo",
	content: "Como objetivo nos propusimos trabajar en actividades que impacten los lugares donde nos encontramos: actividades sociales, deportivas, recreativas, infantiles, juveniles, etc. Además, de llevar a través de programas de radio, redes sociales, y diversos canales las buenas nuevas de salvación",
	iconURL: "/images/eye.svg"
}];

const Child = data.map(({title, content, iconURL}) => (<MissionVisionObjectiveChild key={title.toLowerCase()} title={title} content={content} iconURL={iconURL}/>));

class MissionVisionObjective extends Component {
	render() {
		return (
			<div id="mission-main">
				{Child}
				<style jsx global>{`
#mission-main {
	padding: 50px 0;
	display: flex;
}
.mission-container h3 {
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
@media screen and (max-width: 480px) {
	#mission-main {
		width: 90%;
		padding: 0 5%;
	}
	.mission-container {
		display: block;
		width: 100%;
		margin: 50px 0;
	}
	.image-circle {
		margin: auto;
	}
}
				`}</style>
			</div>
		);
	}
}

export default MissionVisionObjective;
