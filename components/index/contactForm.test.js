import React from "react";
import ContactForm from "./contactForm";
import renderer from "react-test-renderer";

/*eslint-disable-next-line*/
test("Render ContactForm without crash", () => {
	const component = renderer.create(
		<ContactForm/>,
	);
	let tree = component.toJSON();

	expect(tree).toMatchSnapshot(); // eslint-disable-line
});

