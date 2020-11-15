import { render } from '@testing-library/react';
import { TodoList } from './';
import '@testing-library/jest-dom/extend-expect'
import TodoEntity from '../../models/Todo.entity';


describe('TodoList', () => {
    test('renders todos', () => {
        const todos = [new TodoEntity('id1', { text: 'Foo' }, 'author1', false, '2020-11-14'), new TodoEntity('id2', { text: 'Bar' }, 'author2', false, '2020-11-14')];
        const { container } = render(<TodoList todos={todos}/>)
        expect(container).toHaveTextContent('Foo')
        expect(container).toHaveTextContent('Bar')
    })
});
