import React from 'react';
import ListScreen from '../screens/ListScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ListScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});