import React from 'react';
import { useTodo, useTodoForm } from './hooks';

export const TodoList: React.FC = () => {
  const {
    models: { isLoading, todos },
    operations: { createTodo, updateTodo, deleteTodo },
  } = useTodo();
  const {
    data: { register },
    handlers: { onSubmit },
  } = useTodoForm({ handleTodoCreate: createTodo });

  return (
    <div>
      <h1>Todo list</h1>
      {isLoading && <p>loading</p>}
      <form onSubmit={onSubmit}>
        <input type="text" {...register('title')} />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() =>
                updateTodo({ _id: todo._id, isCompleted: !todo.isCompleted })
              }
            />
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
