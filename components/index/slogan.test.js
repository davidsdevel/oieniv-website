/* eslint-env jest */

import React from "react";
import Slogan from "./slogan";
import {shallow} from "enzyme";

import renderer from "react-test-renderer";

describe("Slogan with Enzyme", () => {
	it("render Slogan component without crash", () => {
		const wrapper = shallow(<Slogan />);
		expect(wrapper.find("h3").text()).toMatch("OIENIV");
		expect(wrapper.find("#slogan").text()).toMatch("Columna y Baluarte de la Verdad");
	});
});

describe("Slogan with Snapshot", () => {
	it("render Slogan without crash", () => {
		const component = renderer.create(<Slogan/>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
