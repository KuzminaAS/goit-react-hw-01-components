import { render } from '@testing-library/react';
import React from 'react';
import FriendListItem from './FriendListItem';

describe('FriendListItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<FriendListItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FriendListItem')).toBeTruthy();
    });
});
