import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createTodoApi } from '../api';

type Deps = {
  todoApi: ReturnType<typeof createTodoApi>; // todo add todoApi type
  // todo add more specific ui case, such like notification service or modal service
  // notificationService: NotificationService; // if you complete all the todos show success modal !!!
};

export const createUseTodo =
  ({ todoApi }: Deps) =>
  () => {
    const queryClient = useQueryClient();
    const { isLoading, data: todos } = useQuery('getAllTodos', todoApi.getAll);

    const createTodo = useMutation(todoApi.create, {
      onSuccess: () => {
        queryClient.invalidateQueries('getAllTodos');
      },
    });

    const updateTodo = useMutation(todoApi.update, {
      onSuccess: () => {
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
