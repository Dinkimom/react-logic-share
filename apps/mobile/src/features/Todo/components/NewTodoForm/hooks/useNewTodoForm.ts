import { CreateTodoDTO } from '@react-logic-share/types';
import { useForm } from 'react-hook-form';
import { Actions } from '../NewTodoForm';

export const useNewTodoForm = ({ createTodo }: Actions) => {
  const { register, handleSubmit, reset } = useForm<CreateTodoDTO>();

  const onSubmit = (data: CreateTodoDTO) => {
    createTodo(data);
    reset();
  };

  return {
    data: { register },
    handlers: { onSubmit: handleSubmit(onSubmit) },
  };
};
