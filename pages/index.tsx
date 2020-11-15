import { TodoList } from '../components/TodoList';
import TodoEntity from '../models/Todo.entity';

export default function IndexPage() {
    const todos = [new TodoEntity('id1', { text: 'Foo' }, 'author1', false, '2020-11-14'), new TodoEntity('id2', { text: 'Bar' }, 'author2', false, '2020-11-14')];
    
    return (
        <div>
            <h3>Todo app with xstate</h3>
            <TodoList todos={todos}/>
        </div>
    )
}