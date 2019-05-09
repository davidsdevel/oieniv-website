/*eslint-env jest*/
import React from "react";
import ContactForm from "./contactForm";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

describe("ContactForm with Snapshot", () => {
	it("Render ContactForm without crash", () => {
		const component = renderer.create(<ContactForm/>);
		let tree = component.toJSON();
	
		expect(tree).toMatchSnapshot();
	});
});

describe("ContactForm with Enzyme", () => {
	it("Change state onFocus and onBlur textarea", () => {
		const wrapper = shallow(<ContactForm/>);
		const textarea = wrapper.find("textarea");

		expect(wrapper.state("textareaIsfocused")).toBeFalsy();

		textarea.simulate("focus");

		expect(wrapper.state("textareaIsfocused")).toBeTruthy();

		textarea.simulate("blur");

		expect(wrapper.state("textareaIsfocused")).toBeFalsy();
	});
});
