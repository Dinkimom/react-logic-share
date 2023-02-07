import React from "react";
import { useTodo } from "./useTodo";

export const TodoList: React.FC = () => {
  const {
    models: { isLoading, todos }
  } = useTodo();

  return (
    <div>
      <h1>Todo list</h1>
      {isLoading && <p>loading</p>}
      <div>
        {todos?.map((todo: any) => (
          <div>{todo.title}</div>
        ))}
      </div>
    </div>
  );
};
