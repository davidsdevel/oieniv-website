import React from "react";
import Head from "Components/head";
import Nav from "Components/nav";
import {LandingPage, MissionVisionObjective} from "Components/index";

const Home = () => (
	<div>
		<Head title="OIENIV - Organizacion Cristiana en Venezuela" />
		<Nav />
		<LandingPage/>
		<MissionVisionObjective />
		<style jsx>{`
	`}</style>
	</div>
);

export default Home;
