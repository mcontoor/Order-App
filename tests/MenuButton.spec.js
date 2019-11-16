import React from 'react';
import MenuButton from '../components/MenuButton.js';

import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

let findElement = (tree, element) => {
    return tree.props.testID;
}

// test('renders correctly', () => {
//     const tree = renderer.create(<MenuButton />).toJSON();
//     expect(tree).toMatchSnapshot();
// });

it('find element', () => {
    let tree = renderer.create(<MenuButton />).toJSON();
    expect(findElement(tree, 'MenuButton')).toBeDefined();
});

describe('passingProps', () => {

    it('displays the passed in name', () => {
        const btnAction = jest.fn();
        const { queryByText, getByTestId } = render(
            <MenuButton data="Button" onPress={btnAction} />
        );

        fireEvent.press(getByTestId('MenuButton'));

        expect(queryByText('Button')).not.toBeNull();
        expect(btnAction).toHaveBeenCalledTimes(1);
    });
});