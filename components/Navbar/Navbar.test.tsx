import { useRouter } from 'next/router';
import { Navbar } from './';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router');

describe('Navbar', () => {
    let pathname = '/';
    const mockedRouter = useRouter as jest.Mock;
    const mockedPush = jest.fn();
    mockedPush.mockImplementationOnce((uri: string) => {
        pathname = uri;
        Promise.resolve(true);
    });
    mockedRouter.mockImplementation(() => ({
        pathname,
        push: mockedPush,
    }));

    test('renders login anchor', () => {
        const { getByRole } = render(<Navbar />);

        expect(getByRole('link')).toHaveTextContent('Login');
    });

    test('route to "/auth/login", if click login anchor', () => {
        const { container, getByText } = render(<Navbar />);

        fireEvent.click(getByText('Login'));

        expect(mockedPush).toHaveBeenCalledTimes(1);
        expect(useRouter().pathname).toBe('/auth/login');
    });
});
