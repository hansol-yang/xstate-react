import { render } from '@testing-library/react';
import TodoEntity from '../../models/Todo.entity';
import { TodoItem } from './';
import '@testing-library/jest-dom/extend-expect';

describe('TodoItem', () => {
    const todo = new TodoEntity('id1', { text: 'Foo' }, 'author1', false, '2020-11-14');
    test('renders a todo', () => {
        const { container } = render(<TodoItem todo={todo} />);
        expect(container).toHaveTextContent('Foo');
    });
});
