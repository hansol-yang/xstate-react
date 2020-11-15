import { AppShell } from './';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('AppShell', () => {
    test('renders login anchor', () => {
        const { getByRole } = render(<AppShell />);

        expect(getByRole('link')).toHaveTextContent('Login');
    });
});
