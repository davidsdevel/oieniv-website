import React from "react";
import Head from "../components/head";
import MissionVisionObjective from "../components/index/missionVisionObjective";
import HelperBodies from "../components/index/helperBodies";
import ContactForm from "../components/index/contactForm";
import Slogan from "../components/index/slogan";
import Slider from "../components/index/eventsSlider";
import fetch from "isomorphic-fetch";
import {array} from "prop-types";

const Home = (props) => (
	<div>
		<Head title="OIENIV - Organizacion Cristiana en Venezuela"/>
		<Slider data={props.data}/>
		<MissionVisionObjective />
		<hr/>
		<HelperBodies/>
		<ContactForm />
		<Slogan/>
		<style jsx>{`
			hr {
				border: .5px solid rgba(0 ,0 ,0, .1)
			}
		`}</style>
	</div>
);

Home.getInitialProps = async ({req}) => {
	var origin;

	if (req)
		origin = req.headers["host"];
	else
		origin = location.host;

	const dataRes = await fetch(`${process.env.ORIGIN}/data/index`);
	var data = await dataRes.json();

	if (data.length === 0)
		data = [{
			"ID": 1,
			"name": "OIENIV",
			"description": "Organización de Iglesias Evangelicas Nacionales Independientes de Venezuela.\r\nColumna y Baluarte de la Verdad",
			"date": "",
			"time": "",
			"location": "",
			"image": "/images/OIENIV-columna-y-baluarte-de-la-verdad.jpg",
			"church": ""
		}];

	return {
		data
	};
};

Home.propTypes = {
	data: array
};

export default Home;
