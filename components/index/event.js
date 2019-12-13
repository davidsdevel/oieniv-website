import React from "react";
import {object, number} from "prop-types";

const Event = ({data, active}) => {
	const date = new Date(data.date + " " + data.time);
	const time = date.getHours();
	var minutes = date.getMinutes();

	if (minutes < 10)
		minutes = "0" + minutes;
	else if (minutes === 0)
		minutes = "";

	let hour;
	if (time < 12)
		hour = `${time}:${minutes}AM`;
	else if (time === 12)
		hour = `${time}:${minutes}M`;
	else if (time > 12)
		hour = `${time - 12}:${minutes}PM`;
	else if (time === 0)
		hour = "12AM";

	let month;
	switch(date.getMonth()) {
		case 0:
			month = "Enero";
			break;
		case 1:
			month = "Febrero";
			break;
		case 2:
			month = "Marzo";
			break;
		case 3:
			month = "Abril";
			break;
		case 4:
			month = "Mayo";
			break;
		case 5:
			month = "Junio";
			break;
		case 6:
			month = "Julio";
			break;
		case 7:
			month = "Agosto";
			break;
		case 8:
			month = "Septiembre";
			break;
		case 9:
			month = "Octubre";
			break;
		case 10:
			month = "Noviembre";
			break;
		case 11:
			month = "Diciembre";
			break;
		default: break;
	}

	return <div style={{backgroundImage: data.image ? `url(${data.image})` : ""}} className={"template " + (active === data.ID ? "active" : "deactivate")}>
		<div id="template-shadow">
			<h3>{data.name}</h3>
			<p>{data.description}</p>
			{
				(data.date || data.time) &&
				<span id="date">El {date.getDate()} de {month} a las {hour}</span>
			}
			{
				data.church &&
				<span id="church">En la Iglesia <b>{data.church}</b></span>
			}
			{
				data.location &&
				<span id="location">Zona <b>{data.location}</b></span>
			}
		</div>
		<style jsx>{`
			.template {
				position: absolute;
				width: 100%;
				height: 100%;
				color: white;

				background-size: cover;
				background-position: center;
			}
			.template h3 {
				text-align: center;
				margin-top: ${ !data.church && !data.location && (!data.time  || !data.date) ? "120px" : "80px"};
				font-size: 28px;
			}
			.template p {
				text-align: center;
				position: absolute;
				left: 5%;
				width: 90%;
				top: ${ !data.church && !data.location && (!data.time  || !data.date) ? "60%" : "35%"};
			}
			.template span {
				display: block;
				position: absolute;
			}
			#template-shadow {
				background: rgba(0,0,0,.6);
				position: absolute;
				width: 100%;
				height: 100%;
			}
			#date {
				right: 5%;
				bottom: 15%;
			}
			#location {
				bottom: 15%;
				left: 5%;
			}
			#church {
				width: 100%;
				text-align: center;
				left: 0;
				bottom: 5%;
			}
			.active {
				opacity: 1;
				transition: linear 2s;
			}
			.deactivate {
				opacity: 0;
				transition: linear 2s;
			}
			@media screen and (min-width: 780px) {
				.template p {
					width: 60%;
					left: 20%;
				}
				#date {
					right: 15%;
				}
				#location {
					left: 15%;
				}
			}
		`}</style>
	</div>
}

Event.propTypes = {
	data: object,
	index: number
};

export default Event;
