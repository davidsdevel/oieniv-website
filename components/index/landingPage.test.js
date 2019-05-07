import React from "react";
import LandingPage from "./landingPage";
import renderer from "react-test-renderer";

/*eslint-disable-next-line*/
test("Render MissionVisionObjectiveChild without crash", () => {
	const component = renderer.create(
		<LandingPage/>
	);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot(); // eslint-disable-line
});