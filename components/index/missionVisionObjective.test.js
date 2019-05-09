/*eslint-env jest*/
import React from "react";
import MissionVisionObjective from "./missionVisionObjective";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

describe("MissionVisionObjective with Enzyme", () => {

	it("render three MissionVisionObjectiveChild", () => {
		const wrapper = shallow(<MissionVisionObjective/>);

		expect(wrapper.find("MissionVisionObjectiveChild")).toHaveLength(3);
	});
});

describe("MissionVisionObjective with Snapshot", () => {
	it("render without crash", () => {
		const component = renderer.create(<MissionVisionObjective/>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
