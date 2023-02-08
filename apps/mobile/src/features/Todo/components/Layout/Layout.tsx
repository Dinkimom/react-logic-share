import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  isLoading: boolean;
  newTodoForm: ReactNode;
  todos: ReactNode;
}

export const Layout: React.FC<Props> = ({ isLoading, newTodoForm, todos }) => {
  return (
    <View>
      <Text>Todo list</Text>
      {isLoading && <Text>loading</Text>}
      {newTodoForm}
      <View>{todos}</View>
    </View>
  );
};
