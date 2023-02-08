import { Todo, UpdateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import { Button, Switch, TextInput, View } from 'react-native';

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
    <View>
      <TextInput
        defaultValue={todo.title}
        onChangeText={(value) =>
          actions.updateTodo({ _id: todo._id, title: value })
        }
      />
      <Switch
        value={todo.isCompleted}
        onValueChange={() =>
          actions.updateTodo({ _id: todo._id, isCompleted: !todo.isCompleted })
        }
      />
      <Button onPress={() => actions.deleteTodo(todo._id)} title="Delete" />
    </View>
  );
};
