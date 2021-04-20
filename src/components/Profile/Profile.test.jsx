import { render } from '@testing-library/react';
import React from 'react';
import Profile from './Profile';

describe('Profile', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Profile {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Profile')).toBeTruthy();
    });
});
