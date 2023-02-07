import {
  CreateTodoDTO,
  UpdateTodoDTO,
  GetAllTodosDTO,
} from '@react-logic-share/types';
import { AxiosInstance } from 'axios';

export const createTodoApi = (httpClient: AxiosInstance) => ({
  create: async (data: CreateTodoDTO) => {
    await httpClient.post('/todo', data);
  },
  update: async (data: UpdateTodoDTO) => {
    await httpClient.put('/todo', data);
  },
  delete: async (id: string) => {
    await httpClient.delete(`/todo/${id}`);
  },
  getAll: async (): Promise<GetAllTodosDTO> => {
    const response = await httpClient.get<GetAllTodosDTO>('/todo/getAll');

    return response.data;
  },
});
