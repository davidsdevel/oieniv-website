/*eslint-env jest*/
import React from "react";
import HelperBodies from "./helperBodies";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

describe("HelperBodies with Enzyme", () => {
	it("render eight HelperBody component", () => {
		const wrapper = shallow(<HelperBodies/>);
	
		expect(wrapper.find("HelperBody")).toHaveLength(7);
	});
});

describe("HelperBodies with Snapshot", () => {
	it("render without crash", () => {
		const component = renderer.create(<HelperBodies/>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
