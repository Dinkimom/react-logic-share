import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  isLoading: boolean;
  newTodoForm: ReactNode;
  todos: ReactNode;
}

export const Layout: React.FC<Props> = ({ isLoading, newTodoForm, todos }) => {
  return (
    <View style={styles.wrapper}>
      {/* {isLoading && <Loader/>} */}
      {newTodoForm}
      <View>{todos}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
});
