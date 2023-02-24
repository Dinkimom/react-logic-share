import { CreateTodoDTO } from '@react-logic-share/types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, StyleSheet, TextInput, View, Pressable } from 'react-native';
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
    <View style={styles.wrapper}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            placeholder="Введите текст заголовка..."
          />
        )}
        name="title"
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    borderRadius: 5,
    paddingLeft: 8,
    height: 40,
  },
  button: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
