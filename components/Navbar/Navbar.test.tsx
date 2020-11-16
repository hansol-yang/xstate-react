import { useRouter } from 'next/router';
import { Navbar } from './';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

jest.mock('next/router');

let pathname = '/';
const mockedUseRouter = useRouter as jest.Mock;
mockedUseRouter.mockImplementation(() => {
    return {
        pathname,
        push: jest.fn().mockImplementation((uri: string) => {
            pathname = uri;
            return Promise.resolve(true);
        }),
    };
});

describe('Navbar', () => {
    // Todo change spy function

    const loggedIn = false;

    test('invoke router.push, if not logged in', () => {
        const { getByRole } = render(<Navbar />);
        if (loggedIn) return;
        fireEvent.click(getByRole('button'));
        expect(useRouter().pathname).toBe('/auth/login');
    });

    test('invoke logout, if logged in', () => {
        const { getByRole } = render(<Navbar />);
        const mockLogout = jest.fn();

        if (!loggedIn) return;
        fireEvent.click(getByRole('button'));
        expect(mockLogout).toHaveBeenCalledTimes(1);
    });
});
