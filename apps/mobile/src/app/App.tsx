/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { TodoList } from '../features/Todo';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TodoList />
        <Toast />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
