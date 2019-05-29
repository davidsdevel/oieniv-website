import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import LandingPage from "../components/index/landingPage";
import MobileDescription from "../components/index/mobileDescription";
import MissionVisionObjective from "../components/index/missionVisionObjective";
import HelperBodies from "../components/index/helperBodies";
import ContactForm from "../components/index/contactForm";
import Slogan from "../components/index/slogan";

const Home = () => (
	<div>
		<Head title="OIENIV - Organizacion Cristiana en Venezuela"/>
		<Nav />
		<LandingPage/>
		<MobileDescription/>
		<MissionVisionObjective />
		<hr/>
		<HelperBodies/>
		<ContactForm />
		<Slogan/>
		<Footer/>
		<style jsx>{`
			hr {
				border: .5px solid rgba(0 ,0 ,0, .1)
			}
		`}</style>
	</div>
);

export default Home;
