import React from "react";
import HelperBody from "./helperBody";
import renderer from "react-test-renderer";

/*eslint-disable-next-line*/
test("Render HelperBody without crash", () => {
	const component = renderer.create(
		<HelperBody name="Pronani" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" logoURL="/static/images/test-logo.png"/>
	);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot(); // eslint-disable-line
});
