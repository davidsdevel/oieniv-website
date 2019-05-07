import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import LandingPage from "../components/index/landingPage";
import MissionVisionObjective from "../components/index/missionVisionObjective";
import HelperBodies from "../components/index/helperBodies";
import ContactForm from "../components/index/contactForm";
import Slogan from "../components/index/slogan";

const Home = () => (
	<div>
		<Head title="OIENIV - Organizacion Cristiana en Venezuela" />
		<Nav />
		<LandingPage/>
		<MissionVisionObjective />
		<HelperBodies/>
		<ContactForm />
		<Slogan/>
		<Footer/>
	</div>
);

export default Home;
