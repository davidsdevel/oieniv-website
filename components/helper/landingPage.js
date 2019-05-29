import React from "react";

function GenerateExtendedTitleWithCamelCase({extendedTitle}) {
	const splittedInLetters = extendedTitle.split("");

	return splittedInLetters.map(e => {
		if (e === e.toUpperCase())
			return <b>{e}</b>

		return e;
	});
}

const LandingPage = ({minimizedTitle, extendedTitle, description, logoURL, backgroundURL}) => (
	<div>
		<h1>{minimizedTitle}</h1>
		<p><GenerateExtendedTitleWithCamelCase extendedTitle={extendedTitle}/></p>
	</div>
);

export default LandingPage;
