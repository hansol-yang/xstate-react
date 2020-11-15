import { render } from '@testing-library/react';
import App from './_app';
import IndexPage from './';

import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
    test('renders todo list', () => {
        const { queryByRole } = render(<App Component={IndexPage} />);

        expect(queryByRole('link')).toHaveTextContent('Login');
    });
});
