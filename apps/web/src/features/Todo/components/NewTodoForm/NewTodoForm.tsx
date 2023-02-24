import { CreateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import { useNewTodoForm } from './hooks';
import * as S from './styled';

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
    <S.Form onSubmit={onSubmit}>
      <S.Input
        type="text"
        {...register('title')}
        placeholder="Введите заголовок задачи..."
      />
      <S.Button type="submit">Создать</S.Button>
    </S.Form>
  );
};
