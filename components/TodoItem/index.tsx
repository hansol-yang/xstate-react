import TodoEntity from '../../models/Todo.entity';

type Prop = {
    todo: TodoEntity;
};
export function TodoItem({ todo }: Prop) {
    return (
        <div>
            <span>{todo.textContents}</span>
            <span>{todo.author}</span>
        </div>
    );
}
