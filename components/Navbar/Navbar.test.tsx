import { Navbar } from './';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const useRouter = jest.mock('next/router', () => {
    return {
        push: jest.fn()
    };
})

describe('Navbar', () => {
    test('renders login anchor', () => {
        const { getByRole } = render(<Navbar />);

        expect(getByRole('link')).toHaveTextContent('Login');
    });

    test('route to "/auth/login", if click login anchor', () => {
        const { container, getByText } = render(<Navbar />);

        
        fireEvent.click(getByText('Login'));
    });
});
