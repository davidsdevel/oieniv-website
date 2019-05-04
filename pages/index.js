import React from "react";
import Link from "next/link";
import Head from "Components/head";
import Nav from "Components/nav";
import {LandingPage, MissionVisionObjective} from "Components/index";

const Home = () => (
	<div>
		<Head title="Home" />
		<Nav />
		<LandingPage/>
    <MissionVisionObjective />
		<style jsx>{`
    `}</style>
	</div>
);

export default Home;
