import React, { ReactNode } from 'react';

interface Props {
  isLoading: boolean;
  newTodoForm: ReactNode;
  todos: ReactNode;
}

export const Layout: React.FC<Props> = ({ isLoading, newTodoForm, todos }) => {
  return (
    <div>
      <h1>Todo list</h1>
      {isLoading && <p>loading</p>}
      {newTodoForm}
      <div>{todos}</div>
    </div>
  );
};
