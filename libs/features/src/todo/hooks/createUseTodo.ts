import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTodoApi } from "../api";

type Deps = {
  todoApi: ReturnType<typeof createTodoApi>;
};

export const createUseTodo =
  ({ todoApi }: Deps) =>
  () => {
    const queryClient = useQueryClient();
    const { isLoading, data: todos } = useQuery("getAllTodos", todoApi.getAll);

    const createTodo = useMutation(todoApi.create, {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllTodos");
      }
    });

    const updateTodo = useMutation(todoApi.update, {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllTodos");
      }
    });

    const deleteTodo = useMutation(todoApi.delete, {
      onSuccess: () => {
        queryClient.invalidateQueries("getAllTodos");
      }
    });

    return {
      models: { isLoading, todos },
      operations: {
        createTodo: createTodo.mutate,
        updateTodo: updateTodo.mutate,
        deleteTodo: deleteTodo.mutate
      }
    };
  };
