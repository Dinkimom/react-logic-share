import { Todo, UpdateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Asset } from 'expo-asset';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DeleteIcon = Asset.fromModule(require('./DeleteIcon.png')).uri;

interface Actions {
  updateTodo: (data: UpdateTodoDTO) => void;
  deleteTodo: (id: string) => void;
}

interface Props {
  actions: Actions;
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ actions, todo }) => {
  return (
    <View style={styles.wrapper}>
      <Checkbox
        color="#000"
        value={todo.isCompleted}
        onValueChange={() =>
          actions.updateTodo({ _id: todo._id, isCompleted: !todo.isCompleted })
        }
        style={styles.checkbox}
      />
      <TextInput
        defaultValue={todo.title}
        onChangeText={(value) =>
          actions.updateTodo({ _id: todo._id, title: value })
        }
        style={[styles.input, todo.isCompleted && styles.completedText]}
        editable={!todo.isCompleted}
      />
      <Pressable onPress={() => actions.deleteTodo(todo._id)}>
        <Image source={{ uri: DeleteIcon, width: 12, height: 12 }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 1,
  },
  input: {
    fontSize: 18,
    marginHorizontal: 16,
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
