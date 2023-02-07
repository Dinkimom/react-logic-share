import { CreateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import { useNewTodoForm } from './hooks';

export interface Actions {
  createTodo: (data: CreateTodoDTO) => void;
}

interface Props {
  actions: Actions;
}

export const NewTodoForm: React.FC<Props> = ({ actions }) => {
  const {
    data: { register },
    handlers: { onSubmit },
  } = useNewTodoForm(actions);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" {...register('title')} />
      <button type="submit">Add</button>
    </form>
  );
};
