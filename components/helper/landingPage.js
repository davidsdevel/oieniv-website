import React from "react";

function GenerateExtendedTitleWithCamelCase({extendedTitle}) {
	const splittedInLetters = extendedTitle.split("");

	return splittedInLetters.map(e => {
		if (e === e.toUpperCase())
			return <b>{e}</b>

		return e;
	});
}

const LandingPage = ({title, extendedTitle, description, logoURL, backgroundURL}) => (
	<div id="main">
		<h1>{title}</h1>
		<p>
			<GenerateExtendedTitleWithCamelCase extendedTitle={extendedTitle}/>
		</p>
		<p>{description}</p>
		<img src={backgroundURL}/>
		<style jsx>{`
			#main {
				text-align: center;
			}
		`}</style>
	</div>
);

export default LandingPage;
