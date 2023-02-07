import {
  CreateTodoDTO,
  GetAllTodosDTO,
  UpdateTodoDTO,
} from '@react-logic-share/types';
import { TodoModel } from '../models/Todo';

export const TodoController = {
  create: async (data: CreateTodoDTO) => {
    await TodoModel.create(data);
  },
  update: async ({ _id, ...data }: UpdateTodoDTO) => {
    await TodoModel.findByIdAndUpdate(_id, data);
  },
  delete: async (id: string) => {
    await TodoModel.findByIdAndDelete(id);
  },
  getAll: async (): Promise<GetAllTodosDTO> => {
    const todos = await TodoModel.find();

    return todos;
  },
};
