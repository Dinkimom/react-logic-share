import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

interface Props {
  isLoading: boolean;
  newTodoForm: ReactNode;
  todos: ReactNode;
}

export const Layout: React.FC<Props> = ({ newTodoForm, todos }) => {
  return (
    <View style={styles.wrapper}>
      <View>{todos}</View>
      {newTodoForm}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    flexDirection: 'column',
    height: '100%',
  },
});
