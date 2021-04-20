import { render } from '@testing-library/react';
import React from 'react';
import FriendList from './FriendList';

describe('FriendList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<FriendList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FriendList')).toBeTruthy();
    });
});
