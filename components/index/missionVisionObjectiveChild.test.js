// Link.react.test.js
import React from 'react';
import MissionVisionObjectiveChild from './missionVisionObjectiveChild';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <MissionVisionObjectiveChild title="Mision" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum" iconURL="https://someURL.com"/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});