/*eslint-env jest*/
import React from "react";
import MissionVisionObjectiveChild from "./missionVisionObjectiveChild";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

describe("MissionVisionObjectiveChild with Enzyme", () => {
	it("render MissionVisionObjectiveChild without crash", () => {
		const wrapper = shallow(<MissionVisionObjectiveChild title="Mision" content="Hola Mundo" iconURL="https://someURL.com"/>);
	
		expect(wrapper.find("h2").text()).toEqual("Mision");
		expect(wrapper.find("p").text()).toEqual("Hola Mundo");
		expect(wrapper.find("img").prop("src")).toEqual("https://someURL.com");
	});
});

describe("MissionVisionObjectiveChild with Snapshot", () => {
	it("render MissionVisionObjectiveChild without crash", () => {
		const component = renderer.create(<MissionVisionObjectiveChild title="Mision" content="Hola Mundo" iconURL="https://someURL.com"/>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
