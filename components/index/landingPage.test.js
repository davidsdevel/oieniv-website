/* eslint-env jest */
import React from "react";
import LandingPage from "./landingPage";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("LandingPage With Enzyme", () => {
	it("render LandingPage component without crash", () => {
		const wrapper = shallow(<LandingPage/>);
		expect(wrapper.find("h1").text()).toEqual("OIENIV");
	});
});

describe("LandingPage With Snapshot", () => {
	it("render LandingPage component without crash", () => {
		const component = renderer.create(<LandingPage/>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});

