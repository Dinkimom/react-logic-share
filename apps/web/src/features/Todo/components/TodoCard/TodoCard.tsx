import { Todo, UpdateTodoDTO } from '@react-logic-share/types';
import React from 'react';

interface Actions {
  updateTodo: (data: UpdateTodoDTO) => void;
  deleteTodo: (id: string) => void;
}

interface Props {
  actions: Actions;
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ actions, todo }) => {
  return (
    <div>
      <input
        type="text"
        defaultValue={todo.title}
        onChange={(event) =>
          actions.updateTodo({ _id: todo._id, title: event.target.value })
        }
      />
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() =>
          actions.updateTodo({ _id: todo._id, isCompleted: !todo.isCompleted })
        }
      />
      <button onClick={() => actions.deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};
