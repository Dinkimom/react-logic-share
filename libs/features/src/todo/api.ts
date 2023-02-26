import {
  CreateTodoDTO,
  UpdateTodoDTO,
  GetAllTodosDTO,
} from '@react-logic-share/types';
import { AxiosInstance } from 'axios';

export interface TodoApi {
  create: (data: CreateTodoDTO) => Promise<void>;
  update: (data: UpdateTodoDTO) => Promise<GetAllTodosDTO>;
  delete: (id: string) => Promise<void>;
  getAll: () => Promise<GetAllTodosDTO>;
}

export const createTodoApi = (httpClient: AxiosInstance): TodoApi => ({
  create: async (data: CreateTodoDTO) => {
    await httpClient.post('/todo', data);
  },
  update: async (data: UpdateTodoDTO) => {
    const response = await httpClient.put<GetAllTodosDTO>('/todo', data);

    return response.data;
  },
  delete: async (id: string) => {
    await httpClient.delete(`/todo/${id}`);
  },
  getAll: async (): Promise<GetAllTodosDTO> => {
    const response = await httpClient.get<GetAllTodosDTO>('/todo/getAll');

    return response.data;
  },
});
