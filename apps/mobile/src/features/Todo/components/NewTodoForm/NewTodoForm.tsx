import { CreateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Button, TextInput, View } from 'react-native';
import { useNewTodoForm } from './hooks';

export interface Actions {
  createTodo: (data: CreateTodoDTO) => void;
}

interface Props {
  actions: Actions;
}

export const NewTodoForm: React.FC<Props> = ({ actions }) => {
  const {
    data: { control },
    handlers: { onSubmit },
  } = useNewTodoForm(actions);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="title"
      />
      <Button onPress={onSubmit} title="Add" />
    </View>
  );
};
