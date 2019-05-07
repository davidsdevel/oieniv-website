import React from "react";
import HelperBodies from "./helperBodies";
import renderer from "react-test-renderer";

/*eslint-disable-next-line*/
test("Render HelperBodies without crash", () => {
	const component = renderer.create(
		<HelperBodies/>
	);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot(); // eslint-disable-line
});
