import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TodoList } from '../features/Todo';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}

export default App;
