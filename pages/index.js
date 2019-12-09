import React from "react";
import Head from "../components/head";
import MissionVisionObjective from "../components/index/missionVisionObjective";
import HelperBodies from "../components/index/helperBodies";
import ContactForm from "../components/index/contactForm";
import Slogan from "../components/index/slogan";
import Slider from "../components/index/eventsSlider";
import fetch from "isomorphic-fetch";
import {object} from "prop-types";

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

Home.getInitialProps = async ({req, res}) => {
	let origin;

	if (req)
		origin = req.headers["host"];
	else
		origin = location.host;

	const dataRes = await fetch(`${origin.match(/localhost|127\.0\.0\.1|::1/) !== null ? "http:" : "https:"}//${origin}/data/index`);
	const data = await dataRes.json();

	return {
		data
	};
}

export default Home;
