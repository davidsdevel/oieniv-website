import React from "react";
import Slogan from "./slogan";
import renderer from "react-test-renderer";

/*eslint-disable-next-line*/
test("Render Slogan without crash", () => {
	const component = renderer.create(
		<Slogan/>
	);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot(); // eslint-disable-line
});
