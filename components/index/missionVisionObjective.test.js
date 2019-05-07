import React from "react";
import MissionVisionObjective from "./missionVisionObjective";
import renderer from "react-test-renderer";

/*eslint-disable-next-line*/
test("Render MissionVisionObjective without crash", () => {
	const component = renderer.create(
		<MissionVisionObjective/>,
	);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot(); // eslint-disable-line
});
