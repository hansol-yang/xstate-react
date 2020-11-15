import { render } from '@testing-library/react';
import IndexPage from './';

import '@testing-library/jest-dom/extend-expect'

describe('IndexPage', () => {
    test('renders todo list', () => {
        const { container } = render(<IndexPage />);

        expect(container).toHaveTextContent('Foo');
    });
});
