import React from 'react';
import { Layout } from './components/Layout';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoCard } from './components/TodoCard';
import { useTodo } from './hooks';

export const TodoList: React.FC = () => {
  const {
    models: { isLoading, todos },
    operations: { createTodo, updateTodo, deleteTodo },
  } = useTodo();

  return (
    <Layout
      isLoading={isLoading}
      newTodoForm={<NewTodoForm actions={{ createTodo }} />}
      todos={todos?.map((todo) => (
        <TodoCard todo={todo} actions={{ updateTodo, deleteTodo }} />
      ))}
    />
  );
};
