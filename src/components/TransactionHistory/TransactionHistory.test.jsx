import { render } from '@testing-library/react';
import React from 'react';
import TransactionHistory from './TransactionHistory';

describe('TransactionHistory', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<TransactionHistory {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TransactionHistory')).toBeTruthy();
    });
});
