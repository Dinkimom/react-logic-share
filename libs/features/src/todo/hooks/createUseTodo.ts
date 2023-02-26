import { useMutation, useQuery, useQueryClient } from 'react-query';
import { TodoApi } from '../api';
import { NotificationService } from '../types';

type Deps = {
  todoApi: TodoApi;
  notificationService: NotificationService;
};

export const createUseTodo =
  ({ todoApi, notificationService }: Deps) =>
  () => {
    const queryClient = useQueryClient();
    const { isLoading, data: todos } = useQuery('getAllTodos', todoApi.getAll);

    const createTodo = useMutation(todoApi.create, {
      onSuccess: () => {
        queryClient.invalidateQueries('getAllTodos');
      },
    });

    const updateTodo = useMutation(todoApi.update, {
      onSuccess: (updatedTodos) => {
        if (
          updatedTodos.length &&
          updatedTodos.every((todo) => todo.isCompleted)
        ) {
          notificationService.notify('Все задания выполнены!');
        }

        queryClient.invalidateQueries('getAllTodos');
      },
    });

    const deleteTodo = useMutation(todoApi.delete, {
      onSuccess: () => {
        queryClient.invalidateQueries('getAllTodos');
      },
    });

    return {
      models: { isLoading, todos },
      operations: {
        createTodo: createTodo.mutate,
        updateTodo: updateTodo.mutate,
        deleteTodo: deleteTodo.mutate,
      },
    };
  };
