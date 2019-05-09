/*eslint-env jest*/
import React from "react";
import HelperBody from "./helperBody";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

describe("HelperBody with Enzyme", () => {
	it("Render HelperBody without crash", () => {
		const wrapper = shallow(<HelperBody name="Pronani" content="Hola Mundo" logoURL="/static/images/test-logo.png"/>);
	
		expect(wrapper.find("p").text()).toEqual("Hola Mundo");
		expect(wrapper.find("h4").text()).toEqual("Pronani");
		expect(wrapper.find("img").prop("src")).toEqual("/static/images/test-logo.png");
	});
});

describe("HelperBody with Snapshot", () => {
	it("Render HelperBody without crash", () => {
		const component = renderer.create(<HelperBody name="Pronani" content="Hola Mundo" logoURL="/static/images/test-logo.png"/>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
