import React, { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  isLoading: boolean;
  newTodoForm: ReactNode;
  todos: ReactNode;
}

export const Layout: React.FC<Props> = ({ isLoading, newTodoForm, todos }) => {
  return (
    <S.Wrapper>
      {isLoading && <p>loading</p>}
      {newTodoForm}
      <S.List>{todos}</S.List>
    </S.Wrapper>
  );
};
