import { Todo, UpdateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import * as S from './styled';

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
    <S.Wrapper>
      <S.Checkbox
        checked={todo.isCompleted}
        onChange={() =>
          actions.updateTodo({ _id: todo._id, isCompleted: !todo.isCompleted })
        }
      />
      <S.TitleInput
        disabled={todo.isCompleted}
        defaultValue={todo.title}
        $isCompleted={todo.isCompleted}
        onChange={(event) =>
          actions.updateTodo({ _id: todo._id, title: event.target.value })
        }
      />
      <S.DeleteButton onClick={() => actions.deleteTodo(todo._id)} />
    </S.Wrapper>
  );
};
