import TodoEntity from '../../models/Todo.entity';
import { TodoItem } from '../TodoItem';

type Prop = {
    todos: TodoEntity[];
};
export function TodoList({ todos }: Prop) {
    const renderTodoItem = (todo: TodoEntity) => <TodoItem key={todo.id} todo={todo} />;
    return <div>{todos.map(renderTodoItem)}</div>;
}
