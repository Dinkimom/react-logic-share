import { CreateTodoDTO } from '@react-logic-share/types';
import { useForm } from 'react-hook-form';

export const useTodoForm = ({
  handleTodoCreate,
}: {
  handleTodoCreate: (data: CreateTodoDTO) => void;
}) => {
  const { register, handleSubmit, reset } = useForm<CreateTodoDTO>();

  const onSubmit = (data: CreateTodoDTO) => {
    handleTodoCreate(data);
    reset();
  };

  return {
    data: { register },
    handlers: { onSubmit: handleSubmit(onSubmit) },
  };
};
